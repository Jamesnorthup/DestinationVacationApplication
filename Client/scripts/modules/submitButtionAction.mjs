
import LoadCards from "./LoadCards.mjs";
import PhotoRequest from "./UnsplashPhotoRequest.mjs";

export default async function postUserInput() {

    let name = document.getElementById("name").value;
    let location = document.getElementById("location").value;
    let photo = PhotoRequest(location,name);
    let description = document.getElementById("description").value;
    
    fetch('http://localhost:3000/clientFormInput', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            name: name,
            location: location,
            photo: photo,
            description: description
        })
    })
    
}

