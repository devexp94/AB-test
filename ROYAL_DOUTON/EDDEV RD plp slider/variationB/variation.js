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

    function doWhenJqueryLoaded (todoWhenLoaded) {
      var waitForjQuery = setInterval(function () {
        if (
          typeof window.jQuery != "undefined" ||
          typeof window.$ != "undefined"
        ) {
          clearInterval(waitForjQuery);
          todoWhenLoaded();
        }
      }, 50);
      setTimeout(function () {
        clearInterval(waitForjQuery);
      }, 10000);
    }

    function doWhenSlickCarouselLoaded(todoWhenLoaded) {
      var waitForSlick = setInterval(function () {
        if (
          window.jQuery &&
          window.jQuery.fn &&
          window.jQuery.fn.slick
        ) {
          clearInterval(waitForSlick);
          todoWhenLoaded();
        }
      }, 500);
      setTimeout(function () {
        clearInterval(waitForSlick);
      }, 10000);
    }
    
    var dinnerData = {
      "RoyalDoultonAmericas_1062330": [
          "https://glb-oned-cdn-prod.azureedge.net/-/media/products/2022/02/02/20/35/resource_royaldoultonamericas_1062330.ashx?rev=b08f22ca123b434ba69e943a986deffa&q=100&iw=644&ih=644&crop=1",
          "https://glb-oned-cdn-prod.azureedge.net/-/media/product-images/royaldoultonamericas/1815-pure/1062330_royaldoultonamericas_02_1815_pure_plate.ashx?rev=b86e087118d643359ba8b4774346025e&q=100&iw=644&ih=644&crop=1",
          "https://glb-oned-cdn-prod.azureedge.net/-/media/product-images/royaldoultonamericas/1815-pure/1062330_royaldoultonamericas_03_1815_pure_plate.ashx?rev=541657a1a74343299c0295f5f184a791&q=100&iw=644&ih=644&crop=1",
          "https://glb-oned-cdn-prod.azureedge.net/-/media/product-images/royaldoultonamericas/1815-pure/1062330_royaldoultonamericas_04_1815_pure_plate.ashx?rev=de62a08e08a94ef785a5866efc1d9a47&q=100&iw=644&ih=644&crop=1",
          "https://glb-oned-cdn-prod.azureedge.net/-/media/product-images/royaldoultonamericas/1815-pure/1062330_royaldoultonamericas_05_1815_pure_plate.ashx?rev=d7683cadc1774d048f1bae4418b9d951&q=100&iw=644&ih=644&crop=1",
          "https://glb-oned-cdn-prod.azureedge.net/-/media/product-images/royaldoultonamericas/1815-pure/1062330_royaldoultonamericas_06_1815_pure_plate.ashx?rev=894ff20ebdc3445e874ad47cc8aad632&q=100&iw=644&ih=644&crop=1",
          "https://glb-oned-cdn-prod.azureedge.net/-/media/product-images/royaldoultonamericas/1815-pure/1062330_royaldoultonamericas_07_1815_pure_plate.ashx?rev=-1&q=100&iw=644&ih=644&crop=1",
          "https://glb-oned-cdn-prod.azureedge.net/-/media/product-images/royaldoultonamericas/1815-pure/1062330_royaldoultonamericas_08_1815_pure_plate.ashx?rev=-1&q=100&iw=644&ih=644&crop=1",
          "https://glb-oned-cdn-prod.azureedge.net/-/media/product-images/royaldoultonamericas/1815-pure/1062330_royaldoultonamericas_09_1815_pure_plate.ashx?rev=-1&q=100&iw=644&ih=644&crop=1",
          "https://glb-oned-cdn-prod.azureedge.net/-/media/product-images/royaldoultonamericas/1815-pure/1062330_royaldoultonamericas_10_1815_pure_plate.ashx?rev=-1&q=100&iw=644&ih=644&crop=1",
      ],
      "RoyalDoultonAmericas_1056158": [
          "https://glb-oned-cdn-prod.azureedge.net/-/media/products/2020/04/22/04/23/resource_royaldoultonamericas_1056809.ashx?rev=54fd6fdf2b1b42dc93b9d7155ecb5bda&q=100&iw=644&ih=644&crop=1",
          "https://glb-oned-cdn-prod.azureedge.net/-/media/product-images/royaldoultonamericas/signature-1815/1056809_royaldoultonamericas_02_signature_1815_green_dinner_plate__setof2.ashx?rev=-1&q=100&iw=644&ih=644&crop=1",
          "https://glb-oned-cdn-prod.azureedge.net/-/media/product-images/royaldoultonamericas/signature-1815/1056809_royaldoultonamericas_03_signature_1815_green_dinner_plate__setof2.ashx?rev=-1&q=100&iw=644&ih=644&crop=1",
      ],
      "RoyalDoultonAmericas_1056809": [
          "https://glb-oned-cdn-prod.azureedge.net/-/media/products/2020/09/16/00/42/resource_royaldoultonamericas_1056158.ashx?rev=e71651cdf40b43f59fda015269876e62&q=100&iw=644&ih=644&crop=1",
          "https://glb-oned-cdn-prod.azureedge.net/-/media/product-images/royaldoultonamericas/olio-2020/1056158_royaldoultonamericas_02_olio_white_dinner_plate.ashx?rev=7201b5238ab248a9a10f89fde2716ab2&q=100&iw=644&ih=644&crop=1",
          "https://glb-oned-cdn-prod.azureedge.net/-/media/product-images/royaldoultonamericas/olio-2020/1056158_royaldoultonamericas_03_olio_white_dinner_plate.ashx?rev=d986934405574e9ab210f8734fbef168&q=100&iw=644&ih=644&crop=1",
          "https://glb-oned-cdn-prod.azureedge.net/-/media/product-images/royaldoultonamericas/olio-2020/1056158_royaldoultonamericas_04_olio_top_ofthe_table_award.ashx?rev=24260cf5a84d4effab34b5bbfb849724&q=100&iw=644&ih=644&crop=1",
      ],
      "RoyalDoultonAmericas_1056176": [
          "https://glb-oned-cdn-prod.azureedge.net/-/media/products/2020/09/16/00/42/resource_royaldoultonamericas_1056176.ashx?rev=cba5277666b144df9eab1b2a56b91278&q=100&iw=644&ih=644&crop=1",
          "https://glb-oned-cdn-prod.azureedge.net/-/media/product-images/royaldoultonamericas/olio-2020/1056176_royaldoultonamericas_02_olio_celadon_blue_dinner_plate.ashx?rev=d6ffa4bbe6694113bf813a818f4f9cd4&q=100&iw=644&ih=644&crop=1",
          "https://glb-oned-cdn-prod.azureedge.net/-/media/product-images/royaldoultonamericas/olio-2020/1056176_royaldoultonamericas_02_olio_celadon_blue_dinner_plate.ashx?rev=f9e588c149bb44f7817336157e0c5beb&q=100&iw=644&ih=644&crop=1",
          "https://glb-oned-cdn-prod.azureedge.net/-/media/product-images/royaldoultonamericas/olio-2020/1056176_royaldoultonamericas_04_olio_top_ofthe_table_award.ashx?rev=-1&q=100&iw=644&ih=644&crop=1",
      ],
      "RoyalDoultonAmericas_1056804": [
          "https://glb-oned-cdn-prod.azureedge.net/-/media/products/2020/04/22/04/23/resource_royaldoultonamericas_1056804.ashx?rev=1162904e020f40d694f29482bb36398d&q=100&iw=644&ih=644&crop=1",
          "https://glb-oned-cdn-prod.azureedge.net/-/media/product-images/royaldoultonamericas/signature-1815/1056804_royaldoultonamericas_02_signature_1815_coral_dinner_plate__setof2_q22021.ashx?rev=bc61dbbae2514f789b8e9162fbd8eebf&q=100&iw=644&ih=644&crop=1",
          "https://glb-oned-cdn-prod.azureedge.net/-/media/product-images/royaldoultonamericas/signature-1815/1056804_royaldoultonamericas_03_signature_1815_coral_dinner_plate__setof2.ashx?rev=-1&q=100&iw=644&ih=644&crop=1",
      ],
      "RoyalDoultonAmericas_1051113": [
          "https://glb-oned-cdn-prod.azureedge.net/-/media/products/2020/04/22/04/20/resource_royaldoultonamericas_1051113.ashx?rev=20e8890c69b44700a949294a2819d244&q=100&iw=644&ih=644&crop=1",
      ],
      "RoyalDoultonAmericas_1054417": [
          "https://glb-oned-cdn-prod.azureedge.net/-/media/products/2020/04/22/04/23/resource_royaldoultonamericas_1054417.ashx?rev=80557e134d204829837954b03917a03f&q=100&iw=644&ih=644&crop=1",
          "https://glb-oned-cdn-prod.azureedge.net/-/media/product-images/royaldoultonamericas/gordon-ramsay/maze-light-grey/1054417_royaldoultonamericas_02_gr-maze-grey-dinner-plate.ashx?rev=93cca789efd044fabe3a499e90b68ea3&q=100&iw=644&ih=644&crop=1",
          "https://glb-oned-cdn-prod.azureedge.net/-/media/product-images/royaldoultonamericas/gordon-ramsay/maze-light-grey/1054417_royaldoultonamericas_03_gr-maze-grey-dinner-plate.ashx?rev=eb39f5b62587462a89d8726d28d82a3d&q=100&iw=644&ih=644&crop=1",
      ],
      "RoyalDoultonAmericas_40034435": [
          "https://glb-oned-cdn-prod.azureedge.net/-/media/products/2020/04/22/04/21/resource_royaldoultonamericas_40034435.ashx?rev=ac25ee906651459c94520f6f4f1aaede&q=100&iw=644&ih=644&crop=1",
          "https://glb-oned-cdn-prod.azureedge.net/-/media/product-images/royaldoultonamericas/pacific-blue/40034435_royaldoultonamericas_02_pacific-dinner-plate-28cm.ashx?rev=5384198454754bcbb32be192a73385de&q=100&iw=644&ih=644&crop=1",
      ],
      "RoyalDoultonAmericas_40009456": [
          "https://glb-oned-cdn-prod.azureedge.net/-/media/products/2020/04/22/04/22/resource_royaldoultonamericas_40009456.ashx?rev=eaab6cd5541248709f3190bb94d3fa55&q=100&iw=644&ih=644&crop=1",
          "https://glb-oned-cdn-prod.azureedge.net/-/media/product-images/royaldoultonamericas/pacific-blue/40009456_royaldoultonamericas_02_pacific-dinner-plate-28cm.ashx?rev=50249da941884a40a90e9f6d9697b266&q=100&iw=644&ih=644&crop=1",
      ],
      "RoyalDoultonAmericas_GRMZBL13498": [
          "https://glb-oned-cdn-prod.azureedge.net/-/media/products/2020/04/22/04/20/resource_royaldoultonamericas_grmzbl13498.ashx?rev=27442a750d8146bc890278c41f32cb4d&q=100&iw=644&ih=644&crop=1",
          "https://glb-oned-cdn-prod.azureedge.net/-/media/product-images/royaldoultonamericas/gordon-ramsay/maze-blue/grmzbl13498_royaldoultonamericas_02_gordon-ramsay-maze-blue-plate-28cm.ashx?rev=00dde8c28d534dbcad9f7049cadea6f4&q=100&iw=644&ih=644&crop=1",
      ],
      "RoyalDoultonAmericas_1815TW25101": [
          "https://glb-oned-cdn-prod.azureedge.net/-/media/products/2020/04/22/04/21/resource_royaldoultonamericas_1815tw25101.ashx?rev=a62a7357c8234d1ba95b5a441bb22f13&q=100&iw=644&ih=644&crop=1",
          "https://glb-oned-cdn-prod.azureedge.net/-/media/product-images/royaldoultonamericas/1815-bright/1815tw25101_royaldoultonamericas_02_1815-white-plate-28cm.ashx?rev=b4c4bbb155a44f2791539c55b3721cca&q=100&iw=644&ih=644&crop=1",
      ],
      "RoyalDoultonAmericas_GRMZWH13498": [
          "https://glb-oned-cdn-prod.azureedge.net/-/media/products/2020/04/22/04/21/resource_royaldoultonamericas_grmzwh13498.ashx?rev=a3976050718a4b7b8be07735381b309c&q=100&iw=644&ih=644&crop=1",
          "https://glb-oned-cdn-prod.azureedge.net/-/media/product-images/royaldoultonamericas/gordon-ramsay/maze-white/grmzwh13498_royaldoultonamericas_02_gordon-ramsay-maze-white-plate-28cm.ashx?rev=8157430fa72d4f4f940d73aea45d180e&q=100&iw=644&ih=644&crop=1",
      ],
      "RoyalDoultonAmericas_1051846": [
          "https://glb-oned-cdn-prod.azureedge.net/-/media/products/2020/04/22/04/22/resource_royaldoultonamericas_1051846.ashx?rev=5d25bd3c26dd4c08980af46d9dbb4cca&q=100&iw=644&ih=644&crop=1",
          "https://glb-oned-cdn-prod.azureedge.net/-/media/products/2020/04/22/04/22/resource_royaldoultonamericas_1051846.ashx?rev=5d25bd3c26dd4c08980af46d9dbb4cca&q=100&iw=644&ih=644&crop=1",
          "https://glb-oned-cdn-prod.azureedge.net/-/media/product-images/royaldoultonamericas/1815-bold/1051846_royaldoultonamericas_03_1815-bold-dinner-plate-set-of-6.ashx?rev=be0943d05f1046a488016e9d56ad2230&q=100&iw=644&ih=644&crop=1",
          "https://glb-oned-cdn-prod.azureedge.net/-/media/product-images/royaldoultonamericas/1815-bold/1051846_royaldoultonamericas_04_1815-bold-dinner-plate-set-of-6.ashx?rev=dada4489757f4d9e88fb77dedcca57dd&q=100&iw=644&ih=644&crop=1",
          "https://glb-oned-cdn-prod.azureedge.net/-/media/product-images/royaldoultonamericas/1815-bold/1051846_royaldoultonamericas_05_1815-bold-dinner-plate-set-of-6.ashx?rev=d9ff6342f2b8413ebdde13fccd3c1b7b&q=100&iw=644&ih=644&crop=1",
          "https://glb-oned-cdn-prod.azureedge.net/-/media/product-images/royaldoultonamericas/1815-bold/1051846_royaldoultonamericas_06_1815-bold-dinner-plate-set-of-6.ashx?rev=4c9bd711eac14d87b2b7a5fabcffa4b1&q=100&iw=644&ih=644&crop=1",
          "https://glb-oned-cdn-prod.azureedge.net/-/media/product-images/royaldoultonamericas/1815-bold/1051846_royaldoultonamericas_07_1815-bold-dinner-plate-set-of-6.ashx?rev=293ea450b9c0450fa715a0fad8da3c02&q=100&iw=644&ih=644&crop=1",
      ],
      "RoyalDoultonAmericas_1815TW26727": [
          "https://glb-oned-cdn-prod.azureedge.net/-/media/products/2020/04/22/04/21/resource_royaldoultonamericas_1815tw26727.ashx?rev=151dfeb1ba1b4449af5b92a7691487df&q=100&iw=644&ih=644&crop=1",
          "https://glb-oned-cdn-prod.azureedge.net/-/media/product-images/royaldoultonamericas/1815-bright/1815tw26727_royaldoultonamericas_03_1815-plates-set-of-4-28cm.ashx?rev=cd196f8c1b0042078bfeb78a7167347b&q=100&iw=644&ih=644&crop=1",
      ],
      "RoyalDoultonAmericas_1815TW25071": [
          "https://glb-oned-cdn-prod.azureedge.net/-/media/products/2020/04/22/04/23/resource_royaldoultonamericas_1815tw25071.ashx?rev=55713044d9e640f1879744c5aac437d1&q=100&iw=644&ih=644&crop=1",
      ],
      "RoyalDoultonAmericas_40034710": [
          "https://glb-oned-cdn-prod.azureedge.net/-/media/products/2020/04/22/04/21/resource_royaldoultonamericas_40034710.ashx?rev=9d21580cdcaf4dc1881f87a7051a99f3&q=100&iw=644&ih=644&crop=1",
          "https://glb-oned-cdn-prod.azureedge.net/-/media/product-images/royaldoultonamericas/1815-bowls-of-plenty/40034710_royaldoultonamericas_02_bowls-of-plenty-set-of-4-plates-28cm.ashx?rev=bbf4d2d407ea4637af128d997ae887c3&q=100&iw=644&ih=644&crop=1",
          "https://glb-oned-cdn-prod.azureedge.net/-/media/product-images/royaldoultonamericas/1815-bowls-of-plenty/40034710_royaldoultonamericas_03_bowls-of-plenty-set-of-4-plates-28cm.ashx?rev=651a37e8852a4e7183b39d3cfeb01094&q=100&iw=644&ih=644&crop=1",
      ],
      "RoyalDoultonAmericas_1061154": [
          "https://glb-oned-cdn-prod.azureedge.net/-/media/products/2022/02/22/18/35/resource_royaldoultonamericas_1061154.ashx?rev=4914c312ee614839a84148385653e5a2&q=100&iw=644&ih=644&crop=1",
          "https://glb-oned-cdn-prod.azureedge.net/-/media/product-images/royaldoultonamericas/pacific-stone/1061154_royaldoultonamericas_02_pacific_stone-_dinner_plate_assorted_set_of_4.ashx?rev=-1&q=100&iw=644&ih=644&crop=1",
          "https://glb-oned-cdn-prod.azureedge.net/-/media/product-images/royaldoultonamericas/pacific-stone/1061154_royaldoultonamericas_03_pacific_stone-_dinner_plate_assorted_set_of_4.ashx?rev=-1&q=100&iw=644&ih=644&crop=1",
          "https://glb-oned-cdn-prod.azureedge.net/-/media/product-images/royaldoultonamericas/pacific-stone/1061154_royaldoultonamericas_04_pacific_stone-_dinner_plate_assorted_set_of_4.ashx?rev=-1&q=100&iw=644&ih=644&crop=1",
          "https://glb-oned-cdn-prod.azureedge.net/-/media/product-images/royaldoultonamericas/pacific-stone/1061154_royaldoultonamericas_05_pacific_stone-_dinner_plate_assorted_set_of_4.ashx?rev=-1&q=100&iw=644&ih=644&crop=1",
          "https://glb-oned-cdn-prod.azureedge.net/-/media/product-images/royaldoultonamericas/pacific-stone/1061154_royaldoultonamericas_06_pacific_stone-_dinner_plate_assorted_set_of_4.ashx?rev=-1&q=100&iw=644&ih=644&crop=1",
          "https://glb-oned-cdn-prod.azureedge.net/-/media/product-images/royaldoultonamericas/pacific-stone/1061154_royaldoultonamericas_07_pacific_stone-_dinner_plate_assorted_set_of_4.ashx?rev=-1&q=100&iw=644&ih=644&crop=1",
      ],
      
  
  }
  

    function init() {
   var productTile = document.querySelectorAll('.c-c-pl_container .c-c-product-card');
   for(var i=0; i< productTile.length;i++ )
   {
     var sliderEle = '';
     var id = productTile[i].getAttribute('id');
     var sliderData = dinnerData[id];
     console.log(sliderData,id);
     sliderData.forEach(function(val,i){
      sliderEle+='<div><img src="'+val+'"></div>';
     });
     var newSlider = '<div class="eg-img-slider-outer"><div class="eg-img-slider eg-slider'+i+'">'+sliderEle+'</div></div>';
     productTile[i].querySelector('.c-c-product-card .c-c-product-card_img-wrapper').insertAdjacentHTML('afterend',newSlider);
     jQuery(".eg-slider"+i).slick({
      dots: true,
      speed: 300,
      slidesToShow: 1,
      arrows: true
    });

    jQuery('.eg-img-slider .slick-prev.slick-arrow').html('<span class="icon icon-chevron-left" role="img" aria-hidden="true"></span>');
    jQuery('.eg-img-slider .slick-next.slick-arrow').html('<span class="icon icon-chevron-right" role="img" aria-hidden="true"></span>');

    window.dispatchEvent(new Event('resize'));
    
   }


   
    }
    function addSlickScript() {
      var linkEl = document.createElement('link');
      linkEl.rel = 'stylesheet';
      linkEl.type = 'text/css';
      linkEl.href = 'https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.css';
      document.head.insertAdjacentElement('beforeend', linkEl);
      var scriptEl = document.createElement('script');
      scriptEl.type = "text/javascript";
      scriptEl.src = 'https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.js';
      document.head.insertAdjacentElement('beforeend', scriptEl);
    }
  
    function addJquery(){
      var scriptEl = document.createElement('script');
      scriptEl.type = "text/javascript";
      scriptEl.src = 'https://code.jquery.com/jquery-3.6.0.min.js';
      document.head.insertAdjacentElement('beforeend', scriptEl);
      }
      addJquery();
      doWhenJqueryLoaded(function(){
      addSlickScript();
      doWhenSlickCarouselLoaded(function(){
        waitForElement(".c-c-pl_container .c-c-product-card", init, 50, 25000);
      },50,10000);
         },50,10000);
  } catch (e) {
    if (debug) console.log(e, "error in Test" + variation_name);
  }
})();
