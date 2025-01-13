const button = document.querySelector(".button");

button.addEventListener("click", () => {
  navigator.geolocation.getCurrentPosition(success, fail);
});

const fail = () => {
  alert("좌표를 받아올 수 없음");
};

const API_KEY = "cc1d075e368da2fed566cc980a415773";

function success(position) {
  const latitude = position.coords.latitude;
  const longitude = position.coords.longitude;

  getWeather(latitude, longitude);
}

const getWeather = (lat, lon) => {
  fetch(
    `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric&lang=kr`
  )
    .then((response) => {
      return response.json();
    })

    .catch((error) => {
      alert(error);
    })

    .then((json) => {
      const temperature = json.main.temp;
      const location = json.name;
      const description = json.weather[0].description;

      tempSection.innerText = temperature;
      placeSection.innerText = location;
      descSection.innerText = description;
    });
};
