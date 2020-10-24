const api ={
    key: "856c8252f2e2bf1bf60c5ee8bf0df557",
    base: "https://api.openweathermap.org/data/2.5/"
}

const searchBox = document.querySelector('.search-box');
searchBox.addEventListener("keypress", setQuery);

function setQuery(evt) {
    if (evt.keyCode == 13) {
        getResults(searchBox.value);
    }
}

function getResults(query) {
    fetch(`${api.base}weather?q=${query}&units=metric&APPID=${api.key}`)
    .then(weather =>{
        return weather.json();
    }).then(displayResults);
}

function displayResults(weather){
    console.log(weather);
    let city = document.querySelector('.location .city');
    city.innerText = `${weather.name}, ${weather.sys.country}`;
}