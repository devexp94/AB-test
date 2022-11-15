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
    
    var egToolReportContainer =''+ 
'  <div class="tile-container list parbase eg-tool-report-container">'+ 
'      <section class="row featuredContainer eg-tools-guide" id="par_tile_container_copy_">'+ 
'          <ul class="row">'+ 
'              <li class="tile tile--one tile--top textimage parbase column small-12 large-6">'+ 
'                   <h4 class="eg-tool-heading">Business Tools  <a href="https://www.smarterbusiness.telstra.com.au/business-tools">VIEW MORE BUSINESS TOOLS ></a></h4>'+
'                  <div class="tile tile--two tile__carousel__item textimage parbase column small-12 large-6">'+ 
'                      <div class="article-card article-card--mobile article-card--brief">'+ 
'                          <a href="https://smarterbusiness.telstra.com.au/nbn" data-article-name="nbn address checker" class="article-card__image border-color-">'+ 
'                              <span role="img" aria-label="nbn address checker" class="article-card__image-background" title="nbn address checker" style="background-image:url(/content/dam/smarter/business-tools/TELBUS0003_img_address_checker.png)"></span>'+ 
'                              <div class="share-social-icons">'+ 
'                                  <div class="share-social-icons-container">'+ 
'                                      <span id="facebook-share-tools-btn" class="share-social-icons-container__facebook-icon" data-url="https://smarterbusiness.telstra.com.au/nbn" data-share-text="nbn address checker"></span>'+ 
'                                      <span id="twitter-share-tools-btn" class="share-social-icons-container__twitter-icon" data-url="https://smarterbusiness.telstra.com.au/nbn"></span>'+ 
'                                      <span id="linkedin-share-tools-btn" class="share-social-icons-container__linkedin-icon" data-url="https://smarterbusiness.telstra.com.au/nbn"></span>'+ 
'                                      <span id="share-social-tools-btn" class="share-social-icons-container__icon-tag"></span>'+ 
'                                  </div>'+ 
'                              </div>'+ 
'                          </a>'+ 
'                          <div class="article-card__content">'+ 
'                              <div class="article-card__content-top">'+ 
'                                  <h5>'+ 
'                                      <a href="https://smarterbusiness.telstra.com.au/nbn" data-article-name="nbn address checker">nbn address checker</a>'+ 
'                                  </h5>'+ 
'                                  <p>Find out if your business is ready to connect to the national broadband network with our address checker</p>'+ 
'                              </div>'+ 
'                              <div class="article-card__content-bottom slider-bottom-cta">'+ 
'                                  <a class="cta" href="https://smarterbusiness.telstra.com.au/nbn?_ga=2.105409734.410437984.1634487284-2128795989.1634487284" data-article-name="nbn address checker">Check My Address</a>'+ 
'                              </div>'+ 
'                          </div>'+ 
'                      </div>'+ 
'                  </div>'+ 
'                  <div class="tile tile--two tile__carousel__item textimage parbase column small-12 large-6'+ 
'                ">'+ 
'                      <div class="article-card article-card--mobile article-card--brief">'+ 
'                          <a href="https://www.smarterbusiness.telstra.com.au/#online-essentials" data-article-name="Website Health Checker" class="article-card__image border-color-">'+ 
'                              <span role="img" aria-label="Website Health Checker" class="article-card__image-background" title="Website Health Checker" style="background-image:url(/content/dam/smarter/business-tools/TELBUS0003_img_otto.png)"></span>'+ 
'                              <div class="share-social-icons">'+ 
'                                  <div class="share-social-icons-container">'+ 
'                                      <span id="facebook-share-tools-btn" class="share-social-icons-container__facebook-icon" data-url="https://www.smarterbusiness.telstra.com.au/#online-essentials" data-share-text="Website Health Checker"></span>'+ 
'                                      <span id="twitter-share-tools-btn" class="share-social-icons-container__twitter-icon" data-url="https://www.smarterbusiness.telstra.com.au/#online-essentials"></span>'+ 
'                                      <span id="linkedin-share-tools-btn" class="share-social-icons-container__linkedin-icon" data-url="https://www.smarterbusiness.telstra.com.au/#online-essentials"></span>'+ 
'                                      <span id="share-social-tools-btn" class="share-social-icons-container__icon-tag"></span>'+ 
'                                  </div>'+ 
'                              </div>'+ 
'                          </a>'+ 
'                          <div class="article-card__content">'+ 
'                              <div class="article-card__content-top">'+ 
'                                  <h5>'+ 
'                                      <a href="https://www.smarterbusiness.telstra.com.au/#online-essentials" data-article-name="Website Health Checker">Website Health Checker</a>'+ 
'                                  </h5>'+ 
'                                  <p>Try our free tool to check your business’s online effectiveness. Get your results in minutes and receive a personalised report to see how your website fares.</p>'+ 
'                              </div>'+ 
'                              <div class="article-card__content-bottom slider-bottom-cta">'+ 
'                                  <a class="cta" href="https://www.smarterbusiness.telstra.com.au/#online-essentials" data-article-name="Website Health Checker">Website Health Checker</a>'+ 
'                              </div>'+ 
'                          </div>'+ 
'                      </div>'+ 
'                  </div>'+ 
'              </li>'+ 
'              <li class="tile tile--one tile--top textimage parbase column small-12 large-6">'+ 
'                   <h4 class="eg-report-heading">Reports and Guides <a href="https://www.smarterbusiness.telstra.com.au/business-tools#reports"> VIEW MORE REPORTS AND GUIDES ></a></h4>'+
'                  <div class="tile tile--two tile__carousel__item textimage parbase column small-12 large-6">'+ 
'                      <div class="article-card article-card--mobile article-card--brief">'+ 
'      <a href="/business-intelligence/thriving-in-the-digital-age" data-article-name="Thriving in the Digital Age report" class="article-card__image border-color-">'+ 
'          <span role="img" aria-label="man on a video call on a laptop" class="article-card__image-background" title="man on a video call on a laptop" style="background-image:url(/content/dam/smarter/business-intelligence-2020/business-intelligence-thrive-in-the-digital-world-report/DigitalAge_472x315.jpg)"></span>'+ 
'          <div class="share-social-icons">'+ 
'              <div class="share-social-icons-container">'+ 
'                  <span id="facebook-share-tools-btn" class="share-social-icons-container__facebook-icon" data-url="/content/smarter/en/business-intelligence/thriving-in-the-digital-age.html" data-share-text="Thriving in the Digital Age report"></span>'+ 
'                  <span id="twitter-share-tools-btn" class="share-social-icons-container__twitter-icon" data-url="/content/smarter/en/business-intelligence/thriving-in-the-digital-age.html"></span>'+ 
'                  <span id="linkedin-share-tools-btn" class="share-social-icons-container__linkedin-icon" data-url="/content/smarter/en/business-intelligence/thriving-in-the-digital-age.html"></span>'+ 
'                  <span id="share-social-tools-btn" class="share-social-icons-container__icon-tag"></span>'+ 
'              </div>'+ 
'          </div>'+ 
'      </a>'+ 
'      <div class="article-card__content">'+ 
'          <div class="article-card__content-top">'+ 
'              <h5>'+ 
'                  <a href="/content/smarter/en/business-intelligence/thriving-in-the-digital-age.html" data-article-name="Thriving in the Digital Age report">Thriving in the Digital Age report</a>'+ 
'              </h5>'+ 
'              <p>Get the most out of available and emerging digital technologies to help you save time, achieve more and restore your work-life balance.</p>'+ 
'          </div>'+ 
'          <div class="article-card__content-bottom slider-bottom-cta">'+ 
'              <a class="cta" href="/content/smarter/en/business-intelligence/thriving-in-the-digital-age.html" data-article-name="Thriving in the Digital Age report">Access Report 4</a>'+ 
'          </div>'+ 
'      </div>'+ 
'                      </div>'+ 
'                  </div>'+ 
'  <div class="tile tile--two tile__carousel__item textimage parbase column small-12 large-6">'+ 

