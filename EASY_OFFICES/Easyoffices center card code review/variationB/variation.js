(function () {
    try {
      var debug = 0;
      var variation_name = "";
      var tag = "officeDataCard";
  
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
  
          function initVariation() {
            var stop,
                cachedList = JSON.parse(localStorage.getItem(tag)) || JSON.parse("{}"),
                check = function() {
                    try {
      
      
                        var productTiles = document.querySelectorAll(".tab-content .product:not(.checked)");
      
                        if (stop) return;
      
                        if (productTiles.length) {
                            productTiles.forEach(function(productTile) {
                                var targetElem = productTile;
                                    pdpLink = productTile.querySelector(".tab-content .product a");
                                    movePrice(productTile);
                                productTile.classList.add("checked");
                                
                                if (targetElem && pdpLink) {
                                    var pdpUrl = pdpLink.href,
                                        cachedVal = cachedList[pdpUrl];
      
                                    if (cachedVal) {
                                        insertCopy(targetElem, cachedVal);
                                      //  setPriority();
                                      //  movePrice(productTile);
                                        console.log("product retrieved from cache");
                                    } else {
                                        getHTML(pdpUrl, function(response) {
                                            try {
                                                var style = response.querySelector(".product-object");
                                                if (style) {
                                                    style = style.getAttribute('data-product');;
                                                    insertCopy(targetElem, style);
                                                    cachedList[pdpUrl] = style;
                                                   // setPriority();
                                                    
      
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
                          cont.innerHTML = '<ul>'+copy+'</ul>';
                          cont.classList.add("eg-copy");
    
                          targetElem.insertAdjacentElement("beforebegin", cont);
                          setPriority();
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
     
      function setPriority(){
        document.querySelectorAll(".eg-copy ul .facilities-list-item:not(.eg-check)").forEach(function(ele,i){
            ele.classList.add('eg-checked');
                var copy = ele.innerHTML;
                if(copy.indexOf('Meeting Rooms') !=-1 || copy.indexOf('Parking') != -1 || copy.indexOf('24 Hour Access') !=-1){
            
                    ele.classList.add('eg-priority');
                }
                
            });
      }

      waitForElement(".tab-content .product a:not(.checked)", initVariation, 50, 8000);
      
    } catch (e) {
      if (debug) console.log(e, "error in Test" + variation_name);
    }
  })();