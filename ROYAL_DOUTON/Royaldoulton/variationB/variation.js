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
    function init() {
        if (document.querySelectorAll('.b-f-product-overview.c-product-overview.component .c-product-image-gallery .product-image-slider.slick-initialized.slick-slider .slick-slide:not(.slick-cloned) > div').length <= 3) {
            const desctext = document.createElement('p');
            desctext.classList.add('desc_text');
            desctext.innerText = 'Description';
            document.querySelector('.c-product-description').prepend(desctext);
            if (window.innerWidth > 767) {
                var divforimages = document.createElement('div');
                divforimages.classList.add('wrappperforimages');
                document.querySelector('.col-12.col-md-6.col-xl-5 .c-product-image-gallery').before(divforimages);
                document.querySelectorAll('.b-f-product-overview.c-product-overview.component .c-product-image-gallery .product-image-slider.slick-initialized.slick-slider .slick-slide:not(.slick-cloned) > div').forEach((ele, i) => {
                    const clonenode = ele.cloneNode(true);
                    document.querySelector('.wrappperforimages').append(clonenode)
                });	
            }
            document.querySelector('.c-product-description').after(document.querySelector('div#accordion').closest('section'));
            document.querySelector('.c-product-description + section.layout-section .col-12.col-md-6:nth-child(2)').classList.remove('col-md-6');
            if(window.innerWidth < 768) {
            document.querySelector('div#accordion .col-12 button#toggle-collapse-pdp-0').classList.add('collapsed');
            document.querySelector('div#accordion .col-12 div#collapsible-pdp-0').classList.remove('show');	
            }
            if(window.innerWidth > 767) {
            document.querySelector('div#accordion .col-12 button#toggle-collapse-pdp-0').click();	
            }
            document.querySelectorAll('.wrappperforimages > div').forEach((ele,i) => {
                    ele.addEventListener('click', () => {
                    const index = [...ele.parentNode.children].indexOf(ele);
                    console.log(index);
                    wait(() => document.querySelectorAll('.c-lightbox.modal.show').length>0 ,() => {
                        setTimeout(function(){
                                document.querySelectorAll('div#lightboxModal .slider-thumbnails.slick-vertical.slick-initialized.slick-slider .slick-list.draggable .slick-track .slick-slide>div>div')[index].click();
                        },500);
                    });
                    });
            });
            window.addEventListener('scroll', (data) => {
            const heightofdesc = document.querySelector('.b-f-product-detail-main-info.c-product-detail-main-info').offsetHeight;
            const heightofimages = document.querySelector('.wrappperforimages').offsetHeight;
            if (window.scrollY > 80 && (window.scrollY < heightofimages + 300)) {
             document.querySelector('.b-f-product-detail-main-info.c-product-detail-main-info').classList.add('stickyafterscroll')   
            } else {
                document.querySelector('.b-f-product-detail-main-info.c-product-detail-main-info').classList.remove('stickyafterscroll')   
            }
        });
        }
        if (document.querySelectorAll('.b-f-product-overview.c-product-overview.component .c-product-image-gallery .product-image-slider.slick-initialized.slick-slider .slick-slide:not(.slick-cloned) > div').length > 3) {
            const desctext = document.createElement('p');
            desctext.classList.add('desc_text');
            desctext.innerText = 'Description';
            document.querySelector('.c-product-description').prepend(desctext);
            if(window.innerWidth > 767) {
                var divforimages = document.createElement('div');
                divforimages.classList.add('wrappperforimages_4');
                document.querySelector('.col-12.col-md-6.col-xl-5 .c-product-image-gallery').before(divforimages);
                document.querySelectorAll('.b-f-product-overview.c-product-overview.component .c-product-image-gallery .product-image-slider.slick-initialized.slick-slider .slick-slide:not(.slick-cloned) > div').forEach((ele, i) => {
                    const clonenode = ele.cloneNode(true);
                    document.querySelector('.wrappperforimages_4').append(clonenode)
                });
            }
            document.querySelector('.c-product-description').after(document.querySelector('div#accordion').closest('section'));
            document.querySelector('.c-product-description + section.layout-section .col-12.col-md-6:nth-child(2)').classList.remove('col-md-6');
            if(window.innerWidth < 768) {
            document.querySelector('div#accordion .col-12 button#toggle-collapse-pdp-0').classList.add('collapsed');
            document.querySelector('div#accordion .col-12 div#collapsible-pdp-0').classList.remove('show');	
            }
            else {
            document.querySelector('div#accordion .col-12 button#toggle-collapse-pdp-0').click();	
            document.querySelectorAll('.wrappperforimages_4 > div').forEach((ele,i) => {
                    ele.addEventListener('click', () => {
                    const index = [...ele.parentNode.children].indexOf(ele);
                    console.log(index);
                    wait(() => document.querySelectorAll('.c-lightbox.modal.show').length>0 ,() => {
                        setTimeout(function(){
                                document.querySelectorAll('div#lightboxModal .slider-thumbnails.slick-vertical.slick-initialized.slick-slider .slick-list.draggable .slick-track .slick-slide>div>div')[index].click();
                        },500);
                    });
                    });
            });
            window.addEventListener('scroll', (data) => {
            const heightofdesc = document.querySelector('.b-f-product-detail-main-info.c-product-detail-main-info').offsetHeight;
            const heightofimages = document.querySelector('.wrappperforimages_4').offsetHeight;
            if (window.scrollY > 80 && (window.scrollY < heightofimages + 300)) {
             document.querySelector('.b-f-product-detail-main-info.c-product-detail-main-info').classList.add('stickyafterscroll')   
            } else {
                document.querySelector('.b-f-product-detail-main-info.c-product-detail-main-info').classList.remove('stickyafterscroll')   
            }
        });
      }
        }
        }
      waitForElement(
        '.b-f-product-overview.c-product-overview.component .c-product-image-gallery .product-image-slider.slick-initialized.slick-slider .slick-slide:not(.slick-cloned) > div',
        init,
        50,
        10000
    );
    }());