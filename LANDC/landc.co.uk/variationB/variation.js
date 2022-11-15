
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
    function waitForElementAll(selector, trigger, delayInterval, delayTimeout) {
        var interval = setInterval(function () {
          if (
            document &&
            document.querySelector(selector) &&
            document.querySelectorAll(selector).length > 0 && window.egReview && window.egTools 
            && window.egTrustReview && window.egLaptopImage && window.egNewsInsights
          ) {
            clearInterval(interval);
            trigger();
          }
        }, delayInterval);
        setTimeout(function () {
          clearInterval(interval);
        }, delayTimeout);
      }
    function onLoadSlick(trigger, delayInterval, delayTimeout) {
      var interval = setInterval(function() {
        if ($.fn && $.fn.slick) {
          clearInterval(interval);
          trigger();
        }
      }, delayInterval);
      setTimeout(function() {
        clearInterval(interval);
      }, delayTimeout);
    }

    var optionContainer =''+ 
    '  <div class="eg-option-container">'+ 
    '          <p class="top-heading">I want to...</p>'+ 
    '          <div class="eg-link-container">'+ 
    '              <a href="https://test.landc.co.uk/journey/" class="eg-property-link">Buy a property <i class="icon-right-open-1"></i></a>'+ 
    '              <a href="https://test.landc.co.uk/journey/remortgage" class="eg-remortgage-link">Remortgage <i class="icon-right-open-1"></i></a>'+ 
    '              <a href="https://test.landc.co.uk/journey/find-info" class="eg-information-link">Find information <i class="icon-right-open-1"></i></a>'+ 
    '          </div>'+ 
    '  </div>';

   
 function initHero(){
    window.phoneIcon =''+ 
'  <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Capa_1" x="0px" y="0px" viewBox="0 0 482.6 482.6" style="enable-background:new 0 0 482.6 482.6;" xml:space="preserve">'+ 
'  <g>'+ 
'  	<path d="M98.339,320.8c47.6,56.9,104.9,101.7,170.3,133.4c24.9,11.8,58.2,25.8,95.3,28.2c2.3,0.1,4.5,0.2,6.8,0.2   c24.9,0,44.9-8.6,61.2-26.3c0.1-0.1,0.3-0.3,0.4-0.5c5.8-7,12.4-13.3,19.3-20c4.7-4.5,9.5-9.2,14.1-14   c21.3-22.2,21.3-50.4-0.2-71.9l-60.1-60.1c-10.2-10.6-22.4-16.2-35.2-16.2c-12.8,0-25.1,5.6-35.6,16.1l-35.8,35.8   c-3.3-1.9-6.7-3.6-9.9-5.2c-4-2-7.7-3.9-11-6c-32.6-20.7-62.2-47.7-90.5-82.4c-14.3-18.1-23.9-33.3-30.6-48.8   c9.4-8.5,18.2-17.4,26.7-26.1c3-3.1,6.1-6.2,9.2-9.3c10.8-10.8,16.6-23.3,16.6-36s-5.7-25.2-16.6-36l-29.8-29.8   c-3.5-3.5-6.8-6.9-10.2-10.4c-6.6-6.8-13.5-13.8-20.3-20.1c-10.3-10.1-22.4-15.4-35.2-15.4c-12.7,0-24.9,5.3-35.6,15.5l-37.4,37.4   c-13.6,13.6-21.3,30.1-22.9,49.2c-1.9,23.9,2.5,49.3,13.9,80C32.739,229.6,59.139,273.7,98.339,320.8z M25.739,104.2   c1.2-13.3,6.3-24.4,15.9-34l37.2-37.2c5.8-5.6,12.2-8.5,18.4-8.5c6.1,0,12.3,2.9,18,8.7c6.7,6.2,13,12.7,19.8,19.6   c3.4,3.5,6.9,7,10.4,10.6l29.8,29.8c6.2,6.2,9.4,12.5,9.4,18.7s-3.2,12.5-9.4,18.7c-3.1,3.1-6.2,6.3-9.3,9.4   c-9.3,9.4-18,18.3-27.6,26.8c-0.2,0.2-0.3,0.3-0.5,0.5c-8.3,8.3-7,16.2-5,22.2c0.1,0.3,0.2,0.5,0.3,0.8   c7.7,18.5,18.4,36.1,35.1,57.1c30,37,61.6,65.7,96.4,87.8c4.3,2.8,8.9,5,13.2,7.2c4,2,7.7,3.9,11,6c0.4,0.2,0.7,0.4,1.1,0.6   c3.3,1.7,6.5,2.5,9.7,2.5c8,0,13.2-5.1,14.9-6.8l37.4-37.4c5.8-5.8,12.1-8.9,18.3-8.9c7.6,0,13.8,4.7,17.7,8.9l60.3,60.2   c12,12,11.9,25-0.3,37.7c-4.2,4.5-8.6,8.8-13.3,13.3c-7,6.8-14.3,13.8-20.9,21.7c-11.5,12.4-25.2,18.2-42.9,18.2   c-1.7,0-3.5-0.1-5.2-0.2c-32.8-2.1-63.3-14.9-86.2-25.8c-62.2-30.1-116.8-72.8-162.1-127c-37.3-44.9-62.4-86.7-79-131.5   C28.039,146.4,24.139,124.3,25.739,104.2z"/>'+ 
'  </g>'+ 
'  <g>'+ 
'  </g>'+ 
'  <g>'+ 
'  </g>'+ 
'  <g>'+ 
'  </g>'+ 
'  <g>'+ 
'  </g>'+ 
'  <g>'+ 
'  </g>'+ 
'  <g>'+ 
'  </g>'+ 
'  <g>'+ 
'  </g>'+ 
'  <g>'+ 
'  </g>'+ 
'  <g>'+ 
'  </g>'+ 
'  <g>'+ 
'  </g>'+ 
'  <g>'+ 
'  </g>'+ 
'  <g>'+ 
'  </g>'+ 
'  <g>'+ 
'  </g>'+ 
'  <g>'+ 
'  </g>'+ 
'  <g>'+ 
'  </g>'+ 
'  </svg>';

window.egLaptopImage =''+ 
'  <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" id="Group_210" data-name="Group 210" width="231.463" height="141.823" viewBox="0 0 231.463 141.823">'+ 
'    <defs>'+ 
'      <clipPath id="clip-path">'+ 
'        <rect id="Rectangle_132" data-name="Rectangle 132" width="231.463" height="141.823" fill="none" stroke="#707070" stroke-width="3"/>'+ 
'      </clipPath>'+ 
'    </defs>'+ 
'    <g id="Group_209" data-name="Group 209" clip-path="url(#clip-path)">'+ 
'      <path id="Path_62" data-name="Path 62" d="M171.563,56.278l-5.971,5.971m29.493-29.4L177.862,50.076m21.3-34.63L181.751,32.853M61.567,138.778a14.072,14.072,0,1,1,28.144,0Zm-46.347-9.3a14.222,14.222,0,0,1,0-28.444m0,21.257a7.037,7.037,0,1,1,0-14.074M39.15,91.739v25.186m4.443-25.186v8.778M17.3,138.778H54.335V91.739H17.3Zm77.41-1.573a1.577,1.577,0,0,0,1.577,1.573h108.7a1.575,1.575,0,0,0,1.573-1.573V131.9a1.574,1.574,0,0,0-1.573-1.575H96.288a1.576,1.576,0,0,0-1.577,1.575Zm4.3-6.881a16.293,16.293,0,0,0,16.295-16.3m85.515,16.3a16.293,16.293,0,0,1-16.293-16.3m43.887-27.473H75.084m0,25H228.419V1H75.084Z" transform="translate(1.022 1.022)" fill="none" stroke="#00a8dc" stroke-width="3"/>'+ 
'    </g>'+ 
'  </svg>';

 window.egReview =''+ 
'  <div class="eg-review">'+ 
'      <div class="container">'+ 
'          <p>Our customers say <b>Excellent</b><img src="https://expogrowth.in/wp-content/uploads/2022/09/4.5Star.png"><b>4.5</b> out of 5 based on <b>8,444</b> reviews <img src="https://expogrowth.in/wp-content/uploads/2022/09/Trust-logo.png"></p>'+ 
'      </div>'+ 
'  </div>';
    // document.querySelector('.hero-title-wrapper .your-home-for').innerHTML = "Step into a great mortgage deal that could save you thousands"

    setTimeout(function(){
      document.querySelector('.hero-title-wrapper .your-home-for').insertAdjacentHTML('afterend', optionContainer);

      document.querySelector('.hero-phone > a').insertAdjacentHTML('beforebegin', window.phoneIcon +'<p class="eg-phone-text"><strong>Prefer to speak to us in person?</strong> </br> Call us free, 7 days a week:</p>')
  
    },5000)
  
  
    document.querySelector('.fullwidth-wrapper-hero').insertAdjacentHTML('afterend', window.egReview);

  
 }

 var egArrow = ''+
 '<div class="eg-arrow-prev">'+
 '  <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 26 26" fill="none">'+ 
 '  <circle opacity="0.6" cx="13" cy="13" r="13" transform="rotate(180 13 13)" fill="#C4C4C4"/>'+ 
 '  <path d="M16 7L10 13L16 19" stroke="white" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>'+ 
 '  </svg></div>'+
 '<div class="eg-arrow-next">'+
 '  <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 26 26" fill="none">'+ 
 '  <circle opacity="0.6" cx="13" cy="13" r="13" fill="#C4C4C4"/>'+ 
 '  <path d="M10 19L16 13L10 7" stroke="white" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>'+ 
 '  </svg></div>';


    function init() {

      document.querySelector('.oef-steps-header + div .slider.slider-nav').insertAdjacentHTML('beforeend',egArrow);

       document.querySelector('html body>div.content-overlay>div>div.container.container-xl>.row').insertAdjacentHTML('beforebegin', '<div class="module-title text-center large-margin eg-title">Mortgage types</div>');

      document.querySelector('html body>div.content-overlay>div>div.container.container-xl').insertAdjacentHTML('afterend', window.egTools);


      document.querySelector('.eg-review + div .oef-steps-header .brand-container.content-brand h3').innerHTML = 'Your best mortgage deal </br>in 4 steps';
      document.querySelector('.eg-review + div + div .oef-steps-header .brand-container.content-brand h3').innerHTML = 'Your best mortgage deal in 4 steps';
      
      document.querySelector('.red-theme #resiMiniBestBuyHome a.text-colour-base').innerHTML= 'See all';

      document.querySelector('.purple-theme #btlMiniBestBuyHome a.text-colour-base').innerHTML= 'See all';

      document.querySelector('html body .bgcolour-beige').insertAdjacentHTML('afterend', window.egTrustReview);
    
      document.querySelector('.eg-breaking-news + div .col-sm-6.content:nth-child(1)').innerHTML = '<h3 class="section-title color-brand text-center-xs">How can we offer all this for free?</h3> <p class="copy">Like all other brokers, we receive a payment from the lender when the mortgage completes. The difference is that unlike other mortgage brokers, we simply choose not to charge our customers a fee on top of this.</p><p class="copy">It\'s an approach that\'s proved itself to work time and time again. In fact, we\'ve won over 160 industry awards for our services since 2002.</p>';

      document.querySelector('.eg-breaking-news + div .col-sm-6.content:nth-child(2)').innerHTML = window.egLaptopImage;
    
      document.querySelector('.bg-cottoncream').insertAdjacentHTML('beforebegin', window.egNewsInsights);
  
      document.querySelector('.news-snippets + div + div').insertAdjacentHTML('afterend', '<div class="eg-footer fullwidth-wrapper"></div>');
      document.querySelector('.eg-footer').insertAdjacentElement('beforeend', document.querySelector('.news-snippets + div + div'));

      document.querySelector('#resiMiniBestBuyHome .copy').innerHTML = 'Based on a mortgage of £125,000 and a purchase price of £250,000.';
      document.querySelector('#btlMiniBestBuyHome .copy').innerHTML = 'Based on a mortgage of £125,000 and a purchase price of £250,000.';

      onLoadSlick(function(){
        window.$('.eg-slider').slick({
          centerMode: false,
          centerPadding: '40px',
          slidesToShow: 4,
          responsive: [
            {
              breakpoint: 768,
              settings: {
                arrows: false,
                centerMode: true,
                centerPadding: '40px',
                slidesToShow: 1
              }
            },
            {
              breakpoint: 480,
              settings: {
                arrows: false,
                centerMode: true,
                centerPadding: '40px',
                slidesToShow: 1
              }
            }
          ]
        });
        window.$('.eg-slider2').slick({
          centerMode: false,
          centerPadding: '40px',
          slidesToShow: 4,
          responsive: [
            {
              breakpoint: 768,
              settings: {
                arrows: false,
                centerMode: true,
                centerPadding: '40px',
                slidesToShow: 1
              }
            },
            {
              breakpoint: 480,
              settings: {
                arrows: false,
                centerMode: true,
                centerPadding: '40px',
                slidesToShow: 1
              }
            }
          ]
        });
      },50,5000);
    //   document.body.addEventListener('click',function(e){

    //     document.querySelector('.hero-title-wrapper .lc-tooltip__close').click();
    // });
       var newsTile = document.querySelector('.bg-cottoncream+div .news-title').innerHTML;
      var newsCopy = document.querySelector('.bg-cottoncream+div .news-copy').innerHTML;
      var newsLink = document.querySelector('.bg-cottoncream+div .alert-module .news-copy + a').getAttribute('href');

      document.querySelector('.eg-breaking-news .eg-news-content .title').innerHTML = newsTile;
      document.querySelector('.eg-breaking-news .eg-news-content .eg-copy').innerHTML = newsCopy;
      document.querySelector('.eg-breaking-news .eg-news-content .eg-copy + a').setAttribute('href', newsLink);
    }

    waitForElement(".purple-theme #btlMiniBestBuyHome a.text-colour-base", initHero, 100, 35000);
    waitForElementAll(".purple-theme #btlMiniBestBuyHome a.text-colour-base", init, 100, 35000);
  } catch (e) {
    if (debug) console.log(e, "error in Test" + variation_name);
  }
})();


