
(function (w) {
	"use strict";

	var tag = "cv-3-1",
		utils,
		window = typeof unsafeWindow !== "undefined" ? unsafeWindow : w,
		isTimedOut,
		timeout = setTimeout(function () {
			isTimedOut = true;
		}, 5000),
		checkForProjectJS = function () {
			try {
				var isLoaded = typeof window["cv-pjs"] !== "undefined";
				if (isTimedOut) return;
				else if (!isLoaded) window.requestAnimationFrame(checkForProjectJS);
				else {
					clearTimeout(timeout);

					utils = window["cv-pjs"];

					//window[tag].variation = "variation-1";
					//window[tag].init();
					initVariation();
				}
			} catch (err) {
				if (utils) utils.log(err, tag);
			}
		};

	window.requestAnimationFrame(checkForProjectJS);

	function initVariation() {
		var modClass = `${tag}_module`;
		utils.waitForElement("#gatsby-focus-wrapper  section[data-qa='hero']", function (heroContent) {
			utils.applyChanges(`.${modClass}`, function () {
				var cont = document.createElement("div");
				cont.innerHTML = `
					<div class="cv-overview-wrapper">
						<div class="cv-callouts-container">
			
							<!--Certified Translation-->
							<div class="cv-callouts">
			
							<div class="cv-img">
							   <img src="https://cfactory-img.s3.amazonaws.com/CLS/3.1/convicon1.svg" alt="callout-icon"> 
							</div>
								 
							<div class ="cv-rows">
							   <h3 class="cv-title">Your free credit score & report,<br/> updated weekly</h3>
							   <p class="cv-info">Enter your details once, and get free credit reports forever.</p>
							   </div>   
							</div>
			
							<!--Professional Translation-->
							<div class="cv-callouts">
							<div class="cv-img">
								<img src="https://cfactory-img.s3.amazonaws.com/CLS/3.1/convicon2.svg" alt="callout-icon">
						   </div>
			
						   <div class="cv-rows">
								<h3 class="cv-title">Support to <br/> improve your score</h3>
								<p class="cv-info">Get clear, personalised insights about your credit, plus tips on how to improve it.</p>
			
								</div>
							</div>
			
							<!--Academic Translation-->
							<div class="cv-callouts">
							<div class="cv-img">
								<img src="https://cfactory-img.s3.amazonaws.com/CLS/3.1/convicon3.svg" alt="callout-icon">
							 </div>
							 
							 <div class="cv-rows">
								<h3 class="cv-title">The UK’s number 1 free credit <br/> score and report app</h3>
								<p class="cv-info">Over 12 million people  trust ClearScore to help them with their financial future.</p>
			
								</div>
							</div>
			
							<!--90+ Languages Supported-->
							<div class="cv-callouts">
			
							<div class="cv-img">
								<img src="https://cfactory-img.s3.amazonaws.com/CLS/3.1/convicon4.svg" alt="callout-icon">
								</div>
			
								<div class="cv-rows">
								<h3 class="cv-title">Personalised and pre-approved <br/> credit offers</h3>
								<p class="cv-info">Get pre-approved for exclusive offers you won’t see anywhere else.</p>
								</div>
							</div>
						</div>
					</div>`;

				cont.classList.add(modClass);
				cont.classList.add('cv-overview-container');
                document.body.classList.add(tag)

				heroContent.insertAdjacentElement("afterend", cont);
                 document.querySelector("#gatsby-focus-wrapper section[class ^= 'featureSection'] > div[class ^= 'ctaContainer'] > a > div").innerText = "Sign up for free";

				utils.log("module inserted", tag);
			});
		});
		
	}

	
})(window);
