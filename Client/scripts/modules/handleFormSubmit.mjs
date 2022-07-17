import setImageAttributes from "./setImageAttributes.mjs";
import setImageDescription from "./setImageDescription.mjs";
import setBTNAttributes from "./setBTNAttributes.mjs";
import generateButtonEvent from "./generateButtonEvent.mjs";
import PhotoRequest from "./UnsplashPhotoRequest.mjs";



export default async function handleSubmit(name, location, photo, description, imageID) {
    // image unique ID for locating and replacing image in edit.
    // Get image div
    var mainContainer = document.getElementById("destinations_container");

    document.getElementById("title").innerHTML = "My WishList";
    document.getElementById("title").style.textAlign = "center";

    // Create unique id for each new image

    // Store user input

    let formInput = [name, location, photo, description];

    // containImage contains image and related description from user input
    var containImage = document.createElement("div");
    containImage.style.display = "inline-block";
    containImage.style.border = "1px solid #ccc";

    var containText = document.createElement("div");
    var elem = document.createElement("img");

    const removeBTN = document.createElement("button");
    const editBTN = document.createElement("button");

    setImageDescription(containText, formInput, imageID);
    setBTNAttributes(editBTN, removeBTN)

    generateButtonEvent(removeBTN, editBTN, imageID, containText)
    containText.appendChild(editBTN);
    containText.appendChild(removeBTN);

    setImageAttributes(elem, imageID, formInput);

    containImage.appendChild(elem);

    //containImage.setAttribute('id',imageID);

    containImage.appendChild(containText);
    mainContainer.appendChild(containImage);

    const API_KEY = "pSmm5fSlg_gm-Ie-eycYCUcrlFNoGPP6WbS41HvhZeI";



    PhotoRequest(formInput[0], formInput[1]).then(photo =>
        elem.setAttribute("src", photo))
   


}


