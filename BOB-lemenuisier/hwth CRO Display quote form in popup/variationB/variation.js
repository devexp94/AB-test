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

    var form = `<div class="eg-form-popup">
    <div class="eg-form-popup-overlay"></div>
    <div class="eg-form-popup-content">
        <span class="form-close">&times;</span>
        <form class="rendered-form amform-form  default" id="amform-form-6" action="https://www.bob-lemenuisier.fr/amasty_customform/form/submit/" enctype="multipart/form-data" method="post" novalidate="novalidate">

            <input name="form_key" type="hidden" value="LJFvLdP6gzpWbVUl">
            <input name="form_id" type="hidden" value="6">
            <input name="is_survey" type="hidden" value="0">
            <div class="amform-form-fieldset fieldset">
                <div class="insert-container fields"><div data-amcform-js="multi-page" class="amcform-multi-page fieldset ui-tabs ui-widget ui-widget-content ui-corner-all"><div id="page-0" class="amcform-page-wrap fields ui-tabs-panel ui-widget-content ui-corner-bottom" aria-labelledby="ui-id-1" role="tabpanel" aria-expanded="true" aria-hidden="false"><div class="field fb-div form-group field-text-title amform-layout-one"><div class="control"><div type="div" name="text-title" class="text-title" layout="one" parent-type="other" id="text-title" data-amcform-js="text-title">Votre devis personnalisé</div></div></div><div class="field fb-div form-group field-text-title amform-layout-one"><div class="control"><div type="div" name="text-title" class="class-step1" layout="one" parent-type="other" id="text-title" data-amcform-js="text-title">Je choisis mes produits:</div></div></div><div class="field fb-checkbox form-group field-category amform-layout-one"><label for="category" class="fb-checkbox-group-label label">Checkbox v.2 <span class="required">*</span> </label><div class="control"><div class="checkbox-group"><div class="amform-groupv2"><input value="Portail Battant" type="checkbox" name="category[]" class="amform-checkboxtwo required-entry" layout="one" parent-type="options" id="category-0" data-amcform-js="category" aria-required="true"> <label for="category-0" class="amform-versiontwo-label">Portail Battant</label></div><div class="amform-groupv2"><input value="Portail Coulissant" type="checkbox" name="category[]" class="amform-checkboxtwo required-entry" layout="one" parent-type="options" id="category-1" data-amcform-js="category" aria-required="true"> <label for="category-1" class="amform-versiontwo-label">Portail Coulissant</label></div><div class="amform-groupv2"><input value="Porte de garage" type="checkbox" name="category[]" class="amform-checkboxtwo required-entry" layout="one" parent-type="options" id="category-2" data-amcform-js="category" aria-required="true"> <label for="category-2" class="amform-versiontwo-label">Porte de garage</label></div><div class="amform-groupv2"><input value="Volet Roulant" type="checkbox" name="category[]" class="amform-checkboxtwo required-entry" layout="one" parent-type="options" id="category-3" data-amcform-js="category" aria-required="true"> <label for="category-3" class="amform-versiontwo-label">Volet Roulant</label></div><div class="amform-groupv2"><input value="Escalier" type="checkbox" name="category[]" class="amform-checkboxtwo required-entry" layout="one" parent-type="options" id="category-4" data-amcform-js="category" aria-required="true"> <label for="category-4" class="amform-versiontwo-label">Escalier</label></div><div class="amform-groupv2"><input value="Fenêtre" type="checkbox" name="category[]" class="amform-checkboxtwo required-entry" layout="one" parent-type="options" id="category-5" data-amcform-js="category" aria-required="true"> <label for="category-5" class="amform-versiontwo-label">Fenêtre</label></div><div class="amform-groupv2"><input value="Porte Blindée" type="checkbox" name="category[]" class="amform-checkboxtwo required-entry" layout="one" parent-type="options" id="category-6" data-amcform-js="category" aria-required="true"> <label for="category-6" class="amform-versiontwo-label">Porte Blindée</label></div><div class="amform-groupv2"><input value="Porte Entrée" type="checkbox" name="category[]" class="amform-checkboxtwo required-entry" layout="one" parent-type="options" id="category-7" data-amcform-js="category" aria-required="true"> <label for="category-7" class="amform-versiontwo-label">Porte Entrée</label></div><div class="amform-groupv2"><input value="Porte Intérieur" type="checkbox" name="category[]" class="amform-checkboxtwo required-entry" layout="one" parent-type="options" id="category-8" data-amcform-js="category" aria-required="true"> <label for="category-8" class="amform-versiontwo-label">Porte Intérieur</label></div><div class="amform-groupv2"><input value="Volet battant" type="checkbox" name="category[]" class="amform-checkboxtwo required-entry" layout="one" parent-type="options" id="category-9" data-amcform-js="category" aria-required="true"> <label for="category-9" class="amform-versiontwo-label">Volet battant</label></div><div class="amform-groupv2"><input value="Pergola" type="checkbox" name="category[]" class="amform-checkboxtwo required-entry" layout="one" parent-type="options" id="category-10" data-amcform-js="category" aria-required="true"> <label for="category-10" class="amform-versiontwo-label">Pergola</label></div><div class="amform-groupv2"><input value="Portillon" type="checkbox" name="category[]" class="amform-checkboxtwo required-entry" layout="one" parent-type="options" id="category-11" data-amcform-js="category" aria-required="true"> <label for="category-11" class="amform-versiontwo-label">Portillon</label></div><div class="amform-groupv2"><input value="Verrière" type="checkbox" name="category[]" class="amform-checkboxtwo required-entry" layout="one" parent-type="options" id="category-12" data-amcform-js="category" aria-required="true"> <label for="category-12" class="amform-versiontwo-label">Verrière</label></div><div class="amform-groupv2"><input value="Grille de Défense" type="checkbox" name="category[]" class="amform-checkboxtwo required-entry" layout="one" parent-type="options" id="category-13" data-amcform-js="category" aria-required="true"> <label for="category-13" class="amform-versiontwo-label">Grille de Défense</label></div><div class="amform-groupv2"><input value="Persiennes" type="checkbox" name="category[]" class="amform-checkboxtwo required-entry" layout="one" parent-type="options" id="category-14" data-amcform-js="category" aria-required="true"> <label for="category-14" class="amform-versiontwo-label">Persiennes</label></div><div class="amform-groupv2"><input value="Clôture" type="checkbox" name="category[]" class="amform-checkboxtwo required-entry" layout="one" parent-type="options" id="category-15" data-amcform-js="category" aria-required="true"> <label for="category-15" class="amform-versiontwo-label">Clôture</label></div><div class="amform-groupv2"><input value="Marquise" type="checkbox" name="category[]" class="amform-checkboxtwo required-entry" layout="one" parent-type="options" id="category-16" data-amcform-js="category" aria-required="true"> <label for="category-16" class="amform-versiontwo-label">Marquise</label></div><div class="amform-groupv2"><input value="Garde-Corps" type="checkbox" name="category[]" class="amform-checkboxtwo required-entry" layout="one" parent-type="options" id="category-17" data-amcform-js="category" aria-required="true"> <label for="category-17" class="amform-versiontwo-label">Garde-Corps</label></div></div></div></div><div class="field fb-div form-group field-text-2 amform-layout-one"><div class="control"><div type="div" name="text-2" class="class-step2" layout="one" parent-type="other" id="text-2" data-amcform-js="text-2">Je renseigne mes informations : </div></div></div><div class="field fb-checkbox form-group field-radiotwo-civilite amform-layout-one"><label for="radiotwo-civilite" class="fb-checkbox-group-label label">Civilité  </label><div class="control"><div class="checkbox-group"><div class="amform-groupv2"><input value="madame" type="checkbox" name="radiotwo-civilite[]" class="amform-civilite" style="default" layout="one" parent-type="options" id="radiotwo-civilite-0" data-amcform-js="radiotwo-civilite" checked=""> <label for="radiotwo-civilite-0" class="amform-versiontwo-label">Madame</label></div><div class="amform-groupv2"><input value="monsieur" type="checkbox" name="radiotwo-civilite[]" class="amform-civilite" style="default" layout="one" parent-type="options" id="radiotwo-civilite-1" data-amcform-js="radiotwo-civilite"> <label for="radiotwo-civilite-1" class="amform-versiontwo-label">Monsieur</label></div></div></div></div><div class="field fb-text form-group field-prenom amform-layout-two"><label for="prenom" class="fb-text-label label">Prénom <span class="required">*</span> </label><div class="control"> <input type="text" name="prenom" class="form-control required-entry" placeholder="Votre prénom" layout="two" parent-type="input" data-validate="{}" id="prenom" data-amcform-js="prenom" aria-required="true"></div></div><div class="field fb-text form-group field-nom amform-layout-two"><label for="nom" class="fb-text-label label">Nom <span class="required">*</span> </label><div class="control"> <input type="text" name="nom" class="form-control required-entry" placeholder="Votre Nom" layout="two" parent-type="input" data-validate="{}" id="nom" data-amcform-js="nom" aria-required="true"></div></div><div class="field fb-text form-group field-email amform-layout-two"><label for="email" class="fb-text-label label">Email <span class="required">*</span> </label><div class="control"> <input type="text" name="email" class="form-control required-entry" placeholder="Votre email" layout="two" parent-type="input" data-validate="{}" id="email" data-amcform-js="email" aria-required="true"></div></div><div class="field fb-text form-group field-telephone amform-layout-two"><label for="telephone" class="fb-text-label label">Téléphone <span class="required">*</span> </label><div class="control"> <input type="text" name="telephone" class="form-control required-entry" style="default" placeholder="Votre téléphone" regexp="/^((\+)33|0|0033)[1-9](\d{2}){4}$/g" error-message="N’utilisez des nombres (0-9). Aucun espace ou autre caractère n’est autorisé." layout="two" parent-type="input" data-validate="{'pattern0.052919905280505386':/^((\+)33|0|0033)[1-9](\d{2}){4}$/g}" id="telephone" data-amcform-js="telephone" aria-required="true"></div></div><div class="field fb-text form-group field-code-postal amform-layout-one"><label for="code-postal" class="fb-text-label label">Code postal <span class="required">*</span> </label><div class="control"> <input type="text" name="code-postal" class="form-control required-entry" placeholder="Votre code postal" layout="one" parent-type="input" data-validate="{'validate-number':true}" id="code-postal" data-amcform-js="code-postal" aria-required="true"></div></div><div class="field fb-checkbox form-group field-check-cgv amform-layout-one"><label for="check-cgv" class="fb-checkbox-group-label label"> <span class="required">*</span> </label><div class="control"><div class="checkbox-group"><input value="cgv" type="checkbox" name="check-cgv[]" class="cgv-checkbox required-entry" layout="one" parent-type="options" id="check-cgv-0" data-amcform-js="check-cgv" aria-required="true"> <label for="check-cgv-0" class="amform-versiontwo-label">J'accepte les Conditions Générales de ventes et la Politique de confidentialité *</label><br></div></div></div><div class="amcform-toolbar"><button type="submit" data-amcform-js="submit-button" class="amcform-submit action submit primary ">Demander mon devis</button></div></div></div></div>
                                    </div>
        </form>
    </div>
</div>`;
    function init() {

    document.querySelector('body').insertAdjacentHTML('beforeend', form);
    
    document.querySelector('.container-bob-sticky #product-devis-button').addEventListener('click', function(e){
      e.preventDefault();
      e.stopImmediatePropagation();
      document.querySelector('body').classList.add('form-show');
    })


    document.querySelector('.eg-form-popup .form-close').addEventListener('click', function(){
      document.querySelector('body').classList.remove('form-show');
    })
    document.querySelector('.eg-form-popup .eg-form-popup-overlay').addEventListener('click', function(){
      document.querySelector('body').classList.remove('form-show');
    })
}

    /* Initialise variation */
    waitForElement(".container-bob-sticky #product-devis-button", init, 100, 25000);
  } catch (e) {
    if (debug) console.log(e, "error in Test" + variation_name);
  }
})();
