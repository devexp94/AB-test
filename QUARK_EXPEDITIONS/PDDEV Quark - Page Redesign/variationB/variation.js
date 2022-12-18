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

         //wait for swiper 
         function waitForSwiper(trigger) {
          var interval = setInterval(function () {
              if (typeof Swiper != "undefined") {
                  clearInterval(interval);
                  trigger();
              }
          }, 50);
          setTimeout(function () {
              clearInterval(interval);
          }, 15000)
      }


  function addScript() {
      var cssScript=''+ 
      '<link rel="stylesheet" href="https://unpkg.com/swiper/swiper-bundle.min.css"/>'+
      "<link rel='stylesheet' href='https://cdnjs.cloudflare.com/ajax/libs/Swiper/4.0.7/css/swiper.min.css'/>";
      document.querySelector('head').insertAdjacentHTML('beforeend', cssScript);
              
      var swiperScript = document.createElement('script');
      swiperScript.src = 'https://cdnjs.cloudflare.com/ajax/libs/Swiper/4.0.7/js/swiper.min.js';
      document.getElementsByTagName('head')[0].appendChild(swiperScript);
    }

    function addMeta(){
      var screenMeta = ''+
      '<meta name="viewport" content="width=device-width, initial-scale=1"></meta>';

      document.querySelector('head').insertAdjacentHTML('beforeend', screenMeta);
    }

    
   

    var arrow =''+ 
    '  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">'+ 
    '  <path d="M5.29289 8.29289C5.65338 7.93241 6.22061 7.90468 6.6129 8.2097L6.70711 8.29289L12 13.585L17.2929 8.29289C17.6534 7.93241 18.2206 7.90468 18.6129 8.2097L18.7071 8.29289C19.0676 8.65338 19.0953 9.22061 18.7903 9.6129L18.7071 9.70711L12.7071 15.7071C12.3466 16.0676 11.7794 16.0953 11.3871 15.7903L11.2929 15.7071L5.29289 9.70711C4.90237 9.31658 4.90237 8.68342 5.29289 8.29289Z" fill="#323436"/>'+ 
    '  </svg>';

    var egContent =''+ 
    //Header
