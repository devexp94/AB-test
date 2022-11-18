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

    var egViewMode =''+ 
    '  <div class="eg-view-section">'+ 
    '      <div class="eg-grid-view">'+ 
        '              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M4.25 2.99976C3.55964 2.99976 3 3.5594 3 4.24976V9.79521C3 10.4856 3.55964 11.0452 4.25 11.0452H9.79545C10.4858 11.0452 11.0455 10.4856 11.0455 9.79521V4.24976C11.0455 3.5594 10.4858 2.99976 9.79545 2.99976H4.25ZM4.5 9.54521V4.49976H9.54545V9.54521H4.5ZM14.0682 2.99976C13.3778 2.99976 12.8182 3.5594 12.8182 4.24976V9.79521C12.8182 10.4856 13.3778 11.0452 14.0682 11.0452H19.6136C20.304 11.0452 20.8636 10.4856 20.8636 9.79521V4.24976C20.8636 3.5594 20.304 2.99976 19.6136 2.99976H14.0682ZM14.3182 9.54521V4.49976H19.3636V9.54521H14.3182ZM3 14.0679C3 13.3776 3.55964 12.8179 4.25 12.8179H9.79545C10.4858 12.8179 11.0455 13.3776 11.0455 14.0679V19.6134C11.0455 20.3037 10.4858 20.8634 9.79545 20.8634H4.25C3.55964 20.8634 3 20.3037 3 19.6134V14.0679ZM4.5 14.3179V19.3634H9.54545V14.3179H4.5ZM14.0682 12.8179C13.3778 12.8179 12.8182 13.3776 12.8182 14.0679V19.6134C12.8182 20.3037 13.3778 20.8634 14.0682 20.8634H19.6136C20.304 20.8634 20.8636 20.3037 20.8636 19.6134V14.0679C20.8636 13.3776 20.304 12.8179 19.6136 12.8179H14.0682ZM14.3182 19.3634V14.3179H19.3636V19.3634H14.3182Z" fill="#C1C1C1"></path></svg>'+ 
        '      </div>'+ 
    '      <div class="eg-row-view">'+ 
        '              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M4.25 2.99976C3.55964 2.99976 3 3.5594 3 4.24976V9.79521C3 10.4856 3.55964 11.0452 4.25 11.0452H19.6102C20.3006 11.0452 20.8602 10.4856 20.8602 9.79521V4.24976C20.8602 3.5594 20.3006 2.99976 19.6102 2.99976H4.25ZM4.5 9.54521V4.49976H19.3602V9.54521H4.5ZM4.25 12.8179C3.55964 12.8179 3 13.3776 3 14.0679V19.6134C3 20.3037 3.55964 20.8634 4.25 20.8634H19.6102C20.3006 20.8634 20.8602 20.3037 20.8602 19.6134V14.0679C20.8602 13.3776 20.3006 12.8179 19.6102 12.8179H4.25ZM4.5 19.3634V14.3179H19.3602V19.3634H4.5Z" fill="#C1C1C1"></path></svg>'+ 
    '          </div>'+ 
    '  </div>';

    function init() {

      document.querySelector('.findify-components-search--mobile-actions').insertAdjacentHTML('afterend', egViewMode);

      document.querySelector('body').classList.add('eg-grid-active');

      document.querySelector('.eg-view-section .eg-grid-view').addEventListener('click', function(){
        if(document.querySelector('body.eg-row-active')){
          document.querySelector('body.eg-row-active').classList.remove('eg-row-active');
          document.querySelector('body').classList.add('eg-grid-active');
        }else{
          document.querySelector('body').classList.add('eg-grid-active');
        }
      })

      document.querySelector('.eg-view-section .eg-row-view').addEventListener('click', function(){
        if(document.querySelector('body.eg-grid-active')){
          document.querySelector('body.eg-grid-active').classList.remove('eg-grid-active');
          document.querySelector('body').classList.add('eg-row-active');
        }else{
          document.querySelector('body').classList.add('eg-row-active');
        }
      })

    }

    /* Initialise variation */
    waitForElement(".findify-components-search--mobile-actions", init, 100, 25000);
  } catch (e) {
    if (debug) console.log(e, "error in Test" + variation_name);
  }
})();
