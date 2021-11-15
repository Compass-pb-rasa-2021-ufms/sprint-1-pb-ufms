
document.getElementById("buscar").addEventListener('click',  async () => {
  const location = document.getElementById("search").value;
  const measure = document.getElementById("units").value;   
  const key = '6b2e9988c3c2678e63f45e20c861df5d';
  const temp = measure === 'm' ? 'C' : 'F';

  const response = await fetch("http://api.weatherstack.com/current?access_key="+key+"&query="+location+"&units="+measure)
  const data = await response.json()

  document.getElementById("image").src=data.current.weather_icons[0];
  document.getElementById("city_inputText").innerHTML = location.toUpperCase();
  document.getElementById("temperature_input").innerHTML = data.current.temperature+"º"+ temp;
  document.getElementById("weather_situation").innerHTML = data.current.weather_descriptions[0];
  document.getElementById("feels_like").innerHTML = "Sensação Térmica: " + data.current.feelslike+"º"+ temp;
  document.getElementById("wind_speed").innerHTML = "Vento: "+ data.current.wind_speed+"km/h";
  document.getElementById("humidity").innerHTML = "Umidade: " + data.current.humidity+"%";
  
})