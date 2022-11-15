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
    
    var egPopup =''+ 
'  <div id="Schedule_Call_Pop-up" class="vc_row wpb_row vc_inner vc_row-fluid promo-box vc_custom_1585201798465 vc_row-has-fill vc_row-o-equal-height vc_row-flex mpc-row">'+ 
'       <div class="eg-popup-overlay"></div>'+
'       <div class="eg-content">'+
'      <div class="close-pop-up" style="width: 100%; background-color: rgb(55, 83, 97); color: rgb(255, 255, 255);"><span style="cursor: pointer; float: right;">&times;</span></div>'+ 
'      <div class="wpb_column vc_column_container vc_col-sm-2 mpc-column" data-column-id="mpc_column-5761a6a425e8be5">'+ 
'          <div class="vc_column-inner">'+ 
'              <div class="wpb_wrapper">'+ 
'                  <div class="wpb_single_image wpb_content_element vc_align_center  vc_custom_1585694845967">'+ 
'  '+ 
'                      <figure class="wpb_wrapper vc_figure">'+ 
'                          <div class="vc_single_image-wrapper   vc_box_border_grey"><img width="150" height="150" src="https://hellodivorce.com/wp-content/uploads/2020/03/promo-logo-150x150.png" class="vc_single_image-img attachment-thumbnail" alt="Membership Options, Hello Divorce" loading="lazy" srcset="https://hellodivorce.com/wp-content/uploads/2020/03/promo-logo-150x150.png 150w, https://hellodivorce.com/wp-content/uploads/2020/03/promo-logo-125x125.png 125w, https://hellodivorce.com/wp-content/uploads/2020/03/promo-logo-75x75.png 75w, https://hellodivorce.com/wp-content/uploads/2020/03/promo-logo-100x100.png 100w, https://hellodivorce.com/wp-content/uploads/2020/03/promo-logo.png 154w"'+ 
'                                  sizes="(max-width: 150px) 100vw, 150px"></div>'+ 
'                      </figure>'+ 
'                  </div>'+ 
'              </div>'+ 
'          </div>'+ 
'      </div>'+ 
'      <div class="wpb_column vc_column_container vc_col-sm-10 mpc-column" data-column-id="mpc_column-5461a6a425e8df9">'+ 
'          <div class="vc_column-inner">'+ 
'              <div class="wpb_wrapper">'+ 
'                  <div class="wpb_text_column wpb_content_element ">'+ 
'                      <div class="wpb_wrapper">'+ 
'                          <h5>BE IN CONTROL & KNOW THE PROCESS</h5>'+ 
'                          <h2><a style="text-decoration: underline;" href="https://hellodivorce.com/our-process/book-your-15-minute-call/">Schedule Your'+ 
'                                  15-Minute Intro Call</a></h2>'+ 
'                          <p>Schedule your free 15-minute call to discuss the divorce process & instant access to all the divorce info you need today</p>'+ 
'  '+ 
'                      </div>'+ 
'                  </div>'+ 
'              </div>'+ 
'          </div>'+ 
'      </div>'+ 
'      </div>'+ 
'  </div>';

    /* Variation Init */
    function init() {

      document.querySelector('body').insertAdjacentHTML('beforeend', egPopup);

      setTimeout(function(){
        document.querySelector('body').classList.add('eg-show');
      },1200)

      document.querySelector('#Schedule_Call_Pop-up .close-pop-up span').addEventListener('click', function(){
        document.querySelector('body').classList.remove('eg-show');
      });

      document.querySelector('#Schedule_Call_Pop-up .eg-popup-overlay').addEventListener('click', function(){
        document.querySelector('body').classList.remove('eg-show');
      });
      // SC_popup = document.getElementById("Schedule_Call_Pop-up");
      // overlay_val = document.getElementById("overlay");
      // window.addEventListener("load", function(){
      //   window.setTimeout(showPopup, 1200);
      // });
      
      // function showPopup(){
      //   SC_popup.style.display = "block";
      //   overlay_val.style.display = "block";
      //   document.getElementsByClassName("page-template")[0].style.pointerEvents = "none";
      // }
      
      // document.getElementsByClassName("close-pop-up")[0].addEventListener("click", function(){
      //   SC_popup.style.display = "none";
      //   overlay_val.style.display = "none";
      //   document.getElementsByClassName("page-template")[0].style.pointerEvents = "all";
      // });

    }
    /* Initialise variation */
    waitForElement("body", init, 50, 25000);
  } catch (e) {
    if (debug) console.log(e, "error in Test" + variation_name);
  }
})();