'  <header>'+ 
'      <div class="eg-container">'+ 
'          <div class="row">'+ 
'              <a class="eg-logo-section" href="/">'+ 
'                 <img src="https://d9hhrg4mnvzow.cloudfront.net/travel.quarkexpeditions.com/arctic-v2/60f64099-quark-logo-65x169_1000000000000000000028.png" alt="Logo">'+
'              </a>'+ 
'              <div class="eg-call-section">'+ 
'                  <a href="tel:+18662482789">'+ 
'                      <span class="eg-text">Talk to an Expert</span>'+ 
'                      <span class="eg-number">+1 (866) 248-2789</span>'+ 
'                      <span class="eg-call-icon"><img src="https://www.quarkexpeditions.com/profiles/qrk_profile/themes/custom/qrk_theme/src/icons/phone-white.svg" alt="Call Icon"></span>'+ 
'                  </a>'+ 
'                  <div class="eg-user-account"><a href="#"><img src="http://d9hhrg4mnvzow.cloudfront.net/travel.quarkexpeditions.com/ppc-page/ad3077c1-single-occupancy_1000000000000000000028.png" alt="Call Icon"></a></div>'+ 
'              </div>'+ 
'          </div>'+ 
'      </div>'+ 
'  </header>'+ 
//main content start
'  <main>'+ 
'      <div class="eg-learn-more">'+ 
'          <div class="eg-container">'+ 
'              <div class="row">'+ 
'                  <p class="eg-learn-heading">Book now with our Carefree Guarantee. <span>Learn more '+ arrow+'</span></p>'+ 
'                  <p class="eg-learn-para"><span>Plan your dream trip without a care in the world. Book by November 30, 2022, with our Carefree Guarantee, and you can rebook your trip free of charge up to 60 days before departure.</span></p>'+ 
'              </div>'+ 
'          </div>'+ 
'      </div>'+ 
'      <div class="eg-hero">'+ 
'          <div class="eg-container">'+ 
'              <div class="row">'+ 
'                  <div class="eg-heading-section">'+ 
'                      <h1 class="eg-heading">Antartic Voyages</h1>'+ 
'                      <p class="eg-subheading">Choose the Leader in Polar Adventures</p>'+ 
'                  </div>'+ 
'              </div>'+ 
'          </div>'+ 
'      </div>'+ 
'      <div class="eg-content-section">'+ 
'          <div class="eg-container">'+ 
'              <div class="row">'+ 
'                  <div class="eg-about-section">'+ 
'                      <h2 class="eg-about-heading">About Quark</h2>'+ 
'                      <p class="eg-about-para">Overview Antarctica is a mesmerising landscape of ice-choked seas, mountains, bays, fjords, rugged coastlines—and mammoth glaciers standing like carved statues. The impressive vistas of the Antarctic are rivaled only by the breath-taking'+ 
'                          wildlife sightings: minke, humpback, blue, sperm and killer whales; thousands of sea birds nesting on cliff-tops; massive colonies of penguins on remote shorelines; and seals of every description.</p>'+ 
'                      <div class="eg-logo-container">'+ 
'                         <img src="http://d9hhrg4mnvzow.cloudfront.net/travel.quarkexpeditions.com/ppc-page/5a93f360-quark-awardbanner2020-bl-gy-01_1000000000000000000028.png" alt="">'+ 
'                         <img src="http://d9hhrg4mnvzow.cloudfront.net/travel.quarkexpeditions.com/ppc-page/61dea3ee-quark-awardbanner2020-bl-gy-02_1000000000000000000028.png" alt="">'+ 
'                         <img src="http://d9hhrg4mnvzow.cloudfront.net/travel.quarkexpeditions.com/ppc-page/b08a1e58-quark-awardbanner2020-bl-gy-03_1000000000000000000028.png" alt="">'+ 
'                         <img src="http://d9hhrg4mnvzow.cloudfront.net/travel.quarkexpeditions.com/ppc-page/e7f85b2b-quark-awardbanner2020-bl-gy-04_1000000000000000000028.png" alt="">'+ 
'                         <img src="http://d9hhrg4mnvzow.cloudfront.net/travel.quarkexpeditions.com/ppc-page/2af75ef4-quark-awardbanner2020-bl-gy-05_1000000000000000000028.png" alt="">'+ 
'                         <img src="http://d9hhrg4mnvzow.cloudfront.net/travel.quarkexpeditions.com/ppc-page/0c20f582-quark-awardbanner2020-bl-gy-06_1000000000000000000028.png" alt="">'+ 
'                      </div>'+ 
'                  </div>'+ 
'                  <div class="eg-review-section">'+ 
'                      <div class="swiper eg-icon-section">'+ 
'                          <div class="swiper-container">'+ 
'                              <div class="swiper-wrapper ">'+ 
'                                  <div class="swiper-slide">'+ 
'                                      <div class="eg-wrapper">'+ 
'                                          <p class="eg-review-heading">9 Day Spitsbergen Polar Bear Safari</p>'+ 
'                                          <p class="eg-review-para">\'Most exciting and wonderful, and educational experience of my life, thank you to all the experts for sharing so much information on the animals and arctic region, cruise staff and fellow passengers for making this'+ 
'                                              trip one I will remember forever.\'</p>'+ 
'                                          <p class="eg-user"><img src="http://d9hhrg4mnvzow.cloudfront.net/travel.quarkexpeditions.com/ppc-page/ad3077c1-single-occupancy_1000000000000000000028.png" alt="user">Carolyn T.</p>'+ 
'                                          <p class="eg-review-star">'+ 
'                                              <img src="https://d9hhrg4mnvzow.cloudfront.net/travel.quarkexpeditions.com/arctic-v2/764e6dba-star.svg" alt="star">'+ 
'                                              <img src="https://d9hhrg4mnvzow.cloudfront.net/travel.quarkexpeditions.com/arctic-v2/764e6dba-star.svg" alt="star">'+ 
'                                              <img src="https://d9hhrg4mnvzow.cloudfront.net/travel.quarkexpeditions.com/arctic-v2/764e6dba-star.svg" alt="star">'+ 
'                                              <img src="https://d9hhrg4mnvzow.cloudfront.net/travel.quarkexpeditions.com/arctic-v2/764e6dba-star.svg" alt="star">'+ 
'                                              <img src="https://d9hhrg4mnvzow.cloudfront.net/travel.quarkexpeditions.com/arctic-v2/764e6dba-star.svg" alt="star">'+ 
'                                          </p>'+ 
'                                      </div>'+ 
'                                  </div>'+ 
'                                  <div class="swiper-slide">'+ 
'                                      <div class="eg-wrapper">'+ 
'                                          <p class="eg-review-heading">The Galapagos of the North Pole</p>'+ 
'                                          <p class="eg-review-para">\'Same fascination. Landscape out of the ordinary, bare mountains, abundant wild life abundant, no fear of human presence as long as we remain respectful.. Quark team provides an experience worth paying for!\'</p>'+ 
'                                          <p class="eg-user"><img src="http://d9hhrg4mnvzow.cloudfront.net/travel.quarkexpeditions.com/ppc-page/ad3077c1-single-occupancy_1000000000000000000028.png" alt="user">Marielle T.</p>'+ 
'                                          <p class="eg-review-star">'+ 
'                                              <img src="https://d9hhrg4mnvzow.cloudfront.net/travel.quarkexpeditions.com/arctic-v2/764e6dba-star.svg" alt="star">'+ 
'                                              <img src="https://d9hhrg4mnvzow.cloudfront.net/travel.quarkexpeditions.com/arctic-v2/764e6dba-star.svg" alt="star">'+ 
'                                              <img src="https://d9hhrg4mnvzow.cloudfront.net/travel.quarkexpeditions.com/arctic-v2/764e6dba-star.svg" alt="star">'+ 
'                                              <img src="https://d9hhrg4mnvzow.cloudfront.net/travel.quarkexpeditions.com/arctic-v2/764e6dba-star.svg" alt="star">'+ 
'                                              <img src="https://d9hhrg4mnvzow.cloudfront.net/travel.quarkexpeditions.com/arctic-v2/764e6dba-star.svg" alt="star">'+ 
'                                          </p>'+ 
'                                      </div>'+ 
'                                  </div>'+ 
'                                  <div class="swiper-slide">'+ 
'                                      <div class="eg-wrapper">'+ 
'                                          <p class="eg-review-heading">Unforgettable!</p>'+ 
'                                          <p class="eg-review-para">\'Southern Greenland is incredible and travelling with Quark on the Ultra Marine is the only way to go. Our family of 5 enjoyed kayaking, mountain biking and multiple helicopter rides giving us a unique view and'+ 
'                                              experience of this amazing area.\'</p>'+ 
'                                          <p class="eg-user"><img src="http://d9hhrg4mnvzow.cloudfront.net/travel.quarkexpeditions.com/ppc-page/ad3077c1-single-occupancy_1000000000000000000028.png" alt="user">Wendy C.</p>'+ 
'                                          <p class="eg-review-star">'+ 
'                                              <img src="https://d9hhrg4mnvzow.cloudfront.net/travel.quarkexpeditions.com/arctic-v2/764e6dba-star.svg" alt="star">'+ 
'                                              <img src="https://d9hhrg4mnvzow.cloudfront.net/travel.quarkexpeditions.com/arctic-v2/764e6dba-star.svg" alt="star">'+ 
'                                              <img src="https://d9hhrg4mnvzow.cloudfront.net/travel.quarkexpeditions.com/arctic-v2/764e6dba-star.svg" alt="star">'+ 
'                                              <img src="https://d9hhrg4mnvzow.cloudfront.net/travel.quarkexpeditions.com/arctic-v2/764e6dba-star.svg" alt="star">'+ 
'                                              <img src="https://d9hhrg4mnvzow.cloudfront.net/travel.quarkexpeditions.com/arctic-v2/764e6dba-star.svg" alt="star">'+ 
'                                          </p>'+ 
'                                      </div>'+ 
'                                  </div>'+ 
'                                  <div class="swiper-slide">'+ 
'                                      <div class="eg-wrapper">'+ 
'                                          <p class="eg-review-heading">Amazing!</p>'+ 
'                                          <p class="eg-review-para">\'The Greenland expedition was absolutely amazing in everything, from the itinerary to the excursions... The Ultramarine is a truly wonderful ship, comfortable, elegant and equipped with everything needed to give'+ 
'                                              travellers a wonderful experience.\'</p>'+ 
'                                          <p class="eg-user"><img src="http://d9hhrg4mnvzow.cloudfront.net/travel.quarkexpeditions.com/ppc-page/ad3077c1-single-occupancy_1000000000000000000028.png" alt="user">Elisa P.</p>'+ 
'                                          <p class="eg-review-star">'+ 
'                                              <img src="https://d9hhrg4mnvzow.cloudfront.net/travel.quarkexpeditions.com/arctic-v2/764e6dba-star.svg" alt="star">'+ 
'                                              <img src="https://d9hhrg4mnvzow.cloudfront.net/travel.quarkexpeditions.com/arctic-v2/764e6dba-star.svg" alt="star">'+ 
'                                              <img src="https://d9hhrg4mnvzow.cloudfront.net/travel.quarkexpeditions.com/arctic-v2/764e6dba-star.svg" alt="star">'+ 
'                                              <img src="https://d9hhrg4mnvzow.cloudfront.net/travel.quarkexpeditions.com/arctic-v2/764e6dba-star.svg" alt="star">'+ 
'                                              <img src="https://d9hhrg4mnvzow.cloudfront.net/travel.quarkexpeditions.com/arctic-v2/764e6dba-star.svg" alt="star">'+ 
'                                          </p>'+ 
'                                      </div>'+ 
'                                  </div>'+ 
'                                  <div class="swiper-slide">'+ 
'                                      <div class="eg-wrapper">'+ 
'                                          <p class="eg-review-heading">A Fabulous Arctic Saga</p>'+ 
'                                          <p class="eg-review-para">\'We saw huge numbers of birds, 2 polar bears, arctic foxes and reindeer. The scenery was spectacular. Service on board was fantastic and the food excellent. The guides were knowledgeable and engaged. It was a great'+ 
'                                              trip -- highly recommended\'</p>'+ 
'                                          <p class="eg-user"><img src="http://d9hhrg4mnvzow.cloudfront.net/travel.quarkexpeditions.com/ppc-page/ad3077c1-single-occupancy_1000000000000000000028.png" alt="user">Gregg Y.</p>'+ 
'                                          <p class="eg-review-star">'+ 
'                                              <img src="https://d9hhrg4mnvzow.cloudfront.net/travel.quarkexpeditions.com/arctic-v2/764e6dba-star.svg" alt="star">'+ 
'                                              <img src="https://d9hhrg4mnvzow.cloudfront.net/travel.quarkexpeditions.com/arctic-v2/764e6dba-star.svg" alt="star">'+ 
'                                              <img src="https://d9hhrg4mnvzow.cloudfront.net/travel.quarkexpeditions.com/arctic-v2/764e6dba-star.svg" alt="star">'+ 
'                                              <img src="https://d9hhrg4mnvzow.cloudfront.net/travel.quarkexpeditions.com/arctic-v2/764e6dba-star.svg" alt="star">'+ 
'                                              <img src="https://d9hhrg4mnvzow.cloudfront.net/travel.quarkexpeditions.com/arctic-v2/764e6dba-star.svg" alt="star">'+ 
'                                          </p>'+ 
'                                      </div>'+ 
'                                  </div>'+ 
'                              </div>'+ 
'                              <div class="swiper-button-container">'+ 
'                              <div class="swiper-button-next"></div>'+ 
'                              <div class="swiper-button-prev"></div>'+ 
'                              </div>'+ 
'                          </div>'+ 
'                      </div>'+ 
'                  </div>'+ 
'              </div>'+ 
'          </div>'+ 
'      </div>'+ 
'      <div class="eg-why-section">'+ 
'          <div class="eg-container">'+ 
'              <div class="row">'+ 
'                  <h2 class="eg-why-heading">Why Quark Expeditions</h2>'+ 
'                  <div class="eg_desktop_bar eg_bar_section">'+ 
'                      <div class="eg_bar_wrapper">'+ 
'                          <div class="eg_bar webBooking">'+ 
'                              <div class="webBooking_content">'+
'                                  <p><span class="money_icon"><img src="https://expogrowth.in/wp-content/uploads/2022/10/img1.svg"></span>The Best </br>Team</p>'+ 
'                                  <span class="eg_tooltip_icon tool"><svg xmlns="http://www.w3.org/2000/svg"'+ 
'                                      width="16" height="16" viewBox="0 0 16 16" fill="none">'+ 
'                                      <circle cx="8" cy="8" r="8" fill="#4176B2"></circle>'+ 
'                                      <path d="M7.04094 6.09463H8.95383V13.2678H7.04094V6.09463Z" fill="white"></path>'+ 
'                                      <path d="M7.04094 2.73684H8.95383V4.64973H7.04094V2.73684Z" fill="white"></path>'+ 
'                                  </svg></span>'+ 
'                              </div>'+ 
'                              <div class="eg_tooltip">'+ 
'                                  <p>You’ll join elite guides trained at Quark Academy—which surpasses every standard imaginable for safety and preparedness in the Polar Regions—and interact directly with world-class polar experts.'+ 
'                                  </p>'+ 
'                              </div>'+ 
'                          </div>'+ 
'                          <div class="eg_bar feefo">'+ 
'                              <div class="feefo_content">'+
'                                  <p><span class="money_icon"><img'+ 
'                                          src="https://expogrowth.in/wp-content/uploads/2022/10/img2.svg"></span>We take you <br> deeper'+ 
'                                  </p>'+
'                                  <span class="eg_tooltip_icon tool"><svg xmlns="http://www.w3.org/2000/svg"'+ 
'                                      width="16" height="16" viewBox="0 0 16 16" fill="none">'+ 
'                                      <circle cx="8" cy="8" r="8" fill="#4176B2"></circle>'+ 
'                                      <path d="M7.04094 6.09463H8.95383V13.2678H7.04094V6.09463Z" fill="white"></path>'+ 
'                                      <path d="M7.04094 2.73684H8.95383V4.64973H7.04094V2.73684Z" fill="white"></path>'+ 
'                                  </svg></span>'+  
'                              </div>'+ 
'                              <div class="feefo eg_tooltip">'+ 
'                                  <p>Quark Expeditions goes where others simply can’t. Or won’t. But our expert guides’ abilities to read unknown terrain means where there’s a will, there’s a way—and that way could be by kayak, Zodiac boat, helicopter, or'+ 
'                                      even hot air balloon.</p>'+ 
'                              </div>'+ 
'                          </div>'+ 
'                          <div class="eg_bar book">'+ 
'                              <div class="book_content">'+
'                                  <p><span class="money_icon"><img src="https://expogrowth.in/wp-content/uploads/2022/10/img3.svg"></span> Most innovative <br>itineraries</p>'+ 
'                                   <span class="eg_tooltip_icon tool"><svg xmlns="http://www.w3.org/2000/svg"'+ 
'                                      width="16" height="16" viewBox="0 0 16 16" fill="none">'+ 
'                                      <circle cx="8" cy="8" r="8" fill="#4176B2"></circle>'+ 
'                                      <path d="M7.04094 6.09463H8.95383V13.2678H7.04094V6.09463Z" fill="white"></path>'+ 
'                                      <path d="M7.04094 2.73684H8.95383V4.64973H7.04094V2.73684Z" fill="white"></path>'+ 
'                                  </svg></span>'+ 
'                              </div>'+ 
'                              <div class="eg_tooltip">'+ 
'                                  <p>We’ve been pioneering new types of expeditions into the Polar Regions for over 30 years now. We not only offer the most itineraries, but the most varied as well. Regardless of where you venture, you can explore culture,'+ 
'                                      wildlife, science, physical activity, and more. To put it simply: More places to explore, more ways to explore them.</p>'+ 
'                              </div>'+ 
'                          </div>'+ 
'                          <div class="eg_bar experience">'+ 
'                              <div class="experience_content">'+
'                                  <p><span class="money_icon"><img src="https://expogrowth.in/wp-content/uploads/2022/10/img4.svg"></span> Most adventure <br>options</p>'+ 
'                                   <span class="eg_tooltip_icon tool"><svg xmlns="http://www.w3.org/2000/svg"'+ 
'                                      width="16" height="16" viewBox="0 0 16 16" fill="none">'+ 
'                                      <circle cx="8" cy="8" r="8" fill="#4176B2"></circle>'+ 
'                                      <path d="M7.04094 6.09463H8.95383V13.2678H7.04094V6.09463Z" fill="white"></path>'+ 
'                                      <path d="M7.04094 2.73684H8.95383V4.64973H7.04094V2.73684Z" fill="white"></path>'+ 
'                                  </svg></span>'+ 
'                              </div>'+ 
'                              <div class="eg_tooltip">'+ 
'                                  <p>Every voyage starts on a ship, but the real adventure happens off-ship. In the polar wilds, we camp, kayak, mountain bike, hike and fly by helicopter to remote locations. We paddleboard on icy waters, and rise above the'+ 
'                                      polar landscape in hot air balloons. With the most adventure options available, how you experience the Polar Regions is entirely up to you.</p>'+ 
'                              </div>'+ 
'                          </div>'+ 
'                          <div class="eg_bar smallShip">'+ 
'                              <div class="experience_content">'+
'                                  <p><span class="money_icon"><img'+ 
'                                          src="https://editor-assets.abtasty.com/46831/6380d32d20acb1669387053.svg"></span>Small'+ 
'                                      <br>Ships'+ 
'                                  </p>'+ 
'                                  <span class="eg_tooltip_icon tool"><svg xmlns="http://www.w3.org/2000/svg"'+ 
'                                      width="16" height="16" viewBox="0 0 16 16" fill="none">'+ 
'                                      <circle cx="8" cy="8" r="8" fill="#4176B2"></circle>'+ 
'                                      <path d="M7.04094 6.09463H8.95383V13.2678H7.04094V6.09463Z" fill="white"></path>'+ 
'                                      <path d="M7.04094 2.73684H8.95383V4.64973H7.04094V2.73684Z" fill="white"></path>'+ 
'                                  </svg></span>'+ 
'                              </div>'+ 
'                              <div class="eg_tooltip">'+ 
'                                  <p>Our diverse fleet of small polar vessels, which includes icebreakers and expedition ships, can take you to places larger ships can’t navigate. Equally key is our fleet of Zodiac boats, which let us make landfall where others'+ 
'                                      are not able. Trust us: when you travel all the way to the edge of the world, you’ll want to reach out and touch it too </p>'+ 
'                              </div>'+ 
'                          </div>'+ 
'                      </div>'+ 
'                  </div>'+ 
'              </div>'+ 
'          </div>'+ 
'      </div>'+ 
'      <div class="eg-global-content">'+ 
'          <div class="eg-container">'+ 
'              <div class="row">'+ 
'                  <h2 class="eg-global-heading">Feel safe with a globally accredited company</h2>'+ 
'                  <p class="eg-global-para">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris commodo consequat.</p>'+ 
'                  <div class="eg-global-logo">'+ 
'                      <img src="http://d9hhrg4mnvzow.cloudfront.net/travel.quarkexpeditions.com/ppc-page/9c091744-iaato_1000000000000000000028.png" alt="IAATO">'+ 
'                      <img src="http://d9hhrg4mnvzow.cloudfront.net/travel.quarkexpeditions.com/ppc-page/0b2d4063-aeco_1000000000000000000028.png" alt="AECO">'+ 
'                  </div>'+ 
'              </div>'+ 
'          </div>'+ 
'      </div>'+ 
'  </main>'+
// Footer Section
'  <footer>'+ 
'      <div class="eg-container">'+ 
'          <div class="row">'+ 
'              <div class="featured-section">'+ 
'                  <p class="eg-featured-heading">Featured with:</p>'+ 
'                  <div class="eg-featured-logo">'+ 
'                      <img src="http://d9hhrg4mnvzow.cloudfront.net/travel.quarkexpeditions.com/ppc-page/f47c2097-featured-logo_1000000000000000000028.png" alt="featured-logo">'+ 
'                  </div>'+ 
'              </div>'+ 
'              <div class="eg-contact-section">'+ 
'                  <p class="eg-address">Quark Expeditions 112 Merton St, 1st FloorToronto, ON M4S 2Z8 Canada</p>'+ 
'                  <div class="eg-contact-link">'+ 
'                      <a href="#">Terms</a>'+ 
'                      <span class="eg-separator">.</span>'+ 
'                      <a href="#">Privacy</a>'+ 
'                  </div>'+ 
'                  <div class="eg-socoal-section">'+ 
'                      <a href="#">'+ 
'                          <img src="http://d9hhrg4mnvzow.cloudfront.net/travel.quarkexpeditions.com/ppc-page/76464cde-quark-socialicons-2018-ylcircle-wt-linkedin-linkedin-youtube_1000000000000000000028.png" alt="Youtube">'+ 
'                      </a>'+ 
'                      <a href="#">'+ 
'                          <img src="http://d9hhrg4mnvzow.cloudfront.net/travel.quarkexpeditions.com/ppc-page/a2d2e94e-quark-socialicons-2018-ylcircle-wt-linkedin-linkedin-twitter_1000000000000000000028.png" alt="Twitter">'+ 
'                      </a>'+ 
'                      <a href="#">'+ 
'                          <img src="http://d9hhrg4mnvzow.cloudfront.net/travel.quarkexpeditions.com/ppc-page/bcbcee06-quark-socialicons-2018-ylcircle-wt-linkedin-linkedin-instagram_1000000000000000000028.png" alt="Instagram">'+ 
'                      </a>'+ 
'                      <a href="#">'+ 
'                          <img src="http://d9hhrg4mnvzow.cloudfront.net/travel.quarkexpeditions.com/ppc-page/c112c71b-quark-socialicons-2018-ylcircle-wt-linkedin-linkedin-facebook_1000000000000000000028.png" alt="facebook">'+ 
'                      </a>'+ 
'                  </div>'+ 
'                  <p class="eg-reserved">All rights reserved © 2022</p>'+ 
'              </div>'+ 
'          </div>'+ 
'      </div>'+ 
'  </footer>';

    function init() {
      addMeta()
      document.querySelector('body').insertAdjacentHTML('beforeend', egContent);

      document.querySelector('.eg-learn-heading span').addEventListener('click', function(){
        document.querySelector('.eg-learn-heading').classList.toggle('active');
      })

      // document.querySelector('').addEventListener('click', function(){
      //   document.querySelector('.eg_desktop_bar .eg_bar').classList.toggle('eg_active');
      // })

      var egMainSubMenu = document.querySelectorAll('html body .eg_tooltip_icon');

      for(var i=0; i < egMainSubMenu.length; i++){
        egMainSubMenu[i].addEventListener('click', function(e){
            e.preventDefault()
            e.stopImmediatePropagation();
            var self = this;
            egMainSubMenu.forEach(function(item) {
                if(item != self) {
                    item.parentElement.classList.remove('eg_active');
                }
            })
            this.parentElement.classList.toggle("eg_active");
        });
      }

      document.querySelector('.eg-heading-section').insertAdjacentElement('afterend', document.querySelector('#lp-pom-box-17'));

      waitForSwiper(function(){
        var bmswiper = new Swiper ('.swiper-container', {
            // Optional parameters
            direction: 'horizontal',
            spaceBetween: 10,
            slidesPerView: 1,
            centeredSlides: true,
            loop: true,
            navigation: {
              nextEl: '.swiper-button-next',
              prevEl: '.swiper-button-prev',
            },
        })
        
    });
    window.dispatchEvent(new Event('resize'));
 addScript();

    }

    var arrowImagePrev = ''+
