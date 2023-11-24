async function getWeather() {
    const apiKey = '53616ea84b67432c94b2413566f41010';
    const city = document.getElementById('cityInput').value;
    const country = document.getElementById('countryInput').value;

    try {
        const response = await fetch(`http://localhost:3000/weather?city=${city}&country=${country}&apiKey=${apiKey}`);
        const data = await response.json();

        const resultElement = document.getElementById('weatherResult');
        resultElement.innerHTML = `
            <p>Previsão do Tempo para ${city}, ${country}</p>
            <p>Temperatura: ${data.temperature}°C</p>
            <p>Umidade do ar: ${data.humidity}%</p>
            <p>Velocidade do Vento: ${data.windSpeed.toFixed(2)} km/h</p>
            <p>Chance de Chuva: ${data.rainChance}%</p>
        `;
    } catch (error) {
        console.error('Erro ao obter dados de previsão do tempo:', error.message);
        alert('Erro ao obter dados de previsão do tempo.');
    }
}
