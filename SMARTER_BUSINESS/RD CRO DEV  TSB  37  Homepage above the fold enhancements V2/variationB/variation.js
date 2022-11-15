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
    function onLoadJqueryLibrary(trigger, delayInterval, delayTimeout) {
      var interval = setInterval(function() {
        if (window.jQuery && window.jQuery.fn) {
          clearInterval(interval);
          trigger();
        }
      }, delayInterval);
      setTimeout(function() {
        clearInterval(interval);
      }, delayTimeout);
    }
    
    function waitForSlick(trigger, delayInterval, delayTimeout) {
      var interval = setInterval(function () {
          if (
              window.$ && window.$.fn && window.$.fn.slick
          ) {
              clearInterval(interval);
              trigger();
          }
      }, delayInterval);
      setTimeout(function () {
          clearInterval(interval);
      }, delayTimeout);
  }

  var arrowPrev = ''+
  '  <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 26 26" fill="none">'+ 
  '  <circle opacity="0.6" cx="13" cy="13" r="13" transform="rotate(180 13 13)" fill="#C4C4C4"/>'+ 
  '  <path d="M16 7L10 13L16 19" stroke="white" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>'+ 
  '  </svg>';  

  var arrowNext = ''+
  '  <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 26 26" fill="none">'+ 
  '  <circle opacity="0.6" cx="13" cy="13" r="13" fill="#C4C4C4"/>'+ 
  '  <path d="M10 19L16 13L10 7" stroke="white" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>'+ 
  '  </svg>';


  function addSlickScript() {
      var linkEl = document.createElement('link');
      linkEl.rel = 'stylesheet';
      linkEl.type = 'text/css';
      linkEl.href = 'https://cdn.jsdelivr.net/jquery.slick/1.6.0/slick.css';
      document.head.insertAdjacentElement('beforeend', linkEl);
      var scriptEl = document.createElement('script');
      scriptEl.type = "text/javascript";
      scriptEl.src = 'https://cdn.jsdelivr.net/jquery.slick/1.6.0/slick.min.js';
      document.head.insertAdjacentElement('beforeend', scriptEl);
  }



    var egArticalSection =''+ 
    '  <div class="tile-container list parbase eg-article-container">'+ 
    '      <section class="row featuredContainer eg-article-guide" id="par_tile_container_copy_">'+ 
    '          <ul class="row">'+ 
    '              <li class="tile tile--one tile--top textimage parbase column small-12 large-8">'+ 
    '                  <h4 class="eg-business-heading">Featured Articles</h4>'+ 
    '                  <div class="eg-featured-top-section">'+ 
    '                      <ul class="row">'+ 
    '                          <li class="tile tile--two textimage parbase column small-12 large-4"></li>'+ 
    '                          <li class="tile tile--two textimage parbase column small-12 large-4"></li>'+ 
    '                          <li class="tile tile--two textimage parbase column small-12 large-4"></li>'+ 
    '                      </ul>'+ 
    '                  </div>'+ 
    '                  <div class="eg-featured-bottom-section">'+ 
    '                      <ul class="row">'+ 
    '                          <li class="tile tile--one textimage parbase column small-12 large-12"></li>'+ 
    '                      </ul>'+ 
    '                  </div>'+ 
    '              </li>'+ 
    '              <li class="tile tile--one tile--top textimage parbase column small-12 large-4">'+ 
    '                  <h4 class="eg-business-heading">Business Tools <a href="https://www.smarterbusiness.telstra.com.au/business-tools"> VIEW MORE BUSINESS TOOLS ></a></h4>'+ 
    '                  <div class="eg-business-card card1"></div>'+ 
    '                  <div class="eg-business-card card2"></div>'+ 
    '              </li>'+ 
    '          </ul>'+ 
    '      </section>'+ 
    '  </div>';

    function init() {
      var $ = window.jQuery;

      $('.page__par > div:first-child').after(egArticalSection);

      $('.featuredContainer1 >.row > li:nth-child(1) > div').appendTo($('.eg-article-container .eg-business-card.card1'));

      $('#par_tile_container_2 .tile.tile--two:nth-child(4) > a').appendTo($('.eg-article-container .eg-business-card.card2'));

      var firstColumn = $('html body .featuredContainer1 >.row > li:nth-child(3) ol > li:nth-child(3)').html();
        $('.eg-article-guide .eg-featured-top-section li:nth-child(1)').html(firstColumn);

        var secondColumn = $('html body .featuredContainer1 >.row > li:nth-child(3) ol > li:nth-child(4)').html();
        $('.eg-article-guide .eg-featured-top-section li:nth-child(2)').html(secondColumn);

      $('#par_tile_container_2 .row > li:nth-child(1) > div').appendTo($('.eg-article-guide .eg-featured-top-section li:nth-child(3)'));

      $('#par_tile_container_2 .row > li:nth-child(2) > div').appendTo($('.eg-article-guide .eg-featured-bottom-section li'));

      $('.eg-business-card.card1 > .article-card.bordered-tile .article-card__content .article-card__content-top > h5').insertAfter('.eg-business-card.card1 .article-card.bordered-tile > a > span');

      $('.eg-business-card.card2 > a h3').appendTo($('.eg-business-card.card2 > a > .vertical-cta__image'));

      $('.eg-featured-bottom-section .article-card.article-card--mobile').attr('class', 'article-card');
      addSlickScript();

      if(window.innerWidth < 1024){
        waitForSlick(function () {
          var $ = window.jQuery;
          $('.eg-featured-top-section > ul').slick({
              slidesToShow: 1,
              slidesToScroll: 1,
              arrows: true,
              dots: false,
          });
      }, 50, 10000);

      }
    window.dispatchEvent(new Event('resize'));
  }


  function init2(){
    document.querySelector('.eg-featured-top-section button.slick-prev').innerHTML = arrowPrev;
    document.querySelector('.eg-featured-top-section button.slick-next').innerHTML = arrowNext;

  }
    /* Initialise variation */
    onLoadJqueryLibrary(function() {
        waitForElement('.productContainer1 .article-card.article-card--mobile ', init, 50, 25000);
        waitForElement('.eg-featured-top-section button.slick-next', init2, 50, 25000);
        // waitForjQuery(addSlickScript, 50, 10000);
    }, 50, 10000);
  } catch (e) {
    if (debug) console.log(e, "error in Test" + variation_name);
  }
})();