window.trustStar =''+ 
'  <svg xmlns="http://www.w3.org/2000/svg" id="Group" width="96" height="18" viewBox="0 0 96 18">'+ 
'    <path id="Path_29" data-name="Path 29" d="M18,0H0V18H18Z" fill="#00b67a"/>'+ 
'    <path id="Path_30" data-name="Path 30" d="M37.5,0h-18V18h18Z" fill="#00b67a"/>'+ 
'    <path id="Path_31" data-name="Path 31" d="M57,0H39V18H57Z" fill="#00b67a"/>'+ 
'    <path id="Path_32" data-name="Path 32" d="M76.5,0h-18V18h18Z" fill="#00b67a"/>'+ 
'    <path id="Path_33" data-name="Path 33" d="M96,0H78V18H96Z" fill="#00b67a"/>'+ 
'    <path id="Path_34" data-name="Path 34" d="M9,12.131l2.738-.694,1.144,3.525Zm6.3-4.556H10.481L9,3.037,7.519,7.575H2.7l3.9,2.813L5.119,14.925l3.9-2.812,2.4-1.725Z" fill="#fff"/>'+ 
'    <path id="Path_35" data-name="Path 35" d="M28.5,12.131l2.737-.694,1.144,3.525Zm6.3-4.556H29.981L28.5,3.037,27.019,7.575H22.2l3.9,2.813-1.481,4.538,3.9-2.812,2.4-1.725Z" fill="#fff"/>'+ 
'    <path id="Path_36" data-name="Path 36" d="M48,12.131l2.738-.694,1.144,3.525Zm6.3-4.556H49.481L48,3.037,46.519,7.575H41.7l3.9,2.813-1.481,4.538,3.9-2.812,2.4-1.725Z" fill="#fff"/>'+ 
'    <path id="Path_37" data-name="Path 37" d="M67.5,12.131l2.738-.694,1.144,3.525Zm6.3-4.556H68.981L67.5,3.037,66.019,7.575H61.2l3.9,2.813-1.481,4.538,3.9-2.812,2.4-1.725Z" fill="#fff"/>'+ 
'    <path id="Path_38" data-name="Path 38" d="M87,12.131l2.738-.694,1.144,3.525Zm6.3-4.556H88.481L87,3.037,85.519,7.575H80.7l3.9,2.813-1.481,4.538,3.9-2.812,2.4-1.725Z" fill="#fff"/>'+ 
'  </svg>';

