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

    function init() {
  
      $('.cart .cart-form .cart-form-col:nth-child(2) h2').html('Discounts & Gift Card <span class="icon i-expand_more"></span>');
      $('.giftcard-row .input-col label').html('Gift Card</span>');
      $('.discount-form label').html('Discount code</span>');
      $('.summary h2').html('Order Summary');
      
      $('#txt_GiftCardNumber').attr('placeholder', '1234 ABCD');
      $('#txt_GiftCardPin').attr('placeholder', 'XXXX');
      
      $('.cart-checkout-method > div').after('<a href="#" class="button back-button">Back</a>');

      $('body').on('click', '.cart .cart-form .cart-form-col:nth-child(2) h2',function () {
          $(this).toggleClass('eg-active');
          $(this).next().slideToggle(350); 
          $(this).next().next().slideToggle(350); 
        });
        $('.cart .cart-form .cart-form-col:nth-child(2) h2').click();
  
        valueCheck();
        
          $('.checkout-type-form .intro').slideUp(350); 
          $('.checkout-type-form fieldset:nth-of-type(1)').slideUp(350); 
          $('.checkout-type-form fieldset:nth-of-type(3)').slideUp(350);
        $('body').on('click', '.cart-checkout-method .checkout-type-form fieldset:nth-of-type(2) label',function () {
          $(this).parents().find('.checkout-type-form .intro').slideDown(350); 
          $(this).parents().find('.checkout-type-form fieldset:nth-of-type(1)').slideDown(350); 
          $(this).parents().find('.checkout-type-form fieldset:nth-of-type(3)').slideDown(350);
        });
        $('body').on('click','.checkout-type-form .checkout-type label',function(){
          $(this).parents('.cart-checkout-method').addClass('eg-shadow');
        });
      
        $('body').on('click','.cart-checkout-method .back-button', function(){
          $('.checkout-type-form .intro').slideUp(350); 
          $('.checkout-type-form fieldset:nth-of-type(1)').slideUp(350); 
          $('.checkout-type-form fieldset:nth-of-type(3)').slideUp(350);
          $(this).parents('.cart-checkout-method').removeClass('eg-shadow');
        })

  }

  function valueCheck(){
      var egTotalWithSymbol = $('.summary .total td').html().trim().split('$');
      var egTotalExtraRemove = egTotalWithSymbol[1].split('.');
      var egNetTotal = egTotalExtraRemove[0];
        $('.eg-free-delivery, .eg-free-delivery-less').remove();
      if(egNetTotal > 299 ){
          $('.summary').append('<p class="eg-free-delivery">Your order qualifies for free shipping*</p>');
      }
    else{
      $('.summary').append('<p class="eg-free-delivery-less">Free delivery on orders over $299. Freight will be calculated at the next step*</p>');
    }
  }
      onLoadJqueryLibrary(function () {
      $ = window.jQuery;
      waitForElement('.cart .cart-form .cart-form-col:nth-child(2) h2', init, 50, 25000);
    }, 50, 10000);
  } catch (e) {
    if (debug) console.log(e, "error in Test" + variation_name);
  }
})();