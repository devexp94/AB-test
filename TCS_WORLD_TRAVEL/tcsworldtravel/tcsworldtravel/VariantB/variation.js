var waitForEl = function(selector, callback) {
  if (jQuery(selector).length) {
    callback();
  } else {
    setTimeout(function() {
      waitForEl(selector, callback);
    }, 100);
  }
 };
 
 var waitForBannerClosure = function(callback) {
  if (document.querySelector('#block-bookwithconfident').offsetHeight === 0) {
    callback();
  } else {
    setTimeout(function() {
      waitForBannerClosure(callback);
    }, 100);
  }
 };
 
 waitForEl('header', function() {
 document.querySelector('#mobile-filter-container-ui').style.top = `${document.querySelector('header').offsetHeight}px`;
 
  //var $ = window.jQuery;

    var rect = document.querySelector('#trips-result').getBoundingClientRect();
    var eletop = rect.top-80;
    window.addEventListener('scroll',function(){
    var top = window.scrollY;
    if(top > eletop){
    document.body.classList.add('eg-sticky-tab');
    }
    else{
    document.body.classList.remove('eg-sticky-tab');
    }
    
    });
 });
 
 if (document.querySelector('.top-banner--close')) {
   document.querySelector('.top-banner--close').addEventListener('click', function() {
     waitForBannerClosure(function() {
       document.querySelector('#mobile-filter-container-ui').style.top = `${document.querySelector('header').offsetHeight}px`;
     });
   });
 }