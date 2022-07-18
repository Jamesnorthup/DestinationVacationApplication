



//document.getElementById("detailedImage").setAttribute("src", photo)
let destinationVar
let locationVar
let descriptionVar
let photoVar

let CityNameVar
let DescriptionVar
let TempVar
let windspeedVar


   FetchCardDetails()
   



    FetchCurrentWeather()



async function PhotoRequest(destinationVar, locationVar) {

    const API_KEY = "pSmm5fSlg_gm-Ie-eycYCUcrlFNoGPP6WbS41HvhZeI";

    let thumb = "";
    const url = `https://api.unsplash.com/search/photos?query=${locationVar} ${destinationVar}&client_id=${API_KEY}`

    return await fetch(url)
        .then(response => {
            return response.json();
        })
        .then(data => {
            thumb = data.results[0].urls.thumb;
            return thumb;
        });
}
async function FetchCardDetails() {
    fetch("http://localhost:3000/CardDetails")
        .then((res) => res.json())
        .then((data) => {
            for (let dest of data.results) {
                destinationVar = dest.name
                locationVar = dest.location
                descriptionVar = dest.description
                console.log(destinationVar)
                console.log(locationVar)
                console.log(descriptionVar)
                PhotoRequest(locationVar, destinationVar).then(photo=>
                    document.getElementById("image").setAttribute("src",photo))

                document.getElementById("destination").value += destinationVar
                document.getElementById("location").value += locationVar
                document.getElementById("description").value += descriptionVar

            }
        })
}

async function FetchCurrentWeather() {
    fetch("http://localhost:3000/CurrentWeather")
        .then((res) => res.json())
        .then((data) => {
            for (let dest of data.results) {
                CityNameVar = dest.CityName
                DescriptionVar = dest.Description
                TempVar = dest.Temp
                windspeedVar = dest.windspeed

                document.getElementById("CityName").textContent += CityNameVar
                document.getElementById("Description").textContent += DescriptionVar
                document.getElementById("Temp").textContent += TempVar
                document.getElementById("windspeed").textContent += windspeedVar
            }
        })
}


async function PhotoRequest(destinationVar, locationVar) {

    const API_KEY = "pSmm5fSlg_gm-Ie-eycYCUcrlFNoGPP6WbS41HvhZeI";

    let thumb = "";
    const url = `https://api.unsplash.com/search/photos?query=${locationVar} ${destinationVar}&client_id=${API_KEY}`

    return await fetch(url)
        .then(response => {
            return response.json();
        })
        .then(data => {
            thumb = data.results[0].urls.thumb;
            return thumb
        });
}






