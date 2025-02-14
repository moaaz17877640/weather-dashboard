

# 🌦️ EcoWeather

Welcome to EcoWeather, your go-to destination for accurate and reliable weather forecasts! 🌍

## 📝 About

EcoWeather provides up-to-date weather forecasts for locations worldwide. Whether you're planning a trip, organizing an outdoor event, or simply want to stay informed about the weather in your area, EcoWeather has you covered.

## ✨ Features

- **Accurate Forecasts:** Get precise weather forecasts for any location.
- **Interactive Interface:** Navigate easily through the intuitive user interface.
- **Customizable Units:** Choose between metric and imperial units for temperature, wind speed, and more.
- **Geolocation Support:** Find weather forecasts for your current location with just one click.
- **Daily and Hourly Forecasts:** Access both daily and hourly weather forecasts to plan your day effectively.

## 💻 Technologies Used

EcoWeather is built using modern web technologies including:

- React.js
- OpenWeatherMap API
- GeoDB API

## 🚀 Installation

To run EcoWeather locally, follow these steps:

1. Clone the repository: `git clone https://github.com/moaaz17877640/weather-dashboard.git`
2. Install dependencies: `npm install`
3. Start the development server: `npm start`
4. Open `http://localhost:3000` in your web browser.

## 🐳 Docker Support

You can also run EcoWeather using Docker. Follow these steps:

### 1. Build the Docker Image
Navigate to the project directory and build the Docker image:
```bash
docker build -t eco-weather .
```

### 2. Run the Docker Container
Start the container using the following command:
```bash
docker run -it -p 3000:3000 eco-weather
```

- The app will be accessible at `http://localhost:3000`.

### 3. Docker Compose (Optional)
If you prefer using Docker Compose, create a `docker-compose.yml` file:
```yaml
version: '3.8'
services:
  eco-weather:
    image: eco-weather
    build: .
    ports:
      - "3000:3000"
```

Then, run the following command:
```bash
docker-compose up
```

---

## 🤝 Contributing

Contributions to EcoWeather are welcome! If you find any bugs or have suggestions for new features, please open an issue or submit a pull request.

## 📄 License

This project is licensed under the [MIT License](LICENSE).
