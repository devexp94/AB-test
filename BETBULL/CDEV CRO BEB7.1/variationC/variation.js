(function () {
	"use strict";

	if (typeof unsafeWindow !== "undefined") window = unsafeWindow;

	var id = "7-1",
		type = "variation",
		tag = "cv-" + id,
		debug = document.cookie.indexOf("cfQA") > -1,
		savedPage = window.location.pathname,
		targetPages = ["/casino/","/casino_a_slots_agst/","/casino_ps_slots_agst/","/casino_c_slots_agst/","/casino_c_slots_slid/"];

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
				}, 100);
		},

		init: function () {
			try {
				this.waitForElement("body", function (docBody) {
					docBody.classList.add(tag);
				});

				if (debug && document.title.indexOf("CONV QA") < 0) {
					document.title = "[CONV QA] " + document.title;
				}
        this.waitForElement(".cv-beb-2-2_banner-games", function (docBody) {
					initVariation();
				});
				
				this.initHotjar();

				window[tag].log("variation running");
			} catch (err) {
				window[tag].log(err.message);
			}
		},

		initHotjar: function () {
			try {
				var hjLabel = "CONV_" + id + "_" + type,
					maxCalls = 10,
					waitForHj = setInterval(function () {
						if (typeof window.hj === "function") {
							clearInterval(waitForHj);

							hj("trigger", hjLabel);
							hj("tagRecording", [hjLabel]);

							window[tag].log("Hotjar initialised: " + hjLabel);
						}

						if (--maxCalls < 0) {
							clearInterval(waitForHj);

							window[tag].log("Hotjar failed to load");
						}
					}, 500);
			} catch (err) {
				window[tag].log(err);
			}
		},
	};

	// Run the test code on the first page visit
	window[tag].init();

	// Run the test code each time the user navigates back to a target page
	var checkDataLayer = setInterval(function () {
		if (typeof window.dataLayer !== "undefined" && typeof window.dataLayer.push !== "undefined") {
			clearInterval(checkDataLayer);

			// Intercept GTM events
			var getPushData = window.dataLayer.push;
			window.dataLayer.push = function (data) {
				getPushData.apply(this, arguments);

				if (!data.event) return;

				if (data.event === "gtm.historyChange" && data["gtm.newUrl"]) {
					if (savedPage !== window.location.pathname) {
						savedPage = window.location.pathname;

						var isTargetPage = targetPages.indexOf(savedPage) > -1;

						if (isTargetPage) {
							window[tag].init();
						}
					}
				}
			};
		}
	});

	function initVariation() {
		var pageName = window.location.pathname,
			idElem = '',
			spaceBar = '',
			spaceBar2 = '',
			displayFix = null,
			posInitial = null,
			elemInitial = '',
			fixFlicker = [],
			fixLandscape = [],
			pushDownElems = [];

		if(pageName.indexOf('/casino_a_slots_agst/') > -1){
			spaceBar = '';
			spaceBar2 = '<div class="cv-beb-7-1_banner-space"></div>';
			idElem = '#lp-pom-block-569';
			pushDownElems = ['#lp-pom-text-682','#lp-pom-text-609','#lp-pom-text-683','#lp-pom-text-613','#lp-pom-text-684','#lp-pom-text-685','#lp-pom-text-453','#lp-pom-image-721','#lp-pom-image-723','#lp-pom-image-724','#lp-pom-image-725','#lp-pom-text-727','#lp-pom-text-728','#lp-pom-text-729','#lp-pom-text-730','#lp-pom-text-731','#lp-pom-text-732','#lp-pom-text-733','#lp-pom-text-734','#lp-pom-text-622','#lp-pom-text-484','#lp-pom-image-736','#lp-pom-image-737','#lp-pom-image-738','#lp-pom-image-739','#lp-pom-image-740'];
			fixFlicker = ['.lp-positioned-content','#lp-pom-text-682','#lp-pom-text-609','#lp-pom-text-683','#lp-pom-text-613'];
			fixLandscape = ['#lp-pom-text-609'];
			if(window.innerWidth > 600){
				removeFlicker(fixFlicker,"none");
				window[tag].log("Flicker none");
			}
			addBanner(idElem,pushDownElems,spaceBar,spaceBar2,fixFlicker,displayFix,posInitial,elemInitial,fixLandscape);
		} else if(pageName.indexOf('/casino/') > -1){
			spaceBar = '<div class="cv-beb-7-1_banner-space"></div>';
			spaceBar2 = ''; //<div class="cv-beb-7-1_banner-space"></div>
			idElem = '#lp-pom-block-761';
			pushDownElems = ['#lp-pom-image-717','#lp-pom-text-718','#lp-pom-image-668','#lp-pom-image-670','#lp-pom-image-671','#lp-pom-image-673','#lp-pom-image-674','#lp-pom-text-741','#lp-pom-image-677','#lp-pom-image-678','#lp-pom-image-676','#lp-pom-image-679','#lp-pom-image-680','#lp-pom-image-681','#lp-pom-text-682','#lp-pom-text-609','#lp-pom-text-683','#lp-pom-text-613','#lp-pom-text-684','#lp-pom-text-685','#lp-pom-text-453','#lp-pom-image-725','#lp-pom-image-721','#lp-pom-image-723','#lp-pom-image-724','#lp-pom-text-727','#lp-pom-text-728','#lp-pom-text-729','#lp-pom-text-730','#lp-pom-text-731','#lp-pom-text-732','#lp-pom-text-733','#lp-pom-text-734','#lp-pom-text-714','#lp-pom-image-696','#lp-pom-image-697','#lp-pom-image-698','#lp-pom-text-622','#lp-pom-text-484','#lp-pom-image-736','#lp-pom-image-738','#lp-pom-image-739','#lp-pom-image-740'];
			fixFlicker = ['.lp-positioned-content','#lp-pom-text-741','#lp-pom-text-718','#lp-pom-image-668', '#lp-pom-image-670', '#lp-pom-image-717','#lp-pom-image-671','#lp-pom-image-674','#lp-pom-image-673'];
			displayFix = "inline-block";
			posInitial = "initial";
			elemInitial = "#lp-pom-block-552";
			if(window.innerWidth > 600){
				removeFlicker(fixFlicker,"none");
				window[tag].log("Flicker none");
			}
			addBanner(idElem,pushDownElems,spaceBar,spaceBar2,fixFlicker,displayFix,posInitial,elemInitial,fixLandscape);
		} else if(pageName.indexOf('/casino_ps_slots_agst/') > -1){
			spaceBar = '<div class="cv-beb-7-1_banner-space"></div>';
			spaceBar2 = '';//<div class="cv-beb-7-1_banner-space"></div>
			idElem = '#lp-pom-block-761';
			pushDownElems = ['#lp-pom-image-717','#lp-pom-text-718','#lp-pom-image-668','#lp-pom-image-670','#lp-pom-image-671','#lp-pom-image-673','#lp-pom-image-674','#lp-pom-text-741','#lp-pom-image-677','#lp-pom-image-678','#lp-pom-image-676','#lp-pom-image-679','#lp-pom-image-680','#lp-pom-image-681','#lp-pom-text-682','#lp-pom-text-609','#lp-pom-text-683','#lp-pom-text-613','#lp-pom-text-684','#lp-pom-text-685','#lp-pom-text-453','#lp-pom-image-725','#lp-pom-image-721','#lp-pom-image-723','#lp-pom-image-724','#lp-pom-text-727','#lp-pom-text-728','#lp-pom-text-729','#lp-pom-text-730','#lp-pom-text-731','#lp-pom-text-732','#lp-pom-text-733','#lp-pom-text-734','#lp-pom-text-714','#lp-pom-image-696','#lp-pom-image-697','#lp-pom-image-698','#lp-pom-text-622','#lp-pom-text-484','#lp-pom-image-736','#lp-pom-image-738','#lp-pom-image-739','#lp-pom-image-740'];
			fixLandscape = ['#lp-pom-text-609'];
			fixFlicker = ['.lp-positioned-content','#lp-pom-text-682','#lp-pom-text-609'];
			if(window.innerWidth > 600){
				removeFlicker(fixFlicker,"none");
				window[tag].log("Flicker none");
			}
			addBanner(idElem,pushDownElems,spaceBar,spaceBar2,fixFlicker,displayFix,posInitial,elemInitial,fixLandscape);
		} else if(pageName.indexOf('/casino_c_slots_agst/') > -1){
			spaceBar = '<div class="cv-beb-7-1_banner-space"></div>';
			spaceBar2 = '';
			idElem = '#lp-pom-block-761';
			pushDownElems = ['#lp-pom-image-804','#lp-pom-image-805','#lp-pom-image-806','#lp-pom-image-807','#lp-pom-image-809','#lp-pom-image-810','#lp-pom-image-811','#lp-pom-text-813','#lp-pom-image-817','#lp-pom-image-818','#lp-pom-image-823','#lp-pom-image-824','#lp-pom-image-825','#lp-pom-text-682','#lp-pom-text-609','#lp-pom-text-683','#lp-pom-text-613','#lp-pom-text-684','#lp-pom-text-685','#lp-pom-text-453','#lp-pom-image-721','#lp-pom-image-723','#lp-pom-image-724','#lp-pom-image-725','#lp-pom-text-727','#lp-pom-text-728','#lp-pom-text-729','#lp-pom-text-730','#lp-pom-text-731','#lp-pom-text-732','#lp-pom-text-733','#lp-pom-text-734','#lp-pom-text-807','#lp-pom-image-816','#lp-pom-text-812','#lp-pom-image-819','#lp-pom-image-827','#lp-pom-image-826','#lp-pom-text-622','#lp-pom-text-484','#lp-pom-image-736','#lp-pom-image-738','#lp-pom-image-739','#lp-pom-image-740'];
			fixFlicker = ['.lp-positioned-content','#lp-pom-text-807','#lp-pom-image-804','#lp-pom-image-805','#lp-pom-image-806'];
			if(window.innerWidth > 600){
				removeFlicker(fixFlicker,"none");
				window[tag].log("Flicker none");
			}
			addBanner(idElem,pushDownElems,spaceBar,spaceBar2,fixFlicker,displayFix,posInitial,elemInitial,fixLandscape);
		} else if(pageName.indexOf('/casino_c_slots_slid/') > -1){
			spaceBar = '<div class="cv-beb-7-1_banner-space"></div>';
			spaceBar2 = ''; //<div class="cv-beb-7-1_banner-space"></div>
			idElem = '#lp-pom-block-761';
			pushDownElems = ['#lp-pom-image-668','#lp-pom-image-670','#lp-pom-image-717','#lp-pom-text-718','#lp-pom-image-671','#lp-pom-image-673','#lp-pom-image-674','#lp-pom-text-741','#lp-pom-image-677','#lp-pom-image-678','#lp-pom-image-676','#lp-pom-image-680','#lp-pom-image-681','#lp-pom-image-679','#lp-pom-text-682','#lp-pom-text-609','#lp-pom-text-683','#lp-pom-text-613','#lp-pom-text-684','#lp-pom-text-685','#lp-pom-text-453','#lp-pom-image-725','#lp-pom-image-721','#lp-pom-image-723','#lp-pom-image-724','#lp-pom-text-727','#lp-pom-text-728','#lp-pom-text-729','#lp-pom-text-730','#lp-pom-text-731','#lp-pom-text-732','#lp-pom-text-733','#lp-pom-text-734','#lp-pom-text-714','#lp-pom-image-696','#lp-pom-image-697','#lp-pom-image-698','#lp-pom-text-622','#lp-pom-image-736','#lp-pom-image-738','#lp-pom-image-739','#lp-pom-image-740','#lp-pom-text-484'];
			fixFlicker = ['.lp-positioned-content','#lp-pom-image-668','#lp-pom-image-670','#lp-pom-image-717','#lp-pom-text-718'];
			posInitial = "initial";
			elemInitial = "#lp-pom-block-552";
			if(window.innerWidth > 600){
				removeFlicker(fixFlicker,"none");
				window[tag].log("Flicker none");
			}
			addBanner(idElem,pushDownElems,spaceBar,spaceBar2,fixFlicker,displayFix,posInitial,elemInitial,fixLandscape);
		}
	}

	function addBanner(idElem,pushDownElems,spaceBar,spaceBar2,fixFlicker,displayFix,posInitial,elemInitial,fixLandscape){
		window[tag].waitForElement(idElem, function (stepSection) {
			var isBanner = document.querySelector('.cv-beb-7-1_banner-games');
			if (!isBanner){
				 var copyImg = 'https://cfactory-img.s3.amazonaws.com/BEB/7-1/desktop-copy-beb-7-1.svg';
				var newBanner = spaceBar;
				var banner2 = spaceBar2;
				newBanner += '<div class="cv-beb-7-1_banner-pc">'+
				'  <div class="cv-beb-7-1-banner">'+ 
				'      <div class="cv-beb-7-1-banner-inr">'+ 
				'          <img class="cv-beb-7-1-img-desktop" src="https://cfactory-img.s3.amazonaws.com/BEB/7-1/backgroundSmall.jpg">'+ 
				'          <img class="cv-beb-7-1-img-mobile" src="https://cfactory-img.s3.amazonaws.com/BEB/7-1/beb-7-1-mob-back.png">'+ 
				'          <div class="cv-beb-7-1-banner-left-srction">'+ 
				'              <div class="cv-beb-7-1-text">'+ 
				'                  <img class="cv-beb-7-1-desktop-text" src="'+copyImg+'">'+ 
				'				   <div class="cv-beb-7-1-mobile-text">'+
				'                  <img src="https://cfactory-img.s3.amazonaws.com/BEB/7-1/Framemobtxt.svg">'+ 
				'                  <img src="https://cfactory-img.s3.amazonaws.com/BEB/7-1/thats_right.svg">'+ 
				'				   </div>'+
				'              </div>'+ 
				'          </div>'+ 
				'      </div>'+ 
				'  </div>'+banner2+
				'</div>';
				// ADD ELEMENT
				addElement('div','cv-beb-7-1_banner-games',newBanner,'afterend',stepSection);

				// MOVE OTHER BANNERS
				window[tag].waitForElement('.cv-beb-7-1_banner-games', function (newBanner) {
					// Fix CSS
					if(spaceBar2.length > 0){
						addElement('div','cv-beb-7-1_banner-space','','afterend',newBanner);
					}
					if(posInitial && elemInitial.length > 0){
						document.querySelector(elemInitial).style.position = posInitial;
					}
					var newBannerOffset = 0;
					var isSegmented = false;
					var isLandscape = false;
					var isFlicker = false;
					var checkOffset = setInterval(function () {
						var newBannerNewOffset = newBanner.offsetHeight + (document.querySelector('.cv-beb-2-2_banner-games').offsetHeight);
						// move other banners if screen is resized
						if(newBannerOffset !== newBannerNewOffset){
							newBannerOffset = newBannerNewOffset;
							moveBanners(newBannerOffset,pushDownElems);
							window[tag].log("Banners pushed down");
						}
						// on mobile force image to change
						if(window.innerWidth <= 600){
							if(displayFix){
								newBanner.style.display = displayFix;
							}
							// Fix landscape issue
							if(fixLandscape.length > 0 && isLandscape){
								isLandscape = false;
								removeFlicker(fixLandscape,"none");
								window[tag].log("Landscape none");
							}
						} else if(window.innerWidth > 600){
							if(!isFlicker && newBannerNewOffset >= 330 && fixFlicker){
								setTimeout(function(){ removeFlicker(fixFlicker,"block"); }, 100);
								isFlicker = true;
								window[tag].log("Flicker block");
							}
							if(displayFix){
								newBanner.style.display = "";
							}
							// Fix landscape issue
							if(fixLandscape.length > 0 && !isLandscape){
								isLandscape = true;
								removeFlicker(fixLandscape,"");
								window[tag].log("Landscape null");
							}
						}
					});
				});
			}
		});
	}

	function removeFlicker(fixFlicker,cssDisplay){
		for(var j=0;j<fixFlicker.length;j++){
			if(document.querySelector(fixFlicker[j])){
				document.querySelector(fixFlicker[j]).style.display = cssDisplay;
			}
		}
	}

	function moveBanners(newBannerOffset,pushDownElems){
		for (var i=0; i < pushDownElems.length; i++){
			window[tag].waitForElement(pushDownElems[i], function (bannerElem) {
				if(bannerElem){
					bannerElem.style.marginTop = String(newBannerOffset) + 'px';
				}
			});
		}
	}

	function addElement(type,className,html,location,target){
		var newBanner = document.createElement(type);
		newBanner.classList.add(className);
		newBanner.innerHTML = html;
		target.insertAdjacentElement(location, newBanner);
	}

	function segmentUserOpt(attr, value) {
		var segObj = {
			type: "user",
			attributes: {},
		};
	
		segObj.attributes[attr] = value;
		window.optimizely.push(segObj);
		window[tag].log("user segmented: " + attr + " = " + value);
	}
})();