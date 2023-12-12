const apiKey = 'MINHA_KEY';

// Elementos HTML para a tela de carregamento
const loadingScreen = document.querySelector("#loadingScreen");

// Mostra a tela de carregamento
function showLoading() {
  loadingScreen.style.display = "flex";
}

// Oculta a tela de carregamento
function hideLoading() {

    setTimeout(() => {
        loadingScreen.style.display = "none";
      }, 450);
}

getFixed()
async function getFixed() {
  showLoading();
  getEua();
  getParis();
  getLondres();
  getDubai();
  hideLoading();
}

async function getEua() {
  const response = await fetch(`http://localhost:3000/weather?city=nova iorque&country=estados unidos&apiKey=${apiKey}`);
  const data = await response.json();
  const tempEua = document.querySelector("#temp-eua");
  tempEua.innerHTML = `${data.temperature.toFixed()}°C`;
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


async function getWeather() {
  showLoading();
  const city = document.getElementById('cityInput').value;
  const country = document.getElementById('countryInput').value;

  try {
    const response = await fetch(`http://localhost:3000/weather?city=${city}&country=${country}&apiKey=${apiKey}`);
    const data = await response.json();

    const cidade = document.querySelector("#city");
    const temperatura = document.querySelector("#temperatura");
    const umidade = document.querySelector("#umidade");
    const velvento = document.querySelector("#velvento");
    const chance = document.querySelector("#chance");

    cidade.innerHTML = `${city}, ${country}`;
    temperatura.innerHTML = `${data.temperature.toFixed()}°C`;
    umidade.innerHTML = `Umidade do ar: ${data.humidity.toFixed()}%`;
    velvento.innerHTML = `Velocidade do Vento: ${data.windSpeed.toFixed()} km/h`;
    chance.innerHTML = `Chance de Chuva: ${data.rainChance.toFixed()}%`;

    hideLoading();
    return data.weatherCondition;
  } catch (error) {
    console.error('Erro ao obter dados de previsão do tempo:', error.message);
    alert('Erro ao obter dados de previsão do tempo.');
    hideLoading();
  }
}

let weatherResult = document.querySelector("#weatherResult");
let home = document.querySelector(".home");

// A função getDetails agora usa await para esperar pela conclusão da função getWeather
async function getDetails() {
  await getCondition();
  await getWeather();
  home.style.display = "none";
  weatherResult.style.display = "block";
}



function getHome() {
	home.style.display = "block";
	weatherResult.style.display = "none";
}

function getCondition(){
    let ensolarado = "<i class='bx bx-sun' style='color:#ffffff'></i>"
    let chuva = "<i class='bx bx-cloud-light-rain' style='color:#ffffff'></i>"
    let trovoada = "<i class='bx bx-cloud-lightning'></i>"
    let nuvem = "<i class='bx bx-cloud'></i>"

    let svg = document.querySelector(".svg")

    getWeather().then(weatherCondition => {
        switch (weatherCondition) {
            case "broken clouds":
            case "few clouds":
            case "scattered clouds":
            case "overcast clouds":
              svg.innerHTML = nuvem;
              break;
          
            case "clear sky":
              svg.innerHTML = ensolarado;
              break;
          
            case "light rain":
            case "moderate rain":
            case "heavy intensity rain":
            case "very heavy rain":
            case "extreme rain":
            case "freezing rain":
            case "light intensity shower rain":
            case "shower rain":
            case "heavy intensity shower rain":
            case "ragged shower rain":
              svg.innerHTML = chuva;
              break;
          
            case "thunderstorm with light rain":
            case "thunderstorm with rain":
            case "thunderstorm with heavy rain":
            case "light thunderstorm":
            case "thunderstorm":
            case "heavy thunderstorm":
            case "ragged thunderstorm":
            case "thunderstorm with light drizzle":
            case "thunderstorm with drizzle":
            case "thunderstorm with heavy drizzle":
              svg.innerHTML = trovoada;
              break;
          
            default:
              svg.innerHTML = ensolarado;
          }
          
      });
}



