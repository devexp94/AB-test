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
    function onLoadSwiper(trigger, delayInterval, delayTimeout) {
      var interval = setInterval(function() {
        if (window.Swiper) {
          clearInterval(interval);
          trigger();
        }
      }, delayInterval);
      setTimeout(function() {
        clearInterval(interval);
      }, delayTimeout);
    }
    
    var egVideocontainer =''+ 
'  <div class="eg-video-section full-width justifyContentCenter marginTopLayoutL wide view layout">'+ 
'      <aside class="eg-video-image">'+ 
'              <h2 class="eg-video-heading text heading">What is </br>Lookiero?</h2>'+ 
'      <div class="eg-video-image-inr">'+ 
'      <div class="eg-image-outer">'+ 
'          <img class="image" alt="Woman" src="https://cfactory-img.s3.amazonaws.com/LOR/4.1/lro/Group_22.png" srcset="https://cfactory-img.s3.amazonaws.com/LOR/4.1/lro/Group_22.png">'+ 
'         <video width="541" controls>'+
'           <source src="https://cfactory-img.s3.amazonaws.com/LOR/4.1/Katie%20Masters_4x5_UK.mp4" type="video/mp4">'+
'         </video>'+
'      </div>'+ 
'      </div>'+ 
'      </aside>'+ 
'      <div class="eg-video-content">'+ 
'          <div class="eg-video-text">'+ 
'              <h2 class="eg-video-heading text heading">What is </br>Lookiero?</h2>'+ 
'              <p class="eg-subheading text body level-3 textAlignCenter"><img src="https://cfactory-img.s3.amazonaws.com/LOR/4.1/lro/Group__6.png"> You\'ll be assigned a Personal Shopper who will work with you through every step of your style journey.</p>'+ 
'              <p class="eg-subheading text body level-3 marginTopLayoutS textAlignCenter"><img src="https://cfactory-img.s3.amazonaws.com/LOR/4.1/lro/Group__6.png"> Each box contains 5 hand-picked items tailored to you style, bosy and budget.</p>'+ 
'              <p class="eg-subheading text body level-3 marginTopLayoutS textAlignCenter"><img src="https://cfactory-img.s3.amazonaws.com/LOR/4.1/lro/Group__6.png"> You\'ve already for a £10 credit to get started!</p>'+ 
'              <button class="eg-button">Create your Profile</button>'+ 
'          </div>'+ 
'      </div>'+ 
'  </div>';

