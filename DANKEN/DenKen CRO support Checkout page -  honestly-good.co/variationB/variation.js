(function () {
  try {
    var $ = window.jQuery;
    var debug = 0;
    var variation_name = "";
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
    function onLoadJqueryLibrary(trigger, delayInterval, delayTimeout) {
      var interval = setInterval(function () {
        if (window.jQuery && window.jQuery.fn) {
          clearInterval(interval);
          trigger();
        }
      }, delayInterval);
      setTimeout(function () {
        clearInterval(interval);
      }, delayTimeout);
    }

    var egContact = '<p class="eg-contact-heading eg-tab-heading">1. CONTACT INFORMATION</p>';
    var egDelivery = '<p class="eg-delivery-heading eg-tab-heading">2. DELIVERY ADDRESS <span class="eg-edit">Edit</span></p>';
    var egBilling = '<p class="eg-billing-heading eg-tab-heading">3. BILLING DETAILS</p>';

    var egOrder = '<p class="eg-order-heading">ORDER SUMMARY <i class="fas fa-chevron-up"></i></p>';

    function init() {

      if(window.innerWidth < 768){
        

        $('body').on('click', '.eg-order-heading',function () {
          $(this).toggleClass('eg-active');
          $(this).next().slideToggle(350); 
        });
      }

      if(window.location.pathname === '/sign-up/'){
        $('.signup .whitebox .box-body').before(egContact);
        $('.signup .whitebox .box-body').after(egDelivery + egBilling);
  
        $('.signup .whitebox .subscription-sidebar').before(egOrder);
      
        $('.signup .whitebox #checkoutSignupForm > .text-center').insertBefore('.signup .whitebox #checkoutSignupForm > .row');
  
        $('.signup .whitebox #checkoutSignupForm > .text-center h4').append($('.signup .whitebox #checkoutSignupForm > .text-center .link-primary'));
  
      }else{

        $('.card-details .whitebox .box-body').before(egContact + egDelivery);
  
        $('.card-details .whitebox .payment-sidebar').before(egOrder);

        $('form.checkout > div:first-child, form.checkout > .delivery-add, form.checkout > div:nth-child(4), form.checkout > div:nth-child(5), form.checkout > div:nth-child(3), form.checkout > .woocommerce-terms-and-conditions-wrapper').wrapAll('<div class="eg-delivery-container"></div>')

        $('.card-details .checkout .woocommerce-terms-and-conditions-wrapper').after('<button type="button" class="btn btn-primary btn-block my-3 w-100 w-lg-75 mx-auto" id="eg-continue-payment">Continue to payment</button>');

        $(".payment-sidebar .deliver-day" ).clone().insertAfter('.card-details .checkout .woocommerce-terms-and-conditions-wrapper');

        $('.card-details .eg-delivery-container').after(egBilling);

        $('.eg-billing-heading ~ br, .eg-billing-heading ~ div, .eg-billing-heading ~ input').wrapAll('<div class="eg-billing-container"></div>')

        billingToggle();

        $('body').on('click', '.eg-delivery-heading',function () {
          $(this).toggleClass('eg-active');
          $(this).next().find('.eg-delivery-container').slideToggle(350); 
          billingToggle();
        });

        $('body').on('click', '#eg-continue-payment', function(){
          $(this).parent().find('.eg-delivery-heading').toggleClass('eg-active');
          $(this).parents().find('.eg-delivery-container').slideToggle(350); 
          billingToggle();
        });

        $('body').on('click', '.eg-billing-heading', function(){
          billingToggle();
        });

      }
          
      $('body').on('change','.eg-delivery-container #deliveryDateSelection',function(){
         $('.payment-sidebar #deliveryDateSelection').val($(this).val());
      });
    
      $('.eg-order-heading').click();
    }

    function billingToggle(){
      $('.eg-billing-container').slideToggle(350);
      $('.card-details .whitebox .box-body > form:not(.checkout)').slideToggle(350); 
      $('.card-details .whitebox .box-body > .row.my-1.text-center').slideToggle(350);
      $('.card-details .whitebox .box-body > #submitPayment').slideToggle(350);
    }

    onLoadJqueryLibrary(function () {
      $ = window.jQuery;
      waitForElement('.signup .whitebox .subscription-sidebar, .card-details .whitebox .payment-sidebar', init, 50, 25000);
    }, 50, 10000);
  } catch (e) {
    if (debug) console.log(e, "error in Test" + variation_name);
  }
})();