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

    var tickMark =''+ 
'  <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Capa_1" x="0px" y="0px" width="78.369px" height="78.369px" viewBox="0 0 78.369 78.369" style="enable-background:new 0 0 78.369 78.369;" xml:space="preserve">'+ 
'  <g>'+ 
'      <path d="M78.049,19.015L29.458,67.606c-0.428,0.428-1.121,0.428-1.548,0L0.32,40.015c-0.427-0.426-0.427-1.119,0-1.547l6.704-6.704   c0.428-0.427,1.121-0.427,1.548,0l20.113,20.112l41.113-41.113c0.429-0.427,1.12-0.427,1.548,0l6.703,6.704   C78.477,17.894,78.477,18.586,78.049,19.015z"/>'+ 
'  </g>'+ 
'  <g>'+ 
'  </g>'+ 
'  <g>'+ 
'  </g>'+ 
'  <g>'+ 
'  </g>'+ 
'  <g>'+ 
'  </g>'+ 
'  <g>'+ 
'  </g>'+ 
'  <g>'+ 
'  </g>'+ 
'  <g>'+ 
'  </g>'+ 
'  <g>'+ 
'  </g>'+ 
'  <g>'+ 
'  </g>'+ 
'  <g>'+ 
'  </g>'+ 
'  <g>'+ 
'  </g>'+ 
'  <g>'+ 
'  </g>'+ 
'  <g>'+ 
'  </g>'+ 
'  <g>'+ 
'  </g>'+ 
'  <g>'+ 
'  </g>'+ 
'  </svg>';



    var logoLink =''+ 
    '  <a aria-label="to home page" class="logo_logo-wrap__TtbPy" href="https://www.deepinstinct.com/"><svg fill="currentColor" width="135" height="67" viewBox="0 0 994 471.4" class="icon inline-block align-middle relative z-50 logo_logo__obkCU" focusable="false"><path d="M964.49 294.51h1.38v-16.97h6.88v-1.38h-15.14v1.38h6.88v16.97zM31.01 309.46h42.48v161.19H31.01z" fill="currentColor"></path><path d="M226.82 324.53c-10.25-8.72-27.69-13.27-53.1-13.27h-82.3v161.19h42.85V345.77h36c13.65 0 21.24 1.14 25 4.93 4.55 4.55 6.83 12.52 6.83 24.65v97.1h40.58V370c.07-21.2-5.24-36-15.86-45.47Z" fill="currentColor" transform="translate(-3 -1.8)"></path><path d="M521.06 309.46h42.85v161.19h-42.85z" fill="currentColor"></path><path d="M714.6 324.53c-10.25-9.1-26.94-13.27-52-13.27h-81.13v161.19h39.45V345.77h38.3c12.9 0 20.1 1.14 23.89 4.93 4.18 4.18 6.07 11.38 6.07 24.65v97.1h40.21V370c0-22-4.55-36.75-14.79-45.47ZM939.74 277.51h-40.59v33.37h-73.57c-15.17 0-26.55.77-36 3.8a62.75 62.75 0 0 0-25 15.17 74.23 74.23 0 0 0-17.83 27.69 99.23 99.23 0 0 0-6.45 35.64 92.67 92.67 0 0 0 6.45 34.14 75.85 75.85 0 0 0 17.83 27.31c6.45 6.07 14 10.24 24.65 14 9.48 3 21.62 3.8 36.79 3.8h57.65v-34.49h-44.44c-12.13 0-19.34-.38-23.89-1.14s-10.62-2.28-14-4.18c-6.82-4.17-10.24-6.07-13.27-12.89-3.41-6.82-4.93-15.55-4.93-26.17 0-18.58 4.17-31.49 12.13-39.07 8.34-7.58 23.51-8.34 44-8.34h60.31v78.12c0 16.31 3.8 27.69 12.13 36.79 8 8.35 19 12.14 36 12.14H986v-28.07h-15.92c-11 0-19-2.64-23.51-7.58-4.55-5.31-6.83-14.41-6.83-26.92v-64.1h49.69V312h-49.69ZM464.36 272.9l-40.58 24.29v12.92H309.63c-20.48 0-34.51 4.17-43.62 12.13-9.11 8.34-13.66 20.85-13.66 38.31s3.8 29.58 11.38 36c7.59 6.83 22.76 10.24 44.76 10.24h37.93c9.1 0 15.17 1.15 19 3.8 4.17 3 6.45 7.59 6.45 13.65s-2.28 10.24-6.45 13.27c-4.55 3-11.75 3.8-19 3.8h-90.65v30.72h111.51c13.66 0 23.52-4.17 31.49-12.89 8.34-9.49 12.51-21.24 12.51-36 0-15.56-4.55-26.56-14-34.9-8.72-8-22-11.38-40.58-11.38h-39.85c-8.73 0-14-2.65-16.69-4.55-3.79-2.65-5.69-7.58-5.69-13.27 0-6.45 2.28-10.62 6.45-13.27 3.8-2.28 12.52-3.41 25.41-3.41h97.09v81.16c0 16.31 3.79 28.07 12.14 36.79 8 8.34 18.95 12.14 35.64 12.14l38.68-.07v-28.77h-16.31c-11 0-18.59-2.66-23.13-8-4.55-4.93-6.45-14-6.45-26.93v-67.09h45.89v-31.48h-45.52ZM995 277.5c-.92 0-1.46.51-1.91 1.89 0 0-5 14.92-6 14.92s-6-14.92-6-14.92c-.47-1.37-1-1.89-1.92-1.89-2.29 0-2 1.84-2 1.84v17h1.38v-17c0-.46.77-.9 1.29.15s5.17 16.81 7.26 16.81 6.74-15.75 7.27-16.81 1.29-.62 1.29-.15v17H997v-17s.26-1.84-2-1.84Z" fill="currentColor" transform="translate(-3 -1.8)"></path><path d="M503.43 77.18h-80.3v204.67L464 257.23v-21.32h37.12c15.91 0 28.79-1.9 38.26-5.68a58.4 58.4 0 0 0 24.63-18.56 73 73 0 0 0 12.87-23.86 99.81 99.81 0 0 0 4.21-28.81c-.39-25.77-7.21-45.85-20.84-60.25s-32.59-21.57-56.82-21.57ZM526.91 192c-7.2 7.19-19.7 11-36.75 11h-26.52v-92.86h29.93c16.29 0 28 3.41 34.47 10.23 6.82 6.82 9.85 18.56 9.85 34.85.01 17.43-3.78 29.55-10.98 36.78ZM228.4 110.14a46 46 0 0 1 46.21 44.32l.38 4.17a87.25 87.25 0 0 0 6.06 29.17 88 88 0 0 0 17.05 25.38 83.12 83.12 0 0 0 25.38 17 81.12 81.12 0 0 0 31.07 6.06h55.3v-33h-55.3A46 46 0 0 1 308.33 159l-.37-4.17a87.26 87.26 0 0 0-6.07-29.17 87.74 87.74 0 0 0-17-25.38 82.84 82.84 0 0 0-25.39-17 78.54 78.54 0 0 0-31.06-6.44H172v33.33h56.4Z" fill="currentColor" transform="translate(-3 -1.8)"></path><path d="m318.18 156 .38 4.16a27.28 27.28 0 0 0 2.27 11h89v-31.48h-93.17a118.19 118.19 0 0 1 1.52 16.32ZM264.77 161.28l-.38-4.17c-.37-6.06-1.89-12.12-5.3-17H172v31.44h93.19c-.05-3.83-.42-7.24-.42-10.27ZM315.54 132.49a46.41 46.41 0 0 1 39.4-22h54.91V77.18h-54.92a79.91 79.91 0 0 0-31.06 6.44 74.14 74.14 0 0 0-25 16.67 93.47 93.47 0 0 1 12.88 21.22 95 95 0 0 1 3.79 10.98ZM268.18 181a46.42 46.42 0 0 1-39.4 22h-56.71v32.56h56.7c11.37 0 21.59-1.89 31.06-6.06a74.14 74.14 0 0 0 25-16.67A93.47 93.47 0 0 1 272 191.57a43.64 43.64 0 0 1-3.82-10.57ZM159.48 235.52V1.8h-39.42v75.39H82.93c-15.91 0-28.79 1.89-38.26 5.68a58.32 58.32 0 0 0-24.62 18.56 73.06 73.06 0 0 0-12.88 23.86A99.76 99.76 0 0 0 3 154.08c0 25.38 6.82 45.84 20.45 59.85q20.46 21.6 56.82 21.59h79.21Zm-39.81-32.19H90.12c-16.28 0-27.65-3.4-34.47-10.23s-10.23-18.56-10.23-34.85c0-16.67 3.79-29.17 11-36.37s19.71-11 37.13-11h26.14Z" fill="currentColor" transform="translate(-3 -1.8)"></path></svg></a>';

    var egMenuDesktop =''+ 
    '  <div class="eg-logo">'+ logoLink +'</div>';

    var quoteIcon =''+ 
    '  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M11 9.275c0 5.141-3.892 10.519-10 11.725l-.984-2.126c2.215-.835 4.163-3.742 4.38-5.746-2.491-.392-4.396-2.547-4.396-5.149 0-3.182 2.584-4.979 5.199-4.979 3.015 0 5.801 2.305 5.801 6.275zm13 0c0 5.141-3.892 10.519-10 11.725l-.984-2.126c2.215-.835 4.163-3.742 4.38-5.746-2.491-.392-4.396-2.547-4.396-5.149 0-3.182 2.584-4.979 5.199-4.979 3.015 0 5.801 2.305 5.801 6.275z"/></svg>';


    var leftSection =''+ 
    '<div class="eg-left-section">'+
    '<div class="eg-left-section-inr">'+
    '<div class="eg-left-section-container">'+
    '<h1 class="eg-hero-heading"><strong>2022</strong> Cyber Threat Landscape <strong>Report</strong></h1>'+
    '<p class="eg-hero-subheading">See our analysis of malware families, unknowns, and high profile vulnerabilities.</p>'+
    '  <h2 class="eg-heading">Learn to better understand and prepare for threats and vulnerabilities to come!</h2>'+ 
    '  <ul class="eg-list">'+ 
    '      <li>' + tickMark + 'Learn how to stop the most devastating malware and ransomware</li>'+ 
    '      <li>' + tickMark + 'Learn how malware incliding lcedID, Qakbot, Dridex, and Trickbot target the financial sector</li>'+ 
    '      <li>' + tickMark + 'Learn how & why threats are evolving to target higher-profile organizations</li>'+ 
    '      <li>' + tickMark + 'Learn why the large supply chain attacks of 2021 are only the beginning</li>'+ 
    '      <li>' + tickMark + 'Learn how deep learning delivers the highest level of prevention available.</li>'+ 
    '  </ul>'+ 
    '  </div>'+ 
    '  </div>'+ 
    '  <div class="eg-image-container">'+ 
    '      <img src="https://sitetuners.com/clients/deepinstinct/banner.jpg">'+ 
    '  </div>'+ 
    '  <div class="eg-logo-conatiner">'+ 
    '      <p class="logo-heading">Trusted by organizations just like yours!</p>'+ 
    '      <div class="eg-logo-box">'+
    '       <img src="https://sitetuners.com/clients/deepinstinct/logo-honeywell.png">'+
    '       <img src="https://sitetuners.com/clients/deepinstinct/logo-tsystems.png">'+
    '       <img src="https://sitetuners.com/clients/deepinstinct/logo-seiko.png">'+
    '      </div>'+
    '</div>'+
    '</div>';