window.egTrustReview =''+ 
'  <div class="fullwidth-wrapper eg-trust-review eg-trust-review-mobile">'+ 
'      <div class="container">'+ 
'          <div class="module-title text-center large-margin eg-title">What our customers say</div>'+ 
'          <div class="row eg-slider">'+ 
'              <div class="col-md-3 col-sm-6 col-xs-12">'+
'                  <div class="eg-review-section related-page border">'+ window.trustStar +
'                      <p class="eg-heading title">Excellent all round service</p>'+ 
'                      <p class="eg-para copy match-heights">Excellent all round service. Knowledgeable staff who communicated well at all stages and were happy to help when problems arose.</p>'+ 
'                      <p class="eg-author copy match-heights">Peter</p>'+ 
'                  </div>'+ 
'              </div>'+ 
'              <div class="col-md-3 col-sm-6 col-xs-12">'+
'                  <div class="eg-review-section related-page border">'+ window.trustStar + 
'                      <p class="eg-heading title">Excellent experience</p>'+ 
'                      <p class="eg-para copy match-heights">We’re first time buyers and were both quite nervous about the house buying process but we had a great experience with L&C.</p>'+ 
'                      <p class="eg-author copy match-heights">Emily Rice</p>'+ 
'                  </div>'+ 
'              </div>'+ 
'              <div class="col-md-3 col-sm-6 col-xs-12">'+
'                  <div class="eg-review-section related-page border">'+ window.trustStar +
'                      <p class="eg-heading title">Free & best offers</p>'+ 
'                      <p class="eg-para copy match-heights">Free, fast and gave me the better mortgage than I could find anywhere by myself… and I was trying really hard to find the best deal :) Fully recommend :)</p>'+ 
'                      <p class="eg-author copy match-heights">Michal</p>'+ 
'                  </div>'+ 
'              </div>'+ 
'              <div class="col-md-3 col-sm-6 col-xs-12">'+
'                  <div class="eg-review-section related-page border">'+ window.trustStar +
'                      <p class="eg-heading title">Fantastic service</p>'+ 
'                      <p class="eg-para copy match-heights">I had a great experience with L&C. Customer service was fantastic and a special mention to Sam who was very knowledgeable.</p>'+ 
'                      <p class="eg-author copy match-heights">Julian</p>'+ 
'                  </div>'+ 
'              </div>'+ 
'          </div>'+ 
'          <div class="row">'+ 
'              <div class="col-sm-12">'+ 
'                  <div class="centered-wrapper">'+ 
'                      <p class="eg-rating">Rated 4.5 / 5 based on 8,395 reviews</p>'+ 
'                      <div class="eg-trust-image"><img src="https://expogrowth.in/wp-content/uploads/2022/09/Trust-logo.png"></div>'+ 
'                  </div>'+ 
'              </div>'+ 
'          </div>'+ 
'      </div>'+ 
'  </div>'+
'  <div class="fullwidth-wrapper eg-trust-review">'+ 
'      <div class="container">'+ 
'          <div class="module-title text-center large-margin eg-title">What our customers say</div>'+ 
'          <div class="row">'+ 
'              <div class="col-md-3 col-sm-6 col-xs-12">'+
'                  <div class="eg-review-section related-page border">'+ window.trustStar +
'                      <p class="eg-heading title">Excellent all round service</p>'+ 
'                      <p class="eg-para copy match-heights">Excellent all round service. Knowledgeable staff who communicated well at all stages and were happy to help when problems arose.</p>'+ 
'                      <p class="eg-author copy match-heights">Peter</p>'+ 
'                  </div>'+ 
'              </div>'+ 
'              <div class="col-md-3 col-sm-6 col-xs-12">'+
'                  <div class="eg-review-section related-page border">'+ window.trustStar + 
'                      <p class="eg-heading title">Excellent experience</p>'+ 
'                      <p class="eg-para copy match-heights">We’re first time buyers and were both quite nervous about the house buying process but we had a great experience with L&C.</p>'+ 
'                      <p class="eg-author copy match-heights">Emily Rice</p>'+ 
'                  </div>'+ 
'              </div>'+ 
'              <div class="col-md-3 col-sm-6 col-xs-12">'+
'                  <div class="eg-review-section related-page border">'+ window.trustStar +
'                      <p class="eg-heading title">Free & best offers</p>'+ 
'                      <p class="eg-para copy match-heights">Free, fast and gave me the better mortgage than I could find anywhere by myself… and I was trying really hard to find the best deal :) Fully recommend :)</p>'+ 
'                      <p class="eg-author copy match-heights">Michal</p>'+ 
'                  </div>'+ 
'              </div>'+ 
'              <div class="col-md-3 col-sm-6 col-xs-12">'+
'                  <div class="eg-review-section related-page border">'+ window.trustStar +
'                      <p class="eg-heading title">Fantastic service</p>'+ 
'                      <p class="eg-para copy match-heights">I had a great experience with L&C. Customer service was fantastic and a special mention to Sam who was very knowledgeable.</p>'+ 
'                      <p class="eg-author copy match-heights">Julian</p>'+ 
'                  </div>'+ 
'              </div>'+ 
'          </div>'+ 
'          <div class="row">'+ 
'              <div class="col-sm-12">'+ 
'                  <div class="centered-wrapper">'+ 
'                      <p class="eg-rating">Rated 4.5 / 5 based on 8,395 reviews</p>'+ 
'                      <div class="eg-trust-image"><img src="https://expogrowth.in/wp-content/uploads/2022/09/Trust-logo.png"></div>'+ 
'                  </div>'+ 
'              </div>'+ 
'          </div>'+ 
'      </div>'+ 
'  </div>'+
'  <div class="fullwidth-wrapper eg-breaking-news">'+ 
'      <div class="container">'+ 
'          <div class="module-title text-center large-margin eg-title">Breaking News</div>'+ 
'          <div class="row">'+ 
'              <div class="col-sm-5">'+ 
'                  <img src="https://expogrowth.in/wp-content/uploads/2022/09/Imagenews@2x.png" alt="">'+ 
'              </div>'+ 
'              <div class="col-sm-7">'+ 
'                  <div class="eg-news-content">'+ 
'                      <p class="eg-date"></p>'+ 
'                      <p class="title">SVR Watch February 2022</p>'+ 
'                      <p class="eg-copy copy">The Bank of England has increased base rate from 0.25% to 0.50%. Here’s our rundown of how lenders are reacting to…</p>'+ 
'                      <a href="/insight/2022/09/monday-19-september/" class="btn btn-lg btn-chubby colour-base">Read more</a>'+ 
'                  </div>'+ 
'              </div>'+ 
'          </div>'+ 
'      </div>'+ 
'  </div>';


