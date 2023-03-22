function attachEventsListeners() {
    
    document.querySelector('#daysBtn').addEventListener('click', function (){
        let days = document.getElementById("days").value;
        document.getElementById("hours").value = days * 24;
        document.getElementById("minutes").value = days * 24 * 60;
        document.getElementById("seconds").value = days * 24 * 60 * 60;
    });
    document.querySelector('#hoursBtn').addEventListener('click', function (){
        let hours = document.getElementById("hours").value;
        document.getElementById("days").value = hours / 24;
        document.getElementById("minutes").value = hours * 60;
        document.getElementById("seconds").value = hours * 60 * 60;
    });
    document.querySelector('#minutesBtn').addEventListener('click', function (){
        let minutes = document.getElementById("minutes").value;
        document.getElementById("days").value = minutes / 24 / 60;
        document.getElementById("hours").value = minutes / 60;
        document.getElementById("seconds").value = minutes * 60;
    });
    document.querySelector('#secondsBtn').addEventListener('click', function (){
        let seconds = document.getElementById("seconds").value;
        document.getElementById("days").value = seconds / 24 / 60 / 60;
        document.getElementById("hours").value = seconds / 60 / 60;
        document.getElementById("minutes").value = seconds / 60;
        
    });
}