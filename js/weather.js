function onGeoOk(position) {
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;
  console.log('you live in', lat, lon);
  const API_key = '6638be6b8703ce64b1915220dfca65e8';
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_key}&units=metric`;
  // const icons = {
  //   sunny: '<i class="fa-solid fa-sun fa-3x"></i>',
  //   Clouds: '<i class="fa-solid fa-cloud fa-3x"></i>',
  // };
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      const weather = document.querySelector('#weather .weather-location');
      const city = document.querySelector('#weather .weather-data');
      const iconQuery = document.querySelector('#weather .weather-icon');
      weather.innerText = data.name;
      city.innerText = `${data.weather[0].main} / ${data.main.temp}`;
      // iconQuery.innerHTML = icons[data.weather[0].main];
      const iconURL = `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
      iconQuery.innerHTML = `<img src="${iconURL}" alt="weatherIcon">`;
    });
}
function onGeoError() {
  alert('주소 접근을 허용해주세요');
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);
