function changeArray(arr){
    let sum1 = 0, sum2 = 0, arr2 = [];

    for (let i = 0; i < arr.length; i++) {
        if(arr[i] % 2 === 0)
            arr2[i] = arr[i] + i;
        else
            arr2[i] = arr[i] - i
        console.log("До - " + arr[i] + " После - " + arr2[i])
        sum1 += arr[i]
        sum2 += arr2[i]
    }
    console.log("Сумма чисел исходного массива: " + sum1)
    console.log("Сумма чисел измененного массива: " + sum2)
}

function genericElements(arr1, arr2) {
    for (let i = 0; i < arr1.length; i++) {
        for (let j = 0; j < arr2.length; j++) {
            if(arr1[i] === arr2[j])
                console.log(arr1[i])
        }
    }
}

let arr = [3, 4, 6, 2]
function rotation(arr, iteration){
    while (iteration > 0) {
        arr.push(arr.shift());
        iteration--;
    }
    console.log(arr)
}

let mat = [[4,5,6],[6,5,4],[5,5,5]]
function isWonderfulMatrix(matrix) {
    let sum = 0;
    let flag = true;
    for (let i = 0; i < matrix.length; i++) {
        let sumJ = 0, sumI = 0;
        for (let j = 0; j < matrix[i].length; j++) {
            sumJ += matrix[i][j];
            sumI += matrix[j][i];
        }
        if(sum !== 0 && (sumJ !== sum || sumI !== sum || sumI !== sumJ)){
            flag = false;
            break;
        }
        sum = sumJ;
    }
    console.log(flag)
}