var egSlider =''+ 
'  <section class="eg-influencers layout influencers-layout full-width justifyContentCenter paddingTopLayoutL wide" align="center" id="influencers">'+ 
'      <div class="wide">'+ 
'          <div class="layout L justifyContentCenter wide">'+ 
'              <div class="box marginBottomLayoutXS wide">'+ 
'                  <h2 class="text heading level-2 textAlignCenter">A world of style is yours</h2>'+ 
'              </div>'+ 
'          </div>'+ 
'          <div class="layout L justifyContentCenter marginBottomLayoutS wide">'+ 
'              <div class="box two-third wide">'+ 
'                  <p class="text body level-2 textAlignCenter">Confidence. Inspiration. Freedom. See what style is sparking in over two million women.</p>'+ 
'              </div>'+ 
'          </div>'+ 
'          <div class="layout influencers-slider full-width justifyContentBetween wide">'+ 
'              <div class="swiper-container swiper-container-initialized swiper-container-horizontal swiper-container-pointer-events" style="cursor: grab;">'+ 
'                  <div class="swiper-wrapper">'+ 
'                      <div class="swiper-slide" style="margin-right: 48px;">'+ 
'                          <div class="influencers-slider__header"><img class="image displayBlock" alt="" src="https://cdn.prod.envs.lookiero.tech/usf/images/influencers/desktop/avatars/01_mademoisellemodeuse.jpg" srcset="https://cdn.prod.envs.lookiero.tech/usf/images/influencers/desktop/avatars/01_mademoisellemodeuse.jpg 1x, https://cdn.prod.envs.lookiero.tech/usf/images/influencers/desktop/avatars/01_mademoisellemodeuse@2x.jpg 2x">'+ 
'                              <strong'+ 
'                                  class="text detail level-2">mademoisellemodeuse</strong>'+ 
'                          </div><img class="image displayBlock" alt="" src="https://cdn.prod.envs.lookiero.tech/usf/images/influencers/desktop/photos/01_mademoisellemodeuse.jpg" srcset="https://cdn.prod.envs.lookiero.tech/usf/images/influencers/desktop/photos/01_mademoisellemodeuse.jpg 1x, https://cdn.prod.envs.lookiero.tech/usf/images/influencers/desktop/photos/01_mademoisellemodeuse@2x.jpg 2x">'+ 
'                      </div>'+ 
'                      <div class="swiper-slide" style="margin-right: 48px;">'+ 
'                          <div class="influencers-slider__header"><img class="image displayBlock" alt="" src="https://cdn.prod.envs.lookiero.tech/usf/images/influencers/desktop/avatars/02_lglora.jpg" srcset="https://cdn.prod.envs.lookiero.tech/usf/images/influencers/desktop/avatars/02_lglora.jpg 1x, https://cdn.prod.envs.lookiero.tech/usf/images/influencers/desktop/avatars/02_lglora@2x.jpg 2x">'+ 
'                              <strong'+ 
'                                  class="text detail level-2">lglora</strong>'+ 
'                          </div><img class="image displayBlock" alt="" src="https://cdn.prod.envs.lookiero.tech/usf/images/influencers/desktop/photos/02_lglora.jpg" srcset="https://cdn.prod.envs.lookiero.tech/usf/images/influencers/desktop/photos/02_lglora.jpg 1x, https://cdn.prod.envs.lookiero.tech/usf/images/influencers/desktop/photos/02_lglora@2x.jpg 2x">'+ 
'                      </div>'+ 
'                      <div class="swiper-slide" style="margin-right: 48px;">'+ 
'                          <div class="influencers-slider__header"><img class="image displayBlock" alt="" src="https://cdn.prod.envs.lookiero.tech/usf/images/influencers/desktop/avatars/03_manguepoudree.jpg" srcset="https://cdn.prod.envs.lookiero.tech/usf/images/influencers/desktop/avatars/03_manguepoudree.jpg 1x, https://cdn.prod.envs.lookiero.tech/usf/images/influencers/desktop/avatars/03_manguepoudree@2x.jpg 2x">'+ 
'                              <strong'+ 
'                                  class="text detail level-2">manguepoudree</strong>'+ 
'                          </div><img class="image displayBlock" alt="" src="https://cdn.prod.envs.lookiero.tech/usf/images/influencers/desktop/photos/03_manguepoudree.jpg" srcset="https://cdn.prod.envs.lookiero.tech/usf/images/influencers/desktop/photos/03_manguepoudree.jpg 1x, https://cdn.prod.envs.lookiero.tech/usf/images/influencers/desktop/photos/03_manguepoudree@2x.jpg 2x">'+ 
'                      </div>'+ 
'                      <div class="swiper-slide" style="margin-right: 48px;">'+ 
'                          <div class="influencers-slider__header"><img class="image displayBlock" alt="" src="https://cdn.prod.envs.lookiero.tech/usf/images/influencers/desktop/avatars/04_etdieucrea.jpg" srcset="https://cdn.prod.envs.lookiero.tech/usf/images/influencers/desktop/avatars/04_etdieucrea.jpg 1x, https://cdn.prod.envs.lookiero.tech/usf/images/influencers/desktop/avatars/04_etdieucrea@2x.jpg 2x">'+ 
'                              <strong'+ 
'                                  class="text detail level-2">etdieucrea</strong>'+ 
'                          </div><img class="image displayBlock" alt="" src="https://cdn.prod.envs.lookiero.tech/usf/images/influencers/desktop/photos/04_etdieucrea.jpg" srcset="https://cdn.prod.envs.lookiero.tech/usf/images/influencers/desktop/photos/04_etdieucrea.jpg 1x, https://cdn.prod.envs.lookiero.tech/usf/images/influencers/desktop/photos/04_etdieucrea@2x.jpg 2x">'+ 
'                      </div>'+ 
'                      <div class="swiper-slide" style="margin-right: 48px;">'+ 
'                          <div class="influencers-slider__header"><img class="image displayBlock" alt="" src="https://cdn.prod.envs.lookiero.tech/usf/images/influencers/desktop/avatars/05_poupeerousse.jpg" srcset="https://cdn.prod.envs.lookiero.tech/usf/images/influencers/desktop/avatars/05_poupeerousse.jpg 1x, https://cdn.prod.envs.lookiero.tech/usf/images/influencers/desktop/avatars/05_poupeerousse@2x.jpg 2x">'+ 
'                              <strong'+ 
'                                  class="text detail level-2">poupeerousse</strong>'+ 
'                          </div><img class="image displayBlock" alt="" src="https://cdn.prod.envs.lookiero.tech/usf/images/influencers/desktop/photos/05_poupeerousse.jpg" srcset="https://cdn.prod.envs.lookiero.tech/usf/images/influencers/desktop/photos/05_poupeerousse.jpg 1x, https://cdn.prod.envs.lookiero.tech/usf/images/influencers/desktop/photos/05_poupeerousse@2x.jpg 2x">'+ 
'                      </div>'+ 
'                      <div class="swiper-slide" style="margin-right: 48px;">'+ 
'                          <div class="influencers-slider__header"><img class="image displayBlock" alt="" src="https://cdn.prod.envs.lookiero.tech/usf/images/influencers/desktop/avatars/06_myblondestyle.jpg" srcset="https://cdn.prod.envs.lookiero.tech/usf/images/influencers/desktop/avatars/06_myblondestyle.jpg 1x, https://cdn.prod.envs.lookiero.tech/usf/images/influencers/desktop/avatars/06_myblondestyle@2x.jpg 2x">'+ 
'                              <strong'+ 
'                                  class="text detail level-2">myblondestyle</strong>'+ 
'                          </div><img class="image displayBlock" alt="" src="https://cdn.prod.envs.lookiero.tech/usf/images/influencers/desktop/photos/06_myblondestyle.jpg" srcset="https://cdn.prod.envs.lookiero.tech/usf/images/influencers/desktop/photos/06_myblondestyle.jpg 1x, https://cdn.prod.envs.lookiero.tech/usf/images/influencers/desktop/photos/06_myblondestyle@2x.jpg 2x">'+ 
'                      </div>'+ 
'                      <div class="swiper-slide" style="margin-right: 48px;">'+ 
'                          <div class="influencers-slider__header"><img class="image displayBlock" alt="" src="https://cdn.prod.envs.lookiero.tech/usf/images/influencers/desktop/avatars/07_fashionvitaminsantwerp.jpg" srcset="https://cdn.prod.envs.lookiero.tech/usf/images/influencers/desktop/avatars/07_fashionvitaminsantwerp.jpg 1x, https://cdn.prod.envs.lookiero.tech/usf/images/influencers/desktop/avatars/07_fashionvitaminsantwerp@2x.jpg 2x">'+ 
'                              <strong'+ 
'                                  class="text detail level-2">fashionvitaminsantwerp</strong>'+ 
'                          </div><img class="image displayBlock" alt="" src="https://cdn.prod.envs.lookiero.tech/usf/images/influencers/desktop/photos/07_fashionvitaminsantwerp.jpg" srcset="https://cdn.prod.envs.lookiero.tech/usf/images/influencers/desktop/photos/07_fashionvitaminsantwerp.jpg 1x, https://cdn.prod.envs.lookiero.tech/usf/images/influencers/desktop/photos/07_fashionvitaminsantwerp@2x.jpg 2x">'+ 
'                      </div>'+ 
'                      <div class="swiper-slide" style="margin-right: 48px;">'+ 
'                          <div class="influencers-slider__header"><img class="image displayBlock" alt="" src="https://cdn.prod.envs.lookiero.tech/usf/images/influencers/desktop/avatars/08_elenavidalrod.jpg" srcset="https://cdn.prod.envs.lookiero.tech/usf/images/influencers/desktop/avatars/08_elenavidalrod.jpg 1x, https://cdn.prod.envs.lookiero.tech/usf/images/influencers/desktop/avatars/08_elenavidalrod@2x.jpg 2x">'+ 
'                              <strong'+ 
'                                  class="text detail level-2">elenavidalrod</strong>'+ 
'                          </div><img class="image displayBlock" alt="" src="https://cdn.prod.envs.lookiero.tech/usf/images/influencers/desktop/photos/08_elenavidalrod.jpg" srcset="https://cdn.prod.envs.lookiero.tech/usf/images/influencers/desktop/photos/08_elenavidalrod.jpg 1x, https://cdn.prod.envs.lookiero.tech/usf/images/influencers/desktop/photos/08_elenavidalrod@2x.jpg 2x">'+ 
'                      </div>'+ 
'                      <div class="swiper-slide" style="margin-right: 48px;">'+ 
'                          <div class="influencers-slider__header"><img class="image displayBlock" alt="" src="https://cdn.prod.envs.lookiero.tech/usf/images/influencers/desktop/avatars/09_laura.jpg" srcset="https://cdn.prod.envs.lookiero.tech/usf/images/influencers/desktop/avatars/09_laura.jpg 1x, https://cdn.prod.envs.lookiero.tech/usf/images/influencers/desktop/avatars/09_laura@2x.jpg 2x">'+ 
'                              <strong'+ 
'                                  class="text detail level-2">laura.miola</strong>'+ 
'                          </div><img class="image displayBlock" alt="" src="https://cdn.prod.envs.lookiero.tech/usf/images/influencers/desktop/photos/09_laura.jpg" srcset="https://cdn.prod.envs.lookiero.tech/usf/images/influencers/desktop/photos/09_laura.jpg 1x, https://cdn.prod.envs.lookiero.tech/usf/images/influencers/desktop/photos/09_laura@2x.jpg 2x">'+ 
'                      </div>'+ 
'                      <div class="swiper-slide" style="margin-right: 48px;">'+ 
'                          <div class="influencers-slider__header"><img class="image displayBlock" alt="" src="https://cdn.prod.envs.lookiero.tech/usf/images/influencers/desktop/avatars/10_mrsmlmode.jpg" srcset="https://cdn.prod.envs.lookiero.tech/usf/images/influencers/desktop/avatars/10_mrsmlmode.jpg 1x, https://cdn.prod.envs.lookiero.tech/usf/images/influencers/desktop/avatars/10_mrsmlmode@2x.jpg 2x">'+ 
'                              <strong'+ 
'                                  class="text detail level-2">mrsmlmode</strong>'+ 
'                          </div><img class="image displayBlock" alt="" src="https://cdn.prod.envs.lookiero.tech/usf/images/influencers/desktop/photos/10_mrsmlmode.jpg" srcset="https://cdn.prod.envs.lookiero.tech/usf/images/influencers/desktop/photos/10_mrsmlmode.jpg 1x, https://cdn.prod.envs.lookiero.tech/usf/images/influencers/desktop/photos/10_mrsmlmode@2x.jpg 2x">'+ 
'                      </div>'+ 
'                  </div>'+ 
'              </div>'+ 
'          </div>'+ 
'      </div>'+ 
'  </section>'+ 
'  <footer class="eg-footer footer-home marginTopLayoutL paddingTopLayoutM">'+ 
'      <aside class="layout follow-us L flexDirectionColumn justifyContentBetween marginBottomLayoutL wide" align="center">'+ 
'          <h3 class="text action level-3 marginBottomLayoutM upperCase textAlignCenter">Follow us</h3>'+ 
'          <nav class="follow-us__links">'+ 
'              <a class="text body level-3 link colorContent displayBlock" target="_blank" rel="noopener noreferrer" aria-label="facebook" href="https://www.facebook.com/LookieroUK/"><img src="https://cdn.prod.envs.lookiero.tech/commons/icons/social-facebook.svg"></a>'+ 
'              <a class="text body level-3 link colorContent displayBlock marginLeftLayoutM" target="_blank" rel="noopener noreferrer" aria-label="instagram" href="https://www.instagram.com/Lookiero_uk/"><img src="https://cdn.prod.envs.lookiero.tech/commons/icons/social-instagram.svg"></a>'+ 
'              <a class="text body level-3 link colorContent displayBlock marginLeftLayoutM" target="_blank" rel="noopener noreferrer" aria-label="pinterest" href="https://www.pinterest.co.uk/lookiero_uk/"><img src="https://cdn.prod.envs.lookiero.tech/commons/icons/social-pinterest.svg"></a>'+ 
'              <a class="text body level-3 link colorContent displayBlock marginLeftLayoutM" target="_blank" rel="noopener noreferrer" aria-label="twitter" href="https://twitter.com/Lookiero_uk"><img src="https://cdn.prod.envs.lookiero.tech/commons/icons/social-twitter.svg"></a>'+ 
'          </nav>'+ 
'      </aside>'+ 
'      <p class="text detail level-3 footer-copy upperCase textAlignCenter">© 2021 Lookiero</p>'+ 
'  </footer>';

