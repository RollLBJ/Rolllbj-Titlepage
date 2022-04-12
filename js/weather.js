function onGeoOk(position) {
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;
  console.log('you live in', lat, lon);
  const API_key = '6638be6b8703ce64b1915220dfca65e8';
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_key}&units=metric`;
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      const weather = document.querySelector('#weather span:first-child');
      const city = document.querySelector('#weather span:last-child');
      weather.innerText = data.name;
      city.innerText = `${data.weather[0].main} / ${data.main.temp}`;
    });
}
function onGeoError() {
  alert('주소 접근을 허용해주세요');
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);
