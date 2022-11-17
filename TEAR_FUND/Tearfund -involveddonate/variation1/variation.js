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

    var chart =''+ 
    '  <div class="eg-donetation-goal bg-darknavy px-20 pb-40 pt-32 w-full md:pb-32 md:pt-24 md:rounded-10 lg:pt-32">'+ 
    '      <div class="eg-donetation-goal-inr">'+ 
    '          <div class="eg-text-section">'+ 
    '              <h2 class="eg-heading font-bold mb-24 mt-16 text-20 text-white">We\'ve almost reached our weekly goal</h2>'+ 
    '              <p class="eg-subheading font-bold mt-16 text-18 text-compbluegrey tracking-wide md:mt-24 md:text-22 lg:text-20">With your support we can smash it!</p>'+ 
    '          </div>'+ 
    '          <div class="eg-chart-section">'+ 
    '              <div class="eg-chart-bg">'+ 
    '                 <div class="eg-chart-text">91%</div>'+
    '              </div>'+ 
    '          </div>'+ 
    '      </div>'+ 
    '  </div>';

    function httpGet(theUrl) {
      var xmlHttp = new XMLHttpRequest();
      xmlHttp.open( "GET", theUrl, false ); // false for synchronous request
      xmlHttp.send( null );
      var data = JSON.parse(xmlHttp.responseText.substr(47).slice(0,-2));
      return data;
    }

    function init() {
      document.querySelector('.space-above-56 form[action="/api/sitecore/Giving/Donate"] > div').insertAdjacentHTML('beforebegin', chart);

      if(document.querySelector('.eg-chart-text').innerText <= '100%'){
        document.querySelector('.eg-heading').innerHTML = 'We\'ve reached our weekly goal';

        document.querySelector('.eg-subheading').innerHTML = 'With your support we can keep going!';
      }

      var d = httpGet('https://docs.google.com/spreadsheets/d/195wu-q99KsTSHF3-71Xjx0WsjDu9eMVrSYBSOcVGXcQ/gviz/tq?');
      let progressValue = 0;
      let progressEndValue = d.table.rows[0].c[4].f.replace('%', '');
      let speed = 50;

      let progress = setInterval(() => {
        progressValue++;
        document.querySelector('.eg-chart-text').textContent = `${progressValue}%`;
        
        document.querySelector('html body .eg-chart-bg').style.background = 'conic-gradient(#fcd500 '+progressValue+'%, #ffffff 0%)';

        if(progressValue > 99) {
          document.querySelector('html body .eg-chart-bg').style.background = 'conic-gradient(#f79d51 '+progressValue+'%, #ffffff 0%)';
        }

        if (progressValue == progressEndValue) {
          clearInterval(progress);
        }
      }, speed);


    }

    /* Initialise variation */
    waitForElement('.space-above-56 form[action="/api/sitecore/Giving/Donate"]', init, 50, 15000);
  } catch (e) {
    if (debug) console.log(e, "error in Test" + variation_name);
  }
})();
