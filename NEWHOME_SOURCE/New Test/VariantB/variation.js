var utils = window.optimizely.get("utils");

utils.waitForElement(".enews-quick").then(function () {
  require(["main"], function ($) {
    var composeSidePannel = function () {
      var _parent = $(".enews-quick[data-enews-src='footer']");
      $('body').append('<div class="setOffset"></div>');
      $('.setOffset').append(_parent);
    //   _parent.addClass("setOffset").css('display','none');
      console.log("composing SidePannel");
    };

    var addTnc = function () {
      var tncLink = '<a href="#" class="cro-btn-tnc">*Terms &amp; Conditions apply</a>';
      $('.inline-privacy').prepend(tncLink);

      $('.cro-btn-tnc').on('click', function(e){
        e.preventDefault();
        $(this).closest('.inline-privacy').find('p').slideToggle("fast");
      });

    };

    var addAdditionalContent = function () {
      var topContent =
        '<div class="enews-content"><div class="enews-heading">Sign up below to claim</div>';
      topContent +=
        '<div class="enews-content-base">Sign up to Target’s enewsletter and receive $10 off your next online order when you spend $50* or more.</div>';

      topContent +=
        '<div class="enews-content-sm">Your unique code will be provided in your Welcome email which must be entered at checkout for the offer to apply.</div>';

      topContent +=
        '<div class="enews-content-xs">*Excludes gift cards and interactive gaming.</div></div>';

      $(topContent).insertAfter(".setOffset .quick-heading");

      var bottomContent = '<p class="bottom-heading">NEED IT IN TIME FOR CHRISTMAS?</p>';

      bottomContent +=
      '<p class="bottom-red-text">Click & Collect for Free</p>';

      bottomContent +=
      '<p class="bottom-para">To pick up before Christmas check your in-store availability.</p>';

      $(bottomContent).insertAfter(".setOffset button.button-submit");

      // updateTitle();
      updateCTAtext();
      addTnc();
    };

    var addCloseBtn = function () {
      var closeButton =
        // "<span class='close-btn'><svg width='38' height='38' viewBox='0 0 38 38' fill='none' xmlns='http://www.w3.org/2000/svg'><path d='M19 0.625C8.7625 0.625 0.625 8.7625 0.625 19C0.625 29.2375 8.7625 37.375 19 37.375C29.2375 37.375 37.375 29.2375 37.375 19C37.375 8.7625 29.2375 0.625 19 0.625ZM19 34.75C10.3375 34.75 3.25 27.6625 3.25 19C3.25 10.3375 10.3375 3.25 19 3.25C27.6625 3.25 34.75 10.3375 34.75 19C34.75 27.6625 27.6625 34.75 19 34.75Z' fill='black'/><path d='M26.0875 28.1875L19 21.1L11.9125 28.1875L9.8125 26.0875L16.9 19L9.8125 11.9125L11.9125 9.8125L19 16.9L26.0875 9.8125L28.1875 11.9125L21.1 19L28.1875 26.0875L26.0875 28.1875Z' fill='black'/></svg></span>";
        "<span class='close-btn'><svg width='38' height='38' viewBox='0 0 38 38' fill='#999' xmlns='http://www.w3.org/2000/svg'><circle cx='19' cy='19' r='19' fill='#999' /><path d='M19 0.625C8.7625 0.625 0.625 8.7625 0.625 19C0.625 29.2375 8.7625 37.375 19 37.375C29.2375 37.375 37.375 29.2375 37.375 19C37.375 8.7625 29.2375 0.625 19 0.625ZM19 34.75C10.3375 34.75 3.25 27.6625 3.25 19C3.25 10.3375 10.3375 3.25 19 3.25C27.6625 3.25 34.75 10.3375 34.75 19C34.75 27.6625 27.6625 34.75 19 34.75Z' fill='#999'/><path d='M26.0875 28.1875L19 21.1L11.9125 28.1875L9.8125 26.0875L16.9 19L9.8125 11.9125L11.9125 9.8125L19 16.9L26.0875 9.8125L28.1875 11.9125L21.1 19L28.1875 26.0875L26.0875 28.1875Z' fill='#fff'/></svg></span>";
      var overlay = "<div class='offset-form__overlay'></div>";
      $(closeButton).appendTo(".setOffset");
      $(overlay).insertBefore(".setOffset");
      // var buttonText =
      //   "<div class='enews-bottom'><p>Sign up and get $10 off</p><button class='enews-close'>Close Newsletter Signup</a></div>";
      // $(buttonText).insertAfter(".setOffset .button-submit");
      // changing placeholder
      $(".setOffset .enews-quick-email").attr(
        "placeholder",
        "Enter your email"
      );

      // closing offsetNewsletter
      $(document).on(
        "click",
        ".offset-form__overlay, .enews-bottom button, .setOffset .close-btn",
        function () {
          $(".setOffset").removeClass("is_visible");
          $(".offset-form__overlay").removeClass("is_active");
        //   $(".enews-content").remove();
        //   $(".enews-bottom").remove();
        //   $(".close-btn").remove();
          $("body,html").removeClass("cro-locked");
        //   $('.offset-form__overlay').remove();
        }
      );
    };

    var activateSidePannel = function () {
    //   $(document).ready(function () {
        $(".offset-form__overlay").addClass("is_active");
        $("body,html").addClass("cro-locked");
        $(".setOffset").addClass("is_visible");
    //   });
    };

    // var updateTitle = function () {
    //   var titleText = "Save $10 on your next order!";
    //   $(".enews-quick .quick-heading").html(titleText);
    // };

    var updateCTAtext = function () {
      var ctaText = "Claim My $10 Off";
      var ctaHTML =
        "<span>" +
        ctaText +
        "</span> <span class='iconf iconf-right-arrow-small' aria-hidden='true'></span>";
      $(".enews-quick form .button-submit").html(ctaHTML);

      //
    };
    
    // Temp Manaul Trigger 
    var createPopUp = function(){
        composeSidePannel();
        addAdditionalContent();
        addCloseBtn();
        // setTimeout(function () {
        //   activateSidePannel();
        // }, 1000);
    };
    var createPopUpTrigger = function() {
        $('body').append('<a href="#" class="cro-js-pop-trigger" style="position: fixed;top: 0;left: 0;background: black;padding: 5px;z-index: 998;color: #ffff;">open pop-up</a>');
        $('.cro-js-pop-trigger').on('click',function(e){
            e.preventDefault();
            activateSidePannel();
        });
    };
    createPopUp();
    createPopUpTrigger();
    // createPopUp();

    return;
   
    
   var maxCookieValue = 10, initCookie = 1, expirationDays = 1;
	 var cookieName = "pageView";
  
    
    if(localStorage.getItem(cookieName) == null || localStorage.getItem(cookieName) == ""){
      var date = new Date(); // today
			date.setDate(date.getDate() + 1); // tomorrow
      localStorage.setItem(cookieName, initCookie);
      localStorage.setItem("pageViewReset", date);
    }else{
      
        var count = localStorage.getItem(cookieName);
        count++;
        localStorage.setItem(cookieName, count);
      }
    
    
    
    if(localStorage.getItem(cookieName) && localStorage.getItem(cookieName) == 2){
      
    }
   

   
  });
});
