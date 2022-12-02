(function(){

  const domain = 'MOORINGS.COM'; //eg LB, CIT, SOV etc
   const testId = '927406'; // ABTasty variant id
   const testVar = 'V1'; // Cx for campaign level code , Vx for variation version
   const testName = 'Yachts - Search by Charter'; // location : test name, eg "Homepage : Modify search"
   const charterTypeText = 'Select Charter Type';
   const yatchLengthText = 'Select Yacht length';
   const berthText = 'Select Max Berths';
   const cabinsText = 'Select Number of cabins';
   const EVENT_NAME = 'search_clicked';
   const Yacht_tab = 'Yacht_tab_clicked';
   const selectedFilterValues = {
        'length-filter':'All',
         'number-cabins-filter':'All',
         'max-berths-filter':'All'
   };

  const inQA = function () {  
     // test for QA cookie : "testId=test|true|QA"
     const re = new RegExp(`${testId}\=(test|true|qa|abt)`, 'i');
     let qaMode = ((re).test(document.cookie) == true) ? true : false;
     // test for preview mode.
     let previewMode = (window.location.search.includes('ab_project=preview' == true || document.querySelector('#ABTastyPreviewBar') != null)) ? true : false;
     // test for qa console mode.
     let consoleMode = window.location.search.includes('abtasty_qa_assistant=true');
     // test for qa console.
     let qaConsole = (document.querySelector('#abtasty-qa-assistant-frame') != null);
     return (qaMode || previewMode || consoleMode || qaConsole) ? "true" : "false";
   }();
   
   document.querySelector('body').classList.add(`${domain}${testId}`);
   console.log(`${domain} : ${testId} : ${testVar} : ${testName} : TEST RUNNING : QA=${inQA}`);
   
       function waitFor(condition, callback, timeout, fallback) {
           var stopTime = typeof timeout === 'number' ? timeout : 7000;
           var stop = false;
           window.setTimeout(function() {
             stop = true;
           }, stopTime);
           return function _innerWaitFor() {
             var value = condition();
             if (stop) {
               fallback && fallback();
               return null;
             }
             if (value) return callback(value);
             return window.setTimeout(_innerWaitFor, 250);
           };
         }
     var yatchTabContent = `<div class="charter-container hide-cont">
   <div class="search-widget-left-column charter-left">
       <div class="search-widget-filter search-widget-destinations-filter" id="search-widget-destinations-filter"><label
               for="search-widget-duration-filter">CHARTER TYPE</label>
           <div class="select-wrapper "><select class="charter-type-dd disabled" required="" id="">
                   <!-- react-text: 97 -->
                   <!-- /react-text -->
                   <option value="" selected="" disabled="true">${charterTypeText}</option>
                   <option value="sail_catamarans">Sail Catamarans</option>
                   <option value="sail_monohulls">Sail Monohulls</option>
                   <option value="crewed_yachts">Crewed Yachts</option>
                   <option value="power_yachts">Power Yachts</option>
               </select></div>
       </div>
       <div class="search-widget-filter search-widget-destinations-filter" id="search-widget-destinations-filter"><label
               for="search-widget-duration-filter">YACHT LENGTH</label>
           <div class="select-wrapper disabled">
           <select class="yacht-length-dd" required="" id="" disabled>
                   <!-- react-text: 97 -->
                   <!-- /react-text -->
                   <option value="" selected="" disabled="true">${yatchLengthText}</option>
                   <!-- <option value="all">All</option>-->
               </select></div>
       </div>
   </div>
   <div class="search-widget-right-column charter-right">
       <div class="search-widget-filter search-widget-durations-filter berth-filter" id="search-widget-durations-filter-wrapper">
           <label for="search-widget-duration-filter">MAX BERTHS</label>
           <div class="select-wrapper disabled">
           <select class="max-berth-dd" required="" id="" disabled>
                   <!-- react-text: 97 -->
                   <!-- /react-text -->
                   <option value="" selected="" disabled="true">${berthText}</option>
                   <!-- <option value="all">All</option>-->
               </select></div>
       </div>
           <div class="search-widget-filter search-widget-durations-filter cabins-filter" id="search-widget-durations-filter-wrapper">
           <label for="search-widget-duration-filter">NUMBER OF CABINS</label>
           <div class="select-wrapper disabled">
           <select class="cabins-dd" required="" id="" disabled>
                   <!-- react-text: 97 -->
                   <!-- /react-text -->
                   <option value="" selected="" disabled="true">${cabinsText}</option>
                   <!-- <option value="all">All</option>-->
               </select></div>
       </div>
       <!-- <div class="search-widget-filter search-widget-pax-filter berth-filter" id="search-widget-pax-filter"><label
               for="search-widget-pax-filter">Passengers</label>
           <div class="search-widget-button-wrapper yacht-passen"><span class="decrease button yacht-decrease disabled"><a tabindex="0"
                       role="button" aria-label="Decrease passengers">-</a></span><span
                   class="number"><span>2</span></span><span class="increase button yacht-increase"><a tabindex="0" role="button"
                       aria-label="Increase passengers">+</a></span><span class="passengers-icon"></span></div>
       </div> -->
       <span class="search-widget-btn-wrapper yatch-search-span disabled"><a class="yatch-search btn btn-default cta-bk cta-border search-widget-btn"
               tabindex="0" role="button"><span class="search-icon"></span><!-- react-text: 118 -->Search
               <!-- /react-text -->
           </a></span>
   </div>
</div>`;
     function init(){
       var headingEle = document.querySelector('.ym_hero__heading');
       var destLeft = document.querySelector('#search-widget .search-widget-main-panel .search-widget-left-column');
       var destRight = document.querySelector('#search-widget .search-widget-main-panel .search-widget-right-column');
       destRight.insertAdjacentHTML('afterend', yatchTabContent);
       let tabBlockLarge = `<div class="tab_main tab-block-large"><div class="tab_content-dest tab-active"><span class="active">Destinations</span></div><div class="tab_content-yach"><span>Yachts</span></div></div>`;
       // let tabBlockSmall = `<div class="tab_main tab-block-small"><div class="tab_content-dest tab-active"><span class="active">Destinations</span></div><div class="tab_content-yach"><span>Yachts</span></div></div>`;
       headingEle.insertAdjacentHTML('afterend',tabBlockLarge);
       appendTabBlock();
       // document.querySelector('#search-widget')?.insertAdjacentHTML('afterend',tabBlockSmall);
       document.querySelector('#search-widget .search-widget-destination-filter label').innerText = 'Where to go';
       addListeners();
     }    
     
     function appendTabBlock() {
         waitFor(() => {
             return document.querySelector('.pane-fieldable-panels-pane>#search-widget');
         }, () => {
           document.querySelector('.tab-block-large').remove();
           let tabBlockSmall = `<div class="tab_main tab-block-small"><div class="tab_content-dest tab-active"><span class="active">Destinations</span></div><div class="tab_content-yach"><span>Yachts</span></div></div>`;
           document.querySelector('.pane-fieldable-panels-pane>#search-widget')?.insertAdjacentHTML('beforebegin',tabBlockSmall);
           addListeners();
         })();
     }
     
     function addListeners(){
       var destLeft = document.querySelector('#search-widget .search-widget-main-panel .search-widget-left-column');
       var destRight = document.querySelector('#search-widget .search-widget-main-panel .search-widget-right-column');
       var charterCont = document.querySelector('.charter-container');
       document.querySelector('.tab_content-dest').addEventListener('click', function(){
         document.querySelector('.tab_content-dest').classList.add('tab-active');
         document.querySelector('.tab_content-yach').classList.remove('tab-active');
         charterCont.classList.add('hide-cont');
         destLeft.classList.remove('hide-cont');
         destRight.classList.remove('hide-cont');
         document.querySelector('.tab_content-dest span').classList.add('active');
         document.querySelector('.tab_content-yach span').classList.remove('active');
       });
       document.querySelector('.tab_content-yach').addEventListener('click', function(){
         destLeft.classList.add('hide-cont');
         destRight.classList.add('hide-cont');
         charterCont.classList.remove('hide-cont');
         document.querySelector('.tab_content-dest').classList.remove('tab-active');
         document.querySelector('.tab_content-yach').classList.add('tab-active');
         document.querySelector('.tab_content-dest span').classList.remove('active');
         document.querySelector('.tab_content-yach span').classList.add('active');
         ABTastyClickTracking(Yacht_tab, null, testId);
       });
       document.querySelector('.yatch-search').addEventListener('click', ()=>{
         ABTastyClickTracking(EVENT_NAME, null, testId);
       });
     }
     
     document.addEventListener('change', (ele)=>{
       if(ele.target.classList.contains('charter-type-dd')){
         let data = window.data.yachts;
         clearAllDd('all');
         let cType = ele.target.value;
         if(cType=='sail_catamarans'){
           let filteredData = data.filter(x=>x.field_brand.includes('Sailing') && x.field_type=='X');
           updatesFieldDropdowns(filteredData);
           setSearchLink('/yachts/sail-fleet/catamarans');
         } else if(cType=='sail_monohulls'){
           let filteredData = data.filter(x=>x.field_brand.includes('Sailing') && x.field_type=='M');
           updatesFieldDropdowns(filteredData);
           setSearchLink('/yachts/sail-fleet/monohulls');
         } else if(cType=='crewed_yachts'){
           let filteredData = data.filter(x=>x.field_brand.includes('Crewed'));
           updatesFieldDropdowns(filteredData);
           setSearchLink('/yachts/crewed-fleet');
         } else if(cType=='power_yachts'){
           let filteredData = data.filter(x=>x.field_brand.includes('Powered'));
           updatesFieldDropdowns(filteredData);
           setSearchLink('/yachts/power-fleet');
         }
         enableAllFields();
       } else if(ele.target.classList.contains('yacht-length-dd')){
         let yLength = ele.target.value;
         setFilterValues('length-filter', yLength);
         updateAllFields('ylength');
       } else if(ele.target.classList.contains('max-berth-dd')){
         let mBerth = ele.target.value;
         setFilterValues('max-berths-filter', mBerth);
         updateAllFields('maxberth');
       } else if(ele.target.classList.contains('cabins-dd')){
         let cabins = ele.target.value;
         setFilterValues('number-cabins-filter', cabins);
         updateAllFields('cabins');
       }
     });
     
     function setFilterValues(key, value){
       selectedFilterValues[key] = value;
       sessionStorage.setItem('selectedFilterValues', JSON.stringify(selectedFilterValues));
     }
     
     function setSearchLink(link){
       document.querySelector('.yatch-search').href = link;
     }
     
     function enableAllFields(){
       document.querySelector('.yacht-length-dd').removeAttribute('disabled');
       document.querySelector('.yacht-length-dd').parentElement.classList.remove('disabled');
       document.querySelector('.max-berth-dd').removeAttribute('disabled');
       document.querySelector('.max-berth-dd').parentElement.classList.remove('disabled');
       document.querySelector('.cabins-dd').removeAttribute('disabled');
       document.querySelector('.cabins-dd').parentElement.classList.remove('disabled');
       // document.querySelector('.yatch-search').removeAttribute('disabled');
       document.querySelector('.yatch-search').parentElement.classList.remove('disabled');
     }
     
     function updateAllFields(val) {
       let charterType = document.querySelector('.charter-type-dd').value;
       let yLengthVal = document.querySelector('.yacht-length-dd').value;
       let maxBerthval = document.querySelector('.max-berth-dd').value;
       let cabinsVal = document.querySelector('.cabins-dd').value;
       
       let filterObj = {
         'field_brand' : getFieldBrands(charterType),
         'field_type' : charterType.includes('monohulls') ? 'M' : 'X',
         'field_displayed_length': (yLengthVal !== yatchLengthText ) ? yLengthVal : '',
         'field_sleeps': (maxBerthval !== berthText) ? maxBerthval : '',
         'field_cabins': (cabinsVal !== cabinsText) ? cabinsVal : ''
       }
       let evalStatement = '';
       for(let keys in filterObj){
         if(filterObj[keys] !== '' && filterObj[keys] !=='All') {
           if(keys == 'field_sleeps') {
             evalStatement=evalStatement + `parseInt(x.${keys})>='${filterObj[keys]}'&&`;
           } else{
             evalStatement=evalStatement + `x.${keys}=='${filterObj[keys]}'&&`;
           }
         }
       }
       let filteredObj = eval(`window.data.yachts.filter(x=>${evalStatement.slice(0,-2)})`);
       if(val=='ylength'){
         updateMaxBerthsdd(filteredObj,'ddField');
         updateCabinsdd(filteredObj,'ddField');
       } else if(val=='maxberth') {
         updateYachtLengthdd(filteredObj,'ddField');
         updateCabinsdd(filteredObj,'ddField');
       } else if(val == 'cabins') {
         updateYachtLengthdd(filteredObj,'ddField');
         updateMaxBerthsdd(filteredObj,'ddField');
       }
     }
     
     function getFieldBrands(val) {
       let fieldBrand = (val=='sail_catamarans'||val=='sail_monohulls')?'Sailing':(val=='crewed_yachts'?'Crewed':(val=='power_yachts'?'Powered':''));
       return fieldBrand;
     }
     
     function updatesFieldDropdowns(filteredData){
       // [...new Set(filteredData.map(x=>x.field_displayed_length))];
       // Math.max(...filteredData.map(x=>parseInt(x.field_sleeps)));
       updateYachtLengthdd(filteredData,'all');
       updateMaxBerthsdd(filteredData,'all');
       updateCabinsdd(filteredData,'all');
     }
     
     function updateYachtLengthdd(filteredData,field){
       let yLengthVal = document.querySelector('.yacht-length-dd').value;
       clearAllDd('ylength');
       let lengthData = [...new Set(filteredData.map(x=>x.field_displayed_length))].sort();
       let ddEle = document.querySelector('.yacht-length-dd');
       lengthData.forEach(x=>{
         let option = `<option value="${x}">${x}</option>`;
         ddEle.insertAdjacentHTML('beforeend', option);
       });
       if(field=='ddField'){
         document.querySelector('.yacht-length-dd').value = yLengthVal; 
       }
     }
     
     function updateMaxBerthsdd(filteredData, field){
       let maxBerthval = document.querySelector('.max-berth-dd').value;
       clearAllDd('maxberth');
       let berthData = Math.max(...filteredData.map(x=>parseInt(x.field_sleeps)));
       let ddEle = document.querySelector('.max-berth-dd');
       for(var i=2;i<=berthData;i++){
         let option = `<option value="${i}">Up to ${i} passengers</option>`;
         ddEle.insertAdjacentHTML('beforeend', option);
       }
       if(field=='ddField'){
         document.querySelector('.max-berth-dd').value = maxBerthval; 
       }
     }
     
     function updateCabinsdd(filteredData, field){
       let cabinsVal = document.querySelector('.cabins-dd').value;
       clearAllDd('cabins');
       let cabinsData = [...new Set(filteredData.map(x=>x.field_cabins))].sort();
       let ddEle = document.querySelector('.cabins-dd');
       cabinsData.forEach(x=>{
         let option = `<option value="${x}">${x}</option>`;
         ddEle.insertAdjacentHTML('beforeend', option);
       });
        if(field=='ddField'){
         document.querySelector('.cabins-dd').value = cabinsVal; 
       }
     }
     
     function clearAllDd(val){
       if(val=='ylength') {
          document.querySelector('.yacht-length-dd').innerHTML='';
          document.querySelector('.yacht-length-dd').insertAdjacentHTML('afterbegin',`<option value="" selected="" disabled="true">${yatchLengthText}</option><option value="All">All</option>`);
       } else if(val=='maxberth') {
         document.querySelector('.max-berth-dd').innerHTML='';
         document.querySelector('.max-berth-dd').insertAdjacentHTML('afterbegin',`<option value="" selected="" disabled="true">${berthText}</option><option value="All">All</option>`);
       } else if(val=='cabins') {
         document.querySelector('.cabins-dd').innerHTML='';
         document.querySelector('.cabins-dd').insertAdjacentHTML('afterbegin',`<option value="" selected="" disabled="true">${cabinsText}</option><option value="All">All</option>`);
       } else {
         document.querySelector('.yacht-length-dd').innerHTML='';
          document.querySelector('.yacht-length-dd').insertAdjacentHTML('afterbegin',`<option value="" selected="" disabled="true">${yatchLengthText}</option><option value="All">All</option>`);
         document.querySelector('.max-berth-dd').innerHTML='';
         document.querySelector('.max-berth-dd').insertAdjacentHTML('afterbegin',`<option value="" selected="" disabled="true">${berthText}</option><option value="All">All</option>`);
         document.querySelector('.cabins-dd').innerHTML='';
         document.querySelector('.cabins-dd').insertAdjacentHTML('afterbegin',`<option value="" selected="" disabled="true">${cabinsText}</option><option value="All">All</option>`);
       }
     }
     
     function triggerChange(element,eve) {
         const event = new window.Event(eve, { bubbles: true });
        element.dispatchEvent(event);
     }   
     
     function getselectedFilters(){
       // let filterValues={
       //   'length-filter':'',
       //   'number-cabins-filter':'',
       //   'max-berths-filter':''
       // };
       let filterValues = JSON.parse(sessionStorage.getItem('selectedFilterValues'));
       // document.querySelector('#length-filter').value = 
       // document.querySelector('#number-cabins-filter');
       // document.querySelector('#max-berths-filter');
       filterValues['length-filter']=='All'?'':(document.querySelector('#length-filter').value = filterValues['length-filter'], triggerChange(document.querySelector('#length-filter'), 'change'));
       filterValues['number-cabins-filter']=='All'?'':(document.querySelector('#number-cabins-filter').value = filterValues['number-cabins-filter'],triggerChange(document.querySelector('#number-cabins-filter'), 'change'));
       filterValues['max-berths-filter']=='All'?'':(document.querySelector('#max-berths-filter').value = filterValues['max-berths-filter'],triggerChange(document.querySelector('#max-berths-filter'), 'change'));
       
     }
         
         
     waitFor(()=>{
       return document.querySelector('#main #search-widget') && document.querySelector('.ym_hero__heading');
     }, ()=>{
       init();
       console.log('in first');
       sessionStorage.removeItem('selectedFilterValues');
     })();
     
     if(location.pathname.includes('/yachts/')){
       waitFor(()=>{
         return document.querySelector('#moorings-yacht-yachts-list .holiduct-filters');
       }, ()=>{
         getselectedFilters();
         console.log('in yachts');
         document.querySelector('.holiduct-filters__wrapper .btn.btn-default').addEventListener('click', ()=>{
           sessionStorage.removeItem('selectedFilterValues');
         });
       })();
     }
   
   //personlaize data 
   waitFor(()=>{
    return document.querySelector('.ym_search__bar') && document.querySelector('.ym_hero__heading');
  }, ()=>{
    addSearchItem();
  })();

  function addSearchItem(){
    var tripData = JSON.parse(localStorage.getItem("homepage_pop"));
  if(tripData !== null){   
const retHtml = '<div class="homepage-visitordata-wrapper">'+
'<div class="visitordata-container-outer">'+
'<div class="visitordata-container">'+
'<div class="column1">'+
'<h5>Recently Viewed:</h5>'+
'</div>'+
'<div class="column2 eg-link" eg-href="'+tripData[2]+'">'+
'<h5><i class="fa fa-map-marker searched-locicon"></i>'+tripData[0]+'</h5>'+
'<p class="boat_name">'+tripData[1]+'</p>'+
'</div>'+
'</div>'+
'</div>'+
'</div>';
     if(window.screen.width > 1199 && !document.querySelector('.homepage-visitordata-wrapper')){
       
    document.querySelector('.ym_search__bar').insertAdjacentHTML('afterend', retHtml); 
     } 
     else if(!document.querySelector('.homepage-visitordata-wrapper')){
        document.querySelector('.ym_tiles').insertAdjacentHTML('beforebegin', retHtml); 
     }
document.querySelector('.eg-link').addEventListener('click',function(){
var url = this.getAttribute('eg-href');
if(url)
window.location.href = url;
});

}
  }
   
})();
//# sourceURL=test.js