(function () {
  try {
    /* main variables */
    var debug = 0;
    var variation_name = "";
    var LORData = {
      "en": {
        VideoCopy: {
          Heading: "What is </br> Lookiero?",
          Bullets: [" You'll be assigned a Personal Shopper who will work with you through every step of your style journey.",
            "Each box contains 5 hand-picked items tailored to you style, bosy and budget.", "You've already for a £10 credit to get started!"],
          CTA: "CREATE YOUR PROFILE",
          videoURL: "https://cfactory-img.s3.amazonaws.com/LOR/4.1/Katie%20Masters_4x5_UK.mp4"
        },
        How: {
          SubHeading: "Start your style journey with three simple steps."
        },
        Influencer: {
          Heading: "A world of style is yours",
          SubHeading: "Confidence. Inspiration. Freedom. See what style is sparking in over two million women.",
        },
        Footer: {
          FollowUs: "FOLLOW US",
          FB: "https://www.facebook.com/LookieroUK/",
          Instagram: "https://www.instagram.com/Lookiero_uk/",
          Pinterest: "https://www.pinterest.co.uk/lookiero_uk/",
          Twitter: "https://twitter.com/Lookiero_uk"
        }
      },
      "fr": {
        VideoCopy: {
          Heading: "What is </br> Lookiero?",
          Bullets: ["Nous allons vous attribuer un ou une Personal Shopper, qui vous accompagnera à chaque étape de cette aventure à la découverte de votre style.",
            "Chaque box contient 5 articles, choisis spécialement pour vous, selon votre style, votre physionomie et votre budget.",
            "Vous bénéficiez déjà de 10€ de crédit pour démarrer l'aventure !"],
          CTA: "CRÉER VOTRE PROFIL",
          videoURL: "https://cfactory-img.s3.amazonaws.com/LOR/4.1/lro/Carla%20Masters_4x5_FR_V1.mp4"
        },
        How: {
          SubHeading: "Explorez votre style en trois étapes."
        },
        Influencer: {
          Heading: "La mode à votre portée",
          SubHeading: "Découvrez comment nous avons inspiré plus de deux millions de femmes.",
        },
        Footer: {
          FollowUs: "SUIVEZ-NOUS",
          FB: "https://www.facebook.com/LookieroFr/",
          Instagram: "https://www.instagram.com/Lookiero_fr/",
          Pinterest: "https://www.pinterest.fr/lookiero_fr/",
          Twitter: "https://twitter.com/Lookiero_fr"
        }
      },
      "es": {
        VideoCopy: {
          Heading: "What is </br> Lookiero?",
          Bullets: ["Te asignaremos una Personal Shopper que trabajará contigo en cada paso que des en tu aventura de estilo.",
            "Cada caja contiene 5 artículos seleccionados y adaptados a tu estilo, morfología y presupuesto.",
            "Para empezar, ¡ya tienes 10€ de saldo!"],
          CTA: "CREA TU PERFIL",
          videoURL: "https://cfactory-img.s3.amazonaws.com/LOR/4.1/lro/Sheila%20Masters_4x5_ES_V1.mp4"
        },
        How: {
          SubHeading: "Explora tu estilo en tres simples pasos."
        },
        Influencer: {
          Heading: "Un mundo de estilo a tus pies",
          SubHeading: "Descubre cómo hemos inspirado a más de dos millones de mujeres.",
        },
        Footer: {
          FollowUs: "SÍGUENOS",
          FB: "https://www.facebook.com/LookieroEs/",
          Instagram: "https://www.instagram.com/Lookiero_es/",
          Pinterest: "https://www.pinterest.es/lookiero_es/",
          Twitter: "https://twitter.com/Lookiero_es"
        }
      },
      "it": {
        VideoCopy: {
          Heading: "What is </br> Lookiero?",
          Bullets: ["Ti assegneremo una Personal Shopper che lavorerà con te in ogni passo della tua avventura di stile.",
            "Ogni scatola contiene 5 capi, scelti appositamente per te, secondo il tuo stile, la tua fisionomia e la tua fascia di prezzo.",
            "Hai già 10€ di credito per iniziare l'avventura!"],
          CTA: "CREA IL TUO PROFILO",
          videoURL: "https://cfactory-img.s3.amazonaws.com/LOR/4.1/lro/GIULIA%20Masters_4x5_IT.mp4"
        },
        How: {
          SubHeading: "Inizia il tuo viaggio nella moda con tre semplici passi."
        },
        Influencer: {
          Heading: "Un mondo di stile ai tuoi piedi",
          SubHeading: "Scopri come abbiamo ispirato più di due milioni di donne.",
        },
        Footer: {
          FollowUs: "SEGUICI",
          FB: "https://www.facebook.com/LookieroIt/",
          Instagram: "https://www.instagram.com/Lookiero_it/",
          Pinterest: "https://www.pinterest.it/lookiero_it/",
          Twitter: "https://twitter.com/Lookiero_it"
        }
      },
      "pt": {
        VideoCopy: {
          Heading: "What is </br> Lookiero?",
          Bullets: ["Vamos atribuir-te uma Personal Shopper que vai trabalhar contigo em cada passo da tua aventura de estilo.",
            "Cada caixa contém 5 artigos selecionados e adaptados ao teu estilo, morfologia e orçamento.",
            "Para começar, já tens 10€ de saldo!"],
          CTA: "CRIA O TEU PERFIL",
          videoURL: "https://cfactory-img.s3.amazonaws.com/LOR/4.1/Katie%20Masters_4x5_UK.mp4"
        },
        How: {
          SubHeading: "Descobre o teu estilo em três simples passos."
        },
        Influencer: {
          Heading: "O mundo da moda a teus pés",
          SubHeading: "Descobre como inspirámos mais de dois milhões de mulheres.",
        },
        Footer: {
          FollowUs: "SIGA-NOS",
          FB: "https://www.facebook.com/LookieroPt/",
          Instagram: "https://www.instagram.com/Lookiero_pt/",
          Pinterest: "https://www.pinterest.pt/lookiero_pt/",
          Twitter: "https://twitter.com/Lookiero_pt"
        }
      }
    }
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
     //wait for dataLayer
     function doWhenDataLayerLoaded(todoWhenLoaded) {
      var dlInterval = setInterval(function () {
        if (window && window.dataLayer) {
          clearInterval(dlInterval);
          todoWhenLoaded();
        }
      }, 50);
      setTimeout(function () {
        clearInterval(dlInterval);
      }, 5000);
    }
    function onLoadSwiper(trigger, delayInterval, delayTimeout) {
      var interval = setInterval(function () {
        if (window.Swiper) {
          clearInterval(interval);
          trigger();
        }
      }, delayInterval);
      setTimeout(function () {
        clearInterval(interval);
      }, delayTimeout);
    }
 //dataLayer helper
 var g = /\[object (Boolean|Number|String|Function|Array|Date|RegExp)\]/; function h(a) { return null == a ? String(a) : (a = g.exec(Object.prototype.toString.call(Object(a)))) ? a[1].toLowerCase() : "object" } function k(a, b) { return Object.prototype.hasOwnProperty.call(Object(a), b) } function m(a) { if (!a || "object" != h(a) || a.nodeType || a == a.window) return !1; try { if (a.constructor && !k(a, "constructor") && !k(a.constructor.prototype, "isPrototypeOf")) return !1 } catch (b) { return !1 } for (var c in a); return void 0 === c || k(a, c) };/*
 Copyright 2012 Google Inc. All rights reserved. */
   function n(a, b, c) {
     this.b = a; this.f = b || function () { }; this.d = !1; this.a = {}; this.c = []; this.e = p(this); r(this, a, !c);
     if (typeof a == "undefined") { return true; };
     var d = a.push, e = this; a.push = function () { var b = [].slice.call(arguments, 0), c = d.apply(a, b); r(e, b); return c }
   } window.DataLayerHelper = n; n.prototype.get = function (a) { var b = this.a; a = a.split("."); for (var c = 0; c < a.length; c++) { if (void 0 === b[a[c]]) return; b = b[a[c]] } return b }; n.prototype.flatten = function () { this.b.splice(0, this.b.length); this.b[0] = {}; s(this.a, this.b[0]) };
   function r(a, b, c) { for (a.c.push.apply(a.c, b); !1 === a.d && 0 < a.c.length;) { b = a.c.shift(); if ("array" == h(b)) a: { var d = b, e = a.a; if ("string" == h(d[0])) { for (var f = d[0].split("."), u = f.pop(), d = d.slice(1), l = 0; l < f.length; l++) { if (void 0 === e[f[l]]) break a; e = e[f[l]] } try { e[u].apply(e, d) } catch (v) { } } } else if ("function" == typeof b) try { b.call(a.e) } catch (w) { } else if (m(b)) for (var q in b) s(t(q, b[q]), a.a); else continue; c || (a.d = !0, a.f(a.a, b), a.d = !1) } }
   function p(a) { return { set: function (b, c) { s(t(b, c), a.a) }, get: function (b) { return a.get(b) } } } function t(a, b) { for (var c = {}, d = c, e = a.split("."), f = 0; f < e.length - 1; f++)d = d[e[f]] = {}; d[e[e.length - 1]] = b; return c } function s(a, b) { for (var c in a) if (k(a, c)) { var d = a[c]; "array" == h(d) ? ("array" == h(b[c]) || (b[c] = []), s(d, b[c])) : m(d) ? (m(b[c]) || (b[c] = {}), s(d, b[c])) : b[c] = d } };


    var egHeroImageDesktop = '' +
      '<img class="image" alt="" src="https://cfactory-img.s3.amazonaws.com/LOR/0.1/imgD.png 1x, https://cfactory-img.s3.amazonaws.com/LOR/0.1/imgD.png 2x ">'

    var egHeroImageMobile = '' +
      '<img class="image" alt="" src="https://cfactory-img.s3.amazonaws.com/LOR/0.1/img-m.png 1x, https://cfactory-img.s3.amazonaws.com/LOR/0.1/img-m.png 2x ">'

    /* Variation Init */
    function init() {
      document.body.classList.add('lor0-1-refer');
      var lang = document.querySelector('html').getAttribute('lang');
      var influencersSlider = generateSlider(LORData[lang].Influencer);
      var footerSection = generateFooter(LORData[lang].Footer);
      var videoSection = generateVideo(LORData[lang].VideoCopy);
      var egWorkSubheading = generateHowItWorks(LORData[lang].How);
      //Swiper Slider
      var Script = document.createElement('script');
      Script.src = 'https://unpkg.com/swiper/swiper-bundle.min.js';
      document.getElementsByTagName('head')[0].appendChild(Script);


      /* start your code here */
      // document.querySelector('.join-in__base .text.heading').innerHTML = 'Sign up for Lookiero and receive £10 credit.';

      //document.querySelector('.join-in__base .view.layout:nth-child(2) .text.body').innerHTML = 'Lookiero is the best way to keep up with the latest style thanks to advice from our Personal Shoppers. </br>*Offer valid throught 28 Feb.';

      var HeadingText = document.querySelectorAll('.how-it-works__base > div > div:nth-child(2) div.view.box');
      HeadingText.forEach(function (val) {
        insertBefore(val.querySelector('.heading').parentElement, val.querySelector('span.body').parentElement);
      });

      function insertBefore(beforeElement, targetElement) {
        targetElement.parentNode.insertBefore(beforeElement, targetElement);
      }
      //document.querySelector('.how-it-works__base .view.layout.full-width .text.heading.level-2').innerHTML = "How it works";

      document.querySelector('.how-it-works__base .view.layout.full-width').insertAdjacentHTML('afterend', egWorkSubheading)

      if (window.screen.width >= 600) {
        document.querySelector('.join-in__base .join-in__media .view.box').innerHTML = egHeroImageDesktop;
      } else {
        document.querySelector('.join-in__base .join-in__media .view.box ').innerHTML = egHeroImageMobile;
      }

      window.addEventListener('resize', function () {
        if (window.screen.width >= 600) {
          document.querySelector('.join-in__base .join-in__media .view.box ').innerHTML = egHeroImageDesktop;
        } else {
          document.querySelector('.join-in__base .join-in__media .view.box').innerHTML = egHeroImageMobile;
        }
      });

      document.querySelector('.how-it-works__base').insertAdjacentHTML('beforebegin', videoSection);

      //for video 
      document.querySelector('.LOR0-1-image-outer img').addEventListener('click', function () {
        document.querySelector('.LOR0-1-image-outer').classList.add('LOR0-1-video-show');
        document.querySelector('.LOR0-1-image-outer video').play();
      });

      document.querySelector('.LOR0-1-video-text .LOR0-1-button').addEventListener('click', function () {
        document.querySelector('.view.join-in__content button.button').click();
      });


      document.querySelector('section.how-it-works__base').insertAdjacentHTML('afterend', influencersSlider + footerSection);
      onLoadSwiper(function () {
        var swiper = new Swiper(".swiper-container", {
          spaceBetween: 30,
          slidesPerView: 'auto',
          visibilityFullFit: true,
          autoResize: false,
        });
      }, 50, 5000);

    }
    function generateSlider(data) {
      var egSlider = '' +
        '  <section class="LOR0-1-influencers layout influencers-layout full-width justifyContentCenter paddingTopLayoutL wide" align="center" id="influencers">' +
        '      <div class="wide">' +
        '          <div class="layout L justifyContentCenter wide">' +
        '              <div class="box marginBottomLayoutXS wide">' +
        '                  <h2 class="text heading level-2 textAlignCenter">' + data.Heading + '</h2>' +
        '              </div>' +
        '          </div>' +
        '          <div class="layout L justifyContentCenter marginBottomLayoutS wide">' +
        '              <div class="box two-third wide">' +
        '                  <p class="text body level-2 textAlignCenter">' + data.SubHeading + '</p>' +
        '              </div>' +
        '          </div>' +
        '          <div class="layout influencers-slider full-width justifyContentBetween wide">' +
        '              <div class="swiper-container swiper-container-initialized swiper-container-horizontal swiper-container-pointer-events" style="cursor: grab;">' +
        '                  <div class="swiper-wrapper">' +
        '                      <div class="swiper-slide" style="margin-right: 48px;">' +
        '                          <div class="influencers-slider__header"><img class="image displayBlock" alt="" src="https://cdn.prod.envs.lookiero.tech/usf/images/influencers/desktop/avatars/01_mademoisellemodeuse.jpg" srcset="https://cdn.prod.envs.lookiero.tech/usf/images/influencers/desktop/avatars/01_mademoisellemodeuse.jpg 1x, https://cdn.prod.envs.lookiero.tech/usf/images/influencers/desktop/avatars/01_mademoisellemodeuse@2x.jpg 2x">' +
        '                              <strong' +
        '                                  class="text detail level-2">mademoisellemodeuse</strong>' +
        '                          </div><img class="image displayBlock" alt="" src="https://cdn.prod.envs.lookiero.tech/usf/images/influencers/desktop/photos/01_mademoisellemodeuse.jpg" srcset="https://cdn.prod.envs.lookiero.tech/usf/images/influencers/desktop/photos/01_mademoisellemodeuse.jpg 1x, https://cdn.prod.envs.lookiero.tech/usf/images/influencers/desktop/photos/01_mademoisellemodeuse@2x.jpg 2x">' +
        '                      </div>' +
        '                      <div class="swiper-slide" style="margin-right: 48px;">' +
        '                          <div class="influencers-slider__header"><img class="image displayBlock" alt="" src="https://cdn.prod.envs.lookiero.tech/usf/images/influencers/desktop/avatars/02_lglora.jpg" srcset="https://cdn.prod.envs.lookiero.tech/usf/images/influencers/desktop/avatars/02_lglora.jpg 1x, https://cdn.prod.envs.lookiero.tech/usf/images/influencers/desktop/avatars/02_lglora@2x.jpg 2x">' +
        '                              <strong' +
        '                                  class="text detail level-2">lglora</strong>' +
        '                          </div><img class="image displayBlock" alt="" src="https://cdn.prod.envs.lookiero.tech/usf/images/influencers/desktop/photos/02_lglora.jpg" srcset="https://cdn.prod.envs.lookiero.tech/usf/images/influencers/desktop/photos/02_lglora.jpg 1x, https://cdn.prod.envs.lookiero.tech/usf/images/influencers/desktop/photos/02_lglora@2x.jpg 2x">' +
        '                      </div>' +
        '                      <div class="swiper-slide" style="margin-right: 48px;">' +
        '                          <div class="influencers-slider__header"><img class="image displayBlock" alt="" src="https://cdn.prod.envs.lookiero.tech/usf/images/influencers/desktop/avatars/03_manguepoudree.jpg" srcset="https://cdn.prod.envs.lookiero.tech/usf/images/influencers/desktop/avatars/03_manguepoudree.jpg 1x, https://cdn.prod.envs.lookiero.tech/usf/images/influencers/desktop/avatars/03_manguepoudree@2x.jpg 2x">' +
        '                              <strong' +
        '                                  class="text detail level-2">manguepoudree</strong>' +
        '                          </div><img class="image displayBlock" alt="" src="https://cdn.prod.envs.lookiero.tech/usf/images/influencers/desktop/photos/03_manguepoudree.jpg" srcset="https://cdn.prod.envs.lookiero.tech/usf/images/influencers/desktop/photos/03_manguepoudree.jpg 1x, https://cdn.prod.envs.lookiero.tech/usf/images/influencers/desktop/photos/03_manguepoudree@2x.jpg 2x">' +
        '                      </div>' +
        '                      <div class="swiper-slide" style="margin-right: 48px;">' +
        '                          <div class="influencers-slider__header"><img class="image displayBlock" alt="" src="https://cdn.prod.envs.lookiero.tech/usf/images/influencers/desktop/avatars/04_etdieucrea.jpg" srcset="https://cdn.prod.envs.lookiero.tech/usf/images/influencers/desktop/avatars/04_etdieucrea.jpg 1x, https://cdn.prod.envs.lookiero.tech/usf/images/influencers/desktop/avatars/04_etdieucrea@2x.jpg 2x">' +
        '                              <strong' +
        '                                  class="text detail level-2">etdieucrea</strong>' +
        '                          </div><img class="image displayBlock" alt="" src="https://cdn.prod.envs.lookiero.tech/usf/images/influencers/desktop/photos/04_etdieucrea.jpg" srcset="https://cdn.prod.envs.lookiero.tech/usf/images/influencers/desktop/photos/04_etdieucrea.jpg 1x, https://cdn.prod.envs.lookiero.tech/usf/images/influencers/desktop/photos/04_etdieucrea@2x.jpg 2x">' +
        '                      </div>' +
        '                      <div class="swiper-slide" style="margin-right: 48px;">' +
        '                          <div class="influencers-slider__header"><img class="image displayBlock" alt="" src="https://cdn.prod.envs.lookiero.tech/usf/images/influencers/desktop/avatars/05_poupeerousse.jpg" srcset="https://cdn.prod.envs.lookiero.tech/usf/images/influencers/desktop/avatars/05_poupeerousse.jpg 1x, https://cdn.prod.envs.lookiero.tech/usf/images/influencers/desktop/avatars/05_poupeerousse@2x.jpg 2x">' +
        '                              <strong' +
        '                                  class="text detail level-2">poupeerousse</strong>' +
        '                          </div><img class="image displayBlock" alt="" src="https://cdn.prod.envs.lookiero.tech/usf/images/influencers/desktop/photos/05_poupeerousse.jpg" srcset="https://cdn.prod.envs.lookiero.tech/usf/images/influencers/desktop/photos/05_poupeerousse.jpg 1x, https://cdn.prod.envs.lookiero.tech/usf/images/influencers/desktop/photos/05_poupeerousse@2x.jpg 2x">' +
        '                      </div>' +
        '                      <div class="swiper-slide" style="margin-right: 48px;">' +
        '                          <div class="influencers-slider__header"><img class="image displayBlock" alt="" src="https://cdn.prod.envs.lookiero.tech/usf/images/influencers/desktop/avatars/06_myblondestyle.jpg" srcset="https://cdn.prod.envs.lookiero.tech/usf/images/influencers/desktop/avatars/06_myblondestyle.jpg 1x, https://cdn.prod.envs.lookiero.tech/usf/images/influencers/desktop/avatars/06_myblondestyle@2x.jpg 2x">' +
        '                              <strong' +
        '                                  class="text detail level-2">myblondestyle</strong>' +
        '                          </div><img class="image displayBlock" alt="" src="https://cdn.prod.envs.lookiero.tech/usf/images/influencers/desktop/photos/06_myblondestyle.jpg" srcset="https://cdn.prod.envs.lookiero.tech/usf/images/influencers/desktop/photos/06_myblondestyle.jpg 1x, https://cdn.prod.envs.lookiero.tech/usf/images/influencers/desktop/photos/06_myblondestyle@2x.jpg 2x">' +
        '                      </div>' +
        '                      <div class="swiper-slide" style="margin-right: 48px;">' +
        '                          <div class="influencers-slider__header"><img class="image displayBlock" alt="" src="https://cdn.prod.envs.lookiero.tech/usf/images/influencers/desktop/avatars/07_fashionvitaminsantwerp.jpg" srcset="https://cdn.prod.envs.lookiero.tech/usf/images/influencers/desktop/avatars/07_fashionvitaminsantwerp.jpg 1x, https://cdn.prod.envs.lookiero.tech/usf/images/influencers/desktop/avatars/07_fashionvitaminsantwerp@2x.jpg 2x">' +
        '                              <strong' +
        '                                  class="text detail level-2">fashionvitaminsantwerp</strong>' +
        '                          </div><img class="image displayBlock" alt="" src="https://cdn.prod.envs.lookiero.tech/usf/images/influencers/desktop/photos/07_fashionvitaminsantwerp.jpg" srcset="https://cdn.prod.envs.lookiero.tech/usf/images/influencers/desktop/photos/07_fashionvitaminsantwerp.jpg 1x, https://cdn.prod.envs.lookiero.tech/usf/images/influencers/desktop/photos/07_fashionvitaminsantwerp@2x.jpg 2x">' +
        '                      </div>' +
        '                      <div class="swiper-slide" style="margin-right: 48px;">' +
        '                          <div class="influencers-slider__header"><img class="image displayBlock" alt="" src="https://cdn.prod.envs.lookiero.tech/usf/images/influencers/desktop/avatars/08_elenavidalrod.jpg" srcset="https://cdn.prod.envs.lookiero.tech/usf/images/influencers/desktop/avatars/08_elenavidalrod.jpg 1x, https://cdn.prod.envs.lookiero.tech/usf/images/influencers/desktop/avatars/08_elenavidalrod@2x.jpg 2x">' +
        '                              <strong' +
        '                                  class="text detail level-2">elenavidalrod</strong>' +
        '                          </div><img class="image displayBlock" alt="" src="https://cdn.prod.envs.lookiero.tech/usf/images/influencers/desktop/photos/08_elenavidalrod.jpg" srcset="https://cdn.prod.envs.lookiero.tech/usf/images/influencers/desktop/photos/08_elenavidalrod.jpg 1x, https://cdn.prod.envs.lookiero.tech/usf/images/influencers/desktop/photos/08_elenavidalrod@2x.jpg 2x">' +
        '                      </div>' +
        '                      <div class="swiper-slide" style="margin-right: 48px;">' +
        '                          <div class="influencers-slider__header"><img class="image displayBlock" alt="" src="https://cdn.prod.envs.lookiero.tech/usf/images/influencers/desktop/avatars/09_laura.jpg" srcset="https://cdn.prod.envs.lookiero.tech/usf/images/influencers/desktop/avatars/09_laura.jpg 1x, https://cdn.prod.envs.lookiero.tech/usf/images/influencers/desktop/avatars/09_laura@2x.jpg 2x">' +
        '                              <strong' +
        '                                  class="text detail level-2">laura.miola</strong>' +
        '                          </div><img class="image displayBlock" alt="" src="https://cdn.prod.envs.lookiero.tech/usf/images/influencers/desktop/photos/09_laura.jpg" srcset="https://cdn.prod.envs.lookiero.tech/usf/images/influencers/desktop/photos/09_laura.jpg 1x, https://cdn.prod.envs.lookiero.tech/usf/images/influencers/desktop/photos/09_laura@2x.jpg 2x">' +
        '                      </div>' +
        '                      <div class="swiper-slide" style="margin-right: 48px;">' +
        '                          <div class="influencers-slider__header"><img class="image displayBlock" alt="" src="https://cdn.prod.envs.lookiero.tech/usf/images/influencers/desktop/avatars/10_mrsmlmode.jpg" srcset="https://cdn.prod.envs.lookiero.tech/usf/images/influencers/desktop/avatars/10_mrsmlmode.jpg 1x, https://cdn.prod.envs.lookiero.tech/usf/images/influencers/desktop/avatars/10_mrsmlmode@2x.jpg 2x">' +
        '                              <strong' +
        '                                  class="text detail level-2">mrsmlmode</strong>' +
        '                          </div><img class="image displayBlock" alt="" src="https://cdn.prod.envs.lookiero.tech/usf/images/influencers/desktop/photos/10_mrsmlmode.jpg" srcset="https://cdn.prod.envs.lookiero.tech/usf/images/influencers/desktop/photos/10_mrsmlmode.jpg 1x, https://cdn.prod.envs.lookiero.tech/usf/images/influencers/desktop/photos/10_mrsmlmode@2x.jpg 2x">' +
        '                      </div>' +
        '                  </div>' +
        '              </div>' +
        '          </div>' +
        '      </div>' +
        '  </section>';
      return egSlider;
    }
    function generateFooter(data) {
      var footer = '  <footer class="LOR0-1-footer footer-home marginTopLayoutL paddingTopLayoutM">' +
        '      <aside class="layout follow-us L flexDirectionColumn justifyContentBetween marginBottomLayoutL wide" align="center">' +
        '          <h3 class="text action level-3 marginBottomLayoutM upperCase textAlignCenter">' + data.FollowUs + '</h3>' +
        '          <nav class="follow-us__links">' +
        '              <a class="text body level-3 link colorContent displayBlock" target="_blank" rel="noopener noreferrer" aria-label="facebook" href="' + data.FB + '"><img src="https://cdn.prod.envs.lookiero.tech/commons/icons/social-facebook.svg"></a>' +
        '              <a class="text body level-3 link colorContent displayBlock marginLeftLayoutM" target="_blank" rel="noopener noreferrer" aria-label="instagram" href="' + data.Instagram + '"><img src="https://cdn.prod.envs.lookiero.tech/commons/icons/social-instagram.svg"></a>' +
        '              <a class="text body level-3 link colorContent displayBlock marginLeftLayoutM" target="_blank" rel="noopener noreferrer" aria-label="pinterest" href="' + data.Pinterest + '"><img src="https://cdn.prod.envs.lookiero.tech/commons/icons/social-pinterest.svg"></a>' +
        '              <a class="text body level-3 link colorContent displayBlock marginLeftLayoutM" target="_blank" rel="noopener noreferrer" aria-label="twitter" href="' + data.Twitter + '"><img src="https://cdn.prod.envs.lookiero.tech/commons/icons/social-twitter.svg"></a>' +
        '          </nav>' +
        '      </aside>' +
        '      <p class="text detail level-3 footer-copy upperCase textAlignCenter">© 2021 Lookiero</p>' +
        '  </footer>';
      return footer;
    }
    function generateHowItWorks(data) {
      var egWorkSubheading = '<div class="LOR0-1-how-subhead layout full-width justifyContentCenter marginBottomLayoutS wide"><div class="box one-third wide"><p class="text body level-2 textAlignCenter">' + data.SubHeading + '</p></div></div>';
      return egWorkSubheading;
    }
    function generateVideo(data) {
      var bulletStr = ''
      data.Bullets.forEach(function (bullet) {
        bulletStr += ' <p class="LOR0-1-subheading text body level-3 textAlignCenter marginTopLayoutS"><img src="https://cfactory-img.s3.amazonaws.com/LOR/4.1/lro/Group__6.png"> ' + bullet + '</p>';
      })
      var egVideocontainer = '' +
        '  <div class="LOR0-1-video-section full-width justifyContentCenter marginTopLayoutL wide view layout">' +
        '      <aside class="LOR0-1-video-image">' +
        '              <h2 class="LOR0-1-video-heading text heading">' + data.Heading + '</h2>' +
        '      <div class="LOR0-1-video-image-inr">' +
        '      <div class="LOR0-1-image-outer">' +
        '          <img class="image" alt="Woman" src="https://cfactory-img.s3.amazonaws.com/LOR/4.1/lro/Group_22.png" srcset="https://cfactory-img.s3.amazonaws.com/LOR/4.1/lro/Group_22.png">' +
        '         <video width="541" controls>' +
        '           <source src="' + data.videoURL + '" type="video/mp4">' +
        '         </video>' +
        '      </div>' +
        '      </div>' +
        '      </aside>' +
        '      <div class="LOR0-1-video-content">' +
        '          <div class="LOR0-1-video-text">' +
        '              <h2 class="LOR0-1-video-heading text heading">' + data.Heading + '</h2>' + bulletStr +
        '              <button class="LOR0-1-button">Create your Profile</button>' +
        '          </div>' +
        '      </div>' +
        '  </div>';
      return egVideocontainer;
    }
    //dataLayer initialize
    function dataLayerInit() {
      //data layer listener 
      var cdDataLayerListener = function (model, message) {
        //check the style page is current page 
        if (message.event == "pageview" && message["section"] == "quiz_leisure") {
          revertChnages();
        }
        if (message.event == "pageview" && message["section"] == "referral_landing") {
          waitForElement('html[lang]:not([lang=""]) body section.how-it-works__base', init, 250, 25000);
        }

      }
      //dataLayer instance created 
      var cdDataLayerHelper = new DataLayerHelper(
        window.dataLayer,
        cdDataLayerListener,
        true
      );
    }
    function revertChnages(){
      removeElement(document.querySelector('.LOR0-1-video-section'));
      removeElement(document.querySelector('.LOR0-1-footer'));
      removeElement(document.querySelector('.LOR0-1-influencers'));
      removeElement(document.querySelector('.LOR0-1-how-subhead'));
      document.body.classList.remove('lor0-1-refer');
    }
    function removeElement(ele){
 if(ele){
   ele.remove();
 }
    }

    //add swiper script
    function addScript() {
      var cdScript = document.createElement('script');
      cdScript.src = 'https://unpkg.com/swiper/swiper-bundle.min.js';
      document.getElementsByTagName('head')[0].appendChild(bmScript);
    }
    addScript();
    /* Initialise variation */
   // waitForElement('html[lang]:not([lang=""]) body section.how-it-works__base', init, 250, 25000);
    doWhenDataLayerLoaded(dataLayerInit)
  } catch (e) {
    if (debug) console.log(e, "error in Test" + variation_name);
  }
})();

