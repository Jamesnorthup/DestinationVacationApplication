
import getUserInput from "./modules/getUserInput.mjs";
import createCards from "./modules/LoadCards.mjs"

createCards()
// let cardFrame+=""+
// "<div class=\"card\" style=\"width: 18rem;\">"+
//   "<img src=\"...\" class=\"card-img-top\" alt=\"...\">"+
//   "<div class=\"card-body\">"+
//    " <h5 class=\"card-title\">Card title</h5>"+
//     "<p class=\"card-text\">Some quick example text to build on the card title and make up the bulk of the card's content.</p>"+
//     "<a href=\"#\" class=\"btn btn-primary\">Go somewhere</a>"+
//   "</div>"+
// "</div>"
document
  .querySelector("#destination_details_form")
  .addEventListener("submit", handleFormSubmit);

async function handleFormSubmit(event) {
  event.preventDefault();
  await getUserInput(event)
  window.location.reload();
}






