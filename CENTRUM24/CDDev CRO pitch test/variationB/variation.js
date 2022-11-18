(function () {
  try {
    /* main variables */
    var debug = 0;
    var variation_name = "";

    /* all Pure helper functions */

    function waitForElement(selector, trigger, delayInterval, delayTimeout) {
      var interval = setInterval(function () {
        if (
          document &&
          document.querySelector(selector) &&
          document.querySelectorAll(selector).length > 0
        ) {
          clearInterval(interval);
          trigger();
        }
      }, delayInterval);
      setTimeout(function () {
        clearInterval(interval);
      }, delayTimeout);
    }

    
    var Icon ='<img class="tick-icon" src="https://cfactory-img.s3.amazonaws.com/STN/tick.svg">';

var list1 =''+ 
'  <ul class="eg-list">'+ 
'      <li>'+ Icon +'Poprosimy Cię o zrobienie zdjęć Twojego dowodu osobistego, twarzy i o wykonanie konkretnego gestu, np. kiwnięcie głową.</li>'+ 
'      <li>'+ Icon +'Gdy zatwierdzimy wszystkie te kroki, Twoje konto będzie aktywne.</li>'+ 
'      <li>'+ Icon +'Wybierz ten sposób, jeśli chcesz założyć konto szybko i samodzielnie.</li>'+ 
'  </ul>';

var list2 =''+ 
'  <ul class="eg-list">'+ 
'      <li>'+ Icon +'Do złożenia wniosku potrzebujesz komputer lub smartfon z kamerą oraz dowód osobisty. </li>'+ 
'      <li>'+ Icon +'Wypełnij wniosek i połącz się z doradcą, który potwierdzi Twoje dane.</li>'+ 
'      <li>'+ Icon +'Wybierz ten sposób, jeśli potrzebujesz wsparcia naszego doradcy.</li>'+ 
'  </ul>';

var list3 =''+ 
'  <ul class="eg-list">'+ 
'      <li>'+ Icon +'Wypełnij wniosek, a kurier dostarczy Ci umowę do podpisu.</li>'+ 
'      <li>'+ Icon +'Gdy otrzymamy podpisane przez Ciebie dokumenty, otworzymy konto.</li>'+ 
'      <li>'+ Icon +'Umowę podpiszesz szybko i wygodnie na tablecie, z którym przyjedzie kurier <div class="tootip"><img src="https://cfactory-img.s3.amazonaws.com/STN/infost.svg" class="tooltip-icon"><p class="tooltip-text"><img src="https://www.centrum24.pl/form/info-blue.ff705e6c226fa91644b1.png" class="tooltip-text-icon">Podpis na umowie będzie zawierał Twoje dane biometryczne (np. szybkość, siła nacisku). Abyśmy mogli je przetwarzać, potrzebujemy Twojej zgody, którą wyrazisz podczas wizyty kuriera. Nie chcesz nam jej dać? Skorzystaj z innej metody założenia konta.</p></div></li>'+ 
'  </ul>'+
'   <p class="eg-para">Mieszkasz w jednym z miast znajdującym się na liście? Jeśli Twoje miasto nie znajduje się na liście to kurier przyjedzie do Ciebie z umową w formie papierowej.</p>';


var list4 =''+ 
'  <ul class="eg-list">'+ 
'      <li>'+ Icon +'Poprosimy Cię o przelanie 1 zł z Twojego konta w innym banku.</li>'+ 
'      <li>'+ Icon +'Twoje dane w innym banku muszą być zgodne z danymi, które podasz nam we wniosku.</li>'+ 
'      <li>'+ Icon +'Po sprawdzeniu Twojego wniosku, zwrócimy Ci 1 zł na to samo konto.</li>'+ 
'  </ul>';


    function init() {

      document.querySelector('body').classList.add('extra-options-hide');

      document.querySelector('.ro-product-selector-option-container:nth-child(1) .ro-product-selector-header').insertAdjacentHTML('beforebegin', '<p class="header-top"><img src="https://cfactory-img.s3.amazonaws.com/STN/np_speed.svg">Najszybszy sposób na otwarcie konda</p>');
      document.querySelector('.ro-product-selector-option-container:nth-child(1) .ro-product-selector-body-text-section').innerHTML = list1;
      document.querySelector('.ro-product-selector-option-container:nth-child(2) .ro-product-selector-body-text-section').innerHTML = list2;
      document.querySelector('.ro-product-selector-option-container:nth-child(4) .ro-product-selector-body-text-section').innerHTML = list3;
      document.querySelector('.ro-product-selector-option-container:nth-child(5) .ro-product-selector-body-text-section').innerHTML = list4;

      document.querySelector('santander-ex-form-presenter#form-ro').insertAdjacentHTML('afterend','<div class="eg-button"><button class="ro-product-selector-secondary-button">Wybierz inną metodę</button></div>')

      document.querySelector('.eg-button button').addEventListener('click', function(){
        document.querySelector('body').classList.remove('extra-options-hide');
      });

      var buttonText = document.querySelectorAll('.ro-product-selector-button-wrapper button')

      for(var i =0; i < buttonText.length; i++){
        buttonText[i].innerHTML = 'Wybierz tę metodę';
      }

    }

    /* Initialise variation */
    waitForElement(".ro-product-selector-option-container:nth-child(5) .ro-product-selector-body-text-section", init, 100, 35000);
  } catch (e) {
    if (debug) console.log(e, "error in Test" + variation_name);
  }
})();
