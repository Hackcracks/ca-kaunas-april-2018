let itemInput = document.getElementById("product");
let clear = document.getElementById("clear");
let submit = document.getElementById("submit");
let list = document.getElementById("list");
function addItem() {
    let currentItem = itemInput.value;
    let listItem = document.createElement("li");
    listItem.innerHTML = currentItem;
    list.appendChild(listItem);
    itemInput.value = "";
}
submit.onclick = addItem;
clear.onclick = function () {
    list.innerHTML = "";
    itemInput.value = "";
}