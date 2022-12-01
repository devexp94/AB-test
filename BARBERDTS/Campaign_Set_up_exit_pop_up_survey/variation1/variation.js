(function() {
    try {
        /* main variables */
        var debug = 0;
        var variation_name = '';

        var langData = {
            FR: {
                copyPlace: 'Votre réponse...',
                copy1: "Qu'est-ce qui vous empêche d'acheter sur notre site?",
                copy2: 'Merci pour votre participation',
                copy3: 'Soumettre',
            },
            EN: {
                copyPlace: 'Your answer...',
                copy1: 'What stopped you from buying with us today?',
                copy2: 'Thank you for your participation',
                copy3: 'Submit',
            },
            DE: {
                copyPlace: 'Deine Antwort...',
                copy1: 'Was hat dich davon abgehalten, heute bei uns zu kaufen?',
                copy2: 'Vielen Dank für Ihre Teilnahme',
                copy3: 'Einreichen',
            },
            NL: {
                copyPlace: 'Uw antwoord...',
                copy1: 'Waarom ben je gestopt met bestellen vandaag?',
                copy2: 'Bedankt voor uw deelname',
                copy3: 'Indienen',
            },
            ES: {
                copyPlace: 'Tu respuesta...',
                copy1: '¿Qué te impidió comprar con nosotros hoy?',
                copy2: 'Gracias por su participación',
                copy3: 'Enviar',
            },
            IT: {
                copyPlace: 'La tua risposta...',
                copy1: "Cosa ti ha fermato nell'acquistare con noi oggi?",
                copy2: 'Grazie per la tua partecipazione',
                copy3: 'Invia',
            },
            PL: {
                copyPlace: 'Twoja odpowiedź...',
                copy1: 'Co powstrzymało Cię przed dokonaniem zakupu w naszej firmie dzisiaj?',
                copy2: 'Dziękuję za udział',
                copy3: 'Składać',
            },

            SE: {
                copyPlace: 'Ditt svar...',
                copy1: 'Vad hindrade dig från att handla från oss idag?',
                copy2: 'Tack för ditt deltagande',
                copy3: 'Skicka in',
            },
        };

        /* all Pure helper functions */

        var waitForElement = function(selector, trigger, delayInterval, delayTimeout) {
            var interval = setInterval(function() {
                if (document && document.querySelector(selector) && document.querySelectorAll(selector).length > 0) {
                    clearInterval(interval);
                    trigger();
                }
            }, delayInterval);
            setTimeout(function() {
                clearInterval(interval);
            }, delayTimeout);
        };

        var live = function(selector, event, callback, context) {
            // helper for enabling IE 8 event bindings
            function addEvent(el, type, handler) {
                if (el.attachEvent) el.attachEvent('on' + type, handler);
                else el.addEventListener(type, handler);
            }
            // matches polyfill
            this &&
                this.Element &&
                (function(ElementPrototype) {
                    ElementPrototype.matches =
                        ElementPrototype.matches ||
                        ElementPrototype.matchesSelector ||
                        ElementPrototype.webkitMatchesSelector ||
                        ElementPrototype.msMatchesSelector ||
                        function(selector) {
                            var node = this,
                                nodes = (node.parentNode || node.document).querySelectorAll(selector),
                                i = -1;
                            while (nodes[++i] && nodes[i] != node);
                            return !!nodes[i];
                        };
                })(Element.prototype);
            // live binding helper using matchesSelector
            function live(selector, event, callback, context) {
                addEvent(context || document, event, function(e) {
                    var found,
                        el = e.target || e.srcElement;
                    while (el && el.matches && el !== context && !(found = el.matches(selector))) el = el.parentElement;
                    if (found) callback.call(el, e);
                });
            }
            live(selector, event, callback, context);
        };

        var getCookie = function(name) {
            var nameEQ = name + '=';
            var ca = document.cookie.split(';');
            for (var i = 0; i < ca.length; i++) {
                var c = ca[i];
                while (c.charAt(0) == ' ') c = c.substring(1, c.length);
                if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
            }
            return null;
        };

        var setCookie = function(name, value, days) {
            var expires = '';
            if (days) {
                var date = new Date();
                date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
                expires = '; expires=' + date.toUTCString();
            }
            document.cookie = name + '=' + (value || '') + expires + '; path=/';
        };

        var formPopup =
            '' +
            '  <div class="eg-form-popup">' +
            '      <div class="eg-form-popup-inr">' +
            '          <div class="eg-form-container">' +
            '             <span class="eg-form-close">&times;</span>' +
            '             <form method="POST" class="edb-survey gf" id="edb-survey">' +
            '               <div id="step1" class="fg" ><label class="fl">Qu\'est-ce qui a failli vous empêcher d\'acheter sur notre site ?</label><textarea type="text" name="objection" placeholder="Votre réponse..." rows="4" class="fc"></textarea></div>' +
            '               <div class="edb-action" ><button class="edb-btn" id="close" >Terminer</button></div>' +
            '             </form>' +
            '             <p class="eg-thanks">Nous vous remercions pour votre participation</p>' +
            '          </div>' +
            '      </div>' +
            '  </div>';

        var offset;

        var createSession = function() {
            if (getCookie('firstVisit') == null) {
                setCookie('firstVisit', '1', 365);
            }
        };

        var hideForm = function() {
            createSession();
            document.querySelector('.eg-form-popup .eg-thanks').style.display = 'block';
        };

        var sendData = function(language, objection) {
            var url = 'https://script.google.com/macros/s/AKfycbzlkcuQu3jTLZyORHnzOALFQYn7J4it_9pAwy9RSB-caNbvXxd5iQHLTWU3RNMU21FtWQ/exec';

            var XHR = new XMLHttpRequest(),
                FD = new FormData();
            // Push our data into our FormData object
            FD.append('Language', language);
            FD.append('Objection', objection);
            XHR.onreadystatechange = function() {
                if (this.readyState == 4 && this.status == 200) {
                    // console.log('success');
                    // console.log(`message ${objection} language ${language}`)
                    document.querySelector('.eg-form-popup form').style.display = 'none';
                    hideForm();
                }
            };
            // Set up our request
            XHR.open('POST', url);
            // Send our FormData object; HTTP headers are set automatically
            XHR.send(FD);
        };
        var language = 'EN';
        var init = function() {
            // show form when user mouse out from current window
            document.querySelector('body footer').insertAdjacentHTML('afterend', formPopup);
            detectPopUpIntent();

            // setting cokkie for form
            setCookie('formShown', '2', 30);

            live('.eg-form-popup .eg-form-close', 'click', function() {
                createSession();
                document.querySelector('body').classList.add('form-popup-hide');
            });
            live('.eg-form-popup button', 'click', function(e) {
                e.preventDefault();
                var objection = document.querySelector('textarea[name="objection"]').value;
                //console.log(nps);
                sendData(language, objection);
            });

            changeContent();
        };

        // this peice of code detects popup intent on mobil
        var detectPopUpIntent = function() {
            if (getCookie('formShown') == null) {
                if (window.innerWidth > 767) {
                    // this event listener detects popup intent on browser
                    document.addEventListener("mouseout", function(e) {
                        if (e.toElement == null && e.relatedTarget == null) {
                            document.querySelector('.eg-form-popup').style.display = 'block';
                        }
                    });


                } else if (window.innerWidth < 768) {
                    // detect page bottom 
                    document.addEventListener("scroll", (e) => {
                        if (window.scrollY + window.innerHeight + 50 >= document.body.offsetHeight) {
                            document.querySelector('.eg-form-popup').style.display = 'block';
                            document.removeEventListener("scroll");
                        }
                    });
                }
            }
        }

        var changeCopyHandler = function(lang) {
            //console.log(lang, '>>>>');
            document.querySelector('.edb-survey .fg .fl').innerHTML = langData[lang].copy1;
            document.querySelector('.edb-survey .fg textarea').setAttribute('placeholder', langData[lang].copyPlace);
            document.querySelector('.edb-survey .edb-action #close').innerHTML = langData[lang].copy3;
            document.querySelector('.eg-form-popup .eg-thanks').innerHTML = langData[lang].copy2;
        }

        var changeContent = function() {
            console.log(window.location.href.indexOf('/fr/'));
            if (window.location.href.indexOf('/uk/') != -1) {
                changeCopyHandler('EN');
                language = 'EN';
            } else if (window.location.href.indexOf('/fr/') != -1) {
                changeCopyHandler('FR');
                language = 'FR';
            } else if (window.location.href.indexOf('/de/') != -1) {
                changeCopyHandler('DE');
                language = 'DE';
            } else if (window.location.href.indexOf('/nl/') != -1) {
                changeCopyHandler('NL');
                language = 'NL'
            } else if (window.location.href.indexOf('/es/') != -1) {
                changeCopyHandler('ES');
                language = 'ES';
            } else if (window.location.href.indexOf('/it/') != -1) {
                changeCopyHandler('IT');
                language = 'IT'
            } else if (window.location.href.indexOf('/eu/') != -1) {
                changeCopyHandler('EU');
                language = 'EU';
            } else if (window.location.href.indexOf('/ie/') != -1) {
                changeCopyHandler('IE');
                language = 'IE';
            } else if (window.location.href.indexOf('/pl/') != -1) {
                changeCopyHandler('PL');
                language = 'PL';
            } else if (window.location.href.indexOf('/no/') != -1) {
                changeCopyHandler('NO');
                language = 'NO';
            } else if (window.location.href.indexOf('/dk/') != -1) {
                changeCopyHandler('DK');
                language = 'DK';
            } else if (window.location.href.indexOf('/se/') != -1) {
                changeCopyHandler('SE');
                language = 'SE';
            }
        }


        /* Initialise variation */
        //if(!getCookie('firstVisit')){
        waitForElement('body footer', init, 100, 25000);
        //}
    } catch (e) {
        if (debug) console.log(e, 'error in Test' + variation_name);
    }
})();