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
		function live(event, selector, callback, context) {
			/****Helper Functions****/
			// helper for enabling IE 8 event bindings
			function addEvent(el, type, handler) {
				if (el.attachEvent) el.attachEvent('on' + type, handler);
				else el.addEventListener(type, handler);
			}
			// matches polyfill
			this && this.Element &&
				(function (ElementPrototype) {
					ElementPrototype.matches =
						ElementPrototype.matches ||
						ElementPrototype.matchesSelector ||
						ElementPrototype.webkitMatchesSelector ||
						ElementPrototype.msMatchesSelector ||
						function (selector) {
							var node = this,
								nodes = (node.parentNode || node.document).querySelectorAll(
									selector
								),
								i = -1;
							while (nodes[++i] && nodes[i] != node);
							return !!nodes[i];
						};
				})(Element.prototype);
			// live binding helper using matchesSelector
			function live(selector, event, callback, context) {
				addEvent(context || document, event, function (e) {
					var found,
						el = e.target || e.srcElement;
					while (
						el &&
						el.matches &&
						el !== context &&
						!(found = el.matches(selector))
					)
						el = el.parentElement;
					if (found) callback.call(el, e);
				});
			}
			live(selector, event, callback, context);
		}

		var egNewSection =''+ 
'  <div class="eg-description">'+ 
'      <div class="container-bob">'+ 
'          <div class="row">'+ 
'              <div class="col-12">'+ 
'                  <div style="text-align: left;">Concevez votre <strong>volet roulant électrique sur mesure</strong> de la gamme Profalux Visio via notre configurateur simple, rapide mais surtout à un tarif incomparable.</div>'+ 
'                  <div style="text-align: left;">Le <strong>volet roulant rénovation</strong>  est le <strong>volet'+ 
'                          roulant'+ 
'                          électrique</strong> le plus connu du grand public. De la gamme Visio, ce volet roulant vous offre un confort exceptionnel, tout en mettant l\'accent sur un design raffiné et discret.</div>'+ 
'                  <div style="text-align: left;">La première option à choisir est le type de pose du volet roulant, selon votre habitat. Vous pouvez opter pour un <strong>volet roulant en applique</strong>, ou un <strong>volet'+ 
'                          roulant sous'+ 
'                          linteau</strong>…</div>'+ 
'                  <div style="text-align: left;">Vous pouvez choisir le type de lames de votre volet roulant : choisissez un'+ 
'                      <strong>volet roulant pvc</strong>, ou un <strong>volet roulant aluminium</strong>'+ 
'                  </div>'+ 
'                  <div style="text-align: left;">Choisissez également votre coloris de volet roulant, en choisissant un volet roulant blanc, un <strong>volet roulant gris anthracite</strong>, ou un <strong>volet roulant'+ 
'                          marron</strong></div>'+ 
'                  <div style="text-align: left;">En choisissant librement vos <strong>dimensions de volet'+ 
'                          roulant</strong>, vous pouvez aussi bien opter pour un <strong>volet roulant grande largeur</strong> ou un <strong>petit'+ 
'                          volet'+ 
'                          roulant</strong>.</div>'+ 
'                  <div style="text-align: left;">Le <strong>volet roulant Visio</strong> est le <strong>volet roulant sur'+ 
'                          mesure</strong> qui offre une <strong>dimension coffre volet roulant</strong> bien plus réduite que la normale, pour permettre plus de luminosité, pour prendre moins de place. On a au final un'+ 
'                      <strong>volet roulant'+ 
'                          rénovation faible encombrement</strong></div>'+ 
'                  <div style="text-align: left;">Une des options essentielles à vérifier est le moteur de votre'+ 
'                      <strong>volet roulant'+ 
'                          motorisé</strong> : vous pouvez opter pour un moteur Profalux ou un moteur Somfy, et vous obtiendrez donc un'+ 
'                      <strong>volet roulant Profalux</strong> ou un <b>volet roulant électrique somfy</b>.'+ 
'                  </div>'+ 
'                  <div style="text-align: left;">Le type de motorisation définira donc votre type de volet roulant : selon votre besoin, optez pour un <strong>volet roulant radio</strong> ou un <strong>volet roulant'+ 
'                          filaire</strong>.</div>'+ 
'                  <div style="text-align: left;">Enfin, afin de concevoir le <strong>volet roulant connecté</strong>, nous vous proposons en accessoire de nombreuses box domotiques, telles que box tahoma, ou la box connexoon.'+ 
'                  </div>'+ 
'              </div>'+ 
'          </div>'+ 
'      </div>'+ 
'  </div>'+ 
'  <div class="eg-benchmark">'+ 
'      <div class="container-bob">'+ 
'          <div class="row">'+ 
'              <div class="eg-benchmark-section col-12">'+ 
'                  <div class="left-section">'+ 
'                      <h2 class="eg-benchmark-heading">Le <strong>volet roulant rénovation</strong> de référence</h2>'+ 
'                      <p class="eg-benchmark-para">Délai de livraison moyen : 3 semaines<br>Avec le plus petit caisson de sa catégorie, le <strong>volet roulant rénovation</strong> Profalux Visio est devenu la référence du volet roulant en rénovation<br>Il a été vendu à plus d\'un million'+ 
'                          d’exemplaires !'+ 
'                      </p>'+ 
'                      <ul>'+ 
'                          <li>'+ 
'                              <span class="eg-icon"><i class="fa fa-check"></i></span>'+ 
'                              <div class="eg-bench-text">'+ 
'                                  <p><strong>Volet roulant esthétique et discret</strong></p>'+ 
'                                  <p><em>L’emprise sur la fenêtre et le vitrage se trouve réduite au minimum : caisson'+ 
'                                          extérieur, coulisses de faible profondeur, lame finale qui s’escamote…</em></p>'+ 
'                              </div>'+ 
'                          </li>'+ 
'                          <li>'+ 
'                              <span class="eg-icon"><i class="fa fa-check"></i></span>'+ 
'                              <div class="eg-bench-text">'+ 
'                                  <p><strong>Design soigné et moderne</strong></p>'+ 
'                                  <p><em>Douceur et intégration sont privilégiées avec des angles arrondis et des lignes'+ 
'                                          fluides.</em></p>'+ 
'                              </div>'+ 
'                          </li>'+ 
'                      </ul>'+ 
'                  </div>'+ 
'                  <div class="right-section">'+ 
'                      <div class="eg-benchmark-img">'+ 
'                          <img data-src="https://clic-volet.fr/img/cms/Configs/Visio/Description/volet-de-base-1-min.jpg" alt="" class=" lazyloaded" src="https://clic-volet.fr/img/cms/Configs/Visio/Description/volet-de-base-1-min.jpg">'+ 
'                      </div>'+ 
'                  </div>'+ 
'              </div>'+ 
'          </div>'+ 
'      </div>'+ 
'  </div>';

		function init() {
		
			document.querySelector('.catalog-product-view-configurateur-widgets').insertAdjacentHTML('beforebegin', egNewSection);
		}

		
		/* Initialise variation */
		waitForElement(".catalog-product-view-configurateur-widgets", init, 50, 15000);
	} catch (e) {
		if (debug) console.log(e, "error in Test" + variation_name);
	}
})();
