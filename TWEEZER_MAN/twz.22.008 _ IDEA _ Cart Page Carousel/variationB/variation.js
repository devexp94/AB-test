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

    function waitForjQuery(trigger, delayInterval, delayTimeout) {
      var interval = setInterval(function () {
        if (
          window.jQuery != undefined
        ) {
          clearInterval(interval);
          trigger();
        }
      }, delayInterval);
      setTimeout(function () {
        clearInterval(interval);
      }, delayTimeout);
    }

    function waitForSlick(trigger, delayInterval, delayTimeout) {
      var interval = setInterval(function () {
        if (
          window.jQuery && window.jQuery.fn && window.jQuery.fn.slick
        ) {
          clearInterval(interval);
          trigger();
        }
      }, delayInterval);
      setTimeout(function () {
        clearInterval(interval);
      }, delayTimeout);
    }

    var htmlString =''+ 
    '  <ol class="products list items product-items sov-hero-slider">'+ 
    '      <li class="item product product-item">'+ 
    '          <div class="product-item-info" data-container="product-grid">'+ 
    '              <a href="https://www.tweezerman.com/rose-etched-slant-tweezer.html" class="product photo product-item-photo" tabindex="-1">'+ 
    '                  <span class="product-image-container product-image-container-21" style="width: 310px;">'+ 
    '      <span class="product-image-wrapper" style="padding-bottom: 96.7742%;">'+ 
    '          <img class="product-image-photo" src="https://www.tweezerman.com/media/catalog/product/cache/cb1ece156f79327ec436d00c2204e23b/q/l/qlivomccukqat9subuaj_1_1.jpg" loading="lazy" width="310" height="300" alt="Rose Etched Slant Tweezer"></span>'+ 
    '                  </span>'+ 
    '                  <style>'+ 
    '                      .product-image-container-21 {'+ 
    '                          width: 310px;'+ 
    '                      }'+ 
    '                      '+ 
    '                      .product-image-container-21 span.product-image-wrapper {'+ 
    '                          padding-bottom: 96.774193548387%;'+ 
    '                      }'+ 
    '                  </style>'+ 
    '                  <script type="text/javascript">'+ 
    '                      prodImageContainers = document.querySelectorAll(".product-image-container-21");'+ 
    '                      for (var i = 0; i < prodImageContainers.length; i++) {'+ 
    '                          prodImageContainers[i].style.width = "310px";'+ 
    '                      }'+ 
    '                      prodImageContainersWrappers = document.querySelectorAll('+ 
    '                          ".product-image-container-21  span.product-image-wrapper"'+ 
    '                      );'+ 
    '                      for (var i = 0; i < prodImageContainersWrappers.length; i++) {'+ 
    '                          prodImageContainersWrappers[i].style.paddingBottom = "96.774193548387%";'+ 
    '                      }'+ 
    '                  </script>'+ 
    '              </a>'+ 
    '  '+ 
    '              <div class="product-item-inner">'+ 
    '                  <div class="product actions product-item-actions">'+ 
    '                      <div class="actions-primary">'+ 
    '                          <form data-role="tocart-form" data-product-sku="1274-ERLLT" action="https://www.tweezerman.com/checkout/cart/add/uenc/aHR0cHM6Ly93d3cudHdlZXplcm1hbi5jb20vYmVzdC1zZWxsZXIvc2xhbnQtdHdlZXplcnMuaHRtbA%2C%2C/product/21/" method="post">'+ 
    '                              <input type="hidden" name="product" value="21">'+ 
    '                              <input type="hidden" name="uenc" value="aHR0cHM6Ly93d3cudHdlZXplcm1hbi5jb20vY2hlY2tvdXQvY2FydC9hZGQvdWVuYy9hSFIwY0hNNkx5OTNkM2N1ZEhkbFpYcGxjbTFoYmk1amIyMHZZbVZ6ZEMxelpXeHNaWEl2YzJ4aGJuUXRkSGRsWlhwbGNuTXVhSFJ0YkElMkMlMkMvcHJvZHVjdC8yMS8,">'+ 
    '                              <input name="form_key" type="hidden" value="suJyxn8PMoUqJ7If"> <button type="submit" title="Add to Bag" class="action tocart primary">'+ 
    '                                              <span>Add to Bag</span>'+ 
    '                                          </button>'+ 
    '                          </form>'+ 
    '                      </div>'+ 
    '                  </div>'+ 
    '              </div>'+ 
    '  '+ 
    '              <div class="product details product-item-details">'+ 
    '                  <strong class="product name product-item-name">'+ 
    '                              <a class="product-item-link" href="https://www.tweezerman.com/rose-etched-slant-tweezer.html">'+ 
    '                                  Rose Etched Slant Tweezer                            </a>'+ 
    '                          </strong>'+ 
    '                  <div class="yotpo bottomLine bottomline-position yotpo-small" data-product-id="21" data-url="https://www.tweezerman.com/rose-etched-slant-tweezer.html" data-yotpo-element-id="1">'+ 
    '                      <div class="yotpo-display-wrapper" aria-hidden="true" style="visibility: hidden;">'+ 
    '                          <div class="standalone-bottomline" data-source="default" tabindex="-1">'+ 
    '                              <div class="yotpo-bottomline pull-left  star-clickable" tabindex="0"> <span class="yotpo-stars"> <span class="yotpo-icon yotpo-icon-star rating-star pull-left"></span><span class="yotpo-icon yotpo-icon-star rating-star pull-left"></span><span class="yotpo-icon yotpo-icon-star rating-star pull-left"></span>'+ 
    '                                  <span'+ 
    '                                      class="yotpo-icon yotpo-icon-star rating-star pull-left"></span><span class="yotpo-icon yotpo-icon-half-star rating-star pull-left"></span><span class="sr-only">4.5 star rating</span> </span> <a href="javascript:void(0)" class="text-m" aria-label="24 reviews">24 Reviews</a>'+ 
    '                                      <div'+ 
    '                                          class="yotpo-clr"></div>'+ 
    '                          </div>'+ 
    '                          <div class="yotpo-clr"></div>'+ 
    '                      </div>'+ 
    '                      <div class="yotpo-clr"></div>'+ 
    '                  </div>'+ 
    '              </div>'+ 
    '              <div class="price-box price-final_price" data-role="priceBox" data-product-id="21" data-price-box="product-id-21">'+ 
    '  '+ 
    '  '+ 
    '                  <span class="price-container price-final_price tax weee">'+ 
    '          <span id="product-price-21" data-price-amount="23" data-price-type="finalPrice" class="price-wrapper "><span class="price">$23.00</span></span>'+ 
    '                  </span>'+ 
    '  '+ 
    '              </div>'+ 
    '          </div>'+ 
    '          </div>'+ 
    '      </li>'+ 
    '      <li class="item product product-item">'+ 
    '          <div class="product-item-info" data-container="product-grid">'+ 
    '              <a href="https://www.tweezerman.com/rose-gold-slant-tweezer.html" class="product photo product-item-photo" tabindex="-1">'+ 
    '                  <span class="product-image-container product-image-container-214" style="width: 310px;">'+ 
    '      <span class="product-image-wrapper" style="padding-bottom: 96.7742%;">'+ 
    '          <img class="product-image-photo" src="https://www.tweezerman.com/media/catalog/product/cache/cb1ece156f79327ec436d00c2204e23b/d/3/d36w8illandekblj2tju_1_4.jpg" loading="lazy" width="310" height="300" alt="Rose Gold Slant Tweezer"></span>'+ 
    '                  </span>'+ 
    '                  <style>'+ 
    '                      .product-image-container-214 {'+ 
    '                          width: 310px;'+ 
    '                      }'+ 
    '                      '+ 
    '                      .product-image-container-214 span.product-image-wrapper {'+ 
    '                          padding-bottom: 96.774193548387%;'+ 
    '                      }'+ 
    '                  </style>'+ 
    '                  <script type="text/javascript">'+ 
    '                      prodImageContainers = document.querySelectorAll(".product-image-container-214");'+ 
    '                      for (var i = 0; i < prodImageContainers.length; i++) {'+ 
    '                          prodImageContainers[i].style.width = "310px";'+ 
    '                      }'+ 
    '                      prodImageContainersWrappers = document.querySelectorAll('+ 
    '                          ".product-image-container-214  span.product-image-wrapper"'+ 
    '                      );'+ 
    '                      for (var i = 0; i < prodImageContainersWrappers.length; i++) {'+ 
    '                          prodImageContainersWrappers[i].style.paddingBottom = "96.774193548387%";'+ 
    '                      }'+ 
    '                  </script>'+ 
    '              </a>'+ 
    '  '+ 
    '              <div class="product-item-inner">'+ 
    '                  <div class="product actions product-item-actions">'+ 
    '                      <div class="actions-primary">'+ 
    '                          <form data-role="tocart-form" data-product-sku="1256-RGR" action="https://www.tweezerman.com/checkout/cart/add/uenc/aHR0cHM6Ly93d3cudHdlZXplcm1hbi5jb20vYmVzdC1zZWxsZXIvc2xhbnQtdHdlZXplcnMuaHRtbA%2C%2C/product/214/" method="post">'+ 
    '                              <input type="hidden" name="product" value="214">'+ 
    '                              <input type="hidden" name="uenc" value="aHR0cHM6Ly93d3cudHdlZXplcm1hbi5jb20vY2hlY2tvdXQvY2FydC9hZGQvdWVuYy9hSFIwY0hNNkx5OTNkM2N1ZEhkbFpYcGxjbTFoYmk1amIyMHZZbVZ6ZEMxelpXeHNaWEl2YzJ4aGJuUXRkSGRsWlhwbGNuTXVhSFJ0YkElMkMlMkMvcHJvZHVjdC8yMTQv">'+ 
    '                              <input name="form_key" type="hidden" value="suJyxn8PMoUqJ7If"> <button type="submit" title="Add to Bag" class="action tocart primary">'+ 
    '                                              <span>Add to Bag</span>'+ 
    '                                          </button>'+ 
    '                          </form>'+ 
    '                      </div>'+ 
    '                  </div>'+ 
    '              </div>'+ 
    '  '+ 
    '              <div class="product details product-item-details">'+ 
    '                  <strong class="product name product-item-name">'+ 
    '                              <a class="product-item-link" href="https://www.tweezerman.com/rose-gold-slant-tweezer.html">'+ 
    '                                  Rose Gold Slant Tweezer                            </a>'+ 
    '                          </strong>'+ 
    '                  <div class="yotpo bottomLine bottomline-position yotpo-small" data-product-id="214" data-url="https://www.tweezerman.com/rose-gold-slant-tweezer.html" data-yotpo-element-id="2">'+ 
    '                      <div class="yotpo-display-wrapper" aria-hidden="true" style="visibility: hidden;">'+ 
    '                          <div class="standalone-bottomline" data-source="default" tabindex="-1">'+ 
    '                              <div class="yotpo-bottomline pull-left  star-clickable" tabindex="0"> <span class="yotpo-stars"> <span class="yotpo-icon yotpo-icon-star rating-star pull-left"></span><span class="yotpo-icon yotpo-icon-star rating-star pull-left"></span><span class="yotpo-icon yotpo-icon-star rating-star pull-left"></span>'+ 
    '                                  <span'+ 
    '                                      class="yotpo-icon yotpo-icon-star rating-star pull-left"></span><span class="yotpo-icon yotpo-icon-empty-star rating-star pull-left"></span><span class="sr-only">4.1 star rating</span> </span> <a href="javascript:void(0)" class="text-m" aria-label="81 reviews">81 Reviews</a>'+ 
    '                                      <div class="yotpo-clr"></div>'+ 
    '                              </div>'+ 
    '                              <div class="yotpo-clr"></div>'+ 
    '                          </div>'+ 
    '                          <div class="yotpo-clr"></div>'+ 
    '                      </div>'+ 
    '                  </div>'+ 
    '                  <div class="price-box price-final_price" data-role="priceBox" data-product-id="214" data-price-box="product-id-214">'+ 
    '  '+ 
    '  '+ 
    '                      <span class="price-container price-final_price tax weee">'+ 
    '          <span id="product-price-214" data-price-amount="23" data-price-type="finalPrice" class="price-wrapper "><span class="price">$23.00</span></span>'+ 
    '                      </span>'+ 
    '  '+ 
    '                  </div>'+ 
    '              </div>'+ 
    '          </div>'+ 
    '      </li>'+ 
    '      <li class="item product product-item">'+ 
    '          <div class="product-item-info" data-container="product-grid">'+ 
    '              <a href="https://www.tweezerman.com/blue-stone-slant-tweezer.html" class="product photo product-item-photo" tabindex="-1">'+ 
    '                  <span class="product-image-container product-image-container-2605" style="width: 310px;">'+ 
    '      <span class="product-image-wrapper" style="padding-bottom: 96.7742%;">'+ 
    '          <img class="product-image-photo" src="https://www.tweezerman.com/media/catalog/product/cache/cb1ece156f79327ec436d00c2204e23b/1/2/1230_ncr_front_2500x2500_1_.jpg" loading="lazy" width="310" height="300" alt="Blue Stone Slant Tweezer"></span>'+ 
    '                  </span>'+ 
    '                  <style>'+ 
    '                      .product-image-container-2605 {'+ 
    '                          width: 310px;'+ 
    '                      }'+ 
    '                      '+ 
    '                      .product-image-container-2605 span.product-image-wrapper {'+ 
    '                          padding-bottom: 96.774193548387%;'+ 
    '                      }'+ 
    '                  </style>'+ 
    '                  <script type="text/javascript">'+ 
    '                      prodImageContainers = document.querySelectorAll(".product-image-container-2605");'+ 
    '                      for (var i = 0; i < prodImageContainers.length; i++) {'+ 
    '                          prodImageContainers[i].style.width = "310px";'+ 
    '                      }'+ 
    '                      prodImageContainersWrappers = document.querySelectorAll('+ 
    '                          ".product-image-container-2605  span.product-image-wrapper"'+ 
    '                      );'+ 
    '                      for (var i = 0; i < prodImageContainersWrappers.length; i++) {'+ 
    '                          prodImageContainersWrappers[i].style.paddingBottom = "96.774193548387%";'+ 
    '                      }'+ 
    '                  </script>'+ 
    '              </a>'+ 
    '  '+ 
    '              <div class="product-item-inner">'+ 
    '                  <div class="product actions product-item-actions">'+ 
    '                      <div class="actions-primary">'+ 
    '                          <form data-role="tocart-form" data-product-sku="1230-NCR" action="https://www.tweezerman.com/checkout/cart/add/uenc/aHR0cHM6Ly93d3cudHdlZXplcm1hbi5jb20vYmVzdC1zZWxsZXIvc2xhbnQtdHdlZXplcnMuaHRtbA%2C%2C/product/2605/" method="post">'+ 
    '                              <input type="hidden" name="product" value="2605">'+ 
    '                              <input type="hidden" name="uenc" value="aHR0cHM6Ly93d3cudHdlZXplcm1hbi5jb20vY2hlY2tvdXQvY2FydC9hZGQvdWVuYy9hSFIwY0hNNkx5OTNkM2N1ZEhkbFpYcGxjbTFoYmk1amIyMHZZbVZ6ZEMxelpXeHNaWEl2YzJ4aGJuUXRkSGRsWlhwbGNuTXVhSFJ0YkElMkMlMkMvcHJvZHVjdC8yNjA1Lw,,">'+ 
    '                              <input name="form_key" type="hidden" value="suJyxn8PMoUqJ7If"> <button type="submit" title="Add to Bag" class="action tocart primary">'+ 
    '                                              <span>Add to Bag</span>'+ 
    '                                          </button>'+ 
    '                          </form>'+ 
    '                      </div>'+ 
    '                  </div>'+ 
    '              </div>'+ 
    '  '+ 
    '              <div class="product details product-item-details">'+ 
    '                  <strong class="product name product-item-name">'+ 
    '                              <a class="product-item-link" href="https://www.tweezerman.com/blue-stone-slant-tweezer.html">'+ 
    '                                  Blue Stone Slant Tweezer                            </a>'+ 
    '                          </strong>'+ 
    '                  <div class="yotpo bottomLine bottomline-position yotpo-small" data-product-id="2605" data-url="https://www.tweezerman.com/blue-stone-slant-tweezer.html" data-yotpo-element-id="3">'+ 
    '                      <div class="yotpo-display-wrapper" aria-hidden="true" style="visibility: hidden;">'+ 
    '                          <div class="standalone-bottomline" data-source="default" tabindex="-1">'+ 
    '                              <div class="yotpo-bottomline pull-left  star-clickable" tabindex="0"> <span class="yotpo-stars"> <span class="yotpo-icon yotpo-icon-star rating-star pull-left"></span><span class="yotpo-icon yotpo-icon-star rating-star pull-left"></span><span class="yotpo-icon yotpo-icon-star rating-star pull-left"></span>'+ 
    '                                  <span'+ 
    '                                      class="yotpo-icon yotpo-icon-star rating-star pull-left"></span><span class="yotpo-icon yotpo-icon-half-star rating-star pull-left"></span><span class="sr-only">4.3 star rating</span> </span> <a href="javascript:void(0)" class="text-m" aria-label="6 reviews">6 Reviews</a>'+ 
    '                                      <div'+ 
    '                                          class="yotpo-clr"></div>'+ 
    '                          </div>'+ 
    '                          <div class="yotpo-clr"></div>'+ 
    '                      </div>'+ 
    '                      <div class="yotpo-clr"></div>'+ 
    '                  </div>'+ 
    '              </div>'+ 
    '              <div class="price-box price-final_price" data-role="priceBox" data-product-id="2605" data-price-box="product-id-2605">'+ 
    '  '+ 
    '  '+ 
    '                  <span class="price-container price-final_price tax weee">'+ 
    '          <span id="product-price-2605" data-price-amount="23" data-price-type="finalPrice" class="price-wrapper "><span class="price">$23.00</span></span>'+ 
    '                  </span>'+ 
    '  '+ 
    '              </div>'+ 
    '          </div>'+ 
    '          </div>'+ 
    '      </li>'+ 
    '      <li class="item product product-item">'+ 
    '          <div class="product-item-info" data-container="product-grid">'+ 
    '              <a href="https://www.tweezerman.com/slant-tweezer-pretty-in-pink.html" class="product photo product-item-photo" tabindex="-1">'+ 
    '                  <span class="product-image-container product-image-container-6" style="width: 310px;">'+ 
    '      <span class="product-image-wrapper" style="padding-bottom: 96.7742%;">'+ 
    '          <img class="product-image-photo" src="https://www.tweezerman.com/media/catalog/product/cache/cb1ece156f79327ec436d00c2204e23b/l/0/l05idqzzokftss3kihue_1.jpg" loading="lazy" width="310" height="300" alt="Pretty in Pink"></span>'+ 
    '                  </span>'+ 
    '                  <style>'+ 
    '                      .product-image-container-6 {'+ 
    '                          width: 310px;'+ 
    '                      }'+ 
    '                      '+ 
    '                      .product-image-container-6 span.product-image-wrapper {'+ 
    '                          padding-bottom: 96.774193548387%;'+ 
    '                      }'+ 
    '                  </style>'+ 
    '                  <script type="text/javascript">'+ 
    '                      prodImageContainers = document.querySelectorAll(".product-image-container-6");'+ 
    '                      for (var i = 0; i < prodImageContainers.length; i++) {'+ 
    '                          prodImageContainers[i].style.width = "310px";'+ 
    '                      }'+ 
    '                      prodImageContainersWrappers = document.querySelectorAll('+ 
    '                          ".product-image-container-6  span.product-image-wrapper"'+ 
    '                      );'+ 
    '                      for (var i = 0; i < prodImageContainersWrappers.length; i++) {'+ 
    '                          prodImageContainersWrappers[i].style.paddingBottom = "96.774193548387%";'+ 
    '                      }'+ 
    '                  </script>'+ 
    '              </a>'+ 
    '  '+ 
    '              <div class="product-item-inner">'+ 
    '                  <div class="product actions product-item-actions">'+ 
    '                      <div class="actions-primary">'+ 
    '                          <form data-role="tocart-form" data-product-sku="1230-PR" action="https://www.tweezerman.com/checkout/cart/add/uenc/aHR0cHM6Ly93d3cudHdlZXplcm1hbi5jb20vYmVzdC1zZWxsZXIvc2xhbnQtdHdlZXplcnMuaHRtbA%2C%2C/product/6/" method="post">'+ 
    '                              <input type="hidden" name="product" value="6">'+ 
    '                              <input type="hidden" name="uenc" value="aHR0cHM6Ly93d3cudHdlZXplcm1hbi5jb20vY2hlY2tvdXQvY2FydC9hZGQvdWVuYy9hSFIwY0hNNkx5OTNkM2N1ZEhkbFpYcGxjbTFoYmk1amIyMHZZbVZ6ZEMxelpXeHNaWEl2YzJ4aGJuUXRkSGRsWlhwbGNuTXVhSFJ0YkElMkMlMkMvcHJvZHVjdC82Lw,,">'+ 
    '                              <input name="form_key" type="hidden" value="suJyxn8PMoUqJ7If"> <button type="submit" title="Add to Bag" class="action tocart primary">'+ 
    '                                              <span>Add to Bag</span>'+ 
    '                                          </button>'+ 
    '                          </form>'+ 
    '                      </div>'+ 
    '                  </div>'+ 
    '              </div>'+ 
    '  '+ 
    '              <div class="product details product-item-details">'+ 
    '                  <strong class="product name product-item-name">'+ 
    '                              <a class="product-item-link" href="https://www.tweezerman.com/slant-tweezer-pretty-in-pink.html">'+ 
    '                                  Pretty In Pink Slant Tweezer                            </a>'+ 
    '                          </strong>'+ 
    '                  <div class="yotpo bottomLine bottomline-position yotpo-small" data-product-id="6" data-url="https://www.tweezerman.com/slant-tweezer-pretty-in-pink.html" data-yotpo-element-id="4">'+ 
    '                      <div class="yotpo-display-wrapper" aria-hidden="true" style="visibility: hidden;">'+ 
    '                          <div class="yotpo-clr"></div>'+ 
    '                      </div>'+ 
    '                  </div>'+ 
    '                  <div class="price-box price-final_price" data-role="priceBox" data-product-id="6" data-price-box="product-id-6">'+ 
    '  '+ 
    '  '+ 
    '                      <span class="price-container price-final_price tax weee">'+ 
    '          <span id="product-price-6" data-price-amount="23" data-price-type="finalPrice" class="price-wrapper "><span class="price">$23.00</span></span>'+ 
    '                      </span>'+ 
    '  '+ 
    '                  </div>'+ 
    '              </div>'+ 
    '          </div>'+ 
    '      </li>'+ 
    '      <li class="item product product-item">'+ 
    '          <div class="product-item-info" data-container="product-grid">'+ 
    '              <a href="https://www.tweezerman.com/midnight-strike-slant-tweezer.html" class="product photo product-item-photo" tabindex="-1">'+ 
    '                  <span class="product-image-container product-image-container-1592" style="width: 310px;">'+ 
    '      <span class="product-image-wrapper" style="padding-bottom: 96.7742%;">'+ 
    '          <img class="product-image-photo" src="https://www.tweezerman.com/media/catalog/product/cache/cb1ece156f79327ec436d00c2204e23b/g/k/gkuwpzbilomddxxpfmht_1_1.jpg" loading="lazy" width="310" height="300" alt="Midnight Strike Slant Tweezer on white background."></span>'+ 
    '                  </span>'+ 
    '                  <style>'+ 
    '                      .product-image-container-1592 {'+ 
    '                          width: 310px;'+ 
    '                      }'+ 
    '                      '+ 
    '                      .product-image-container-1592 span.product-image-wrapper {'+ 
    '                          padding-bottom: 96.774193548387%;'+ 
    '                      }'+ 
    '                  </style>'+ 
    '                  <script type="text/javascript">'+ 
    '                      prodImageContainers = document.querySelectorAll(".product-image-container-1592");'+ 
    '                      for (var i = 0; i < prodImageContainers.length; i++) {'+ 
    '                          prodImageContainers[i].style.width = "310px";'+ 
    '                      }'+ 
    '                      prodImageContainersWrappers = document.querySelectorAll('+ 
    '                          ".product-image-container-1592  span.product-image-wrapper"'+ 
    '                      );'+ 
    '                      for (var i = 0; i < prodImageContainersWrappers.length; i++) {'+ 
    '                          prodImageContainersWrappers[i].style.paddingBottom = "96.774193548387%";'+ 
    '                      }'+ 
    '                  </script>'+ 
    '              </a>'+ 
    '  '+ 
    '              <div class="product-item-inner">'+ 
    '                  <div class="product actions product-item-actions">'+ 
    '                      <div class="actions-primary">'+ 
    '                          <form data-role="tocart-form" data-product-sku="1230-TTR" action="https://www.tweezerman.com/checkout/cart/add/uenc/aHR0cHM6Ly93d3cudHdlZXplcm1hbi5jb20vYmVzdC1zZWxsZXIvc2xhbnQtdHdlZXplcnMuaHRtbA%2C%2C/product/1592/" method="post">'+ 
    '                              <input type="hidden" name="product" value="1592">'+ 
    '                              <input type="hidden" name="uenc" value="aHR0cHM6Ly93d3cudHdlZXplcm1hbi5jb20vY2hlY2tvdXQvY2FydC9hZGQvdWVuYy9hSFIwY0hNNkx5OTNkM2N1ZEhkbFpYcGxjbTFoYmk1amIyMHZZbVZ6ZEMxelpXeHNaWEl2YzJ4aGJuUXRkSGRsWlhwbGNuTXVhSFJ0YkElMkMlMkMvcHJvZHVjdC8xNTkyLw,,">'+ 
    '                              <input name="form_key" type="hidden" value="suJyxn8PMoUqJ7If"> <button type="submit" title="Add to Bag" class="action tocart primary">'+ 
    '                                              <span>Add to Bag</span>'+ 
    '                                          </button>'+ 
    '                          </form>'+ 
    '                      </div>'+ 
    '                  </div>'+ 
    '              </div>'+ 
    '  '+ 
    '              <div class="product details product-item-details">'+ 
    '                  <strong class="product name product-item-name">'+ 
    '                              <a class="product-item-link" href="https://www.tweezerman.com/midnight-strike-slant-tweezer.html">'+ 
    '                                  Midnight Strike Slant Tweezer                            </a>'+ 
    '                          </strong>'+ 
    '                  <div class="yotpo bottomLine bottomline-position yotpo-small" data-product-id="1592" data-url="https://www.tweezerman.com/midnight-strike-slant-tweezer.html" data-yotpo-element-id="5">'+ 
    '                      <div class="yotpo-display-wrapper" aria-hidden="true" style="visibility: hidden;">'+ 
    '                          <div class="standalone-bottomline" data-source="default" tabindex="-1">'+ 
    '                              <div class="yotpo-bottomline pull-left  star-clickable" tabindex="0"> <span class="yotpo-stars"> <span class="yotpo-icon yotpo-icon-star rating-star pull-left"></span><span class="yotpo-icon yotpo-icon-star rating-star pull-left"></span><span class="yotpo-icon yotpo-icon-star rating-star pull-left"></span>'+ 
    '                                  <span'+ 
    '                                      class="yotpo-icon yotpo-icon-star rating-star pull-left"></span><span class="yotpo-icon yotpo-icon-half-star rating-star pull-left"></span><span class="sr-only">4.7 star rating</span> </span> <a href="javascript:void(0)" class="text-m" aria-label="258 reviews">258 Reviews</a>'+ 
    '                                      <div class="yotpo-clr"></div>'+ 
    '                              </div>'+ 
    '                              <div class="yotpo-clr"></div>'+ 
    '                          </div>'+ 
    '                          <div class="yotpo-clr"></div>'+ 
    '                      </div>'+ 
    '                  </div>'+ 
    '                  <div class="price-box price-final_price" data-role="priceBox" data-product-id="1592" data-price-box="product-id-1592">'+ 
    '  '+ 
    '  '+ 
    '                      <span class="price-container price-final_price tax weee">'+ 
    '          <span id="product-price-1592" data-price-amount="23" data-price-type="finalPrice" class="price-wrapper "><span class="price">$23.00</span></span>'+ 
    '                      </span>'+ 
    '  '+ 
    '                  </div>'+ 
    '              </div>'+ 
    '          </div>'+ 
    '      </li>'+ 
    '      <li class="item product product-item">'+ 
    '          <div class="product-item-info" data-container="product-grid">'+ 
    '              <a href="https://www.tweezerman.com/40th-anniversary-slant-tweezer.html" class="product photo product-item-photo" tabindex="-1">'+ 
    '                  <span class="product-image-container product-image-container-1167" style="width: 310px;">'+ 
    '      <span class="product-image-wrapper" style="padding-bottom: 96.7742%;">'+ 
    '          <img class="product-image-photo" src="https://www.tweezerman.com/media/catalog/product/cache/cb1ece156f79327ec436d00c2204e23b/y/p/ypvnbxqlew0nnjzczfe2_1.jpg" loading="lazy" width="310" height="300" alt="Image of 40th Anniversary Slant Tweezer"></span>'+ 
    '                  </span>'+ 
    '                  <style>'+ 
    '                      .product-image-container-1167 {'+ 
    '                          width: 310px;'+ 
    '                      }'+ 
    '                      '+ 
    '                      .product-image-container-1167 span.product-image-wrapper {'+ 
    '                          padding-bottom: 96.774193548387%;'+ 
    '                      }'+ 
    '                  </style>'+ 
    '                  <script type="text/javascript">'+ 
    '                      prodImageContainers = document.querySelectorAll(".product-image-container-1167");'+ 
    '                      for (var i = 0; i < prodImageContainers.length; i++) {'+ 
    '                          prodImageContainers[i].style.width = "310px";'+ 
    '                      }'+ 
    '                      prodImageContainersWrappers = document.querySelectorAll('+ 
    '                          ".product-image-container-1167  span.product-image-wrapper"'+ 
    '                      );'+ 
    '                      for (var i = 0; i < prodImageContainersWrappers.length; i++) {'+ 
    '                          prodImageContainersWrappers[i].style.paddingBottom = "96.774193548387%";'+ 
    '                      }'+ 
    '                  </script>'+ 
    '              </a>'+ 
    '  '+ 
    '              <div class="product-item-inner">'+ 
    '                  <div class="product actions product-item-actions">'+ 
    '                      <div class="actions-primary">'+ 
    '                          <form data-role="tocart-form" data-product-sku="1256-BDR" action="https://www.tweezerman.com/checkout/cart/add/uenc/aHR0cHM6Ly93d3cudHdlZXplcm1hbi5jb20vYmVzdC1zZWxsZXIvc2xhbnQtdHdlZXplcnMuaHRtbA%2C%2C/product/1167/" method="post">'+ 
    '                              <input type="hidden" name="product" value="1167">'+ 
    '                              <input type="hidden" name="uenc" value="aHR0cHM6Ly93d3cudHdlZXplcm1hbi5jb20vY2hlY2tvdXQvY2FydC9hZGQvdWVuYy9hSFIwY0hNNkx5OTNkM2N1ZEhkbFpYcGxjbTFoYmk1amIyMHZZbVZ6ZEMxelpXeHNaWEl2YzJ4aGJuUXRkSGRsWlhwbGNuTXVhSFJ0YkElMkMlMkMvcHJvZHVjdC8xMTY3Lw,,">'+ 
    '                              <input name="form_key" type="hidden" value="suJyxn8PMoUqJ7If"> <button type="submit" title="Add to Bag" class="action tocart primary">'+ 
    '                                              <span>Add to Bag</span>'+ 
    '                                          </button>'+ 
    '                          </form>'+ 
    '                      </div>'+ 
    '                  </div>'+ 
    '              </div>'+ 
    '  '+ 
    '              <div class="product details product-item-details">'+ 
    '                  <strong class="product name product-item-name">'+ 
    '                              <a class="product-item-link" href="https://www.tweezerman.com/40th-anniversary-slant-tweezer.html">'+ 
    '                                  Dusted Onyx Slant Tweezer                            </a>'+ 
    '                          </strong>'+ 
    '                  <div class="yotpo bottomLine bottomline-position yotpo-small" data-product-id="1167" data-url="https://www.tweezerman.com/40th-anniversary-slant-tweezer.html" data-yotpo-element-id="6">'+ 
    '                      <div class="yotpo-display-wrapper" aria-hidden="true" style="visibility: hidden;">'+ 
    '                          <div class="standalone-bottomline" data-source="default" tabindex="-1">'+ 
    '                              <div class="yotpo-bottomline pull-left  star-clickable" tabindex="0"> <span class="yotpo-stars"> <span class="yotpo-icon yotpo-icon-star rating-star pull-left"></span><span class="yotpo-icon yotpo-icon-star rating-star pull-left"></span><span class="yotpo-icon yotpo-icon-star rating-star pull-left"></span>'+ 
    '                                  <span'+ 
    '                                      class="yotpo-icon yotpo-icon-star rating-star pull-left"></span><span class="yotpo-icon yotpo-icon-empty-star rating-star pull-left"></span><span class="sr-only">4.1 star rating</span> </span> <a href="javascript:void(0)" class="text-m" aria-label="73 reviews">73 Reviews</a>'+ 
    '                                      <div class="yotpo-clr"></div>'+ 
    '                              </div>'+ 
    '                              <div class="yotpo-clr"></div>'+ 
    '                          </div>'+ 
    '                          <div class="yotpo-clr"></div>'+ 
    '                      </div>'+ 
    '                  </div>'+ 
    '                  <div class="price-box price-final_price" data-role="priceBox" data-product-id="1167" data-price-box="product-id-1167">'+ 
    '  '+ 
    '  '+ 
    '                      <span class="price-container price-final_price tax weee">'+ 
    '          <span id="product-price-1167" data-price-amount="23" data-price-type="finalPrice" class="price-wrapper "><span class="price">$23.00</span></span>'+ 
    '                      </span>'+ 
    '  '+ 
    '                  </div>'+ 
    '              </div>'+ 
    '          </div>'+ 
    '      </li>'+ 
    '      <li class="item product product-item">'+ 
    '          <div class="product-item-info" data-container="product-grid">'+ 
    '              <a href="https://www.tweezerman.com/ultra-precision-slant-tweezers.html" class="product photo product-item-photo" tabindex="-1">'+ 
    '                  <span class="product-image-container product-image-container-19" style="width: 310px;">'+ 
    '      <span class="product-image-wrapper" style="padding-bottom: 96.7742%;">'+ 
    '          <img class="product-image-photo" src="https://www.tweezerman.com/media/catalog/product/cache/cb1ece156f79327ec436d00c2204e23b/p/a/pakj868akpohkvkdulsg_1_2.jpg" loading="lazy" width="310" height="300" alt="Ultra Precision Slant Tweezer"></span>'+ 
    '                  </span>'+ 
    '                  <style>'+ 
    '                      .product-image-container-19 {'+ 
    '                          width: 310px;'+ 
    '                      }'+ 
    '                      '+ 
    '                      .product-image-container-19 span.product-image-wrapper {'+ 
    '                          padding-bottom: 96.774193548387%;'+ 
    '                      }'+ 
    '                  </style>'+ 
    '                  <script type="text/javascript">'+ 
    '                      prodImageContainers = document.querySelectorAll(".product-image-container-19");'+ 
    '                      for (var i = 0; i < prodImageContainers.length; i++) {'+ 
    '                          prodImageContainers[i].style.width = "310px";'+ 
    '                      }'+ 
    '                      prodImageContainersWrappers = document.querySelectorAll('+ 
    '                          ".product-image-container-19  span.product-image-wrapper"'+ 
    '                      );'+ 
    '                      for (var i = 0; i < prodImageContainersWrappers.length; i++) {'+ 
    '                          prodImageContainersWrappers[i].style.paddingBottom = "96.774193548387%";'+ 
    '                      }'+ 
    '                  </script>'+ 
    '              </a>'+ 
    '  '+ 
    '              <div class="product-item-inner">'+ 
    '                  <div class="product actions product-item-actions">'+ 
    '                      <div class="actions-primary">'+ 
    '                          <form data-role="tocart-form" data-product-sku="1271-LLT" action="https://www.tweezerman.com/checkout/cart/add/uenc/aHR0cHM6Ly93d3cudHdlZXplcm1hbi5jb20vYmVzdC1zZWxsZXIvc2xhbnQtdHdlZXplcnMuaHRtbA%2C%2C/product/19/" method="post">'+ 
    '                              <input type="hidden" name="product" value="19">'+ 
    '                              <input type="hidden" name="uenc" value="aHR0cHM6Ly93d3cudHdlZXplcm1hbi5jb20vY2hlY2tvdXQvY2FydC9hZGQvdWVuYy9hSFIwY0hNNkx5OTNkM2N1ZEhkbFpYcGxjbTFoYmk1amIyMHZZbVZ6ZEMxelpXeHNaWEl2YzJ4aGJuUXRkSGRsWlhwbGNuTXVhSFJ0YkElMkMlMkMvcHJvZHVjdC8xOS8,">'+ 
    '                              <input name="form_key" type="hidden" value="suJyxn8PMoUqJ7If"> <button type="submit" title="Add to Bag" class="action tocart primary">'+ 
    '                                              <span>Add to Bag</span>'+ 
    '                                          </button>'+ 
    '                          </form>'+ 
    '                      </div>'+ 
    '                  </div>'+ 
    '              </div>'+ 
    '  '+ 
    '              <div class="product details product-item-details">'+ 
    '                  <strong class="product name product-item-name">'+ 
    '                              <a class="product-item-link" href="https://www.tweezerman.com/ultra-precision-slant-tweezers.html">'+ 
    '                                  Ultra Precision Slant Tweezer                            </a>'+ 
    '                          </strong>'+ 
    '                  <div class="yotpo bottomLine bottomline-position yotpo-small" data-product-id="19" data-url="https://www.tweezerman.com/ultra-precision-slant-tweezers.html" data-yotpo-element-id="7">'+ 
    '                      <div class="yotpo-display-wrapper" aria-hidden="true" style="visibility: hidden;">'+ 
    '                          <div class="standalone-bottomline" data-source="default" tabindex="-1">'+ 
    '                              <div class="yotpo-bottomline pull-left  star-clickable" tabindex="0"> <span class="yotpo-stars"> <span class="yotpo-icon yotpo-icon-star rating-star pull-left"></span><span class="yotpo-icon yotpo-icon-star rating-star pull-left"></span><span class="yotpo-icon yotpo-icon-star rating-star pull-left"></span>'+ 
    '                                  <span'+ 
    '                                      class="yotpo-icon yotpo-icon-star rating-star pull-left"></span><span class="yotpo-icon yotpo-icon-empty-star rating-star pull-left"></span><span class="sr-only">4.0 star rating</span> </span> <a href="javascript:void(0)" class="text-m" aria-label="116 reviews">116 Reviews</a>'+ 
    '                                      <div class="yotpo-clr"></div>'+ 
    '                              </div>'+ 
    '                              <div class="yotpo-clr"></div>'+ 
    '                          </div>'+ 
    '                          <div class="yotpo-clr"></div>'+ 
    '                      </div>'+ 
    '                  </div>'+ 
    '                  <div class="price-box price-final_price" data-role="priceBox" data-product-id="19" data-price-box="product-id-19">'+ 
    '  '+ 
    '  '+ 
    '                      <span class="price-container price-final_price tax weee">'+ 
    '          <span id="product-price-19" data-price-amount="35" data-price-type="finalPrice" class="price-wrapper "><span class="price">$35.00</span></span>'+ 
    '                      </span>'+ 
    '  '+ 
    '                  </div>'+ 
    '              </div>'+ 
    '          </div>'+ 
    '      </li>'+ 
    '      <li class="item product product-item">'+ 
    '          <div class="product-item-info" data-container="product-grid">'+ 
    '              <a href="https://www.tweezerman.com/slant-tweezer-assorted-colors.html" class="product photo product-item-photo" tabindex="-1">'+ 
    '                  <span class="product-image-container product-image-container-9" style="width: 310px;">'+ 
    '      <span class="product-image-wrapper" style="padding-bottom: 96.7742%;">'+ 
    '          <img class="product-image-photo" src="https://www.tweezerman.com/media/catalog/product/cache/cb1ece156f79327ec436d00c2204e23b/y/q/yq4blnhl63osteenplxp_1_1.jpg" loading="lazy" width="310" height="300" alt="Slant Tweezer"></span>'+ 
    '                  </span>'+ 
    '                  <style>'+ 
    '                      .product-image-container-9 {'+ 
    '                          width: 310px;'+ 
    '                      }'+ 
    '                      '+ 
    '                      .product-image-container-9 span.product-image-wrapper {'+ 
    '                          padding-bottom: 96.774193548387%;'+ 
    '                      }'+ 
    '                  </style>'+ 
    '                  <script type="text/javascript">'+ 
    '                      prodImageContainers = document.querySelectorAll(".product-image-container-9");'+ 
    '                      for (var i = 0; i < prodImageContainers.length; i++) {'+ 
    '                          prodImageContainers[i].style.width = "310px";'+ 
    '                      }'+ 
    '                      prodImageContainersWrappers = document.querySelectorAll('+ 
    '                          ".product-image-container-9  span.product-image-wrapper"'+ 
    '                      );'+ 
    '                      for (var i = 0; i < prodImageContainersWrappers.length; i++) {'+ 
    '                          prodImageContainersWrappers[i].style.paddingBottom = "96.774193548387%";'+ 
    '                      }'+ 
    '                  </script>'+ 
    '              </a>'+ 
    '  '+ 
    '              <div class="product-item-inner">'+ 
    '                  <div class="product actions product-item-actions">'+ 
    '                      <div class="actions-primary">'+ 
    '                          <form data-role="tocart-form" data-product-sku="SKU_1465157334" action="https://www.tweezerman.com/checkout/cart/add/uenc/aHR0cHM6Ly93d3cudHdlZXplcm1hbi5jb20vYmVzdC1zZWxsZXIvc2xhbnQtdHdlZXplcnMuaHRtbA%2C%2C/product/9/" method="post">'+ 
    '                              <input type="hidden" name="product" value="9">'+ 
    '                              <input type="hidden" name="uenc" value="aHR0cHM6Ly93d3cudHdlZXplcm1hbi5jb20vY2hlY2tvdXQvY2FydC9hZGQvdWVuYy9hSFIwY0hNNkx5OTNkM2N1ZEhkbFpYcGxjbTFoYmk1amIyMHZZbVZ6ZEMxelpXeHNaWEl2YzJ4aGJuUXRkSGRsWlhwbGNuTXVhSFJ0YkElMkMlMkMvcHJvZHVjdC85Lw,,">'+ 
    '                              <input name="form_key" type="hidden" value="suJyxn8PMoUqJ7If"> <button type="submit" title="Add to Bag" class="action tocart primary">'+ 
    '                                              <span>Add to Bag</span>'+ 
    '                                          </button>'+ 
    '                              <input class="swatch-input super-attribute-select" name="super_attribute[92]" type="text" value="" data-selector="super_attribute[92]" data-validate="{required: false}" aria-required="false" aria-invalid="false"></form>'+ 
    '                      </div>'+ 
    '                  </div>'+ 
    '              </div>'+ 
    '  '+ 
    '              <div class="product details product-item-details">'+ 
    '                  <strong class="product name product-item-name">'+ 
    '                              <a class="product-item-link" href="https://www.tweezerman.com/slant-tweezer-assorted-colors.html">'+ 
    '                                  Slant Tweezer                            </a>'+ 
    '                          </strong>'+ 
    '                  <div class="yotpo bottomLine bottomline-position yotpo-small" data-product-id="9" data-url="https://www.tweezerman.com/slant-tweezer-assorted-colors.html" data-yotpo-element-id="8">'+ 
    '                      <div class="yotpo-display-wrapper" aria-hidden="true" style="visibility: hidden;">'+ 
    '                          <div class="standalone-bottomline" data-source="default" tabindex="-1">'+ 
    '                              <div class="yotpo-bottomline pull-left  star-clickable" tabindex="0"> <span class="yotpo-stars"> <span class="yotpo-icon yotpo-icon-star rating-star pull-left"></span><span class="yotpo-icon yotpo-icon-star rating-star pull-left"></span><span class="yotpo-icon yotpo-icon-star rating-star pull-left"></span>'+ 
    '                                  <span'+ 
    '                                      class="yotpo-icon yotpo-icon-star rating-star pull-left"></span><span class="yotpo-icon yotpo-icon-half-star rating-star pull-left"></span><span class="sr-only">4.4 star rating</span> </span> <a href="javascript:void(0)" class="text-m" aria-label="182 reviews">182 Reviews</a>'+ 
    '                                      <div class="yotpo-clr"></div>'+ 
    '                              </div>'+ 
    '                              <div class="yotpo-clr"></div>'+ 
    '                          </div>'+ 
    '                          <div class="yotpo-clr"></div>'+ 
    '                      </div>'+ 
    '                  </div>'+ 
    '                  <div class="price-box price-final_price" data-role="priceBox" data-product-id="9" data-price-box="product-id-9"><span class="normal-price">'+ 
    '      '+ 
    '  '+ 
    '  <span class="price-container price-final_price tax weee">'+ 
    '              <span class="price-label">As low as</span>'+ 
    '                      <span id="product-price-9" data-price-amount="23" data-price-type="finalPrice" class="price-wrapper "><span class="price">$23.00</span></span>'+ 
    '                      </span>'+ 
    '                      </span>'+ 
    '  '+ 
    '  '+ 
    '                  </div>'+ 
    '                  <div class="swatch-opt-9" data-role="swatch-option-9">'+ 
    '                      <div class="swatch-attribute color" attribute-code="color" attribute-id="92">'+ 
    '                          <div aria-activedescendant="" tabindex="0" aria-invalid="false" aria-required="true" role="listbox" aria-label="Color" class="swatch-attribute-options clearfix">'+ 
    '                              <div class="swatch-option color" id="option-label-color-92-item-10" index="0" aria-checked="false" aria-describedby="option-label-color-92" tabindex="0" option-type="1" option-id="10" option-label="Green Apple" aria-label="Green Apple"'+ 
    '                                  option-tooltip-thumb="" option-tooltip-value="#38ac57" role="option" thumb-width="110" thumb-height="90" style="background: #38ac57 no-repeat center; background-size: initial;"></div>'+ 
    '                              <div class="swatch-option color" id="option-label-color-92-item-17" index="1" aria-checked="false" aria-describedby="option-label-color-92" tabindex="0" option-type="1" option-id="17" option-label="Geranium" aria-label="Geranium"'+ 
    '                                  option-tooltip-thumb="" option-tooltip-value="#dc6c80" role="option" thumb-width="110" thumb-height="90" style="background: #dc6c80 no-repeat center; background-size: initial;"></div>'+ 
    '                              <div class="swatch-option color" id="option-label-color-92-item-7" index="2" aria-checked="false" aria-describedby="option-label-color-92" tabindex="0" option-type="1" option-id="7" option-label="Midnight Sky Black" aria-label="Midnight Sky Black"'+ 
    '                                  option-tooltip-thumb="" option-tooltip-value="#000000" role="option" thumb-width="110" thumb-height="90" style="background: #000000 no-repeat center; background-size: initial;"></div>'+ 
    '                              <div class="swatch-option color" id="option-label-color-92-item-9" index="3" aria-checked="false" aria-describedby="option-label-color-92" tabindex="0" option-type="1" option-id="9" option-label="Pretty in Pink" aria-label="Pretty in Pink"'+ 
    '                                  option-tooltip-thumb="" option-tooltip-value="#da4681" role="option" thumb-width="110" thumb-height="90" style="background: #da4681 no-repeat center; background-size: initial;"></div>'+ 
    '                              <div class="swatch-option color" id="option-label-color-92-item-6" index="4" aria-checked="false" aria-describedby="option-label-color-92" tabindex="0" option-type="1" option-id="6" option-label="Signature Red" aria-label="Signature Red"'+ 
    '                                  option-tooltip-thumb="" option-tooltip-value="#ba3133" role="option" thumb-width="110" thumb-height="90" style="background: #ba3133 no-repeat center; background-size: initial;"></div>'+ 
    '                          </div>'+ 
    '                      </div>'+ 
    '                  </div>'+ 
    '  '+ 
    '  '+ 
    '  '+ 
    '  '+ 
    '              </div>'+ 
    '          </div>'+ 
    '      </li>'+ 
    '  </ol>';

    /* Variation Init */
    function init() {     

      var heroSliderHTML =''+ 
        '  <div class="sov-hero-slider-wrapper">'+ 
        '  <h1>Complete your beauty routine</h1>'+
        // '      <div class="sov-hero-slider">'+ 
        ''+htmlString+
        // '      </div>'+ 
        '  </div>';

      document.querySelector('body #maincontent').insertAdjacentHTML('beforeend', heroSliderHTML);
      // var jQyeryScript = document.createElement('script');
      // jQyeryScript.src = 'https://code.jquery.com/jquery-2.2.4.min.js';
      // document.head.insertAdjacentElement('beforeend', jQyeryScript);

      // waitForjQuery(function() {
      //   var $ = window.jQuery;
      //   addSlickScript();
        waitForSlick(function() {
          jQuery(".sov-hero-slider").slick({
            dots: false,
            infinite: true,
            arrows: true,
            centerMode: true,
            centerPadding: '60px',
            slidesToScroll: 1,
            slidesToShow: 4,
            responsive: [
              {
                breakpoint: 767,
                settings: {
                  centerPadding: '30px',
                  slidesToShow: 1,
                  arrows: false
                },
              },
            ]
          });
        }, 50, 10000);
      // }, 50, 10000);
    }

    /* Initialise variation */
    waitForElement('body #maincontent', init, 50, 10000);

  } catch (e) {
    if (debug) console.log(e, "error in Test" + variation_name);
  }
})();
