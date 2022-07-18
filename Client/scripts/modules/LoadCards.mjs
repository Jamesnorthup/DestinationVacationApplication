

import generateCard from "./generateCard.mjs";

import PhotoRequest from "./UnsplashPhotoRequest.mjs";

export default async function LoadCards() {
  const removeAll = document.getElementById("destinations_container")
  removeAllChildNodes(removeAll);
  

  fetch("http://localhost:3000/")
    .then((res) => res.json())
    .then((data) => {
      for (let dest of data.results) {

        const imageID = dest._id
        const name = dest.name
        const location = dest.location
        const photo = dest.photo
        const description = dest.description

        PhotoRequest(location, name).then(imageURL =>
          generateCard(name, location, imageURL, description, imageID)).then(
        )
      }
    })
    return "Cards Loading"
}

function removeAllChildNodes(parent) {
  while (parent.firstChild) {
      parent.removeChild(parent.firstChild);
  }
}

