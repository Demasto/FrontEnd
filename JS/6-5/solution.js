function solve() {
   document.querySelector('#searchBtn').addEventListener('click', onClick);
   function onClick() {
      let table = document.getElementById("table")
      let search = document.getElementById("searchField").value

      for (let row of table.rows) {
         for (let cell of row.cells) {
            let val = cell.innerText;
            console.log(val)

            if (val.includes(search) && search !== "") {
               row.classList.add("select")
               break
            } else {
               row.classList.remove("select")
            }
         }
      }
   }  
}