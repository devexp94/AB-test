var croTest = function () {

    var croMessaging = {
        title: "WELCOME BACK TO OUR INTERNATIONAL STUDENTS",
        copy: "Our team is here to support your return. If you have questions or would like to discuss your options, please contact us.",
        cta: {
         text: "CONTACT US",
         link: 'https://openday.vu.edu.au'
        }
    };

    var croImages = {
        mobile: "https://www.vu.edu.au/sites/default/files/open-day-carousel-optimize.jpg",
        desktop: "https://www.vu.edu.au/sites/default/files/styles/col_12_breakpoints_theme_victory_xl_1x/public/postgraduate-seminar-series-homepage-carousel.png?itok=Rl6Whqnh&timestamp=1627862581"
    };
    
    var croBanner = `<div class="view view-blocks-hero-title-box view-id-blocks_hero_title_box cro-banner">
        <div class="view-content">
        <div class="views-row views-row-3 views-row-odd item active">
            <div class="hero-banner">
            <div class="row">
                <div class="container">
                <div class="row">
                    <div class="hero-banner__content col-xs-8 col-sm-6 col-lg-6 hide-content-bg">
                    <div style="color: #FFFFFF">
                        <div class="field field-name-field-hero-banner-headline field-type-text field-label-hidden">
                        <h2 class="hero-banner__header">${croMessaging.title}</h2>
                        </div>
                        <div class="field field-name-field-hero-banner-message">
                        <p>${croMessaging.copy}</p>
                        <br/>
                        <a href="${croMessaging.cta.link}" class="btn btn-special btn-md cro-btn">${croMessaging.cta.text}</a>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
                <div class="hero-banner__image">
                <div>
                    <picture class="img-responsive"><!--[if IE 9]><video style="display: none;"><![endif]-->
                    <source media="(min-width: 768px)" srcset="${croImages.desktop} 1x"> <!--[if IE 9]></video><![endif]-->
                     <source media="(min-width: 0) and (max-width: 767px)" srcset="${croImages.mobile} 1x"> <!--[if IE 9]></video><![endif]-->
                    <img alt=" " class="img-responsive" src="${croImages.mobile}" title=""></picture>
                </div>
                </div>
            </div>
            </div>
        </div>
        </div>
    </div>`;
    
    jQuery('#hero-title-box > .pane-content').first().find('.view').remove();
    jQuery('#hero-title-box > .pane-content').prepend(croBanner);
};

croTest();
