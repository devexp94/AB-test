(function () {
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

  function getParameterByName(name, url = window.location.href) {
    name = name.replace(/[\[\]]/g, '\\$&');
    var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),
      results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, ' '));
  }

  function live(selector, event, callback, context) {
    /****Helper Functions****/
    // helper for enabling IE 8 event bindings
    function addEvent(el, type, handler) {
      if (el.attachEvent) el.attachEvent("on" + type, handler);
      else el.addEventListener(type, handler);
    }
    // matches polyfill
    this.Element &&
      (function (ElementPrototype) {
        ElementPrototype.matches =
          ElementPrototype.matches ||
          ElementPrototype.matchesSelector ||
          ElementPrototype.webkitMatchesSelector ||
          ElementPrototype.msMatchesSelector ||
          function (selector) {
            var node = this,
              nodes = (node.parentNode || node.document).querySelectorAll(selector),
              i = -1;
            while (nodes[++i] && nodes[i] != node);
            return !!nodes[i];
          };
      })(Element.prototype);
    // live binding helper using matchesSelector
    function live(selector, event, callback, context) {
      addEvent(context || document, event, function (e) {
        var found,
          el = e.target || e.srcElement;
        while (el && el.matches && el !== context && !(found = el.matches(selector))) el = el.parentElement;
        if (found) callback.call(el, e);
      });
    }
    live(selector, event, callback, context);
  }

  function initPDP() {
    var addtocartsucess = document.createElement("div");
    addtocartsucess.classList.add("overlayofadd");
    document.querySelector("button.btn.btn.btn--primary.btn--addtocart.js-btn.product-form-atc").insertAdjacentHTML('afterend', '<div class="over_add_to_cart"></div>');
    document.querySelector("button.btn.btn.btn--primary.btn--addtocart.js-btn.product-form-atc").after(addtocartsucess);
    document.querySelector(
      ".overlayofadd"
    ).innerHTML = `<div class='overlay-wrapper'><div class='image_and_title'><img class='product_img_1' src=""></div><p><span class='product_added'></span> have been added toyour cart.</p> <div class='overlay_button_wrapper'><button class='continue_shop'>Continue Shopping</button><a href='/cart'><button class='view_cart_redirect'>View Cart</button></a></div></div>`;

    live(".over_add_to_cart", "click", function () {
      console.log("asdfasdf")
      const quantity = document.querySelector('.select-input__el-wrap > select[name="quantity"]').value;
      const variationsku = getParameterByName('variant')
      var imageurl = document
        .querySelector("ul.product-gallery__list-thumbnails > li:nth-child(1) img.img__el.product-gallery__thumbnail__img")
        .getAttribute("src");
      document.querySelector(".product_img_1").setAttribute("src", imageurl);
      const nameofproduct = document.querySelector("h1.product-form__title.h1-v2").textContent;
      const jsondata = {
        id: variationsku,
        quantity: quantity,
      };
      const xmlhttp = new XMLHttpRequest(); // new HttpRequest instance
      const theUrl = "https://hukitchen.com/cart/add.js";
      xmlhttp.open("POST", theUrl);
      xmlhttp.setRequestHeader("Content-Type", "application/json");
      xmlhttp.send(JSON.stringify(jsondata));
      xmlhttp.onreadystatechange = () => {
        // Call a function when the state changes.
        if (xmlhttp.readyState === 4 && (xmlhttp.status === 200 || xmlhttp.status === 204)) {
          document.querySelector(".overlayofadd").classList.add("overlayshow");
          document.querySelector("span.product_added").textContent = nameofproduct;
        }
      };
    });
    document.querySelector("button.continue_shop").addEventListener("mousedown", function () {
      document.querySelector(".overlayofadd").classList.remove("overlayshow");
      location.reload();
    });
  }

  function initHP() {
    var addtocartsucess = document.createElement("div");
    addtocartsucess.classList.add("overlayofadd");
    document
      .querySelector(".swiper-container.swiper-container-initialized.swiper-container-horizontal .swiper-wrapper")
      .before(addtocartsucess);
    document.querySelector(
      ".overlayofadd"
    ).innerHTML = `<div class='overlay-wrapper'><div class='image_and_title'><img class='product_img_1' src=""></div><p><span class='product_added'></span> have been added toyour cart.</p> <div class='overlay_button_wrapper'><button class='continue_shop'>Continue Shopping</button><a href='/cart'><button class='view_cart_redirect'>View Cart</button></a></div></div>`;
    document.querySelectorAll("button.size-selector__list-item.aic.jcc.relative").forEach(function (ele, i) {
      var divformessage = document.createElement("div");
      divformessage.classList.add("over_add_to_cart_homepage");
      ele.after(divformessage);
    });
    document.querySelectorAll(".over_add_to_cart_homepage").forEach(function (ele, i) {
      ele.addEventListener("click", function () {
        if (ele.previousSibling.getAttribute("disabled") === null) {
          console.log("clicked");
          const urlforcall = ele
            .closest(".product-card__contents.relative")
            .querySelector("a.product-card__featured.bg-parchment")
            .getAttribute("href");
          const imageurlhome = ele
            .closest(".product-card__contents.relative")
            .querySelector("a.product-card__featured.bg-parchment > picture:nth-child(1) img.img__el")
            .getAttribute("src");
          const titleofprod = ele.closest(".product-card__contents.relative").querySelector(".product-card__details a.h4").textContent;
          const xhr = new XMLHttpRequest();
          // Making our connection
          const url = urlforcall;
          xhr.open("GET", url, true);
          // function execute after request is successful
          xhr.onreadystatechange = function () {
            if (this.readyState === 4 && (this.status === 200 || this.status === 204)) {
              //
              const jsondata = {
                id: "",
                quantity: 1,
              };
              const responseof = xhr.response.split("var meta =")[1].split("for (var")[0].split(";")[0];
              const response = JSON.parse(responseof);
              const index = [].indexOf.call(ele.parentElement.children, ele);
              console.log(response.product.variants[0].id);
              console.log(index);
              if (index === 1) {
                jsondata.id = response.product.variants[0].id;
              } else if (index === 3) {
                jsondata.id = response.product.variants[1].id;
              } else if (index === 5) {
                jsondata.id = response.product.variants[2].id;
              }
              const xmlhttp = new XMLHttpRequest(); // new HttpRequest instance
              const theUrl = "https://hukitchen.com/cart/add.js";
              xmlhttp.open("POST", theUrl);
              xmlhttp.setRequestHeader("Content-Type", "application/json");
              xmlhttp.send(JSON.stringify(jsondata));
              xmlhttp.onreadystatechange = () => {
                // Call a function when the state changes.
                if (xmlhttp.readyState === 4 && (xmlhttp.status === 200 || xmlhttp.status === 204)) {
                  document.querySelector(".overlayofadd").classList.add("overlayshow");
                  document.querySelector(".product_img_1").setAttribute("src", imageurlhome);
                  document.querySelector("span.product_added").textContent = titleofprod;
                }
              };
            }
          };
          // Sending our request
          xhr.send();
        }
      });
    });
    document.querySelector("button.continue_shop").addEventListener("mousedown", function () {
      document.querySelector(".overlayofadd").classList.remove("overlayshow");
      location.reload();
    });
  }

  function initPLP() {
    setTimeout(function () {

      var addtocartsucess = document.createElement("div");
      addtocartsucess.classList.add("overlayofadd");
      addtocartsucess.innerHTML = `<div class='overlay-wrapper'><div class='image_and_title'><img class='product_img_1' src=""></div><p><span class='product_added'></span> have been added toyour cart.</p> <div class='overlay_button_wrapper'><button class='continue_shop'>Continue Shopping</button><a href='/cart'><button class='view_cart_redirect'>View Cart</button></a></div></div>`;

      document.querySelector(".plp__grid").insertAdjacentElement('beforebegin', addtocartsucess);
      document.querySelector("button.continue_shop").addEventListener("mousedown", function () {
        document.querySelector(".overlayofadd").classList.remove("overlayshow");
        location.reload();
      });
      console.log(document.querySelectorAll("button.size-selector__list-item"))

      document.querySelectorAll("button.size-selector__list-item").forEach(function (ele, i) {
        var divformessage = document.createElement("div");
        divformessage.classList.add("over_add_to_cart_plp");
        ele.after(divformessage);
      });
      document.querySelectorAll(".over_add_to_cart_plp").forEach(function (ele, i) {
        ele.addEventListener("click", function () {
          if (ele.previousSibling.getAttribute("disabled") === null) {
            console.log("clicked");
            const urlforcall = ele
              .closest(".product-card__contents.relative")
              .querySelector("a.product-card__featured.bg-parchment")
              .getAttribute("href");
            const imageurlhome = ele
              .closest(".product-card__contents.relative")
              .querySelector("a.product-card__featured.bg-parchment > picture:nth-child(1) img.img__el")
              .getAttribute("src");
            const titleofprod = ele.closest(".product-card__contents.relative").querySelector(".product-card__details a.h4").textContent;
            const xhr = new XMLHttpRequest();
            // Making our connection
            const url = urlforcall;
            xhr.open("GET", url, true);
            // function execute after request is successful
            xhr.onreadystatechange = function () {
              if (this.readyState === 4 && (this.status === 200 || this.status === 204)) {
                //
                const jsondata = {
                  id: "",
                  quantity: 1,
                };
                const responseof = xhr.response.split("var meta =")[1].split("for (var")[0].split(";")[0];
                const response = JSON.parse(responseof);
                const index = [].indexOf.call(ele.parentElement.children, ele);
                console.log(response.product.variants[0].id);
                console.log(index);
                if (index === 1) {
                  jsondata.id = response.product.variants[0].id;
                } else if (index === 3) {
                  jsondata.id = response.product.variants[1].id;
                } else if (index === 5) {
                  jsondata.id = response.product.variants[2].id;
                }
                const xmlhttp = new XMLHttpRequest(); // new HttpRequest instance
                const theUrl = "https://hukitchen.com/cart/add.js";
                xmlhttp.open("POST", theUrl);
                xmlhttp.setRequestHeader("Content-Type", "application/json");
                xmlhttp.send(JSON.stringify(jsondata));
                xmlhttp.onreadystatechange = () => {
                  // Call a function when the state changes.
                  if (xmlhttp.readyState === 4 && (xmlhttp.status === 200 || xmlhttp.status === 204)) {
                    document.querySelector(".overlayofadd").classList.add("overlayshow");
                    document.querySelector(".product_img_1").setAttribute("src", imageurlhome);
                    document.querySelector("span.product_added").textContent = titleofprod;
                  }
                };
              }
            };
            // Sending our request
            xhr.send();
          }
        });
      });
    }, 2000)
  }

  if (window.location.href.indexOf("products") > -1) {
    waitForElement('button.btn.btn.btn--primary.btn--addtocart.js-btn.product-form-atc', initPDP, 50, 15000);
  }

  if (window.location.pathname === "/") {
    waitForElement('.swiper-container.swiper-container-initialized.swiper-container-horizontal .swiper-wrapper', initHP, 50, 15000);
  }

  if (window.location.href.indexOf("/collections/") > -1) {
    waitForElement('button.size-selector__list-item', initPLP, 50, 15000);
  }

})();
