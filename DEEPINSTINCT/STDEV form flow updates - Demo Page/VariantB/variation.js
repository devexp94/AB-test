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

    var leftSection =''+ 
    '<div class="eg-left-section">'+
    '  <h2 class="eg-heading">Request a Demo</h2>'+ 
    '  <p class="eg-subheading">Understand how you can protect your enterprise\'s assets. </br>Book your private demo with a Deep Instinct<sup>TM</sup> expert consultant.</p>'+ 
    '  <ul class="eg-list">'+ 
    '      <li>99% Unknown Threat Accuracy</li>'+ 
    '      <li>Detect and Prevent Unknown Cyber Threats</li>'+ 
    '      <li>Less than 0.1% False Positives</li>'+ 
    '      <li>Breathtakingly Fast</li>'+ 
    '  </ul>'+ 
    '  <div class="eg-image-container">'+ 
    '      <img src="https://info.deepinstinct.com/hs-fs/hubfs/tablet-1.png?width=600&height=361&name=tablet-1.png">'+ 
    '      <p class="eg-image-detail">Snapshot of a client dashboard.</p>'+
    '  </div>'+ 
    '  <div class="eg-logo-conatiner">'+ 
    '      <p class="logo-heading">Trusted by organizations just like yours!</p>'+ 
    '      <div class="eg-logo-box">'+
    '       <img src="https://www.deepinstinct.com/_next/image?url=https%3A%2F%2Fwww.deepinstinct.com%2Fimage%2Fblt73be82015af37415%2F616f3d55c84e4d1bb61dc03b%2Fhoneywell.png&w=3840&q=75"">'+
    '       <img src="https://www.deepinstinct.com/_next/image?url=https%3A%2F%2Fwww.deepinstinct.com%2Fimage%2Fbltc33d4d6ade939fa7%2F615eb1587e4c056146cb78be%2FTSystems.png&w=3840&q=75">'+
    '       <img src="https://www.deepinstinct.com/_next/image?url=https%3A%2F%2Fwww.deepinstinct.com%2Fimage%2Fbltf96b8bf8a8478627%2F615eb1401be8434dc3bd1ab3%2FSeiko.png&w=3840&q=75">'+
    '       <img src="https://www.deepinstinct.com/_next/image?url=https%3A%2F%2Fwww.deepinstinct.com%2Fimage%2Fblt9b24a312c1f43c54%2F615eb1719c76234dd174d3a9%2FSeneca.png&w=3840&q=75">'+
    '      </div>'+
    '</div>'+
    '</div>'+
    '</div>';

    function init() {


      document.querySelector('.row-depth-1.row-number-3 .span7.widget-span.widget-type-widget_container').innerHTML = leftSection;

      document.querySelector('.form-title').innerHTML = "Don't waste another day chasing false positives. Enter your information below to get started now!";

      setTimeout(function(){

        document.querySelector('form.hs-form .hs-button').setAttribute('value', 'Request Demo');
        document.querySelector('.hs-firstname label span:nth-child(1)').innerHTML = 'First Name';
        document.querySelector('.hs-lastname label span:nth-child(1)').innerHTML = 'Last Name';
        document.querySelector('.hs-phone label span:nth-child(1)').innerHTML = 'Phone Number';
        document.querySelector('.hs-company label span:nth-child(1)').innerHTML = 'Company Name';
        document.querySelector('.hs-company_size label span:nth-child(1)').innerHTML = 'Company Size';
        
        

      }, 2000)



    }

    waitForElement("form.hs-form .hs-button", init, 100, 35000);
  } catch (e) {
    if (debug) console.log(e, "error in Test" + variation_name);
  }
})();
