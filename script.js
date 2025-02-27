const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=`;
const apiKey = `00f1e0eb0a6357d6675faa03cc625b27`;
const searchButton = document.querySelector(".btn");
const inputValue = document.querySelector("input");
const weatherIcon = document.querySelector(".weather-icon");
const error = document.querySelector(".error");
const cardElement = document.querySelector(".weather");

async function fetchWeatherData(city) {
  try {
    const response = await fetch(
      `${apiUrl}${city}&appid=${apiKey}&units=metric`
    );
    const weatherData = await response.json();
    document.querySelector(".temp").innerHTML =
      Math.round(weatherData.main.temp) + " °c";
    document.querySelector(".city").innerHTML = city;
    document.querySelector(
      ".humidity"
    ).innerHTML = `${weatherData.main.humidity} %`;
    document.querySelector(
      ".wind"
    ).innerHTML = `${weatherData.wind.speed} Km/h`;

    switch (weatherData.weather[0].main) {
      case "Clouds":
        weatherIcon.src = "images/clouds.png";
        break;
      case "Drizzle":
        weatherIcon.src = "images/drizzle.png";
        break;
      case "Mist":
        weatherIcon.src = "images/mist.png";
        break;
      case "Clear":
        weatherIcon.src = "images/clear.png";
        break;
      case "Rain":
        weatherIcon.src = "images/rain.png";
        break;
      default:
        weatherIcon.src = "images/snow.png";
        break;
    }
    error.style.display = "none";
    cardElement.style.display = "block";
  } catch (e) {
    error.style.display = "block";
    cardElement.style.display = "none";
  }
}

searchButton.addEventListener("click", () => {
  fetchWeatherData(inputValue.value);
});

inputValue.addEventListener("keypress", (event) => {
  if (event.key === "Enter") {
    event.preventDefault();
    fetchWeatherData(inputValue.value);
  }
});
