document.addEventListener('DOMContentLoaded', () => {
    const apiKey = "0ba1fc466bbb1e9e8ecb83e23fbc1d51";
    const url = "https://api.openweathermap.org/data/2.5/weather?units=metric";

    async function weatherDetail(cityName) {
        try {
            const response = await fetch(`${url}&appid=${apiKey}&q=${cityName}`);
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            const data = await response.json();
            updateUI(data);
        } catch (error) {
            console.error('Error fetching weather data:', error);
        }
    }

    document.getElementById("search-button").addEventListener('click', () => {
        const cityName = document.getElementById("city-input").value;
        if (cityName) {
            weatherDetail(cityName);
        } else {
            console.log('No city name entered');
        }
    });

    function updateUI(data) {
        document.querySelector('#weather-icon').src = `https://openweathermap.org/img/wn/${data.weather[0].icon}.png`;
        document.querySelector('#city-name').textContent = data.name;
        document.querySelector('#city-temp').textContent = `${Math.round(data.main.temp)}°C`;
        document.querySelector('.wind-speed').textContent = `${data.wind.speed} m/s`;
        document.querySelector('.humidity-value').textContent = `${data.main.humidity}%`;
    }
});
