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
//<iframe src="https://player.vimeo.com/video/737882682?h=e026e88672" width="640" height="564" frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe>
   var videoData ={
      "/facial-razor.html":"https://player.vimeo.com/video/737882929",
      "/mini-cuticle-nipper.html":"https://player.vimeo.com/video/737882682",
      "/stainless-steel-nail-clipper-set.html":"https://player.vimeo.com/video/737882564",
      "/essential-grooming-kit.html":"https://player.vimeo.com/video/737882359",
      "/curl-38-lashcomb.html":"https://player.vimeo.com/video/737882829",
      "/lash-gaurd-and-comb.html":"https://player.vimeo.com/video/737882771",
      "/pushy-and-nail-cleaner.html":"https://player.vimeo.com/video/737882644",
      "/rose-gold-slant-tweezer.html":"https://player.vimeo.com/video/737882728",
      "/rose-gold-classic-curler.html":"https://player.vimeo.com/video/737882879",
      "/mens-pushy-and-cleaner.html":"https://player.vimeo.com/video/737882663",
      "/sole-smoother-antibacterial-callus-stone.html":"https://player.vimeo.com/video/737882461",
      "/polish-removal-cloths.html":"https://player.vimeo.com/video/737882402",
      "/travel-tool-essentials.html":"https://player.vimeo.com/video/737882380",
      "/polish-removal-kit.html":"https://player.vimeo.com/video/737882528",
      "/angled-brow-brush-spoolie.html":"https://player.vimeo.com/video/737882701",
      "/professional-nail-files.html":"https://player.vimeo.com/video/737882575",
      "/slant-tweezer-pretty-in-pink.html":"https://player.vimeo.com/video/737882752",
      "/curl-38-eyelash-curler.html":"https://player.vimeo.com/video/737882792",
      "/pedicure-rasp-callus-remover.html":"https://player.vimeo.com/video/737882484",
      "/rose-gold-manicure-set.html":"https://player.vimeo.com/video/737882497",
      "/curl-60-eyelash-curler.html":"https://player.vimeo.com/video/737882848",
      "/glass-nail-file.html":"https://player.vimeo.com/video/737882604",
      "/filemate-chevron-blue-pattern.html":"https://player.vimeo.com/video/737882622"
    }
    
    var egAction = '<a id="eg-action" href="#eg-action-video"><span>See It In Action</span>  <i class="arrow down"></i></a>';



    function init() {
      var videoURL = videoData[window.location.pathname];

      var egVideo =''+ 
      ' <div  id="eg-action-video">'+ 
      '      <div class="video-section" style="padding:100% 0 0 0;position:relative;">'+ 
      '          <iframe src="'+ videoURL +'" width="840" height="764" frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe>'+ 
      '      </div>'+ 
      '  </div>';
  
        document.querySelector('.product.attribute.overview').insertAdjacentHTML('afterend', egAction)

        document.querySelector('.fotorama__nav__shaft > .fotorama__nav__frame--thumb:last-child').insertAdjacentHTML('afterend', '<div class="eg-thumb"><img src="https://www.tweezerman.com/media/catalog/product/cache/577c382cc0413c8dc459a5b40707da8a/x/m/xme1ehgrnj67stnuvimw_1_1.jpg"></div>')

        document.querySelector('.product-section img[alt="Tool Tips"]').insertAdjacentHTML('afterend', egVideo);
    
    }

    function init2() {
      document.querySelector('.product-info-main #prod-descriptions #tool-care').insertAdjacentHTML('afterend', egAction)
    }

    /* Initialise variation */
    waitForElement(".fotorama__nav__shaft > .fotorama__nav__frame--thumb:last-child", init, 100, 35000);
    waitForElement(".product-info-main #prod-descriptions #tool-care", init2, 100, 35000);
  } catch (e) {
    if (debug) console.log(e, "error in Test" + variation_name);
  }
})();