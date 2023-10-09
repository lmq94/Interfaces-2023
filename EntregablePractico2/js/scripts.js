


const userIcon = document.getElementById('user-icon');
const userDropdown = document.getElementById('user-dropdown');
const menuIcon = document.getElementById("menu-icon");
const menuDropdown = document.getElementById("menu-dropdown");


const datosCards1 = [
        {
        imagen: 'assets/images/Gta-V.jpg',
        titulo: 'GTA V',
        precio: '$5.99',
        accion: 'AÑADIR',
        icono: 'assets/iconos/carrito-vender.svg'
      },
      {
        imagen: 'assets/images/4-linea.jpg',
        titulo: '4 EN LINEA',
        accion: 'JUGAR',
        icono: 'assets/iconos/play.svg'
      },
    
      {
        imagen: 'assets/images/Dota 2.jpg',
        titulo: 'DOTA II',
        accion: 'JUGAR',
        icono: 'assets/iconos/play.svg'

      },
      {
        imagen: 'assets/images/minecraft.jpg',
        titulo: 'MINECRAFT',
        precioTachado: '$3.99',
        precio: '$2.99',
        accion: 'AÑADIR',
        icono: 'assets/iconos/carrito-vender.svg'

      },
      {
        imagen: 'assets/images/Chess.jpg',
        titulo: 'CHESS',
        accion: 'JUGAR',
        icono: 'assets/iconos/play.svg'

      },
     {
      imagen: 'assets/images/Counter-Strike-Go.jpg',
      titulo: 'COUNTER STRIKE GO',
      accion: 'JUGAR',
      icono: 'assets/iconos/play.svg'

    },
    {
      imagen: 'assets/images/Dawnlands.jpg',
      titulo: 'Dawnlands',
      accion: 'JUGAR',
      icono: 'assets/iconos/play.svg'

    },
    {
      imagen: 'assets/images/Resident-Evil-4-Remake.jpg',
      titulo: 'RESIDENT EVIL 4 REMAKE',
      precio: '$10.99',
      accion: 'AÑADIR',
      icono: 'assets/iconos/carrito-vender.svg'

    },{
      imagen: 'assets/images/Fifa-2023.jpg',
      precio: '$7.99',
      titulo: 'FIFA 2023',
      accion: 'AÑADIR',
      icono: 'assets/iconos/carrito-vender.svg'

    },
    {
      imagen: 'assets/images/Hatred.jpg',
      titulo: 'HATRED',
      accion: 'AÑADIR',
      precioTachado: '$2.99',
      precio: '$1.99',
      icono: 'assets/iconos/carrito-vender.svg'

    },
    {
      imagen: 'assets/images/Path-Of-Exile.jpg',
      titulo: 'PATH OF EXILE',
      accion: 'JUGAR',
      icono: 'assets/iconos/play.svg'

    },
    {
      imagen: 'assets/images/Valorant.jpg',
      titulo: 'VALORANT',
      accion: 'JUGAR',
      icono: 'assets/iconos/play.svg'

    },
 

  ];
  const datosCards2 = [
    {
    imagen: 'assets/images/Proyect-Zomboid.jpg',
    titulo: 'PROYECT ZOMBOID',
    accion: 'JUGAR',
    icono: 'assets/iconos/play.svg'
  },
  {
    imagen: 'assets/images/Genshin-Impact.jpg',
    titulo: 'GENSHIN IMPACT',
    accion: 'JUGAR',
    icono: 'assets/iconos/play.svg'
  },

  {
    imagen: 'assets/images/Counter-Strike-Go-2.jpg',
    titulo: 'COUNTER STRIKE 2',
    accion: 'JUGAR',
    icono: 'assets/iconos/play.svg'

  },
  {
    imagen: 'assets/images/Kirby-Gore.jpg',
    titulo: 'KIRBY',
    accion: 'JUGAR',
    icono: 'assets/iconos/play.svg'

  }
];


