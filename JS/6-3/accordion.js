function toggle() {
    let extra = document.getElementById('extra')
    let button = document.getElementById('bt')
    if(extra.style.display === "none") {
        extra.style.display = "inline";
        button.innerHTML = "LESS"
    }
    else{
        extra.style.display =  "none";
        button.innerHTML = "MORE"
    }
}