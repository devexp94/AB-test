(function () {
  var debug = 0;
  var variation_name = "";
  if (window.location.href.indexOf('qa-debug=true') > -1) {
    debug = 1;
  }
    try {
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
//List structure
var htmlString =''+ 
'  '+ 
'      <div class="items-container">'+ 
'          <div class="first-container"><div class="table-title"><p><b>INGREDIENTS</b></p></div>'+ 
'              <ul>'+ 
'                  <li><b>Added Sugar</b></li>'+ 
'                  <li><b>% Fruit Juice</b></li>'+ 
'                  <li><b>Chemicals/ Additives</b></li>'+ 
'                  <li><b>Carbs</b></li>'+ 
'                  <li><b>Calories</b></li>'+ 
'                  <li><b>Sodium for Electrolytes</b></li>'+ 
'                  <li><b>Paper or Plastic</b></li>'+ 
'                  <li><b>Family Owned or Corporate</b></li>'+ 
'              </ul>'+ 
'          </div>'+ 
'          <div class="second-container"><div class="table-title"><img src="https://cdn.shopify.com/s/files/1/1428/0736/files/logo-transparent.png?v=1628082405" /></div>'+ 
'              <ul>'+ 
'                  <li>None!</li>'+ 
'                  <li>32%</li>'+ 
'                  <li>Nope</li>'+ 
'                  <li>9g</li>'+ 
'                  <li>50</li>'+ 
'                  <li>140mg</li>'+ 
'                  <li>Paper Carton</li>'+ 
'                  <li>Family Owned</li>'+ 
'              </ul>'+ 
'          </div>'+ 
'          <div class="third-container"><div class="table-title"><img src="https://cdn.shopify.com/s/files/1/1428/0736/files/bodyarmor2-min.png?v=1609086022" /></div>'+ 
'              <ul>'+ 
'                  <li>26g</li>'+ 
'                  <li>10%</li>'+ 
'                  <li>Yes</li>'+ 
'                  <li>180g</li>'+ 
'                  <li>70</li>'+ 
'                  <li>40mg</li>'+ 
'                  <li>Plastic Bottle</li>'+ 
'                  <li>Corporate</li>'+ 
'              </ul>'+ 
'          </div>'+ 
'      </div>'+
'<div class="tin-table-close2">Close</div>';

      function init() {
        if(debug){
          console.log('Inside init Function');
        }
        //Adding section

    var ele=document.querySelectorAll("#shopify-section-1gt-products .product-block .col-12");
  
    for (var i = 0; i < ele.length; i++) {
      ele[i].insertAdjacentHTML("afterbegin", '<button class="tin-toggle toggle-btn'+[i]+'">Us vs.<br>Them</button>');
      ele[i].insertAdjacentHTML("afterbegin","<div class='tin-table-container"+[i]+"'>"+htmlString+"</div>")
  }

  var mobileButton = document.querySelectorAll('.product-block-image .imgwrap');

  
  for (var i = 0; i < mobileButton.length; i++) {
    mobileButton[i].insertAdjacentHTML("afterend", '<div class="eg-image-container"><button class="tin-toggle toggle-btn">Us vs.<br>Them</button></div>');
  }

  var mobileButtonLink = document.querySelectorAll('.eg-image-container');

  for (var i = 0; i < mobileButtonLink.length; i++) {
    mobileButtonLink[i].insertAdjacentElement("beforeend", mobileButton[i]);
  }

      document.querySelectorAll(".tin-toggle")[0].style.top="35%";
      document.querySelectorAll(".tin-toggle")[1].style.top="53%";
      document.querySelectorAll(".tin-toggle")[2].style.top="33%";

    document.querySelector("button.toggle-btn0").addEventListener("click",function(){
      document.querySelector(".tin-table-container0").classList.add("open");
    });
    document.querySelector("button.toggle-btn1").addEventListener("click",function(){
      document.querySelector(".tin-table-container1").classList.add("open");
    });
    document.querySelector("button.toggle-btn2").addEventListener("click",function(){
      document.querySelector(".tin-table-container2").classList.add("open");
    });
    document.querySelector(".tin-table-container0 .tin-table-close2").addEventListener("click",function(){
      document.querySelector(".tin-table-container0").classList.remove("open");
    });
    document.querySelector(".tin-table-container1 .tin-table-close2").addEventListener("click",function(){
      document.querySelector(".tin-table-container1").classList.remove("open");
    });
    document.querySelector(".tin-table-container2 .tin-table-close2").addEventListener("click",function(){
      document.querySelector(".tin-table-container2").classList.remove("open");
    });
      }

  
      waitForElement("#shopify-section-1gt-products .product-block", init, 50, 15000);
    } 
    catch (e) {
      if (debug) console.log(e, "error in Test" + variation_name);
    }
})();