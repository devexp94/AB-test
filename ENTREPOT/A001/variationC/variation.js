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
        function waitForjQuery(trigger, delayInterval, delayTimeout) {
            var interval = setInterval(function () {
                if (
                    window.jQuery != undefined
                ) {
                    clearInterval(interval);
                    trigger();
                }
            }, delayInterval);
            setTimeout(function () {
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



        function getCookie(name) {
            var nameEQ = name + "=";
            var ca = document.cookie.split(';');
            for (var i = 0; i < ca.length; i++) {
                var c = ca[i];
                while (c.charAt(0) == ' ') c = c.substring(1, c.length);
                if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
            }
            return null;
        }

        function setCookie(name, value, days) {
            var expires = "";
            if (days) {
                var date = new Date();
                date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
                expires = "; expires=" + date.toUTCString();
            }
            document.cookie = name + "=" + (value || "") + expires + "; path=/";
        }

        var egToster = '' +
            '  <div class="eg-popup">' +
            '  <div class="eg-popup-overlay"></div>' +
            '  <div class="eg-toster">' +
            '      <div class="eg-toster-content">' +
            '        <div class="eg-header-content">' +
            '          <h2 class="eg-toster-heading">En promotion cette semaine</h2>' +
            '          <span class="eg-toster-cross">×</span>' +
            '         </div>' +
            '          <div class="eg-cart-content">' +
            '              <div class="eg-cart-content-inr">' +
            '              </div>' +
            '          </div>' +
            '         <a href="https://www.entrepot-du-bricolage.fr/promotions/selection" class="eg-link">Voir les offres du moment</a>' +
            '      </div>' +
            '      </div>' +
            '  </div>';

        var arrow = '' +
            '  <svg data-v-768495be="" viewBox="0 0 7 9" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"><path fill-rule="evenodd" clip-rule="evenodd" d="M6.13 3.87L2.592.526a.725.725 0 00-.495-.195.712.712 0 00-.489.195l-.407.385a.628.628 0 00-.207.462c0 .174.076.344.207.462l2.462 2.496L1.2 6.822a.647.647 0 00-.207.467c0 .175.076.344.207.467l.407.386a.732.732 0 00.984 0L6.13 4.799a.642.642 0 00.201-.467.622.622 0 00-.201-.463z"></path></svg>';

        var offset;

        function createSession() {
            if (getCookie('BlankCart') == null) {
                setCookie('BlankCart', '1', 365);
            }
        }

        function init() {

            document.querySelector('body').insertAdjacentHTML('beforeend', egToster);

            document.querySelector('.eg-toster-cross').addEventListener('click', function () {
                createSession();
                document.querySelector('body').classList.remove('eg-top-toster');
            });

            document.querySelector('.eg-popup-overlay').addEventListener('click', function () {
                createSession();
                document.querySelector('body').classList.remove('eg-top-toster');
            });

            addProduct();
            //add mouseout event 
            document.addEventListener("mouseout", function (e) {
                if (e.toElement == null && e.relatedTarget == null) {
                    if (getCookie('BlankCart') == null && document.querySelector('.eg-cart-content-inr .product-item.slick-slide')) {
                        document.querySelector('body').classList.add("eg-top-toster");
                        //create session 
                        window.dispatchEvent(new Event('resize'));
                        window.jQuery('.eg-cart-content-inr').slick('slickGoTo', 0);
                    }
                }
            });

if(window.screen.width < 1024)
{ 
    // listen to "scroll" event
    window.onscroll = function(){
      if (checkScrollSpeed() > 100 && getCookie('BlankCart') == null && document.querySelector('.eg-cart-content-inr .product-item.slick-slide')) {
        console.log( checkScrollSpeed() );
        document.querySelector('body').classList.add("eg-top-toster");
        //create session 
        window.dispatchEvent(new Event('resize'));
        window.jQuery('.eg-cart-content-inr').slick('slickGoTo', 0);
    }
     
    };
}

        }
        function addProduct() {
            var xhttp = new XMLHttpRequest();
            xhttp.onreadystatechange = function () {
                if (this.readyState == 4 && this.status == 200) {
                    var el = document.createElement('div');
                    el.innerHTML = this.responseText;
                    appendItem(el)
                }
            };
            xhttp.open("GET", "https://www.entrepot-du-bricolage.fr/", true);
            xhttp.send();
        }
        function appendItem(el) {
            var item = '';
            var productImg = el.querySelectorAll('.o-product-list-content .o-product-list-item .m-product-item-thumbnail img');
            var productDetail = el.querySelectorAll('.o-product-list-content .o-product-list-item .m-product-item-description');
            //var brandImg = el.querySelectorAll('.o-product-list-content .o-product-list-item .m-product-description-brand img');
            for (var i = 0; i < 4; i++) {
                item += '<div class="product-item"><div class="product-item-inr"><div class="product-item-img"><img src="' + productImg[i].getAttribute('data-src') + '"></div>' + productDetail[i].innerHTML + '</div></div>';
            }
            document.querySelector('.eg-cart-content-inr').innerHTML = item;
            var brandImg = document.querySelectorAll('.o-product-list-content .o-product-list-item .m-product-description-brand img');
            for (var j = 0; j < brandImg.length; j++) {
                var src = brandImg[j].getAttribute('data-src');
                brandImg[j].setAttribute('src',src);
            }
            initSlick();


        }
        function initSlick() {
            waitForSlick(function () {
                var $ = window.jQuery;
                $('.eg-cart-content-inr').slick({
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    arrows: true,
                    dots: false,
                    responsive: [
                        {
                            breakpoint: 767,
                            settings: {
                                slidesToShow: 1,
                                slidesToScroll: 1
                            }
                        }
                    ]
                });
                window.dispatchEvent(new Event('resize'));
                $('.eg-cart-content-inr').slick('slickGoTo', 0);
            }, 50, 10000);
        }

        function init2() {
            document.querySelector('.eg-cart-content-inr > button.slick-prev').innerHTML = arrow;
            document.querySelector('.eg-cart-content-inr > button.slick-next').innerHTML = arrow;

        }
        var checkScrollSpeed = (function(settings){
            settings = settings || {};
        
            var lastPos, newPos, timer, delta, 
                delay = settings.delay || 50; // in "ms" (higher means lower fidelity )
        
            function clear() {
              lastPos = null;
              delta = 0;
            }
        
            clear();
        
            return function(){
              newPos = window.scrollY;
              if ( lastPos != null ){ // && newPos < maxScroll 
                delta = newPos -  lastPos;
              }
              lastPos = newPos;
              clearTimeout(timer);
              timer = setTimeout(clear, delay);
              return delta;
            };
        })();
        

        if (!getCookie('BlankCart')) {
            waitForElement("body", init, 50, 15000);
            waitForElement(".eg-cart-content-inr > button.slick-next", init2, 50, 15000);
            waitForjQuery(addSlickScript, 50, 10000);
        }

    } catch (e) {
        if (debug) console.log(e, "error in Test" + variation_name);
    }
})();