function closeDetails(id) {
    for (let i = 1; i <= 5; i++) {
        if(i !== id){
            document.getElementById(`${i}`).open = false;
        }
    }
    
}