window.egNewsInsights =''+ 
'  <div class="fullwidth-wrapper eg-news-insights eg-news-insights-mobile">'+ 
'      <div class="container">'+ 
'          <div class="module-title text-center large-margin eg-title">News & insights</div>'+ 
'          <div class="row eg-slider2">'+ 
'              <div class="col-md-3 col-sm-6 col-xs-12">'+ 
'                  <div class="eg-news-section">'+ 
'                      <figure class="module-thumb">'+ 
'                          <a href="/insight/2022/09/monday-19-september/"><img src="https://expogrowth.in/wp-content/uploads/2022/09/Frame1-2x.png" class="responsive-thumb" alt="Monday 19th September" loading="lazy" onload="matchHeights()"></a>'+ 
'                      </figure>'+ 
'                      <div class="module-content eg-module-content">'+ 
'                          <p class="eg-news-date">March 04, 2022</p>'+ 
'                          <p class="eg-news-heading module-title">How to get ahead of a base rate rise</p>'+ 
'                          <p class="eg-para copy match-heights">Interest rates are on the way up and with further increases expected, it makes sense to think about ways you might be able to protect yourself from potentially steeper mortgage payments. …</p>'+ 
'                      </div>'+ 
'                  </div>'+ 
'              </div>'+ 
'              <div class="col-md-3 col-sm-6 col-xs-12">'+ 
'                  <div class="eg-news-section">'+ 
'                      <figure class="module-thumb">'+ 
'                          <a href="/insight/2022/09/monday-19-september/"><img src="https://expogrowth.in/wp-content/uploads/2022/09/Frame2-2x.png" class="responsive-thumb" alt="House price growth starts to cool" loading="lazy" onload="matchHeights()"></a>'+ 
'                      </figure>'+ 
'                      <div class="module-content eg-module-content">'+ 
'                          <p class="eg-news-date">March 04, 2022</p>'+ 
'                          <p class="eg-news-heading module-title">Don’t give up on giving up smoking</p>'+ 
'                          <p class="eg-para copy match-heights">If you’ve previously tried to stop smoking, but taken it up again, don’t lose hope that you’ll never be able to kick the habit…</p>'+ 
'                      </div>'+ 
'                  </div>'+ 
'              </div>'+ 
'              <div class="col-md-3 col-sm-6 col-xs-12">'+ 
'                  <div class="eg-news-section">'+ 
'                      <figure class="module-thumb">'+ 
'                          <a href="/insight/2022/09/monday-19-september/"><img src="https://expogrowth.in/wp-content/uploads/2022/09/Frame3-2x.png" class="responsive-thumb" alt="SVR Watch August 2022" loading="lazy" onload="matchHeights()"></a>'+ 
'                      </figure>'+ 
'                      <div class="module-content eg-module-content">'+ 
'                          <p class="eg-news-date">February 15, 2022</p>'+ 
'                          <p class="eg-news-heading module-title">Long-term fixes buck trend of rising rates</p>'+ 
'                          <p class="eg-para copy match-heights">Despite the Bank of England raising interest rates to 0.50% in February, long term fixed rate deals are currently at their lowest ever level. …</p>'+ 
'                      </div>'+ 
'                  </div>'+ 
'              </div>'+ 
'              <div class="col-md-3 col-sm-6 col-xs-12">'+ 
'                  <div class="eg-news-section">'+ 
'                      <figure class="module-thumb">'+ 
'                          <a href="/insight/2022/09/monday-19-september/"><img src="https://expogrowth.in/wp-content/uploads/2022/09/Frame4-2x.png" class="responsive-thumb" alt="Childhood Cancer Awareness Month – is your family protected?" loading="lazy" onload="matchHeights()"></a>'+ 
'                      </figure>'+ 
'                      <div class="module-content eg-module-content">'+ 
'                          <p class="eg-news-date">February 3, 2022</p>'+ 
'                          <p class="eg-news-heading module-title">Base rate jumps to 0.5%</p>'+ 
'                          <p class="eg-para copy match-heights">The Bank of England’s Monetary Policy Committee voted to increase the base rate by 0.25 percentage points today. …</p>'+ 
'                      </div>'+ 
'                  </div>'+ 
'              </div>'+ 
'          </div>'+ 
'          <div class="row">'+ 
'              <div class="col-sm-12">'+ 
'                  <div class="buttons centered-wrapper">'+ 
'                      <a href="/insight/" class="btn btn-lg ">View all articles</a></div>'+ 
'              </div>'+ 
'          </div>'+ 
'      </div>'+ 
'  </div>'+
'  <div class="fullwidth-wrapper eg-news-insights">'+ 
'      <div class="container">'+ 
'          <div class="module-title text-center large-margin eg-title">News & insights</div>'+ 
'          <div class="row">'+ 
'              <div class="col-md-3 col-sm-6 col-xs-12">'+ 
'                  <div class="eg-news-section">'+ 
'                      <figure class="module-thumb">'+ 
'                          <a href="/insight/2022/09/monday-19-september/"><img src="https://expogrowth.in/wp-content/uploads/2022/09/Frame1-2x.png" class="responsive-thumb" alt="Monday 19th September" loading="lazy" onload="matchHeights()"></a>'+ 
'                      </figure>'+ 
'                      <div class="module-content eg-module-content">'+ 
'                          <p class="eg-news-date">March 04, 2022</p>'+ 
'                          <p class="eg-news-heading module-title">How to get ahead of a base rate rise</p>'+ 
'                          <p class="eg-para copy match-heights">Interest rates are on the way up and with further increases expected, it makes sense to think about ways you might be able to protect yourself from potentially steeper mortgage payments. …</p>'+ 
'                      </div>'+ 
'                  </div>'+ 
'              </div>'+ 
'              <div class="col-md-3 col-sm-6 col-xs-12">'+ 
'                  <div class="eg-news-section">'+ 
'                      <figure class="module-thumb">'+ 
'                          <a href="/insight/2022/09/monday-19-september/"><img src="https://expogrowth.in/wp-content/uploads/2022/09/Frame2-2x.png" class="responsive-thumb" alt="House price growth starts to cool" loading="lazy" onload="matchHeights()"></a>'+ 
'                      </figure>'+ 
'                      <div class="module-content eg-module-content">'+ 
'                          <p class="eg-news-date">March 04, 2022</p>'+ 
'                          <p class="eg-news-heading module-title">Don’t give up on giving up smoking</p>'+ 
'                          <p class="eg-para copy match-heights">If you’ve previously tried to stop smoking, but taken it up again, don’t lose hope that you’ll never be able to kick the habit…</p>'+ 
'                      </div>'+ 
'                  </div>'+ 
'              </div>'+ 
'              <div class="col-md-3 col-sm-6 col-xs-12">'+ 
'                  <div class="eg-news-section">'+ 
'                      <figure class="module-thumb">'+ 
'                          <a href="/insight/2022/09/monday-19-september/"><img src="https://expogrowth.in/wp-content/uploads/2022/09/Frame3-2x.png" class="responsive-thumb" alt="SVR Watch August 2022" loading="lazy" onload="matchHeights()"></a>'+ 
'                      </figure>'+ 
'                      <div class="module-content eg-module-content">'+ 
'                          <p class="eg-news-date">February 15, 2022</p>'+ 
'                          <p class="eg-news-heading module-title">Long-term fixes buck trend of rising rates</p>'+ 
'                          <p class="eg-para copy match-heights">Despite the Bank of England raising interest rates to 0.50% in February, long term fixed rate deals are currently at their lowest ever level. …</p>'+ 
'                      </div>'+ 
'                  </div>'+ 
'              </div>'+ 
'              <div class="col-md-3 col-sm-6 col-xs-12">'+ 
'                  <div class="eg-news-section">'+ 
'                      <figure class="module-thumb">'+ 
'                          <a href="/insight/2022/09/monday-19-september/"><img src="https://expogrowth.in/wp-content/uploads/2022/09/Frame4-2x.png" class="responsive-thumb" alt="Childhood Cancer Awareness Month – is your family protected?" loading="lazy" onload="matchHeights()"></a>'+ 
'                      </figure>'+ 
'                      <div class="module-content eg-module-content">'+ 
'                          <p class="eg-news-date">February 3, 2022</p>'+ 
'                          <p class="eg-news-heading module-title">Base rate jumps to 0.5%</p>'+ 
'                          <p class="eg-para copy match-heights">The Bank of England’s Monetary Policy Committee voted to increase the base rate by 0.25 percentage points today. …</p>'+ 
'                      </div>'+ 
'                  </div>'+ 
'              </div>'+ 
'          </div>'+ 
'          <div class="row">'+ 
'              <div class="col-sm-12">'+ 
'                  <div class="buttons centered-wrapper">'+ 
'                      <a href="/insight/" class="btn btn-lg ">View all articles</a></div>'+ 
'              </div>'+ 
'          </div>'+ 
'      </div>'+ 
'  </div>';




