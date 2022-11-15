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
    
    var quizOption = '<li id="quiz-menu" class="quiz-menu menu-item menu-item-type-post_type menu-item-object-page">'+
    '<a class="btn" href="/which-plan-should-you-choose/">Take the Quiz</a>'+
    '</li>';
    

    /* Variation Init */
    function init() {
    
      document.querySelector('#menu-main-menu > li:last-child').insertAdjacentHTML('afterend', quizOption);

    }
    /* Initialise variation */
    waitForElement("#menu-main-menu > li:last-child", init, 50, 25000);
  } catch (e) {
    if (debug) console.log(e, "error in Test" + variation_name);
  }
})();
