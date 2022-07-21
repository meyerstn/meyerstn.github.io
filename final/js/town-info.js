"use strict"
const webJSON = "https://meyerstn.github.io/final/data/towns.json"
async function populateCityInfo(webJSON){
    const response = await fetch(webJSON)
    const townsJSON = await response.json()
    const towns = townsJSON.towns
    document.getElementById("playa-name").textContent = towns[6].name
    document.getElementById("playa-slogan").textContent = towns[6].motto
    document.getElementById("playa-year").textContent = towns[6].yearFounded
    document.getElementById("playa-pop").textContent = towns[6].currentPopulation
    document.getElementById("playa-rain").textContent = towns[6].averageRainfall
    document.getElementById("puerta-name").textContent = towns[0].name
    document.getElementById("puerta-slogan").textContent = towns[0].motto
    document.getElementById("puerta-year").textContent = towns[0].yearFounded
    document.getElementById("puerta-pop").textContent = towns[0].currentPopulation
    document.getElementById("puerta-rain").textContent = towns[0].averageRainfall
     document.getElementById("playa-img").setAttribute("alt", towns[6].name)
    document.getElementById("puerta-img").setAttribute("alt", towns[0].name)
 
populateCityInfo(webJSON) }