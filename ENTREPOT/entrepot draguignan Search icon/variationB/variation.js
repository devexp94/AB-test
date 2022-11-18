(function () {
	function shoutele(predicate, success, error) {
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
shoutele(() => typeof window.jQuery === 'function'
    && typeof jQuery.fn === 'object' && document.querySelectorAll('.o-header-search .m-search-header').length> 0
&& document.querySelectorAll('.m-suggestion + div#suggestion-overlay').length > 0 , () => {
	
const newelement = document.createElement('div');
const inputHtml = `<input id="search" type="search" placeholder="Rechercher un produit..." aria-expanded="false" aria-owns="header-search-input" aria-autocomplete="list" autocomplete="off" role="combobox" value="" class="a-input focus-visible custom-inputHtml" data-focus-visible-added="">
		<div class="custome-iconHtml"></div>
	`;
newelement.innerHTML = inputHtml;
	document.querySelector('.o-header-search .m-search-header').before(newelement );
	const secondelement = document.createElement('div');
	secondelement.classList.add('newAddedHeaderSearch');
	secondelement.innerHTML = '<p class="textTitle">Que recherchez vous ?</p> <span class="closeHeaderSearch">X</span>';
	document.querySelector('.o-header-search .m-search-header').prepend(secondelement);
	const searchMenu = document.createElement('div');
searchMenu.classList.add('searchMenuMainWrapper');
 searchMenu.innerHTML =  `
    <div class="searchMenuSub menuSub1">
    <ul class="o-menu-list"><li class="o-menu-item"><a href="/n/u-chauffage-climatisation-et-vmc-ccv-n" class="o-menu-link">
      <img src="https://expogrowth.in/wp-content/uploads/2022/03/chauffage.svg"> Chauffage Climatisation et VMC
    </a></li><li class="o-menu-item"><a href="/n/u-cuisine-adc-n" class="o-menu-link">
      <img src="https://expogrowth.in/wp-content/uploads/2022/03/cuisine.svg"> Cuisine
    </a></li><li class="o-menu-item"><a href="/n/u-electricite-et-domotique-eed-n" class="o-menu-link">
      <img src="https://expogrowth.in/wp-content/uploads/2022/03/elec.svg"> Electricité  et domotique
    </a></li><li class="o-menu-item"><a href="/n/u-jardin-et-terrasse-jet-n" class="o-menu-link">
      <img src="https://expogrowth.in/wp-content/uploads/2022/03/jardin.svg"> Jardin et Terrasse
    </a></li><li class="o-menu-item"><a href="/n/u-luminaire-ampoule-et-decoration-lad-n" class="o-menu-link">
      <img src="https://expogrowth.in/wp-content/uploads/2022/03/éclairage.svg"> Luminaire, ampoule et décoration
    </a></li><li class="o-menu-item"><a href="/n/u-materiaux-et-gros-oeuvre-mgo-n" class="o-menu-link">
      <img src="https://expogrowth.in/wp-content/uploads/2022/03/matériaux.svg"> Matériaux et Gros oeuvre
    </a></li><li class="o-menu-item"><a href="/n/u-menuiserie-porte-escalier-et-tasseau-mpe-n" class="o-menu-link"><img src="https://expogrowth.in/wp-content/uploads/2022/03/menuiserie.svg"> 
      Menuiserie, porte, escalier et tasseau
    </a></li></ul>        
</div>
    
<div class="searchMenuSub menuSub2">
    <ul class="o-menu-list"><li class="o-menu-item"><a href="/n/u-outillage-otl-n" class="o-menu-link">
      <img src="https://expogrowth.in/wp-content/uploads/2022/03/outillage.svg">Outillage
    </a></li><li class="o-menu-item"><a href="/n/u-peinture-et-droguerie-pei-n" class="o-menu-link">
      <img src="https://expogrowth.in/wp-content/uploads/2022/03/peinture.svg"> Peinture et droguerie
    </a></li><li class="o-menu-item"><a href="/n/u-plomberie-plb-n" class="o-menu-link">
       <img src="https://expogrowth.in/wp-content/uploads/2022/03/plomberie.svg"> Plomberie
    </a></li><li class="o-menu-item"><a href="/n/u-quincaillerie-rqd-n" class="o-menu-link">
    <img src="https://expogrowth.in/wp-content/uploads/2022/03/quincaillerie.svg"> Quincaillerie
    </a></li><li class="o-menu-item"><a href="/n/u-rangement-dressing-et-amenagement-de-placard-rad-n" class="o-menu-link">
      <img src="https://expogrowth.in/wp-content/uploads/2022/03/dressing.svg"> Rangement, dressing et aménagement de placard
    </a></li><li class="o-menu-item"><a href="/n/u-revetement-de-sol-carrelage-et-lambris-rcl-n" class="o-menu-link">
      Revêtement de sol, carrelage et lambris
    </a></li><li class="o-menu-item"><a href="/n/u-salle-de-bains-et-wc-sbw-n" class="o-menu-link">
      Salle de bains et WC
    </a></li></ul>        
</div>
	`;
	document.querySelector('.m-suggestion + div#suggestion-overlay').after(searchMenu);
	
	document.querySelector('.o-header-search div > input').addEventListener('click', () => {
	   document.querySelector('.m-search-header').style.display = 'block';
	});
	document.querySelector('.newAddedHeaderSearch span.closeHeaderSearch').addEventListener('click', () => {
	 document.querySelector('.m-search-header').style.display = 'none';
	});
		
});
	
}());