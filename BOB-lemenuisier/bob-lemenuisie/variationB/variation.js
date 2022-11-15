console.log('hW A027 Started');

var hed = document.getElementsByTagName('head')[0];
//var mbd = document.createElement('script');
//mbd.type = 'text/javascript';
//mbd.async = true;
//mbd.src = 'https://widgets.custplace.com/rating/v4/embed.js';
//hed.appendChild(mbd);
var wdg = document.createElement('script');
wdg.type = 'text/javascript';
wdg.async = true;
wdg.src = 'https://widgets.custplace.com/reviews/carousel/v1/embed.js';
hed.appendChild(wdg);

var cat = document.querySelector('ol.items.product-items > li:first-child');
var cus = document.createElement('div');
cus.id = 'custplace';
cus.classList.add('ratings');
cus.innerHTML = '<div id="cust-widget-reviews" data-id="91093" data-lowestmark="4" ></div><div id="cust-widget-note" data-id="91093" data-counter="false" data-width="fullWidth" ></div>';
cat.insertAdjacentElement('afterend', cus);

window.dataLayer = window.dataLayer || [];
window.dataLayer.push({
    'event': 'custplace_ready'
});