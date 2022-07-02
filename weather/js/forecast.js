//Display the Event announcement if the Day is Friday
let currentDate = new Date();
let today = weekdays[currentDate.getDay()];

let fivedays = []

const shortNames = ["Sun", "Mon", "Tue", "Wed", "Thur", "Fri", "Sat"]
for (i = 0; i < 5; i++) {
    fivedays.push(shortNames[(currentDate.getDay() + i + 1) % 7]);
}

if (today == "Friday") {
    document.getElementById("announcement").style.display = "block";
}

const apiKey = "a6ce570f8b96f7a0437a5c9479fe91c7";

city = document.querySelector(".active").innerHTML;

let cityID = "";

if (city == "Preston") {
    cityID = "5604473";
} else if (city == "Fish Haven") {
    cityID = "5585010";
} else if (city == "Soda Springs") {
    cityID = "5607916";
};
  
const fivedayapiURL = "https://api.openweathermap.org/data/2.5/forecast?id="+cityID+"&appid="+apiKey+"&units=imperial";
const todayapiURL = "https://api.openweathermap.org/data/2.5/weather?id="+cityID+"&appid="+apiKey+"&units=imperial";
const theForcast = document.getElementById("forcast");
const theDays = theForcast.children;

fetch(fivedayapiURL)
  .then((response) => response.json())
  .then((jsObject) => {

    days = jsObject.list.filter(function(day) {return day.dt_txt.includes("18:00:00") });

    for (i = 0; i < theDays.length; i++) {
        const icon = days[i].weather[0].icon;
        const alt =  days[i].weather[0].descritpion;
        const temp =days[i].main.temp_max;
        const details = theDays[i].children;
        details[0].innerHTML = fivedays[i];
        details[1].src ='https://openweathermap.org/img/w/' + icon + '.png';
        details[1].alt = alt
        details[3].textContent = parseInt(temp);
    };

  });

fetch(todayapiURL)
    .then((response) => response.json())
    .then((jsObject) => {

        const current = jsObject.main.temp;
        const windspeed = jsObject.wind.speed;
        const humidity = jsObject.main.humidity;
        const summary = jsObject.weather[0].description;
        const icon = jsObject.weather[0].icon;

        chill = chillfactor(temp, windspeed);
        document.getElementById('temp').textContent = parseInt(current);
        document.getElementById('wind').textContent = parseInt(windspeed);
        document.getElementById('humidity').textContent = humidity;
        document.getElementById('chill').innerHTML = chill;
        document.getElementById('description').textContent = summary;
        document.getElementById('todayimg').src = 'https://openweathermap.org/img/w/' + icon + '.png';
    });


function chillfactor(temp, windspeed) {
  let windChill = ""
  if (temp < 51 && windspeed > 2.9) {
    const speed = windspeed**0.16;
    let windchill = 35.74 + 0.6215 * temp - 35.75 * speed + 0.4275 * temp * speed;
        windChill = Math.round(windchill) + "&#730;F";
  } else {
        windChill = "N/A";
  };
  return windChill;
};