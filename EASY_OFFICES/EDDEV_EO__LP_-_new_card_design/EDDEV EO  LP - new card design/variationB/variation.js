(function () {
    try {
      var debug = 0;
      var variation_name = "";
      var tag = "officeData";
  
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
  
    //   var egFilters =''+ 
    //   '  <ul class="eg-filters">'+ 
    //   '      <li class="eg-office-type eg-filter-active">'+ 
    //   '          <p>Office</p>'+ 
    //   '      </li>'+ 
    //   '      <li class="eg-facilities">'+ 
    //   '          <p>Desks</p>'+ 
    //   '      </li>'+ 
    //   '      <li class="eg-sort-by">'+ 
    //   '          <p>Best rated</p>'+ 
    //   '      </li>'+ 
    //   '      <li class="eg-high-price">'+ 
    //   '          <p>High to low price</p>'+ 
    //   '      </li>'+ 
    //   '      <li class="eg-low-price">'+ 
    //   '          <p>Low to high price</p>'+ 
    //   '      </li>'+ 
    //   '  </ul>';
  
          function initVariation() {
            var stop,
                cachedList = JSON.parse(localStorage.getItem(tag)) || JSON.parse("{}"),
                check = function() {
                    try {
      
      
                        var productTiles = document.querySelectorAll(".offices-list .property-list-item:not(.checked)");
      
                        if (stop) return;
      
                        if (productTiles.length) {
                            productTiles.forEach(function(productTile) {
                                var targetElem = productTile.querySelector(".offices-list-item-data-text"),
                                    pdpLink = productTile.querySelector(".offices-list .property-list-item a");
                                   
                                productTile.classList.add("checked");
                                
                                if (targetElem && pdpLink) {
                                    var pdpUrl = pdpLink.href,
                                        cachedVal = cachedList[pdpUrl];
      
                                    if (cachedVal) {
                                        insertCopy(targetElem, cachedVal);
                                        movePrice(productTile);
                                        console.log("product retrieved from cache");
                                    } else {
                                        getHTML(pdpUrl, function(response) {
                                            try {
                                                var style = response.querySelector(".facilities .tabs-content-group");
                                                if (style) {
                                                    style = style.innerHTML;
                                                    insertCopy(targetElem, style);
                                                    cachedList[pdpUrl] = style;
                                                    movePrice(productTile);
      
                                                } else {
                                                    console.log('error',productTile)
                                                }
                                            } catch (err) {
                                                console.log(err.message);
                                            }
                                        });
                                    }
                                } else {
                                    console.log("no target and/or link for product tile:");
                                    console.log(productTile);
                                }
                            });
      
                        }
      
                        window.requestAnimationFrame(check);
                    } catch (err) {
                        console.log(err.message);
                    }
                };
      
            window.requestAnimationFrame(check);
      
            setTimeout(function() {
                stop = true;
      
                localStorage.setItem(tag, JSON.stringify(cachedList));
            }, 5000);
  
            //document.querySelector('#centre_filters > .facilities-list').insertAdjacentHTML('afterend', egFilters);
  
            // var egLocation = document.querySelectorAll('.offices-list-item .offices-list-item-data .offices-list-item-data-location');

            // var egPrice = document.querySelectorAll('.offices-list-item .office-list-item-price');
  
            // for(var i = 0; i < egLocation.length; i++){
            //   egLocation[i].insertAdjacentElement('afterend', egPrice[i]);
            // }

        }

        function movePrice(target){
            var egLocation = target.querySelector('.offices-list-item-data-cta');
            var egPrice = target.querySelector('.office-list-item-price');
            var priceCopy = egPrice.innerHTML;
            //var newCopy = priceCopy.replace('From $ ','From ₹');
            var finalCopy = priceCopy.replace('pppm','<span>pm</span>');
            egPrice.innerHTML = finalCopy;
            egLocation.insertAdjacentElement('beforebegin', egPrice);
           if(target.getAttribute('data-iscw') == true ||target.getAttribute('data-iscw') == "true")
           {
           var tag = '<div class="eg-tag"><span>Coworking Space </span> <span> Serviced Office</span></div>';
             target.querySelector('h2.offices-list-item-data-title').insertAdjacentHTML('afterend',tag);
           }
           else
           {
            var tag = '<div class="eg-tag"> <span> Serviced Office</span></div>';
            target.querySelector('h2.offices-list-item-data-title').insertAdjacentHTML('afterend',tag);
          }
           
        }
          function getHTML(url, callback) {
            try {
                if (!window.XMLHttpRequest) return;
      
                var xhr = new XMLHttpRequest();
      
                if (callback && typeof callback === "function") {
                    xhr.onload = function() {
                        callback(this.responseXML);
                    };
      
                    xhr.onerror = function() {
                        console.log("XHR error");
                    };
                }
      
                xhr.open("GET", url);
                xhr.responseType = "document";
                xhr.send();
            } catch (err) {
                console.log(err.message);
            }
        }
        function insertCopy(targetElem, copy) {
            var stop,
              check = function() {
                  try {
                      var isAdded = targetElem.closest('.offices-list .property-list-item').querySelector(".eg-copy");
    
                      if (stop) return;
    
                      if (!isAdded) {
                          var cont = document.createElement("div");
                          cont.innerHTML = copy;
                          cont.classList.add("eg-copy");
    
                          targetElem.insertAdjacentElement("beforebegin", cont);
                      }
    
                      window.requestAnimationFrame(check);
                  } catch (err) {
                      console.log(err.message);
                  }
              };
    
          window.requestAnimationFrame(check);
    
          setTimeout(function() {
              stop = true;
          }, 2000);
      }
     
      waitForElement(".offices-list .property-list-item:not(.checked)", initVariation, 50, 8000);
      
    } catch (e) {
      if (debug) console.log(e, "error in Test" + variation_name);
    }
  })();