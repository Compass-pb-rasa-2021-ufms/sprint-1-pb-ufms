const city = document.querySelector('.input_text');
const btn = document.querySelector('.btn');
const key ="37bcf1a1835ab035f7ab707f913edd65";

const city_input = document.querySelector('.city_inputText');
const temperature_input = document.querySelector('.temperature_input');
const minTemperature_input = document.querySelector('.min_temp');
const maxTemperature_input = document.querySelector('.max_temp');
const weather_situation = document.querySelector('.weather_situation');
const image = document.querySelector('image');
const feels_like = document.querySelector('.feels_like');
const wind_speed = document.querySelector('.wind_speed');
const humidity = document.querySelector('.humidity');

btn.addEventListener('click',function(){
    fetch('https://api.openweathermap.org/data/2.5/weather?q='+city.value+'&units=metric&appid='+key+'&lang=pt_br')
    .then(response => response.json())
    .then(data =>{
        const cityValue = data['name'];
        const temperatureValue = data['main']['temp'];
        const weatherSituationValue = data['weather'][0]['description'];
        const minTemperatureValue = data['main']['temp_min'];
        const maxTemperatureValue = data['main']['temp_max'];
        const feelsLikeValue = data['main']['feels_like'];
        const windSpeedValue = data['wind']['speed'];
        const humidityValue = data['main']['humidity'];

        document.getElementById("image").src='https://openweathermap.org/img/w/'+data.weather[0].icon+'.png';
        city_inputText.innerHTML = cityValue;
        temperature_input.innerHTML = temperatureValue +"ºC";
        weather_situation.innerHTML = weatherSituationValue.toUpperCase();
        min_temp.innerHTML = "Temperatura Minima: " + minTemperatureValue + "ºC";
        max_temp.innerHTML = "Temperatura Maxima: " + maxTemperatureValue + "ºC";
        feels_like.innerHTML = "Sensação Térmica: " + feelsLikeValue +"ºC";
        wind_speed.innerHTML = "Vento: " + windSpeedValue +"km/h";
        humidity.innerHTML = "Umidade: " + humidityValue +"%";
    })
.catch(err => alert("Insira uma cidade válida!"))
})