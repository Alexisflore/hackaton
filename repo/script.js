document.addEventListener("DOMContentLoaded", function () {
    let startTime;
    let intervalId;

    function startChrono() {
        startTime = new Date().getTime();
        intervalId = setInterval(updateChrono, 1000);
    }

    function updateChrono() {
        const currentTime = new Date().getTime();
        const elapsedTime = currentTime - startTime;

        const hours = Math.floor(elapsedTime / 3600000);
        const minutes = Math.floor((elapsedTime % 3600000) / 60000);
        const seconds = Math.floor((elapsedTime % 60000) / 1000);

        document.getElementById("chrono").innerText = `${pad(hours)}:${pad(minutes)}:${pad(seconds)}`;
    }

    function pad(value) {
        return value < 10 ? `0${value}` : value;
    }

    // Ajout de la fonction startChrono au niveau global pour qu'elle puisse être appelée depuis le bouton
    window.startChrono = startChrono;
});

