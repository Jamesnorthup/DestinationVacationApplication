

export default function setImageAttributes(elem, imageID, formInput) {
    var height = "200";
    var width = "200";
    elem.setAttribute("id", imageID);
    elem.setAttribute("height", height);
    elem.setAttribute("width", width);

    elem.onclick = function () {
        putGeneralCollection(formInput)

        window.open("./layouts/VacationDescription.html", "_blank")
    };
}

async function putGeneralCollection(formInput) {
    console.log(formInput)
    fetch("http://localhost:3000/CardDetails", {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({

            name: formInput[0],
            location: formInput[1],
            photo: formInput[2],
            description: formInput[3]
        })
    }).then(res => {
        if (res.ok) return res.json()
    })
}
// async function deleteGeneralCollection() {
//     fetch("http://localhost:3000/CardDetails", {
//         method: "DELETE",
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify({
//             id: "CURRENT_CARD"
//         })
//     })
// }



