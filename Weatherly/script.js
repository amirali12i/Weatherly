document.getElementById('get-weather').addEventListener('click', () => {
  const city = document.getElementById('city').value;
  const apiKey = 'b5c4c81714db595d77a240f98400a638';  // Replace with your OpenWeatherMap API key
  const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;

  fetch(apiUrl)
      .then(response => response.json())
      .then(data => {
          if (data.cod === 200) {
              document.getElementById('weather-info').classList.remove('hidden');
              document.getElementById('city-name').innerText = data.name;
              document.getElementById('temperature').innerText = `Temperature: ${data.main.temp}°C`;
              document.getElementById('conditions').innerText = `Conditions: ${data.weather[0].description}`;
              document.getElementById('weather-icon').src = `http://openweathermap.org/img/wn/${data.weather[0].icon}.png`;
          } else {
              alert('City not found');
          }
      })
      .catch(error => console.error('Error fetching the weather data:', error));
});
