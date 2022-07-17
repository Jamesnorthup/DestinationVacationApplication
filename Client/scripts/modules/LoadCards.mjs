import handleSubmit from "./handleFormSubmit.mjs";
import getWeatherFromLatLong from "./getLatLong.mjs";


export default function createCards() {
  getWeatherFromLatLong();

  window.onload = async () => {
    fetch("http://localhost:3000/")
      .then((res) => res.json())
      .then((data) => {
        for (let dest of data.results) {

          var imageID = dest._id
          var name = dest.name
          var location = dest.location
          var photo = dest.photo

          var description = dest.description
          handleSubmit(name, location, photo, description, imageID)
        }
      })
  }
}