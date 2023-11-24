const express = require('express');
const cors = require("cors");
const axios = require('axios');

const app = express();
const PORT = process.env.PORT || 3000;
const apiKey = 'MINHA-CHAVE'; //pegar key em https://home.openweathermap.org/api_keys

app.use(cors());

app.listen(PORT, () => {
  console.log(`Servidor funcionando na porta ${PORT} 🔥`);
});

app.get('/weather', async (req, res) => {
  const { city, country } = req.query;

  if (!city || !country) {
    return res.status(400).json({ error: 'Informe cidade e país na consulta.' });
  }

  try {
    const response = await axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${apiKey}&units=metric`);
    const weatherData = response.data;

    const temperature = weatherData.main.temp;
    const humidity = weatherData.main.humidity;
    const windSpeed = weatherData.wind.speed * 3.6; // Convertendo para km/h
    const rainChance = weatherData.rain ? (weatherData.rain['1h'] || 0) : 0; // Chance de chuva em 1 hora

    res.json({ temperature, humidity, windSpeed, rainChance });
  } catch (error) {
    console.error('Erro ao obter dados de previsão do tempo:', error.message);
    res.status(500).json({ error: 'Erro ao obter dados de previsão do tempo' });
  }
});
