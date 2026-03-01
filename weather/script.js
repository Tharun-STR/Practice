const API_KEY ="bbfa9f1eea01893f4719b0749b480cc4"

const cityInput = document.getElementById("cityInput");
const searchBtn = document.getElementById("searchBtn");

async function checkWeather(){
    const city=cityInput.value.trim();

    if(city===""){
        alert("Please enter a city name");
        return;
    }
    const apiurl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${API_KEY}`;
    const response=await fetch(apiurl);
    var data=await response.json();

    if (data.cod!==200){
        alert("City not found!");
        return;
    }

    console.log(data);

    document.getElementById("city").innerHTML=data.name;
    document.getElementById("temp").innerHTML=Math.round(data.main.temp)+"°C";
    document.getElementById("humidity").innerHTML=data.main.humidity+"%";
    document.getElementById("wind").innerHTML=data.wind.speed+"km/h";

}
 searchBtn.addEventListener("click",checkWeather);