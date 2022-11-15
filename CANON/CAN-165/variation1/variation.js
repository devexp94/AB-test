(function () {
	"use strict";

	if (typeof unsafeWindow !== "undefined") window = unsafeWindow;

	var tag = "cv-165",
		debug = document.cookie.indexOf("cfQA") > -1;
		var data = {
			 "/lenses/ef-50mm-f-1-8-stm-lens/":{
				links: [
					{
						name: "Overview",
						link: ".sticky-wrapper + .content-block",
					},
					{
						name: "Specifications",
						link: "https://www.canon.co.uk/lenses/ef-50mm-f-1-8-stm-lens/specification.html",
					},
					{
						name: "Gallery",
						link: "https://www.canon.co.uk/lenses/ef-50mm-f-1-8-stm-lens/gallery/",
					},
					{
						name: "Accessories",
						link: "div.recommended-items",
					},
					{
						name: "Reviews",
						link: "#reviews",
					},
				],
				element : '.sticky-wrapper + .content-block',
			},
			"/lenses/ef-100mm-f-2-8l-macro-is-usm-lens/":{
				links: [
					{
						name: "Features",
						link: "#features",
					},
					{
						name: "Benefits",
						link: "#benefits",
					},
					{
						name: "Specifications",
						link: "#specifications",
					},
					{
						name: "Gallery",
						link: "https://www.canon.co.uk/lenses/ef-100mm-f-2-8l-macro-is-usm-lens/gallery/",
					},
					{
						name: "Accessories",
						link: "#accessories",
					},
					{
						name: "Reviews",
						link: ".tabbed-content.container .content-block.container:nth-child(2)",
					}
				],
				element : '.sticky-wrapper + .content-block',
			},
			"/lenses/ef-70-200mm-f-2-8-l-is-iii-usm-lens/":{
				links: [
					{
						name: "Overview",
						link: "#anchorid1673663",
					},
					{
						name: "Specifications",
						link: "body > section.pl-spacer.pl-spacer--in--large.pl-spacer--cut-h.pl-bg.pl-bg--white.overflow-hidden",
					},
					{
						name: "Gallery",
						link: "https://www.canon.co.uk/lenses/ef-70-200mm-f-2-8-l-is-iii-usm-lens/gallery/",
					},
					{
						name: "What's in the box?",
						link: "body > section.pl-spacer.pl-spacer--in--large.pl-spacer--cut-h.pl-bg.pl-bg--gray-lightest",
					},
					{
						name: "Reviews",
						link: "#reviews",
					},
					{
						name: "Accessories",
						link: "body > section:nth-child(22)",
					},
					{
						name: "Support",
						link: "#main-footer",
					}
				],
				element : '.sticky-wrapper + .content-block',
			},
			"/lenses/ef-24-105mm-f-4l-is-ii-usm-lens/":{
				links: [
					{
						name: "Overview",
						link: ".pl-hero",
					},
					{
						name: "Specifications",
						link: "/lenses/ef-24-105mm-f-4l-is-ii-usm-lens/specifications/",
					},
					{
						name: "Support",
						link: "https://www.canon.co.uk/support/consumer_products/products/cameras/ef_lenses/is/ef24-105mm_f4l_is_ii_usm.html?type=software",
					},
					{
						name: "Accessories",
						link: "body > section:nth-child(29)",
					}
					
				],
				element : '.sticky-wrapper + .content-block',
			},
			"/lenses/ef-24-70mm-f-2-8l-ii-usm-lens/":{
				links: [
					{
						name: "Overview",
						link: ".sticky-wrapper  + div.content-block.clear",
					},
					{
						name: "Specifications",
						link: "#specifications",
					},
					{
						name: "Awards",
						link: "body > main > div:nth-child(17)",
					},
					{
						name: "Gallery",
						link: "https://www.canon.co.uk/lenses/ef-24-70mm-f-2-8l-ii-usm-lens/gallery/",
					},
					{
						name: "Accessories",
						link: "#specifications + div",
					}
					
				],
				element : '.sticky-wrapper + .content-block',
			},
			"/lenses/rf-16mm-f2-8-stm/":{
				links: [
					{
						name: "Overview",
						link: "#",
					},
					{
						name: "Specifications",
						link: "https://www.canon.co.uk/lenses/rf-16mm-f2-8-stm/specifications/",
					},
					{
						name: "Gallery",
						link: "https://www.canon.co.uk/lenses/rf-16mm-f2-8-stm/gallery/",
					},
					{
						name: "What's in the box",
						link: ".whats-in-the-box",
					},{
						name: "Support",
						link: "/support/consumer_products/products/cameras/rf-lenses/rf-16mm-f2.8-stm.html",
					}
				],
				element : '.sticky-wrapper + .content-block',
			},
			"/lenses/ef-70-300mm-f-4-5-6-is-ii-usm/":{
				links: [
					{
						name: "Overview",
						link: "#",
					},
					{
						name: "Specifications",
						link: "https://www.canon.co.uk/lenses/ef-70-300mm-f-4-5-6-is-ii-usm/specifications/",
					},
					{
						name: "Awards",
						link: "body > section:nth-child(30)",
					},
					{
						name: "Gallery",
						link: "#anchorid1470386",
					},
					{
						name: "Accessories",
						link: "#anchorid1470386 + #remove-tint + section",
					},
					{
						name: "Support",
						link: "https://www.canon.co.uk/support/consumer_products/products/cameras/ef_lenses/is/ef-70-300mmf4-56-is-ii-usm.html",
					}
				],
				element : '.sticky-wrapper + .content-block',
			},
			"/lenses/ef-100-400mm-f-4-5-5-6l-is-ii-usm-lens/":{
				links: [
					{
						name: "Overview",
						link: "#features",
					},
					{
						name: "Specifications",
						link: "#specification",
					},
					{
						name: "Awards",
						link: "#features + div + div",
					},
					{
						name: "Reviews",
						link: "#p-rating",
					},
					{
						name: "Support",
						link: "/SupportProduct/RedirectToSupportProduct?artnr=9524B005&WT.z_fromproduct=1",
					}
				],
				element : '.sticky-wrapper + .content-block',
			},
			"/cameras/eos-r5/":{
				links: [
					{
						name: "Overview",
						link: "#",
					},
					{
						name: "Specifications",
						link: ".product-feature",
					},
					{
						name: "Compare models",
						link: ".comparison-table-new",
					},
					{
						name: "Gallery",
						link: "#gallery",
					},
					{
						name: "What's in the box",
						link: ".whats-in-the-box",
					},
					{
						name: "Reviews",
						link: "#reviews",
					},
					{
						name: "Recommended lenses",
						link: "#id_1987471 + .product-grid",
					},
					{
						name: "Support",
						link: "https://www.canon.co.uk/support/consumer_products/products/cameras/digital_slr/eos-r5.html",
					}
				],
				element : '.sticky-wrapper + .content-block',
			},
			"/cameras/eos-r6/":{
				links: [
					{
						name: "Overview",
						link: "#",
					},
					{
						name: "Specifications",
						link: ".product-feature",
					},
					{
						name: "Compare models",
						link: ".comparison-table-new",
					},
					{
						name: "Gallery",
						link: "#gallery",
					},
					{
						name: "What's in the box",
						link: ".whats-in-the-box",
					},
					{
						name: "Reviews",
						link: "#reviews",
					},
					{
						name: "Lenses & accessories",
						link: "#accessories",
					},
					{
						name: "Support",
						link: "/support/consumer_products/products/cameras/Digital_SLR/eos-r6.html",
					}
					
				],
				element : '.sticky-wrapper + .content-block',
			},
			"/cameras/eos-90d/":{
				links: [
					{
						name: "Overview",
						link: "#",
					},
					{
						name: "Specifications",
						link: "#remove-gradient > #remove-tint + section",
					},
					{
						name: "Compare models",
						link: ".product-comp-specification",
					},
					{
						name: "Gallery",
						link: "#pl-gallery-trigger",
					},
					{
						name: "What's in the box",
						link: ".f-pro-content-related + section",
					},
					{
						name: "Recommended lenses",
						link: ".f-pro-content-related + section + section",
					},
					{
						name: "Support",
						link: "https://www.canon.co.uk/support/",
					}
				],
				element : '.sticky-wrapper + .content-block',
			},
			"/cameras/eos-r3/":{
				links: [
					{
						name: "Overview",
						link: "#",
					},
					{
						name: "Specifications",
						link: "https://www.canon.co.uk/cameras/eos-r3/specifications/",
					},
					{
						name: "Compare models",
						link: "#id_2136513 + .heading-simple",
					},
					{
						name: "Gallery",
						link: "#gallery",
					},
					{
						name: "What's in the box",
						link: ".whats-in-the-box",
					},
					{
						name: "Accessories",
						link: "#id_2136351 + .product-grid",
					},
					{
						name: "Support",
						link: "https://www.canon.co.uk/support/consumer_products/products/cameras/digital_slr/eos-r3.html",
					}
				],
				element : '.sticky-wrapper + .content-block',
			},
			"/cameras/eos-m50-mark-ii/":{
				links: [
					{
						name: "Overview",
						link: "#",
					},
					{
						name: "Specifications",
						link: "#id_2052171 + section.product-feature",
					},
					{
						name: "Compare models",
						link: ".comparison-table-new",
					},
					{
						name: "What's in the box",
						link: ".whats-in-the-box",
					},
					{
						name: "Reviews",
						link: "#id_2052171 + div",
					},
					{
						name: "Accessories",
						link: "#id_2060095 + div.product-grid",
					},
					{
						name: "Support",
						link: "https://www.canon.co.uk/support/consumer_products/products/cameras/Digital_SLR/eos-m50-mark-ii.html",
					}
				],
				element : '.sticky-wrapper + .content-block',
			},
			"/cameras/eos-5d-mark-iv/":{
				links: [
					{
						name: "Overview",
						link: "#",
					},
					{
						name: "Specifications",
						link: "https://www.canon.co.uk/cameras/eos-5d-mark-iv/specifications/",
					},
					{
						name: "Compare models",
						link: ".product-comp-specification",
					},
					{
						name: "Awards",
						link: "#remove-spacing-bottom",
					},
					{
						name: "Gallery",
						link: "#remove-spacing-bottom + .pl-anchor-tabs--section",
					},
					{
						name: "What's in the box",
						link: "#pro-support + section.pl-spacer",
					},
					{
						name: "Lenses & accessories",
						link: "#pro-support",
					},
					{
						name: "Support",
						link: "https://www.canon.co.uk/support/consumer_products/products/cameras/digital_slr/eos-5d-mark-iv.html",
					},
					{
						name: "Offers",
						link: "https://www.canon.co.uk/promotions/",
					}
				],
				element : '.sticky-wrapper + .content-block',
			},
			"/cameras/eos-2000d/":{
				links: [
					{
						name: "Overview",
						link: "#",
					},
					{
						name: "Specifications",
						link: "/cameras/eos-2000d/specifications/",
					},
					{
						name: "Compare models",
						link: "product-comp-specification",
					},
					{
						name: "What's in the box",
						link: ".product-comp-specification + section",
					},
					{
						name: "Accessories",
						link: ".product-comp-specification + section + section",
					},
					{
						name: "Reviews",
						link: "#reviews.container",
					},
					{
						name: "Support",
						link: "https://www.canon.co.uk/support/",
					}
				],
				element : '.sticky-wrapper + .content-block',
			},
			"/cameras/eos-r/":{
				links: [
					{
						name: "Overview",
						link: "#",
					},
					{
						name: "Specifications",
						link: "https://www.canon.co.uk/cameras/eos-r/specifications/",
					},
					{
						name: "Compare models",
						link: ".product-comp-specification",
					},
					{
						name: "Gallery",
						link: "section + #Gallery",
					},
					{
						name: "What's in the boxes",
						link: "#Testimonials + section + section ",
					},
					{
						name: "Lenses & accessories",
						link: "https://www.canon.co.uk/cameras/eos-r-lenses-accessories/",
					}
				],
				element : '.sticky-wrapper + .content-block',
			},
			"/cameras/eos-m50/":{
				links: [
					{
						name: "Overview",
						link: "#",
					},
					{
						name: "Gallery",
						link: "#pl-gallery-trigger",
					},
					{
						name: "Specifications",
						link: "https://www.canon.co.uk/cameras/eos-m50/specifications/",
					},
					{
						name: "What's in the boxes",
						link: "div.pl-anchor-tabs--section + #remove-spacing-bottom",
					},
					{
						name: "Lenses &Accessories",
						link: "#",
					},
					{
						name: "Reviews",
						link: "div#reviews",
					},
					{
						name: "Awards",
						link: "div#reviews + section",
					},
					{
						name: "Support",
						link: "https://www.canon.co.uk/support/",
					},
					{
						name: "Related products",
						link: "div#related-products",
					}
				],
				element : '.sticky-wrapper + .content-block',
			},
			"/cameras/eos-4000d/":{
				links: [
					{
						name: "Overview",
						link: "#",
					},
					{
						name: "Specifications",
						link: "https://www.canon.co.uk/cameras/eos-4000d/specifications/",
					},
					{
						name: "Compare models",
						link: ".product-comp-specification",
					},
					{
						name: "What's in the box",
						link: "#remove-gradient",
					},
					{
						name: "Accessories",
						link: "#remove-gradient > section +section",
					},
					{
						name: "Reviews",
						link: "div#reviews",
					},
					{
						name: "Support",
						link: "https://www.canon.co.uk/support/",
					}
					
				],
				element : '.sticky-wrapper + .content-block',
			},
			"/canon-powershot-zoom/":{
				links: [
					{
						name: "Overview",
						link: "#",
					},
					{
						name: "Specifications",
						link: "https://www.canon.co.uk/cameras/canon-powershot-zoom/specifications/",
					},
					{
						name: "Gallery",
						link: "div#gallery + .tiled-gallery",
					},
					{
						name: "What's in the box",
						link: ".whats-in-the-box",
					},
					{
						name: "Reviews",
						link: "div#reviews",
					},
					{
						name: "Accessories",
						link: "div#accessories",
					},
					{
						name: "Support",
						link: "https://www.canon.co.uk/support/consumer_products/products/cameras/Digital_Compact/Others_Powershot_Pro_etc/powershot-zoom.html",
					}					
				],
				element : '.sticky-wrapper + .content-block',
			},
			"/cameras/eos-6d-mark-ii/":{
				links: [
					{
						name: "Overview",
						link: "#",
					},
					{
						name: "Specifications",
						link: "https://www.canon.co.uk/cameras/eos-6d-mark-ii/specifications/",
					},
					{
						name: "Compare models",
						link: ".product-comp-specification",
					},
					{
						name: "What's in the box",
						link: ".product-comp-specification+ section",
					},
					{
						name: "Lenses & accessories",
						link: ".product-comp-specification+ section+ section",
					},
					{
						name: "Awards",
						link: ".product-comp-specification + section + section + section + section",
					},
					{
						name: "Support",
						link: "https://www.canon.co.uk/support/consumer_products/products/cameras/digital_slr/eos-6d-mark-ii.html",
					}
										
				],
				element : '.sticky-wrapper + .content-block',
			},
			"/cameras/eos-800d/":{
				links: [
					{
						name: "Overview",
						link: "#",
					},
					{
						name: "Specifications",
						link: "https://www.canon.co.uk/cameras/eos-800d/specifications/",
					},
					{
						name: "What's in the box",
						link: "#pro-dslr + section + section",
					},
					{
						name: "Lenses & Accessories",
						link: "#pro-dslr + section + section + section",
					},
					{
						name: "Reviews",
						link: "#",
					},
					{
						name: "Awards",
						link: "body > section:nth-child(37)",
					},
					{
						name: "Support",
						link: "https://www.canon.co.uk/support/consumer_products/products/cameras/digital_slr/eos-800d.html",
					}					
				],
				element : '.sticky-wrapper + .content-block',
			},
			"/cameras/powershot-g7-x-mark-ii/":{
				links: [
					{
						name: "Overview",
						link: "#",
					},
					{
						name: "Benefits",
						link: "div#benefits",
					},
					{
						name: "Gallery",
						link: "#gallery",
					},
					{
						name: "Specifications",
						link: "div#specifications",
					},
					{
						name: "Offers",
						link: "https://www.canon.co.uk/promotions/",
					},
					{
						name: "Reviews",
						link: "div#reviews",
					},
					{
						name: "Support",
						link: "https://www.canon.co.uk/support/consumer_products/products/cameras/digital_compact/powershot_g_series/powershot-g7-x-mark-ii.html",
					}
					
				],
				element : '.sticky-wrapper + .content-block',
			},
			"/cameras/eos-850d/":{
				links: [
					{
						name: "Overview",
						link: "#",
					},
					{
						name: "Specifications",
						link: "https://www.canon.co.uk/cameras/eos-850d/specifications/",
					},
					{
						name: "What's in the box",
						link: "body > section:nth-child(22)",
					},
					{
						name: "Accessories",
						link: "div#accessories",
					},
					{
						name: "Reviews",
						link: "div#reviews",
					},
					{
						name: "Support",
						link: "https://www.canon.co.uk/support/",
					}
				],
				element : '.sticky-wrapper + .content-block',
			},
			"/cameras/eos-200d/":{
				links: [
					{
						name: "Overview",
						link: "#",
					},
					{
						name: "Specifications",
						link: "https://www.canon.co.uk/cameras/eos-200d/specifications/",
					},
					{
						name: "What's in the box",
						link: "#remove-tint + section + section",
					},
					{
						name: "Lenses & accessories",
						link: "#remove-tint + section + section + section",
					},
					{
						name: "Reviews",
						link: "div#reviews",
					},
					{
						name: "Awards",
						link: "div#reviews + section",
					},
					{
						name: "Support",
						link: "https://www.canon.co.uk/support/consumer_products/products/cameras/digital_slr/eos-200d.html",
					}
				],
				element : '.sticky-wrapper + .content-block',
			},
			"/cameras/eos-1d-x-mark-iii/":{
				links: [
					{
						name: "Overview",
						link: "#",
					},
					{
						name: "Specifications",
						link: "https://www.canon.co.uk/cameras/eos-1d-x-mark-iii/specifications/",
					},
					{
						name: "Compare models",
						link: "div.product-comp-specification",
					},
					{
						name: "Lenses & accessories",
						link: "div#lenses",
					},
					{
						name: "What's in the box",
						link: "div#lenses + section + section",
					},
					{
						name: "Reviews",
						link: "div#reviews",
					},
					{
						name: "Support",
						link: "https://www.canon.co.uk/support/",
					}
				],
				element : '.sticky-wrapper + .content-block',
			},
			"/cameras/eos-m6-mark-ii/":{
				links: [
					{
						name: "Overview",
						link: "#",
					},
					{
						name: "Specifications",
						link: "https://www.canon.co.uk/cameras/eos-m6-mark-ii/specifications/",
					},
					{
						name: "Compare models",
						link: "div.product-comp-specification",
					},
					{
						name: "What's in the box",
						link: "div#gallery + div + section + section",
					},
					{
						name: "Lenses & Accessories",
						link: "div#gallery + div + section + section + section",
					},
					{
						name: "Reviews",
						link: "div#reviews",
					},
					{
						name: "Awards",
						link: "body > section:nth-child(23)",
					},
					{
						name: "Support",
						link: "https://www.canon.co.uk/support/",
					}
				],
				element : '.sticky-wrapper + .content-block',
			},
			"/cameras/powershot-g1-x-mark-iii/":{
				links: [
					{
						name: "Overview",
						link: "#",
					},
					{
						name: "Specifications",
						link: "https://www.canon.co.uk/cameras/powershot-g1-x-mark-iii/specifications/",
					},
					{
						name: "Gallery",
						link: "div#remove-tint",
					},
					{
						name: "What's in the box",
						link: "div#remove-tint + section",
					},
					{
						name: "Accessories",
						link: "div#remove-tint + section + section",
					},
					{
						name: "Awards",
						link: "div#reviews:not(.container) + section.pl-bg--white",
					},
					{
						name: "Ratings",
						link: "div#reviews.container",
					},
					{
						name: "Support",
						link: "https://www.canon.co.uk/support/",
					}
				],
				element : '.sticky-wrapper + .content-block',
			},
			"/cameras/powershot-px/":{
				links: [
					{
						name: "Overview",
						link: "#",
					},
					{
						name: "Specifications",
						link: "https://www.canon.co.uk/cameras/powershot-px/specifications/",
					},
					{
						name: "Gallery",
						link: "div#gallery",
					},
					{
						name: "What's in the box",
						link: ".whats-in-the-box",
					},
					{
						name: "Support",
						link: "#",
					}
				],
				element : '.sticky-wrapper + .content-block',
			},
			"/cameras/powershot-sx430-is/":{
				links: [
					{
						name: "Overview",
						link: "#",
					},
					{
						name: "Specifications",
						link: "https://www.canon.co.uk/cameras/powershot-sx430-is/specifications/",
					},
					{
						name: "What's in the box",
						link: "body > section.pl-spacer.pl-spacer--in--large.pl-spacer--cut-h.pl-bg.pl-bg--gray-lightest",
					},
					{
						name: "Support",
						link: "https://www.canon.co.uk/support/consumer_products/products/cameras/digital_compact/powershot_sx_series/powershot_sx430_is.html",
					},
					
				],
				element : '.sticky-wrapper + .content-block',
			},
			"/cameras/powershot-sx740-hs/":{
				links: [
					{
						name: "Overview",
						link: "#",
					},
					{
						name: "Specifications",
						link: "https://www.canon.co.uk/cameras/powershot-sx740-hs/specifications/",
					},
					{
						name: "What's in the box",
						link: "body > section.pl-spacer.pl-spacer--in--large.pl-spacer--cut-h.pl-bg.pl-bg--gray-lighter",
					},
					{
						name: "Accessories",
						link: "body > section.pl-spacer--cut-bottom.pl-spacer--cut-h.pl-spacer--in--medium.pl-bg.pl-bg--white",
					},
					{
						name: "Reviews",
						link: "div#reviews",
					},
					{
						name: "Support",
						link: "https://www.canon.co.uk/support/",
					}
					
				],
				element : '.sticky-wrapper + .content-block',
			},
			"/cameras/eos-77d/":{
				links: [
					{
						name: "Overview",
						link: "#",
					},
					{
						name: "Specifications",
						link: "https://www.canon.co.uk/cameras/eos-77d/specifications/",
					},
					{
						name: "What's in the box",
						link: "body > section:nth-child(24)",
					},
					{
						name: "Lenses & Accessories",
						link: "body > section.pl-spacer--cut-h.pl-spacer--in--small.pl-bg.pl-bg--white",
					},
					{
						name: "Reviews",
						link: "#",
					},
					{
						name: "Awards",
						link: "body > section:nth-child(37)",
					},
					{
						name: "Support",
						link: "https://www.canon.co.uk/support/consumer_products/products/cameras/digital_slr/eos-77d.html",
					}
				],
				element : '.sticky-wrapper + .content-block',
			},
			"/cameras/eos-m100/":{
				links: [
					{
						name: "Overview",
						link: "#",
					},
					{
						name: "Specifications",
						link: "https://www.canon.co.uk/cameras/eos-m100/specifications/",
					},
					{
						name: "What's in the box",
						link: "#remove-tint > section.pl-spacer.pl-spacer--in--large.pl-spacer--cut-h.pl-bg.pl-bg--gray-lightest",
					},
					{
						name: "Lenses & Accessories",
						link: "#remove-tint > section.pl-spacer--cut-h.pl-spacer--in--small.pl-bg.pl-bg--white",
					},
					{
						name: "Gallery",
						link: "div#remove-spacing-bottom > section",
					},
					{
						name: "Awards",
						link: "div#remove-spacing-bottom + div + section",
					},
					{
						name: "Reviews",
						link: "div#reviews",
					},
					{
						name: "Support",
						link: "https://www.canon.co.uk/support/",
					},
					{
						name: "Related products",
						link: "div#related-products",
					}
				],
				element : '.sticky-wrapper + .content-block',
			},
			"/cameras/ixus-185/":{
				links: [
					{
						name: "Overview",
						link: "#",
					},
					{
						name: "Specifications",
						link: "body > section.pl-spacer.pl-spacer--in--large.pl-spacer--cut-h.pl-bg.pl-bg--white.overflow-hidden",
					},
					{
						name: "What's in the box",
						link: "body > section:nth-child(18)",
					},
					{
						name: "Support",
						link: "https://www.canon.co.uk/support/consumer_products/products/cameras/digital_compact/digital_ixus_series/ixus_185.html",
					}
				],
				element : '.sticky-wrapper + .content-block',
			}
			
			
			};
		
	window[tag] = {
		log: function (msg) {
			if (debug) console.log("[CONV]", tag, "-->", msg);
		},

		waitForElement: function (cssSelector, callback) {
			var elementCached,
				maxCalls = 500,
				interval = setInterval(function () {
					elementCached = document.querySelector(cssSelector);

					if (elementCached) {
						clearInterval(interval);

						try {
							callback(elementCached);
						} catch (err) {
							window[tag].log(err.message);
						}
					}

					if (--maxCalls < 0) {
						clearInterval(interval);
						window[tag].log(cssSelector + " not found");
					}
				}, 10);
		},

		init: function () {
			try {
				this.waitForElement("body", function (docBody) {
					docBody.classList.add(tag);

					initVariation(docBody);
				});

				if (debug && document.title.indexOf("CONV QA") < 0) {
					document.title = "[CONV QA] " + document.title;
				}

				window[tag].log("test running");
			} catch (err) {
				window[tag].log(err.message);
			}
		},
	};

	window[tag].init();

	function initVariation(bodyElem) {
		var waitEle = data[window.location.pathname].element;
		window[tag].waitForElement(waitEle, function (insertEle) {
			insertStickyBar(insertEle);
		});

	}
    //insert new progress element
    function insertStickyBar(ele){
		var stickyEle='';
		
		data[window.location.pathname].links.forEach(function (linkData) {
			var link = document.createElement("a");
		
			link.href = linkData.link;
			link.textContent = linkData.name
		stickyEle+='<a href="'+linkData.link+'">'+linkData.name+'<span></span></a>'
			// Insert into sticky bar
		});
   ele.insertAdjacentHTML('afterend','<div class="'+tag+'"><div class="container"><div class="eg-nav-inr">'+stickyEle+'</div></div></div>');
	}

})();