'  <div class="article-card article-card--mobile article-card--brief">'+ 
'          <a href="https://smarterbusiness.telstra.com.au/the-office-in-your-pocket" data-article-name="Mobility: Put your office in your pocket" class="article-card__image border-color-">'+ 
'              <span role="img" aria-label="Mobility: Put your office in your pocket" class="article-card__image-background" title="Mobility: Put your office in your pocket" style="background-image:url(/content/dam/smarter/article-images/pexels-andrea-piacquadio-3772531-min.jpg)"></span>'+ 
'              <div class="share-social-icons">'+ 
'                  <div class="share-social-icons-container">'+ 
'                      <span id="facebook-share-tools-btn" class="share-social-icons-container__facebook-icon" data-url="https://smarterbusiness.telstra.com.au/the-office-in-your-pocket" data-share-text="Mobility: Put your office in your pocket"></span>'+ 
'                      <span id="twitter-share-tools-btn" class="share-social-icons-container__twitter-icon" data-url="https://smarterbusiness.telstra.com.au/the-office-in-your-pocket"></span>'+ 
'                      <span id="linkedin-share-tools-btn" class="share-social-icons-container__linkedin-icon" data-url="https://smarterbusiness.telstra.com.au/the-office-in-your-pocket"></span>'+ 
'                      <span id="share-social-tools-btn" class="share-social-icons-container__icon-tag"></span>'+ 
'                  </div>'+ 
'              </div>'+ 
'          </a>'+  
'          <div class="article-card__content">'+ 
'              <div class="article-card__content-top">'+ 
'                  <h5>'+ 
'                      <a href="https://smarterbusiness.telstra.com.au/the-office-in-your-pocket" data-article-name="Mobility: Put your office in your pocket">Mobility: Put your office in your'+ 
'                          pocket</a>'+ 
'                  </h5>'+ 
'                  <p>Your guide to taking your business from the desk, to the road. Discover how a mobile business strategy, with the right tech, can give your business a competitive edge.</p>'+ 
'              </div>'+ 
'              <div class="article-card__content-bottom slider-bottom-cta">'+ 
'             <a class="cta" href="https://smarterbusiness.telstra.com.au/the-office-in-your-pocket" data-article-name="Mobility: Put your office in your pocket">Access Report 4</a>'+
'              </div>'+ 
'          </div>'+  
'  </div>'+
'      </div>'+ 
'  </div>'+
'              </li>'+ 
'          </ul>'+ 
'      </section>'+ 
'  </div>'+ 
'  <div class="section-title text parbase">'+ 
'      <div class="section-title--type1 ">'+ 
'          <div class="row">'+ 
'              <div class="small-12 column">'+ 
'                  <h4>Featured Articles</h4>'+ 
'                  </a>'+ 
'              </div>'+ 
'          </div>'+ 
'      </div>'+ 
'  </div>';

    function init() {
      var $ = window.jQuery;

    $('.featuredContainer1 .show-for-large .list-module__wrapper > *:not(ol)').wrapAll('<div class="eg-top-section"></div>');


    // $(".categoryContainer6").insertBefore('.page__par .productContainer1');
     $('.page__par .productContainer1 > .row > li:last-child >a').insertAfter('.page__par .featuredContainer1 > .row > li:last-child >.list-module');

     $('.featuredContainer1 > ul > li:first-child .article-card--no-image').insertAfter('.productContainer1 > ul > li:last-child > div');

    $('.page__par > div:first-child').after(egToolReportContainer);
  }
    /* Initialise variation */
    onLoadJqueryLibrary(function() {
        waitForElement('.categoryContainer6 > .row > li:first-child', init, 50, 25000);
    }, 50, 10000);
  } catch (e) {
    if (debug) console.log(e, "error in Test" + variation_name);
  }
})();