const datosCards3 = [
  {
  imagen: 'assets/images/Dirty-Rally-2.0.jpg',
  titulo: 'DIRTY RALLY 2.0',
  precio: '$7.99',
  accion: 'AÑADIR',
  icono: 'assets/iconos/carrito-vender.svg'
},
{
  imagen: 'assets/images/Forza-Horizon-5.jpg',
  titulo: 'FORZA HORIZON 5',
  accion: 'AÑADIR',
  precio: '$5.99',
  icono: 'assets/iconos/carrito-vender.svg'
},

{
  imagen: 'assets/images/MarioKart-8-Deluxe.jpg',
  precioTachado: '$4.99',
  precio: '$5.99',
  titulo: 'MARIOKART 8 DELUXE',
  accion: 'AÑADIR',
  icono: 'assets/iconos/carrito-vender.svg'

},
{
  imagen: 'assets/images/Need-For-Speed-Most-Wanted.jpg',
  titulo: 'NEED FOR SPEED MOST WANTED',
  precio: '$1.99',
  accion: 'AÑADIR',
  icono: 'assets/iconos/carrito-vender.svg'

},
{
  imagen: 'assets/images/Ridger-Racer-Type-4.jpg',
  titulo: 'Ridger Racer Type 4',
  precio: '$6.99',
  accion: 'AÑADIR',
  icono: 'assets/iconos/carrito-vender.svg'

},
{
imagen: 'assets/images/Proyect-Cars-3.jpg',
titulo: 'Proyect Cars 3',
precioTachado: '$5.99',
precio: '$6.99',
accion: 'AÑADIR',
icono: 'assets/iconos/carrito-vender.svg'

},
{
imagen: 'assets/images/Gran-Turismo-Sport.jpg',
titulo: 'Gran Turismo Sport',
precio: '$8.99',
accion: 'AÑADIR',
icono: 'assets/iconos/carrito-vender.svg'

},
{
imagen: 'assets/images/F1-2020.png',
titulo: 'F1 2020',
precio: '$4.99',
accion: 'AÑADIR',
icono: 'assets/iconos/carrito-vender.svg'

},{
imagen: 'assets/images/Rocket-League.jpg',
precio: '$1.99',
titulo: 'ROCKET LEAGUE',
accion: 'AÑADIR',
icono: 'assets/iconos/carrito-vender.svg'

},
{
imagen: 'assets/images/Driver-San-Francisco.jpg',
titulo: 'DRIVER SAN FRANCISCO',
accion: 'AÑADIR',
precioTachado: '$1.99',
precio: '$0.99',
icono: 'assets/iconos/carrito-vender.svg'

},
{
imagen: 'assets/images/Burnout-3.jpg',
titulo: 'BURNOUR 3',
accion: 'JUGAR',
icono: 'assets/iconos/play.svg'

},
{
imagen: 'assets/images/Speed-3.jpg',
titulo: 'SPEED 3',
accion: 'AÑADIR',
precio: '$1.99',
icono: 'assets/iconos/carrito-vender.svg'

},




];
const datosCards4 = [
  {
  imagen: 'assets/images/Medal-Of-Honor-Allied-Assault.png',
  titulo: 'MEDAL OF HONOR ALLIED ASSAULT',
  precio: '$1.99',
  accion: 'AÑADIR',
  icono: 'assets/iconos/carrito-vender.svg'
},
{
  imagen: 'assets/images/Call-Of-Duty.jpg',
  titulo: 'CALL OF DUTY',
  accion: 'JUGAR',
  icono: 'assets/iconos/play.svg'
},

{
  imagen: 'assets/images/Comando.jpg',
  titulo: 'COMMANDOS 2 HD REMASTER',
  precio: '$1.99',
  accion: 'JUGAR',
  icono: 'assets/iconos/carrito-vender.svg'

},
{
  imagen: 'assets/images/Battlefield.jpg',
  titulo: 'BATTLEFIELD 1942',
  precioTachado: '$2.99',
  precio: '$1.99',
  accion: 'AÑADIR',
  icono: 'assets/iconos/carrito-vender.svg'

},
{
  imagen: 'assets/images/Sniper-4.jpg',
  titulo: 'SNIPER 4',
  accion: 'AÑADIR',
  precio: '$3.99',
  icono: 'assets/iconos/carrito-vender.svg'

},
{
imagen: 'assets/images/Company-Of-Heroes-2.jpg',
titulo: 'COMPANY OF HEROES 2',
accion: 'AÑADIR',
precio: '$3.99',
icono: 'assets/iconos/carrito-vender.svg'

},
{
imagen: 'assets/images/Men-Of-War-Assault-2-Squad.jpg',
titulo: 'MEN OF WAR ASSAULT 2 SQUAD',
accion: 'AÑADIR',
precio: '$2.99',
icono: 'assets/iconos/carrito-vender.svg'

},
{
imagen: 'assets/images/Spec-Ops-The-Line-Free.jpg',
titulo: 'SPEC OPS THE LINE',
precioTachado:'$5.99',
precio: '$4.99',
accion: 'AÑADIR',
icono: 'assets/iconos/carrito-vender.svg'

},{
imagen: 'assets/images/World-Of-Warships.jpg',
precio: '$2.99',
titulo: 'WORLD OF WARSHIPS',
accion: 'AÑADIR',
icono: 'assets/iconos/carrito-vender.svg'

},

{
  imagen: 'assets/images/Verdun.jpg',
  titulo: 'Verdun',
  accion: 'AÑADIR',
  precio: '$2.99',
  icono: 'assets/iconos/carrito-vender.svg'
},
{
  imagen: 'assets/images/War-Thunder.jpg',
  titulo: 'WAR THUNDER',
  precioTachado: '$3.99',
  precio: '$2.99',
  accion: 'AÑADIR',
  icono: 'assets/iconos/play.svg'
},





];
const datosCards5 = [
  {
  imagen: 'assets/images/Age-Of-Empires-2.jpg',
  titulo: 'AGE OF EMPIRES DEFINITIVE EDITION',
  precio: '$5.99',
  accion: 'AÑADIR',
  icono: 'assets/iconos/carrito-vender.svg'
},
{
  imagen: 'assets/images/Civilization-6.jpg',
  titulo: 'CIVILIZATION VI',
  accion: 'AÑADIR',
  precio: '$3.99',
  icono: 'assets/iconos/carrito-vender.svg'
},

{
  imagen: 'assets/images/Starcraft-2.jpg',
  titulo: 'STARCRAFT 2',
  precio: '$2.99',
  accion: 'AÑADIR',
  icono: 'assets/iconos/carrito-vender.svg'

},
{
  imagen: 'assets/images/S-K.jpg',
  titulo: 'STRONGHOLD KINGDOMS',
  accion: 'JUGAR',
  icono: 'assets/iconos/play.svg'

},
{
  imagen: 'assets/images/Cities-Skylines.jpg',
  titulo: 'CITIES SKYLINES',
  precioTachado: '$3.99',
  precio: '$2.99',
  accion: 'AÑADIR',
  icono: 'assets/iconos/carrito-vender.svg'

},
{
imagen: 'assets/images/Endless-Dungeon.jpg',
titulo: 'ENDLESS DUNGEON',
accion: 'AÑADIR',
precio: '$1.99',
icono: 'assets/iconos/carrito-vender.svg'

},
{
imagen: 'assets/images/Gears-Tactics.jpg',
titulo: 'GEARS TACTICS',
precio: '$3.99',
accion: 'AÑADIR',
icono: 'assets/iconos/carrito-vender.svg'

},
{
imagen: 'assets/images/Heroe-Of-Kingdown.jpg',
titulo: 'HERO OF KINGDOM',
accion: 'JUGAR',
icono: 'assets/iconos/play.svg'

},{
imagen: 'assets/images/Warcraft-III-Reforged.jpg',
precioTachado: '$6.99',
precio: '$5.99',
titulo: 'WARCRAFT REFORGED III',
accion: 'AÑADIR',
icono: 'assets/iconos/carrito-vender.svg'

},
{
  imagen: 'assets/images/Warzone-2100.jpg',
  titulo: 'WARZONE 2100',
  accion: 'AÑADIR',
  precio: '$4.99',
  icono: 'assets/iconos/carrito-vender.svg'
  
  },

{
imagen: 'assets/images/Crusader-HD.jpg',
titulo: 'CRUSADER HD',
accion: 'JUGAR',
icono: 'assets/iconos/play.svg'

},
{
imagen: 'assets/images/World-In-Conflict.jpg',
titulo: 'WORLD IN CONFLICT',
accion: 'JUGAR',
icono: 'assets/iconos/play.svg'

},


];

