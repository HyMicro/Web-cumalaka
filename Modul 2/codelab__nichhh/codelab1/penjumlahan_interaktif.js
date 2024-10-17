function hitung() {
    event.preventDefault();
    var num1 = parseFloat(document.getElementById("num1").value);
    var num2 = parseFloat(document.getElementById("num2").value);
    var hasil = num1 + num2;
    document.getElementById("hasil").innerText = hasil;
}

function reset() {
    document.getElementById("num1").value = "";
    document.getElementById("num2").value = "";
    document.getElementById("hasil").innerText = "";
}