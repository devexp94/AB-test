(function () {
  try {
    var debug = 0;
    var variation_name = '';

    var assests = [
      {
        img: 'https://images.wineselectors.com.au/media/wineselectors/wineplan/2974ct-cdr-release-regional-plus-landing-page.jpg',
      },
      {
        img: 'https://images.wineselectors.com.au/media/wineselectors/wineplan/release-icon-regional.png',
      },
      {
        img: 'https://images.wineselectors.com.au/media/wineselectors/wineplan/2974ct-cdr-release-regional-plus-landing-page.jpg',
      },
      {
        img: 'https://images.wineselectors.com.au/media/wineselectors/wineplan/3301ct-top-banner-1920x500-opt-2.jpg',
      },
      {
        img: 'https://images.wineselectors.com.au/media/wineselectors/WinePlan/3251-CDR-Landing_1920-x-500-TOA.jpg',
      },
      {
        img: 'https://images.wineselectors.com.au/media/wineselectors/WinePlan/3251-CDR-Landing_1920-x-500-Organic.jpg',
      },
      {
        img: 'https://images.wineselectors.com.au/media/wineselectors/WinePlan/3251-CDR-Landing_1920-x-500-Organic.jpg',
      },
      {
        img: 'https://images.wineselectors.com.au/media/wineselectors/WinePlan/3251-CDR-Landing_1920-x-500-Organic.jpg',
      },
      {
        img: 'https://images.wineselectors.com.au/media/wineselectors/WinePlan/3251-CDR-Landing_1920-x-500-Organic.jpg',
      },
      {
        img: 'https://images.wineselectors.com.au/media/wineselectors/WinePlan/3251-CDR-Landing_1920-x-500-Sparkling.jpg',
      },
      {
        img: 'https://images.wineselectors.com.au/media/wineselectors/WinePlan/3251-CDR-Landing_1920-x-500-Winemakers.jpg',
      },
      {
        img: 'https://images.wineselectors.com.au/media/wineselectors/WinePlan/3251-CDR-Landing_1920-x-500-Winemakers.jpg',
      },
      {
        img: 'https://images.wineselectors.com.au/media/wineselectors/WinePlan/3251-CDR-Landing_1920-x-500-Chairmans.jpg',
      },
      {
        img: 'https://images.wineselectors.com.au/media/wineselectors/wineplan/tailor made/1860ct-landing-page-banner-tailormade.jpg',
      },
      {
        img: 'https://images.wineselectors.com.au/media/wineselectors/wineplan/tailor made/1860ct-landing-page-banner-tailormade.jpg',
      },
    ];

    function waitForElement(selector, trigger, delayInterval, delayTimeout) {
      var interval = setInterval(function () {
        if (document && document.querySelector(selector) && document.querySelectorAll(selector).length > 0) {
          clearInterval(interval);
          trigger();
        }
      }, delayInterval);
      setTimeout(function () {
        clearInterval(interval);
      }, delayTimeout);
    }


    var egHero =''+ 
    '  <div class="eg-hero-banner">'+ 
    '  <div class="eg-hero-inr">'+ 
    '      <div class="eg-hero-content">'+ 
    '          <h2 class="hero-heading">UNBOX. DISCOVER. ENJOY.</h2>'+ 
    '          <p class="hero-para">Experience new flavours and discover your next favourite Australian wine with one of our exclusive wine subscriptions, pre-selected or customised to suit you.</p>'+ 
    '      </div>'+ 
    '      </div>'+ 
    '  </div>';


    var egVideoSection =''+ 
    '  <div class="eg-filter-section">'+
    '     <div class="eg-filter-section-inr">'+
    '     <h2 class="text-center eg-filter-heading">OUR MOST POPULAR COLLECTIONS</h2>'+
    '     <p class="text-center eg-filter-subheading">Tried and true, these subscriptions are sure to impress.</p>'+
    '       <div class="eg-filter-container">'+
    '         <p class="filter-text">Filter</p>'+
'  <div class="spSelect-container eg-collection" tabindex="0">'+ 
'      <div class="spSelect-label">'+ 
'          <div class="spSelect-label-text">Price, low to high</div>'+ 
'          <div class="spIconSelect up">'+ 
'              <div class="i-angle-up"></div>'+ 
'          </div>'+ 
'          <div class="spIconSelect down">'+ 
'              <div class="i-angle-down"></div>'+ 
'          </div>'+ 
'      </div>'+ 
'      <div class="spSelect-options-container" style="max-height: 1000px; display: none;">'+ 
'          <div class="spSelect-option selected" data-value="/wine-shop/red-wines?sortby=price_lh" data-index="0">Price, low to high</div>'+ 
'          <div class="spSelect-option" data-value="/wine-shop/red-wines?sortby=price_hl" data-index="1">Price, high to low'+ 
'          </div>'+ 
'          <div class="spSelect-option" data-value="/wine-shop/red-wines?sortby=name" data-index="2">Name, a to z</div>'+ 
'          <div class="spSelect-option" data-value="/wine-shop/red-wines?sortby=name_d" data-index="3">Name, z to a</div>'+ 
'          <div class="spSelect-option" data-value="/wine-shop/red-wines?sortby=variety" data-index="4">Variety, a to z'+ 
'          </div>'+ 
'      </div>'+ 
'  </div>'+ 
'  <div class="spSelect-container eg-category" tabindex="0">'+ 
'      <div class="spSelect-label">'+ 
'          <div class="spSelect-label-text">Price, low to high</div>'+ 
'          <div class="spIconSelect up">'+ 
'              <div class="i-angle-up"></div>'+ 
'          </div>'+ 
'          <div class="spIconSelect down">'+ 
'              <div class="i-angle-down"></div>'+ 
'          </div>'+ 
'      </div>'+ 
'      <div class="spSelect-options-container" style="max-height: 1000px; display: none;">'+ 
'          <div class="spSelect-option selected" data-value="/wine-shop/red-wines?sortby=price_lh" data-index="0">Price, low to high</div>'+ 
'          <div class="spSelect-option" data-value="/wine-shop/red-wines?sortby=price_hl" data-index="1">Price, high to low'+ 
'          </div>'+ 
'          <div class="spSelect-option" data-value="/wine-shop/red-wines?sortby=name" data-index="2">Name, a to z</div>'+ 
'          <div class="spSelect-option" data-value="/wine-shop/red-wines?sortby=name_d" data-index="3">Name, z to a</div>'+ 
'          <div class="spSelect-option" data-value="/wine-shop/red-wines?sortby=variety" data-index="4">Variety, a to z'+ 
'          </div>'+ 
'      </div>'+ 
'  </div>'+
    '       </div>'+ 
    '     </div>'+ 
    '  </div>'+ 
    '  <div class="eg-video-section">'+ 
'      <div class="eg-video-section-inr">'+ 
'      <div class="eg-video-container">'+ 
'          <iframe width="560" height="315" src="https://www.youtube.com/embed/1uORwFRa7Es" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'+ 
'      </div>'+ 
'      </div>'+ 
'  </div>'+ 
'  <div class="eg-subscription-section">'+ 
'      <div class="eg-subscription-inr">'+ 
'          <div class="eg-sub-left">'+ 
'              <h2 class="eg-sub-heading">Your subscription is So much more than just a box of wine</h2>'+ 
'              <p class="eg-sub-para">You do enough. So let us do the hard work for you.</p>'+ 
'          </div>'+ 
'          <div class="eg-sub-right">'+ 
'              <p class="eg-sub-heading">What’s in the box?</p>'+ 
'              <ul class="eg-sub-list">'+ 
'                  <li>Tasting notes with every delivery</li>'+ 
'                  <li>Exclusive Invitations to Member Events</li>'+ 
'                  <li>At least 20% of RRP on Dozens</li>'+ 
'                  <li>Award-winning Selector magazine</li>'+ 
'                  <li>Yearly Food and Wine Calendar</li>'+ 
'                  <li>Welcome Pack</li>'+ 
'                  <li>Member Discounts at wineries, restaurants and more</li>'+ 
'                  <li>100% flexibility and satisfaction guarantee</li>'+ 
'                  <li>Australian wine selected by expert Tasting Panel</li>'+ 
'              </ul>'+ 
'             <p class="expend-view">+ View more benefits </p>'+
'              <a href="#" class="eg-sub-link">Members benefits <svg xmlns="http://www.w3.org/2000/svg" width="8" height="10" viewBox="0 0 8 10" fill="none">'+
'<path d="M0.5 1L4.49997 4.99997L0.5 8.99993" stroke="#B00A2C"/>'+
'<path d="M3.08789 1L7.08786 4.99997L3.08789 8.99993" stroke="#B00A2C"/>'+
'</svg></a>'+ 
'          </div>'+ 
'      </div>'+ 
'  </div>'+ 
    '  <div class="eg-faq-section">'+ 
    '      <div class="eg-faq-inr">'+ 
    '          <div class="faq-set">'+ 
    '              <h2 style="text-align: center">Frequently Asked Questions</h2>'+ 
    '  '+ 
    '              <div class="accordion" data-allow-multiple="1">'+ 
    '  '+ 
    '                  <div class="item">'+ 
    '                      <div class="header">'+ 
    '                          <b>Q. What is a Customised Wine Subscription?</b>'+ 
    '                          <div class="icon-container">'+ 
    '                              <span class="icon up i-angle-up"></span>'+ 
    '                              <span class="icon down i-angle-down"></span>'+ 
    '                          </div>'+ 
    '                      </div>'+ 
    '                      <div class="copy" style="display: none;">'+ 
    '                          <div class="inner">'+ 
    '                              A.'+ 
    '                              <p>The Customised Wine Subscription is the ultimate wine plan in convenience with complete flexibility. This wine subscription is released at a schedule that suits you, and offers a huge range of styles and varieties. Tell us'+ 
    '                                  what varieties you love and we will select from our range of over 3,000 wines to present you with a unique tasting experience in every delivery. Plus, Wine Subscriptions come with exciting benefits including Tasting Notes,'+ 
    '                                  free copies of the award-winning Selector magazine, exclusive Member offers plus much more!</p>'+ 
    '  '+ 
    '                          </div>'+ 
    '                      </div>'+ 
    '                  </div>'+ 
    '  '+ 
    '                  <div class="item">'+ 
    '                      <div class="header">'+ 
    '                          <b>Q. What are the benefits?</b>'+ 
    '                          <div class="icon-container">'+ 
    '                              <span class="icon up i-angle-up"></span>'+ 
    '                              <span class="icon down i-angle-down"></span>'+ 
    '                          </div>'+ 
    '                      </div>'+ 
    '                      <div class="copy">'+ 
    '                          <div class="inner">'+ 
    '                              A.'+ 
    '                              <p>The Customised Wine Subscription is tailored to your preferred varieties, making sure that every delivery includes the wine varieties you love and enjoy. As member you will benefit of incredible savings with a minimum of 20%'+ 
    '                                  off bottle RRP. In addition to your wine you will also receive extensive tasting notes to learn more about the wines, wineries and mouth-watering food matches – and you will be able to access many other exciting <a href="http://www.wineselectors.com.au/wine-plans/member-benefits">Member Benefits</a>!</p>'+ 
    '  '+ 
    '                          </div>'+ 
    '                      </div>'+ 
    '                  </div>'+ 
    '  '+ 
    '                  <div class="item">'+ 
    '                      <div class="header">'+ 
    '                          <b>Q. What’s included in the membership?</b>'+ 
    '                          <div class="icon-container">'+ 
    '                              <span class="icon up i-angle-up"></span>'+ 
    '                              <span class="icon down i-angle-down"></span>'+ 
    '                          </div>'+ 
    '                      </div>'+ 
    '                      <div class="copy">'+ 
    '                          <div class="inner">'+ 
    '                              A.'+ 
    '                              <p>As a Member, you’ll receive up to six (6) free Selector Magazine copies in your wine deliveries and one (1) copy of our exclusive Food and Wine Matching Calendar each year. You will get exclusive access to many amazing deals'+ 
    '                                  across Australia and will be invited to meet great Australian winemakers, discover exciting new wines and dine out with celebrity chefs at our Member Events. All this for only $22 a year!</p>'+ 
    '  '+ 
    '                          </div>'+ 
    '                      </div>'+ 
    '                  </div>'+ 
    '  '+ 
    '                  <div class="item">'+ 
    '                      <div class="header">'+ 
    '                          <b>Q. What mix of wines will I receive?</b>'+ 
    '                          <div class="icon-container">'+ 
    '                              <span class="icon up i-angle-up"></span>'+ 
    '                              <span class="icon down i-angle-down"></span>'+ 
    '                          </div>'+ 
    '                      </div>'+ 
    '                      <div class="copy">'+ 
    '                          <div class="inner">'+ 
    '                              A.'+ 
    '                              <p>With a selection of over 3,000 wines of over 500 Australian wineries, we will present you with a unique tasting experience in every delivery. You will be enjoying a great diversity of wines and explore Australia’s most interesting'+ 
    '                                  wines of iconic regional cellar doors and fresh new talents in the wine making industry.</p>'+ 
    '  '+ 
    '                          </div>'+ 
    '                      </div>'+ 
    '                  </div>'+ 
    '  '+ 
    '                  <div class="item">'+ 
    '                      <div class="header">'+ 
    '                          <b>Q. Can I change the frequency of my delivery?</b>'+ 
    '                          <div class="icon-container">'+ 
    '                              <span class="icon up i-angle-up"></span>'+ 
    '                              <span class="icon down i-angle-down"></span>'+ 
    '                          </div>'+ 
    '                      </div>'+ 
    '                      <div class="copy">'+ 
    '                          <div class="inner">'+ 
    '                              A.'+ 
    '                              <p>The frequency of our Wine Subscriptions can be customised to suit your needs. You are also free to skip or hold a delivery at any time. To make a change to your customized delivery, give our Customer Service Team a call on'+ 
    '                                  1300 303 307, 9am–6pm, Monday to Friday.</p>'+ 
    '  '+ 
    '                          </div>'+ 
    '                      </div>'+ 
    '                  </div>'+ 
    '  '+ 
    '                  <div class="item">'+ 
    '                      <div class="header">'+ 
    '                          <b>Q. How do I change my wine style preferences?</b>'+ 
    '                          <div class="icon-container">'+ 
    '                              <span class="icon up i-angle-up"></span>'+ 
    '                              <span class="icon down i-angle-down"></span>'+ 
    '                          </div>'+ 
    '                      </div>'+ 
    '                      <div class="copy">'+ 
    '                          <div class="inner">'+ 
    '                              A.'+ 
    '                              <p>To change your varietal preference, give our Customer Service Team a call on 1300 303 307, 9am–6pm, Monday to Friday.</p>'+ 
    '  '+ 
    '                          </div>'+ 
    '                      </div>'+ 
    '                  </div>'+ 
    '  '+ 
    '                  <div class="item">'+ 
    '                      <div class="header">'+ 
    '                          <b>Q. Can I manage my Wine Subscriptions online?</b>'+ 
    '                          <div class="icon-container">'+ 
    '                              <span class="icon up i-angle-up"></span>'+ 
    '                              <span class="icon down i-angle-down"></span>'+ 
    '                          </div>'+ 
    '                      </div>'+ 
    '                      <div class="copy">'+ 
    '                          <div class="inner">'+ 
    '                              A.'+ 
    '                              <p>You can view your regular wine delivery program online. When you’re logged in to our website, you can see ‘My orders’ within the ‘My account’ section. If you haven’t set up an online account yet, register now. However, if you'+ 
    '                                  wish to change your varietal preference, or alter your contact details, please call our Customer Service Team on 1300 303 307. Please note, changing you wine preferences in your online account does NOT update your deliveries.</p>'+ 
    '  '+ 
    '                          </div>'+ 
    '                      </div>'+ 
    '                  </div>'+ 
    '  '+ 
    '                  <div class="item">'+ 
    '                      <div class="header">'+ 
    '                          <b>Q. How do I cancel my membership?</b>'+ 
    '                          <div class="icon-container">'+ 
    '                              <span class="icon up i-angle-up"></span>'+ 
    '                              <span class="icon down i-angle-down"></span>'+ 
    '                          </div>'+ 
    '                      </div>'+ 
    '                      <div class="copy">'+ 
    '                          <div class="inner">'+ 
    '                              A.'+ 
    '                              <p>Our Customised Wine Subscriptions are completely flexible. If you are unable to take a delivery, let us know at your earliest convenience. There is no financial catch if you decide to skip or stop your deliveries. To cease,'+ 
    '                                  make a change or customise your delivery, give our Customer Service Team a call on 1300 303 307, 9am–6pm, Monday to Friday.</p>'+ 
    '  '+ 
    '                          </div>'+ 
    '                      </div>'+ 
    '                  </div>'+ 
    '  '+ 
    '              </div>'+ 
    '  '+ 
    '  '+ 
    '          </div>'+ 
    '      </div>'+ 
    '  </div>'+
    '<div class="eg-form-section">'+
    '  <div class="eg-form-inr">'+
    '     <div class="eg-form-left">'+
    '       <img src="https://images.wineselectors.com.au/media/wineselectors/wineplan/makers1.jpg" alt="makers1">'+
    '     </div>'+
    '     <div class="eg-form-right">'+
    '     </div>'+
    '  </div>'+
    '</div>';



    var egHowitWorks =''+ 
    '  <div class="eg-how-it-work">'+ 
    '      <div class="eg-how-it-work-inr">'+ 
    '          <div class="eg-left-section">'+ 
    '              <img src="https://images.wineselectors.com.au/media/wineselectors/wineplan/makers1.jpg" alt="makers1">'+ 
    '          </div>'+ 
    '          <div class="eg-right-section">'+ 
    '              <h2>HOW DOES IT WORKS?</h2>'+ 
    '              <P>Our tasting panel handpicks wines from over 500 Australian wineries, and creates exclusive collections, delivered to your door with at least 20% off RRP on dozens. </P>'+ 
    '  '+ 
    '              <ol>'+ 
    '                  <li><b>Select your subscription</b> - from the popular Regional, the Top Shelf Chairman’s, or your own Customised creation, find your perfect case</li>'+ 
    '                  <li><b>Choose your delivery frequency</b> – and we’ll do the rest. You can always adjust to more or less later </li>'+ 
    '                  <li><b>Unbox your wines!</b> Discover the stories, the flavours and exclusive members benefits you now have access to, and enjoy!</li>'+ 
    '              </ol>'+ 
    '          </div>'+ 
    '      </div>'+ 
    '  </div>';


    // .wine-plans .plan-tiles .row .col.sparkling
    // .wine-plans .plan-tiles .row .col.entertainer
    // .wine-plans .plan-tiles .row .col.winemaker

    function init() {
      var html = `
        <div class="wine-filter">
        <h2 class="text-center eg-filter-heading">OUR MOST POPULAR COLLECTIONS</h2>
        <p class="text-center eg-filter-subheading">Tried and true, these subscriptions are sure to impress.</p>
        <div class="wine-first-row">
            <div class="wine-filter-heading">   
                <h4>Filter</h4>
            </div>
            <div class="wine-filter-collection">
                <select>
                    <option value="">Category</option>
                    <option value="most-popular-collections">Most Popular Collections</option>
                    <option value="regional-collections">Regional Collections</option>
                    <option value="organic-collections">Organic Collections</option>
                    <option value="celebratory-collections">Celebratory Collections</option>
                    <option value="varietal-collections">Varietal Collections</option>
                    <option value="connoisseur-collections">Connoisseur Collections</option>
                    <option value="customised-collection">Customised Collection</option>
                </select>
            </div>
            <div class="wine-filter-category">
                <select>
                    <option value="">Category</option>
                    <option value="red">Red</option>
                    <option value="white">White</option>
                    <option value="mixed">Mixed</option>
                </select>
            </div>
          </div>
          <div class="wine-second-row">
            <div class="wine-fitler-name wine-filter-collection-name"><span>Most Popular</span><button data-for="wine-filter-collection">X</button></div>
            <div class="wine-fitler-name wine-filter-category-name"><span>Red</span><button data-for="wine-filter-category">X</button></div>
            <button class="wine-filter-clear">Clear All Filter</button>
          </div>
        </div>
      `;

      document.querySelector('.new-banner + .wine-plans > .wrapper:first-child').insertAdjacentHTML('afterbegin', html);

      document.querySelector('.wine-second-row .wine-filter-clear').addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector('.wine-filter-collection select').value = '';
        document.querySelector('.wine-filter-category select').value = '';
      });

      document.querySelectorAll('.wine-fitler-name button').forEach(function (item, index) {
        item.addEventListener('click', function (e) {
          e.preventDefault();
          document.querySelector('.' + this.getAttribute('data-for') + ' select').value = '';
          var event = new Event('change');
          document.querySelector('.' + this.getAttribute('data-for') + ' select').dispatchEvent(event);
        });
      });

      document.querySelector('.wine-filter-collection select').addEventListener('change', function () {
        if (this.value.length > 0) {
          document.querySelector('.wine-second-row .wine-filter-collection-name').classList.add('show');
          document.querySelector('.wine-second-row .wine-filter-collection-name span').innerHTML = this.options[this.selectedIndex].text;
          var clsName = Array.prototype.slice.call(document.body.classList).filter(function (item) {
            return item.includes('wineCol-');
          });
          if (clsName.length != 0) {
            clsName && document.body.classList.remove(clsName);
          }
          document.body.classList.add('wineCol-' + this.value);
        } else {
          var clsName = Array.prototype.slice.call(document.body.classList).filter(function (item) {
            return item.includes('wineCol-');
          });
          document.body.classList.remove(clsName);
          document.querySelector('.wine-second-row .wine-filter-collection-name').classList.remove('show');
        }
      });

      document.querySelector('.wine-filter-category select').addEventListener('change', function () {
        if (this.value.length > 0) {
          document.querySelector('.wine-second-row .wine-filter-category-name').classList.add('show');
          document.querySelector('.wine-second-row .wine-filter-category-name span').innerHTML = this.options[this.selectedIndex].text;
          var clsName = Array.prototype.slice.call(document.body.classList).filter(function (item) {
            return item.includes('wine-');
          });
          if (clsName.length != 0) {
            document.body.classList.remove(clsName);
          }
          document.body.classList.add('wine-' + this.value);
        } else {
          var clsName = Array.prototype.slice.call(document.body.classList).filter(function (item) {
            return item.includes('wine-');
          });
          document.body.classList.remove(clsName);
          document.querySelector('.wine-second-row .wine-filter-category-name').classList.remove('show');
        }
      });

      document.querySelectorAll('.wine-plans .plan-tiles .row .col .front .product-info > p:first-child').forEach(function (item, index) {
        if (item.innerHTML.includes('Mixed')) {
          item.closest('.tile').classList.add('mixed');
        }
        if (item.innerHTML.includes('Reds')) {
          item.closest('.tile').classList.add('red');
        }
        if (item.innerHTML.includes('Whites')) {
          item.closest('.tile').classList.add('white');
        }
      });

      document.querySelectorAll('.wine-plans .plan-tiles .row .col.tile').forEach(function (item, index) {
        item.querySelector('.tile-icon').insertAdjacentHTML('beforebegin', '<img src="' + assests[index].img + '" alt=""/>');
        item.querySelector('.price-bar').insertAdjacentElement('beforebegin', item.querySelector('.product-info'));
        item.querySelector('.price-bar').insertAdjacentElement('beforebegin', item.querySelector('.description'));

        if (item.classList.contains('regional') || item.classList.contains('entertainer')) {
          item.classList.add('most-popular-collections');
        }
        if (
          item.classList.contains('regional') ||
          item.classList.contains('regionalplus') ||
          item.classList.contains('hunter') ||
          item.classList.contains('australia')
        ) {
          item.classList.add('regional-collections');
        }

        if (item.classList.contains('organic')) {
          item.classList.add('organic-collections');
        }

        if (item.classList.contains('entertainer') || item.classList.contains('sparkling')) {
          item.classList.add('celebratory-collections');
        }

        if (item.classList.contains('varietal')) {
          item.classList.add('varietal-collections');
        }

        if (item.classList.contains('winemaker')) {
          item.classList.add('connoisseur-collections');
        }

        // WRITE CODE HERE TO MAKE THE ELEMENT
        document.querySelector('.wine-plans .regDiscoveries .plan-tiles > .row').insertAdjacentElement('beforeend', item);
      });

      document.querySelector('.wine-filter-collection select').value = 'most-popular-collections';
      var event = new Event('change');
      document.querySelector('.wine-filter-collection select').dispatchEvent(event);
    }
    function init2() {


      document.querySelector('article > .wrapper').insertAdjacentHTML('beforebegin', egHero);
          document.querySelector('article .new-banner').insertAdjacentHTML('beforebegin', egHowitWorks);
    
          document.querySelector('article .wine-plans').insertAdjacentHTML('afterend', egVideoSection);
    
    
          document.querySelector('.eg-form-section .eg-form-right').insertAdjacentElement('beforeend', document.querySelector('.wine-plans > .wrapper:last-child'));
    
          document.querySelector('.eg-subscription-section .expend-view').addEventListener('click', function(){
            document.querySelector('.eg-subscription-inr .eg-sub-list').classList.add('eg-active');
          })
    
      }
    /* Initialise variation */
    waitForElement('.wine-plans .plan-tiles .row .col .front .product-info > p:first-child', init, 100, 15000);

    waitForElement('article .wine-plans', init2, 100, 15000);
  } catch (e) {
    if (debug) console.log(e, 'error in Test' + variation_name);
  }
})();
