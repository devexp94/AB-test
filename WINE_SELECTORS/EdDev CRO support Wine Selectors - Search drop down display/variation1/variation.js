(function () {
    try {
      var debug = 0;
      var variation_name = "";
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
  
      function init() {

  // Select the node that will be observed for mutations
  var targetNode = document.getElementById('sli_autocomplete');
  // Options for the observer (which mutations to observe)
  var config = { attributes: true,
        childList: true,
        characterData: true };

  // Callback function to execute when mutations are observed
  var callback = function(mutationsList, observer) {
    for(var i = 0 ; i < mutationsList.length ; i++) {
      waitForElement('#sli_autocomplete .sts_suggestions .sts_suggestions-heading', init2, 50, 15000);

      }
  };
  
// Create an observer instance linked to the callback function
var observer = new MutationObserver(callback);
// Start observing the target node for configured mutations
observer.observe(targetNode, config);       

      }
      
      function init2(){
        
        
        document.querySelector('#sli_autocomplete .sts_suggestions #sli_products_search_suggestions').insertAdjacentElement('beforebegin', document.querySelector('#sli_autocomplete .sts_suggestions .sts_suggestions-heading'));


        $(window).on('resize', function() {
          SearchContent();
        });
       
        SearchContent();

      }

      function SearchContent(){
        if(window.innerWidth > 768){
          var searchName = document.querySelector('.primary-nav-container input[st_searchbox-textfield]').value;
          document.querySelector('#sli_autocomplete .sts_suggestions-heading').innerHTML = 'Search Suggestion for "'+ searchName +'"';

        }else{

          var searchName = document.querySelector('.search-expander input[st_searchbox-textfield]').value;
          document.querySelector('#sli_autocomplete .sts_suggestions-heading').innerHTML = 'Search Suggestion for "'+ searchName +'"';    


        }
      }

      waitForElement('#sli_autocomplete', init, 50, 15000);
      
    } catch (e) {
      if (debug) console.log(e, "error in Test" + variation_name);
    }
  })();