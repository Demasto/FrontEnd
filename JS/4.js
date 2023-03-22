function min(a, b, c) {
    console.log(Math.min(a,b,c))
}
function subtract(a, b, c) {
    console.log((a + b) - c)
}

function matrix(n) {
    let line = ""
    for (let i = 0; i < n; i++) {
        
        for (let j = 0; j < n; j++) {
            line += `${n} `
        }
        line += '\n'
    }
    console.log(line)
}

function progressBar(num){
    if(num >=0 && num <= 100 && num % 10 === 0){
        let k = num / 10
        let line = "["
        for (let i = 1; i <= 10; i++) {
            if(i <= k)
                line += "%";
            else 
                line += "."
        }
        line += "]"
        if (num === 100) {
            console.log(`${num}% Complete!\n${line}`)
        }
        else {
            console.log(`${num}% ${line}\nStill loading`)
        }
    }
}
