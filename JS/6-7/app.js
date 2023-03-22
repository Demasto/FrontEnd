function lockedProfile() {
    
    let inputUser1 = document.getElementsByName("user1Locked");
    let inputUser2 = document.getElementsByName("user2Locked");
    let inputUser3 = document.getElementsByName("user3Locked");
    let show = document.getElementsByClassName("show");
    
    inputUser1[0].addEventListener('click',function () { 
        show[0].style.pointerEvents = "none"//user1 - lock
    })
    inputUser1[1].addEventListener('click',function () { 
        show[0].style.pointerEvents = "auto"//user1 - unlock
    })

    inputUser2[0].addEventListener('click',function () { 
        show[1].style.pointerEvents = "none"//user2 - lock
    })
    inputUser2[1].addEventListener('click',function () { 
        show[1].style.pointerEvents = "auto"//user2 - unlock
    })
    
    inputUser3[0].addEventListener('click',function () { 
        show[2].style.pointerEvents = "none"//user3 - lock
    })
    inputUser3[1].addEventListener('click',function () { 
        show[2].style.pointerEvents = "auto"//user3 - unlock
    })

    show[0].addEventListener('click', function () {
        if(this.innerText === "Show more") {
            document.getElementById("user1HiddenFields").style.display = "block";
            this.innerText = "Hide it";
        }
        else{
            document.getElementById("user1HiddenFields").style.display = "none";
            this.innerText = "Show more";
        }
    })
    
    show[1].addEventListener('click', function () {
        if(this.innerText === "Show more") {
            document.getElementById("user2HiddenFields").style.display = "block";
            this.innerText = "Hide it";
        }
        else{
            document.getElementById("user2HiddenFields").style.display = "none";
            this.innerText = "Show more";
        }
    })
    
    show[2].addEventListener('click', function () {
        if(this.innerText === "Show more") {
            document.getElementById("user3HiddenFields").style.display = "block";
            this.innerText = "Hide it";
        }
        else{
            document.getElementById("user3HiddenFields").style.display = "none";
            this.innerText = "Show more";
        }
    })
}