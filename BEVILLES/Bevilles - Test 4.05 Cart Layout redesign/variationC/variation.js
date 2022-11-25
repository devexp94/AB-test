(function() {
    try {
        /* main variables */
        var debug = 0;
        var variation_name = "";
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

        function live(selector, event, callback, context) {
            /****Helper Functions****/
            // helper for enabling IE 8 event bindings
            function addEvent(el, type, handler) {
                if (el.attachEvent) el.attachEvent("on" + type, handler);
                else el.addEventListener(type, handler);
            }
            // matches polyfill
            this.Element &&
                (function(ElementPrototype) {
                    ElementPrototype.matches =
                        ElementPrototype.matches ||
                        ElementPrototype.matchesSelector ||
                        ElementPrototype.webkitMatchesSelector ||
                        ElementPrototype.msMatchesSelector ||
                        function(selector) {
                            var node = this,
                                nodes = (node.parentNode || node.document).querySelectorAll(selector),
                                i = -1;
                            while (nodes[++i] && nodes[i] != node);
                            return !!nodes[i];
                        };
                })(Element.prototype);
            // live binding helper using matchesSelector
            function live(selector, event, callback, context) {
                addEvent(context || document, event, function(e) {
                    var found,
                        el = e.target || e.srcElement;
                    while (el && el.matches && el !== context && !(found = el.matches(selector))) el = el.parentElement;
                    if (found) callback.call(el, e);
                });
            }
            live(selector, event, callback, context);
        }

        const egTruckSvg = `
<svg width="28" height="18" viewBox="0 0 28 18" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M16.1874 2.15869V3.38915V6.34502V9.90522V12.9922C16.1874 13.4899 16.1737 13.9903 16.1874 14.4879V14.5098L17.0077 13.6895H14.2515H9.84364H8.83739L9.6577 14.5098C9.65223 13.911 9.47997 13.2903 9.12997 12.8008C8.73895 12.2594 8.23857 11.8711 7.60966 11.6387C6.48038 11.2231 5.09946 11.6004 4.3311 12.5219C3.85806 13.0879 3.59281 13.7688 3.58735 14.5098L4.40765 13.6895H3.4014C3.05962 13.6895 2.70413 13.7196 2.36235 13.6813C2.43618 13.6922 2.50727 13.7004 2.5811 13.7114C2.50727 13.7004 2.43618 13.6813 2.36782 13.6567C2.43344 13.684 2.49907 13.7114 2.56469 13.7387C2.51547 13.7168 2.46899 13.6895 2.41977 13.6649C2.39243 13.6512 2.31586 13.5883 2.43071 13.6758C2.55102 13.7688 2.45532 13.6922 2.43344 13.6704C2.42797 13.6649 2.38422 13.6211 2.38422 13.6184C2.38969 13.6102 2.50453 13.7989 2.44711 13.6977C2.41703 13.643 2.38696 13.5938 2.36235 13.5391L2.44438 13.736C2.41703 13.6649 2.40063 13.5965 2.38969 13.5227C2.40063 13.5965 2.40883 13.6676 2.41977 13.7415C2.4061 13.6102 2.41157 13.4762 2.41157 13.345V12.5219V9.763V6.42423V3.5449C2.41157 3.08827 2.4061 2.63161 2.41157 2.17771C2.41157 2.13396 2.4143 2.09294 2.41977 2.04919C2.40883 2.12302 2.40063 2.19411 2.38969 2.26794C2.40063 2.19411 2.41977 2.12302 2.44438 2.05466L2.36235 2.25154C2.38422 2.20232 2.41157 2.15583 2.43618 2.10661C2.44985 2.07927 2.51274 2.00271 2.42524 2.11755C2.33227 2.23786 2.40883 2.14216 2.43071 2.12029C2.43618 2.11482 2.47993 2.07107 2.48266 2.07107C2.49086 2.07654 2.30219 2.19138 2.40337 2.13396C2.45805 2.10388 2.50727 2.0738 2.56196 2.04919L2.36509 2.13122C2.43618 2.10388 2.50454 2.08747 2.57837 2.07653C2.50454 2.08747 2.43344 2.09567 2.35962 2.10661C2.51001 2.09021 2.66587 2.09841 2.819 2.09841H3.80339H7.08196H11.0468H14.4756C15.0197 2.09841 15.5639 2.09021 16.108 2.09841C16.1518 2.09841 16.1955 2.10114 16.2393 2.10661C16.1654 2.09568 16.0943 2.08747 16.0205 2.07653C16.0943 2.08747 16.1654 2.10661 16.2338 2.13122L16.0369 2.04919C16.0861 2.07107 16.1326 2.09841 16.1818 2.12302C16.2092 2.13669 16.2857 2.19958 16.1709 2.11208C16.0506 2.01911 16.1463 2.09568 16.1682 2.11755C16.1736 2.12302 16.2174 2.16677 16.2174 2.16951C16.2119 2.17771 16.0971 1.98904 16.1545 2.09021C16.1846 2.1449 16.2147 2.19412 16.2393 2.2488C16.2119 2.18318 16.1846 2.11755 16.1572 2.05193C16.1846 2.12302 16.201 2.19138 16.2119 2.26521C16.201 2.19138 16.1928 2.12029 16.1818 2.04646C16.1846 2.08201 16.1873 2.12029 16.1873 2.15857C16.1955 2.58786 16.5592 2.99803 17.0076 2.97888C17.4451 2.95974 17.8389 2.61793 17.8279 2.15857C17.8115 1.37653 17.2537 0.616376 16.4525 0.487856C16.3103 0.465981 16.1764 0.45231 16.0342 0.45231H15.2686H12.0283H7.78999H4.09306C3.55439 0.45231 3.01298 0.441372 2.47431 0.45231C1.71962 0.465982 1.05518 0.955423 0.836426 1.68004C0.781737 1.86051 0.768066 2.04917 0.768066 2.23785V3.08277V6.61567V10.7937V13.4488V13.6184C0.779004 14.2528 1.1372 14.8926 1.7333 15.1551C1.98758 15.2672 2.23095 15.3273 2.50985 15.3301H2.80789H3.83876H4.40478C4.85049 15.3301 5.22235 14.9555 5.22508 14.5098C5.22508 14.4086 5.23329 14.3074 5.24696 14.2063C5.23602 14.2801 5.22782 14.3512 5.21688 14.425C5.24422 14.2281 5.29891 14.0395 5.37274 13.859C5.34539 13.9246 5.31805 13.9902 5.29071 14.0559C5.34266 13.9355 5.40555 13.818 5.47938 13.7059C5.49852 13.6758 5.52039 13.6457 5.54227 13.6184C5.6243 13.5008 5.40555 13.777 5.50125 13.6703C5.545 13.6211 5.58875 13.5719 5.63524 13.5254C5.68172 13.4789 5.73094 13.4352 5.78016 13.3914C5.88133 13.3039 5.61063 13.5117 5.72821 13.4324C5.75281 13.416 5.77742 13.3969 5.80203 13.3805C5.91688 13.3039 6.03992 13.2383 6.16571 13.1809C6.10008 13.2082 6.03446 13.2355 5.96883 13.2629C6.15204 13.1863 6.34072 13.1344 6.53485 13.107C6.46102 13.118 6.38993 13.1262 6.3161 13.1371C6.51845 13.1098 6.7208 13.1098 6.92314 13.1371C6.84931 13.1262 6.77822 13.118 6.70439 13.107C6.90127 13.1344 7.08993 13.1891 7.27041 13.2629C7.20479 13.2355 7.13916 13.2082 7.07354 13.1809C7.19385 13.2328 7.31142 13.2957 7.42354 13.3695C7.45362 13.3887 7.48369 13.4105 7.51104 13.4324C7.62862 13.5145 7.35244 13.2957 7.45908 13.3914C7.5083 13.4352 7.55752 13.4789 7.604 13.5254C7.65049 13.5719 7.69424 13.6211 7.73799 13.6703C7.82549 13.7715 7.61768 13.5008 7.69697 13.6184C7.71338 13.643 7.73252 13.6676 7.74893 13.6922C7.82549 13.807 7.89112 13.9301 7.94854 14.0559C7.92119 13.9902 7.89385 13.9246 7.86651 13.859C7.94307 14.0422 7.99502 14.2309 8.02237 14.425C8.01143 14.3512 8.00323 14.2801 7.99229 14.2063C8.00596 14.3074 8.01143 14.4086 8.01416 14.5098C8.0169 14.9527 8.38605 15.3301 8.83447 15.3301H11.5906H15.9985H17.0048C17.4477 15.3301 17.8251 14.9555 17.8251 14.5098V13.2793V10.3234V6.76325V3.67624C17.8251 3.17859 17.836 2.67821 17.8251 2.18053V2.15866C17.8251 1.72937 17.4477 1.31919 17.0048 1.33835C16.5618 1.35749 16.1872 1.69929 16.1872 2.15866L16.1874 2.15869Z" fill="white"/>
<path d="M25.592 10.0363V13.2245C25.592 13.3941 25.603 13.5691 25.5838 13.7413C25.5948 13.6675 25.603 13.5964 25.6139 13.5226C25.603 13.5964 25.5838 13.6675 25.5592 13.7359C25.5866 13.6702 25.6139 13.6046 25.6412 13.539C25.6194 13.5882 25.592 13.6347 25.5674 13.6839C25.5537 13.7113 25.4909 13.7878 25.5784 13.673C25.6713 13.5527 25.5948 13.6484 25.5729 13.6702C25.5674 13.6757 25.5237 13.7195 25.5209 13.7195C25.5127 13.714 25.7014 13.5991 25.6002 13.6566C25.5455 13.6866 25.4963 13.7167 25.4416 13.7413L25.6385 13.6593C25.5674 13.6866 25.499 13.703 25.4252 13.714C25.4991 13.703 25.5701 13.6948 25.644 13.6839C25.3623 13.714 25.0698 13.6921 24.7854 13.6921H23.9596L24.7799 14.5124C24.7744 13.9136 24.6022 13.2929 24.2494 12.8034C23.8584 12.262 23.358 11.8737 22.7291 11.6413C21.5998 11.2257 20.2189 11.603 19.4506 12.5245C18.9775 13.0906 18.7123 13.7714 18.7068 14.5124L19.5271 13.6921H17.3314H17.0115L17.8318 14.5124V13.5472V11.2312V8.42837V6.00567C17.8318 5.61192 17.8427 5.21817 17.8318 4.82442V4.80801L17.0115 5.62832H18.6849H21.3018C21.5342 5.62832 21.7775 5.61191 22.0072 5.63925C21.9334 5.62832 21.8623 5.62011 21.7885 5.60918C21.8869 5.62558 21.9771 5.65019 22.0701 5.68574L21.8732 5.60371C21.9252 5.62558 21.9744 5.65019 22.0236 5.67754C22.0537 5.69394 22.1986 5.79785 22.0783 5.70761C21.9635 5.62011 22.0947 5.72676 22.1221 5.75683C22.1412 5.77871 22.1603 5.79785 22.1795 5.81972C22.1904 5.8334 22.2014 5.84707 22.2123 5.858C22.2834 5.94004 22.3517 6.0248 22.4228 6.10956C22.6935 6.43222 22.9615 6.75487 23.2322 7.07479C23.8775 7.84316 24.5201 8.61426 25.1654 9.3826C25.2666 9.50291 25.3678 9.62597 25.469 9.74627C25.4908 9.77362 25.5154 9.80369 25.54 9.8283C25.5428 9.83104 25.5482 9.83924 25.5537 9.84197C25.5346 9.83104 25.4471 9.68885 25.5045 9.78182C25.5428 9.84471 25.5783 9.9076 25.6084 9.97596C25.5811 9.91033 25.5537 9.84471 25.5264 9.77908C25.5647 9.87479 25.592 9.97049 25.6084 10.0744C25.5975 10.0006 25.5893 9.92947 25.5783 9.85564C25.5865 9.91853 25.592 9.97595 25.592 10.0361C25.6002 10.4654 25.9639 10.8756 26.4123 10.8564C26.8498 10.8373 27.2408 10.4955 27.2326 10.0361C27.2217 9.51384 27.033 9.07361 26.7049 8.67713C26.6557 8.61971 26.6092 8.56229 26.56 8.50486C26.3221 8.22048 26.0814 7.93338 25.8436 7.649C25.1982 6.8779 24.5502 6.10407 23.9049 5.33298C23.7271 5.1197 23.5494 4.90642 23.3717 4.69586C22.9834 4.23374 22.3982 3.9904 21.7994 3.9904C21.0092 3.98767 20.2162 3.9904 19.4259 3.9904C18.6357 3.9904 17.8427 3.9822 17.0525 3.9904H17.0115C16.5685 3.9904 16.1911 4.36502 16.1911 4.81071V5.77594V8.09196V10.8948V13.3175C16.1911 13.7112 16.1829 14.105 16.1911 14.4987V14.5151C16.1911 14.9581 16.5658 15.3354 17.0115 15.3354H19.2072H19.5271C19.9728 15.3354 20.3447 14.9608 20.3474 14.5151C20.3474 14.4139 20.3556 14.3128 20.3693 14.2116C20.3583 14.2854 20.3501 14.3565 20.3392 14.4303C20.3665 14.2335 20.4212 14.0448 20.4951 13.8643C20.4677 13.9299 20.4404 13.9956 20.413 14.0612C20.465 13.9409 20.5279 13.8233 20.6017 13.7112C20.6208 13.6811 20.6427 13.651 20.6646 13.6237C20.7466 13.5061 20.5279 13.7823 20.6236 13.6757C20.6673 13.6264 20.7111 13.5772 20.7576 13.5307C20.804 13.4842 20.8533 13.4405 20.9025 13.3967C21.0036 13.3092 20.7329 13.5171 20.8505 13.4378C20.8751 13.4214 20.8997 13.4022 20.9243 13.3858C21.0392 13.3092 21.1622 13.2436 21.288 13.1862C21.2224 13.2135 21.1568 13.2409 21.0911 13.2682C21.2743 13.1917 21.463 13.1397 21.6572 13.1124C21.5833 13.1233 21.5122 13.1315 21.4384 13.1424C21.6408 13.1151 21.8431 13.1151 22.0455 13.1424C21.9716 13.1315 21.9005 13.1233 21.8267 13.1124C22.0236 13.1397 22.2122 13.1944 22.3927 13.2682C22.3271 13.2409 22.2615 13.2135 22.1959 13.1862C22.3162 13.2382 22.4337 13.301 22.5459 13.3749C22.5759 13.394 22.606 13.4159 22.6334 13.4378C22.7509 13.5198 22.4748 13.301 22.5814 13.3967C22.6306 13.4405 22.6798 13.4842 22.7263 13.5307C22.7728 13.5772 22.8166 13.6264 22.8603 13.6757C22.9478 13.7768 22.74 13.5061 22.8193 13.6237C22.8357 13.6483 22.8548 13.6729 22.8712 13.6975C22.9478 13.8124 23.0134 13.9354 23.0709 14.0612C23.0435 13.9956 23.0162 13.9299 22.9888 13.8643C23.0654 14.0475 23.1173 14.2362 23.1447 14.4303C23.1337 14.3565 23.1255 14.2854 23.1146 14.2116C23.1283 14.3128 23.1337 14.4139 23.1365 14.5151C23.1392 14.9581 23.5084 15.3354 23.9568 15.3354H25.2556C25.5181 15.3354 25.7861 15.3436 26.0376 15.2561C26.7185 15.0237 27.1505 14.4522 27.2244 13.744C27.2572 13.4378 27.2326 13.1178 27.2326 12.8116V11.13V10.0417C27.2326 9.61237 26.8552 9.2022 26.4123 9.22135C25.9693 9.23503 25.5919 9.57681 25.5919 10.0362L25.592 10.0363Z" fill="white"/>
<path d="M8.01459 14.5097C8.01459 14.6109 8.00639 14.7121 7.99272 14.8132C8.00365 14.7394 8.01186 14.6683 8.0228 14.5945C7.99545 14.7914 7.94076 14.98 7.86694 15.1605C7.89428 15.0949 7.92163 15.0293 7.94897 14.9636C7.89701 15.0839 7.83412 15.2015 7.7603 15.3136C7.74116 15.3437 7.71928 15.3738 7.69741 15.4011C7.61537 15.5187 7.83413 15.2425 7.73842 15.3492C7.69467 15.3984 7.65092 15.4476 7.60444 15.4941C7.55795 15.5406 7.50873 15.5843 7.45952 15.6281C7.35834 15.7156 7.62905 15.5078 7.51147 15.5871C7.48686 15.6035 7.46225 15.6226 7.43764 15.639C7.3228 15.7156 7.19976 15.7812 7.07397 15.8386C7.13959 15.8113 7.20522 15.7839 7.27084 15.7566C7.08764 15.8332 6.89895 15.8851 6.70482 15.9125C6.77865 15.9015 6.84974 15.8933 6.92357 15.8824C6.72123 15.9097 6.51888 15.9097 6.31653 15.8824C6.39036 15.8933 6.46145 15.9015 6.53528 15.9125C6.33841 15.8851 6.14974 15.8304 5.96926 15.7566C6.03489 15.7839 6.10051 15.8113 6.16614 15.8386C6.04583 15.7867 5.92825 15.7238 5.81614 15.65C5.78606 15.6308 5.75598 15.6089 5.72864 15.5871C5.61106 15.505 5.88723 15.7238 5.78059 15.6281C5.73137 15.5843 5.68215 15.5406 5.63567 15.4941C5.58918 15.4476 5.54543 15.3984 5.50168 15.3492C5.41418 15.248 5.622 15.5187 5.5427 15.4011C5.52629 15.3765 5.50715 15.3519 5.49075 15.3273C5.41419 15.2125 5.34856 15.0894 5.29114 14.9636C5.31848 15.0293 5.34583 15.0949 5.37317 15.1605C5.29661 14.9773 5.24465 14.7886 5.21731 14.5945C5.22825 14.6683 5.23645 14.7394 5.24739 14.8132C5.22004 14.6109 5.22004 14.4085 5.24739 14.2062C5.23645 14.28 5.22825 14.3511 5.21731 14.4249C5.24465 14.2281 5.29934 14.0394 5.37317 13.8589C5.34582 13.9246 5.31848 13.9902 5.29114 14.0558C5.34309 13.9355 5.40598 13.8179 5.47981 13.7058C5.49895 13.6757 5.52082 13.6456 5.5427 13.6183C5.62473 13.5007 5.40598 13.7769 5.50168 13.6703C5.54543 13.621 5.58918 13.5718 5.63567 13.5253C5.68215 13.4788 5.73137 13.4351 5.78059 13.3913C5.88176 13.3038 5.61106 13.5117 5.72863 13.4324C5.75324 13.416 5.77785 13.3968 5.80246 13.3804C5.91731 13.3038 6.04035 13.2382 6.16614 13.1808C6.10051 13.2081 6.03489 13.2355 5.96926 13.2628C6.15247 13.1863 6.34115 13.1343 6.53528 13.107C6.46145 13.1179 6.39036 13.1261 6.31653 13.1371C6.51888 13.1097 6.72122 13.1097 6.92357 13.1371C6.84974 13.1261 6.77865 13.1179 6.70482 13.107C6.9017 13.1343 7.09036 13.189 7.27084 13.2628C7.20522 13.2355 7.13959 13.2081 7.07397 13.1808C7.19428 13.2328 7.31185 13.2956 7.42397 13.3695C7.45405 13.3886 7.48412 13.4105 7.51147 13.4324C7.62905 13.5144 7.35287 13.2956 7.45951 13.3913C7.50873 13.4351 7.55795 13.4788 7.60443 13.5253C7.65092 13.5718 7.69467 13.621 7.73842 13.6703C7.82592 13.7714 7.61811 13.5007 7.6974 13.6183C7.71381 13.6429 7.73295 13.6675 7.74936 13.6921C7.82592 13.807 7.89155 13.93 7.94897 14.0558C7.92162 13.9902 7.89428 13.9246 7.86694 13.8589C7.9435 14.0421 7.99545 14.2308 8.0228 14.4249C8.01186 14.3511 8.00366 14.28 7.99272 14.2062C8.00912 14.3074 8.01459 14.4085 8.01459 14.5097C8.01733 14.939 8.38921 15.3492 8.8349 15.33C9.27513 15.3109 9.65794 14.9691 9.6552 14.5097C9.64974 13.9054 9.47474 13.2765 9.11653 12.7871C8.72551 12.2511 8.23059 11.871 7.60715 11.6386C6.47511 11.2175 5.08061 11.6031 4.31761 12.5355C3.89105 13.055 3.65042 13.6484 3.593 14.3183C3.54104 14.9171 3.7051 15.557 4.01409 16.0683C4.31488 16.566 4.76879 17.0007 5.30198 17.2413C5.92815 17.523 6.57619 17.605 7.25432 17.4765C8.64886 17.214 9.64692 15.8988 9.65789 14.5069C9.66062 14.0776 9.27781 13.6674 8.83758 13.6866C8.38914 13.7112 8.02001 14.0502 8.01454 14.5096L8.01459 14.5097Z" fill="white"/>
<path d="M23.1354 14.5097C23.1354 14.6109 23.1272 14.7121 23.1136 14.8133C23.1245 14.7394 23.1327 14.6683 23.1436 14.5945C23.1163 14.7914 23.0616 14.98 22.9878 15.1605C23.0151 15.0949 23.0425 15.0293 23.0698 14.9636C23.0179 15.084 22.955 15.2015 22.8811 15.3136C22.862 15.3437 22.8401 15.3738 22.8183 15.4011C22.7362 15.5187 22.955 15.2426 22.8593 15.3492C22.8155 15.3984 22.7718 15.4476 22.7253 15.4941C22.6788 15.5406 22.6296 15.5843 22.5804 15.6281C22.4792 15.7156 22.7499 15.5078 22.6323 15.5871C22.6077 15.6035 22.5831 15.6226 22.5585 15.639C22.4436 15.7156 22.3206 15.7812 22.1948 15.8386C22.2604 15.8113 22.3261 15.784 22.3917 15.7566C22.2085 15.8332 22.0198 15.8851 21.8257 15.9125C21.8995 15.9015 21.9706 15.8933 22.0444 15.8824C21.8421 15.9097 21.6397 15.9097 21.4374 15.8824C21.5112 15.8933 21.5823 15.9015 21.6561 15.9125C21.4593 15.8851 21.2706 15.8304 21.0901 15.7566C21.1557 15.784 21.2214 15.8113 21.287 15.8386C21.1667 15.7867 21.0491 15.7238 20.937 15.65C20.9069 15.6308 20.8768 15.609 20.8495 15.5871C20.7319 15.5051 21.0081 15.7238 20.9014 15.6281C20.8522 15.5844 20.803 15.5406 20.7565 15.4941C20.71 15.4476 20.6663 15.3984 20.6225 15.3492C20.535 15.248 20.7428 15.5187 20.6635 15.4011C20.6471 15.3765 20.628 15.3519 20.6116 15.3273C20.535 15.2125 20.4694 15.0894 20.412 14.9636C20.4393 15.0293 20.4667 15.0949 20.494 15.1605C20.4175 14.9773 20.3655 14.7886 20.3382 14.5945C20.3491 14.6683 20.3573 14.7394 20.3682 14.8133C20.3409 14.6109 20.3409 14.4086 20.3682 14.2062C20.3573 14.28 20.3491 14.3511 20.3382 14.425C20.3655 14.2281 20.4202 14.0394 20.494 13.8589C20.4667 13.9246 20.4393 13.9902 20.412 14.0558C20.4639 13.9355 20.5268 13.8179 20.6007 13.7058C20.6198 13.6757 20.6417 13.6457 20.6635 13.6183C20.7456 13.5007 20.5268 13.7769 20.6225 13.6703C20.6663 13.6211 20.71 13.5718 20.7565 13.5253C20.803 13.4789 20.8522 13.4351 20.9014 13.3914C21.0026 13.3039 20.7319 13.5117 20.8495 13.4324C20.8741 13.416 20.8987 13.3968 20.9233 13.3804C21.0382 13.3039 21.1612 13.2382 21.287 13.1808C21.2214 13.2082 21.1557 13.2355 21.0901 13.2628C21.2733 13.1863 21.462 13.1343 21.6561 13.107C21.5823 13.1179 21.5112 13.1261 21.4374 13.1371C21.6397 13.1097 21.8421 13.1097 22.0444 13.1371C21.9706 13.1261 21.8995 13.1179 21.8257 13.107C22.0225 13.1343 22.2112 13.189 22.3917 13.2628C22.3261 13.2355 22.2604 13.2082 22.1948 13.1808C22.3151 13.2328 22.4327 13.2957 22.5448 13.3695C22.5749 13.3886 22.605 13.4105 22.6323 13.4324C22.7499 13.5144 22.4737 13.2957 22.5804 13.3914C22.6296 13.4351 22.6788 13.4789 22.7253 13.5253C22.7718 13.5718 22.8155 13.6211 22.8593 13.6703C22.9468 13.7714 22.739 13.5007 22.8183 13.6183C22.8347 13.6429 22.8538 13.6675 22.8702 13.6921C22.9468 13.807 23.0124 13.93 23.0698 14.0558C23.0425 13.9902 23.0151 13.9246 22.9878 13.8589C23.0643 14.0421 23.1163 14.2308 23.1436 14.425C23.1327 14.3511 23.1245 14.28 23.1136 14.2062C23.1272 14.3074 23.1354 14.4086 23.1354 14.5097C23.1382 14.939 23.5101 15.3492 23.9557 15.33C24.396 15.3109 24.7788 14.9691 24.7761 14.5097C24.7706 13.9054 24.5956 13.2765 24.2374 12.7871C23.8436 12.2539 23.3514 11.8711 22.728 11.6414C21.596 11.2203 20.2015 11.6058 19.4385 12.5383C19.0119 13.0578 18.7713 13.6511 18.7138 14.3211C18.6619 14.9199 18.826 15.5597 19.1349 16.0711C19.4357 16.5687 19.8896 17.0035 20.4228 17.2441C21.049 17.5257 21.697 17.6078 22.3752 17.4792C23.7697 17.2167 24.7678 15.9015 24.7787 14.5096C24.7815 14.0803 24.3987 13.6702 23.9584 13.6893C23.51 13.7112 23.1409 14.0503 23.1354 14.5096L23.1354 14.5097Z" fill="white"/>
</svg>

`;

        const egCollectSvg = `
<svg width="19" height="20" viewBox="0 0 19 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M17.3216 2.16919V2.53586V3.53385V5.00814V6.80572V8.7733V10.758V12.6046V14.1583V15.2678V15.7781C17.3216 15.8178 17.3196 15.8594 17.3157 15.8991C17.3255 15.8329 17.3352 15.7649 17.3431 15.6987C17.3313 15.7743 17.3118 15.8462 17.2806 15.918C17.3059 15.8575 17.3333 15.797 17.3587 15.7365C17.3313 15.797 17.2962 15.8537 17.2552 15.9066C17.2962 15.8556 17.3372 15.8046 17.3782 15.7535C17.3313 15.8121 17.2767 15.8632 17.2161 15.9104C17.2688 15.8707 17.3216 15.831 17.3743 15.7913C17.3196 15.831 17.261 15.8632 17.1985 15.8915C17.261 15.8669 17.3235 15.8405 17.386 15.8159C17.3118 15.8462 17.2376 15.8651 17.1595 15.8764C17.2278 15.8669 17.2981 15.8575 17.3665 15.8499C17.1614 15.8726 16.9485 15.8556 16.7434 15.8556H15.4173H12.3998H11.6986C11.8822 16.2866 12.0677 16.7156 12.2513 17.1466C12.517 16.8233 12.7709 16.4926 12.9955 16.141C13.2279 15.7762 13.4173 15.3944 13.5853 14.9994C13.7338 14.6497 13.849 14.2887 13.9174 13.9164C13.9935 13.5024 14.0404 13.079 14.0092 12.6594C13.9564 11.9431 13.7435 11.2418 13.349 10.6313C12.9701 10.0416 12.4486 9.54075 11.8353 9.17974C11.2006 8.80549 10.4721 8.60136 9.73184 8.55788C8.97989 8.51252 8.24161 8.67696 7.56184 8.97559C6.30207 9.5294 5.33134 10.7333 5.07351 12.047C4.75711 13.6632 5.35476 15.2887 6.31961 16.6003C6.45632 16.7874 6.60086 16.9669 6.74734 17.1465C6.93094 16.7156 7.11647 16.2865 7.30007 15.8556H5.38407H2.38607C2.13802 15.8556 1.87826 15.8764 1.63021 15.8499C1.69857 15.8593 1.76888 15.8688 1.83724 15.8764C1.75911 15.865 1.6849 15.8461 1.61067 15.8159C1.67317 15.8404 1.73567 15.8669 1.79817 15.8915C1.73567 15.865 1.67708 15.831 1.62239 15.7913C1.67512 15.831 1.72786 15.8707 1.78059 15.9104C1.72005 15.865 1.66731 15.8121 1.61848 15.7535C1.6595 15.8045 1.70051 15.8556 1.74153 15.9066C1.70051 15.8537 1.66731 15.797 1.63801 15.7365C1.6634 15.797 1.69075 15.8574 1.71614 15.9179C1.68489 15.8461 1.66536 15.7743 1.65364 15.6987C1.6634 15.7648 1.67317 15.8329 1.68098 15.899C1.6634 15.7516 1.67512 15.5985 1.67512 15.4511V14.4663V13.0034V11.204V9.22885V7.23482V5.37675V3.8193V2.70035V2.18623C1.67512 2.14654 1.67708 2.10496 1.68098 2.06527C1.67122 2.13142 1.66145 2.19947 1.65364 2.26562C1.66536 2.19002 1.68489 2.11819 1.71614 2.04636C1.69075 2.10685 1.6634 2.16733 1.63801 2.22782C1.66536 2.16733 1.70051 2.11063 1.74153 2.0577C1.70051 2.10874 1.6595 2.15977 1.61848 2.2108C1.66536 2.15221 1.72005 2.10118 1.78059 2.05392C1.72786 2.09361 1.67512 2.13331 1.62239 2.173C1.67708 2.13331 1.73567 2.10118 1.79817 2.07282C1.73567 2.09739 1.67317 2.12386 1.61067 2.14843C1.68489 2.11819 1.75911 2.09928 1.83724 2.08794C1.76888 2.0974 1.69857 2.10685 1.63021 2.11441C1.79427 2.09739 1.96419 2.10874 2.13021 2.10874H3.25521H4.92704H6.97204H9.22587H11.4915H13.6009H15.3802H16.6517H17.2396C17.2825 2.10874 17.3236 2.11063 17.3665 2.11441C17.2982 2.10496 17.2279 2.0955 17.1595 2.08794C17.2376 2.09929 17.3118 2.11819 17.3861 2.14843C17.3236 2.12386 17.2611 2.09739 17.1986 2.07282C17.2611 2.09928 17.3197 2.13331 17.3743 2.173C17.3216 2.13331 17.2689 2.09361 17.2161 2.05392C17.2767 2.09928 17.3294 2.15221 17.3783 2.2108C17.3372 2.15977 17.2962 2.10874 17.2552 2.0577C17.2962 2.11063 17.3294 2.16733 17.3587 2.22782C17.3333 2.16733 17.306 2.10685 17.2806 2.04636C17.3118 2.1163 17.3314 2.19001 17.3431 2.26562C17.3333 2.19947 17.3236 2.13142 17.3158 2.06527C17.3177 2.09929 17.3216 2.13331 17.3216 2.16922C17.3255 2.3658 17.4056 2.56426 17.5501 2.70413C17.6849 2.83454 17.9075 2.93472 18.1029 2.92527C18.5208 2.90637 18.8919 2.59261 18.8841 2.16922C18.8743 1.62676 18.599 1.15801 18.1439 0.851804C17.888 0.679804 17.5618 0.600417 17.2532 0.596643H17.0404H15.8197H13.8002H11.2807H8.55216H5.92916H3.72416H2.22806C1.89212 0.596643 1.52492 0.568291 1.20657 0.685478C0.708525 0.870704 0.296425 1.25819 0.167508 1.77608C0.134305 1.91216 0.116726 2.05393 0.116726 2.19378V2.47919V3.84575V5.98156V8.54075V11.1604V13.474V15.1372C0.116726 15.3565 0.11282 15.5776 0.116726 15.7969C0.122586 16.2278 0.304226 16.6758 0.647976 16.9593C0.962426 17.2201 1.33158 17.3656 1.74954 17.3694C1.91751 17.3713 2.08353 17.3694 2.25149 17.3694H4.63816H6.92533H7.30228C7.61478 17.3694 7.89603 17.1785 8.01713 16.9045C8.07377 16.7759 8.08939 16.6512 8.06986 16.5132C8.04447 16.3355 7.97025 16.2202 7.85501 16.0785C7.82376 16.0407 7.79251 16.001 7.76126 15.9632C7.80228 16.0142 7.84329 16.0653 7.88431 16.1163C7.47611 15.6022 7.12064 15.0465 6.85892 14.4492C6.88431 14.5097 6.91166 14.5702 6.93705 14.6306C6.75542 14.2073 6.6226 13.7668 6.55815 13.3113C6.56792 13.3775 6.57768 13.4455 6.58549 13.5117C6.53666 13.1526 6.53081 12.7878 6.57963 12.4287C6.56987 12.4948 6.5601 12.5629 6.55229 12.629C6.59721 12.3171 6.68315 12.0147 6.80816 11.7236C6.78277 11.7841 6.75542 11.8446 6.73003 11.9051C6.85699 11.614 7.023 11.3418 7.22222 11.0923C7.1812 11.1434 7.14018 11.1944 7.09917 11.2454C7.29254 11.0054 7.51714 10.788 7.76519 10.6009C7.71245 10.6406 7.65972 10.6803 7.60698 10.72C7.8648 10.5272 8.14605 10.3684 8.44683 10.2437C8.38433 10.2682 8.32183 10.2947 8.25933 10.3193C8.56012 10.1983 8.87262 10.1151 9.19488 10.0717C9.12652 10.0811 9.05621 10.0906 8.98785 10.0981C9.32965 10.0547 9.6734 10.0547 10.0152 10.0981C9.94684 10.0887 9.87653 10.0792 9.80817 10.0717C10.1304 10.1151 10.4429 10.1983 10.7437 10.3193C10.6812 10.2947 10.6187 10.2682 10.5562 10.2437C10.857 10.3665 11.1383 10.5272 11.3961 10.72C11.3433 10.6803 11.2906 10.6406 11.2379 10.6009C11.4859 10.788 11.7105 11.0054 11.9039 11.2454C11.8629 11.1944 11.8218 11.1434 11.7808 11.0923C11.9801 11.3418 12.1441 11.614 12.273 11.9051C12.2476 11.8446 12.2203 11.7841 12.1949 11.7236C12.3199 12.0147 12.4058 12.3171 12.4508 12.629C12.441 12.5629 12.4312 12.4948 12.4234 12.4287C12.4722 12.7878 12.4664 13.1526 12.4176 13.5117C12.4273 13.4455 12.4371 13.3775 12.4449 13.3113C12.3804 13.7668 12.2476 14.2073 12.066 14.6306C12.0914 14.5702 12.1187 14.5097 12.1441 14.4492C11.8824 15.0483 11.5269 15.6022 11.1187 16.1163C11.1598 16.0653 11.2008 16.0142 11.2418 15.9632C11.2105 16.0029 11.1793 16.0407 11.148 16.0785C11.0641 16.1805 10.984 16.2826 10.9469 16.413C10.9 16.5775 10.9176 16.7495 10.9859 16.9045C11.1051 17.1785 11.3863 17.3694 11.7008 17.3694H13.3238H16.1637H17.0895H17.2574C17.4234 17.3675 17.5992 17.3486 17.7555 17.2938C18.0152 17.2031 18.2711 17.0689 18.4527 16.8629C18.7242 16.5567 18.8805 16.1976 18.8863 15.7912V15.7099V15.2771V13.5306V10.9959V8.13432V5.40884V3.28239V2.21636V2.1691C18.8863 1.77407 18.527 1.39415 18.1051 1.41305C17.6793 1.43196 17.3219 1.74572 17.3219 2.1691L17.3216 2.16919Z" fill="#62727D"/>
<path d="M10.8885 1.35267V3.09912V5.86058V6.49754C11.2811 6.28017 11.6717 6.06282 12.0643 5.84545C11.4236 5.52035 10.785 5.19714 10.1443 4.87203C10.0622 4.83045 9.97827 4.78508 9.89428 4.74539C9.62865 4.61875 9.3689 4.61686 9.10326 4.74539C9.09545 4.74917 9.08764 4.75295 9.07983 4.75862C9.03686 4.7813 8.99194 4.80209 8.94897 4.82477C8.57983 5.0119 8.20873 5.19902 7.8396 5.38803C7.53882 5.54113 7.23608 5.69423 6.9353 5.84734C7.32788 6.06471 7.7185 6.28207 8.11108 6.49944V4.75298V1.99153V1.35456C7.85132 1.60595 7.5896 1.85923 7.32983 2.11061H8.80053H11.1325H11.6697C12.0779 2.11061 12.4704 1.76284 12.4509 1.35456C12.4314 0.944404 12.1072 0.598517 11.6697 0.598517H10.199H7.86695H7.32983C6.90797 0.598517 6.54858 0.944404 6.54858 1.35456V3.10102V5.86247V6.49944C6.54858 6.76594 6.69702 7.01732 6.9353 7.15153C7.1853 7.29329 7.47242 7.27817 7.72437 7.15153C8.35718 6.83021 8.98803 6.51078 9.62087 6.18947C9.71266 6.14411 9.8025 6.09685 9.8943 6.05149H9.10523C9.73805 6.37281 10.3689 6.69225 11.0017 7.01355C11.0935 7.05892 11.1834 7.10617 11.2752 7.15153C11.5252 7.27817 11.8142 7.29329 12.0642 7.15153C12.3025 7.01733 12.451 6.76595 12.451 6.49944V4.75298V1.99153V1.35456C12.451 0.959533 12.0916 0.579613 11.6697 0.598517C11.2459 0.615528 10.8885 0.929291 10.8885 1.35268L10.8885 1.35267Z" fill="#62727D"/>
<path d="M12.4569 12.9221C12.4569 13.1187 12.4432 13.3134 12.4159 13.508C12.4257 13.4419 12.4354 13.3738 12.4432 13.3077C12.3788 13.7632 12.246 14.2036 12.0643 14.627C12.0897 14.5665 12.1171 14.506 12.1425 14.4455C11.8807 15.0447 11.5253 15.5985 11.1171 16.1126C11.1581 16.0616 11.1991 16.0106 11.2401 15.9595C10.6483 16.7005 9.95106 17.3658 9.18746 17.9403C9.24019 17.9006 9.29293 17.8609 9.34566 17.8213C9.26754 17.8798 9.18746 17.9384 9.10543 17.9933H9.89449C9.81246 17.9384 9.73434 17.8798 9.65426 17.8213C9.707 17.8609 9.75973 17.9006 9.81247 17.9403C9.0488 17.3676 8.35153 16.7004 7.7598 15.9595C7.80081 16.0106 7.84183 16.0616 7.88284 16.1126C7.47464 15.5985 7.11918 15.0428 6.85746 14.4455C6.88285 14.506 6.9102 14.5665 6.93559 14.627C6.75395 14.2036 6.62114 13.7632 6.55669 13.3077C6.56645 13.3738 6.57622 13.4419 6.58403 13.508C6.5352 13.1489 6.52934 12.7841 6.57817 12.425C6.5684 12.4912 6.55864 12.5592 6.55083 12.6254C6.59575 12.3135 6.68169 12.0111 6.80669 11.72C6.7813 11.7805 6.75396 11.841 6.72857 11.9014C6.85552 11.6104 7.02154 11.3382 7.22075 11.0887C7.17974 11.1397 7.13872 11.1907 7.09771 11.2418C7.29107 11.0017 7.51567 10.7844 7.76372 10.5972C7.71099 10.6369 7.65825 10.6766 7.60552 10.7163C7.86334 10.5235 8.14459 10.3648 8.44537 10.24C8.38287 10.2646 8.32037 10.291 8.25787 10.3156C8.55865 10.1947 8.87115 10.1115 9.19342 10.068C9.12506 10.0775 9.05475 10.0869 8.98639 10.0945C9.32819 10.051 9.67194 10.051 10.0137 10.0945C9.94538 10.085 9.87506 10.0756 9.8067 10.068C10.129 10.1115 10.4415 10.1946 10.7423 10.3156C10.6798 10.291 10.6173 10.2646 10.5548 10.24C10.8555 10.3629 11.1368 10.5235 11.3946 10.7163C11.3419 10.6766 11.2891 10.6369 11.2364 10.5972C11.4844 10.7844 11.709 11.0017 11.9024 11.2418C11.8614 11.1907 11.8204 11.1397 11.7794 11.0887C11.9786 11.3382 12.1427 11.6104 12.2716 11.9014C12.2462 11.841 12.2188 11.7805 12.1934 11.72C12.3184 12.0111 12.4044 12.3135 12.4493 12.6254C12.4395 12.5592 12.4298 12.4912 12.422 12.425C12.4454 12.5894 12.4552 12.7558 12.4571 12.9221C12.4591 13.3171 12.8145 13.697 13.2384 13.6781C13.6602 13.6592 14.0216 13.3455 14.0196 12.9221C14.0177 12.1963 13.8282 11.4856 13.4786 10.8448C13.1368 10.2211 12.627 9.70132 12.0294 9.29872C11.7286 9.09648 11.4005 8.94716 11.0606 8.81863C10.7091 8.68632 10.3477 8.62205 9.97469 8.57669C9.65632 8.537 9.33211 8.53889 9.01376 8.57858C8.63681 8.62395 8.27157 8.69199 7.91611 8.82808C7.24032 9.08703 6.62119 9.46884 6.13877 9.99995C5.65831 10.5292 5.29502 11.1586 5.11924 11.8448C4.71299 13.4306 5.26963 15.0901 6.18564 16.4095C6.95127 17.5133 7.93764 18.4772 9.04897 19.2579C9.06851 19.2711 9.08608 19.2843 9.10561 19.2975C9.31655 19.4393 9.68178 19.4393 9.89468 19.2975C10.4845 18.9025 11.0314 18.43 11.5314 17.9329C12.4083 17.0615 13.1408 16.0674 13.6096 14.9371C13.8732 14.3001 14.0178 13.6064 14.0197 12.9203C14.0217 12.5253 13.6584 12.1454 13.2385 12.1643C12.8127 12.1851 12.4592 12.4988 12.4572 12.9222L12.4569 12.9221Z" fill="#62727D"/>
<path d="M8.90809 12.9221C8.90809 12.9297 8.90809 12.9353 8.90614 12.9429C8.9159 12.8768 8.92567 12.8087 8.93348 12.7426C8.92958 12.7633 8.92567 12.7785 8.91786 12.7974C8.94325 12.7369 8.97059 12.6764 8.99598 12.6159C8.99012 12.6273 8.98426 12.6386 8.97645 12.648C9.01747 12.597 9.05848 12.546 9.0995 12.4949C9.08583 12.5101 9.07411 12.5214 9.05848 12.5346C9.11122 12.4949 9.16395 12.4553 9.21669 12.4156C9.20692 12.4231 9.1952 12.4288 9.18348 12.4345C9.24598 12.4099 9.30848 12.3834 9.37098 12.3589C9.35145 12.3664 9.33387 12.3702 9.31434 12.374C9.3827 12.3645 9.45301 12.3551 9.52138 12.3475C9.5077 12.3494 9.49403 12.3494 9.48036 12.3475C9.54872 12.357 9.61903 12.3664 9.68739 12.374C9.66591 12.3702 9.65028 12.3664 9.63075 12.3589C9.69325 12.3834 9.75575 12.4099 9.81825 12.4345C9.80654 12.4288 9.79482 12.4231 9.78505 12.4156C9.83779 12.4553 9.89052 12.4949 9.94325 12.5346C9.92763 12.5214 9.91591 12.5101 9.90224 12.4949C9.94325 12.546 9.98427 12.597 10.0253 12.648C10.0175 12.6386 10.0116 12.6273 10.0058 12.6159C10.0311 12.6764 10.0585 12.7369 10.0839 12.7974C10.0761 12.7785 10.0722 12.7615 10.0683 12.7426C10.078 12.8087 10.0878 12.8768 10.0956 12.9429C10.0936 12.9297 10.0936 12.9164 10.0956 12.9032C10.0858 12.9694 10.0761 13.0374 10.0683 13.1036C10.0722 13.0828 10.0761 13.0677 10.0839 13.0488C10.0585 13.1092 10.0311 13.1697 10.0058 13.2302C10.0116 13.2189 10.0175 13.2075 10.0253 13.1981C9.98427 13.2491 9.94325 13.3001 9.90224 13.3512C9.91591 13.3361 9.92763 13.3247 9.94325 13.3115C9.89052 13.3512 9.83779 13.3909 9.78505 13.4306C9.79482 13.423 9.80654 13.4173 9.81825 13.4117C9.75575 13.4362 9.69325 13.4627 9.63075 13.4873C9.65029 13.4797 9.66786 13.4759 9.68739 13.4721C9.61903 13.4816 9.54872 13.491 9.48036 13.4986C9.49403 13.4967 9.5077 13.4967 9.52138 13.4986C9.45302 13.4892 9.3827 13.4797 9.31434 13.4721C9.33583 13.4759 9.35145 13.4797 9.37098 13.4873C9.30848 13.4627 9.24598 13.4362 9.18348 13.4117C9.1952 13.4173 9.20692 13.423 9.21669 13.4306C9.16395 13.3909 9.11122 13.3512 9.05848 13.3115C9.07411 13.3247 9.08583 13.3361 9.0995 13.3512C9.05848 13.3001 9.01747 13.2491 8.97645 13.1981C8.98426 13.2075 8.99012 13.2189 8.99598 13.2302C8.97059 13.1697 8.94325 13.1092 8.91786 13.0488C8.92567 13.0677 8.92958 13.0847 8.93348 13.1036C8.92372 13.0374 8.91395 12.9694 8.90614 12.9032C8.90614 12.9089 8.90614 12.9164 8.90809 12.9221C8.91981 13.1225 8.98817 13.3115 9.13661 13.457C9.27137 13.5874 9.49403 13.6876 9.68934 13.6782C9.89051 13.6687 10.1015 13.6045 10.2421 13.457C10.3788 13.3134 10.4823 13.1225 10.4706 12.9221C10.4569 12.6726 10.3729 12.4382 10.1854 12.2587C10.0058 12.0848 9.75381 11.9846 9.49989 11.9846C9.24598 11.9846 8.99403 12.0867 8.81434 12.2606C8.63074 12.4382 8.53896 12.6764 8.52919 12.924C8.51357 13.4306 8.97841 13.8558 9.48817 13.8615C9.73818 13.8653 10.0018 13.767 10.1776 13.5931C10.369 13.406 10.455 13.1811 10.4686 12.9221C10.4784 12.735 10.3749 12.5176 10.2401 12.3872C10.1054 12.2568 9.88271 12.1566 9.68739 12.1661C9.48623 12.1755 9.27527 12.2398 9.13466 12.3872C8.99208 12.5403 8.91786 12.7142 8.90809 12.9221V12.9221Z" fill="#62727D"/>
</svg>

`;


        function init() {
            const egFreeShip = document.querySelector("#content #shopify-section-cart-template .freeShipMsg");
            const egCartSectionRght = document.querySelector("#content #cartform .cart-right-section");

            // removing .00
            document.querySelector("#content .amount-summary .total-saving-amount").textContent = document.querySelector("#content .amount-summary .total-saving-amount").textContent.split(".").shift();
            // changing delevery text
            document.querySelectorAll("#content .cart-amount-summary label[for='checkout']").forEach(ele => {
                ele.textContent = "Order summary";
            });

            if (window.innerWidth > 767) {
                // text bold in free ship msg
                egFreeShip.querySelector("p").innerHTML = egFreeShip.querySelector("p").innerHTML.replace("FREE SHIPPING", "<strong class='eg-freeship-bold'>FREE SHIPPING</strong>");
            }
            // inserting login signup msg
            egFreeShip.insertAdjacentHTML("beforebegin", `
              <div class="eg-login-signup-msg">
                  <p>Have an Account? <a href="https://www.bevilles.com.au/account/login" data-login><strong>Login</strong></a> or <a href="https://www.bevilles.com.au/account/register" data-login><strong>sign up</strong></a></p>
              </div>
            `);




            //adding heart icon
            document.querySelectorAll("#content #cartform .cart-items .item .description").forEach(ele => {
                ele.insertAdjacentHTML("afterbegin", `<div class="eg-move-to-wishlist"></div>`);
            })

            live('.eg-move-to-wishlist', 'click', function() {
                this.parentElement.querySelector("a.move_to_wishlist").click();
            });

            // defalult radio check
            document.querySelector("#content #cartform .cart-right-section .delivery-option #location-container input#bevilles-home-radio").checked = true;


            // changing tabs innerHtml
            const egDelivery = document.querySelector("#content #cartform .cart-right-section .delivery-option #location-container label[for='bevilles-home-radio']");
            const egCollect = document.querySelector("#content #cartform .cart-right-section .delivery-option #location-container label[for='bevilles-store-radio']");


            egDelivery.innerHTML = `<span class="eg-delivery-tab">${egTruckSvg} Delivery</span>`;
            egCollect.innerHTML = `<span class="eg-delivery-tab">${egCollectSvg} Click &amp; Collect</span>`;

            // inserting new div in cart summary

            egCartSectionRght.insertAdjacentHTML("beforeend", `<div class="eg-verified-trust">
                <div class="tabel-list eg-tabel-list">
                    <ul class="eg-benifits">
                         <li>Free Returns for 14 days</li>
                        <li>90 Day Exchanges</li>
                        <li>365 Day Jewellery Warranty</li>
                     </ul>
                </div>
                </div>`);

            // moving verified box inside this div
            const egVerifiedBox = document.querySelector("#content #cartform .cart-right-section .cart-amount-summary .badge-cart");
            document.querySelector(".eg-verified-trust").insertAdjacentElement("afterbegin", egVerifiedBox);

            // moving delivery and click & collect box inside right section
            if (window.innerWidth < 768) {
                document.querySelector("#content .cart-left-section").insertAdjacentElement("beforeend", egCartSectionRght);
            }

            // unslick slick for desktop
            if (window.innerWidth > 767) {
                setTimeout(() => {
                    jQuery('.upsell-section-slider').slick('unslick');
                    setTimeout(() => {
                        const egSliderDiv = document.querySelector("#content .cart-left-section .upsell-section-slider");

                        egSliderDiv.insertAdjacentHTML("beforeend", `<div class="eg-view-more">
                            <a href="#"><strong>View more products</strong></a>
                        </div>`);
                    }, 2000)
                }, 4000);
            }


        }

        waitForElement("#content #cartform .cart-right-section .delivery-option #location-container input#bevilles-home-radio", init, 100, 35000);
    } catch (e) {
        if (debug) console.log(e, "error in Test" + variation_name);
    }
})();