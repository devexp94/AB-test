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
  

var menuOptions = `
    <li class="show-for-medium"><a href="/us/genre/drama" onclick="dataLayer.push({'event':'eventSend','actionType': 'submit','actionName':'Navigation','eventLabels':{'eventType':'atc','container':'page','status':'success','label':'item from Menu Navigaton','name':'Drama'}})">Drama</a></li>

    <li class="show-for-medium"><a href="/us/genre/mystery" onclick="dataLayer.push({'event':'eventSend','actionType': 'submit','actionName':'Navigation','eventLabels':{'eventType':'atc','container':'page','status':'success','label':'item from Menu Navigaton','name':'Mystery'}})">Mystery</a></li>

    <li class="show-for-medium"><a href="/us/genre/comedy" onclick="dataLayer.push({'event':'eventSend','actionType': 'submit','actionName':'Navigation','eventLabels':{'eventType':'atc','container':'page','status':'success','label':'item from Menu Navigaton','name':'Comedy'}})">Comedy</a></li>

    <li class="show-for-medium"><a href="/us/genre/doclifestyle" onclick="dataLayer.push({'event':'eventSend','actionType': 'submit','actionName':'Navigation','eventLabels':{'eventType':'atc','container':'page','status':'success','label':'item from Menu Navigaton','name':'Lifestyle'}})">Lifestyle</a></li>

    <li><a href="#" data-menu="data-explore" onclick="dataLayer.push({'event':'eventSend','actionType': 'submit','actionName':'Navigation','eventLabels':{'eventType':'atc','container':'page','status':'success','label':'item from Menu Navigaton','name':'Collections'}})" class="">Collections <img src="/Content/img/dropdown.png" alt=""></a></li>

    <li class="show-for-medium"><a href="/us/programmes" onclick="dataLayer.push({'event':'eventSend','actionType': 'submit','actionName':'Navigation','eventLabels':{'eventType':'atc','container':'page','status':'success','label':'item from Menu Navigaton','name':'A-Z'}})">A-Z</a></li>

    <li id="watchlistlink" class="show-for-medium "></li>

    <li class="help show-for-small"><a href="https://help.britbox.com/" target="_blank" onclick="dataLayer.push({'event':'eventSend','actionType': 'submit','actionName':'Navigation','eventLabels':{'eventType':'atc','container':'page','status':'success','label':'item from Menu Navigaton','name':'help.britbox.com'}})"><i class="icon-help"></i></a></li>
    
    `;

var innerMenu = `<ul class="eg-list">
<li><a href="https://www.britbox.com/us/new">New to BritBox</a></li>
<li><a href="https://www.britbox.com/us/originals_tv">BritBox Originals</a></li>
<li><a href="https://www.britbox.com/us/agathachristie">Agatha Christie Collection</a></li>
<li><a href="https://www.britbox.com/us/period_dramas">Period Drama</a></li>
</ul>
<ul class="eg-list">
<li><a href="https://www.britbox.com/us/list/10337">Literature</a></li>
<li><a href="https://www.britbox.com/us/true_crime">British True Crime</a></li>
<li><a href="https://www.britbox.com/us/cozy_murders#:~:text=Welcome%20to%20the%20idyllic%20island,you%20see%20its%20murder%20rate.&text=When%20two%20mismatched%20cops%20are,to%20policing%20%E2%80%93%20and%20to%20life">Cozy Murders</a></li>
<li><a href="https://www.britbox.com/us/coming_soon">Coming Soon</a></li>
</ul>
<div class="eg-video-link">
<p class="video-link-heading">Featured</p>
<div class="eg-image-container">
    <div class="eg-image-box">
        <a href="https://www.britbox.com/us/show/Murder_in_Provence_73779">
        <div class="eg-image-container-inr">
            <img src="https://us.britbox.com/shain/v1/dataservice/ResizeImage/$value?Format=%27jpg%27&Quality=80&Width=405&Height=227&ImageUrl=321588.jpg&imageType=tile" alt="Murder in Provence">
        </div>
            <p class="title">Murder in Provence</p>
            <p class="eg-play-button">Play Now <img src="/content/img/action-svg/play_now.svg"></p>
        </a>
    </div>
    <div class="eg-image-box">
        <a href="https://www.britbox.com/us/show/Sister_Boniface_Mysteries_73774">
        <div class="eg-image-container-inr">
            <img src="https://us.britbox.com/shain/v1/dataservice/ResizeImage/$value?Format=%27jpg%27&Quality=80&Width=405&Height=227&ImageUrl=319335.jpg&imageType=tile" alt="Sister Boniface Mysteries">
        </div>
            <p class="title">Sister Boniface Mysteries</p>
            <p class="eg-play-button">Play Now <img src="/content/img/action-svg/play_now.svg"></p>
        </a>
    </div>
</div>
</div>`;

