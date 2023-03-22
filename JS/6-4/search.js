function search() {
    let search = document.getElementById("searchText").value;
    
    let ul = document.getElementById("towns")
    let listItems = ul.getElementsByTagName("li")
    
    let matches = 0;
    
    if(search !== "") {
        for (let item of listItems) {

            if (item.innerText.includes(search)) {
                item.style.textDecoration = "underline";
                item.style.fontWeight = "bolder"
                matches++;
            }
            else {
                item.style.textDecoration = "none"
                item.style.fontWeight = "normal"
                item.style.userSelect
            }
        }
        document.getElementById("result").innerHTML = `${matches} matches found`;
    }
    else
        document.getElementById("result").innerHTML = `Search line is empty`;
}
