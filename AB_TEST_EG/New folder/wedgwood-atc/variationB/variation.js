/* CUSTOM CODE */
(function wedgwood3679v1() {
  if (
    (document.querySelector(".add-to-cart-btn") ||
      document.querySelectorAll(".c-product-card__btn-container button, .c-c-product-card_btn-container button").length) &&
    !document.querySelectorAll(".wedgwood3679v1").length
  ) {
    addCartDrawer();
    addCartBtnClickOnPLP();
    addCartBtnClickOnPDP();
    onFetchEnd_WW_3679_V1();
    document.body.classList.add("wedgwood3679v1");
  } else if (!document.querySelectorAll(".wedgwood3679v1").length) {
    requestAnimationFrame(wedgwood3679v1);
  }
  function addCartDrawer() {
    var locale = location.pathname.split("/")[1] || "/";
    if (!document.querySelector(".v_cartDrawer")) {
      var div = document.createElement("div");
      var popHtm = '<span class="v_overlay" onclick="closeCartDrawer()"></span><div class="v_content" aria-hidden="false">';
      popHtm +=
        '<button type="button" class="close" onclick="closeCartDrawer()"><svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M6.56066 5.85355L11.7071 0.707108L11 0L5.85355 5.14645L0.707107 8.52801e-07L1.54541e-08 0.707108L5.14645 5.85355L0 11L0.707107 11.7071L5.85355 6.56066L11 11.7071L11.7071 11L6.56066 5.85355Z" fill="#404040"></path></svg></button>';

      popHtm += '<div class="mb_only"><div class="mb-image-section"><svg xmlns="http://www.w3.org/2000/svg" width="30" height="20" viewBox="0 0 30 20" fill="none">\
<path d="M28.1991 0.083374L29.1666 1.08079L10.8951 19.9167L0.833313 9.54412L1.80084 8.5467L10.8951 17.922L28.1991 0.083374Z" fill="#081F2C"></path>\
</svg></div><div class="mb-text-section"><h2 class="text__success">Successfully added to cart</h2> <p class="product_name">Wonderlust Blue Pagoda 3-Piece Tea Set</p></div></div><div class="eg-free-shipping"> <div class="eg-icon">'+ 
'  <svg xmlns="http://www.w3.org/2000/svg" width="39" height="39" viewBox="0 0 39 39" fill="none">'+ 
'  <path fill-rule="evenodd" clip-rule="evenodd" d="M29.25 5.6875H0V29.1269L5.75498 29.1274C6.142 31.5027 8.14711 33.3125 10.5625 33.3125C12.9779 33.3125 14.983 31.5027 15.37 29.1274H23.63C24.017 31.5027 26.0221 33.3125 28.4375 33.3125C30.8529 33.3125 32.858 31.5027 33.245 29.1274L39 29.1269V19.0759L38.818 18.6306L34.9376 9.03598L29.25 9.035V5.6875ZM7.3125 28.2898C7.3125 26.4405 8.76757 24.9413 10.5625 24.9413C12.3574 24.9413 13.8125 26.4405 13.8125 28.2898C13.8125 30.1391 12.3574 31.6383 10.5625 31.6383C8.76757 31.6383 7.3125 30.1391 7.3125 28.2898ZM28.4375 24.9413C26.6426 24.9413 25.1875 26.4405 25.1875 28.2898C25.1875 30.1391 26.6426 31.6383 28.4375 31.6383C30.2324 31.6383 31.6875 30.1391 31.6875 28.2898C31.6875 26.4405 30.2324 24.9413 28.4375 24.9413ZM37.375 19.0807V27.4511L33.245 27.4522C32.9024 25.3495 31.2918 23.6899 29.2511 23.3367L29.25 19.0807H37.375ZM27.625 7.36125H1.625V27.4511L5.75498 27.4522C6.12659 25.1714 7.99003 23.412 10.2761 23.2756L10.5625 23.267C12.9779 23.267 14.983 25.0769 15.37 27.4522H23.63C23.9727 25.349 25.584 23.6891 27.6255 23.3364L27.625 7.36125ZM29.25 10.7102H33.8536L36.5625 17.4072H29.25V10.7102Z" fill="#08202C"></path>'+ 
'  </svg></div> <div class="eg-progress-background"> <div class="eg-progress-bar" style="width: 60%;"></div> </div> <p class="eg-progress-text">You are $27 away from free shipping!</p> </div>';
      popHtm += '<div class="textWithButtons">';
      popHtm += '<div class="text">';
      popHtm += '<h2 class="text__success">Successfully added to cart</h2>';
      popHtm += '<img id="v__prodImage" src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==" />';
      popHtm += '<div class="wedgwoodText">Wedgwood</div>';
      popHtm += '<div class="prod__title" id="v__prodName">Jasper Folia Powder Pink Bulb Vase</div>';
      popHtm += '<div class="prod__price" id="v__prodPrice">£70.00</div>';
      popHtm += '<div class="prod__qty">quantity: <span id="v__prodQty">1</span></div>';
      //popHtm += '<div class="cartMsg">FREE Standard Delivery On Orders £75+</div>';
      popHtm += "</div>";
      popHtm +=
        '<div class="btnsArea"><a href="/' +
        locale +
        '/shopping-cart-page" class="c-btn primary">View Cart</a><a href="/' +
        locale +
        '/checkout-page" class="c-btn secondary">Checkout</a></div>';
      popHtm += "</div>";
      popHtm += "</div>";
      div.innerHTML = popHtm;
      div.classList.add("v_cartDrawer");
      document.body.appendChild(div);
    }
  }
  function addCartBtnClickOnPLP() {
    var findPLPCTA = setInterval(function () {
      var cartBtns = document.querySelectorAll(".c-product-card__btn-container button, .c-c-product-card_btn-container button");
      if (cartBtns.length) {
        for (var i = 0; i < cartBtns.length; i++) {
          var cartBtn = cartBtns[i];
          cartBtn.onclick = function () {
            document.querySelector("#v__prodImage").removeAttribute("srcset");
            var prodGrid = this.parentElement.previousElementSibling;
            var prodName = prodGrid.querySelector(".product-card-name, .c-c-product-card_name").innerText || "";
            var prodImage =
              prodGrid.querySelector(".product-card-image img, .c-c-product-card_img-container img").getAttribute("srcset") || "";
            var prodQty = 1;
            var prodPrice = prodGrid.querySelector(".product-card-price, .c-c-product-card_price").innerHTML || "";
            openCartPopup(prodName, prodImage, prodQty, prodPrice);
            clearInterval(findPLPCTA);
          };
        }
        setTimeout(function () {
          clearInterval(findPLPCTA);
        }, 10000);
      } else {
        setTimeout(function () {
          clearInterval(findPLPCTA);
        }, 50000);
      }
    }, 50);
  }
  function addCartBtnClickOnPDP() {
    var findPDPCTA = setInterval(function () {
      var cartBtn = document.querySelector(".add-to-cart-btn");
      if (cartBtn) {
        cartBtn.onclick = function () {
          var prodImage = document.querySelector(".c-product-image-gallery .slide-item img").getAttribute("srcset") || "";
          var prodName = document.querySelector(".c-product-detail-main-info > h1").innerText || "";
          var prodQty = document.querySelector('.product-quantity input[id*="quantity-selector"]').value || 1;
          var prodPrice = document.querySelector(".pdp-price").innerHTML;
          openCartPopup(prodName, prodImage, prodQty, prodPrice);
          clearInterval(findPDPCTA);
        };
        setTimeout(function () {
          clearInterval(findPDPCTA);
        }, 10000);
      } else {
        setTimeout(function () {
          clearInterval(findPDPCTA);
        }, 50000);
      }
    }, 50);
  }
  function openCartPopup(name, img, qty, price) {
    document.body.classList.remove("cartpopOpened");
    var findOldPop = setInterval(function () {
      var oldPop = document.querySelector(".c-action-indicator");
      if (oldPop && !oldPop.classList.contains("error")) {
        document.body.classList.add("cartpopOpened");
        setCartProductDetails(name, img, qty, price);
        oldPop.style.display = "none";
        clearInterval(findOldPop);
      } else if (oldPop && oldPop.classList.contains("error")) {
        clearInterval(findOldPop);
      } else {
        setTimeout(function () {
          clearInterval(findOldPop);
        }, 50000);
      }
    }, 50);
    var xhr = new XMLHttpRequest();
      var url = 'https://www.wedgwood.com/en-US/api/sitecore/ShoppingCartApi/MiniCart';
      xhr.open("GET", url, true);
      xhr.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
          if(document.querySelector(".v_cartDrawer"))
           document.querySelector(".v_cartDrawer").style.display = 'block';
            var res = this.response;
            var data = JSON.parse(res);
            var shipping = data.result.summary.shipping.replace('$', '');
            var subTotal = data.result.summary.subtotal.replace('$', '');
            if(shipping == 'Free') {
                document.querySelector('.eg-free-shipping .eg-progress-text').innerHTML = 'You have qualified for free shipping!';
                document.querySelector('.eg-free-shipping .eg-progress-background').remove();
            } else {
                var left = 149 - subTotal;
                document.querySelector('.eg-free-shipping .eg-progress-text').innerHTML = 'You are $'+(left)+' away from free shipping!';
                var percent = 100-((left / 149) * 100);
                document.querySelector('.eg-free-shipping .eg-progress-bar').style.width = percent + '%';
            }

        }
      }
      xhr.send();
  }
  function setCartProductDetails(name, img, qty, price) {
    document.querySelector("#v__prodName").innerText = name;
    document.querySelector("#v__prodImage").setAttribute("srcset", img);
    document.querySelector("#v__prodQty").innerText = qty;
    document.querySelector("#v__prodPrice").innerHTML = price;
    document.querySelector('.product_name').innerHTML = name;
  }
  window.closeCartDrawer = function () {
    document.body.classList.remove("cartpopOpened");
    var oldPops = document.querySelectorAll(".c-action-indicator");
    if (oldPops.length) {
      for (var i = 0; i < oldPops.length; i++) {
        oldPops[i].remove();
      }
    }
  };
  function onFetchEnd_WW_3679_V1() {
    var _oldFetch = fetch;
    window.fetch = function () {
      var fetchStart = new Event("fetchStart", { view: document, bubbles: true, cancelable: false });
      var fetchEnd = new Event("fetchEnd", { view: document, bubbles: true, cancelable: false });
      var fetchCall = _oldFetch.apply(this, arguments);
      document.dispatchEvent(fetchStart);
      fetchCall
        .then(function () {
          document.dispatchEvent(fetchEnd);
        })
        .catch(function () {
          document.dispatchEvent(fetchEnd);
        });
      return fetchCall;
    };
    document.addEventListener("fetchEnd", function () {
      setTimeout(function () {
        addCartBtnClickOnPLP();
        addCartBtnClickOnPDP();
      }, 500);
    });
  }
})();