(function wedgwood3679v1(){
  if((document.querySelector('.add-to-cart-btn') || document.querySelectorAll('.c-product-card__btn-container button, .c-c-product-card_btn-container button').length) && !document.querySelectorAll('.wedgwood3679v1').length){
    addCartDrawer();
    addCartBtnClickOnPLP();
    addCartBtnClickOnPDP();
    onFetchEnd_WW_3679_V1();
    document.body.classList.add('wedgwood3679v1');
  } else if(!document.querySelectorAll('.wedgwood3679v1').length) {
    requestAnimationFrame(wedgwood3679v1);
  }
  function addCartDrawer(){
    var locale = location.pathname.split('/')[1] || '/';
    if(!document.querySelector('.v_cartDrawer')){
      var div = document.createElement('div');
      var popHtm = '<span class="v_overlay" onclick="closeCartDrawer()"></span><div class="v_content" aria-hidden="false">';
      popHtm += '<button type="button" class="close" onclick="closeCartDrawer()"><svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M6.56066 5.85355L11.7071 0.707108L11 0L5.85355 5.14645L0.707107 8.52801e-07L1.54541e-08 0.707108L5.14645 5.85355L0 11L0.707107 11.7071L5.85355 6.56066L11 11.7071L11.7071 11L6.56066 5.85355Z" fill="#404040"></path></svg></button>';
      popHtm += '<div class="textWithButtons">';
      popHtm += '<div class="text">';
      popHtm += '<h2 class="text__success">Successfully added to cart</h2>';
      popHtm += '<img id="v__prodImage" src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==" />';
      popHtm += '<div class="wedgwoodText">Wedgwood</div>';
      popHtm += '<div class="prod__title" id="v__prodName">Jasper Folia Powder Pink Bulb Vase</div>';
      popHtm += '<div class="prod__price" id="v__prodPrice">£70.00</div>';
      popHtm += '<div class="prod__qty">quantity: <span id="v__prodQty">1</span></div>';
      //popHtm += '<div class="cartMsg">FREE Standard Delivery On Orders £75+</div>';
      popHtm += '</div>';
      popHtm += '<div class="btnsArea"><a href="/'+locale+'/shopping-cart-page" class="c-btn primary">View Cart</a><a href="/'+locale+'/checkout-page" class="c-btn secondary">Checkout</a></div>';
      popHtm += '</div>';
      popHtm += '</div>';
      div.innerHTML = popHtm;
      div.classList.add('v_cartDrawer');
      document.body.appendChild(div);
    }
  }
  function addCartBtnClickOnPLP(){
    var findPLPCTA = setInterval(function(){
      var cartBtns = document.querySelectorAll('.c-product-card__btn-container button, .c-c-product-card_btn-container button');
      if(cartBtns.length){
        for(var i=0; i<cartBtns.length; i++){
          var cartBtn = cartBtns[i];
          cartBtn.onclick = function(){
            document.querySelector('#v__prodImage').removeAttribute('srcset');
            var prodGrid = this.parentElement.previousElementSibling;
            var prodName = prodGrid.querySelector('.product-card-name, .c-c-product-card_name').innerText || '';
            var prodImage = prodGrid.querySelector('.product-card-image img, .c-c-product-card_img-container img').getAttribute('srcset') || "";
            var prodQty = 1;
            var prodPrice = prodGrid.querySelector('.product-card-price, .c-c-product-card_price').innerHTML || '';
            openCartPopup(prodName, prodImage, prodQty, prodPrice);
            clearInterval(findPLPCTA);
          };
        }
        setTimeout(function(){
          clearInterval(findPLPCTA);
        },10000);
      } else {
        setTimeout(function(){
          clearInterval(findPLPCTA);
        },50000);
      }
    },50);
  }
  function addCartBtnClickOnPDP(){
    var findPDPCTA = setInterval(function(){
      var cartBtn = document.querySelector('.add-to-cart-btn');
      if(cartBtn){
        cartBtn.onclick = function(){
          var prodImage = document.querySelector('.c-product-image-gallery .slide-item img').getAttribute('srcset') || "";
          var prodName = document.querySelector('.c-product-detail-main-info > h1').innerText || "";
          var prodQty = document.querySelector('.product-quantity input[id*="quantity-selector"]').value || 1;
          var prodPrice = document.querySelector('.pdp-price').innerHTML;
          openCartPopup(prodName, prodImage, prodQty, prodPrice);
          clearInterval(findPDPCTA);
        };
        setTimeout(function(){
          clearInterval(findPDPCTA);
        },10000);
      } else {
        setTimeout(function(){
          clearInterval(findPDPCTA);
        },50000);
      }
    },50);
  }
  function openCartPopup(name, img, qty, price){
    document.body.classList.remove('cartpopOpened');
    var findOldPop = setInterval(function(){
      var oldPop = document.querySelector('.c-action-indicator');
      if(oldPop && !oldPop.classList.contains('error')){
        document.body.classList.add('cartpopOpened');
        setCartProductDetails(name, img, qty, price);
        oldPop.style.display="none";
        clearInterval(findOldPop);
      } else if(oldPop && oldPop.classList.contains('error')){
        clearInterval(findOldPop);
      } else{
        setTimeout(function(){
          clearInterval(findOldPop);
        },50000);
      }
    },50);
  }
  function setCartProductDetails(name, img, qty, price){
    document.querySelector('#v__prodName').innerText = name;
    document.querySelector('#v__prodImage').setAttribute('srcset', img);
    document.querySelector('#v__prodQty').innerText = qty;
    document.querySelector('#v__prodPrice').innerHTML = price;
  }
  window.closeCartDrawer = function(){
    document.body.classList.remove('cartpopOpened');
    var oldPops = document.querySelectorAll('.c-action-indicator');
    if(oldPops.length){
      for(var i=0; i<oldPops.length; i++){
        oldPops[i].remove();
      }
    }
  };
  function onFetchEnd_WW_3679_V1(){
    var _oldFetch = fetch;
    window.fetch = function(){
      var fetchStart = new Event( 'fetchStart', { 'view': document, 'bubbles': true, 'cancelable': false } );
      var fetchEnd = new Event( 'fetchEnd', { 'view': document, 'bubbles': true, 'cancelable': false } );
      var fetchCall = _oldFetch.apply(this, arguments);
      document.dispatchEvent(fetchStart);
      fetchCall.then(function(){
        document.dispatchEvent(fetchEnd);
      }).catch(function(){
        document.dispatchEvent(fetchEnd);
      });
      return fetchCall;
    };
    document.addEventListener('fetchEnd', function() {
      setTimeout(function(){
        addCartBtnClickOnPLP();
        addCartBtnClickOnPDP();
      },500);
    });
  }
})();
