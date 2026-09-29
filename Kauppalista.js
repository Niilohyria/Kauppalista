
function lisaaRivi() {
    let syöte = document.getElementById("uusiTuote").value;
    if (syöte.trim() !== "") {
        let ul = document.getElementById("lista");
        let li = document.createElement("li");
        li.textContent = syöte;
        ul.appendChild(li);
        document.getElementById("uusiTuote").value = "";
    }
}