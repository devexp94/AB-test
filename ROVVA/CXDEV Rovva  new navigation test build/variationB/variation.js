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

    var egSubmenu =''+ 
    '  <div class="menu-container uk-us menu-business-service header-opened eg-submenu"><span class="menu-back">Menu</span>'+ 
    '      <div class="top-banner">Want a virtual office? - <a class="btn-link" href="/en-us/virtual-office/your-address/search">Build yours now</a></div>'+ 
    '      <div id="nav" class="menu"><button type="button" data-toggle="collapse" data-target="#nav" aria-controls="nav" aria-expanded="false" aria-label="Toggle navigation" class="btn-menu_d"><img loading="lazy"'+ 
    '                  data-src="/assets/images/btn_close.svg" alt="menu" class="btn_close"'+ 
    '                  src="/assets/images/btn_close.svg"></button>'+ 
    '          <div class="menu-columns">'+ 
    '              <div class="main-column">'+ 
    '                  <div class="menu-header">Business services</div>'+ 
    '                  <ul class="list-unstyled">'+ 
    '                      <!---->'+ 
    '                      <li>'+ 
    '                          <a class="img-wrapper" href="/en-us/smart-language-translation"><img loading="lazy" data-src="/assets/images/menu/menu-item-7.svg" width="40" height="40" src="/assets/images/menu/menu-item-7.svg"></a>'+ 
    '                          <a href="/en-us/smart-language-translation">'+ 
    '                              <div class="menu-header">Smart Language Translation</div>'+ 
    '                              <div class="desc">Speak your customers’ language with a fast, reliable translation service designed for business</div>'+ 
    '                          </a>'+ 
    '                      </li>'+ 
    '                      <!---->'+ 
    '                      <!---->'+ 
    '                      <li>'+ 
    '                          <a class="img-wrapper" href="/en-us/business-incorporation-services"><img loading="lazy" data-src="/assets/images/menu/menu-item-13.svg" src="/assets/images/menu/menu-item-13.svg"></a>'+ 
    '                          <a href="/en-us/business-incorporation-services">'+ 
    '                              <div class="menu-header">Business Incorporation Services</div>'+ 
    '                              <div class="desc">Set up and manage your business entity correctly to help protect your personal assets from business liabilities.</div>'+ 
    '                          </a>'+ 
    '                      </li>'+ 
    '                      <!---->'+ 
    '                      <!---->'+ 
    '                      <li>'+ 
    '                          <a class="img-wrapper" href="/en-us/digital-marketing-tools"><img loading="lazy" data-src="/assets/images/menu/menu-item-8.svg" width="40" height="40" src="/assets/images/menu/menu-item-8.svg"></a>'+ 
    '                          <a href="/en-us/digital-marketing-tools">'+ 
    '                              <div><span class="menu-header">Digital Marketing Tools</span></div>'+ 
    '                              <div class="desc">User-friendly tools to optimise your website, climb the search engine results and get more customers</div>'+ 
    '                          </a>'+ 
    '                      </li>'+ 
    '                      <!---->'+ 
    '                  </ul>'+ 
    '              </div>'+ 
    '          </div>'+ 
    '      </div>'+ 
    '  </div>';

      var egBlogColumn =''+ 
  '  <div class="small-column left-border eg-small-colum">'+ 
  '      <div class="menu-header">Overview</div>'+ 
  '      <ul class="badge-list list-unstyled">'+ 
  '          <li><a href="/en-us/blog/startups/virtual-offices-everything-you-need-to-know">What is a virtual office?</a></li>'+ 
  '          <li><a href="/en-us/about-us">What is Business Concierge?</a></li>'+ 
  '          <li><a href="/en-us/about-us">About Rovva</a></li>'+ 
  '          <li class="mb-3"><a class="btn-link">Watch video</a></li>'+ 
  '      </ul>'+ 
  '  </div>';


  var egVideoContainer =''+ 
  '  <div class="eg-video-section">'+
  '  <div class="eg-video-overlay"></div>'+ 
  '      <div class="eg-video-content">'+ 
  '          <div class="eg-thumbnail-container">'+ 
  '              <img src="https://www.rovva.com/assets/images/why_rovva_thumbnail.png" alt="thumbnail image">'+ 
  '              <img src="https://www.rovva.com/assets/images/btn-play.svg" alt="thumbnail button">'+ 
  '          </div>'+ 
  '          <div class="eg-video">'+ 
  '              <iframe src="https://player.vimeo.com/video/449291164?h=ec16baad43&player_id=vimeo_id_449291164&api=1&app_id=122963" frameborder="0" fullscreen; picture-in-picture" allowfullscreen="" style="position:absolute;top:0;left:0;width:100%;height:100%;"'+ 
  '                  title="Why Rovva?" data-ready="true"></iframe>'+ 
  '          </div>'+ 
  '      </div>'+ 
  '  </div>';

    function init() {

      document.querySelector('.navbar .menu-links > li:nth-child(1)').insertAdjacentHTML('afterend', '<li class="">Business services</li>');

      document.querySelector('.navbar > div:nth-child(2) .clearfix').insertAdjacentHTML('afterend', egSubmenu)

      document.querySelector('.navbar .menu-links > li:last-child').addEventListener('click', function(){
        waitForElement("header .menu-container.menu-blog .menu .col-right_wrapper", function () {
			
         document.querySelector('header .menu-container.menu-blog .menu .col-right_wrapper').insertAdjacentHTML('afterend', egBlogColumn);
         document.querySelector('.eg-small-colum .btn-link').addEventListener('click', function(){
          document.querySelector('body').classList.add('eg-video-show');
        });


        }, 50, 10000);
      })

      document.querySelector('body').insertAdjacentHTML('beforeend', egVideoContainer);

 

      document.querySelector('.eg-video-section .eg-thumbnail-container img[alt="thumbnail button"').addEventListener('click', function(){    
        document.querySelector('.eg-video-section').classList.add('eg-video-play');
        document.querySelector('.eg-video-section .eg-video iframe').setAttribute('allow','autoplay;');
      })
      document.querySelector('.eg-video-section.eg-video-play .eg-video-overlay').addEventListener('click', function(){    
        document.querySelector('.eg-video-section').classList.remove('eg-video-play');
        document.querySelector('body').classList.remove('eg-video-show');
      })

    }

    /* Initialise variation */
    waitForElement(".navbar > div:nth-child(2) .clearfix", init, 100, 35000);
  } catch (e) {
    if (debug) console.log(e, "error in Test" + variation_name);
  }
})();

