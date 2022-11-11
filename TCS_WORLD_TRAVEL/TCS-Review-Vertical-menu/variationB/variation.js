(function () {
  if(!document.querySelector('.eg-sidebar'))
  try {
    /* main variables */
    var debug = 0;
    var variation_name = "";
    var $;
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

    function waitForjQuery(trigger, delayInterval, delayTimeout) {
      var interval = setInterval(function () {
        if (window.jQuery !== undefined) {
          clearInterval(interval);
          trigger(window.jQuery);
        }
      }, delayInterval);
      setTimeout(function () {
        clearInterval(interval);
      }, delayTimeout);
    }

    function waitForSlick(trigger, delayInterval, delayTimeout) {
      var interval = setInterval(function() {
        if (window.jQuery.fn && window.jQuery.fn.slick) {
          clearInterval(interval);
          trigger();
        }
      }, delayInterval);
      setTimeout(function() {
        clearInterval(interval);
      }, delayTimeout);
    }


    /* Variation functions */

    var sectionImg =''+ 
'  <figure>'+ 
'      <div class="media media--blazy media--image media--responsive is-b-loaded">'+ 
'          <picture>'+ 
'              <source srcset="/sites/default/files/styles/tcs_trip_conversion_xl/public/2021-08/gettyimages-1047514196.webp?h=e4ba70ab&itok=_Dq3Iga2 1x, /sites/default/files/styles/tcs_trip_conversion_xl_2x/public/2021-08/gettyimages-1047514196.webp?h=e4ba70ab&itok=aBzfsK4I 2x"'+ 
'                  media="all and (min-width: 1200px)" type="image/webp">'+ 
'              <source srcset="/sites/default/files/styles/tcs_trip_conversion_lg/public/2021-08/gettyimages-1047514196.webp?h=e4ba70ab&itok=AirRBWgt 1x, /sites/default/files/styles/tcs_trip_conversion_lg_2x/public/2021-08/gettyimages-1047514196.webp?h=e4ba70ab&itok=rOAsvjmN 2x"'+ 
'                  media="all and (min-width: 992px)" type="image/webp">'+ 
'              <source srcset="/sites/default/files/styles/tcs_trip_conversion_md/public/2021-08/gettyimages-1047514196.webp?h=e4ba70ab&itok=IRkEqbyj 1x, /sites/default/files/styles/tcs_trip_conversion_md_2x/public/2021-08/gettyimages-1047514196.webp?h=e4ba70ab&itok=YEvo5pjQ 2x"'+ 
'                  media="all and (min-width: 768px)" type="image/webp">'+ 
'              <source srcset="/sites/default/files/styles/tcs_trip_conversion_sm/public/2021-08/gettyimages-1047514196.webp?h=e4ba70ab&itok=JM2DVY8k 1x, /sites/default/files/styles/tcs_trip_conversion_sm_2x/public/2021-08/gettyimages-1047514196.webp?h=e4ba70ab&itok=uyNt_Uim 2x"'+ 
'                  media="all and (min-width: 576px)" type="image/webp">'+ 
'              <source srcset="/sites/default/files/styles/tcs_trip_conversion_xs/public/2021-08/gettyimages-1047514196.webp?h=e4ba70ab&itok=kGswYy6c 1x, /sites/default/files/styles/tcs_trip_conversion_xs_2x/public/2021-08/gettyimages-1047514196.webp?h=e4ba70ab&itok=gzv2Snlb 2x"'+ 
'                  media="all and (min-width: 0)" type="image/webp">'+ 
'              <source srcset="/sites/default/files/styles/tcs_trip_conversion_xl/public/2021-08/gettyimages-1047514196.jpg?h=e4ba70ab&itok=_Dq3Iga2 1x, /sites/default/files/styles/tcs_trip_conversion_xl_2x/public/2021-08/gettyimages-1047514196.jpg?h=e4ba70ab&itok=aBzfsK4I 2x"'+ 
'                  media="all and (min-width: 1200px)" type="image/jpeg">'+ 
'              <source srcset="/sites/default/files/styles/tcs_trip_conversion_lg/public/2021-08/gettyimages-1047514196.jpg?h=e4ba70ab&itok=AirRBWgt 1x, /sites/default/files/styles/tcs_trip_conversion_lg_2x/public/2021-08/gettyimages-1047514196.jpg?h=e4ba70ab&itok=rOAsvjmN 2x"'+ 
'                  media="all and (min-width: 992px)" type="image/jpeg">'+ 
'              <source srcset="/sites/default/files/styles/tcs_trip_conversion_md/public/2021-08/gettyimages-1047514196.jpg?h=e4ba70ab&itok=IRkEqbyj 1x, /sites/default/files/styles/tcs_trip_conversion_md_2x/public/2021-08/gettyimages-1047514196.jpg?h=e4ba70ab&itok=YEvo5pjQ 2x"'+ 
'                  media="all and (min-width: 768px)" type="image/jpeg">'+ 
'              <source srcset="/sites/default/files/styles/tcs_trip_conversion_sm/public/2021-08/gettyimages-1047514196.jpg?h=e4ba70ab&itok=JM2DVY8k 1x, /sites/default/files/styles/tcs_trip_conversion_sm_2x/public/2021-08/gettyimages-1047514196.jpg?h=e4ba70ab&itok=uyNt_Uim 2x"'+ 
'                  media="all and (min-width: 576px)" type="image/jpeg">'+ 
'              <source srcset="/sites/default/files/styles/tcs_trip_conversion_xs/public/2021-08/gettyimages-1047514196.jpg?h=e4ba70ab&itok=kGswYy6c 1x, /sites/default/files/styles/tcs_trip_conversion_xs_2x/public/2021-08/gettyimages-1047514196.jpg?h=e4ba70ab&itok=gzv2Snlb 2x"'+ 
'                  media="all and (min-width: 0)" type="image/jpeg">'+ 
'              <img class="media__image media__element b-lazy b-responsive b-loaded" decoding="async" loading="lazy" src="/sites/default/files/styles/tcs_promo_centered_sm/public/2021-08/gettyimages-1047514196.jpg?h=e4ba70ab&itok=L6teIPMl" alt="Moai of Easter Island, Chile"'+ 
'                  typeof="foaf:Image">'+ 
'          </picture>'+ 
'      </div>'+ 
'  </figure>';

    var eg_section = ''+
    '<div class="eg_section full-width" id="egReview">'+
    '     <div class="eg_overlay">'+sectionImg+'</div>'+
    '     <div class="eg_content">'+
    '           <div class="eg_left">'+
    '                 <h3>We are the World Leader in <br> Private Jet Expeditions</h3>'+
    '                 <p>We have developed and operated nearly 300 luxury jet <br>expeditions to more than 200 destinations, and are the <br>'+
    '                    most experienced and awarded expedition company in <br>the world. Our all-inclusive journeys deliver unparalleled<br> and meaningful experiences'+
    '                    with exceptional service, in <br>unique destinations around the globe.'+
    '                 </p>'+
    '           </div>'+
    '           <div class="eg_right">'+
    '                 <div class="eg_reviews">'+
    '                       <div class="eg_slider">'+ 
    '                       </div>'+
    '                 </div>'+
    '           </div>'+
    '     </div>'+
    '</div>';
    var egStickySidebar = `
    <div class="eg-sidebar">
      <div class="eg-sidebar-inner">
      <span class="eg-cross">&times;</span>
          <h2>Around the World</h2>
          <p>OCTOBER 10 - NOVEMBER, 2021</p>
              <ul>
              <li><a class="overview" href="#trip-summary">Overview</a></li>
              <li><a class="destinaions" href="#itinerary-accordion">Destinations</a></li>
              <li><a class="expedition-team" href="#trip-experts">Expedition Team</a></li>
              <li><a class="jet-experience" href="#egJetExp">Jet Experience</a></li>
              <li><a class="faq" href="#accordion">FAQs</a></li>
              <li><a class="faq" href="#egReview">Review</a></li>
          </ul>
          <div class="eg-cta-wrapper">
              <a href="" class="eg-cta eg-join">JOIN WAITLIST</a>
              <a href="" class="eg-cta eg-cta-req">REQUEST A BROCHURE</a>
          </div>
          <div class="eg-sidebar-footer">
              <span>or call toll-free</span>
              <a href="">1-844-756-2651</a>
          </div>
      </div>
      <h2 class="eg-outer-heading">Around the World options</h2>
  </div>
  `;

    /* Variation Init */
    function init() {
      /* start your code here */
      document.querySelector('.trip-itinerary-component').insertAdjacentHTML('afterend',eg_section);

      getReviews();

    }

    function getReviews(){

      var xmlhttp = new XMLHttpRequest();
      var url = "https://api.trustpilot.com/v1/business-units/60a5fae4961d18000147b8ea/reviews?apikey=bhvk49PrmAEQ8GB1qHxT6I2BzJiNmLhG";

      xmlhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
          var data = JSON.parse(this.responseText);
          for( var i = 0; i < data.reviews.length; i++){
            if(document.querySelectorAll('.eg_reviews .eg_slider .eg_slider__item').length < 10){
              if(data.reviews[i].consumer.displayName != 'n/a'){
                var eg_slider = ''+
                '<div class="eg_slider__item">'+
                '      <div class="eg_header">'+
                '             <img class="eg_trustPilot" src="https://cdn.trustpilot.net/brand-assets/1.1.0/logo-white.svg">'+
                '             <img class="eg_stars" src="https://cdn.trustpilot.net/brand-assets/4.1.0/stars/stars-5.svg">'+ 
                '             <div>'+
                '                 <p class="eg_ratingStars"> <span> RATING: </span><span class="eg_rating">'+data.reviews[i].stars+'</span> / 5</p>'+
                '                 <p class="eg_totalReviews"><span>1,000</span> REVIEWS</p>'+
                '             </div>'+
                '      </div>'+
                '      <div class="eg_text">'+
                '"'+data.reviews[i].text+'"'+
                '      </div>'+
                '      <div class="eg_consumer">'+
                '             <p class="eg_consumerName">'+data.reviews[i].consumer.displayName+'</p>'+
                '      </div>'+
                '</div>';
  
                document.querySelector('.eg_reviews .eg_slider').insertAdjacentHTML('beforeend',eg_slider);
              }
            }
          }

          slider();
        }
      };
      xmlhttp.open("GET", url, true);
      xmlhttp.send();


    }


    function slider(){
      waitForjQuery(function(){
        waitForSlick(function(){
          var $ = window.jQuery;
          var $slider = $('.eg_slider');

          if ($slider.length) {
            var currentSlide;
            var slidesCount;
            var sliderCounter = document.createElement('div');
            sliderCounter.classList.add('slider__counter');
            
            var updateSliderCounter = function(slick, currentIndex) {
              currentSlide = slick.slickCurrentSlide() + 1;
              slidesCount = slick.slideCount;
              $(sliderCounter).text(currentSlide + ' of ' +slidesCount);

              console.log(slick.$slideTrack)
              slick.$slider.css('height', slick.$slideTrack.height() + 'px');
            };

            $slider.on('init', function(event, slick) {
              $('.eg_reviews').append(sliderCounter);
              updateSliderCounter(slick);
            });

            $slider.on('afterChange', function(event, slick, currentSlide) {
              updateSliderCounter(slick, currentSlide);
            });

            $slider.slick();

            document.querySelector('.slider__counter').insertAdjacentHTML('beforebegin','<span class="eg_leftArrow"></span>');
            document.querySelector('.slider__counter').insertAdjacentHTML('afterend','<span class="eg_rightArrow"></span>');

            document.querySelector('.eg_rightArrow').addEventListener('click',function(){
              document.querySelector('.eg_section .slick-next.slick-arrow').click();
            })


            document.querySelector('.eg_leftArrow').addEventListener('click',function(){
              document.querySelector('.eg_section .slick-prev.slick-arrow').click();
            })
          }
          
        },50,15000);
      },50,15000);
    }

   
    function initSideBar() {
    console.log('init called');
    if(!document.querySelector('.eg-sidebar'))
      document.querySelector('body').insertAdjacentHTML('beforeend', egStickySidebar);        
      var egPhone = document.querySelector('.site-nav .site-nav--search .phone-wrap .phone__number')

      var egPhoneNo = egPhone.getAttribute('href');
      var egPhoneText = egPhone.innerHTML

      document.querySelector('.eg-sidebar-footer > a').setAttribute('href', egPhoneNo);
      document.querySelector('.eg-sidebar-footer > a').innerHTML = egPhoneText;
      
      document.querySelector('.eg-sidebar .eg-outer-heading').addEventListener('click', function(){
        document.querySelector('.eg-sidebar').classList.add('active');
      });
      document.querySelector('.eg-sidebar .eg-cross').addEventListener('click', function(){
        document.querySelector('.eg-sidebar').classList.remove('active');
      });
       
     
     
      document.querySelector('.eg-join').addEventListener('click',function(){
        document.querySelector('#btn_cta_action_book.cta-form').click();
      });
     
waitForElement('.hero.hero--featured h1',headingUpdated,50,15000);
waitForElement('#trip-summary .trip__cta_group',requestCTA,50,10000);
setTimeout(function(){
  if(document.querySelector('#trip-blocks + section'))
  document.querySelector('#trip-blocks + section').setAttribute('id','egJetExp');
},3000);
document.querySelector('.eg-sidebar-inner .destinaions').addEventListener('click',function(){

    setTimeout(function(){
       document.querySelector('.dropdown-menu.trip-navbar__dropdown-menu > div > div > a').click();
    },500);
});

    }
function headingUpdated(){
  console.log('init head');
  if(document.querySelector('.trip.trip__status-available .hero.hero--featured center h1'))
var heading = document.querySelector('.trip.trip__status-available .hero.hero--featured center h1').innerHTML;
 else if(document.querySelector('.hero.hero--featured h1'))
var heading = document.querySelector('.hero.hero--featured h1').innerHTML;

document.querySelector('.eg-sidebar-inner h2').innerHTML = heading;
var time = document.querySelector('.trip__trip-dates span');
document.querySelector('.eg-sidebar-inner h2 + p').innerHTML = time.innerHTML;
document.querySelector('.eg-sidebar .eg-outer-heading').click();
}

function requestCTA(){
document.querySelector('.eg-cta-wrapper').innerHTML = document.querySelector('#trip-summary .trip__cta_group').innerHTML;  

}
   
    
    
function stickyBar(){
  if(window.sessionStorage.getItem('top-banner') && document.querySelector('.dialog-off-canvas-main-canvas  .sticky-wrapper')){
    document.querySelector('.dialog-off-canvas-main-canvas  .sticky-wrapper').style.height="105px";    
    }
    else if(document.querySelector('.dialog-off-canvas-main-canvas  .sticky-wrapper'))
    document.querySelector('.dialog-off-canvas-main-canvas  .sticky-wrapper').style.height="205px";

}
waitForElement('.hero.hero--featured h1', stickyBar,50,10000);
   

    /* Initialize variation */
    waitForElement('.hero.hero--featured h1', initSideBar,50,10000); 
    waitForElement(".trip-itinerary-component", init, 50, 15000);



  } catch (e) {
    if (debug) console.log(e, "error in Test" + variation_name);
  }
})();