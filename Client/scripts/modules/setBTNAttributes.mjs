export default function setBTNAttributes(editBTN, removeBTN) {

    editBTN.innerHTML = "Edit";
    editBTN.style.background = '#2ECC71';
    editBTN.setAttribute("class", "btn btn-primary submit_btn");

    removeBTN.innerHTML = "Remove";
    removeBTN.style.background = ' #2E86C1';
    removeBTN.setAttribute("class", "btn btn-primary submit_btn")

}