var hamburger = `<div class="eg-hamburger">
<span class="eg-hamburger-image"></span>
</div>`;

var mobileMenu = `
<div class="eg-mobile-menu-outer">
        <ul class="eg-mobile-menu">
            <li>
                <a href="https://www.britbox.com/us/genre/drama">Drama</a>
            </li>
            <li>
                <a href="https://www.britbox.com/us/genre/mystery">Mystery</a>
            </li>
            <li>
                <a href="https://www.britbox.com/us/genre/comedy">Comedy</a>
            </li>
            <li>
                <a href="https://www.britbox.com/us/genre/doclifestyle">Lifestyle</a>
            </li>
            <li class="eg-collection">
            <a>Collections <img src="/Content/img/dropdown.png" alt=""></a>
                <ul class="sub-menu">
                    <li><a  class="sub-menu-collection">Collections <img src="/Content/img/dropdown.png" alt=""></a></li>    
                    <li><a href="https://www.britbox.com/us/new">New to BritBox</a></li>
                    <li><a href="https://www.britbox.com/us/originals_tv">BritBox Originals</a></li>
                    <li><a href="https://www.britbox.com/us/agathachristie">Agatha Christie Collection</a></li>
                    <li><a href="https://www.britbox.com/us/period_dramas">Period Drama</a></li>
                    <li><a href="https://www.britbox.com/us/list/10337">Literature</a></li>
                    <li><a href="https://www.britbox.com/us/true_crime">British True Crime</a></li>
                    <li><a href="https://www.britbox.com/us/cozy_murders#:~:text=Welcome%20to%20the%20idyllic%20island,you%20see%20its%20murder%20rate.&text=When%20two%20mismatched%20cops%20are,to%20policing%20%E2%80%93%20and%20to%20life">Cozy Murders</a></li>
                    <li><a href="https://www.britbox.com/us/coming_soon">Coming Soon</a></li>
                    <li>
                        <div class="eg-image-section">
                            <p class="video-link-heading">Featured</p>
                                <div class="eg-image-container">
                                    <div class="eg-image-box">
                                        <a href="https://www.britbox.com/us/show/Murder_in_Provence_73779">
                                        <div class="eg-image-container-inr">
                                            <img src="https://us.britbox.com/shain/v1/dataservice/ResizeImage/$value?Format=%27jpg%27&Quality=80&Width=405&Height=227&ImageUrl=321588.jpg&imageType=tile" alt="Murder in Provence">
                                        </div>
                                            <p class="title">Murder in Provence</p>
                                            <p class="eg-play-button">Play Now <img src="/content/img/action-svg/play_now.svg"></p>
                                        </a>
                                    </div>
                                    <div class="eg-image-box">
                                        <a href="https://www.britbox.com/us/show/Sister_Boniface_Mysteries_73774">
                                        <div class="eg-image-container-inr">
                                            <img src="https://us.britbox.com/shain/v1/dataservice/ResizeImage/$value?Format=%27jpg%27&Quality=80&Width=405&Height=227&ImageUrl=319335.jpg&imageType=tile" alt="Sister Boniface Mysteries">
                                        </div>
                                            <p class="title">Sister Boniface Mysteries</p>
                                            <p class="eg-play-button">Play Now <img src="/content/img/action-svg/play_now.svg"></p>
                                        </a>
                                    </div>
                                </div>
                        </div>
                    </li>
                </ul>
            </li>
            <li><a href="https://www.britbox.com/us/programmes">A-Z</a></li>
        </ul>
</div>`;

    function init() {

      document.querySelector('.top-bar ul.items').innerHTML = menuOptions;

      document.querySelector('nav .top-bar + .menu .content .row').innerHTML = innerMenu;
    
    document.querySelector('.top-bar .columns.logo').insertAdjacentHTML('beforebegin', hamburger);

    live('html body .eg-hamburger', 'mousedown', function () {
      document.querySelector('body').classList.toggle('eg-mobile-menu-open');
    });

    live('.eg-collection > a', 'mousedown', function () {
      document.querySelector('body').classList.add('eg-mobile-sub-menu-open');
    });
    live('.eg-collection .sub-menu-collection', 'mousedown', function () {
      document.querySelector('body').classList.remove('eg-mobile-sub-menu-open');
    });
    

     document.querySelector('body').insertAdjacentHTML('beforeend', mobileMenu);


}

    /* Initialise variation */
    waitForElement("nav .top-bar + .menu .content .row", init, 100, 25000);
  } catch (e) {
    if (debug) console.log(e, "error in Test" + variation_name);
  }
})();
