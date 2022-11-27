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


    const eg_menu = `<ul class="eg_main_nav">
      
    <li class="eg_list"><a href="#">Same Day Delivery Translations</a>
      <ul class="name">
        <li><a href="https://thespanishgroup.org/translations/certified-translations-for-official-civil-documents/">Certified Translations for Official Use</a></li>
        <li><a href="https://thespanishgroup.org/translations/legal-translation-services/">Certified Legal Translations</a></li>
        <li><a href="https://thespanishgroup.org/translations/diploma-and-transcript-spanish-translation/">Foreign Credential Evaluation & Translation </a></li>
        <li><a href="https://thespanishgroup.org/translations/easily-translate-pcr-covid-19-tests-and-vaccinations/">Quickly Translate PCR/Covid-19 Tests </a></li>
        <li><a href="https://thespanishgroup.org/translations/legal-document-translation-services/">Legal Translation Services for Law Firms & Organizations</a></li>
        <li><a href="https://thespanishgroup.org/translations/marketing-translation/">Marketing Translation </a></li>
        <li><a href="https://thespanishgroup.org/translations/diploma-and-transcript-spanish-translation/">Translation for Diplomas & Academic Documents</a></li>
        <li><a href="https://thespanishgroup.org/translations/complete-us-apostille-services/">US Apostille Services</a></li>
      </ul></li>

    <li class="eg_list"><a href="#">Certified Translations</a>
       <ul class="name">
         <li><a href="https://thespanishgroup.org/translations/legal-translation-services/">Certified Legal Translations</a></li>
         <li><a href="https://thespanishgroup.org/translations/certified-translations-for-official-civil-documents/">Certified Translations for Official Use </a></li>
         <li><a href="https://thespanishgroup.org/translations/diploma-and-transcript-spanish-translation/">Foreign Credential Evaluation & Translation</a></li>
         <li><a href="https://thespanishgroup.org/sitemap/">Medical Records & Documents</a></li>
         <li><a href="https://thespanishgroup.org/translations/notarized-translation/">Notarized Translations</a></li>
         <li><a href="https://thespanishgroup.org/translations/easily-translate-pcr-covid-19-tests-and-vaccinations/">Quickly Translate PCR/Covid-19 Tests </a></li>
         <li><a href="https://thespanishgroup.org/translations/diploma-and-transcript-spanish-translation/">Translation for Diplomas & Academic Documents</a></li>
         <li><a href="https://thespanishgroup.org/translations/complete-us-apostille-services/">US Apostille Services</a></li>
         <li><a href="https://thespanishgroup.org/translations/spanish-document-translations/">Word Documents & PDFs</a></li>
       </ul>
    </li>
    
    <li class="eg_list"><a href="#">Translations for Business</a>
      <ul class="name">
        <li><a href="https://thespanishgroup.org/translations/spanish-document-translations/">Business Documents & Manuals</a></li>
        <li><a href="https://thespanishgroup.org/translations/document-translations-in-90-plus-languages/">Business Document Translation</a></li>
        <li><a href="https://thespanishgroup.org/translations/comprehensive-api-translation-solutions-for-business/">Comprehensive API Translation Solutions for Business</a></li>
        <li><a href="https://thespanishgroup.org/translations/industrial-translation-services/">Industrial Translation</a></li>
        <li><a href="https://thespanishgroup.org/translations/legal-document-translation-services/">Legal Translation Services for Law Firms & Organizations</a></li>
        <li><a href="https://thespanishgroup.org/translations/marketing-translation/">Marketing Translation</a></li>
        <li><a href="https://thespanishgroup.org/translations/patent-translation-services/">Patent Translation</a></li>
        <li><a href="https://thespanishgroup.org/translations/subtitling-and-translation-services/">Subtitling & Translation Services</a></li>
        <li><a href="https://thespanishgroup.org/translations/website-translations/">Website Translations</a></li>
    </li>
  
  </ul>
`
    
    /* Variation Init */
    function init() {
      /* start your code here */

      document.querySelector("#navigation").insertAdjacentHTML("beforebegin" , eg_menu)

      
    }

    /* Initialize variation */
    waitForElement('#site-navigation > div.nav', init, 50, 15000);
  } catch (e) {
    if (debug) console.log(e, "error in Test" + variation_name);
  }
})();


