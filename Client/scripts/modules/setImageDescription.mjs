export default function setImageDescription(containText, formInput, imageID) {

    var name = formInput[0];
    var location = formInput[1];
    var photo = formInput[2];
    var description = formInput[3];

    let tagName = document.createElement("h");
    tagName.style.fontWeight = "bold";
    tagName.style.fontSize = 'Large';
    tagName.textContent = name;
    tagName.setAttribute('id', 'tagName' + imageID);
    tagName.setAttribute('class', 'cardDescription' + imageID);
    containText.appendChild(tagName);

    let tagLocation = document.createElement("p");
    tagLocation.textContent = location;
    tagLocation.setAttribute('id', 'tagLocation' + imageID);
    containText.appendChild(tagLocation);

    let tagPhoto = document.createElement("p");
    tagPhoto.textContent = photo;
    tagPhoto.style.display = "none";
    tagPhoto.setAttribute('id', 'tagPhoto' + imageID);
    containText.appendChild(tagPhoto);

    let tagDescription = document.createElement("p");
    tagDescription.textContent = description;
    tagDescription.style.display = "none";
    tagDescription.setAttribute('id', 'tagDescribe' + imageID);
    containText.appendChild(tagDescription);
}