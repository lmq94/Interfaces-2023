let spiderWhite = document.getElementById('spiderWhite');
let spiderRed = document.getElementById('spiderRed');
let spiderBlack = document.getElementById('spiderBlack');

let popupStacy = document.getElementById("popupStacy");
let popupPeter = document.getElementById("popupPeter");
let popupMorales = document.getElementById("popupMorales");

let closePopup1 = document.getElementById("close1");
let closePopup2 = document.getElementById("close2");
let closePopup3 = document.getElementById("close3");

let section7 = document.getElementById('section7');


spiderWhite.addEventListener('click', function(){
    section7.style.backgroundImage = 'none';
    popupStacy.classList.add('show');
});

spiderRed.addEventListener('click', function(){
    section7.style.backgroundImage = 'none';
    popupPeter.classList.add('show');
});

spiderBlack.addEventListener('click', function(){
    section7.style.backgroundImage = 'none';
    popupMorales.classList.add('show');
});
 

closePopup1.addEventListener('click', function(){
    popupStacy.classList.remove('show');
    section7.style.backgroundImage = 'url(./img/section7/trapecioBlanco.png)'; 
});

closePopup2.addEventListener('click', function(){
    popupPeter.classList.remove('show');
    section7.style.backgroundImage = 'url(./img/section7/trapecioBlanco.png)'; 
});

closePopup3.addEventListener('click', function(){
    popupMorales.classList.remove('show');
    section7.style.backgroundImage = 'url(./img/section7/trapecioBlanco.png)';    
});



spiderWhite.addEventListener('mouseover', function(){
    section7.style.backgroundImage= 'url(./img/section7/pink_bground.png)'; //opcional de cambio de color fondo
    section7.style.backgroundSize = '100% 880px';
    section7.style.backgroundRepeat = 'no-repeat';

    spiderWhite.style.transform = 'scale(1.05)';
    spiderWhite.style.filter= 'blur(0)';
    //modifico el otro spider para que sobresalga el actual
    spiderRed.style.transform = 'scale(0.7)';
    spiderRed.style.filter= 'blur(5px)';
    //modifico el otro spider para que sobresalga el actual
    spiderBlack.style.transform = 'scale(0.7)';
    spiderBlack.style.filter= 'blur(5px)';
});

spiderRed.addEventListener('mouseover', function(){
    section7.style.backgroundImage= 'url(./img/section7/blue_bground.png)'; //opcional de cambio de color fondo
    section7.style.backgroundSize = '100% 880px';
    section7.style.backgroundRepeat = 'no-repeat';
    spiderRed.style.transform= 'scale(1.1)';
    spiderRed.style.filter= 'blur(0)';
    spiderWhite.style.transform = 'scale(0.7)';
    spiderWhite.style.filter= 'blur(5px)';
    spiderBlack.style.transform = 'scale(0.7)';
    spiderBlack.style.filter= 'blur(5px)';

});

spiderBlack.addEventListener('mouseover', function(){
    section7.style.backgroundImage= 'url(./img/section7/grey_bground.png)'; //opcional de cambio de color fondo
    section7.style.backgroundSize = '100% 880px';
    section7.style.backgroundRepeat = 'no-repeat';
    spiderBlack.style.transform ='scale(1.1)';
    spiderBlack.style.filter= 'blur(0)';
    spiderWhite.style.transform = 'scale(0.7)';
    spiderWhite.style.filter= 'blur(5px)';
    spiderRed.style.transform = 'scale(0.7)';
    spiderRed.style.filter= 'blur(5px)';
});
