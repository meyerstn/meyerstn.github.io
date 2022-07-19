"use strict"
const webJSON = "https://byui-cit230.github.io/weather/data/towndata.json"
async function populateCityInfo(webJSON){
    const response = await fetch(webJSON)
    const townsJSON = await response.json()
    const towns = townsJSON.towns
    document.getElementById("preston-name").textContent = towns[6].name
    document.getElementById("preston-slogan").textContent = towns[6].motto
    document.getElementById("preston-year").textContent = towns[6].yearFounded
    document.getElementById("preston-pop").textContent = towns[6].currentPopulation
    document.getElementById("preston-rain").textContent = towns[6].averageRainfall
    document.getElementById("soda-name").textContent = towns[0].name
    document.getElementById("soda-slogan").textContent = towns[0].motto
    document.getElementById("soda-year").textContent = towns[0].yearFounded
    document.getElementById("soda-pop").textContent = towns[0].currentPopulation
    document.getElementById("soda-rain").textContent = towns[0].averageRainfall
    document.getElementById("fish-name").textContent = towns[2].name
    document.getElementById("fish-slogan").textContent = towns[2].motto
    document.getElementById("fish-year").textContent = towns[2].yearFounded
    document.getElementById("fish-pop").textContent = towns[2].currentPopulation
    document.getElementById("fish-rain").textContent = towns[2].averageRainfall
    document.getElementById("preston-img").setAttribute("alt", towns[6].name)
    document.getElementById("soda-img").setAttribute("alt", towns[0].name)
    document.getElementById("fish-img").setAttribute("alt", towns[2].name)
}
populateCityInfo(webJSON)