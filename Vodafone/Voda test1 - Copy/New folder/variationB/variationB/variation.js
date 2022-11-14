(function () {
  try {
    /* main variables */
    var debug = 1;
    var variation_name = "";
    var tag = 'VDFi13';
    var type = "Variation",
    number = "13-0",
    tag = "cv-" + number,
    id = "CONV-VDFI-" + number + "-" + type,
    hjLabel = "VDFI" + number + "_" + (type === "control" ? "original" : "alternative"),
    expName = "[VDFI 13.0] - Additional services and catalog [Choice]";
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
    function waitForIframe(selector, trigger, delayInterval, delayTimeout) {
      var interval = setInterval(function () {
        if (
          document &&
          document.querySelector(selector) &&
          document.querySelectorAll(selector).length > 0 && document.querySelector(selector).contentWindow && document.querySelector(selector).contentWindow.length
        ) {
          clearInterval(interval);
          trigger();
        }
      }, delayInterval);
      setTimeout(function () {
        clearInterval(interval);
      }, delayTimeout);
    }
    function live(selector, event, callback, context) {
      // helper for enabling IE 8 event bindings
      function addEvent(el, type, handler) {
        if (el.attachEvent) el.attachEvent('on' + type, handler);
        else el.addEventListener(type, handler);
      }
      // matches polyfill
      this.Element && function (ElementPrototype) {
        ElementPrototype.matches = ElementPrototype.matches ||
          ElementPrototype.matchesSelector ||
          ElementPrototype.webkitMatchesSelector ||
          ElementPrototype.msMatchesSelector ||
          function (selector) {
            var node = this,
              nodes = (node.parentNode || node.document).querySelectorAll(selector),
              i = -1;
            while (nodes[++i] && nodes[i] != node);
            return !!nodes[i];
          };
      }(Element.prototype);
      // live binding helper using matchesSelector
      function live(selector, event, callback, context) {
        addEvent(context || document, event, function (e) {
          var found, el = e.target || e.srcElement;
          while (el && el.matches && el !== context && !(found = el.matches(selector))) el = el.parentElement;
          if (found) callback.call(el, e);
        });
      }
      live(selector, event, callback, context);
    }
  var offerData = {
    "Zero NEW RED GB WORLD":{
      description:"L'opzione di roaming valida in tutti i paesi al di fuori dell'Unione Europea",
      seeMore:"L'opzione roaming ZERO GB RED Mondo prevede 1000 minuti di chiamate in entrata e 1000 minuti di chiamate in uscita, 50 SMS e 1GB di internet. L'offerta è valida in tutti i Paesi al di fuori dell'Unione Europea.<br>\
      L'opzione ZERO RED GB Mondo prevede l'acquisto di una ricarica di 1200 euro valida per 12 periodi da 1 mese ciascuno a cui corrispondono 12000 minuti di chiamate in uscita, 12000 minuti di chiamate in entrata, 600 SMS e 12Giga da utilizzarsi nelle direttrici incluse nell’offerta. Il pagamento della ricarica verrà dilazionato in 12 rate (una rata ogni mese) da 100 euro ciascuna addebitate direttamente in conto telefonico.<br>\
      La sottoscrizione dell’opzione prevede il rinnovo tacito di tale acquisto al dodicesimo periodo, fatta salva indicazione contraria da parte del cliente che sarà sempre libero di rifiutare l’ulteriore acquisto. Aderendo all’offerta il cliente acconsente che l’ammontare di minuti, traffico dati e SMS inclusi nel pacchetto venga frazionato in periodi da 1 mese, pertanto il cliente potrà utilizzare 1000 minuti di traffico in uscita, 1000 minuti di traffico in entrata, 50 SMS, 1 GB ogni mese per SIM nei paesi inclusi nell’offerta.<br>\
      Nel caso in cui il cliente decida di disattivare il servizio prima di aver terminato il pagamento delle 12 rate, sara’ tenuto al pagamento delle rate residue per un totale di 1200 euro massimo, nettato delle rate già corrisposte al momento della disattivazione.<br>\
      Superate le soglie di traffico incluse in ciascun periodo, verranno applicate le tariffe Smart Passport del paese in cui si trova il cliente, per informazioni sui contenuti visitare il sito nella sezione Aziende/estero."
    },
    "MONDO 10":{
      description:"L'opzione di roaming valida in tutti i paesi del mondo",
      seeMore:"La nuova opzione di roaming Zero MONDO 10 è una nuova offerta compatibile con soli piani Zero che include:<br>\
      - 100 Minuti IN e OUT / mese<br>\
      - 10 SMS / mese<br>\
      - 100MB / mese Internet sugli APN: APN: Wap, Web, CDA, Mobile, M2M, Iphone, Blackberry<br>\
      Valevoli in tutti i Paesi del mondo (footprint XS - S - M - L - XL ed XXL, USA + Svizzera and Principato di Monaco, Isole Faroe - Isola di Man) extra Europa."
    }, 
    "Social Pass Zero":{
      description:"Naviga gratuitamente sulle piattaforme social",
      seeMore:"DETTAGLIO OFFERTE  DETTAGLI<br>\
      L’offerta è valida sul territorio nazionale e anche nei Paesi dell’Unione Europea senza costi aggiuntivi, nel rispetto delle condizioni di utilizzo corretto previste dal Regolamento 2016/2286. Non prevede le chiamate e le videochiamate in VoIP.<br>\
      Nei Paesi non inclusi nell’Unione Europea continuano a essere valide le attuali tariffe per l'estero. Solo in caso di utilizzo al primo evento di minuti, sms o traffico dati é valida Smart Passport Europa che prevede minuti e SMS illimitati e 100MB al costo di 5 euro al giorno.<br>\
      Piattaforme social incluse nell’offerta: Facebook, Instagram, Twitter, Linkedin, Tumblr, Pinterest, Tinder, Happn, Askfm.<br>\
      Se termini i Giga inclusi nel tuo piano, l’offerta del Pass scelto si blocca; puoi continuare a navigare ed usare i social aggiungendo Giga alla tua offerta.<br>\
      PERMANENZA<br>\
      Le diverse opzioni Pass (Mail, Video, Social, Chat, Music, Maps) sono compatibili tra loro. Non sono previste penali in caso di disattivazione. Il Pass è soggetto alle condizioni di utilizzo lecito e corretto del traffico."
    },
    "Zero RED MONDO":{
      description:"L'opzione di roaming valida in tutti i Paesi al di fuori dell'Unione Europea",
      seeMore:"L'opzione roaming ZERO RED Mondo prevede 500 minuti di chiamate in entrata e 500 minuti di chiamate in uscita, 50 SMS e 500MB di internet.<br>\
      L'offerta e' valida in tutti i Paesi al di fuori dell'Unione Europea.<br>\
      ZERO RED Mondo prevede l'acquisto di una ricarica di 720 euro valida per 12 periodi da 1 mese ciascuno a cui corrispondono 6000 minuti di chiamate in uscita, 6000 minuti di chiamate in entrata, 600 SMS e 6000 Mega da utilizzarsi nelle direttrici incluse nell'offerta. Il pagamento della ricarica verrà dilazionato in 12 rate (una rata ogni mese) da 60 euro ciascuna addebitate direttamente in conto telefonico.<br>\
      La sottoscrizione dell'opzione prevede il rinnovo tacito di tale acquisto al dodicesimo periodo, fatta salva indicazione contraria da parte tua. Sarai sempre libero di rifiutare l'ulteriore acquisto. Aderendo all’offerta acconsenti che l’ammontare di minuti, traffico dati e SMS inclusi nel pacchetto venga frazionato in periodi da 1 mese, pertanto potrai utilizzare 500 minuti di traffico in uscita, 500 minuti di traffico in entrata, 50 SMS, 500 MB ogni mese per SIM nei paesi inclusi nell'offerta.<br>\
      Superate le soglie di traffico incluse in ciascun periodo, verranno applicate le tariffe Smart Passport del paese in cui ti trovi. Per informazioni sui contenuti visitare il sito nella sezione Aziende/estero."
    },
    "Zero: Travel EU, USA e Canada":{
      description:"Con Travel Europa, USA e Canada hai minuti e SMS illimitati e 2GB dall'estero.",
      seeMore:"Dettagli<br>\
      Con Travel Europa, USA e Canada hai minuti e SMS illimitati e 2GB dall'estero.<br>\
      Internet<br>\
      Puoi navigare su APN mobile.vodafone.it, web.vodafone.it, iphone.vodafone.it, wap.omnitel.it e CDA.<br>\
      Non sono consentiti il VoIP e il Peer to Peer.<br>\
      Superamento soglia<br>\
      Se termini i Mega inclusi continui a navigare a velocità ridotta senza costi aggiuntivi. Permanenza<br>\
      È prevista una permanenza minima di 12 mesi dalla data di attivazione ed è previsto un corrispettivo pari a 100 euro in caso di recesso anticipato."
    },
    "Video Pass Zero":{
      description:"Naviga gratuitamente sulle piattaforme social",
      seeMore:"DETTAGLIO OFFERTE<br>\
      DETTAGLI<br>\
      L’offerta è valida sul territorio nazionale e anche nei Paesi dell’Unione Europea senza costi aggiuntivi, nel rispetto delle condizioni di utilizzo corretto previste dal Regolamento 2016/2286. Non prevede le chiamate e le videochiamate in VoIP.<br>\
      Nei Paesi non inclusi nell’Unione Europea continuano a essere valide le attuali tariffe per l'estero. Solo in caso di utilizzo al primo evento di minuti, sms o traffico dati é valida Smart Passport Europa che prevede minuti e SMS illimitati e 100MB al costo di 5 euro al giorno.<br>\
      Sono incluse nell’offerta tutte le piattaforme video.<br>\
       PERMANENZA<br>\
      Le diverse opzioni Pass (Mail, Video, Social, Chat, Music, Maps) sono compatibili tra loro. Non sono previste penali in caso di disattivazione. Il Pass è soggetto alle condizioni di utilizzo lecito e corretto del traffico."
    },
    "Music Pass Zero":{
      description:"Naviga gratuitamente sulle piattaforme musicali",
      seeMore:"DETTAGLIO OFFERTE<br>\
      DETTAGLI<br>\
      L’offerta è valida sul territorio nazionale e anche nei Paesi dell’Unione Europea senza costi aggiuntivi, nel rispetto delle condizioni di utilizzo corretto previste dal Regolamento 2016/2286. Non prevede le chiamate e le videochiamate in VoIP.<br>\
      Nei Paesi non inclusi nell’Unione Europea continuano a essere valide le attuali tariffe per l'estero. Solo in caso di utilizzo al primo evento di minuti, sms o traffico dati é valida Smart Passport Europa che prevede minuti e SMS illimitati e 100MB al costo di 5 euro al giorno.<br>\
      Piattaforme di musica in streaming incluse nell’offerta: Radio Deejay, Radio 105, RTL 102.5, RDS, R101, SoundCloud, Radio Italia, iTunes, Apple Music, Deezer music, Tidal.<br>\
      Se termini i Giga inclusi nel tuo piano, l’offerta Music Pass si blocca; puoi continuare a navigare ed usufruire della tua Music Pass aggiungendo Giga alla tua offerta.<br>\
      PERMANENZA<br>\
      Le diverse opzioni Pass (Mail, Video, Social, Chat, Music, Maps) sono compatibili tra loro. Non sono previste penali in caso di disattivazione. Il Pass è soggetto alle condizioni di utilizzo lecito e corretto del traffico."
    },
    "Mappe Unlimited Zero":{
      description:"Naviga gratuitamente sulle piattaforme di navigazione",
      seeMore:"DETTAGLIO OFFERTE<br>\
      DETTAGLI</br>\
      L’offerta è valida sul territorio nazionale e anche nei Paesi dell’Unione Europea senza costi aggiuntivi, nel rispetto delle condizioni di utilizzo corretto previste dal Regolamento 2016/2286. Non prevede le chiamate e le videochiamate in VoIP.<br>\
      Nei Paesi non inclusi nell’Unione Europea continuano a essere valide le attuali tariffe per l'estero. Solo in caso di utilizzo al primo evento di minuti, sms o traffico dati é valida Smart Passport Europa che prevede minuti e SMS illimitati e 100MB al costo di 5 euro al giorno.<br>\
      Piattaforme di navigazione incluse nell’offerta: Yandex-maps, Apple-maps, Google-maps, Waze, Sygic, Copilot, Genius Maps, Here WeGo, Navmii GPS, Mappe Gps gratis, MapS.ME, TomTom Go mobile, Moovit, Citymapper, Karta GPS, ATM Milano Official App, Roma Bus, Muoversi a Roma, MyWay, GPS Navigation(be-on-road), Probus, Via Michelin, Wego, Tuttocittà, Wikimapia, Mapillary, Mapquest. Se termini i Giga inclusi nel tuo piano, l’offerta Mappe Unlimited si blocca; puoi continuare a navigare ed usufruire della tua Mappe Unlimited aggiungendo Giga alla tua offerta.<br>\
      PERMANENZA<br>\
      Le diverse opzioni Pass (Mail, Video, Social, Chat, Music, Maps) sono compatibili tra loro. Non sono previste penali in caso di disattivazione. Il Pass è soggetto alle condizioni di utilizzo lecito e corretto del traffico."
    },
    "Chat Pass Zero":{
      description:"Naviga gratuitamente sulle piattaforme di messaging",
      seeMore:"DETTAGLIO OFFERTE<br>\
      Con Vodadone Chat Pass Zero usi le tue app di Instant Messaging senza consumare i tuoi Giga.<br>\
      DETTAGLI<br>\
      L’offerta è valida sul territorio nazionale e anche nei Paesi dell’Unione Europea senza costi aggiuntivi, nel rispetto delle condizioni di utilizzo corretto previste dal Regolamento 2016/2286. Non prevede le chiamate e le videochiamate in VoIP.<br>\
      Nei Paesi non inclusi nell’Unione Europea continuano a essere valide le attuali tariffe per l'estero. Solo in caso di utilizzo al primo evento di minuti, sms o traffico dati é valida Smart Passport Europa che prevede minuti e SMS illimitati e 100MB al costo di 5 euro al giorno.<br>\
      Piattaforme chat incluse nell’offerta: Whatsapp, Facebook Messenger, Skype, Telegram, Viber, We Chat, Call+, Message+, iMessage, Imo. Non sono previste penali in caso di disattivazione.<br>\
      Se termini i Giga inclusi nel tuo piano, l’offerta Chat Pass si blocca; puoi continuare a navigare e chattare aggiungendo Giga alla tua offerta.<br>\
      PERMANENZA<br>\
      Le diverse opzioni Pass (Mail, Video, Social, Chat, Music, Maps) sono compatibili tra loro. Non sono previste penali in caso di disattivazione. Il Pass è soggetto alle condizioni di utilizzo lecito e corretto del traffico."
    },
    "Mail Unlimited Zero":{
      description:"Naviga gratuitamente sulle piattaforme di posta elettronica",
      seeMore:"DETTAGLI\ L’offerta è valida sul territorio nazionale e anche nei Paesi dell’Unione Europea senza costi aggiuntivi, nel rispetto delle condizioni di utilizzo corretto previste dal Regolamento 2016/2286. Non prevede le chiamate e le videochiamate in VoIP.<br>\
      Nei Paesi non inclusi nell’Unione Europea continuano a essere valide le attuali tariffe per l'estero. Solo in caso di utilizzo al primo evento di minuti, sms o traffico dati é valida Smart Passport Europa che prevede minuti e SMS illimitati e 100MB al costo di 5 euro al giorno.<br>\
      Mail provider inclusi nell’offerta: Gmail, Yahoo mail, Hotmail e i provider con dominio mail generico (es. Aruba).<br>\
      Non sono previste penali in caso di disattivazione. Se termini i Giga inclusi nel tuo piano, l’offerta Mail Unlimited si blocca; puoi continuare a navigare e scaricare mail aggiungendo Giga alla tua offerta.<br>\
      PERMANENZA<br>\
      Le diverse opzioni Pass (Mail, Video, Social, Chat, Music, Maps) sono compatibili tra loro. Non sono previste penali in caso di disattivazione. Il Pass è soggetto alle condizioni di utilizzo lecito e corretto del traffico."
    },
    "Unlock 5g + 5GB":{
      description:"Attiva il servizio per accedere a tutti i vantaggi del 5G di Vodafone e aggiungi 5 Giga in più al tuo piano ogni mese.",
      seeMore:"DETTAGLIO OFFERTE<br>\
      ATTIVAZIONE<br>\
      Attiva il servizio per accedere a tutti i vantaggi del 5G di Vodafone e aggiungi 5 Giga in più al tuo piano ogni mese.<br>\
      DETTAGLI NAVIGAZIONE IN 5G<br>\
      Per navigare in 5G devi avere un dispositivo e un’offerta abilitati ed essere sotto copertura 5G, disponibile dal 16 giugno a Milano, Bologna, Torino, Roma e Napoli. Per conoscere l’elenco aggiornato e completo dei dispositivi e delle offerte abilitati, nonché delle città coperte, vai su voda.it/copertura5g. Per ulteriori dettagli sulle altre tecnologie vai su vodafone.i"
    },
    "Unlock 5g":{
      description:"Attiva il servizio per accedere a tutti i vantaggi del 5G di Vodafone.",
      seeMore:"DETTAGLIO OFFERTE<br>\
      Attiva il servizio per accedere a tutti i vantaggi del 5G di Vodafone.<br>\
      DETTAGLI NAVIGAZIONE IN 5G<br>\
      Per navigare in 5G devi avere un dispositivo e un’offerta abilitati ed essere sotto copertura 5G, disponibile dal 16 giugno a Milano, Bologna, Torino, Roma e Napoli. Per conoscere l’elenco aggiornato e completo dei dispositivi e delle offerte abilitati, nonché delle città coperte, vai su voda.it/copertura5g. Per ulteriori dettagli sulle altre tecnologie vai su <a href='http://vodafone.it/'>vodafone.it</a>"
    }
  }
    // https://www.vodafone.it/portal/resources/media/Images/tobi/TOBi.png

    var egBanner =''+ 
    '  <div class="cv-vdfi-13-0-banner">'+ 
    '      <div class="cv-vdfi-13-0-left-srction">'+ 
    '          <h3 class="cv-vdfi-13-0-left-heading"><img src="https://cfactory-img.s3.amazonaws.com/VDFI/13-1/download-7.png" alt="Box Icon"> SERVIZI ATTIVAILI</h3>'+ 
    '          <p class="cv-vdfi-13-0-left-subheading">Vuoi aggiungere <b>Giga extra? Controllare la tua fattura?</b> O magari scoprire <b>le offerte per l’estero?</b> Abbiamo una soluzione a tutto…</p>'+ 
    '          <a href="https://www.vodafone.it/nw/business/ecare/catalogo.html" class="cv-vdfi-13-0-button btn primary">Scopri tutti i servizi</a>'+ 
    '      </div>'+ 
    '      <div class="cv-vdfi-13-0-right-srction">'+ 
    '          <h3 class="cv-vdfi-13-0-right-heading">Scopri tutti i servizi che puoi attivare su questa sim!</h3>'+ 
    '      </div>'+ 
    '  </div>';

    var egPopup =''+ 
    '  <div class="cv-vdfi-13-0-popup">'+ 
    '      <div class="cv-vdfi-13-0-overlay"></div>'+ 
    '      <div class="cv-vdfi-13-0-content">'+ 
    '          <div class="cv-vdfi-13-0-cross">×</div>'+ 
    '          <h2 class="cv-vdfi-13-0-popup-heading">Zero NEW RED GB WORLD</h2>'+ 
    '          <div class="cv-vdfi-13-0-discription">'+ 
  '<p></p>'+
    '          </div>'+ 
    '      </div>'+ 
    '  </div>';


    var egloader =''+ 
    '  <div class="cv-vdfi-13-0-loader">'+ 
    '      <div class="cv-vdfi-13-0-overlay"></div>'+ 
    '      <div class="cv-vdfi-13-0-content">'+ 
    '          <div class="cv-vdfi-13-0-discription">'+ 
    '              <img src="https://cfactory-img.s3.amazonaws.com/VDFI/13-1/cv-vdfi13-loader.svg" alt="loader">'+
    '              <p>We are activating your offer...</p>'+ 
    '          </div>'+ 
    '      </div>'+ 
    '  </div>';

    var egSorryPopup =''+ 
    '  <div class="cv-vdfi-13-0-sorry-popup">'+ 
    '      <div class="cv-vdfi-13-0-overlay"></div>'+ 
    '      <div class="cv-vdfi-13-0-content">'+ 
    '          <div class="cv-vdfi-13-0-discription">'+ 
    '              <img src="https://cfactory-img.s3.amazonaws.com/VDFI/13-1/cv-vdfi13--Confused.svg" alt="Sorry">'+
    '              <p>Sorry, this offer is not available for the number you have selected</p>'+ 
    '              <button class="cv-vdfi-13-0-back-button">GO BACK TO CATALOG</button>'+
    '          </div>'+ 
    '      </div>'+ 
    '  </div>';
    
   function getCookie(name) {
       var nameEQ = name + "=";
       var ca = document.cookie.split(';');
       for(var i=0;i < ca.length;i++) {
           var c = ca[i];
           while (c.charAt(0)==' ') c = c.substring(1,c.length);
           if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
       }
       return null;
   }
   function setCookie(name,value,days) {
       var expires = "";
       if (days) {
           var date = new Date();
           date.setTime(date.getTime() + (days*24*60*60*1000));
           expires = "; expires=" + date.toUTCString();
       }
       document.cookie = name + "=" + (value || "")  + expires + "; path=/";
   }
   //main page init 
    function init() {
      document.querySelector('.responsivegrid .hplayoutcontainer .hplayoutcontainer').insertAdjacentHTML('beforebegin', egBanner);
    }

    function init2() {
      document.querySelector('body').insertAdjacentHTML('beforeend', egPopup);
      live('#tabCarouselList li a:not(.active)','mousedown',function(){
        setTimeout(function () {
          addDescriptions();
        },2000);
      });
      setTimeout(function () {
        addDescriptions();
      },2000);
      
    }
    function addDescriptions() {
      var descriptionData; 
      var egPara  = document.querySelectorAll('#myTabContent .carousel-ctr h3');
       var head = egPara.textContent;
      for(var i=0; i < egPara.length; i++){
       head = egPara[i].textContent;
        descriptionData = offerData[head];
         if(descriptionData){
          egPara[i].nextElementSibling.innerHTML = ''+descriptionData.description+' <span class="cv-vdfi-13-0-view-more">View more</span>';
          document.querySelector('.cv-vdfi-13-0-popup .cv-vdfi-13-0-content .cv-vdfi-13-0-popup-heading').innerHTML = head;
         }
      }
      live('.cv-vdfi-13-0-view-more','click', function(){
        var heading = this.parentElement.previousSibling.textContent;
        descriptionData = offerData[heading];
        document.querySelector('.cv-vdfi-13-0-popup .cv-vdfi-13-0-content .cv-vdfi-13-0-popup-heading').innerHTML = heading;
        document.querySelector('.cv-vdfi-13-0-popup .cv-vdfi-13-0-content .cv-vdfi-13-0-discription p').innerHTML = descriptionData.seeMore; 
        document.querySelector('body').classList.add('cv-vdfi-13-0-pop-show');
      });
      live('.cv-vdfi-13-0-popup .cv-vdfi-13-0-cross, .cv-vdfi-13-0-popup .cv-vdfi-13-0-overlay', 'click', function () {
        document.querySelector('body').classList.remove('cv-vdfi-13-0-pop-show');
      });
    }
    function initResult(){
      var phone = getCookie('cv-phone');
     if(document.querySelector('.newBoxCopy form select:first-of-type').value.length < 5 && phone){
      document.querySelectorAll('.newBoxCopy form select:first-of-type option').forEach(function(val){
        var itemVal = val.textContent;
        if(itemVal.indexOf(phone) != -1){
          var attrVal = val.value;
          document.querySelector('.newBoxCopy form select:first-of-type').value = attrVal;
          document.querySelector('.newBoxCopy form select:first-of-type').onchange()
        }
      });
    }
    else{
       waitForIframe('iframe.legacyIframe',function(){
       document.body.classList.remove('cv-show-loader');
      },50,30000);
    }
    }
    //save phone number
    function saveNumber(){
      var phone = document.querySelector('.root_selectNumber .selectNumber_number__4Zb7Z');
      setCookie('cv-phone',phone.textContent,365);
    }
    //show loader
    function showLoader(){
      document.body.classList.add('cv-show-loader');
      document.querySelector('body').insertAdjacentHTML('beforeend', egloader);
    }
     function initHotjar() {
      try {
        if (hjLabel) {
          var maxCalls = 10,
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
        }
      } catch (err) {
        window[tag].log(err);
      }
    }
    /* Initialise variation */
    //wait for first page content 
    waitForElement(".responsivegrid .hplayoutcontainer .hplayoutcontainer", init, 50, 25000);
    //wait for catalog item 
    waitForElement("#myTabContent .carousel-ctr h3 + p", init2, 50, 25000);
    //wait for phone element
    waitForElement('.root_selectNumber .selectNumber_number__4Zb7Z',saveNumber,50,10000);
   // document.querySelector('body').insertAdjacentHTML('beforeend', '<img src="https://cfactory-img.s3.amazonaws.com/VDFI/13-1/cv-vdfi-13img.svg" style="display:none;">');
    if(window.location.pathname == '/area-utente/appmanager/fai-da-te/Aziende_'){
      waitForElement(".newBoxCopy form select:first-of-type option", initResult, 50, 25000);
      waitForElement('body',showLoader,50,10000);
    }
  } catch (e) {
    if (debug) console.log(e, "error in Test" + variation_name);
  }
})();