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
        function onLoadJqueryLibrary(trigger, delayInterval, delayTimeout) {
            var interval = setInterval(function () {
                if (window.jQuery && window.jQuery.fn) {
                    clearInterval(interval);
                    trigger();
                }
            }, delayInterval);
            setTimeout(function () {
                clearInterval(interval);
            }, delayTimeout);
        }
        var firstSelector='';
        function init() {
            var $ = window.jQuery;

            $('.product-form__item #SingleOptionSelector-1 option').each(function () {
                firstSelector += '<p class="option" eg-val="' + $(this).val() + '" is-active="'+$(this).attr('selected')+'">' + $(this).text() + '</p>';
            });
            var egSelection = '' +
                '<div class="eg-selection-div eg-first-selection">' +
                firstSelector +
                '</div>';
            firstSelector = '';
            $('.product-form__item #SingleOptionSelector-2 option').each(function () {
                firstSelector += '<p class="option" eg-val="' + $(this).val() + '" is-active="'+$(this).attr('selected')+'">' + $(this).text() + '</p>';
            });
            var egSelection1 = '' +
                '<div class="eg-selection-div eg-sec-selection">' +
                firstSelector +
                '</div>';
            $('.product-form__controls-group .selector-wrapper.product-form__item:nth-child(2) .single-option-selector').after(egSelection);
            $('.product-form__controls-group .selector-wrapper.product-form__item:nth-child(3) .single-option-selector').after(egSelection1);

            $('.eg-selection-div.eg-first-selection > p:first-child').addClass('eg-active');
            $('.eg-selection-div.eg-sec-selection > p:first-child').addClass('eg-active');

            $('body').on('click', '.eg-first-selection p',function(){
                $('.product-form__item #SingleOptionSelector-1').val($(this).attr('eg-val'));
                $('.eg-first-selection p').removeClass('eg-active');
                $(this).addClass('eg-active');
                updateSelection();

            });
            $('body').on('click', '.eg-sec-selection p',function(){
                $('.product-form__item #SingleOptionSelector-2').val($(this).attr('eg-val'));
                $('.eg-sec-selection p').removeClass('eg-active');
                $(this).addClass('eg-active');
                updateSelection();
            });

        }

        function updateSelection(){
            var selectText = $('#SingleOptionSelector-0').val() + ' / '+$('.product-form__item #SingleOptionSelector-1').val()+ ' / '+ $('.product-form__item #SingleOptionSelector-2').val();
            $('#ProductSelect-product-template option').each(function(val){
            if($(this).text().indexOf(selectText) != -1){
                $('#ProductSelect-product-template').val($(this).val());
            }
            });
        }
        /* Initialise variation */
        onLoadJqueryLibrary(function () {
            waitForElement('.product-form__controls-group .selector-wrapper.product-form__item:nth-child(3) .single-option-selector', init, 50, 25000);
        }, 50, 10000);
    } catch (e) {
        if (debug) console.log(e, "error in Test" + variation_name);
    }
})();