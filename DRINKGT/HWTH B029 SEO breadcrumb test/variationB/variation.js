(function () {
	function wait(predicate, success, error) {
    var int = setInterval(() => {
        if (predicate()) {
            clearInterval(int);
            int = null;
            success();
        }
    }, 33);
    setTimeout(() => {
        if (int !== null) {
            clearInterval(int);
            if (typeof (error) === 'function') {
                error();
            }
        }
    }, 20000);
}
wait(() => document.querySelector('.product-template.product-template-default .container') !==null || document.querySelectorAll('div#introproduct').length>0 ,() => {
const breadcrum = document.createElement('div');
breadcrum.classList.add('breadcrum_custom');
breadcrum.innerHTML = '<img src="https://expogrowth.in/wp-content/uploads/2022/03/home.png" alt="home">';
if (document.querySelector('.product-template.product-template-default .container') !==null) {
	document.querySelector('.product-template.product-template-default .container').prepend(breadcrum);
} else {
	breadcrum.classList.add('for_build')
	document.querySelector('div#introproduct').prepend(breadcrum);
}
if (window.meta.product.variants.length === 1) {
	if (window.meta.product.type !== null) {
		const breadcrum1 = document.createElement('p');
		breadcrum1.classList.add('breadcrum_1');
		breadcrum1.innerHTML = ` ${window.meta.product.type}`;
		document.querySelector('.breadcrum_custom').append(breadcrum1);
	}
	
	if (window.meta.product.type !== window.item.Name) {
		const breadcrum2 = document.createElement('p');
		breadcrum2.classList.add('breadcrum_2');
		breadcrum2.innerHTML = ` ${window.item.Name}`;
		document.querySelector('.breadcrum_custom').append(breadcrum2);
	}
} else {
	if (window.meta.product.type === 'Custom Bundle') {
		if (window.meta.product.type !== null) {
		const breadcrum1 = document.createElement('p');
		breadcrum1.classList.add('breadcrum_1');
		breadcrum1.innerHTML = ` ${window.meta.product.type}`;
		document.querySelector('.breadcrum_custom').append(breadcrum1);
	}
	
	if (window.meta.product.type !== window.item.Name) {
		const breadcrum2 = document.createElement('p');
		breadcrum2.classList.add('breadcrum_2');
		breadcrum2.innerHTML = ` ${window.item.Name}`;
		document.querySelector('.breadcrum_custom').append(breadcrum2);
	}
	} else {
	const breadcrum1 = document.createElement('p');
	breadcrum1.classList.add('breadcrum_1');
	breadcrum1.innerHTML = ` Meet the Flavours`;

	document.querySelector('.breadcrum_custom').append(breadcrum1);
	const breadcrum2 = document.createElement('p');
	breadcrum2.classList.add('breadcrum_2');
	breadcrum2.innerHTML = ` ${window.item.Name}`;
	document.querySelector('.breadcrum_custom').append(breadcrum2);
	}
}

});
}())
