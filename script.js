const apiKey = "0ba1fc466bbb1e9e8ecb83e23fbc1d51";
const url = "https://api.openweathermap.org/data/2.5/weather?units=metric";

async function weatherDetail(cityName) {
    console.log(`Fetching weather data for: ${cityName}`);
    try {
        const response = await fetch(`${url}&appid=${apiKey}&q=${cityName}`);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.error('Error fetching weather data:', error);
    }
}

document.getElementById("search-button").addEventListener('click', () => {
    const cityName = document.getElementById("city-input").value;
    weatherDetail(cityName);
});
