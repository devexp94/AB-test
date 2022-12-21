(function () {
  try {
    /* main variables */
    var debug = 0;
    var variation_name = "";
    var $;
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
 
    
    /* Variation Init */
    function init() {
      /* start your code here */

      if (window.location.href.indexOf("https://store.altium.com/newstore/index") != -1) {
          document.querySelector("body > div.l-page__in section div.s-products__item._style-row > div.s-products__text > p:nth-child(2)").innerText = "EDA software that unifies schematic capture, PCB layout, library management, simulation, documentation, and everything else you need to design and manufacture electronic products."
      } 
      else if(window.location.pathname == '/StepsNew/Subscription/index'){
        console.log(true);


      /**** Adding Best ****/
        // let egPara = document.querySelectorAll(".s-levels__wrap .s-levels__head > p");
        // for (let para of egPara ) {
        //  para.textContent = "Best " +  para.textContent; 
        //   para.innerText =  para.innerText.replace("For" , "for");
        // }

          /**** Changing CTA Text ****/

        // document.querySelector("div.s-levels__wrap > div:nth-child(3) > div.s-levels__btns > div:nth-child(1) > a").innerText = "Contact Sales";

          /**** Adding Paragraph ****/

      //   let text = document.querySelectorAll("div.s-levels__wrap > div:not(:nth-child(3)) > div.s-levels__price-wrap > p.month-value");
      //   for (let egText of text) {
      //     egText.insertAdjacentHTML("afterend" , "<p class='egDesc'>12-month commitment</p>")
      // }

      // /********** Changing list iems **********/

        let egListItem1 = 
        ''+ 
        '  <li>Unified environment for every aspect of the electronics design process</li>'+ 
        '  <li>Hierarchical schematic capture with integrated SPICE simulation</li>'+ 
        '  <li>PCB editor with interactive routing engine and built-in signal integrity tools</li>'+ 
        '  <li>interactive 3D design viewer with support for a variety of mechanical models</li>'+ 
        '  <li>Centralized and version-controlled libraries with real time supply chain data</li>'+ 
        '  <li>Built-in fabrication and assembly drawing generation tools</li>'+ 
        '  <li>Software updates and support services</li>';

        let egListItem2 = 
        ''+ 
        '  <li>Producr design capabilities for multi-board systems/assemblies and harmness</li>'+ 
        '  <li>Managed libraries with lifecycle states, templates, and where-used plus supply chain and risk data from IHS Markit</li>'+ 
        '  <li>Advanced mechanical integration for rigid-flex support,copper geometry , MCAD component placement, enclosure exchange and more </li>'+ 
        '  <li>Manager level contro for team configurations, roles and permissions</li>'+ 
        '  <li>Connect to popular Single Sign-On identity services with the SAML protocol</li>'+ 
        '  <li>Flexible license use for single continent or global teams</li>'+ 
        '  <li>Priority support ticket escalation and a dedicated Customer Success Manger</li>';

        let egListItem3 = 
        ''+ 
        '  <li>Managed processes and workflows for design reviews, part requests, lifecycle states, and project creation/release</li>'+ 
        '  <li>PLM and ERP integrations for Arena PLM, PTC Windchill, Aras PLM, Oracle Agile PLM, and Teamcenter</li>'+ 
        '  <li>Advanced mechanical integration for rigid-flex support,copper geometry , MCAD component placement, enclosure exchange and more </li>'+ 
        '  <li>Managed tool configuration , project settings, and document standardization for every team</li>'+ 
        '  <li>Enterprise-level support and a dedicated Custmor Success Manger</li>'+ 
        '  <li>Available as an on-premise solution</li>'+ 
        '  <li>Unlimited access to Altium on demand training courses.</li>';


     document.querySelector("div.s-levels__wrap > div:nth-child(1) > div.s-levels__desc > div > ul").innerHTML = egListItem1;
     document.querySelector("div.s-levels__wrap > div:nth-child(2) > div.s-levels__desc > div > ul").innerHTML = egListItem2;
     document.querySelector("div.s-levels__wrap > div:nth-child(3) > div.s-levels__desc > div > ul").innerHTML = egListItem3;

      }
    }

    /* Initialize variation */
    waitForElement('body', init, 50, 15000);
  } catch (e) {
    if (debug) console.log(e, "error in Test" + variation_name);
  }
})();
