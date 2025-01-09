let countDownDate = new Date("Jan 25, 2025 17:00:00").getTime();

// Actualizar la cuenta regresiva cada 1 segundo
let x = setInterval(function() {

    // Obtener la fecha y hora actual
    let now = new Date().getTime();

    // Calcular la diferencia entre la fecha objetivo y la fecha actual
    let distance = countDownDate - now;

    // Calcular el tiempo restante en días, horas, minutos y segundos
    let days = Math.floor(distance / (1000 * 60 * 60 * 24));
    let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Mostrar el resultado en los elementos correspondientes
    document.getElementById("dias").innerHTML = days;
    document.getElementById("horas").innerHTML = hours;
    document.getElementById("min").innerHTML = minutes;
    document.getElementById("seg").innerHTML = seconds;

    // Si la cuenta regresiva ha terminado, mostrar un mensaje
    if (distance < 0) {
        clearInterval(x);
        document.getElementById("dias").innerHTML = "EXPIRED";
        document.getElementById("horas").innerHTML = "";
        document.getElementById("min").innerHTML = "";
        document.getElementById("seg").innerHTML = "";
    }
}, 1000);