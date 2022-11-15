
 (function () {
	"use strict";

	if (typeof unsafeWindow !== "undefined") window = unsafeWindow;

	var tag = "cv-14-2",
		debug = document.cookie.indexOf("cfQA") > -1;

	window[tag] = {
		log: function (msg) {
			if (debug) console.log("[CONV]", tag, "-->", msg);
		},

		waitForElement: function (cssSelector, callback) {
			var elementCached,
				maxCalls = 500,
				interval = setInterval(function () {
					elementCached = document.querySelector(cssSelector);

					if (elementCached) {
						clearInterval(interval);

						try {
							callback(elementCached);
						} catch (err) {
							window[tag].log(err.message);
						}
					}

					if (--maxCalls < 0) {
						clearInterval(interval);
						window[tag].log(cssSelector + " not found");
					}
				}, 20);
		},

		init: function () {
			try {
				this.waitForElement("body", function (docBody) {
					docBody.classList.add(tag);
				});

				if (debug && document.title.indexOf("CONV QA") < 0) {
					document.title = "[CONV QA] " + document.title;
				}

				initVariation();

				window[tag].log("test running");
			} catch (err) {
				window[tag].log(err.message);
			}
		},
	};

	window[tag].init();

	function initVariation() {
		window[tag].waitForElement('.component-fluid-tabs [data-tab-content-id="tab-pricing-2"] .optimize-variant--business--original div:nth-child(2) .component-pricing-card >.component-pricing-card__feature-list >.component-list >li:last-child',function(ele){
            var toggleLink = document.querySelector('.component-fluid-tabs [data-tab-content-id="tab-pricing-2"] .optimize-variant--business--original div:nth-child(2) .component-pricing-card >.component-pricing-card__feature-list >.component-list >li:last-child');

            toggleLink.childNodes[0].remove();
      
            document.querySelector('.component-fluid-tabs [data-tab-content-id="tab-pricing-2"] .optimize-variant--business--original div:nth-child(2) .component-pricing-card >.component-pricing-card__feature-list >.component-list >li:last-child > ul').insertAdjacentHTML('beforebegin', '<p class="cv-uny-14-heading">Custom options available</p>');
      
            // toggleLink.classList.add('cv-uny-14-active');
      
            document.querySelector('.cv-uny-14-heading').addEventListener('click', function(){
              this.classList.toggle('cv-uny-14-active');
            })
        });
        window[tag].waitForElement('div[data-tab-content-id="tab-pricing-2"] .cv-all-bullets > .component-list:not(.cv-plus-bullets) > li:last-child',function(ele){
   
            var toggleLink = document.querySelector('div[data-tab-content-id="tab-pricing-2"] .cv-all-bullets > .component-list:not(.cv-plus-bullets) > li:last-child');

            toggleLink.childNodes[0].remove();
          
            document.querySelector('div[data-tab-content-id="tab-pricing-2"] .cv-all-bullets > .component-list:not(.cv-plus-bullets) > li:last-child > ul').insertAdjacentHTML('beforebegin', '<p class="cv-uny-14-heading">Custom options available</p>');
          
            document.querySelector('.cv-uny-14-heading').addEventListener('click', function(){
              this.classList.toggle('cv-uny-14-active');
            });
  });
        
	}
})();