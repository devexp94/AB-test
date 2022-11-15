(function () {
	"use strict";

	if (typeof unsafeWindow !== "undefined") window = unsafeWindow;

	var id = "8-1",
		type = "variation",
		tag = "cv-" + id,
		debug = document.cookie.indexOf("cfQA") > -1,
		savedPage = window.location.pathname,
		targetPages = ["/sport_a_mixeda_gale/", "/sport_a_mixed_fbec/", "/sport_a_oc_fbec/", "/sport_a_mixed_sepg/", "/sport_c_footballbfgf_gale/", "/sport_c_footballqs_gale/", "/sport_c_mixed_sepg/", "/sport_c_mixed_fbec/", "/sport_c_brand_coak/", "/sport_ps_mixed_sepg/", "/sport_ps_mixed_yfce/", "/bet-with-bulls-2/", "/sport_b_branding_coak/"];

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
				this.waitForElement("#lp-pom-block-924, #lp-pom-block-371, #lp-pom-block-928, #lp-pom-block-897, #lp-pom-block-949, #lp-pom-block-894, #lp-pom-block-943", function (docBody) {
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

	function addBanner(pushDownElems, removeElems, topOffset, pushMenuBelowElems) {
		var classObj = {
			'/sport_a_mixeda_gale/': ['cv-beb-8-1-sport-a-mixeda-gale', '#lp-pom-block-371', 'https://cfactory-img.s3.amazonaws.com/BEB/8-1/Copy.svg', 'DEPOSIT & BET </br> £20-£50', 'GET UP TO £50 IN FREE BETS </br> + 100% IN ODDS BOOSTS'],
			'/sport_a_mixed_fbec/': ['cv-beb-8-1-sport-a-mixed-fbec', '#lp-pom-block-371', 'https://cfactory-img.s3.amazonaws.com/BEB/8-1/copy30.svg', 'DEPOSIT & </br> BET £10', 'GET £30 </br> IN FREE BETS'],
			'/sport_a_oc_fbec/': ['cv-beb-8-1-sport-a-oc-fbec', '#lp-pom-block-928', 'https://cfactory-img.s3.amazonaws.com/BEB/8-1/copy30.svg', 'DEPOSIT & </br> BET £10', 'GET £30 </br> IN FREE BETS'],
			'/sport_a_mixed_sepg/': ['cv-beb-8-1-sport-a-mixed-sepg', '#lp-pom-block-371', 'https://cfactory-img.s3.amazonaws.com/BEB/8-1/copy100.svg', 'DEPOSIT & BET </br> £10 - £100', 'GET UP TO £100 IN FREE BETS </br> + 100% IN ODDS BOOSTS'],
			'/sport_c_footballbfgf_gale/': ['cv-beb-8-1-sport-c-footballbfgf-gale', '#lp-pom-block-371', 'https://cfactory-img.s3.amazonaws.com/BEB/8-1/Copy.svg', 'DEPOSIT & BET </br> £10 - £50', 'GET UP TO £50 IN FREE BETS </br> + 100% IN ODDS BOOSTS'],
			'/sport_c_footballqs_gale/': ['cv-beb-8-1-sport-c-footballqs-coak', '#lp-pom-block-949', 'https://cfactory-img.s3.amazonaws.com/BEB/8-1/Copy.svg', 'DEPOSIT & BET </br> £10 - £50', 'GET UP TO £50 IN FREE BETS </br> + 100% IN ODDS BOOSTS'],
			'/sport_c_brand_coak/': ['cv-beb-8-1-sport-c-brand-coak', '#lp-pom-block-897', 'https://cfactory-img.s3.amazonaws.com/BEB/8-1/Copy.svg', 'DEPOSIT & BET </br> £10 - £50', 'GET UP TO £50 IN FREE BETS </br> + 100% IN ODDS BOOSTS'],
			'/sport_ps_mixed_sepg/': ['cv-beb-8-1-sport-ps-mixed-sepg', '#lp-pom-block-371', 'https://cfactory-img.s3.amazonaws.com/BEB/8-1/copy100.svg', 'DEPOSIT & BET </br> £10 - £100', 'GET UP TO £100 IN FREE BETS </br> + 100% IN ODDS BOOSTS'],
			'/sport_ps_mixed_yfce/': ['cv-beb-8-1-sport-ps-mixed-yfce', '#lp-pom-block-894', 'https://cfactory-img.s3.amazonaws.com/BEB/8-1/Copy.svg', 'DEPOSIT & BET </br> £10 - £50', 'GET UP TO £50 IN FREE BETS </br> + 100% IN ODDS BOOSTS'],
			'/bet-with-bulls-2/': ['cv-beb-8-1-bet-with-bulls-2', '#lp-pom-block-943', 'https://cfactory-img.s3.amazonaws.com/BEB/8-1/Copy.svg', 'DEPOSIT & BET </br> £10 - £50', 'GET UP TO £50 IN FREE BETS </br> + 100% IN ODDS BOOSTS'],
			'/sport_b_branding_coak/': ['cv-beb-8-1-sport-b-branding-coak', '#lp-pom-block-894', 'https://cfactory-img.s3.amazonaws.com/BEB/8-1/Copy.svg', 'DEPOSIT & BET </br> £10 - £50', 'GET UP TO £50 IN FREE BETS </br> + 100% IN ODDS BOOSTS']
		};
		var selectorData = classObj[window.location.pathname];
		document.body.classList.add(selectorData[0]);
		var cvPlayerImages = '' +
			'<div class="cv-beb-8-1-hero-banner">' +
			'<div class="lp-pom-block-content">' +
			'<span class="cv-beb-8-1-term">Min Deposit £20 <br>+ Bet on sports <br> Full T&amp;Cs Apply</span>' +
			'<div class="cv-beb-8-1-text-top"><a href="https://lp.betbull.com/sport_a_mixeda_gale/clkg/https/betbull.sng.link/A4gbg/rxx4?amp;_ios_dl=betbull%3A%2F%2Fbetbull%3Fgroup%3DDEFAULT&amp;_android_dl=betbull%3A%2F%2Fwelcome_offer%3Fgroup%3DDEFAULT&amp;_forward_params=true" target="_self" data-params="true"><img src="' + selectorData[2] + '"></a>' +
			'<a class="cv-beb-8-1-button" href="https://lp.betbull.com/sport_a_mixeda_gale/clkg/https/betbull.sng.link/A4gbg/rxx4?amp;_ios_dl=betbull%3A%2F%2Fbetbull%3Fgroup%3DDEFAULT&amp;_android_dl=betbull%3A%2F%2Fwelcome_offer%3Fgroup%3DDEFAULT&amp;_forward_params=true" target="_self" data-params="true"><img src="//d9hhrg4mnvzow.cloudfront.net/lp.betbull.com/casino/8bc49495-register-cta_105f01f000000000000028.png" alt="" loading="lazy" data-src-desktop-1x="//d9hhrg4mnvzow.cloudfront.net/lp.betbull.com/casino/8bc49495-register-cta_105f01f000000000000028.png" data-src-desktop-2x="//d9hhrg4mnvzow.cloudfront.net/lp.betbull.com/casino/8bc49495-register-cta_10au02u000000000000028.png" data-src-desktop-3x="//d9hhrg4mnvzow.cloudfront.net/lp.betbull.com/casino/8bc49495-register-cta_1000000000000000000028.png" data-src-mobile-1x="//d9hhrg4mnvzow.cloudfront.net/lp.betbull.com/casino/8bc49495-register-cta_105801d000000000000028.png" data-src-mobile-2x="//d9hhrg4mnvzow.cloudfront.net/lp.betbull.com/casino/8bc49495-register-cta_10ag02q000000000000028.png" data-src-mobile-3x="//d9hhrg4mnvzow.cloudfront.net/lp.betbull.com/casino/8bc49495-register-cta_1000000000000000000028.png" srcset="//d9hhrg4mnvzow.cloudfront.net/lp.betbull.com/casino/8bc49495-register-cta_105f01f000000000000028.png 1x, //d9hhrg4mnvzow.cloudfront.net/lp.betbull.com/casino/8bc49495-register-cta_10au02u000000000000028.png 2x, //d9hhrg4mnvzow.cloudfront.net/lp.betbull.com/casino/8bc49495-register-cta_1000000000000000000028.png 3x"></a>' +
			'</div>' +
			'<img src="https://cfactory-img.s3.amazonaws.com/BEB/8-1/Footballer_prop_2_2.svg" class="cv-beb-8-1-footballer">' +
			'<img src="https://cfactory-img.s3.amazonaws.com/BEB/8-1/Horse-jockey_prop%202.svg" class="cv-beb-8-1-horse">' +
			'<img src="https://cfactory-img.s3.amazonaws.com/BEB/8-1/bolly.svg" class="cv-beb-8-1-volleyball">' +
			'</div></div>';

		var accountData = '' +
			'  <div class="cv-beb-8-1account-content">' +
			'      <div class="lp-pom-block-content">' +
			'          <div class="cv-beb-8-1-box-1 cv-beb-8-1-box">' +
			'              <span class="cv-beb-8-1-number">1</span>' +
			'              <span class="cv-beb-8-1-text">CREATE</br> ACCOUNT</span>' +
			'          </div>' +
			'          <div class="cv-beb-8-1-box-2 cv-beb-8-1-box">' +
			'              <span class="cv-beb-8-1-number">2</span>' +
			'              <span class="cv-beb-8-1-text">' + selectorData[3] + '</span>' +
			'          </div>' +
			'          <div class="cv-beb-8-1-box-3 cv-beb-8-1-box">' +
			'              <span class="cv-beb-8-1-number">3</span>' +
			'              <span class="cv-beb-8-1-text">' + selectorData[4] + '</span>' +
			'          </div>' +
			'      </div>' +
			'  </div>';
		//change new hero banner
		document.querySelector(selectorData[1]).innerHTML = cvPlayerImages;
		document.querySelector(selectorData[1]).insertAdjacentHTML('afterend', accountData);

		//add event listner on hero CTA
		document.querySelector('html body .cv-beb-8-1-hero-banner').addEventListener('click', function (e) {
			e.preventDefault();
			e.stopPropagation();
			document.querySelector('#lp-pom-image-939 a, #lp-pom-image-763 a, #lp-pom-image-967 a, #lp-pom-image-911 a, #lp-pom-image-908 a, #lp-pom-image-908 a, #lp-pom-image-908 a, #lp-pom-image-783 a, #lp-pom-image-805 a').click();
		});
		document.querySelector('.cv-beb-8-1-hero-banner a:last-of-type').addEventListener('click', function (e) {
			e.preventDefault();
			e.stopPropagation();
			document.querySelector('#lp-pom-image-939 a, #lp-pom-image-763 a, #lp-pom-image-967 a, #lp-pom-image-911 a, #lp-pom-image-908 a, #lp-pom-image-908 a, #lp-pom-image-908 a, #lp-pom-image-783 a, #lp-pom-image-805 a').click();
		});

		// MOVE OTHER BANNERS
		window[tag].waitForElement('.cv-beb-10-0_banner-games .swiper-slide-active', function () {
			var newBannerOffset = 0;
			var newBanner = document.querySelector('.cv-beb-8-1account-content');
			var checkOffset = setInterval(function () {
				var newBannerNewOffset = newBanner.offsetHeight + document.querySelector('.cv-beb-10-0_banner-games').offsetHeight;
				// move other banners if screen is resized
				if (newBannerOffset !== newBannerNewOffset && window.innerWidth <= 600) {
					newBannerOffset = newBannerNewOffset;
					moveBanners(newBannerOffset - topOffset, pushDownElems);
					moveMenuBelowSection(pushMenuBelowElems, newBanner.offsetHeight - topOffset);
					window[tag].log("Banners pushed down");
				}
			});
		});

		for (var i = 0; i < removeElems.length; i++) {
			window[tag].waitForElement(removeElems[i], function (bannerElem) {
				if (bannerElem) {
					bannerElem.style.display = 'none';
				}
			});
		}
	}

	function moveBanners(newBannerOffset, pushDownElems) {
		for (var i = 0; i < pushDownElems.length; i++) {
			window[tag].waitForElement(pushDownElems[i], function (bannerElem) {
				if (bannerElem) {
					bannerElem.style.marginTop = String(newBannerOffset) + 'px';
				}
			});
		}
	}

	function moveMenuBelowSection(pushMenuBelowElems, newBannerOffset) {
		for (var i = 0; i < pushMenuBelowElems.length; i++) {
			window[tag].waitForElement(pushMenuBelowElems[i], function (bannerElem) {
				if (bannerElem) {
					bannerElem.style.marginTop = String(newBannerOffset) + 'px';
				}
			});
		}
	}

	function initVariation() {
		var pageName = window.location.pathname,
			pushDownElems = [],
			pushMenuBelowElems = [],
			removeElems = [];
		if (pageName.indexOf("/sport_a_mixeda_gale/") > -1) {
			pushDownElems = ['#lp-pom-text-772', '#lp-pom-image-708', '#lp-pom-text-727', '#lp-pom-text-728', '#lp-pom-image-697', '#lp-pom-text-756', '#lp-pom-image-671', '#lp-pom-image-673', '#lp-pom-image-674', '#lp-pom-text-753', '#lp-pom-image-677', '#lp-pom-text-705', '#lp-pom-image-676', '#lp-pom-image-680', '#lp-pom-text-706', '#lp-pom-image-679', '#lp-pom-text-741', '#lp-pom-text-739', '#lp-pom-text-744', '#lp-pom-text-743', '#lp-pom-text-833', '#lp-pom-text-834', '#lp-pom-text-800', '#lp-pom-text-801', '#lp-pom-text-755', '#lp-pom-image-762', '#lp-pom-image-758', '#lp-pom-image-760', '#lp-pom-image-761', '#lp-pom-text-764', '#lp-pom-text-765', '#lp-pom-text-766', '#lp-pom-text-767', '#lp-pom-text-768', '#lp-pom-text-769', '#lp-pom-text-770', '#lp-pom-text-771', '#lp-pom-image-778', '#lp-pom-image-774', '#lp-pom-image-776', '#lp-pom-image-777'];
			pushMenuBelowElems = ['#lp-pom-image-668','#lp-pom-text-703','#lp-pom-image-707','#lp-pom-image-670', '#lp-pom-image-668'];
			removeElems = ['#lp-pom-text-865','#lp-pom-text-866','#lp-pom-image-870','#lp-pom-block-864','#lp-pom-image-883','#lp-pom-text-879','#lp-pom-text-881','#lp-pom-block-867','#lp-pom-text-877','#lp-pom-text-869','#lp-pom-text-868'];
			addBanner(pushDownElems, removeElems, 213, pushMenuBelowElems);
		} else if (pageName.indexOf("/sport_a_mixed_fbec/") > -1) {
			pushDownElems = ['#lp-pom-text-772', '#lp-pom-image-708', '#lp-pom-text-727', '#lp-pom-text-728', '#lp-pom-image-697', '#lp-pom-text-756', '#lp-pom-image-671', '#lp-pom-image-673', '#lp-pom-image-674', '#lp-pom-text-839', '#lp-pom-text-840', '#lp-pom-text-841', '#lp-pom-text-844', '#lp-pom-text-843', '#lp-pom-text-850', '#lp-pom-text-851', '#lp-pom-text-755', '#lp-pom-text-753', '#lp-pom-image-677', '#lp-pom-text-705', '#lp-pom-image-676', '#lp-pom-image-680', '#lp-pom-text-706', '#lp-pom-image-679', '#lp-pom-text-833', '#lp-pom-text-834', '#lp-pom-text-755', '#lp-pom-image-762', '#lp-pom-image-758', '#lp-pom-image-760', '#lp-pom-image-761', '#lp-pom-text-764', '#lp-pom-text-765', '#lp-pom-text-766', '#lp-pom-text-767', '#lp-pom-text-768', '#lp-pom-text-769', '#lp-pom-text-770', '#lp-pom-text-771', '#lp-pom-image-778', '#lp-pom-image-774', '#lp-pom-image-776', '#lp-pom-image-777'];
			pushMenuBelowElems = ['#lp-pom-image-668', '#lp-pom-text-703', '#lp-pom-image-707', '#lp-pom-image-670'];
			removeElems = ['#lp-pom-block-860', '#lp-pom-image-871', '#lp-pom-block-856', '#lp-pom-block-853', '#lp-pom-image-859', '#lp-pom-text-854', '#lp-pom-text-855', '#lp-pom-text-857', '#lp-pom-text-858', '#lp-pom-text-869', '#lp-pom-text-866'];
			addBanner(pushDownElems, removeElems, 259, pushMenuBelowElems);
		} else if (pageName.indexOf("/sport_a_oc_fbec/") > -1) {
			pushDownElems = ['#lp-pom-image-876',  '#lp-pom-text-772', '#lp-pom-image-878', '#lp-pom-text-727', '#lp-pom-image-877', '#lp-pom-text-756', '#lp-pom-image-778', '#lp-pom-image-774', '#lp-pom-image-776', '#lp-pom-image-777', '#lp-pom-image-803', '#lp-pom-text-801', '#lp-pom-image-800', '#lp-pom-image-879', '#lp-pom-image-860', '#lp-pom-image-814', '#lp-pom-text-811', '#lp-pom-image-810', '#lp-pom-text-905', '#lp-pom-text-906', '#lp-pom-text-907', '#lp-pom-text-910', '#lp-pom-text-909', '#lp-pom-text-749', '#lp-pom-text-750', '#lp-pom-text-755', '#lp-pom-image-762', '#lp-pom-image-758', '#lp-pom-image-760', '#lp-pom-image-761', '#lp-pom-text-764', '#lp-pom-text-765', '#lp-pom-text-767', '#lp-pom-text-768', '#lp-pom-text-770', '#lp-pom-text-771', '#lp-pom-text-769', '#lp-pom-text-766', '#lp-pom-image-817', '#lp-pom-image-816'];
			pushMenuBelowElems = ['#lp-pom-image-792','#lp-pom-text-823','#lp-pom-image-795', '#lp-pom-image-789', '#lp-pom-image-876'];
			removeElems = ['#lp-pom-block-854', '#lp-pom-block-850', '#lp-pom-block-916', '#lp-pom-text-922', '#lp-pom-text-852', '#lp-pom-block-858', '#lp-pom-text-855', '#lp-pom-image-853', '#lp-pom-image-926', '#lp-pom-text-856', '#lp-pom-text-851', '#lp-pom-text-924'];
			addBanner(pushDownElems, removeElems, 269, pushMenuBelowElems);
		} else if (pageName.indexOf("/sport_a_mixed_sepg/") > -1) {
			pushDownElems = ['#lp-pom-text-791', '#lp-pom-text-704', '#lp-pom-text-705', '#lp-pom-image-697', '#lp-pom-text-775', '#lp-pom-image-671', '#lp-pom-image-674', '#lp-pom-image-673', '#lp-pom-text-772', '#lp-pom-image-677', '#lp-pom-text-700', '#lp-pom-image-676', '#lp-pom-image-680', '#lp-pom-text-701', '#lp-pom-image-679', '#lp-pom-text-926', '#lp-pom-text-928', '#lp-pom-text-944', '#lp-pom-text-931', '#lp-pom-text-930', '#lp-pom-text-935', '#lp-pom-text-934', '#lp-pom-text-942', '#lp-pom-text-943', '#lp-pom-text-774', '#lp-pom-image-781', '#lp-pom-image-777', '#lp-pom-image-779', '#lp-pom-image-780', '#lp-pom-text-783', '#lp-pom-text-784', '#lp-pom-text-786', '#lp-pom-text-787', '#lp-pom-text-789', '#lp-pom-text-790', '#lp-pom-text-788', '#lp-pom-text-785', '#lp-pom-image-800', '#lp-pom-image-796', '#lp-pom-image-798', '#lp-pom-image-799', '#lp-pom-text-927'];
			pushMenuBelowElems = ['#lp-pom-image-668','#lp-pom-text-702', '#lp-pom-image-670', '#lp-pom-image-771' ];
			removeElems = ['#lp-pom-text-911', '#lp-pom-block-907', '#lp-pom-text-882', '#lp-pom-text-851', '#lp-pom-block-913', '#lp-pom-image-916', '#lp-pom-text-912', '#lp-pom-text-911', '#lp-pom-image-917', '#lp-pom-text-886', '#lp-pom-text-855', '#lp-pom-text-877']
			addBanner(pushDownElems, removeElems, 277, pushMenuBelowElems);
		} else if (pageName.indexOf("/sport_c_footballbfgf_gale/") > -1) {
			pushDownElems = ['#lp-pom-text-877', '#lp-pom-text-955', '#lp-pom-text-881', '#lp-pom-text-880', '#lp-pom-text-883', '#lp-pom-text-884', '#lp-pom-text-890', '#lp-pom-text-891', '#lp-pom-text-453', '#lp-pom-image-461', '#lp-pom-image-456', '#lp-pom-image-459', '#lp-pom-image-460', '#lp-pom-text-464', '#lp-pom-text-465', '#lp-pom-text-468', '#lp-pom-text-469', '#lp-pom-text-471', '#lp-pom-text-472', '#lp-pom-text-470', '#lp-pom-text-466', '#lp-pom-text-484', '#lp-pom-image-503', '#lp-pom-image-498', '#lp-pom-image-501', '#lp-pom-image-502'];
			pushMenuBelowElems = ['#lp-pom-image-934', '#lp-pom-text-935', '#lp-pom-text-936', '#lp-pom-image-932', '#lp-pom-image-937'];
			removeElems = ['#lp-pom-text-911', '#lp-pom-block-907', '#lp-pom-text-882', '#lp-pom-text-851', '#lp-pom-block-913', '#lp-pom-image-916', '#lp-pom-text-912', '#lp-pom-text-911', '#lp-pom-image-917', '#lp-pom-text-886', '#lp-pom-text-855', '#lp-pom-text-877', '#lp-pom-text-857', '#lp-pom-text-856', '#lp-pom-image-871', '#lp-pom-block-844', '#lp-pom-text-869', '#lp-pom-text-867', '#lp-pom-text-846', '#lp-pom-text-845', '#lp-pom-image-858', '#lp-pom-text-865', '#lp-pom-block-855']
			addBanner(pushDownElems, removeElems, 288, pushMenuBelowElems);
		} else if (pageName.indexOf("/sport_c_footballqs_gale/") > -1) {
			pushDownElems = ['#lp-pom-text-464', '#lp-pom-text-465', '#lp-pom-text-467', '#lp-pom-text-468', '#lp-pom-text-468', '#lp-pom-text-469', '#lp-pom-text-470', '#lp-pom-text-471', '#lp-pom-text-472', '#lp-pom-text-877', '#lp-pom-text-976', '#lp-pom-text-881', '#lp-pom-text-883', '#lp-pom-text-884', '#lp-pom-text-890', '#lp-pom-text-891', '#lp-pom-text-484', '#lp-pom-image-503', '#lp-pom-image-498', '#lp-pom-image-501', '#lp-pom-image-502', '#lp-pom-text-880'];
			pushMenuBelowElems = ['#lp-pom-image-934', '#lp-pom-image-937', '#lp-pom-text-935', '#lp-pom-text-936', '#lp-pom-image-932'];
			removeElems = ['#lp-pom-text-845', '#lp-pom-text-846', '#lp-pom-text-856', '#lp-pom-text-857', '#lp-pom-image-858', '#lp-pom-block-855', '#lp-pom-block-844', '#lp-pom-text-869', '#lp-pom-text-865', '#lp-pom-text-867', '#lp-pom-image-871', '#lp-pom-text-867']
			addBanner(pushDownElems, removeElems, 277, pushMenuBelowElems);
		} else if (pageName.indexOf("/sport_c_mixed_sepg/") > -1) {
			pushDownElems = ['#lp-pom-image-708', '#lp-pom-image-671', '#lp-pom-image-674', '#lp-pom-image-673', '#lp-pom-text-753', '#lp-pom-image-677', '#lp-pom-text-705', '#lp-pom-image-676', '#lp-pom-image-680', '#lp-pom-text-706', '#lp-pom-image-679', '#lp-pom-text-887', '#lp-pom-text-889', '#lp-pom-text-904', '#lp-pom-text-892', '#lp-pom-text-891', '#lp-pom-text-895', '#lp-pom-text-894', '#lp-pom-text-902', '#lp-pom-text-903', '#lp-pom-text-755', '#lp-pom-image-762', '#lp-pom-image-758', '#lp-pom-image-760', '#lp-pom-image-761', '#lp-pom-text-764', '#lp-pom-text-765', '#lp-pom-text-767', '#lp-pom-text-768', '#lp-pom-text-770', '#lp-pom-text-771', '#lp-pom-text-769', '#lp-pom-text-766', '#lp-pom-text-756', '#lp-pom-image-778', '#lp-pom-image-774', '#lp-pom-image-776', '#lp-pom-image-777', '#lp-pom-text-772', '#lp-pom-text-727', '#lp-pom-text-728', '#lp-pom-image-697', '#lp-pom-text-888'];
			addBanner(pushDownElems, removeElems, 277);
		} else if (pageName.indexOf("/sport_c_mixed_fbec/") > -1) {
			pushDownElems = ['#lp-pom-image-671', '#lp-pom-image-673', '#lp-pom-image-674', '#lp-pom-text-704', '#lp-pom-image-677', '#lp-pom-text-705', '#lp-pom-image-676', '#lp-pom-image-680', '#lp-pom-text-706', '#lp-pom-image-679', '#lp-pom-text-806', '#lp-pom-text-807', '#lp-pom-text-863', '#lp-pom-text-810', '#lp-pom-text-809', '#lp-pom-text-812', '#lp-pom-text-813', '#lp-pom-text-453', '#lp-pom-image-461', '#lp-pom-image-456', '#lp-pom-image-459', '#lp-pom-image-460', '#lp-pom-text-464', '#lp-pom-text-465', '#lp-pom-text-468', '#lp-pom-text-469', '#lp-pom-text-471', '#lp-pom-text-472', '#lp-pom-text-470', '#lp-pom-text-466', '#lp-pom-text-484', '#lp-pom-image-503', '#lp-pom-image-498', '#lp-pom-image-501', '#lp-pom-image-502', '#lp-pom-text-726', '#lp-pom-image-708', '#lp-pom-text-727', '#lp-pom-text-728', '#lp-pom-image-697'];
			addBanner(pushDownElems, removeElems, 277);
		} else if (pageName.indexOf("/sport_c_brand_coak/") > -1) {
			pushDownElems = [ '#lp-pom-text-772', '#lp-pom-image-708', '#lp-pom-text-727', '#lp-pom-text-728', '#lp-pom-image-697', '#lp-pom-text-756', '#lp-pom-image-671', '#lp-pom-image-673', '#lp-pom-image-674', '#lp-pom-text-753', '#lp-pom-image-677', '#lp-pom-text-705', '#lp-pom-image-676', '#lp-pom-image-680', '#lp-pom-text-706', '#lp-pom-image-679', '#lp-pom-text-741', '#lp-pom-text-921', '#lp-pom-text-744', '#lp-pom-text-743', '#lp-pom-text-833', '#lp-pom-text-834', '#lp-pom-text-800', '#lp-pom-text-801', '#lp-pom-text-755', '#lp-pom-image-762', '#lp-pom-image-758', '#lp-pom-image-760', '#lp-pom-image-761', '#lp-pom-text-764', '#lp-pom-text-765', '#lp-pom-text-766', '#lp-pom-text-767', '#lp-pom-text-768', '#lp-pom-text-769', '#lp-pom-text-770', '#lp-pom-text-771', '#lp-pom-image-778', '#lp-pom-image-774', '#lp-pom-image-776', '#lp-pom-image-777', '#lp-pom-text-896',];
			pushMenuBelowElems = ['#lp-pom-image-668', '#lp-pom-text-703', '#lp-pom-image-707', '#lp-pom-image-670',];
			removeElems = ['#lp-pom-text-865', '#lp-pom-text-866', '#lp-pom-text-868', '#lp-pom-text-869', '#lp-pom-image-870', '#lp-pom-block-864', '#lp-pom-text-881', '#lp-pom-text-877', '#lp-pom-block-867', '#lp-pom-image-883', '#lp-pom-text-879']
			addBanner(pushDownElems, removeElems, 277, pushMenuBelowElems);
		} else if (pageName.indexOf("/sport_ps_mixed_sepg/") > -1) {
			pushDownElems = [ '#lp-pom-text-772', '#lp-pom-image-708', '#lp-pom-text-727', '#lp-pom-text-728', '#lp-pom-image-697', '#lp-pom-text-756', '#lp-pom-image-671', '#lp-pom-image-673', '#lp-pom-image-674', '#lp-pom-text-753', '#lp-pom-image-677', '#lp-pom-text-705', '#lp-pom-image-676', '#lp-pom-image-680', '#lp-pom-text-706', '#lp-pom-image-679', '#lp-pom-text-755', '#lp-pom-image-762', '#lp-pom-image-758', '#lp-pom-image-760', '#lp-pom-image-761', '#lp-pom-text-764', '#lp-pom-text-765', '#lp-pom-text-766', '#lp-pom-text-767', '#lp-pom-text-768', '#lp-pom-text-769', '#lp-pom-text-770', '#lp-pom-text-771', '#lp-pom-image-778', '#lp-pom-image-774', '#lp-pom-image-776', '#lp-pom-image-777', '#lp-pom-image-884', '#lp-pom-image-886', '#lp-pom-image-888', '#lp-pom-text-893', '#lp-pom-text-895', '#lp-pom-text-910', '#lp-pom-text-898', '#lp-pom-text-897', '#lp-pom-text-902', '#lp-pom-text-901', '#lp-pom-text-908', '#lp-pom-text-909', '#lp-pom-text-894'];
			pushMenuBelowElems = ['#lp-pom-image-889', '#lp-pom-image-670', '#lp-pom-image-707', '#lp-pom-text-703', '#lp-pom-image-668'];
			removeElems = ['#lp-pom-text-865', '#lp-pom-image-870', '#lp-pom-block-864', '#lp-pom-block-867', '#lp-pom-text-881', '#lp-pom-image-883', '#lp-pom-text-877', '#lp-pom-text-879', '#lp-pom-text-866', '#lp-pom-text-869', '#lp-pom-text-879', '#lp-pom-text-868']
			addBanner(pushDownElems, removeElems, 277, pushMenuBelowElems);
		} else if (pageName.indexOf("/sport_ps_mixed_yfce/") > -1) {
			pushDownElems = [ '#lp-pom-text-772', '#lp-pom-image-708', '#lp-pom-text-727', '#lp-pom-text-728', '#lp-pom-image-697', '#lp-pom-text-756', '#lp-pom-image-671', '#lp-pom-image-673', '#lp-pom-image-674', '#lp-pom-text-753', '#lp-pom-image-677', '#lp-pom-text-705', '#lp-pom-image-676', '#lp-pom-image-680', '#lp-pom-text-706', '#lp-pom-image-679', '#lp-pom-text-741', '#lp-pom-text-941', '#lp-pom-text-744', '#lp-pom-text-893', '#lp-pom-text-833', '#lp-pom-text-834', '#lp-pom-text-800', '#lp-pom-text-801', '#lp-pom-text-755', '#lp-pom-image-762', '#lp-pom-image-758', '#lp-pom-image-760', '#lp-pom-image-761', '#lp-pom-text-764', '#lp-pom-text-765', '#lp-pom-text-766', '#lp-pom-text-767', '#lp-pom-text-768', '#lp-pom-text-769', '#lp-pom-text-770', '#lp-pom-text-771', '#lp-pom-image-778', '#lp-pom-image-774', '#lp-pom-image-776', '#lp-pom-image-777'];
			pushMenuBelowElems = ['#lp-pom-image-670', '#lp-pom-image-707', '#lp-pom-text-703', '#lp-pom-image-668'];
			removeElems = ['#lp-pom-text-865', '#lp-pom-text-866', '#lp-pom-text-868', '#lp-pom-text-869', '#lp-pom-image-870', '#lp-pom-text-872', '#lp-pom-block-864', '#lp-pom-block-867', '#lp-pom-text-881', '#lp-pom-text-877', '#lp-pom-text-879', '#lp-pom-image-883']
			addBanner(pushDownElems, removeElems, 277, pushMenuBelowElems);
		} else if (pageName.indexOf("/bet-with-bulls-2/") > -1) {
			pushDownElems = ['#lp-pom-text-772', '#lp-pom-image-708', '#lp-pom-text-727', '#lp-pom-text-728', '#lp-pom-image-697', '#lp-pom-text-756', '#lp-pom-image-671', '#lp-pom-image-673', '#lp-pom-image-674', '#lp-pom-text-753', '#lp-pom-image-677', '#lp-pom-text-705', '#lp-pom-image-676', '#lp-pom-image-680', '#lp-pom-text-706', '#lp-pom-image-679', '#lp-pom-text-741', '#lp-pom-text-941', '#lp-pom-text-744', '#lp-pom-text-893', '#lp-pom-text-833', '#lp-pom-text-834', '#lp-pom-text-800', '#lp-pom-text-801', '#lp-pom-text-755', '#lp-pom-image-762', '#lp-pom-image-758', '#lp-pom-image-760', '#lp-pom-image-761', '#lp-pom-text-764', '#lp-pom-text-765', '#lp-pom-text-766', '#lp-pom-text-767', '#lp-pom-text-768', '#lp-pom-text-769', '#lp-pom-text-770', '#lp-pom-text-771', '#lp-pom-image-778', '#lp-pom-image-774', '#lp-pom-image-776', '#lp-pom-image-777'];
			pushMenuBelowElems = ['#lp-pom-image-668','#lp-pom-text-703','#lp-pom-image-707','#lp-pom-image-670'];
			removeElems = ['#lp-pom-text-865','#lp-pom-image-883','#lp-pom-block-867','#lp-pom-text-881','#lp-pom-block-871','#lp-pom-text-866','#lp-pom-text-868','#lp-pom-image-870','#lp-pom-block-864','#lp-pom-text-869','#lp-pom-text-879','#lp-pom-text-877'];
			addBanner(pushDownElems, removeElems, 219, pushMenuBelowElems);
		} else if (pageName.indexOf("/sport_b_branding_coak/") > -1) {
			pushDownElems = ['#lp-pom-text-772', '#lp-pom-image-708', '#lp-pom-text-727', '#lp-pom-text-728', '#lp-pom-image-697', '#lp-pom-text-756', '#lp-pom-image-671', '#lp-pom-image-673', '#lp-pom-image-674', '#lp-pom-text-753', '#lp-pom-image-677', '#lp-pom-text-705', '#lp-pom-image-676', '#lp-pom-image-680', '#lp-pom-text-706', '#lp-pom-image-679', '#lp-pom-text-741', '#lp-pom-text-941', '#lp-pom-text-744', '#lp-pom-text-893', '#lp-pom-text-833', '#lp-pom-text-834', '#lp-pom-text-800', '#lp-pom-text-801', '#lp-pom-text-755', '#lp-pom-image-762', '#lp-pom-image-758', '#lp-pom-image-760', '#lp-pom-image-761', '#lp-pom-text-764', '#lp-pom-text-765', '#lp-pom-text-766', '#lp-pom-text-767', '#lp-pom-text-768', '#lp-pom-text-769', '#lp-pom-text-770', '#lp-pom-text-771', '#lp-pom-image-778', '#lp-pom-image-774', '#lp-pom-image-776', '#lp-pom-image-777'];
			pushMenuBelowElems = ['#lp-pom-image-668', '#lp-pom-text-703', '#lp-pom-image-707', '#lp-pom-image-670'];
			removeElems = ['#lp-pom-text-866', '#lp-pom-text-868', '#lp-pom-text-869', '#lp-pom-image-870', '#lp-pom-image-883', '#lp-pom-text-877', '#lp-pom-text-879', '#lp-pom-block-867', '#lp-pom-text-881', '#lp-pom-text-865', '#lp-pom-block-864']
			addBanner(pushDownElems, removeElems, 277, pushMenuBelowElems);
		}
	}
})();
