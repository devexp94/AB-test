(function() {
    try {
        /* main variables */
        var debug = 0;
        var variation_name = "";

        /* all Pure helper functions */


        // selector would be the parent div where your are changing css/js
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

        var pageData = {
            "/blog/volet-roulant-qui-ne-descend-ou-ne-remonte-plus-que-faire": "https://www.bob-lemenuisier.fr/volets/volets-roulants",
            "/blog/comment-programmer-une-telecommande-de-porte-de-garage": "https://www.bob-lemenuisier.fr/portes-de-garage",
            "/blog/comment-reinitialiser-et-reprogrammer-un-volet-roulant-solaire": "https://www.bob-lemenuisier.fr/volets/volets-roulants",
            "/blog/comment-regler-la-fin-de-course-d-un-volet-roulant": "https://www.bob-lemenuisier.fr/volets/volets-roulants",
            "/blog/volet-roulant-bruyant-qui-grince-ou-couine-comment-y-remedier": "https://www.bob-lemenuisier.fr/volets/volets-roulants",
            "/blog/comment-regler-les-bras-d-un-store-banne": "",
            "/blog/brise-soleil-orientable-ou-volet-roulant-que-choisir": "https://www.bob-lemenuisier.fr/volets/volets-roulants",
            "/blog/ou-placer-les-cellules-de-son-portail-battant": "",
            "/blog/comment-prendre-les-mesures-dun-portail": "",
            "/blog/achat-dune-porte-de-garage-enroulable-ou-sectionnelle": "",
            "/blog/portail-coulissant-qui-se-bloque-que-faire": "",
            "/blog/demonter-et-remplacer-des-volets-battants": "",
            "/blog/comment-installer-un-portail-coulissant-sur-un-terrain-en-pente": "",
            "/blog/comment-realiser-un-seuil-de-portail-coulissant": "",
            "/blog/comment-bloquer-une-porte-de-garage-basculante-sectionnelle": "",
            "/blog/escalier-bruyant-qui-craque-ou-qui-grince-comment-y-remedier": "",
            "/blog/portail-coulissant-qui-grince-ou-qui-bouge-que-faire": "",
            "/blog/portail-coulissant-qui-sort-de-son-rail-que-faire": "",
            "/blog/comment-demonter-un-store-banne": "",
            "/blog/comment-isoler-une-porte-de-garage": "https://www.bob-lemenuisier.fr/portes-de-garage",
            "/blog/volets-battants-quel-materiau-choisir-pvc-alu-ou-bois": "",
            "/blog/comment-calculer-la-longueur-d-un-portail-coulissant": "",
            "/blog/comment-bien-choisir-la-couleur-de-ses-volets": "",
            "/blog/comment-ouvrir-un-coffre-de-volet-roulant-exterieur": "https://www.bob-lemenuisier.fr/volets/volets-roulants",
            "/blog/guide-de-prise-de-mesure-dun-store-banne": "",
            "/blog/comment-tester-une-telecommande-de-volet-roulant": "https://www.bob-lemenuisier.fr/volets/volets-roulants",
            "/blog/volets-roulants-solaires-ou-electriques-que-choisir": "",
            "/blog/guide-de-prise-de-mesure-dun-volet-battant": "",
            "/blog/guide-de-prise-de-mesure-dun-volet-roulant": "https://www.bob-lemenuisier.fr/volets/volets-roulants",
            "/blog/comment-securiser-un-portail-battant": "",
            "/blog/comment-ouvrir-un-coffre-de-volet-roulant-interieur": "https://www.bob-lemenuisier.fr/volets/volets-roulants",
            "/blog/comment-calculer-la-distance-entre-2-piliers-de-portail-coulissant": "",
            "/blog/guide-de-prise-de-mesure-dun-portail-battant": "",
            "/blog/prendre-les-mesures-dune-porte-de-garage": "https://www.bob-lemenuisier.fr/portes-de-garage",
            "/blog/portail-coulissant-ou-battant-comment-choisir": "",
            "/blog/portail-battant-quelle-marque-et-motorisation-privilegier": "",
            "/blog/guide-de-prise-de-mesure-dun-portail-coulissant": "",
            "/blog/comment-installer-une-porte-de-garage": "https://www.bob-lemenuisier.fr/portes-de-garage",
            "/blog/comment-installer-une-motorisation-de-portail": "",
            "/blog/ameliorer-sa-maison-avec-des-produits-made-in-france-cest-possible": "",
            "/blog/bob-le-menuisier-la-revolution-de-la-menuiserie-en-ligne": "",
            "/blog/comment-poser-une-verriere": "",
            "/blog/volets-battants-sur-mesure-un-produit-finalement-accessible": "",
            "/blog/comment-monter-un-portail-coulissant": "",
            "/blog/comment-fonctionne-un-volet-roulant-solaire": "https://www.bob-lemenuisier.fr/volets/volets-roulants",
            "/blog/coffre-de-volet-roulant-interieur-ou-exterieur-que-choisir": "https://www.bob-lemenuisier.fr/volets/volets-roulants",
            "/blog/guide-prise-de-mesure-dune-porte-de-garage-enroulable": "",
            "/blog/comment-monter-et-fixer-un-store-banne-a-pied": "",
            "/blog/comment-faire-une-toile-coulissante-pour-pergola": "",
            "/blog/comment-remplacer-une-porte-de-garage-par-une-fenetre-ou-une-baie-coulissante": "",
            "/blog/prendre-les-bonnes-mesures-de-vos-volets-battants": "",
            "/blog/comment-monter-un-portail": "",
            "/blog/porte-d-entree-alu-ou-pvc-que-choisir": "",
            "/blog/bob-le-menuisier-une-revolution-dans-l-univers-de-la-menuiserie-en-ligne": "",
            "/blog/comment-securiser-une-porte-de-garage": "https://www.bob-lemenuisier.fr/portes-de-garage",
            "/blog/comment-prendre-les-mesures-de-ma-porte-d-entree": "",
            "/blog/comment-remplacer-une-lame-de-volet-roulant": "https://www.bob-lemenuisier.fr/volets/volets-roulants",
            "/blog/quelles-sont-les-reglementations-et-normes-pour-un-escalier": "",
            "/blog/demonter-et-remplacer-un-volet-roulant": "",
            "/blog/comment-remplacer-un-moteur-de-volet-roulant": "",
            "/blog/presentation-des-compatibilites-de-la-box-calypshome": "",
            "/blog/comment-creer-la-tremie-d-escalier": "",
            "/blog/comment-nettoyer-un-store-banne": "",
            "/blog/comment-sceller-des-grilles-de-defense": "",
            "/blog/comment-bien-prendre-les-mesures-de-vos-fenetres": "",
            "/blog/bien-prendre-les-mesures-de-ses-volets-battants-et-coulissants": "",
            "/blog/comment-fixer-un-store-banne-mural": "",
            "/blog/parametrage-box-expert-bob": "",
            "/blog/volets-roulants-alu-ou-pvc-quel-matriau-choisir": "",
            "/blog/les-caracteristiques-dune-porte-de-garage-de-qualite": "https://www.bob-lemenuisier.fr/portes-de-garage",
            "/blog/comment-fixer-une-cloture-dans-la-terre": "",
            "/blog/comment-prendre-les-mesures-de-mon-escalier": "",
            "/blog/installer-une-motorisation-de-portail-comment-proceder": "",
            "/blog/choix-des-volets-pour-vos-fentres-volets-roulants-ou-volets-battants": "",
            "/blog/comment-securiser-sa-maison-pendant-une-longue-absence": "",
            "/blog/comment-poser-une-cloture": "",
            "/blog/comment-reussir-la-motorisation-dun-portail-battant": "",
            "/blog/ou-placer-la-motorisation-d-un-portail-coulissant-lors-de-linstallation": "",
            "/blog/porte-de-garage-bloquee-que-faut-il-faire-pourquoi-que-verifier": "https://www.bob-lemenuisier.fr/portes-de-garage",
            "/blog/votre-pergola-bioclimatique-en-ralit-augmente": "",
            "/blog/comment-choisir-sa-pergola-bioclimatique-": "",
            "/blog/comment-habiller-une-fenetre-avec-un-coffre-de-volet-roulant": "",
            "/blog/tout-savoir-sur-les-pergolas-bioclimatiques-bob-le-menuisier": "",
            "/blog/comment-fixer-une-cloture-sur-un-muret-ou-sur-du-ciment": "",
            "/blog/comment-poser-une-grille-de-defense": "",
            "/blog/comment-habiller-une-fenetre-avec-un-coffre-de-volet": "",
            "/blog/la-porte-de-garage-enroulable-est-elle-vraiment-securisee": "",
            "/blog/pourquoi-opter-pour-un-volet-roulant-electrique": "",
            "/blog/quelle-porte-dentree-pour-assurer-une-bonne-isolation": "",
            "/blog/comment-bien-choisir-la-couleur-de-ses-volets-par-rapport-sa-facade-et-ses-fenetres": "",
            "/blog/comment-choisir-sa-pergola-bioclimatique": "",
            "/blog/repeindre-des-volets-en-bois-exterieurs-quelle-peinture-choisir": "",
            "/blog/comment-fixer-une-cloture-sur-du-goudron": "",
            "/blog/pose-dune-fenetre-quelle-methode-choisir": "",
            "/blog/comment-creer-la-tremie-descalier": "",
            "/blog/comment-bien-choisir-la-couleur-de-ses-volets-par-rapport--sa-facade-et-ses-fenetres": "",
            "/blog/portail-coulissant-comment-le-choisir": "",
            "/blog/comment-programmer-une-telecommande-de-porte-de-garage clemsa": "https://www.bob-lemenuisier.fr/portes-de-garage",
            "/blog/comment-remplacer-une-porte-interieure": "",
            "/blog/comment-sceller-des-grilles-de-defense-": "",
            "/blog/parametrez-vos-box-calypshome-tahoma-avec-les-experts-bob": "",
            "/blog/volet-roulant-bruyant-qui-grince-ou-couine-comment-y-remedier voyeur": "",
            "/blog/brise-soleil-orientable-ouvolet roulant-volet-roulant-que-choisir": "",
            "/blog/comment-choisir-sa-pergola-bioclimatique-dd": "",
            "/blog/comment-regler-le-bras-d-un-store-banne": "",
            "/blog/comment-tester-une-tleecommande-de-volet-roulant": "",
            "/blog/portail-en-aluminium": "",
            "/blog/pourquoi-choisir-une-porte-de-garage-battante": "",
            "/blog/prise-de-mesure-dune-porte-de-garage-enroulable": "",
            "/blog/tout-savoir-sur-les-pergolas-bioclimatiques-bob-le-menuisier980": "",
            "/blog/volet-qui-ne-descend-ou-ne-remonte-plus-que-faire": ""
        }
        let htmlString = `<div class="eg-products-container">
           <h2 class="eg_title">Produits qui pourraient vous intéresser : </h2>
            <ul>
            </ul>
        </div>`;

        /* Variation functions */
        function init() {
            // selecting both content div ( desktop and mobile) and adding custom html
            document.querySelectorAll("#amblog_content_post > div.amblog-post-container > div.amblog-post-container-content > div.amblog-content > p:nth-child(5)").forEach(target=>{
                target.insertAdjacentHTML("beforeend",htmlString);
            });

            var url = pageData[window.location.pathname];
            getData(url);
        }

        function getData(url) {
            var xhttp = new XMLHttpRequest();
            xhttp.onreadystatechange = function() {
                if (this.readyState == 4 && this.status == 200) {
                    var data = this.responseText;
                    var newEle = document.createElement('div');
                    newEle.innerHTML = data;

                    // getting list items and converting that nodelist to javascript array using spread opreator
                    // slicing 4 elements of that newly created array
                    const eleList = [...newEle.querySelectorAll(".bob-products-grid ol li")].slice(0,4);
                    
                    // reducing elements to a html string    
                    const eleHtml = convertToHTML(eleList);
                    
                    addHtml(eleHtml);
                }
            };
            xhttp.open("GET", url, true);
            xhttp.send();
        }

        function convertToHTML(eleList) {
            var eleHtml = eleList.reduce(function(html, listEle) {
              //  console.log(typeof html);
                if (typeof html === "object") {
                    return html.outerHTML.toString() + listEle.outerHTML.toString();
                }

                return html + listEle.outerHTML.toString();
            });

            return eleHtml;
        }

        function addHtml(eleHtml) {
            document.querySelectorAll(".eg-products-container ul").forEach((ele)=>{
                ele.insertAdjacentHTML("beforeend",eleHtml);
            })
        }


        /* Initialize variation */
        waitForElement("main article.desktop #amblog_content_post > div.amblog-post-container > div.amblog-post-container-content > div.amblog-content", init, 50, 15000);
    } catch (e) {
        if (debug) console.log(e, "error in Test" + variation_name);
    }
})();