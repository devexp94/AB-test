(function() {
    try {
        /* main variables */
        var debug = 0;
        var variation_name = "";

        /* all Pure helper functions */
        function waitForElement(selector, trigger, delayInterval, delayTimeout) {
            var interval = setInterval(function() {
                    if (document && document.querySelector(selector) && document.querySelectorAll(selector).length > 0) {
                        clearInterval(interval);
                        trigger();
                    }
                }

                , delayInterval);

            setTimeout(function() {
                    clearInterval(interval);
                }

                , delayTimeout);
        }
var str3 = `
<div class="eg-callout">
    <p>
        <span class="c-call-outs__icons icon">
            <img src="https://www.wedgwood.com/-/media/Wedgwood/ww-cro-icons/star%201%201" class="eg-icon" >
        </span>
        Strong fine bone china
    </p>
</div>

<div class="eg-callout">
    <p>
        <span class="c-call-outs__icons icon">
            <img src="https://www.wedgwood.com/-/media/Wedgwood/ww-cro-icons/Group" class="eg-icon" >
        </span>
        Gold banding
    </p>
</div>

<div class="eg-callout">
    <p>
        <span class="c-call-outs__icons icon">
            <img src="https://www.wedgwood.com/-/media/Wedgwood/ww-cro-icons/dishwasher%201" class="eg-icon" >
        </span>
        Dishwasher Safe
    </p>
</div>`;

var str4 = `
<div class="eg-callout">
    <p>
        <span class="c-call-outs__icons icon">
            <img src="https://www.wedgwood.com/-/media/Wedgwood/ww-cro-icons/star%201%201" class="eg-icon" >
        </span>
        Strong fine bone china
    </p>
</div>

<div class="eg-callout">
    <p>
        <span class="c-call-outs__icons icon">
            <img src="https://www.wedgwood.com/-/media/Wedgwood/ww-cro-icons/Group" class="eg-icon" >
        </span>
        Gold banding
    </p>
</div>

<div class="eg-callout">
    <p>
        <span class="c-call-outs__icons icon">
            <img src="https://www.wedgwood.com/-/media/Wedgwood/ww-cro-icons/box%201" class="eg-icon" >
        </span>
        Carefull packaged in a Wedgwood blue gift box
    </p>
</div>

<div class="eg-callout">
    <p>
        <span class="c-call-outs__icons icon">
            <img src="https://www.wedgwood.com/-/media/Wedgwood/ww-cro-icons/dishwasher%201" class="eg-icon" >
        </span>
        Dishwasher Safe
    </p>
</div>`;

        function init() {
          
            let egLinks = ['/en-us/collections/all-collections/gio-gold/gio-gold-cereal-bowl-40007550',
                '/en-us/collections/all-collections/renaissance-gold/renaissance-gold-gravy-boat-5c102103100',
                '/en-us/collections/all-collections/renaissance-gold/renaissance-gold-mug-5c107408599',
                '/en-us/collections/all-collections/renaissance-gold/renaissance-gold-creamer-5c102102213',
                '/en-us/collections/all-collections/renaissance-gold/renaissance-gold-soup-cereal-bowl-5c102102214',
                '/en-us/collections/all-collections/gio-gold/gio-gold-salad-plate-40007540',
                '/en-us/collections/all-collections/renaissance-gold/renaissance-gold-sugar-5c102102212',
                '/en-us/collections/all-collections/gio-gold/gio-gold-dinner-plate-40007539',
                '/en-us/collections/all-collections/gio-gold/gio-gold-oval-serving-bowl-40011715',
                '/en-us/collections/all-collections/gio-gold/gio-gold-mug-1055613',
                '/en-us/collections/all-collections/renaissance-gold/renaissance-gold-rim-soup-bowl-5c102101012',
                '/en-us/collections/all-collections/gio-gold/gio-gold-bread-butter-plate-40007541',
                '/en-us/collections/all-collections/renaissance-gold/renaissance-gold-gravy-boat-stand-5c102103101',
                '/en-us/collections/all-collections/vera-wang-lace-gold/vera-wang-lace-gold-teacup-saucer-1058011',
                '/en-us/collections/all-collections/vera-wang-lace-gold/vera-lace-gold-salad-plate-50146901006',
                '/en-us/collections/all-collections/vera-wang-lace-gold/vera-lace-gold-oval-platter-50146903001',
                '/en-us/collections/all-collections/vera-wang-lace-gold/vera-lace-gold-dinner-plate-50146901004',
                '/en-us/collections/all-collections/vera-wang-lace-gold/vera-lace-gold-rim-soup-bowl-50146901012',
                '/en-us/collections/all-collections/vera-wang-lace-gold/vera-lace-gold-bread-butter-plate-50146901008'                

            ];
            // if link after 29 (xls ref)
            if (egLinks.indexOf(window.location.pathname) != -1) {
                document.querySelector('.c-call-outs').innerHTML = str3;
                   } 
                   else {
                    document.querySelector('.c-call-outs').innerHTML = str4;
            }
        }

        waitForElement('#pdp-ecom-container > div.c-call-outs', init, 50, 20000);
    } catch (e) {
        if (debug) console.log(e, "error in Test" + variation_name);
    }
})();