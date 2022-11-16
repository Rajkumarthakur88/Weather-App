
// JAVASCRIPT

let form = document.querySelector("form");
let input = document.querySelector("input");

// ADD EVENT LISTNER ON FORM SUBMIT

form.addEventListener("submit", getData);


async function getData(e) {

    e.preventDefault();
    let weatherData = await fetch(`https://api.weatherapi.com/v1/current.json?key=22af615fe10e4b5593990007221606&q=${input.value}&aqi=yes`);
    let weatherJson = await weatherData.json();

    //    console.log();

    if (weatherJson.error) {
        window.alert("Enter Correct City")
    }
    else {
        // GETDATA AND STORE IN VARIABLES
        let temp_C = weatherJson.current.temp_c;
        let temp_F = weatherJson.current.temp_f;
        let wind_S = weatherJson.current.wind_kph;
        let Location = weatherJson.location.name;
        let region = weatherJson.location.region;
        let weather_Icon = weatherJson.current.condition.icon;
        let weather_Condition = weatherJson.current.condition.text;

        // console.log(weatherJson);

        // SELECT HTML ELEMENTS TO MANIPULATE THEM 
        let temp_c = document.querySelector(".temp_c");
        temp_c.innerText = temp_C + "°C";

        let temp_f = document.querySelector(".temp_f");
        temp_f.innerText = temp_F + "°F";

        let WindSpeed = document.querySelector(".wind_speed");
        WindSpeed.innerText = "Wind:-" + " " + wind_S + " " + "km/hr";

        let location = document.querySelector(".location");
        location.innerText = Location + ", " + region;

        let Icon = document.querySelector(".icon");
        Icon.setAttribute("src", weather_Icon);

        let Condition = document.querySelector(".weather_condition");
        Condition.innerText = weather_Condition;


        let reportContainer = document.querySelector(".weather-report");
        reportContainer.style.visibility = "visible";


        // console.log(temp_C);
        // console.log(temp_F);
        // console.log(wind_S);
        // console.log(date_Time);
        // console.log(weather_Icon);
        // console.log(weather_Condition);
        // console.log(weatherJson);

        form.reset();


        let time = weatherJson.current.is_day;
        let container = document.querySelector(".container");
        // console.log(time);
        if (time == 0) {
            container.style.backgroundImage = "url(./Night-bimage.png)";
        }
        else {
            container.style.backgroundImage = "url(./daybg.jpg)";
        }

    }
}