const datosCards6 = [
  {
  imagen: 'assets/images/Fear-2.jpg',
  titulo: 'FEAR 2',
  precio: '$2.99',
  accion: 'AÑADIR',
  icono: 'assets/iconos/carrito-vender.svg'
},
{
  imagen: 'assets/images/Silent-Hill-2.jpg',
  titulo: 'SILENT HILL 2',
  accion: 'AÑADIR',
  precio: '$1.99',
  icono: 'assets/iconos/carrito-vender.svg'
},

{
  imagen: 'assets/images/Resident-Evil-2.jpg',
  titulo: 'RESIDENT EVIL 2 REMAKE',
  accion: 'AÑADIR',
  precio: '$7.99',
  icono: 'assets/iconos/carrito-vender.svg'

},
{
  imagen: 'assets/images/Outlast.jpg',
  titulo: 'OUTLAST',
  precioTachado: '$3.99',
  precio: '$2.99',
  accion: 'AÑADIR',
  icono: 'assets/iconos/carrito-vender.svg'

},
{
  imagen: 'assets/images/The-Evil-Witihin-2.jpg',
  titulo: 'THE EVIL WITHIN 2',
  precio: '$3.99',
  accion: 'JUGAR',
  icono: 'assets/iconos/carrito-vender.svg'

},
{
imagen: 'assets/images/Dead-Space.jpg',
titulo: 'DEAD SPACE REMAKE',
precio: '$1.99',
accion: 'AÑADIR',
icono: 'assets/iconos/carrito-vender.svg'

},
{
imagen: 'assets/images/Phasmophobia.jpg',
titulo: 'PHASMOPHOBIA',
precio: '$2.99',
accion: 'AÑADIR',
icono: 'assets/iconos/carrito-vender.svg'

},
{
imagen: 'assets/images/Amnesia.jpg',
titulo: 'AMNESIA MACHINE FOR PIGS',
precio: '$1.99',
accion: 'AÑADIR',
icono: 'assets/iconos/carrito-vender.svg'

},{
imagen: 'assets/images/Fatal-Frame-II.jpg',
titulo: 'FATAL FRAME II',
accion: 'JUGAR',
icono: 'assets/iconos/play.svg'

},
{
imagen: 'assets/images/The-Backrooms-Game.jpg',
titulo: 'THE BACKROOMS GAME',
accion: 'JUGAR',
icono: 'assets/iconos/play.svg'

},
{
imagen: 'assets/images/Agony.jpg',
titulo: 'AGONY',
precioTachado: '$5.99',
precio: '$4.99',
accion: 'AÑADIR',
icono: 'assets/iconos/carrito-vender.svg'

},
{
imagen: 'assets/images/Valorant.jpg',
precio: '$6.99',
titulo: 'CHERNOBYLITE',
accion: 'AÑADIR',
icono: 'assets/iconos/carrito-vender.svg'

},


];









  function crearTarjetas(swiperContainer, datosCards) {
        const swiperWrapper = swiperContainer.querySelector('.swiper-wrapper');

        datosCards.forEach((cardData) => {
          const swiperSlide = document.createElement('div');
          swiperSlide.classList.add('swiper-slide');

          const card = document.createElement('div');
          card.classList.add('swiper-slide');

          // Crear la imagen y otros elementos de la tarjeta como en el ejemplo anterior...
          const cardImage = document.createElement('img');
          cardImage.classList.add('card-image');
          cardImage.src = cardData.imagen;
          cardImage.alt = cardData.titulo;
          card.appendChild(cardImage);

          const cardDescription = document.createElement('div');
          cardDescription.classList.add('card-description');

          const cardTitle = document.createElement('div');
          cardTitle.classList.add('card-title');
          const titulo = document.createElement('h4');
          titulo.textContent = cardData.titulo;
          cardTitle.appendChild(titulo);

          cardDescription.appendChild(cardTitle);

          const cardBottom = document.createElement('div');
          cardBottom.classList.add('card-bottom');

          // Verificar la acción y agregar precio si es "Añadir" o "Jugar"
          if (cardData.accion === 'AÑADIR' || cardData.accion === 'JUGAR') {
            const cardPriceContainer = document.createElement('div');
            cardPriceContainer.classList.add('card-price-container');
            
            
            if (cardData.accion === 'AÑADIR' && cardData.precioTachado) {
              const cardSecondPrice = document.createElement('div');
              cardSecondPrice.classList.add('card-second-price');
              cardSecondPrice.textContent = cardData.precioTachado;
              cardPriceContainer.appendChild(cardSecondPrice);
            }

            const cardPrice = document.createElement('div');
            cardPrice.classList.add('card-price');
            cardPrice.textContent = cardData.precio;
            cardPriceContainer.appendChild(cardPrice);

            // Opcionalmente, agregar un segundo precio tachado si la acción es "Añadir"
            

            cardBottom.appendChild(cardPriceContainer);
          }

          const cardActionIconContainer = document.createElement('div');
          cardActionIconContainer.classList.add('card-action-icon-container');

          const cardAction = document.createElement('div');
          cardAction.classList.add('card-add');
          const accion = document.createElement('p');
          accion.textContent = cardData.accion;
          cardAction.appendChild(accion);

          const cardCart = document.createElement('div');
          cardCart.classList.add('card-cart');
          const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
          const image = document.createElementNS('http://www.w3.org/2000/svg', 'image');
          svg.classList.add('car-icono-svg');
          image.setAttributeNS('http://www.w3.org/1999/xlink', 'href', cardData.icono);
          svg.appendChild(image);
          cardCart.appendChild(svg);

          cardActionIconContainer.appendChild(cardAction);
          cardActionIconContainer.appendChild(cardCart);

          cardBottom.appendChild(cardActionIconContainer);

          cardDescription.appendChild(cardBottom);

          card.appendChild(cardDescription);
          swiperSlide.appendChild(card);
          swiperWrapper.appendChild(swiperSlide);
        });
      } 


  
      function crearConfiguracionCarrusel(nextButtonSelector, prevButtonSelector) {
        return {
            navigation: {
                nextEl: nextButtonSelector,
                prevEl: prevButtonSelector
            },
            slidesPerView: 1,
            spaceBetween: 10,
            pagination: {
                el: '.swiper-pagination',
                clickable: true
            },
            breakpoints: {
                620: {
                    slidesPerView: 1,
                    spaceBetween: 20,
                },
                680: {
                    slidesPerView: 2,
                    spaceBetween: 40,
                },
                920: {
                    slidesPerView: 3,
                    spaceBetween: 40,
                },
                1240: {
                    slidesPerView: 4,
                    spaceBetween: 50,
                },
            }
        };
    }

    



    document.addEventListener('DOMContentLoaded', function () {
      const menuIcon = document.getElementById('menu-icon');
      const navbar = document.querySelector('.navbar');
      const userIcon = document.getElementById('user-icon');
      const userDropdown = document.getElementById('user-dropdown');
  
    
  
     
  
      const carruselConfiguraciones = [
        {
            containerSelector: '.mySwiper-1',
            nextButtonSelector: '.swiper-button-next-1', // Selector único para el primer carrusel
            prevButtonSelector: '.swiper-button-prev-1', // Selector único para el primer carrusel
            datosCards: datosCards1
        },
        {
            containerSelector: '.mySwiper-2',
            nextButtonSelector: '.swiper-button-next-2', // Selector único para el segundo carrusel
            prevButtonSelector: '.swiper-button-prev-2', // Selector único para el segundo carrusel
            datosCards: datosCards2
        },
        {
          containerSelector: '.mySwiper-3',
          nextButtonSelector: '.swiper-button-next-3', // Selector único para el segundo carrusel
          prevButtonSelector: '.swiper-button-prev-3', // Selector único para el segundo carrusel
          datosCards: datosCards3
      },
        {
          containerSelector: '.mySwiper-4',
          nextButtonSelector: '.swiper-button-next-4', // Selector único para el segundo carrusel
          prevButtonSelector: '.swiper-button-prev-4', // Selector único para el segundo carrusel
          datosCards: datosCards4
      },
      {
        containerSelector: '.mySwiper-5',
        nextButtonSelector: '.swiper-button-next-5', // Selector único para el segundo carrusel
        prevButtonSelector: '.swiper-button-prev-5', // Selector único para el segundo carrusel
        datosCards: datosCards5
    },
    {
      containerSelector: '.mySwiper-6',
      nextButtonSelector: '.swiper-button-next-6', // Selector único para el segundo carrusel
      prevButtonSelector: '.swiper-button-prev-6', // Selector único para el segundo carrusel
      datosCards: datosCards6
  }
    ];
    

  
    carruselConfiguraciones.forEach((configuracion, index) => {
    
  
      const carrusel = new Swiper(configuracion.containerSelector, {
          ...crearConfiguracionCarrusel(configuracion.nextButtonSelector, configuracion.prevButtonSelector)
      });
      crearTarjetas(carrusel.el, configuracion.datosCards);

      carrusel.on('slideChangeTransitionStart', () => {
        // Obtén la tarjeta actualmente visible
        const activeSlide = carrusel.slides[carrusel.activeIndex];
    
        // Agrega la clase para activar la animación de agrandamiento
        activeSlide.classList.add('card-slide-active');
    
        // Elimina la clase después de un tiempo para que la animación se revierta
        setTimeout(() => {
            activeSlide.classList.remove('card-slide-active');
        }, 300); // Ajusta el tiempo según la duración de tu transición CSS
    });
  });

  
      menuIcon.addEventListener('click', function () {
          navbar.classList.toggle('show-menu');
      });
  
      userIcon.addEventListener('click', function () {
          if (userDropdown.style.display === 'block') {
              userDropdown.style.display = 'none';
          } else {
              userDropdown.style.display = 'block';
          }
      });

      carrusel.on('slideChangeTransitionStart', () => {
     
  
      // Más funciones y código aquí si es necesario
  });


});