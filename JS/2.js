function lineSum(num) {
    let line = String(num)
    let sum = 0
    for(let i=0; i < line.length; i++){
        sum += Number(line[i])
    }
    console.log(sum)
}
function charSum(char1, char2, char3){
    let line = String(char1 + char2 + char3)
    console.log(line)
}

function infoTown(town, population, area){
    console.log(`Town ${town} has population of ${population} and area ${area} square km.`)
}
function calculator(num1, char, num2) {
    let result
    switch (char) {
        case '+':
            result = (num1 + num2).toFixed(2);
            break;
        case '-':
            result = (num1 - num2).toFixed(2);
            break;
        case '*':
            result = (num1 * num2).toFixed(2);
            break;
        case '/':
            result = (num1 / num2).toFixed(2);
            break;
        default:
            result = 'invalid arguments';
    }
    console.log(result);
}

function convertToInt(num) {
    console.log(parseInt(num,2))
}