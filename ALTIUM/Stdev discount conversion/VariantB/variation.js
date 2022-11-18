(function () {
  try {

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
      var $ = window.jQuery

      var egDiscountPrice = $('#selectPaymentTerms option:nth-child(2)').text().replace('12-monthly installment payments - ', ''); 

      var  egDiscountPrice1 = egDiscountPrice.replace('/month', ''); 

      if($('.b-qnt__price .b-qnt__price__item._total #labelPrice:contains("0/")')){
        $('.b-qnt__price .b-qnt__price__item._total #labelPrice:contains("0/")').closest('.b-qnt__price').addClass('eg-discount');
      }else{
        $('.b-qnt__price .b-qnt__price__item._total #labelPrice:contains("0/")').closest('.b-qnt__price').remove('eg-discount');
      }

      
      $('#totalDiscount ._discount #labelTotalDiscount').html(egDiscountPrice1);
    }

    onLoadJqueryLibrary(function () {
      waitForElement(".b-qnt__price .b-qnt__price__item._total #labelPrice", init, 100, 35000);
    }, 50, 10000)
  } catch (e) {
    if (debug) console.log(e, "error in Test" + variation_name);
  }
})();