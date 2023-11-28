document.addEventListener("DOMContentLoaded", function () {
    const parallaxContainer = document.getElementById("parallaxContainer");
  
    parallaxContainer.addEventListener("mousemove", (event) => {

      //agarro la posicion en X e Y en relacion a mi contenedor de parallax
      let { clientX, clientY } = event;
      let { offsetWidth, offsetHeight } = parallaxContainer;

      let centerX = offsetWidth / 2; //centro en x del contenedor parallax
      let centerY = offsetHeight / 2; //centro en y del contenedor parallax
  
      //
      let moveX = (clientX - centerX) / 20;
      let moveY = (clientY - centerY) / 20;

      //agarro todas las capas de la seccion
      let layer1 = document.querySelector(".capa1");
      let layer2 = document.querySelector(".capa2");
      let heroGirl = document.querySelector(".girl");
      let heroPanther = document.querySelector(".panther");
      let heroHulk = document.querySelector(".hulk");
      let grass = document.querySelector(".grass");
  
      

      heroPanther.style.transform = `translateX(${moveX * -0.5}px) translateY(${moveY * -0.7}px) rotate(4deg)`;
      heroHulk.style.transform = `translateX(${moveX * -1.4}px) translateY(${moveY * -1.7}px)`;
      heroGirl.style.transform = `translateX(${moveX * 1}px) translateY(${moveY * -2.2}px) rotate(-5.483deg)`;
    });
  });
  
  
  