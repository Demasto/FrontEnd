function solve() {
  let text = document.getElementById('text').value;
  let naming_convention = document.getElementById('naming-convention').value;
  let result = "";
  let arrLine = text.split(' ')
  
  if(naming_convention === "Camel Case"){
    result += arrLine[0].toLowerCase();
    for (let i = 1; i < arrLine.length; i++) {
      result += (arrLine[i][0].toUpperCase() + arrLine[i].slice(1).toLowerCase());
    }
  }
  else if (naming_convention === "Pascal Case"){
    for (let i = 0; i < arrLine.length; i++) {
      result += (arrLine[i][0].toUpperCase() + arrLine[i].slice(1).toLowerCase());
    }
  }
  else {
    result = "Error!"
  }
  document.getElementById('result').innerHTML = result;
}