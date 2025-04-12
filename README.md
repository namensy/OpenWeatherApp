# OpenWeatherApp 🌤️

A beautiful and responsive weather application that provides real-time weather information for any city worldwide. Built with HTML, CSS, and JavaScript, this app uses the OpenWeatherMap API to fetch weather data.

## Features ✨

- Real-time weather information
- Search functionality for any city
- Beautiful UI with gradient background
- Responsive design that works on all devices
- Weather icons for different conditions
- Displays:
  - Current temperature
  - City name
  - Humidity percentage
  - Wind speed
  - Weather condition icons

## Technologies Used 🛠️

- HTML5
- CSS3
- JavaScript (ES6+)
- OpenWeatherMap API

## Setup Instructions 📋

1. Clone this repository:
```bash
git clone [your-repository-url]
```

2. Get your API key from [OpenWeatherMap](https://openweathermap.org/api)

3. Replace the API key in `script.js`:
```javascript
const apiKey = 'YOUR_API_KEY';
```

4. Open `index.html` in your web browser

## Project Structure 📁

```
OpenWeatherApp/
├── index.html
├── style.css
├── script.js
└── images/
    ├── clear.png
    ├── clouds.png
    ├── drizzle.png
    ├── humidity.png
    ├── mist.png
    ├── rain.png
    ├── search.png
    ├── snow.png
    └── wind.png
```

## Usage 🚀

1. Enter a city name in the search box
2. Click the search button or press Enter
3. View the current weather information for that city

## Error Handling ⚠️

- The app displays an error message if an invalid city name is entered
- Error handling for API requests is implemented

## Contributing 🤝

Feel free to submit issues and enhancement requests!

## License 📄

This project is open source and available under the [MIT License](LICENSE).

## Credits 🙏

- Weather icons from [OpenWeatherMap](https://openweathermap.org/)
- API provided by [OpenWeatherMap](https://openweathermap.org/api) 