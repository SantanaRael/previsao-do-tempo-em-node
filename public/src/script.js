const apiKey = 'MINHA-KEY'; //pegar key em https://home.openweathermap.org/api_keys

getFixed()

async function getFixed(){
    getEua()
    getParis()
    getLondres()
    getDubai()
}

async function getEua(){
    const response = await fetch(`http://localhost:3000/weather?city=nova iorque&country=estados unidos&apiKey=${apiKey}`);
    const data = await response.json();

    const temp_eua = document.querySelector("#temp-eua") 
    temp_eua.innerHTML = `${data.temperature.toFixed()}°C`
}

async function getParis(){
    const response = await fetch(`http://localhost:3000/weather?city=paris&country=franca&apiKey=${apiKey}`);
    const data = await response.json();

    const temp_paris = document.querySelector("#temp-paris") 
    temp_paris.innerHTML = `${data.temperature.toFixed()}°C`
}

async function getLondres(){
    const response = await fetch(`http://localhost:3000/weather?city=londres&country=reino unido&apiKey=${apiKey}`);
    const data = await response.json();

    const temp_londres = document.querySelector("#temp-londres") 
    temp_londres.innerHTML = `${data.temperature.toFixed()}°C`
}


async function getDubai(){
    const response = await fetch(`http://localhost:3000/weather?city=dubai&country=emirados arebes&apiKey=${apiKey}`);
    const data = await response.json();

    const temp_dubai = document.querySelector("#temp-dubai") 
    temp_dubai.innerHTML = `${data.temperature.toFixed()}°C`
}


let weatherResult = document.querySelector("#weatherResult");
let home = document.querySelector(".home");

async function getWeather() {
    const city = document.getElementById('cityInput').value;
    const country = document.getElementById('countryInput').value;

    try {
        const response = await fetch(`http://localhost:3000/weather?city=${city}&country=${country}&apiKey=${apiKey}`);
        const data = await response.json();

        const cidade = document.querySelector("#city")
        const temperatura = document.querySelector("#temperatura")
        const umidade = document.querySelector("#umidade")
        const velvento = document.querySelector("#velvento")
        const chance = document.querySelector("#chance")


        cidade.innerHTML = `${city}, ${country}`
        temperatura.innerHTML = `${data.temperature.toFixed()}°C`
        umidade.innerHTML = `Umidade do ar: ${data.humidity.toFixed()}%`
        velvento.innerHTML = `Velocidade do Vento: ${data.windSpeed.toFixed()} km/h`
        chance.innerHTML = `Chance de Chuva: ${data.rainChance.toFixed()}%`

        
    } catch (error) {
        console.error('Erro ao obter dados de previsão do tempo:', error.message);
        alert('Erro ao obter dados de previsão do tempo.');
    }
}



function getDetails() {
    getWeather()
	home.style.display = "none";
	weatherResult.style.display = "block";
    
}

function getHome() {
	home.style.display = "block";
	weatherResult.style.display = "none";
}
