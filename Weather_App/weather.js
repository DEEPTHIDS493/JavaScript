const weatherform = document.querySelector(".weatherform");
const cityinput = document.querySelector(".cityinput");
const card = document.querySelector(".card");
const apikey = "557572110aebf22185577d1e1140eeca";

weatherform.addEventListener("submit", async event => {
    event.preventDefault();
    const city = cityinput.value;
    if(city){
        try{
            const weatherdata = await getweatherData(city);
            displayweatherInfo(weatherdata);
        } catch(error) {
            console.error(error);
            displayError(error);
        }
    } else {
        displayError("Please enter a city");
    }
});

async function getweatherData(city) {
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apikey}`;
    const response = await fetch(apiUrl);
    if (!response.ok) {
        throw new Error("Could not fetch weather data");  // Fixed capitalization
    }
    return await response.json();
}

function displayweatherInfo(data) {
    console.log(data);
    const { name: city, main: { temp, humidity }, weather: [{ description, id }] } = data;
    card.textContent = "";
    card.style.display = "flex";

    const citydisplay = document.createElement("h1");
    const tempdisplay = document.createElement("h1");
    const humiditydisplay = document.createElement("h1");
    const descdisplay = document.createElement("h1");
    const weatheremoji = document.createElement("h1");

    citydisplay.textContent = city;
    tempdisplay.textContent = `${(temp - 273.15).toFixed(1)} °C`;
    humiditydisplay.textContent = `Humidity: ${humidity}%`;
    descdisplay.textContent = description;
    weatheremoji.textContent = getweatherEmoji(id);

    // Fixed class names to match CSS
    citydisplay.classList.add("cityDisplay");
    tempdisplay.classList.add("tempDisplay");
    humiditydisplay.classList.add("humiditydisplay");
    descdisplay.classList.add("descdisplay");
    weatheremoji.classList.add("weatheremoji");

    card.appendChild(citydisplay);
    card.appendChild(tempdisplay);
    card.appendChild(humiditydisplay);
    card.appendChild(descdisplay);
    card.appendChild(weatheremoji);
}

function getweatherEmoji(weatherId) {
    switch(true) {
        case (weatherId >= 200 && weatherId < 300):
            return "☁";
        case (weatherId >= 300 && weatherId < 400):
            return "⛈";
        case (weatherId >= 400 && weatherId < 600):
            return "🌧";
        case (weatherId >= 600 && weatherId < 700):
            return "❄";  // Snow
        case (weatherId >= 700 && weatherId < 800):
            return "🌫";  // Mist
        case (weatherId === 800):
            return "🌞";  // Clear sky
        case (weatherId >= 801 && weatherId < 810):
            return "🌩";  // Cloudy
        default:
            return "?";
    }
}

function displayError(message) {
    card.textContent = "";
    card.style.display = "flex";  // Fixed the display style change

    const errordisplay = document.createElement("p");
    errordisplay.textContent = message;
    errordisplay.classList.add("errordisplay");

    card.appendChild(errordisplay);
}
