(function () {
  try {
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

    var cvCategories = ''+
    '<div class="cv-UTY-2-18-categories__section">'+
    '     <div class="cv-UTY-2-18-category__wrapper">'+
    '          <div class="cv-UTY-2-18-category">'+
    '               <a href="/3d">'+
    '                   <div class="cv-UTY-2-18-category__content">'+
    '                         <div class="cv-UTY-2-18-category__img">'+
    '                             <div class="cv-UTY-2-18-3D"></div>'+
    '                         </div>'+
    '                         <div class="cv-UTY-2-18-category__name">3D</div>'+ 
    '                   </div>'+
    '               </a>'+
    '          </div>'+
    '          <div class="cv-UTY-2-18-category">'+
    '               <a href="/2d">'+
    '                   <div class="cv-UTY-2-18-category__content">'+
    '                         <div class="cv-UTY-2-18-category__img">'+
    '                             <div class="cv-UTY-2-18-2D"></div>'+
    '                         </div>'+
    '                         <div class="cv-UTY-2-18-category__name">2D</div>'+   
    '                   </div>'+
    '               </a>'+
    '          </div>'+
    '          <div class="cv-UTY-2-18-category">'+
    '               <a href="/tools">'+
    '                   <div class="cv-UTY-2-18-category__content">'+
    '                         <div class="cv-UTY-2-18-category__img">'+
    '                             <div class="cv-UTY-2-18-tools"></div>'+
    '                         </div>'+
    '                         <div class="cv-UTY-2-18-category__name">Tools</div>'+   
    '                   </div>'+
    '               </a>'+
    '          </div>'+
    '          <div class="cv-UTY-2-18-category">'+
    '               <a href="/audio">'+
    '                   <div class="cv-UTY-2-18-category__content">'+
    '                         <div class="cv-UTY-2-18-category__img">'+
    '                             <div class="cv-UTY-2-18-audio"></div>'+
    '                         </div>'+
    '                         <div class="cv-UTY-2-18-category__name">Audio</div>'+   
    '                   </div>'+
    '               </a>'+
    '          </div>'+
    '          <div class="cv-UTY-2-18-category">'+
    '               <a href="/templates">'+
    '                   <div class="cv-UTY-2-18-category__content">'+
    '                         <div class="cv-UTY-2-18-category__img">'+
    '                             <div class="cv-UTY-2-18-templates"></div>'+
    '                         </div>'+
    '                         <div class="cv-UTY-2-18-category__name">Templates</div>'+
    '                   </div>'+
    '               </a>'+
    '          </div>'+
    '          <div class="cv-UTY-2-18-category">'+
    '               <a href="/vfx">'+
    '                   <div class="cv-UTY-2-18-category__content">'+
    '                         <div class="cv-UTY-2-18-category__img">'+
    '                             <div class="cv-UTY-2-18-vfx"></div>'+
    '                         </div>'+
    '                         <div class="cv-UTY-2-18-category__name">VFX</div>'+  
    '                   </div>'+
    '               </a>'+
    '          </div>'+
    '          <div class="cv-UTY-2-18-category">'+
    '               <a href="/add-ons">'+
    '                   <div class="cv-UTY-2-18-category__content">'+
    '                         <div class="cv-UTY-2-18-category__img">'+
    '                             <div class="cv-UTY-2-18-addOns"></div>'+
    '                         </div>'+
    '                         <div class="cv-UTY-2-18-category__name">Add-ons</div>'+
    '                   </div>'+
    '               </a>'+
    '          </div>'+
    '          <div class="cv-UTY-2-18-category">'+
    '               <a href="/?category=essentials&orderBy=1">'+
    '                   <div class="cv-UTY-2-18-category__content">'+
    '                         <div class="cv-UTY-2-18-category__img">'+
    '                             <div class="cv-UTY-2-18-essentials"></div>'+
    '                         </div>'+
    '                         <div class="cv-UTY-2-18-category__name">Essentials</div>'+ 
    '                   </div>'+
    '               </a>'+
    '          </div>'+
    '          <div class="cv-UTY-2-18-category">'+
    '               <a href="#">'+
    '                   <div class="cv-UTY-2-18-category__content">'+
    '                         <div class="cv-UTY-2-18-category__img">'+
    '                             <div class="cv-UTY-2-18-new"></div>'+
    '                         </div>'+
    '                         <div class="cv-UTY-2-18-category__name">New</div>'+ 
    '                   </div>'+
    '               </a>'+
    '          </div>'+
    '          <div class="cv-UTY-2-18-category">'+
    '               <a href="#">'+
    '                   <div class="cv-UTY-2-18-category__content">'+
    '                         <div class="cv-UTY-2-18-category__img">'+
    '                             <div class="cv-UTY-2-18-onSale"></div>'+
    '                         </div>'+
    '                         <div class="cv-UTY-2-18-category__name">On Sale</div>'+ 
    '                   </div>'+
    '               </a>'+
    '          </div>'+
    '          <div class="cv-UTY-2-18-category">'+
    '               <a href="#">'+
    '                   <div class="cv-UTY-2-18-category__content">'+
    '                         <div class="cv-UTY-2-18-category__img">'+
    '                             <div class="cv-UTY-2-18-topSelling"></div>'+
    '                         </div>'+
    '                         <div class="cv-UTY-2-18-category__name">Top selling</div>'+ 
    '                   </div>'+
    '               </a>'+
    '          </div>'+
    '          <div class="cv-UTY-2-18-category">'+
    '               <a href="#">'+
    '                   <div class="cv-UTY-2-18-category__content">'+
    '                         <div class="cv-UTY-2-18-category__img">'+
    '                             <div class="cv-UTY-2-18-trending"></div>'+
    '                         </div>'+
    '                         <div class="cv-UTY-2-18-category__name">Trending</div>'+ 
    '                   </div>'+
    '               </a>'+
    '          </div>'+
    '     </div>'+
    '</div>';

    function init() {

      document.querySelector('.Gk5o7').parentElement.insertAdjacentHTML('beforebegin',cvCategories);
      document.querySelector('._28Nff').parentElement.classList.add('cv-UTY-2-18-hide');
      
    }

    waitForElement('.Gk5o7', init, 50, 15000);
  } catch (e) {
    if (debug) console.log(e, "error in Test" + variation_name);
  }
})();