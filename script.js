// Desplazamiento suave
document.querySelectorAll('.navbar a').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();

    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});
// Selecciona todos los elementos del menú
const menuItems = document.querySelectorAll("nav ul li a");

// Añade el evento 'mouseover' para animar los murciélagos al pasar el mouse sobre el menú
menuItems.forEach(item => {
    item.addEventListener("mouseover", () => {
        // Crea el murciélago izquierdo
        const batLeft = document.createElement("span");
        batLeft.textContent = "🦇";
        batLeft.classList.add("bat", "bat-left");

        // Crea el murciélago derecho
        const batRight = document.createElement("span");
        batRight.textContent = "🦇";
        batRight.classList.add("bat", "bat-right");

        // Añade los murciélagos al elemento
        item.appendChild(batLeft);
        item.appendChild(batRight);

        // Elimina los murciélagos después de la animación
        setTimeout(() => {
            batLeft.remove();
            batRight.remove();
        }, 1000); // Duración en milisegundos (1 segundo)
    });
});
document.querySelectorAll('.navbar a').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});
document.querySelector('.contact-form').addEventListener('submit', function(event) {
  event.preventDefault();
  const formData = new FormData(event.target);
  fetch('/procesar_formulario', {
      method: 'POST',
      body: formData
  })
  .then(response => response.json())
  .then(data => {
      alert("Mensaje enviado correctamente.");
  })
  .catch(error => {
      alert("Hubo un problema al enviar el mensaje.");
  });
});
window.addEventListener("scroll", function() {
  const header = document.querySelector(".contenedor-header");
  if (window.scrollY > 50) {
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }
});
// Desplazamiento suave
document.querySelectorAll('.navbar a').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
      e.preventDefault();
      document.querySelector(this.getAttribute('href')).scrollIntoView({
          behavior: 'smooth'
      });
  });
});

menuItems.forEach(item => {
  item.addEventListener("mouseover", () => {
      // Crea y añade murciélagos
      const batLeft = document.createElement("span");
      const batRight = document.createElement("span");
      batLeft.textContent = "🦇";
      batRight.textContent = "🦇";
      batLeft.classList.add("bat", "bat-left");
      batRight.classList.add("bat", "bat-right");
      item.appendChild(batLeft);
      item.appendChild(batRight);

      // Remueve los murciélagos después de 1 segundo
      setTimeout(() => {
          batLeft.remove();
          batRight.remove();
      }, 1000);
  });
});

// Efecto de scroll para el header
window.addEventListener("scroll", function() {
  const header = document.querySelector(".contenedor-header");
  if (window.scrollY > 50) {
      header.classList.add("scrolled");
  } else {
      header.classList.remove("scrolled");
  }
});
