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

    /* Variation functions */

    /* Variation Init */
    function init() {


      document.querySelector('.foreign-exchange.page_section').insertAdjacentElement('beforebegin', document.querySelector('.calculator'));

      document.querySelector('.banner h1').innerHTML = 'Send money simply.'

      document.querySelector('html body .tranfer-paid .tranfer-paid-text + p').innerHTML= '<span>Monito</span> and <span>Instarem</span> bring to you </br> the best way to send money overseas.';

      var couponValue = document.querySelector('.tranfer-paid .margin-30 .banner_subheading #monito-coupon-value').innerHTML;

      document.querySelector('.tranfer-paid h1').insertAdjacentHTML('beforebegin', '<p class="eg-coupon"><b>Get</b> <span id="monito-coupon-value">'+ couponValue +' bonus</span> on First Transfer</p>')
    
      setTimeout(function(){
        setDropdown();
    },6000);
      document.querySelector('html body .tranfer-paid .margin-30 p:last-of-type').insertAdjacentHTML('afterend', '<span class="eg-referral">*Use as referral code in the form</span>');

    }
    function setDropdown(){
      var param = getParam();
      var sender = param.split('-')[0];
      var reciever= param.split('-')[1];
      var sourceLink = document.querySelectorAll('#dropdownMenuButtonSource + .dropdown-menu ul li span[data-countrycode]');
      var destination = document.querySelectorAll('#dropdownMenuButtonDestination + .dropdown-menu ul li span[data-countrycode]');
      for(var i=0; i< sourceLink.length; i++){
         if(sourceLink[i].getAttribute('data-countrycode') == sender){
          sourceLink[i].parentElement.click();
        }
       }
       for(var j=0; j< destination.length; j++){
        console.log('jj',reciever,destination[j].getAttribute('data-countrycode'));
        if(destination[j].getAttribute('data-countrycode') == reciever){
          console.log('d', destination[j].parentElement);
          destination[j].parentElement.click();
        }
       }
       var priceCopy = document.querySelector('#unit_calculation').textContent;
       document.querySelector('html body .tranfer-paid .margin-30 p:last-of-type').innerHTML = 'Use Code: <span class="monito-coupon-code">MONITO50</span>';
       var egSourceFlag = document.querySelector('.calculator .container .source-dropdown .dropdown-toggle .flag-img').outerHTML;
 
       var egDEstinationFlag = document.querySelector('.calculator .container .destination-dropdown .dropdown-toggle .flag-img').outerHTML;
 
       var sourceValue = document.querySelector('.calculator .container #gross_source_amount').value;
 
       var destinationValue = document.querySelector('.calculator .container #destination_amount').value;
 
       var heroConvert=''+ 
       '  <div class="eg-convert">'+ 
       '      <div class="eg-convert-inr">'+ 
       '          <div class="eg-source">'+ egSourceFlag +
       '              <p class="eg-source-price"> '+ priceCopy.split('=')[0] +'</p>'+ 
       '          </div>'+ 
       '          <div class="eg-equal"> = </div>'+ 
       '          <div class="eg-destination">'+ egDEstinationFlag + 
       '              <p class="eg-destination-price">'+  priceCopy.split('=')[1]  +'</p>'+ 
       '          </div>'+ 
       '      </div>'+ 
       '  </div>';
   if(document.querySelector('.eg-convert'))
   document.querySelector('.eg-convert').remove();
       document.querySelector('.tranfer-paid h1').insertAdjacentHTML('beforebegin', heroConvert);
    }

    function getParam(){
      var url_string = window.location.href
var url = new URL(url_string);
var c = url.searchParams.get("utm_campaign");
return c;
    }

    /* Initialise variation */
    waitForElement(".calculator .container #destination_amount", init, 100, 25000);
  } catch (e) {
    if (debug) console.log(e, "error in Test" + variation_name);
  }
})();