var mobileContainer = ''+
'  <div class="eg-logo-conatiner eg-mobile-logo-container">'+ 
'      <p class="logo-heading">Trusted by organizations just like yours!</p>'+ 
'      <div class="eg-logo-box">'+
'       <img src="https://sitetunershosting.com/clients/deepinstinct/Honeywell.png">'+
'       <img src="https://sitetunershosting.com/clients/deepinstinct/Tsystem.png">'+
'       <img src="https://sitetunershosting.com/clients/deepinstinct/seiko.png">'+
'      </div>'+
'</div>'+
'   <div class="eg-mobile-section">'+
'   <div class="eg-mobile-section-inr">'+
'  <h2 class="eg-heading">Learn to better understand and prepare for threats and vulnerabilities to come!</h2>'+ 
    '  <ul class="eg-list">'+ 
    '      <li>' + tickMark + 'Learn how to stop the most devastating malware and ransomware</li>'+ 
    '      <li>' + tickMark + 'Learn how malware incliding lcedID, Qakbot, Dridex, and Trickbot target the financial sector</li>'+ 
    '      <li>' + tickMark + 'Learn how & why threats are evolving to target higher-profile organizations</li>'+ 
    '      <li>' + tickMark + 'Learn why the large supply chain attacks of 2021 are only the beginning</li>'+ 
    '      <li>' + tickMark + 'Learn how deep learning delivers the highest level of prevention available.</li>'+ 
    '  </ul>'+ 
'  <div class="eg-image-container">'+ 
'      <img src="https://sitetuners.com/clients/deepinstinct/banner.jpg">'+ 
'  </div>'+ 
'   </div></div>';

    function init() {

      document.querySelector('.header-container-wrapper .header-container.container-fluid').innerHTML= egMenuDesktop;

      // document.querySelector('.row-fluid-wrapper.row-depth-1.row-number-6 > .row-fluid ').innerHTML = egHeroText;

       document.querySelector('.row-fluid-wrapper.row-depth-1.row-number-7 > .row-fluid .top-sec-rich-text').innerHTML = leftSection;

       document.querySelector('html body .row-fluid-wrapper.row-number-7 .top-sec-form form').insertAdjacentHTML('beforebegin', '<h3 class="form-title">Complete the form below to download your free report</h3>');
       
      document.querySelector('.footer-container-wrapper').insertAdjacentHTML('beforebegin', mobileContainer);

      setTimeout(function(){
        document.querySelector('form.hs-form .hs-button').setAttribute('value', 'Read The Report Now');
      }, 2000)
   
      

    }

    waitForElement("form.hs-form .hs-button", init, 100, 35000);
  } catch (e) {
    if (debug) console.log(e, "error in Test" + variation_name);
  }
})();

