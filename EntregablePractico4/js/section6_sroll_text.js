
document.addEventListener("DOMContentLoaded", function () {
  // Obtener las posiciones de los títulos e imágenes
  let section6 = document.querySelector(".section6-colText");
  let title1 = document.getElementById("title-1");
  let title2 = document.getElementById("title-2");
  let title3 = document.getElementById("title-3");
  let title4 = document.getElementById("title-4");

  let text1 = document.getElementById("text-1");
  let text2 = document.getElementById("text-2");
  let text3 = document.getElementById("text-3");
  let text4 = document.getElementById("text-4");

  let texts = [text1, text2, text3, text4];

  let img1 = document.getElementById("image1");
  let img2 = document.getElementById("image2");
  let img3 = document.getElementById("image3");
  let img4 = document.getElementById("image4");


  const observador = new IntersectionObserver(entries => {
    // Itera por cada entrada, por cada texto
    entries.forEach(entry => {
      // ¿Está visible?
      if (entry.isIntersecting) {
        // Índice del texto actual en el arreglo texts, así se ve cuál texto es el visible
        const index = texts.indexOf(entry.target);

        // Ajusta la opacidad de todas las imágenes a 0, para que solo esté visible la que se quiere
        [img1, img2, img3, img4].forEach(img => (img.style.opacity = 0));
        // Ajusta opacidades de títulos
        [title1, title2, title3, title4].forEach(title => (title.style.opacity = 0));
        // Ajusta opacidades de textos
        [text1, text2, text3, text4].forEach(text => (text.style.opacity = 0));
        
        // Según la posición en el arreglo, se muestra la imagen y texto correspondiente
        switch (index) {
          case 0:
            img1.style.opacity = 1;
            text1.style.opacity = 1;
            title1.style.opacity = 1;
            break;
          case 1:
            img2.style.opacity = 1;
            text2.style.opacity = 1;
            title2.style.opacity = 1;
            break;
          case 2:
            img3.style.opacity = 1;
            text3.style.opacity = 1;
            title3.style.opacity = 1;
            break;
          case 3:
            img4.style.opacity = 1;
            text4.style.opacity = 1;
            title4.style.opacity = 1;
            break;
          default:
            break;
        }
      }
    });
  });


  //Observa cada texto individual, que este en el arrgelo
  texts.forEach(text => {
    observador.observe(text);
  });


  
});
