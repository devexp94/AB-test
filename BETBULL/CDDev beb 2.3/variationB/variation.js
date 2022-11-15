
(function () {
    "use strict";

	if (typeof unsafeWindow !== "undefined") window = unsafeWindow;

	var id = "2-3",
		type = "variation",
		tag = "cv-" + id,
		debug = document.cookie.indexOf("cfQA") > -1,
		savedPage = window.location.pathname,
		targetPages = ["/sport_a_mixeda_gale/","/sport_a_mixed_fbec/","/sport_a_oc_fbec/","/sport_a_mixed_sepg/","/sport_c_footballbfgf_gale/","/sport_c_footballqs_gale/","/sport_c_mixed_sepg/","/sport_c_mixed_fbec/","/sport_c_brand_coak/","/sport_ps_mixed_sepg/","/sport_ps_mixed_yfce/","/bet-with-bulls-2/","/sport_b_branding_coak/"];

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
			fixFlicker = [],
			pushDownElems = [],
			fixLandscape = [];

		if(pageName.indexOf("/sport_a_mixeda_gale/") > -1){
			spaceBar = '<div class="cv-beb-2-3_banner-space"></div>';
			spaceBar2 = '<div class="cv-beb-2-3_banner-space"></div>';
			idElem = '#lp-pom-block-552';
			pushDownElems = ['#lp-pom-text-938','#lp-pom-text-928','#lp-pom-text-927','#lp-pom-image-671','#lp-pom-image-929','#lp-pom-text-937','#lp-pom-image-940','#lp-pom-image-932','#lp-pom-image-939', '#lp-pom-text-772','#lp-pom-image-708','#lp-pom-text-727','#lp-pom-text-728','#lp-pom-image-697','#lp-pom-text-756','#lp-pom-image-671','#lp-pom-image-673','#lp-pom-image-674','#lp-pom-text-753','#lp-pom-image-677','#lp-pom-text-705','#lp-pom-image-676','#lp-pom-image-680','#lp-pom-text-706','#lp-pom-image-679','#lp-pom-text-741','#lp-pom-text-739','#lp-pom-text-744','#lp-pom-text-743','#lp-pom-text-833','#lp-pom-text-834','#lp-pom-text-800','#lp-pom-text-801','#lp-pom-text-755','#lp-pom-image-762','#lp-pom-image-758','#lp-pom-image-760','#lp-pom-image-761','#lp-pom-text-764','#lp-pom-text-765','#lp-pom-text-766','#lp-pom-text-767','#lp-pom-text-768','#lp-pom-text-769','#lp-pom-text-770','#lp-pom-text-771','#lp-pom-image-778','#lp-pom-image-774','#lp-pom-image-776','#lp-pom-image-777','#lp-pom-image-974','#lp-pom-image-975','#lp-pom-image-975', '#lp-pom-image-976', '#lp-pom-image-977',"#lp-pom-image-979","#lp-pom-image-981","#lp-pom-image-980","#lp-pom-image-975","#lp-pom-text-983","#lp-pom-image-982","#lp-pom-text-984"];
			fixFlicker = ['#lp-pom-image-671','#lp-pom-image-673','#lp-pom-image-674','#lp-pom-text-753'];
			fixLandscape = ['#lp-pom-text-753','#lp-pom-image-673','#lp-pom-image-674'];
			if(window.outerWidth > 600){
				removeFlicker(fixFlicker,"none");
				window[tag].log("Flicker none");
			}
			addBanner(idElem,pushDownElems,spaceBar,spaceBar2,fixFlicker,fixLandscape);
		} else if(pageName.indexOf("/sport_a_mixed_fbec/") > -1){
			spaceBar = '';
			spaceBar2 = '<div class="cv-beb-2-3_banner-space"></div>';
			idElem = '#lp-pom-block-552';
			pushDownElems = ['#lp-pom-text-881','#lp-pom-text-772','#lp-pom-image-708','#lp-pom-text-727','#lp-pom-text-728','#lp-pom-image-697','#lp-pom-text-756','#lp-pom-image-671','#lp-pom-image-673','#lp-pom-image-674','#lp-pom-text-839','#lp-pom-text-840','#lp-pom-text-841','#lp-pom-text-844','#lp-pom-text-843','#lp-pom-text-850','#lp-pom-text-851','#lp-pom-text-755','#lp-pom-text-753','#lp-pom-image-677','#lp-pom-text-705','#lp-pom-image-676','#lp-pom-image-680','#lp-pom-text-706','#lp-pom-image-679','#lp-pom-text-833','#lp-pom-text-834','#lp-pom-text-755','#lp-pom-image-762','#lp-pom-image-758','#lp-pom-image-760','#lp-pom-image-761','#lp-pom-text-764','#lp-pom-text-765','#lp-pom-text-766','#lp-pom-text-767','#lp-pom-text-768','#lp-pom-text-769','#lp-pom-text-770','#lp-pom-text-771','#lp-pom-image-778','#lp-pom-image-774','#lp-pom-image-776','#lp-pom-image-777','#lp-pom-image-892','#lp-pom-image-885','#lp-pom-text-890','#lp-pom-image-893','#lp-pom-image-882', '#lp-pom-text-880','#lp-pom-text-891',"#lp-pom-image-904",'#lp-pom-image-903','#lp-pom-image-897','#lp-pom-image-896','#lp-pom-image-898','#lp-pom-text-900','#lp-pom-image-905','#lp-pom-image-906','#lp-pom-image-899','#lp-pom-text-901','#lp-pom-text-894'];
			fixFlicker = ['#lp-pom-image-671','#lp-pom-image-673','#lp-pom-image-674','#lp-pom-text-753'];
			fixLandscape = ['#lp-pom-text-753','#lp-pom-image-673','#lp-pom-image-674'];
			if(window.outerWidth > 600){
				removeFlicker(fixFlicker,"none");
				window[tag].log("Flicker none");
			}
			addBanner(idElem,pushDownElems,spaceBar,spaceBar2,fixFlicker,fixLandscape);
		} else if(pageName.indexOf("/sport_a_oc_fbec/") > -1){
			spaceBar = '';
			spaceBar2 = '<div class="cv-beb-2-3_banner-space"></div>';
			idElem = '#lp-pom-block-969';
			pushDownElems = ['#lp-pom-text-772','#lp-pom-image-878','#lp-pom-text-727','#lp-pom-image-877','#lp-pom-text-756','#lp-pom-image-778','#lp-pom-image-774','#lp-pom-image-776','#lp-pom-image-777','#lp-pom-image-803','#lp-pom-text-801','#lp-pom-image-800','#lp-pom-image-879','#lp-pom-image-860','#lp-pom-image-814','#lp-pom-text-811','#lp-pom-image-810','#lp-pom-text-905','#lp-pom-text-906','#lp-pom-text-907','#lp-pom-text-910','#lp-pom-text-909','#lp-pom-text-749','#lp-pom-text-750','#lp-pom-text-755','#lp-pom-image-762','#lp-pom-image-758','#lp-pom-image-760','#lp-pom-image-761','#lp-pom-text-764','#lp-pom-text-765','#lp-pom-text-767','#lp-pom-text-768','#lp-pom-text-770','#lp-pom-text-771','#lp-pom-text-769','#lp-pom-text-766','#lp-pom-image-817','#lp-pom-image-816','#lp-pom-image-991','#lp-pom-image-993','#lp-pom-image-985','#lp-pom-text-986','#lp-pom-image-988','#lp-pom-image-1005','#lp-pom-image-999','#lp-pom-image-998','#lp-pom-text-997','#lp-pom-image-996','#lp-pom-text-1006','#lp-pom-text-1007','#lp-pom-image-989','#lp-pom-text-983','#lp-pom-image-1002','#lp-pom-text-995'];
			fixFlicker = ['#lp-pom-image-803','#lp-pom-text-801','#lp-pom-image-800','#lp-pom-image-879'];
			fixLandscape = ['#lp-pom-text-801'];
			if(window.outerWidth > 600){
				removeFlicker(fixFlicker,"none");
				window[tag].log("Flicker none");
			}
			addBanner(idElem,pushDownElems,spaceBar,spaceBar2,fixFlicker,fixLandscape);
		} else if(pageName.indexOf("/sport_a_mixed_sepg/") > -1){
			spaceBar = '';
			spaceBar2 = '<div class="cv-beb-2-3_banner-space"></div>';
			idElem = '#lp-pom-block-552';
			pushDownElems = ['#lp-pom-text-791','#lp-pom-text-704','#lp-pom-text-705','#lp-pom-image-697','#lp-pom-text-775','#lp-pom-image-671','#lp-pom-image-674','#lp-pom-image-673','#lp-pom-text-772','#lp-pom-image-677','#lp-pom-text-700','#lp-pom-image-676','#lp-pom-image-680','#lp-pom-text-701','#lp-pom-image-679','#lp-pom-text-926','#lp-pom-text-928','#lp-pom-text-944','#lp-pom-text-931','#lp-pom-text-930','#lp-pom-text-935','#lp-pom-text-934','#lp-pom-text-942','#lp-pom-text-943','#lp-pom-text-774','#lp-pom-image-781','#lp-pom-image-777','#lp-pom-image-779','#lp-pom-image-780','#lp-pom-text-783','#lp-pom-text-784','#lp-pom-text-786','#lp-pom-text-787','#lp-pom-text-789','#lp-pom-text-790','#lp-pom-text-788','#lp-pom-text-785','#lp-pom-image-800','#lp-pom-image-796','#lp-pom-image-798','#lp-pom-image-799','#lp-pom-text-927'];
			fixFlicker = ['#lp-pom-image-671','#lp-pom-image-674','#lp-pom-image-673','#lp-pom-text-772'];
			fixLandscape = ['#lp-pom-text-772','#lp-pom-image-673'];
			if(window.outerWidth > 600){
				removeFlicker(fixFlicker,"none");
				window[tag].log("Flicker none");
			}
			addBanner(idElem,pushDownElems,spaceBar,spaceBar2,fixFlicker,fixLandscape);
		} else if(pageName.indexOf("/sport_c_footballbfgf_gale/") > -1){
			spaceBar = '';
			spaceBar2 = '';
			idElem = '#lp-pom-block-918';
			pushDownElems = ['#lp-pom-text-877','#lp-pom-text-955','#lp-pom-text-881','#lp-pom-text-880','#lp-pom-text-883','#lp-pom-text-884','#lp-pom-text-890','#lp-pom-text-891','#lp-pom-text-453','#lp-pom-image-461','#lp-pom-image-456','#lp-pom-image-459','#lp-pom-image-460','#lp-pom-text-464','#lp-pom-text-465','#lp-pom-text-468','#lp-pom-text-469','#lp-pom-text-471','#lp-pom-text-472','#lp-pom-text-470','#lp-pom-text-466','#lp-pom-text-484','#lp-pom-image-503','#lp-pom-image-498','#lp-pom-image-501','#lp-pom-image-502'];
			fixFlicker = ['#lp-pom-text-877','#lp-pom-text-955'];
			fixLandscape = null;
			if(window.outerWidth > 600){
				removeFlicker(fixFlicker,"none");
				window[tag].log("Flicker none");
			}
			addBanner(idElem,pushDownElems,spaceBar,spaceBar2,fixFlicker,fixLandscape);
		} else if(pageName.indexOf("/sport_c_footballqs_gale/") > -1){
			spaceBar = '';
			spaceBar2 = '';
			idElem = '#lp-pom-block-918';
			pushDownElems = ['#lp-pom-text-877','#lp-pom-text-976','#lp-pom-text-881','#lp-pom-text-880','#lp-pom-text-883','#lp-pom-text-884','#lp-pom-text-890','#lp-pom-text-891','#lp-pom-text-453','#lp-pom-image-461','#lp-pom-image-456','#lp-pom-image-459','#lp-pom-image-460','#lp-pom-text-464','#lp-pom-text-465','#lp-pom-text-468','#lp-pom-text-469','#lp-pom-text-471','#lp-pom-text-472','#lp-pom-text-470','#lp-pom-text-466','#lp-pom-text-484','#lp-pom-image-503','#lp-pom-image-498','#lp-pom-image-501','#lp-pom-image-502'];
			fixFlicker = ['#lp-pom-text-877','#lp-pom-text-976'];
			fixLandscape = null;
			if(window.outerWidth > 600){
				removeFlicker(fixFlicker,"none");
				window[tag].log("Flicker none");
			}
			addBanner(idElem,pushDownElems,spaceBar,spaceBar2,fixFlicker,fixLandscape);
		} else if(pageName.indexOf("/sport_c_mixed_sepg/") > -1){
			spaceBar = '';
			spaceBar2 = '<div class="cv-beb-2-3_banner-space"></div>';
			idElem = '#lp-pom-block-552';
			pushDownElems = ['#lp-pom-image-708','#lp-pom-image-671','#lp-pom-image-674','#lp-pom-image-673','#lp-pom-text-753','#lp-pom-image-677','#lp-pom-text-705','#lp-pom-image-676','#lp-pom-image-680','#lp-pom-text-706','#lp-pom-image-679','#lp-pom-text-887','#lp-pom-text-889','#lp-pom-text-904','#lp-pom-text-892','#lp-pom-text-891','#lp-pom-text-895','#lp-pom-text-894','#lp-pom-text-902','#lp-pom-text-903','#lp-pom-text-755','#lp-pom-image-762','#lp-pom-image-758','#lp-pom-image-760','#lp-pom-image-761','#lp-pom-text-764','#lp-pom-text-765','#lp-pom-text-767','#lp-pom-text-768','#lp-pom-text-770','#lp-pom-text-771','#lp-pom-text-769','#lp-pom-text-766','#lp-pom-text-756','#lp-pom-image-778','#lp-pom-image-774','#lp-pom-image-776','#lp-pom-image-777','#lp-pom-text-772','#lp-pom-text-727','#lp-pom-text-728','#lp-pom-image-697','#lp-pom-text-888'];
			fixFlicker = ['#lp-pom-image-671','#lp-pom-image-674','#lp-pom-image-673','#lp-pom-text-753'];
			fixLandscape = ['#lp-pom-text-753','#lp-pom-image-673','#lp-pom-image-674'];
			if(window.outerWidth > 600){
				removeFlicker(fixFlicker,"none");
				window[tag].log("Flicker none");
			}
			addBanner(idElem,pushDownElems,spaceBar,spaceBar2,fixFlicker,fixLandscape);
		} else if(pageName.indexOf("/sport_c_mixed_fbec/") > -1){
			spaceBar = '';
			spaceBar2 = '<div class="cv-beb-2-3_banner-space"></div>';
			idElem = '#lp-pom-block-552';
			pushDownElems = ['#lp-pom-image-671','#lp-pom-image-673','#lp-pom-image-674','#lp-pom-text-704','#lp-pom-image-677','#lp-pom-text-705','#lp-pom-image-676','#lp-pom-image-680','#lp-pom-text-706','#lp-pom-image-679','#lp-pom-text-806','#lp-pom-text-807','#lp-pom-text-863','#lp-pom-text-810','#lp-pom-text-809','#lp-pom-text-812','#lp-pom-text-813','#lp-pom-text-453','#lp-pom-image-461','#lp-pom-image-456','#lp-pom-image-459','#lp-pom-image-460','#lp-pom-text-464','#lp-pom-text-465','#lp-pom-text-468','#lp-pom-text-469','#lp-pom-text-471','#lp-pom-text-472','#lp-pom-text-470','#lp-pom-text-466','#lp-pom-text-484','#lp-pom-image-503','#lp-pom-image-498','#lp-pom-image-501','#lp-pom-image-502','#lp-pom-text-726','#lp-pom-image-708','#lp-pom-text-727','#lp-pom-text-728','#lp-pom-image-697'];
			fixFlicker = ['#lp-pom-image-671','#lp-pom-image-673','#lp-pom-image-674','#lp-pom-text-704'];
			fixLandscape = ['#lp-pom-image-673','#lp-pom-image-674','#lp-pom-text-704'];
			if(window.outerWidth > 600){
				removeFlicker(fixFlicker,"none");
				window[tag].log("Flicker none");
			}
			addBanner(idElem,pushDownElems,spaceBar,spaceBar2,fixFlicker,fixLandscape);
		} else if(pageName.indexOf("/sport_c_brand_coak/") > -1){
			spaceBar = '';
			spaceBar2 = '<div class="cv-beb-2-3_banner-space"></div>';
			idElem = '#lp-pom-block-552';
			pushDownElems = ['#lp-pom-text-772','#lp-pom-image-708','#lp-pom-text-727','#lp-pom-text-728','#lp-pom-image-697','#lp-pom-text-756','#lp-pom-image-671','#lp-pom-image-673','#lp-pom-image-674','#lp-pom-text-753','#lp-pom-image-677','#lp-pom-text-705','#lp-pom-image-676','#lp-pom-image-680','#lp-pom-text-706','#lp-pom-image-679','#lp-pom-text-741','#lp-pom-text-921','#lp-pom-text-744','#lp-pom-text-743','#lp-pom-text-833','#lp-pom-text-834','#lp-pom-text-800','#lp-pom-text-801','#lp-pom-text-755','#lp-pom-image-762','#lp-pom-image-758','#lp-pom-image-760','#lp-pom-image-761','#lp-pom-text-764','#lp-pom-text-765','#lp-pom-text-766','#lp-pom-text-767','#lp-pom-text-768','#lp-pom-text-769','#lp-pom-text-770','#lp-pom-text-771','#lp-pom-image-778','#lp-pom-image-774','#lp-pom-image-776','#lp-pom-image-777','#lp-pom-text-896'];
			fixFlicker = ['#lp-pom-image-671','#lp-pom-image-673','#lp-pom-image-674','#lp-pom-text-753'];
			fixLandscape = ['#lp-pom-text-753','#lp-pom-image-673','#lp-pom-image-674'];
			if(window.outerWidth > 600){
				removeFlicker(fixFlicker,"none");
				window[tag].log("Flicker none");
			}
			addBanner(idElem,pushDownElems,spaceBar,spaceBar2,fixFlicker,fixLandscape);
		} else if(pageName.indexOf("/sport_ps_mixed_sepg/") > -1){
			spaceBar = '';
			spaceBar2 = '<div class="cv-beb-2-3_banner-space"></div>';
			idElem = '#lp-pom-block-552';
			pushDownElems = ['#lp-pom-text-772','#lp-pom-image-708','#lp-pom-text-727','#lp-pom-text-728','#lp-pom-image-697','#lp-pom-text-756','#lp-pom-image-671','#lp-pom-image-673','#lp-pom-image-674','#lp-pom-text-753','#lp-pom-image-677','#lp-pom-text-705','#lp-pom-image-676','#lp-pom-image-680','#lp-pom-text-706','#lp-pom-image-679','#lp-pom-text-755','#lp-pom-image-762','#lp-pom-image-758','#lp-pom-image-760','#lp-pom-image-761','#lp-pom-text-764','#lp-pom-text-765','#lp-pom-text-766','#lp-pom-text-767','#lp-pom-text-768','#lp-pom-text-769','#lp-pom-text-770','#lp-pom-text-771','#lp-pom-image-778','#lp-pom-image-774','#lp-pom-image-776','#lp-pom-image-777','#lp-pom-image-884','#lp-pom-image-886','#lp-pom-image-888','#lp-pom-text-893','#lp-pom-text-895','#lp-pom-text-910','#lp-pom-text-898','#lp-pom-text-897','#lp-pom-text-902','#lp-pom-text-901','#lp-pom-text-908','#lp-pom-text-909','#lp-pom-text-894'];
			fixFlicker = ['#lp-pom-image-671','#lp-pom-image-673','#lp-pom-image-674','#lp-pom-text-753','#lp-pom-image-884'];
			fixLandscape = ['#lp-pom-text-753','#lp-pom-image-673','#lp-pom-image-674'];
			if(window.outerWidth > 600){
				removeFlicker(fixFlicker,"none");
				window[tag].log("Flicker none");
			}
			addBanner(idElem,pushDownElems,spaceBar,spaceBar2,fixFlicker,fixLandscape);
		} else if(pageName.indexOf("/sport_ps_mixed_yfce/") > -1){
			spaceBar = '';
			spaceBar2 = '<div class="cv-beb-2-3_banner-space"></div>';
			idElem = '#lp-pom-block-552';
			pushDownElems = ['#lp-pom-text-772','#lp-pom-image-708','#lp-pom-text-727','#lp-pom-text-728','#lp-pom-image-697','#lp-pom-text-756','#lp-pom-image-671','#lp-pom-image-673','#lp-pom-image-674','#lp-pom-text-753','#lp-pom-image-677','#lp-pom-text-705','#lp-pom-image-676','#lp-pom-image-680','#lp-pom-text-706','#lp-pom-image-679','#lp-pom-text-741','#lp-pom-text-941','#lp-pom-text-744','#lp-pom-text-893','#lp-pom-text-833','#lp-pom-text-834','#lp-pom-text-800','#lp-pom-text-801','#lp-pom-text-755','#lp-pom-image-762','#lp-pom-image-758','#lp-pom-image-760','#lp-pom-image-761','#lp-pom-text-764','#lp-pom-text-765','#lp-pom-text-766','#lp-pom-text-767','#lp-pom-text-768','#lp-pom-text-769','#lp-pom-text-770','#lp-pom-text-771','#lp-pom-image-778','#lp-pom-image-774','#lp-pom-image-776','#lp-pom-image-777','#lp-pom-image-957','#lp-pom-image-950','#lp-pom-text-955','#lp-pom-image-958','#lp-pom-text-945','#lp-pom-image-947','#lp-pom-text-956','#lp-pom-text-946','#lp-pom-block-960','#lp-pom-text-959','#lp-pom-text-961','#lp-pom-text-962','#lp-pom-text-963','#lp-pom-text-964','#lp-pom-text-965','#lp-pom-text-966','#lp-pom-text-967','#lp-pom-text-968','#lp-pom-image-996','#lp-pom-image-997','#lp-pom-image-998','#lp-pom-image-999','#lp-pom-image-1003','#lp-pom-text-1005','#lp-pom-image-1001','#lp-pom-image-1002','#lp-pom-text-1006','#lp-pom-image-1004'];
			fixFlicker = ['#lp-pom-image-671','#lp-pom-image-673','#lp-pom-image-674','#lp-pom-text-753'];
			fixLandscape = ['#lp-pom-text-753','#lp-pom-image-673','#lp-pom-image-674'];
			if(window.outerWidth > 600){
				removeFlicker(fixFlicker,"none");
				window[tag].log("Flicker none");
			}
			addBanner(idElem,pushDownElems,spaceBar,spaceBar2,fixFlicker,fixLandscape);
		} else if(pageName.indexOf("/bet-with-bulls-2/") > -1){
			spaceBar = '';
			spaceBar2 = '<div class="cv-beb-2-3_banner-space"></div>';
			idElem = '#lp-pom-block-552';
			pushDownElems = ['#lp-pom-text-772','#lp-pom-image-708','#lp-pom-text-727','#lp-pom-text-728','#lp-pom-image-697','#lp-pom-text-756','#lp-pom-image-671','#lp-pom-image-673','#lp-pom-image-674','#lp-pom-text-753','#lp-pom-image-677','#lp-pom-text-705','#lp-pom-image-676','#lp-pom-image-680','#lp-pom-text-706','#lp-pom-image-679','#lp-pom-text-741','#lp-pom-text-941','#lp-pom-text-744','#lp-pom-text-893','#lp-pom-text-833','#lp-pom-text-834','#lp-pom-text-800','#lp-pom-text-801','#lp-pom-text-755','#lp-pom-image-762','#lp-pom-image-758','#lp-pom-image-760','#lp-pom-image-761','#lp-pom-text-764','#lp-pom-text-765','#lp-pom-text-766','#lp-pom-text-767','#lp-pom-text-768','#lp-pom-text-769','#lp-pom-text-770','#lp-pom-text-771','#lp-pom-image-778','#lp-pom-image-774','#lp-pom-image-776','#lp-pom-image-777','#lp-pom-image-958','#lp-pom-image-951','#lp-pom-image-959','#lp-pom-text-956','#lp-pom-image-948','#lp-pom-text-946','#lp-pom-text-947','#lp-pom-text-957','#lp-pom-text-963','#lp-pom-text-965','#lp-pom-text-966','#lp-pom-text-967','#lp-pom-text-968','#lp-pom-text-969','#lp-pom-text-970','#lp-pom-text-971','#lp-pom-text-972','#lp-pom-image-1000','#lp-pom-image-1001','#lp-pom-image-1002','#lp-pom-image-1003','#lp-pom-image-1006','#lp-pom-image-1005','#lp-pom-image-1007','#lp-pom-text-1009','#lp-pom-image-1008','#lp-pom-text-1010'];
			fixFlicker = ['#lp-pom-image-671','#lp-pom-image-673','#lp-pom-image-674','#lp-pom-text-753'];
			fixLandscape = ['#lp-pom-text-753','#lp-pom-image-673','#lp-pom-image-674'];
			if(window.outerWidth > 600){
				removeFlicker(fixFlicker,"none");
				window[tag].log("Flicker none");
			}
			addBanner(idElem,pushDownElems,spaceBar,spaceBar2,fixFlicker,fixLandscape);
		} else if(pageName.indexOf("/sport_b_branding_coak/") > -1){
			spaceBar = '';
			spaceBar2 = '<div class="cv-beb-2-3_banner-space"></div>';
			idElem = '#lp-pom-block-552';
			pushDownElems = ['#lp-pom-text-772','#lp-pom-image-708','#lp-pom-text-727','#lp-pom-text-728','#lp-pom-image-697','#lp-pom-text-756','#lp-pom-image-671','#lp-pom-image-673','#lp-pom-image-674','#lp-pom-text-753','#lp-pom-image-677','#lp-pom-text-705','#lp-pom-image-676','#lp-pom-image-680','#lp-pom-text-706','#lp-pom-image-679','#lp-pom-text-741','#lp-pom-text-941','#lp-pom-text-744','#lp-pom-text-893','#lp-pom-text-833','#lp-pom-text-834','#lp-pom-text-800','#lp-pom-text-801','#lp-pom-text-755','#lp-pom-image-762','#lp-pom-image-758','#lp-pom-image-760','#lp-pom-image-761','#lp-pom-text-764','#lp-pom-text-765','#lp-pom-text-766','#lp-pom-text-767','#lp-pom-text-768','#lp-pom-text-769','#lp-pom-text-770','#lp-pom-text-771','#lp-pom-image-778','#lp-pom-image-774','#lp-pom-image-776','#lp-pom-image-777','#lp-pom-image-958','#lp-pom-image-951','#lp-pom-text-956','#lp-pom-image-959','#lp-pom-image-948','#lp-pom-text-946','#lp-pom-text-962','#lp-pom-text-961','#lp-pom-text-964','#lp-pom-text-965','#lp-pom-text-966','#lp-pom-text-967','#lp-pom-text-968','#lp-pom-text-969','#lp-pom-text-970','#lp-pom-text-971','#lp-pom-text-957','#lp-pom-text-947','#lp-pom-image-999','#lp-pom-image-1000','#lp-pom-image-1001','#lp-pom-image-1002','#lp-pom-image-1006','#lp-pom-image-1005','#lp-pom-text-1008','#lp-pom-image-1004','#lp-pom-image-1007','#lp-pom-text-1009'];
			fixFlicker = ['#lp-pom-image-671','#lp-pom-image-673','#lp-pom-image-674','#lp-pom-text-753'];
			fixLandscape = ['#lp-pom-text-753','#lp-pom-image-673','#lp-pom-image-674'];
			if(window.outerWidth > 600){
				removeFlicker(fixFlicker,"none");
				window[tag].log("Flicker none");
			}
			addBanner(idElem,pushDownElems,spaceBar,spaceBar2,fixFlicker,fixLandscape);
		}
	}

	function addBanner(idElem,pushDownElems,spaceBar,spaceBar2,fixFlicker,fixLandscape){
		window[tag].waitForElement(idElem, function (stepSection) {
			var isBanner = document.querySelector('.cv-beb-2-3_banner-games');
			if (!isBanner){
				// HEADER
				var newBanner = spaceBar +
				'  <div class="cv-beb-2-3_banner-pc">'+ 
				'      <div class="lp-pom-block-content">'+ 
				'          <div class="cv-beb-2-3_img-left-pc">'+ 
				'              <img class="cv-beb-2-3_img_desktop" src="https://cfactory-img.s3.amazonaws.com/BEB/2-3/Group%205.png" alt="winner story">'+ 
				'              <img class="cv-beb-2-3_img_mobile" src="https://cfactory-img.s3.amazonaws.com/BEB/2-3/Create%20Your.png" alt="create story">'+ 
				'              <img class="cv-beb-2-3_img_mobile" src="https://cfactory-img.s3.amazonaws.com/BEB/2-3/Winners%20Story.png" alt="winner story">'+ 
				'              <p class="cv-beb-2-3_banner-text">Bet on access with fellow football fans and share the excitement. <b> What are you waiting for?</b></p>'+ 
				'              <a href="#"><img class="cv-beb-2-3_img_desktop" src="https://cfactory-img.s3.amazonaws.com/BEB/2-3/Register%20CTA%20Button%20copy%201.png" alt="register button">'+ 
				'              <img class="cv-beb-2-3_img_mobile" src="https://cfactory-img.s3.amazonaws.com/BEB/2-3/Register%20CTA%20Button%20copy%201%20%281%29.png" alt="register button"></a>'+ 
				'          </div>'+ 
				'          <div class="cv-beb-2-3_img-right-pc">'+ 
				'              <img src="https://cfactory-img.s3.amazonaws.com/BEB/2-3/Mobile%20Social%20Wins%20%281%29%20%281%29%202.png">'+ 
				'          </div>'+ 
				'      </div>'+ 
				'  </div>'+spaceBar;
				// ADD ELEMENT
				addElement('div','cv-beb-2-3_banner-games',newBanner,'afterend',stepSection);
				// MOVE OTHER BANNERS
				window[tag].waitForElement('.cv-beb-2-3_banner-games', function (newBanner) {
					var newBannerOffset = 0;
					var isFlicker = false;
					var isLandscape = false;
					var currentStep = 1;
					var checkOffset = setInterval(function () {
						var newBannerNewOffset = newBanner.offsetHeight;
						// move other banners if screen is resized
						if(newBannerOffset !== newBannerNewOffset){
							newBannerOffset = newBannerNewOffset;
							moveBanners(newBannerOffset,pushDownElems);
							window[tag].log("Banners pushed down");
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
	  
})();