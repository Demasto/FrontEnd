document.body.addEventListener("click", function () {
    document.body.querySelectorAll('details.dropdown[open]')
        .forEach(e => e.open = false)
}) 

