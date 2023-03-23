

function addItem() {
    let newItemText = document.getElementById("newItemText").value;
    let newItemValue = document.getElementById("newItemValue").value;
    let line = `${newItemText} ${newItemValue}`
    let lineHTML = `<option value=${newItemValue}>${line}</option>`
    document.getElementById("menu").innerHTML += lineHTML;
   
    
   
}
function deleteItem() {
   
}