'  <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">'+ 
'  <path fill-rule="evenodd" clip-rule="evenodd" d="M20.0001 1.6665C9.87486 1.6665 1.66675 9.87462 1.66675 19.9998C1.66675 30.1251 9.87486 38.3332 20.0001 38.3332C30.1253 38.3332 38.3334 30.1251 38.3334 19.9998C38.3334 9.87462 30.1253 1.6665 20.0001 1.6665ZM23.6786 12.1547C23.0277 11.5038 21.9724 11.5038 21.3216 12.1547L14.6549 18.8213L14.5163 18.9783C14.0079 19.6322 14.0541 20.5775 14.6549 21.1783L21.3216 27.845L21.4786 27.9837C22.1324 28.492 23.0778 28.4458 23.6786 27.845L23.8172 27.688C24.3256 27.0342 24.2794 26.0888 23.6786 25.488L18.1917 19.9998L23.6786 14.5117L23.8172 14.3547C24.3256 13.7009 24.2794 12.7555 23.6786 12.1547Z" fill="#323436"/>'+ 
'  </svg>';
    
    var arrowImageNext = ''+
    '  <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">'+ 
    '  <path d="M20.0001 1.6665C9.87486 1.6665 1.66675 9.87462 1.66675 19.9998C1.66675 30.1251 9.87486 38.3332 20.0001 38.3332C30.1253 38.3332 38.3334 30.1251 38.3334 19.9998C38.3334 9.87462 30.1253 1.6665 20.0001 1.6665Z" fill="#323436"/>'+ 
    '  <path d="M16.3214 12.1547C16.9222 11.5539 17.8676 11.5076 18.5214 12.016L18.6784 12.1547L25.3451 18.8213C25.9459 19.4221 25.9921 20.3675 25.4837 21.0213L25.3451 21.1783L18.6784 27.845C18.0276 28.4959 16.9723 28.4959 16.3214 27.845C15.7206 27.2442 15.6744 26.2988 16.1828 25.645L16.3214 25.488L21.8083 19.9998L16.3214 14.5117C15.7206 13.9109 15.6744 12.9655 16.1828 12.3117L16.3214 12.1547Z" fill="white"/>'+ 
    '  </svg>';
    
          
    function init2(){

        document.querySelector('.eg-icon-section .swiper-button-next').innerHTML = arrowImageNext;
        document.querySelector('.eg-icon-section .swiper-button-prev').innerHTML = arrowImagePrev;
    }



    /* Initialise variation */
    waitForElement("body", init, 50, 15000);
    waitForElement(".swiper-button-prev", init2, 100, 35000);
    
  } catch (e) {
    if (debug) console.log(e, "error in Test" + variation_name);
  }
})();
