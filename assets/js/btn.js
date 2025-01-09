document.getElementById("btn-acept").addEventListener("click", function() {
    const phoneNumber = "543884602354";  
    const message = "¡Hola! Confirmo mi asistencia al Baby Shower de Delfina. ¡Nos vemos pronto!"; 
    // Codificamos el mensaje para que sea compatible con la URL
    const encodedMessage = encodeURIComponent(message);

    // Creamos la URL de WhatsApp
    const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

    // Abrimos la URL en una nueva ventana
        window.open(whatsappURL, "_blank");
    });

document.getElementById("btn-gps").addEventListener("click", function() {
        const destination = "Tte. Farias 1895, Y4600 San Salvador de Jujuy, Jujuy"; 
  
        // Codificamos la dirección para que sea compatible con la URL
        const encodedDestination = encodeURIComponent(destination);
  
        // Creamos la URL de Google Maps
        const mapsURL = `https://www.google.com/maps?q=${encodedDestination}`;
  
        // Abrimos la URL en una nueva ventana
        window.open(mapsURL, "_blank");
});

