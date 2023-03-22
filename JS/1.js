function characteristic (age) {
    if (age >= 0 && age <= 2){
        console.log("младенец");
    }
    else if (age > 2 && age <= 13)
    {
        console.log("ребенок");
    }
    else if (age >= 14 && age <= 19)
    {
        console.log("подросток");
    }
    else if (age >= 20 && age <= 65)
    {
        console.log("взрослый");
    }
    else if (age >= 66)
    {
        console.log("пожилой");
    }
}
function roundoff(num, accuracy){
    if(accuracy > 15){
        accuracy = 15;
    }
    console.log(parseFloat(num.toFixed(accuracy)))
}

function div(num){
    if(num % 10 === 0){
        console.log("Число делится на 10")
    }
    else if(num % 7 === 0){ 
        console.log("Число делится на 7")
    }
    else if(num % 6 === 0){
        console.log("Число делится на 6")
    }
    else if(num % 3 === 0){
        console.log("Число делится на 3")
    }
    else if(num % 2 === 0){
        console.log("Число делится на 2")
    }
    else
        console.log("Не делится")
}

function price_calculator(num, group, day){
    let price;
    if(group === "Students"){
        if(day === "Friday") {
            price = 8.45 * num
        }
        else if(day === "Saturday") {
            price = 9.80 * num
        }
        else if(day === "Sunday") {
            price = 10.46 * num
        }
        if(num >= 30)
            price = price * 0.85
    }
    else if(group === "Сooperative"){
        if(day === "Friday") {
            price = 10.90
        }
        else if(day === "Saturday") {
            price = 15.60
        }
        else if(day === "Sunday") {
            price = 16
        }
        if(num >= 100)
            price = price * (num - 10)
        else
            price = price * num
    }
    else if(group === "Regular") {
        if (day === "Friday") {
            price = 15 * num
        } else if (day === "Saturday") {
            price = 20 * num
        } else if (day === "Sunday") {
            price = 22.50 * num
        }
        if (num >= 10 && num <= 20)
            price = price * 0.95
    }
    console.log("Total price: " + parseFloat(price.toFixed(2)))
}

function leap_year (year) {
    if (year % 4 === 0 || year % 400 === 0)
        console.log("yes")
    else
        console.log("no")
}