window.calculatorIcon =''+ 
'  <svg xmlns="http://www.w3.org/2000/svg" width="56.064" height="74.149" viewBox="0 0 56.064 74.149">'+ 
'    <path id="Vector_3_" data-name="Vector (3)" d="M32.654,46.784a3.614,3.614,0,0,1-3.6,3.605H27.208a3.614,3.614,0,0,1-3.6-3.605v-1.8a3.614,3.614,0,0,1,3.6-3.605h1.849a3.614,3.614,0,0,1,3.6,3.605ZM46.205,33.3A3.614,3.614,0,0,1,42.6,36.9h-1.84a3.606,3.606,0,0,1-3.6-3.6V31.493a3.606,3.606,0,0,1,3.6-3.6H42.6a3.605,3.605,0,0,1,3.605,3.6Zm-13.535,0a3.614,3.614,0,0,1-3.6,3.6H27.224a3.614,3.614,0,0,1-3.6-3.6V31.493a3.605,3.605,0,0,1,3.6-3.6h1.849a3.606,3.606,0,0,1,3.6,3.6Zm0,27.07a3.614,3.614,0,0,1-3.6,3.605H27.224a3.614,3.614,0,0,1-3.6-3.605V58.562a3.614,3.614,0,0,1,3.6-3.6h1.849a3.614,3.614,0,0,1,3.6,3.6ZM19.244,46.784a3.614,3.614,0,0,1-3.6,3.605H13.8a3.614,3.614,0,0,1-3.6-3.605v-1.8a3.614,3.614,0,0,1,3.6-3.605h1.849a3.614,3.614,0,0,1,3.6,3.605Zm0-13.485a3.606,3.606,0,0,1-3.6,3.6h-1.84A3.614,3.614,0,0,1,10.2,33.3V31.493a3.605,3.605,0,0,1,3.605-3.6h1.84a3.606,3.606,0,0,1,3.6,3.6Zm0,27.07a3.614,3.614,0,0,1-3.6,3.605H13.8a3.614,3.614,0,0,1-3.6-3.605V58.562a3.614,3.614,0,0,1,3.6-3.6h1.849a3.614,3.614,0,0,1,3.6,3.6Zm26.952,1.2a2.409,2.409,0,0,1-2.393,2.4H39.555a2.409,2.409,0,0,1-2.393-2.4V44.007a2.4,2.4,0,0,1,2.393-2.4H43.8a2.4,2.4,0,0,1,2.393,2.4Zm0-39.316H10.16V9.459H46.205ZM55.156,72.75H1.1V.6H55.164Z" transform="translate(-0.1 0.4)" fill="none" stroke="#6cc24a" stroke-linejoin="round" stroke-width="2"/>'+ 
'  </svg>';


