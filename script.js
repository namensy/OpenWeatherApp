const apikey = "00f1e0eb0a6357d6675faa03cc625b27";
const apiUrl =
  "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");

console.log(weatherIcon?.src);

async function checkWeather(city) {
  try {
    const response = await fetch(apiUrl + city + `&appid=${apikey}`);
    const data = await response.json();

    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML =
      Math.round(data.main.temp) + ` °c`;
    document.querySelector(".humidity").innerHTML = data.main.humidity + ` %`;
    document.querySelector(".wind").innerHTML = data.wind.speed + ` km/h`;
    switch (data.weather[0].main) {
      case "Clouds":
        {
          weatherIcon.src = "/images/clouds.png";
        }
        break;
      case "Clear":
        {
          weatherIcon.src = "/images/clear.png";
        }
        break;
      case "Rain":
        {
          weatherIcon.src = "/images/rain.png";
        }
        break;
      case "Drizzle":
        {
          weatherIcon.src = "/images/drizzle.png";
        }
        break;
      default: {
        weatherIcon.src = "/images/mist.png";
      }
    }
    document.querySelector(".weather").style.display = "block";
    document.querySelector(".error").style.display = "none";
  } catch (error) {
    document.querySelector(".error").style.display = "block";
    document.querySelector(".weather").style.display = "none";
  }
}

searchBtn.addEventListener("click", () => {
  checkWeather(searchBox.value);
});
