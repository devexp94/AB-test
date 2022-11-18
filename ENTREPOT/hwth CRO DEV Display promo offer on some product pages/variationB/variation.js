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

    function init() {
       if(!document.querySelector('.eg-brico'))
      document.querySelector('.m-product-stock-real').insertAdjacentHTML('afterend', '<div class="eg-brico-outer"><a class="eg-brico" href="https://www.entrepot-du-bricolage.fr/les-services/bricoexperts"><img src="https://www.entrepot-du-bricolage.fr/mediaw/cms/wysiwyg/block/homepage-infos/bricoexperts_3.jpg"></a></div>');
      
if(!document.querySelector('.eg-location'))
      document.querySelector('.m-product-stock-real').insertAdjacentHTML('beforeend', '<a class="eg-location" href="https://www.entrepot-du-bricolage.fr/les-services/location-vehicule"><img src="https://drive.google.com/uc?id=1yoQ4fCh1JC5XfPunjwrFLJOxz5neXa8Y"><span class="eg-location-text">Besoin d\'un véhicule pour transporter vos achats ? Avec la Carte Sourire, la 1ère heure de location est gratuite* ! <span class="eg-location-link">En savoir plus ></span></span></a>');
      
      var productName = document.querySelector('.m-product-description h1').textContent;
      window.dataLayer = window.dataLayer || [];
        window.dataLayer.push({
          'event': 'campClick',
          'eventAction': 'P012 | Impression',
          'eventLibelle': productName
        });
      
  
        if(!document.querySelector('.o-product-stock .m-product-shipping')){
          document.querySelector('.eg-brico-outer > .eg-brico').insertAdjacentElement('beforebegin', document.querySelector('.o-product-stock .m-product-shipping'));
        }
 

        document.querySelector('.o-product-detail  .m-add-cart-button').addEventListener('click',function(){
    
window.dataLayer = window.dataLayer || [];
        window.dataLayer.push({
          'event': 'campClick',
          'eventAction': 'P012 | Mise au panier',
          'eventLibelle': productName
        });
    
});
    }

    /* Initialise variation */
    waitForElement(".m-product-stock-real", init, 50, 25000);
  } catch (e) {
    if (debug) console.log(e, "error in Test" + variation_name);
  }
})();