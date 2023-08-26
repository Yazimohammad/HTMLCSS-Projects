const Apikeys = "0060d86e5431742453c156c4ce8cca3c"

const weatherdataEl = document.getElementById("weather-data");

const cityInputEl = document.getElementById("city-input")

const formEl = document.querySelector("form")

formEl.addEventListener("submit" , (event)=>{
event.preventDefault();
const cityValue = cityInputEl.value
getWeatherData(cityValue)

}
)

 async function getWeatherData(cityValue){
    try {
const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?
q=${cityValue}&appid = ${Apikeys}&units = metric`);

if (!response.ok){
    throw new Error(" Network response was not ok")
}
const data = await response.json();
const temperature = Math.round(data.main.temp)
const discription = data.weather [0].discription
const icon = data.icon[0].icon
const details = [
    `Feels Like : ${Math.round(data.main.feels_like)}`,
    `Humidity: ${data.main.humidity}`,
    `wind speed: ${data.wind.speed}`
]

weatherdataEl.querySelector(".icon").innerHTML= `<img src="http://openweathermap.org/img/wn/${icon}.png" alt="weathe App">`


weatherdataEl.querySelector(".tepmperature").textContent = `${temperature}°C`;
weatherdataEl.querySelector(".discription").textContent = discription
weatherdataEl.querySelector(".details").innerHTML = details.map(
    (detail)=>`<div>${detail}</div>`).join("");

    } catch (error) {

    }
}