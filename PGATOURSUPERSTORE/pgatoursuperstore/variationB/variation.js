
(function () {
  var debug = false;
  try {

    function waitForElement(selector, callback) {
      var maxCheck = 200;
      var interval = window.setInterval(function() {
          if(document.querySelectorAll(selector).length > 0) {
              callback();
              window.clearInterval(interval);
          } else if(--maxCheck < 0) {
              window.clearInterval(interval);
          }
      }, 50);
    }
    
    function init() {
        console.log('init')

        document.querySelector('.product-info .tabs > .tab:nth-child(1)').insertAdjacentHTML('afterbegin', '<button class="cust-tab active" data-target="tab-1">Tab</button>')
        document.querySelector('.product-info .tabs > .tab:nth-child(2)').insertAdjacentHTML('afterbegin', '<button class="cust-tab" data-target="tab-2">Tab</button>')
        document.querySelector('.product-info .tabs > .tab:nth-child(3)').insertAdjacentHTML('afterbegin', '<button class="cust-tab" data-target="pdpReviewsTabInput">Tab</button>')
        document.querySelector('.product-info .tabs > .tab:nth-child(4)').insertAdjacentHTML('afterbegin', '<button class="cust-tab" data-target="pdpQuestionsTabInput">Tab</button>')

        document.querySelectorAll('.cust-tab').forEach(function(item) {
            item.addEventListener('click', function() {
                var self = this;
                document.querySelectorAll('.cust-tab').forEach(function(el) {
                    if(el != self) {
                        el.classList.remove('active')
                    }
                })
                var target = this.getAttribute('data-target');
                this.classList.toggle('active');
                if(this.classList.contains('active')) {
                    document.querySelector('.product-info .tabs .tab > label[for="'+target+'"]').click();
                    var temp = document.querySelector('.product-info .tabs .tab > label[for="'+target+'"] + .tab-content').clientHeight + 60;
                    document.querySelector('.product-info .tabs').style.minHeight = temp + 'px';
                } else {
                    document.querySelector('.product-info .tabs .tab > label[for="'+target+'"] + .tab-content').style.display = 'none';
                    document.querySelector('.product-info .tabs').style.minHeight = '54px';
                }
            })
        })
    }

    waitForElement('.product-info .tabs', init);

  } catch (e) {
    if (debug) console.log(e, "error in " + variation_name);
  }

})();
