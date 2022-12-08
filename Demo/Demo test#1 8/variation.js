(function () {
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
          document.querySelectorAll(selector).length > 0 &&
          window.eg_faqTwickenham && window.eg_faqEdgbaston && window.eg_faqQueensClub 
          && window.eg_faqEastbourne
        ) {
          clearInterval(interval);
          trigger();
        }
      }, delayInterval);
      setTimeout(function () {
        clearInterval(interval);
      }, delayTimeout);
    }

    function live(selector, event, callback, context) {
      /****Helper Functions****/
      // helper for enabling IE 8 event bindings
      function addEvent(el, type, handler) {
        if (el.attachEvent) el.attachEvent('on' + type, handler);
        else el.addEventListener(type, handler);
      }
      // matches polyfill
      this.Element && function (ElementPrototype) {
        ElementPrototype.matches = ElementPrototype.matches ||
          ElementPrototype.matchesSelector ||
          ElementPrototype.webkitMatchesSelector ||
          ElementPrototype.msMatchesSelector ||
          function (selector) {
            var node = this,
              nodes = (node.parentNode || node.document).querySelectorAll(selector),
              i = -1;
            while (nodes[++i] && nodes[i] != node);
            return !!nodes[i];
          };
      }(Element.prototype);
      // live binding helper using matchesSelector
      function live(selector, event, callback, context) {
        addEvent(context || document, event, function (e) {
          var found, el = e.target || e.srcElement;
          while (el && el.matches && el !== context && !(found = el.matches(selector))) el = el.parentElement;
          if (found) callback.call(el, e);
        });
      }
      live(selector, event, callback, context);
    }

    function changeText(selector , text){
      if(document.querySelector(selector)) document.querySelector(selector).innerHTML = text;
    }

    /* Variation functions */


    var eg_contact_us = ''+
    '<div class="eg_contact-us">'+
    '       <div class="eg_contact__content">'+
    '           <div class="eg_contact-head">'+
    '               <h3>Contact us</h3>'+
    '               <p>We have a team of highly knowledgeable members who <br>are happy to advise you on all aspects of our events</p>'+
    '           </div>'+
    '           <div class="eg_contact-body">'+
    '               <div class="eg_link-holder">'+ 
    '                   <a href="tel:02088437699" class="contact-link">'+ 
    '                       <h3 class="text-uppercase">Call us</h3>'+ 
    '                       <p class="eg_number" style="visibility: visible;">+442080 235197</p>'+
    '                   </a>'+ 
    '               </div>'+
    '               <div class="eg_link-holder">'+ 
    '                   <a href="/emailus/" class="contact-link">'+ 
    '                       <h3 class="text-uppercase">Message us</h3>'+ 
    '                       <p>Send us a question <i class="fa fa-angle-right" aria-hidden="true"></i></p>'+ 
    '                   </a>'+ 
    '               </div>'+
    '               <div class="eg_link-holder">'+ 
    '                   <a href="https://www.keithprowse.co.uk/call-back-form-new" class="contact-link">'+ 
    '                       <h3 class="text-uppercase">Request a call back</h3>'+ 
    '                       <p>We\'ll call you  <i class="fa fa-angle-right" aria-hidden="true"></i></p>'+ 
    '                   </a>'+ 
    '               </div>'+
    '           </div>'+
    '       </div>'+
    '</div>';

    var eg_lookAround = ''+
    '<div class="eg_look-around desktop">'+
    '      <h3>Take a look around</h3>'+
    '      <div class="eg_tab-panel">'+ 
    '             <p data-id="IMAGE GALLERY" class="active">Image Gallery</p>'+
    '             <p data-id="STATIC VIEW FROM SEATS">Static View From Seats</p>'+
    '             <p data-id="SEATING GUIDE">Seating Guide</p>'+
    '             <p data-id="VIDEO">Video</p>'+
    '             <p data-id="VIRTUAL TOUR">Virtual Tour</p>'+
    '      </div>'+
    '</div>';

    var eg_lookAround_mobile = ''+
    '<div class="eg_look-around mobile">'+
    '      <div class="eg_tab-mobile">'+ 
    '             <p id="IMAGE GALLERY" class="active"><span class="glyphicon glyphicon-arrow-left"></span> Image Gallery <span class="glyphicon glyphicon-arrow-right"></span></p>'+
    '             <p id="STATIC VIEW FROM SEATS"><span class="glyphicon glyphicon-arrow-left"> </span>Static View From Seats <span class="glyphicon glyphicon-arrow-right"></span></p>'+
    '             <p id="SEATING GUIDE"><span class="glyphicon glyphicon-arrow-left"> </span>Seating Guide <span class="glyphicon glyphicon-arrow-right"></span></p>'+
    '             <p id="VIDEO"><span class="glyphicon glyphicon-arrow-left"> </span>Video <span class="glyphicon glyphicon-arrow-right"></span></p>'+
    '             <p id="VIRTUAL TOUR"><span class="glyphicon glyphicon-arrow-left"> </span>Virtual Tour <span class="glyphicon glyphicon-arrow-right"></span></p>'+
    '      </div>'+
    '</div>';

    var eg_section_nav = ''+
    '<div class="eg-nav">'+
    '      <p class="look_around-link">Take a look around</p>'+
    '      <p class="what_included-link">What\'s included</p>'+
    '      <p class="more_information-link">More information</p>'+
    '      <p class="contact_us-link">Contact us</p>'+
    '</div>';

    var eg_hero = ''+
    '<div class="eg_hero">'+
    '      <div class="eg_hero__content">'+
    '            <p class="eg_event">England v Argentina</p>'+
    '            <h1>The Lock No. 4 Pitch View Private Table of 4</h1>'+
    '            <p class="eg_where">British airways rose garden</p>'+
    '            <p class="eg_time">Sunday 6 November</p>'+
    '      </div>'+
    '</div>'+
    '<div class="eg_desktop-img">'+
    '     <div class="left"></div>'+
    '     <div class="right"><img src="https://www.keithprowse.co.uk/-/media/homepage/hero-image/hero-image---twick-v3.jpg"></div>'+
    '</div>'+
    '<div class="eg_mobile-img">'+
    '</div>';

    var eg_included = ''+
    '<div class="eg_included">'+
    '      <h3>What\'s included</h3>'+
    '</div>';

    var eg_footerSticky = ''+
    '<div class="eg_footer-sticky">'+
    '   <div>'+
    '      <div class="eg_view--options">'+
    '            <button class="eg_close"></button>'+
    '            <span class="eg_open">&#8963</span>'+
    '            <p>VIEW OPTIONS</p>'+
    '      </div>'+
    '      <h3></h3>'+
    '      <div class="eg_footer__content">'+
    '           <div class="eg_left">'+
    '                 <div class="eg_header">'+
    '                     <div>DATE</div>'+
    '                     <div>£ PER PERSON</div>'+
    '                     <div>QUANTITY</div>'+
    '                 </div>'+
    '           </div>'+
    '           <div class="eg_right">'+
    '           </div>'+
    '      </div>'+
    '   </div>'+
    '</div>';

    /* Variation Init */
    function init() {
      /* start your code here */

      // insert header 
      document.querySelector('#wrapper header#header').insertAdjacentHTML('afterend',eg_hero);

      // get header copy
      var get_event = document.querySelector('.event-tree li:nth-of-type(2) a').innerHTML;
      var get_where = document.querySelector('.event-tree li:nth-of-type(1) a').innerHTML;
      var get_heading = document.querySelector('.event-tree li:nth-of-type(3) a').innerHTML;
      var get_time = document.querySelector('.details-list li:first-of-type p').innerHTML.replace('FROM: ','');

      // inserted FAQ section && contact us section
      if(window.location.href.indexOf('/twickenham-stadium/') > 1){
        document.querySelector('.contact-us').insertAdjacentHTML('beforebegin',window.eg_faqTwickenham + eg_contact_us);
        document.querySelector('.eg_desktop-img .right').innerHTML = '<img src="https://www.keithprowse.co.uk/-/media/homepage/hero-image/hero-image---twick-v3.jpg">';
        document.querySelector('.eg_mobile-img').style.cssText = 'background: url(https://www.keithprowse.co.uk/-/media/homepage/hero-image/hero-image---twick-v3.jpg)';
        document.querySelector('.eg_hero').style.cssText = 'background: #a71930 !important; color: #fff';
      } 
      if(window.location.href.indexOf('/edgbaston/') > 1){
        document.querySelector('.contact-us').insertAdjacentHTML('beforebegin',window.eg_faqEdgbaston + eg_contact_us);
        document.querySelector('.eg_desktop-img .right').innerHTML = '<img src="https://www.keithprowse.co.uk/-/media/venue/edgbaston/edgbaston.jpg">';
        document.querySelector('.eg_mobile-img').style.cssText = 'background: url(https://www.keithprowse.co.uk/-/media/venue/edgbaston/edgbaston.jpg)';
        document.querySelector('.eg_hero').style.cssText = 'background: rgb(34, 49, 99) !important; color: #fff;';
      }
      if(window.location.href.indexOf('/queens-club/') > 1){
        document.querySelector('.contact-us').insertAdjacentHTML('beforebegin',window.eg_faqQueensClub + eg_contact_us);
        document.querySelector('.eg_desktop-img .right').innerHTML = '<img src="https://www.keithprowse.co.uk/-/media/venue/queens/2023/general/the-queens-club.png">';
        document.querySelector('.eg_mobile-img').style.cssText = 'background: url(https://www.keithprowse.co.uk/-/media/venue/queens/2023/general/the-queens-club.png)';
      } 
      if(window.location.href.indexOf('/devonshire park/') > 1){
        document.querySelector('.contact-us').insertAdjacentHTML('beforebegin',window.eg_faqEastbourne + eg_contact_us);
        document.querySelector('.eg_desktop-img .right').innerHTML = '<img src="https://www.keithprowse.co.uk/-/media/venue/devonshire-park/2023/eastbourne/general/eastbourne-international-banner.png">';
        document.querySelector('.eg_mobile-img').style.cssText = 'background: url(https://www.keithprowse.co.uk/-/media/venue/devonshire-park/2023/eastbourne/general/eastbourne-international-banner.png)';
      } 
      if(window.location.href.indexOf('/the-kia-oval/') > 1 || window.location.href.indexOf('/the-kia-oval/') > 1){
        document.querySelector('.contact-us').insertAdjacentHTML('beforebegin',window.eg_faqOval + eg_contact_us);
        document.querySelector('.eg_desktop-img .right').innerHTML = '<img src="https://www.keithprowse.co.uk/-/media/venue/kia-oval/2017/images/venue/kia-oval.jpg">';
        document.querySelector('.eg_mobile-img').style.cssText = 'background: url(https://www.keithprowse.co.uk/-/media/venue/kia-oval/2017/images/venue/kia-oval.jpg)';
        document.querySelector('.eg_hero').style.background = '#88DBDF';
        document.querySelector('.eg_hero').style.cssText = 'background: #88DBDF; color: #fff;';
      }  

      faqToggle();

      // lock package
      var experience = document.querySelector('#experience');
      document.querySelector('.package-tabholder').insertAdjacentElement('beforebegin', experience);

      var getDescription = document.querySelector('.package-description-wrapper .package-description').innerHTML;

      document.querySelector('.guest-counter h2').parentElement.innerHTML = getDescription

      document.querySelector('.guest-counter .table-accordion').insertAdjacentHTML('afterend',eg_section_nav);


      // look around 
      document.querySelector('.package-tabholder .tab-content.top').insertAdjacentHTML('afterbegin', eg_lookAround);
      document.querySelector('.package-tabholder .tab-content.top').insertAdjacentHTML('beforeend', eg_lookAround_mobile);
      var tabInr = '';
      var tabMobInr = '';
      document.querySelectorAll('#events-tabs li a').forEach(function(el,i){
          tabInr+='<p data-id="'+el.getAttribute('data-ga-tab')+'" class='+(i==0 ? "active": "")+'>'+el.textContent+'</p>';
          tabMobInr+=' <p id="'+el.getAttribute('data-ga-tab')+'" class='+(i==0 ? "active": "")+'><span class="glyphicon glyphicon-arrow-left"></span>'+el.textContent+'<span class="glyphicon glyphicon-arrow-right"></span></p>';
      });
      document.querySelector('div.eg_look-around.desktop .eg_tab-panel').innerHTML = tabInr;
      document.querySelector('div.eg_look-around.mobile .eg_tab-mobile').innerHTML = tabMobInr;
      live('.eg_tab-panel p','click',function(){
        var getDataId = this.getAttribute('data-id');
        document.querySelector('.eg_tab-panel p.active').classList.remove('active');
        this.classList.add('active');
        document.querySelector('[data-ga-tab="'+getDataId+'"]').click();
      })

      // mobile next 
      live('.eg_tab-mobile p .glyphicon-arrow-right','click',function(){
        var nextElement = this.parentElement.nextElementSibling;
        if(nextElement){
          var getId = nextElement.getAttribute('id');
          document.querySelector('.eg_tab-mobile p.active').classList.remove('active');
          nextElement.classList.add('active');
          document.querySelector('[data-id="'+getId+'"]').click();
        }else{
          this.style.opacity = '0.5';
        }
      })

      // mobile previous
      live('.eg_tab-mobile p .glyphicon-arrow-left','click',function(){
        var prevElement = this.parentElement.previousElementSibling
        if(prevElement){
          var getId = prevElement.getAttribute('id');
          document.querySelector('.eg_tab-mobile p.active').classList.remove('active');
          prevElement.classList.add('active');
          document.querySelector('[data-id="'+getId+'"]').click();
        }
      })

      var getTabLength = document.querySelectorAll('#events-tabs li').length;

      for(var i = 0; i < document.querySelectorAll('.eg_tab-panel p').length; i++){
        if(i >= getTabLength){
          document.querySelectorAll('.eg_tab-panel p')[i].remove();
          document.querySelectorAll('.eg_tab-mobile p')[i].remove();
        }
      }

      // insert image section
      var getImg = document.querySelector('.navbar-brand img').getAttribute('src');
      document.querySelector('.eg_mobile-img').innerHTML = '<img src='+getImg+'>';
      document.querySelector('.eg_desktop-img .left').innerHTML = '<img src='+getImg+'>';


      changeText('.eg_event',get_event);
      changeText('.eg_where',get_where);
      changeText('.eg_hero__content h1',get_heading);


      const words = get_time.toLowerCase();
      const finalSentence = words.replace(/(^\w{1})|(\s+\w{1})/g, letter => letter.toUpperCase());
      changeText('.eg_time',finalSentence);

      // what's included 
      document.querySelector('.package-description-wrapper .package-description').innerHTML = eg_included;


      // eg nav scroll into view 
      live('.eg-nav .look_around-link','click',function(){
        document.querySelector('.package-tabholder .eg_look-around h3').scrollIntoView({
          'behavior': "smooth", 
          'block':'center',
          'inline': 'start',
        })
      })

      live('.eg-nav .what_included-link','click',function(){
        document.querySelector('.eg_included h3').scrollIntoView({
          'behavior': "smooth", 
          'block':'center',
          'inline': 'start',
        })
      })


      live('.eg-nav .more_information-link','click',function(){
        document.querySelector('.eg_faq .eg_faq-head h3').scrollIntoView({
          'behavior': "smooth", 
          'block':'center',
          'inline': 'start',
        })
      })

     
      live('.eg-nav .contact_us-link','click',function(){
        document.querySelector(' .eg_contact-us .eg_contact-head h3').scrollIntoView({
          'behavior': "smooth", 
          'block':'center',
          'inline': 'start',
        })
      })


      // footer sticky
      document.querySelector('body').insertAdjacentHTML('beforeend',eg_footerSticky);

      changeText('.eg_footer-sticky h3',get_heading);

      var getStickyContent = document.querySelectorAll('.guest-counter .table-accordion > li:not(:first-of-type)');
      
      getStickyContent.forEach(function(el){
        var getDate = el.querySelector('.date.date-value').innerText;
        var getPrice = el.querySelector('.price.per-person').innerHTML;
        var getQuantity = el.querySelector('.counter-inner-wrapper').innerHTML;

        document.querySelector('.eg_footer__content .eg_left').insertAdjacentHTML('beforeend',
        '      <div class="eg_list">'+
        '            <div class="eg_date">'+getDate+'</div>'+
        '            <div class="eg_price">'+getPrice+'</div>'+
        '            <div class="eg_quantity">'+getQuantity+'</div>'+
        '      </div>'
        )
      })

      var getBasket = document.querySelector('.cart.float-cart');
      document.querySelector('.eg_footer__content .eg_right').innerHTML = getBasket.innerHTML;

      live('.eg_view--options, .eg_view--options button','mousedown',function(){
        document.querySelector('.eg_footer-sticky').classList.toggle('eg_active');
      })

    }


    /*==================== Toggle  ====================*/
    function faqToggle(){
      var question_content = document.getElementsByClassName("faq_question__content");
      var btns = document.querySelectorAll(".faq_question");

      function toggleSkills() {
        let itemClass = this.parentNode.className;

        for (i = 0; i < question_content.length; i++) {
          question_content[i].className = "faq_question__content";
        }
        if (itemClass === "faq_question__content") {
          this.parentNode.className = "faq_question__content active";
        }
      }
      btns.forEach(function(el){
        el.addEventListener("click", toggleSkills);
      });
    }

    /* Initialize variation */
    waitForElement(".contact-us", init, 50, 15000);
  } catch (e) {
    if (debug) console.log(e, "error in Test" + variation_name);
  }
})();
