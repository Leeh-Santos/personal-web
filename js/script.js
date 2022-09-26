let time = new Date();
let current_date = time.getDate() + " / " + (time.getMonth()+1) + " / " +
time.getFullYear();
document.getElementById("fecha").innerHTML = current_date;