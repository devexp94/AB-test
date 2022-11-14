(function () {
  var debug = false;
  if(!document.querySelector('.eg-sidebar'))
  try {

    function waitForElement(selector, trigger, delayInterval, delayTimeout) {
      var interval = setInterval(function () {
        if (
          document && document.querySelector(selector) || document.querySelectorAll(selector).length > 0
        ) {
          clearInterval(interval);
          trigger();
        }
      }, delayInterval);
      setTimeout(function () {
        clearInterval(interval);
      }, delayTimeout);
    }
    

    var egStickySidebar = `
    <div class="eg-sidebar">
      <div class="eg-sidebar-inner">
      <span class="eg-cross">&times;</span>
          <h2>Around the World</h2>
          <p>OCTOBER 10 - NOVEMBER, 2021</p>
              <ul>
              <li><a class="overview" href="#trip-summary">Overview</a></li>
              <li><a class="destinaions" href="#itinerary-16801" >Destinations</a></li>
              <li><a class="expedition-team" href="#trip-experts">Expedition Team</a></li>
              <li><a class="jet-experience" href="#egJetExp">Jet Experience</a></li>
              <li><a class="faq" href="#accordion">FAQs</a></li>
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

    function init() {
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
      if(window.sessionStorage.getItem('top-banner') && document.querySelector('.dialog-off-canvas-main-canvas  .sticky-wrapper')){
document.querySelector('.dialog-off-canvas-main-canvas  .sticky-wrapper').style.height="105px";    
}
else if(document.querySelector('.dialog-off-canvas-main-canvas  .sticky-wrapper'))
document.querySelector('.dialog-off-canvas-main-canvas  .sticky-wrapper').style.height="205px";
waitForElement('.hero.hero--featured h1',headingUpdated,50,15000);
waitForElement('#trip-summary .trip__cta_group',requestCTA,50,10000);
setTimeout(function(){
  if(document.querySelector('#trip-blocks + section'))
  document.querySelector('#trip-blocks + section').setAttribute('id','egJetExp');
},3000);

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

    waitForElement('.hero.hero--featured h1', init,50,10000);
   
  } catch (e) {
    if (debug) console.log(e, "error in " + variation_name);
  }

})();