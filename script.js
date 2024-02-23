const apiKey = "adf359f7bd3a35df949e5f3c9883f7d1";
const apiUrl =
  "https://api.openweathermap.org/data/2.5/weather?units=metric&lang=pt_br&q=";

const searchBox = document.querySelector(".search-field input");
const searchBtn = document.querySelector(".search-field button");
const weatherIcon = document.querySelector(".weather-icon");

async function checkWeather(city) {
  const response = await fetch(apiUrl + city + `&appid=${apiKey}`);

  if (response.status == 404) {
    document.querySelector(".error").style.display = "block";
    document.querySelector(".weather").style.display = "none";
  } else {
    let data = await response.json();

    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".degrees-text").innerHTML = `${Math.round(
      data.main.temp
    )}°C`;
    document.querySelector(
      ".humidity-percentage"
    ).innerHTML = `${data.main.humidity}%`;
    document.querySelector(".wind-speed").innerHTML = `${data.wind.speed}Km/h`;

    if (data.weather[0].main == "Clouds") {
      weatherIcon.src = "assets/images/clouds.png";
    } else if (data.weather[0].main == "Clear") {
      weatherIcon.src = "assets/images/clouds.png";
    } else if (data.weather[0].main == "Drizzle") {
      weatherIcon.src = "asstes/images/drizzle.png";
    } else if (data.weather[0].main == "Rain") {
      weatherIcon.src = "assets/images/rain.png";
    } else if (data.weather[0].main == "Mist") {
      weatherIcon.src = "assets/images/mist.png";
    } else if (data.weather[0].main == "Snow") {
      weatherIcon.src = "assets/images/snow.png";
    }

    document.querySelector(".weather").style.display = "block";
    document.querySelector(".error").style.display = "none";
  }
}

searchBtn.addEventListener("click", () => {
  checkWeather(searchBox.value);
});
