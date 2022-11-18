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
  
	  function live(selector, event, callback, context) {
		  // helper for enabling IE 8 event bindings
		  function addEvent(el, type, handler) {
			if (el.attachEvent) el.attachEvent("on" + type, handler);
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
		}
  
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


  var formPopup =''+ 
  '  <div class="eg-form-popup">'+ 
  '      <div class="eg-form-popup-inr">'+ 
  '          <div class="eg-form-container">'+ 
  '             <span class="eg-form-close">&times;</span>'+
  '             <form method="POST" id="edb-survey">'+
  '               <input name="Email" type="email" placeholder="Email" required="">'+ 
  '               <input name="Name" type="text" placeholder="Name" required="">'+ 
  '               <button type="submit">Send</button>'+ 
  '             </form>'+ 
  '             <p class="eg-thanks">Thanks For Subscribe</p>'+
  '          </div>'+ 
  '      </div>'+ 
  '  </div>';
  

  var offset;
    
  function createSession() {
    if(getCookie('firstVisit') == null) {
      setCookie('firstVisit', '1',365);
    }
  }

	  function init() {
  
		  document.querySelector('body').insertAdjacentHTML('beforeend', formPopup);
		   
		  live(".eg-form-popup .eg-form-close", "click", function() {
			  createSession();
        document.querySelector('body').classList.remove('form-popup-hide');
		  });
	  }
  
	  /* Initialise variation */
    if(!getCookie('firstVisit')){
      waitForElement("body", init, 100, 25000);
    }
	} catch (e) {
	  if (debug) console.log(e, "error in Test" + variation_name);
	}
  })();