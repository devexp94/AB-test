(function() {
    try {
        /* main variables */
        var debug = 0;
        var variation_name = "";
        var $;
        /* all Pure helper functions */

        function waitForElement(selector, trigger, delayInterval, delayTimeout) {
            var interval = setInterval(function() {
                if (
                    document &&
                    document.querySelector(selector) &&
                    document.querySelectorAll(selector).length > 0
                ) {
                    clearInterval(interval);
                    trigger();
                }
            }, delayInterval);
            setTimeout(function() {
                clearInterval(interval);
            }, delayTimeout);
        }


        /* Variation Init */
        function init() {
            /* start your code here */
            console.log('hW A003 started');

            // add thumbnails
            var thbs = document.querySelector('.product__hero-carousel-thumbs')
            var feat = document.createElement('div');
            feat.classList.add('product__hero-thumb', 'mb1', 'pr');
            feat.id = 'thbfeat';
            feat.innerHTML = '<button aria-label="Select image slide" class="image pa x y top left"><picture><img src="https://drive.google.com/uc?id=1tVnAQw3SugYt8vXhAysTXBmRJc47A8MA"></picture></button>';
            var bnft = document.createElement('div');
            bnft.classList.add('product__hero-thumb', 'mb1', 'pr');
            bnft.id = 'thbbnft';
            bnft.innerHTML = '<button aria-label="Select image slide" class="image pa x y top left"><picture><img src="https://drive.google.com/uc?id=1Y7_5SS2Xlkmf2k3LVst7Qj88EHX9YYGj"></picture></button>';
            var ingr = document.createElement('div');
            ingr.classList.add('product__hero-thumb', 'mb1', 'pr');
            ingr.id = 'thbingr';
            ingr.innerHTML = '<button aria-label="Select image slide" class="image pa x y top left"><picture><img src="https://drive.google.com/uc?id=1BIKck9NhHWc8FWu09HUdx6JPwO5uxQ5i"></picture></button>';
            thbs.appendChild(feat);
            thbs.appendChild(bnft);
            thbs.appendChild(ingr);

            // add dots
            var dots = document.querySelector('.product__hero-dots')
            var featd = document.createElement('button');
            featd.classList.add('product__hero-dot');
            featd.setAttribute('aria-label', 'Select image slide');
            featd.id = 'dotfeat';
            var bnftd = document.createElement('button');
            bnftd.classList.add('product__hero-dot');
            bnftd.setAttribute('aria-label', 'Select image slide');
            bnftd.id = 'dotbnft';
            var ingrd = document.createElement('button');
            ingrd.classList.add('product__hero-dot');
            ingrd.setAttribute('aria-label', 'Select image slide');
            ingrd.id = 'dotingr';
            dots.appendChild(featd);
            dots.appendChild(bnftd);
            dots.appendChild(ingrd);

            // add carousel images
            var cars = document.querySelector('.embla__container')
            var feati = document.createElement('div');
            feati.classList.add('embla__slide');
            feati.id = 'feati';
            feati.setAttribute('style', 'flex:0 0 100%;height:100%;width:100%;position:relative;');
            feati.innerHTML = '<div class="image pa x y top left"><picture><source srcset="https://drive.google.com/uc?id=1tVnAQw3SugYt8vXhAysTXBmRJc47A8MA" media="(min-width: 1000px)"><source srcset="https://drive.google.com/uc?id=1tVnAQw3SugYt8vXhAysTXBmRJc47A8MA" media="(min-width: 600px)"><img src="https://drive.google.com/uc?id=1tVnAQw3SugYt8vXhAysTXBmRJc47A8MA"></picture></div>';
            var bnfti = document.createElement('div');
            bnfti.classList.add('embla__slide');
            bnfti.id = 'bnfti';
            bnfti.setAttribute('style', 'flex:0 0 100%;height:100%;width:100%;position:relative;');
            bnfti.innerHTML = '<div class="image pa x y top left"><picture><source srcset="https://drive.google.com/uc?id=1Y7_5SS2Xlkmf2k3LVst7Qj88EHX9YYGj" media="(min-width: 1000px)"><source srcset="https://drive.google.com/uc?id=1Y7_5SS2Xlkmf2k3LVst7Qj88EHX9YYGj" media="(min-width: 600px)"><img src="https://drive.google.com/uc?id=1Y7_5SS2Xlkmf2k3LVst7Qj88EHX9YYGj"></picture></div>';
            var ingri = document.createElement('div');
            ingri.classList.add('embla__slide');
            ingri.id = 'ingri';
            ingri.setAttribute('style', 'flex:0 0 100%;height:100%;width:100%;position:relative;');
            ingri.innerHTML = '<div class="image pa x y top left"><picture><source srcset="https://drive.google.com/uc?id=1BIKck9NhHWc8FWu09HUdx6JPwO5uxQ5i" media="(min-width: 1000px)"><source srcset="https://drive.google.com/uc?id=1BIKck9NhHWc8FWu09HUdx6JPwO5uxQ5i" media="(min-width: 600px)"><img src="https://drive.google.com/uc?id=1BIKck9NhHWc8FWu09HUdx6JPwO5uxQ5i"></picture></div>';
            cars.appendChild(feati);
            cars.appendChild(bnfti);
            cars.appendChild(ingri);

            // select slide
            document.addEventListener('click', function(event) {
                //console.log('clicked');
                if (!event.target.matches('.product__hero-thumb img, .product__hero-dots button')) return;
                //console.log('matched');
                var slides = cars.querySelectorAll('.embla__slide');
                for (q = 0; q < slides.length; q++) {
                    if (slides[q].classList.contains('active')) {
                        slides[q].classList.remove('active');
                    }
                }
                var pos = '0px';
                var wdt = document.querySelector('.site__wrapper > .row > .col:first-child').offsetWidth;
                if (event.target.matches('.product__hero-carousel-thumbs > .product__hero-thumb:first-child img, .product__hero-dots button:first-child')) {
                    var pos = '0';
                    document.querySelector('.embla__container .embla__slide:nth-child(1)').classList.add('active');
                } else if (event.target.matches('.product__hero-carousel-thumbs > .product__hero-thumb:nth-child(2) img, .product__hero-dots button:nth-child(2)')) {
                    var pos = '-' + wdt + 'px';
                    document.querySelector('.embla__container .embla__slide:nth-child(2)').classList.add('active');
                } else if (event.target.matches('.product__hero-carousel-thumbs > .product__hero-thumb:nth-child(3) img, .product__hero-dots button:nth-child(3)')) {
                    var pos = '-' + wdt * 2 + 'px';
                    document.querySelector('.embla__container .embla__slide:nth-child(3)').classList.add('active');
                } else if (event.target.matches('.product__hero-carousel-thumbs > .product__hero-thumb:nth-child(4) img, .product__hero-dots button:nth-child(4)')) {
                    var pos = '-' + wdt * 3 + 'px';
                    document.querySelector('.embla__container .embla__slide:nth-child(4)').classList.add('active');
                } else if (event.target.matches('.product__hero-carousel-thumbs > .product__hero-thumb:nth-child(5) img, .product__hero-dots button:nth-child(5)')) {
                    var pos = '-' + wdt * 4 + 'px';
                    document.querySelector('.embla__container .embla__slide:nth-child(5)').classList.add('active');
                } else if (event.target.matches('.product__hero-carousel-thumbs > .product__hero-thumb:nth-child(6) img, .product__hero-dots button:nth-child(6)')) {
                    var pos = '-' + wdt * 5 + 'px';
                    document.querySelector('.embla__container .embla__slide:nth-child(6)').classList.add('active');
                } else if (event.target.matches('.product__hero-carousel-thumbs > .product__hero-thumb:nth-child(7) img, .product__hero-dots button:nth-child(7)')) {
                    var pos = '-' + wdt * 6 + 'px';
                    document.querySelector('.embla__container .embla__slide:nth-child(7)').classList.add('active');
                } else if (event.target.matches('.product__hero-carousel-thumbs > .product__hero-thumb:nth-child(8) img, .product__hero-dots button:nth-child(8)')) {
                    var pos = '-' + wdt * 7 + 'px';
                    document.querySelector('.embla__container .embla__slide:nth-child(8)').classList.add('active');
                } else if (event.target.matches('.product__hero-carousel-thumbs > .product__hero-thumb:nth-child(9) img, .product__hero-dots button:nth-child(9)')) {
                    var pos = '-' + wdt * 8 + 'px';
                    document.querySelector('.embla__container .embla__slide:nth-child(9)').classList.add('active');
                } else if (event.target.matches('.product__hero-carousel-thumbs > .product__hero-thumb:nth-child(10) img, .product__hero-dots button:nth-child(10)')) {
                    var pos = '-' + wdt * 9 + 'px';
                    document.querySelector('.embla__container .embla__slide:nth-child(10)').classList.add('active');
                }
                // console.log(pos);
                // animation needed
                document.querySelector(".embla__container").style.cssText = `transform: translate3d(${pos}, 0px, 0px);`;
                var thumbs = thbs.querySelectorAll('.product__hero-thumb');
                for (t = 0; t < thumbs.length; t++) {
                    if (thumbs[t].classList.contains('active')) {
                        thumbs[t].classList.remove('active');
                    }
                }
                var listdots = dots.querySelectorAll('.product__hero-dots button');
                for (l = 0; l < listdots.length; l++) {
                    if (listdots[l].classList.contains('active')) {
                        listdots[l].classList.remove('active');
                    }
                }
                if (event.target.matches('.product__hero-thumb img')) {
                    event.target.closest('.product__hero-thumb').classList.add('active');
                } else {
                    event.target.classList.add('active');
                }
                //console.log('done');
            }, false);
        }

        /* Initialize variation */
        waitForElement('.embla__container', init, 50, 15000);
    } catch (e) {
        if (debug) console.log(e, "error in Test" + variation_name);
    }
})();