window.egTools =''+ 
'  <div class="fullwidth-wrapper eg-tools">'+ 
'      <div class="container">'+ 
'          <div class="module-title text-center large-margin eg-title">Handy tools & calculators</div>'+ 
'          <div class="row">'+ 
'              <div class="col-md-4 col-sm-6 col-xs-12">'+ 
'                  <div class="eg-calculator-section related-page border">'+ window.calculatorIcon +
'                      <p class="eg-heading title">How much will it cost to stay on your current mortgage?</p>'+ 
'                      <p class="eg-para copy match-heights">If your initial deal has ended or is about to, find out the cost of doing nothing.</p>'+ 
'                      <a href="/calculators/costofdoingnothing/" class="btn btn-default btn-chubby">Calculate</a>'+ 
'                  </div>'+ 
'              </div>'+ 
'              <div class="col-md-4 col-sm-6 col-xs-12">'+ 
'                  <div class="eg-calculator-section related-page border">'+  window.calculatorIcon +
'                      <p class="eg-heading title">How much can I borrow?</p>'+ 
'                      <p class="eg-para copy match-heights">A quick calculation of the mortgage size you could get based on your income.</p>'+ 
'                      <a href="/calculators/how-much-can-i-borrow-mortgage-calculator/" class="btn btn-default btn-chubby">Calculate</a>'+ 
'                  </div>'+ 
'              </div>'+ 
'              <div class="col-md-4 col-sm-6 col-xs-12">'+ 
'                  <div class="eg-calculator-section related-page border">'+ window.calculatorIcon + 
'                      <p class="eg-heading title">How much will my mortgage payments be?</p>'+ 
'                      <p class="eg-para copy match-heights">Find out roughly what your mortgage could cost each month.</p>'+ 
'                      <a href="/calculators/how-much-will-my-mortgage-cost/" class="btn btn-default btn-chubby">Calculate</a>'+ 
'                  </div>'+ 
'              </div>'+ 
'          </div>'+ 
'          <div class="row">'+ 
'              <div class="col-sm-12">'+ 
'                  <div class="buttons centered-wrapper">'+ 
'                      <a href="/calculators/" class="btn btn-lg ">View all calculators</a>'+ 
'                  </div>'+ 
'              </div>'+ 
'          </div>'+ 
'      </div>'+ 
'  </div>';

