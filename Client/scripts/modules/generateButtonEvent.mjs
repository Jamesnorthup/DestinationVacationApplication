
import PhotoRequest from "./UnsplashPhotoRequest.mjs";
export default function generateButtonEvent(removeBTN, editBTN, imageID, containText) {

    editBTN.onclick = function () {
        var updateName = window.prompt("Enter new name");
        var updateLocation = window.prompt("Enter new location");
        var updateDescription = window.prompt("Enter new Description");
        var updatePhoto = PhotoRequest(updateDescription, updateLocation)
        const update = document.querySelector('#update-button')

        fetch("http://localhost:3000/", {
            method: 'put',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                id: imageID,
                name: updateName,
                location: updateLocation,
                photo: updatePhoto,
                description: updateDescription
            })
        }).then(res => {

            if (res.ok) return res.json()
        })
            .then(response => {
                window.location.reload(true)
            })
    }
    //containText.style.textAlign = "center";

    removeBTN.onclick = function () {

        removeBTN.parentElement.parentElement.remove();
    


        fetch("http://localhost:3000/", {
            method: 'delete',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                id: imageID
            })
        })
            .then(res => {
                if (res.ok) return res.json()
            })

    }
}