document.addEventListener("DOMContentLoaded", function () {
    fetch("/Header.html") // Fetch the header dynamically
        .then(response => response.text())
        .then(data => {
            document.getElementById("header").innerHTML = data;
        });

    fetch("/Footer.html") // Fetch the footer dynamically
        .then(response => response.text())
        .then(data => {
            document.getElementById("footer").innerHTML = data;
        });
});



/*last*/
