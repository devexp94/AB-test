(function(){
  
  function addHTML() {
  
    // Log
    console.log('GRT-9 | BYOB: Size Toggles (w/ Titles) v1');

    var html = ''+ 
    '  <div class="tin-toggles">'+ 
    '      <h2 class="tin-toggles-title">What Size?</h2>'+ 
    '      <div class="tin-toggle" data-title="size" data-value="1 Liter">'+ 
    '          <span class="tin-toggle-option">1 Liter</span>'+ 
    '          <span class="tin-toggle-option">Travel Size</span>'+ 
    '          <span class="tin-toggle-option_tappable" data-value="1 Liter"></span>'+ 
    '          <span class="tin-toggle-option_tappable" data-value="Travel Size"></span>'+ 
    '      </div>'+ 
    '  '+ 
    '      <h2 class="tin-toggles-title">How Many Cartons?</h2>'+ 
    '      <div class="tin-toggle" data-title="qty" data-variant="1L" data-value="12-Pack (6 of each flavor)">'+ 
    '          <span class="tin-toggle-option">12-Pack (2 Flavors)</span>'+ 
    '          <span class="tin-toggle-option">18-Pack (3 Flavors)</span>'+ 
    '          <span class="tin-toggle-option_tappable" data-value="12-Pack (6 of each flavor)"></span>'+ 
    '          <span class="tin-toggle-option_tappable" data-value="18-Pack (6 of each flavor)"></span>'+ 
    '      </div>'+ 
    '      <div class="tin-toggle" data-title="qty" data-variant="Travel" data-value="36-Pack (12 of each flavor)">'+ 
    '          <span class="tin-toggle-option">36-Pack (3 Flavors)</span>'+ 
    '          <span class="tin-toggle-option">48-Pack (4 Flavors)</span>'+ 
    '          <span class="tin-toggle-option_tappable" data-value="36-Pack (12 of each flavor)"></span>'+ 
    '          <span class="tin-toggle-option_tappable" data-value="48-Pack (12 of each flavor)"></span>'+ 
    '      </div>'+ 
    '  '+ 
    '      <h2 class="tin-toggles-title">Subscribe or 1-time?</h2>'+ 
    '      <div class="tin-toggle eg-delivery" data-title="delivery" data-value="Delivery every 30 Days">'+ 
    '          <span class="tin-toggle-option eg-active" data-value="Only once" >Only once</span>'+ 
    '          <span class="tin-toggle-option" data-value="Delivery every 30 Days">Delivery every 30 Days</span>'+ 
    '          <span class="tin-toggle-option" data-value="Delivery every 60 Days">Delivery every 60 Days</span>'+ 
    '          <span class="tin-toggle-option_tappable" data-value="Only once"></span>'+ 
    '          <span class="tin-toggle-option_tappable" data-value="Delivery every 30 Days"></span>'+ 
    '          <span class="tin-toggle-option_tappable" data-value="Delivery every 60 Days"></span>'+ 
    '      </div>'+ 
    '  '+ 
    '  </div>';
    document.querySelector('#build-a-box .rb-sticky-form').insertAdjacentHTML('beforebegin', html);

    // update UI on init
    updateUI();
  
  }


  function toggleLogicInit() {

    $('.tin-toggle-option_tappable').on('click', handleClick);
    function handleClick(e) {
      var $option = $(e.target).closest('.tin-toggle');

      // update the control element value
      var selectIndex = $option.attr('data-title') === 'size' ? 0 : 1;
      var selectElement = document.querySelectorAll('.rb-form select')[selectIndex];
      selectElement.value = e.target.dataset.value;

      // dispact change event
      var evt = new CustomEvent('change');
      selectElement.dispatchEvent(evt);

      // update the UI based on the new state after the change evt - updated value is not immediately parseable, wait 50ms
      setTimeout(updateUI, 50);

    }
    $('.eg-delivery span').on('click',function(){
      console.log('hello',$(this).attr('data-value'));
     $('.eg-delivery span').removeClass('eg-active');
     $(this).addClass('eg-active');
    // var selectElement= document.querySelector('.rb-frequency-wrapper select');
    // selectElement.value = $(this).attr('data-value'); 
    //  var evt = new CustomEvent('change');
    //   selectElement.dispatchEvent(evt);
    });
  }


  function updateUI() {
    // get the control values
    var currentSize = document.querySelector('.rb-form select').value;
    var currentQty = document.querySelectorAll('.rb-form select')[1].value;
    // set the proxy values
    document.querySelector('.tin-toggle[data-title="size"]').dataset.value = currentSize;
    if (currentSize === '1 Liter') {
      document.querySelector('.tin-toggle[data-variant="1L"]').dataset.value = currentQty;
    }
    else {
      document.querySelector('.tin-toggle[data-variant="Travel"]').dataset.value = currentQty;
    }
  }

  
  function poll(sel, cb) {setTimeout(function(){if(document.querySelector(sel)) cb();else poll(sel, cb);}, 50);}
  function customPoll(sel, cb) {setTimeout(function(){if(document.querySelector(sel) && window.jQuery) cb();else customPoll(sel, cb);}, 50);}

  
  poll('#build-a-box .rb-sticky-form', addHTML);
  customPoll('#build-a-box .rb-sticky-form', toggleLogicInit);


})();