var egHeroImageDesktop = ''+
'<img class="image" alt="" src="https://cfactory-img.s3.amazonaws.com/LOR/4.1/lro/desktop-banner.png" srcset="https://cfactory-img.s3.amazonaws.com/LOR/4.1/lro/desktop-banner.png 1x, https://cfactory-img.s3.amazonaws.com/LOR/4.1/lro/desktop-banner.png 2x ">'

var egHeroImageMobile = ''+
'<img class="image" alt="" src="https://cfactory-img.s3.amazonaws.com/LOR/4.1/lro/mobile-banner.png" srcset="https://cfactory-img.s3.amazonaws.com/LOR/4.1/lro/mobile-banner.png 1x, https://cfactory-img.s3.amazonaws.com/LOR/4.1/lro/mobile-banner.png 2x ">'


var egWorkSubheading = '<div class="eg-how-subhead layout full-width justifyContentCenter marginBottomLayoutS wide"><div class="box one-third wide"><p class="text body level-2 textAlignCenter">Start your style journey with three simple steps.</p></div></div>';

    /* Variation Init */
    function init() {

//Swiper Slider
      var Script = document.createElement('script');
      Script.src ='https://unpkg.com/swiper/swiper-bundle.min.js';
      document.getElementsByTagName('head')[0].appendChild(Script);


      /* start your code here */
      document.querySelector('.join-in__base .text.heading').innerHTML = 'Sign up for Lookiero and receive £10 credit.';

      document.querySelector('.join-in__base .view.layout:nth-child(2) .text.body').innerHTML = 'Lookiero is the best way to keep up with the latest style thanks to advice from our Personal Shoppers. </br>*Offer valid throught 28 Feb.';

      var HeadingText = document.querySelectorAll('.how-it-works__base > div > div:nth-child(2) div.view.box');
      HeadingText.forEach(function(val){
      insertBefore(val.querySelector('.heading').parentElement,val.querySelector('span.body').parentElement);
      });

function insertBefore(beforeElement, targetElement) {
  targetElement.parentNode.insertBefore(beforeElement, targetElement);
}
document.querySelector('.how-it-works__base .view.layout.full-width .text.heading.level-2').innerHTML = "How it works";

document.querySelector('.how-it-works__base .view.layout.full-width').insertAdjacentHTML('afterend', egWorkSubheading)

      if(window.screen.width >= 600){
        document.querySelector('.join-in__base .join-in__media .view.box').innerHTML = egHeroImageDesktop;
      }else{
        document.querySelector('.join-in__base .join-in__media .view.box ').innerHTML = egHeroImageMobile;
      }

      window.addEventListener('resize', function() {
        if(window.screen.width >= 600){
          document.querySelector('.join-in__base .join-in__media .view.box ').innerHTML = egHeroImageDesktop;
        }else{
          document.querySelector('.join-in__base .join-in__media .view.box').innerHTML = egHeroImageMobile;
        }
    });

      document.querySelector('.how-it-works__base').insertAdjacentHTML('beforebegin', egVideocontainer);

      //for video 
      document.querySelector('.eg-image-outer img').addEventListener('click', function(){
        document.querySelector('.eg-image-outer').classList.add('eg-video-show');
        document.querySelector('.eg-image-outer video').play();
    });

    document.querySelector('.eg-video-text .eg-button').addEventListener('click', function(){
      document.querySelector('.view.join-in__content button.button').click();
  });

  
  document.querySelector('section.how-it-works__base').insertAdjacentHTML('afterend', egSlider);
 onLoadSwiper(function() {
  var swiper = new Swiper(".swiper-container", {
        spaceBetween: 30,
        slidesPerView:'auto',
        visibilityFullFit: true,
        autoResize: false,
  });
 },50,5000);
  
    }

    function addScript() {
      var bmScript = document.createElement('script');
      bmScript.src = 'https://unpkg.com/swiper/swiper-bundle.min.js';
      document.getElementsByTagName('head')[0].appendChild(bmScript);
    }
    addScript();
    /* Initialise variation */
    waitForElement("section.how-it-works__base", init, 250, 25000);
  } catch (e) {
    if (debug) console.log(e, "error in Test" + variation_name);
  }
})();