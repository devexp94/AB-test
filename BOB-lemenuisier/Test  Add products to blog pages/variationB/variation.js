
(function() {
    try {
        /* main variables */
        var debug = 0;
        var variation_name = "";

        /* all Pure helper functions */


        // selector would be the parent div where your are changing css/js
        function waitForElement(selector, trigger, delayInterval, delayTimeout) {
            var interval = setInterval(function() {
                if (
                    document &&
                    document.querySelector(selector) &&
                    document.querySelectorAll(selector).length > 0
                ) {
                    clearInterval(interval);
                    trigger();
                }
            }, delayInterval);
            setTimeout(function() {
                clearInterval(interval);
            }, delayTimeout);
        }

        var pageData = {
            "/blog/volet-roulant-qui-ne-descend-ou-ne-remonte-plus-que-faire":"https://www.bob-lemenuisier.fr/volets/volets-roulants",
            "/blog/comment-programmer-une-telecommande-de-porte-de-garage":"https://www.bob-lemenuisier.fr/portes-de-garage"
        }
        let htmlString = `<div class="eg-products-container">
            <ul>
            </ul>
        </div>`;

        /* Variation functions */
        function init() {
            // selecting both content div ( desktop and mobile) and adding custom html
            document.querySelectorAll("main  article .amblog-main-content .amblog-content").forEach(egTarget => {
                egTarget.insertAdjacentHTML("beforeend", htmlString);
            });
            var url = pageData[window.location.pathname];
            getData(url);
        }

function getData(url){
    var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
       var data = this.responseText;
       var newEle = document.createElement('div');
       newEle.innerHTML = data;
       var ele = newEle.querySelectorAll('.bob-products-grid ol li');
       addHtml(ele);
    }
  };
  xhttp.open("GET", url, true);
  xhttp.send();
}

  function addHtml(ele){
    console.log('hello',ele);
  ele.forEach(function(val,i){
    if(i< 4){
document.querySelector('.eg-products-container ul').insertAdjacentElement('beforeend',val);
console.log(val);
    }
  });
  }
        /* Initialize variation */
        waitForElement("main  article", init, 50, 15000);
    } catch (e) {
        if (debug) console.log(e, "error in Test" + variation_name);
    }
})();