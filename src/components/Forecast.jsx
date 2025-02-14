import { DateTime } from "luxon";

function Forecast({ data, units }) {
  const formatToLocalTime = (unixTimestamp, timezone) => {
    const unixMilliseconds = unixTimestamp * 1000;
    const dateTime = DateTime.fromMillis(unixMilliseconds).setZone(timezone);
    // Format the time in 12-hour format with AM/PM indication without seconds
    const formattedTime = dateTime.toFormat("hh:mm a");
    // Format the date as "Today" if it's the current day or as "EEE, dd" for other days
    const today = DateTime.now().setZone(timezone).startOf("day");
    const formattedDate = dateTime.hasSame(today, "day")
      ? "Today"
      : dateTime.toFormat("EEE, dd");
    return { formattedTime, formattedDate };
  };

  const tempUnit = units === "metric" ? "°C" : "°F";

  return (
    <div>
      <div className="flex items-center justify-start my-2">
        <p className="text-white font-medium">Daily Forecast</p>
      </div>
      <hr className="my-1" />

      <div className="flex flex-row flex-wrap items-center justify-between text-white">
        {data.list.slice(0, 12).map((item, idx) => {
          const { formattedTime, formattedDate } = formatToLocalTime(
            item.dt,
            data.city.timezone
          );
          return (
            <div
              className="flex flex-col items-center justify-center m-2 "
              key={idx}
            >
              <p className="font-light text-xs mb-1">{formattedDate}</p>
              <p className="font-light text-sm">{formattedTime}</p>
              <img
                src={`https://openweathermap.org/img/wn/${item.weather[0].icon}@2x.png`}
                alt="weather_condition_icon"
                className="w-12 my-1"
              />
              <p className="font-medium">
                {Math.round(item.main.temp)}
                {tempUnit}
              </p>
            </div>
          );
        })}
      </div>
      <hr className="my-2" />
    </div>
  );
}

export default Forecast;
