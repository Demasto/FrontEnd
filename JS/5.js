let arr = ['Silas Butler','Adnaan Buckley','Juan Peterson','Brendan Villarreal'];
function employee(arr){
    for (let i = 0; i < arr.length; i++) {
        console.log(`Name: ${arr[i]} - Personal Number: ${arr[i].length}`);
    }
}

let townTable = ['Moscow | 55.7522 | 37.6156','Beijing | 39.913818 | 116.363625'];
function stringToJSON(townTable){
    let townsJSON = []
    for (let i = 0; i < townTable.length; i++) {
        let arrayOfStrings = townTable[i].split(" | ") // Преобразует в массив строк, игнорируя указанный разделитель
        townsJSON[i] = {
            town: arrayOfStrings[0],
            latitude: Number(arrayOfStrings[1]).toFixed(2),
            longitude: Number(arrayOfStrings[2]).toFixed(2),
        };
    }
    for (let i = 0; i < townsJSON.length; i++){
        console.log(townsJSON[i])
    }
}

let products1 = ['chips','5','CocaCola','9','Bananas','14','Pasta','4','Beer','2']
let products2 = ['Flour','44','Oil','12','Pasta','7','Tomatoes','70','Bananas','30']
let prodJSON = []
function addProducts(products) {
    for (let i = 0; i < products.length; i += 2) {
        let isExist = false;
        for (let j = 0; j < prodJSON.length; j++) {
            if (prodJSON[j].product === products[i]) {
                isExist = true;
                prodJSON[j].quantity = Number(products[i + 1]) + Number(prodJSON[j].quantity);
            }
        }
        if (!isExist) {
            prodJSON[prodJSON.length] = {
                product: products[i],
                quantity: products[i + 1]
            }
        }
    }
}
function viewProductsCount(prodJSON) {
    for (let i = 0; i < prodJSON.length; i++) {
        console.log(`${prodJSON[i].product} -> ${prodJSON[i].quantity}`)
    }
}
addProducts(products1)
addProducts(products2)
viewProductsCount(prodJSON)



let input = ['addMovie Fast and Furious','addMovie Godfather','Inception directedBy Christopher Nolan','Godfather directedBy Francis Ford Coppola','Godfather onDate 29.07.2018','Fast and Furious onDate 30.07.2018','Batman onDate 01.08.2018','Fast and Furious directedBy Rob Cohen']
let movieList = []

function movie(arr) {
    for (let i = 0, j = 0; i < arr.length; i++) {
        if(arr[i].includes("addMovie")) {
            let line = arr[i].slice(9);
            movieList[j] = {
                name: line
            }
            j++
        }
        else {
            for (let k = 0; k < movieList.length; k++) {
                if(arr[i].includes(movieList[k].name)){
                    if(arr[i].includes("directedBy")){
                        let p = arr[i].indexOf('directedBy')
                        movieList[k].director = arr[i].slice(p + 11)
                    }
                    else if (arr[i].includes("onDate")){
                        let p = arr[i].indexOf('onDate')
                        movieList[k].date = arr[i].slice(p + 7)
                    }
                    break;
                }
            }
        }
    }
    console.log(movieList)
}


