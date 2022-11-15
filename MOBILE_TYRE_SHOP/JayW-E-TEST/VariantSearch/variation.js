window.requestAnimationFrame =
  window.requestAnimationFrame ||
  window.mozRequestAnimationFrame ||
  window.webkitRequestAnimationFrame ||
  window.msRequestAnimationFrame ||
  function (timeOutFn) {
  return setTimeout(timeOutFn, 1000 / 60);
};
window.mts3553v4 = function () {
  if (typeof jQuery === "function" && !jQuery(".running3553v4").length && jQuery(".tyreWidget").length) {
    applyChanges3553v4();
    jQuery("body").addClass("running3553v4");
  } else if (!document.querySelector(".running3553v4")) {
    window.requestAnimationFrame(mts3553v4);
  }
};
window.mts3553v4();
function applyChanges3553v4() {
  if (!jQuery(".mts_form_box").length && jQuery(".tyreWidget-bar-buttons_btn").length){
    if(jQuery(".tyreWidget-bar-buttons_btn.-tyre.-active").length) {
      jQuery(".tyreWidget-bar-buttons_btn.-tyre.-active").trigger("click");
    } else {
      setTimeout(function() { jQuery(".tyreWidget-bar-buttons_btn.-tyre.-active").trigger("click"); }, 100);
    }
    jQuery(".static-hero__img source").attr("srcset", "//useruploads.visualwebsiteoptimizer.com/useruploads/176372/images/d9d649faeb0a9f9dd31e472c30e09772_desktop.jpg");
    jQuery(".static-hero__img img").attr("src", "//useruploads.visualwebsiteoptimizer.com/useruploads/176372/images/99dc29609885d579aaea7a400ed0d76e_mobile.jpg");
    addGooglePlace();
    jQuery('.static-hero').append('<div class="shadow-container"></div>');
    /*jQuery(".mts_form_control").on("keyup", debounce(findCity, 500));
    jQuery(".mts_result_list").on("click", "li", function() {
      var html = jQuery("<div>").append(jQuery(this).clone()).html();
      jQuery(".suburbs-list").html(html);
      jQuery(".suburbs-list li").eq(0).trigger("click");
      jQuery(".suburbs-list").html("");
      jQuery(".mts_result_list").html("");
      jQuery(".mts_form_control").val("");
    });*/
    jQuery(".mts_form_btn").on("click", function() {
      if(!jQuery(".tyreWidget").is(":visible")) {
        jQuery(".tyreWidget").removeClass('-active').show();
        setTimeout(function() { jQuery(".tyreWidget").addClass('-active');}, 100);
        jQuery("body").addClass("is-widget-open");
        jQuery(".tyreWidget-bar-buttons_btn.-tyre").addClass("-active");
      } else if(!jQuery(".tyreWidget.-active").length) {
        jQuery(".tyreWidget-bar-buttons_btn.-tyre").trigger("click");
        jQuery(".tyreWidget-bar-buttons_btn.-tyre").addClass("-active");
      }
    });
  }
}
function addGooglePlace() {
  var html = '';
  html +='<div class="mts_form_box">';
  html +='<form onclick="return false" class="mts_form">';
  html +='<input type="text" class="mts_form_control" placeholder="Enter your address">';
  html +='<button class="mts_form_btn">Find tyre</button>';
  html +='</form>';
  html +='<div class="mts_form_result"><ul class="mts_result_list"></ul></div>';
  html +='</div>';
  if(!jQuery('.mts_form_box').length){
    jQuery(".static-hero").append(html);
    let autocomplete;
    let address1Field;
    let address2Field;
    let postalField;
    function initAutocomplete() {
      address1Field = document.querySelector(".mts_form_control");
      address2Field = document.querySelector("#address2");
      postalField = document.querySelector("#postcode");
      // Create the autocomplete object, restricting the search predictions to
      // addresses in the US and Canada.
      autocomplete = new google.maps.places.Autocomplete(address1Field, {
        componentRestrictions: { country: ["au"] },
        fields: ["address_components", "geometry"],
        types: ["address"],
      });
      address1Field.focus();
      autocomplete.addListener("place_changed", fillInAddress);
    }
    function fillInAddress() {
      const place = autocomplete.getPlace();
      let address1 = "";
      let postcode = "";
      console.log(place.address_components);
      for (const component of place.address_components) {
        const componentType = component.types[0];
        switch (componentType) {
          case "street_number": {
            address1 = `${component.long_name} ${address1}`;
            break;
          }
          case "route": {
            address1 += ` ${component.short_name}`;
            break;
          }
          case "postal_code": {
            postcode = `${component.long_name}${postcode}`;
            address1 += `${component.long_name}${postcode}`;
            break;
          }
          case "postal_code_suffix": {
            postcode = `${postcode}-${component.long_name}`;
      address1 += `${postcode}-${component.long_name}`;
            break;
          }
          case "locality":
            //document.querySelector("#locality").value = component.long_name;
             address1 += ` ${component.long_name}`;
            jQuery('.user-location .current:visible .suburb').text(component.long_name);
            break;
          case "administrative_area_level_1": {
             address1 += ` ${component.short_name}`;
            document.querySelector(".tyreWidget-sections .tyre-size-extra_state select").value = component.short_name;
            jQuery(".tyreWidget-sections .tyre-size-extra_state select").change();
            jQuery('.user-location .current:visible .state').text(component.short_name);   
            break;
          }
            case "country":
             address1 += ` ${component.long_name}`;
            // document.querySelector("#country").value = component.long_name;
            break;
        }
      }
      address1Field.value = address1;
      //postalField.value = postcode;
      //address2Field.focus();
      jQuery('.user-location .current:visible .postcode').text(postcode);         
      jQuery('.mts_form_btn').trigger('click');
    } 
    initAutocomplete();
  }
}
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
    
    
    var egHeroContent =''+ 
    '  <div class="eg-hero">'+ 
    '      <div class="content-wrapper">'+ 
    '  <div class="eg-hero-inr">'+
    '          <h1 class="eg-hero-heading">The perfect tyres,<span>fitted anywhere</span></h1>'+ 
    '          <ul class="eg-list">'+ 
    '              <li>All the best tyre brands</li>'+ 
    '              <li>4 for 3 offer and free mobile fitting</li>'+ 
    '              <li>Next day delivery and fitting</li>'+ 
    '          </ul>'+ 
    '          <div class="eg-search-container">'+ 
    '          </div>'+ 
    '      </div>'+ 
    '      </div>'+
    '  <div class="eg-hero-img">'+
    '       <img src="https://mobiletyreshop.com.au/wp-content/uploads/2021/08/van-1-1.png">'
    '      </div>'+ 
    '  </div>';
    /* Variation Init */
    function init() {
      /* start your code here */
      document.querySelector('.static-hero > a').insertAdjacentHTML('afterend', egHeroContent);
      waitForElement('.mts_form_box',moveEle,50,10000);
    }
    //hide model on load
    function initModel() {
      document.querySelector(".tyreWidget .tyreWidget-bar-buttons_btn.-tyre").click();
    }
    function moveEle() {
      document.querySelector('.eg-search-container').appendChild(document.querySelector('.mts_form_box'));
      document.querySelector('.mts_form_box form input').addEventListener('mousedown',function(){
var doc = document.documentElement;
var top1 = (window.pageYOffset || doc.scrollTop)  - (doc.clientTop || 0);
if(top1 < 50){
window.scrollTo(0,100);
}
});
    }
    /* Initialise variation */
    waitForElement(".static-hero > a", init, 50, 15000);
    waitForElement("body.is-widget-open .tyreWidget .tyreWidget-bar-buttons_btn.-tyre", initModel, 20, 10000);
    document.querySelector('body').insertAdjacentHTML('beforeend', '<img src="https://mobiletyreshop.com.au/wp-content/uploads/2021/08/van-1-1.png" style="display:none;">');
  } catch (e) {
    if (debug) console.log(e, "error in Test" + variation_name);
  }
})();
