let inpFetch = document.getElementById("inp")
let btnFetch = document.getElementById("btn")
let url = ""
let response = ""
let convertedResponse = ""
let element = ""
let searchItem = ""
let returnSearch = ""
let currentlyTyping = ""
let country = ""
let splicing = ""
let indexOrigin =""
let element2 = ""
inp.value = ""
scnd.style.display = "none"
ul.innerHTML = `<b class="mt-3">The space provided above is for you to enter a name of a Country that you know to have more knowledge about the Country.</b><h2>Tainkiu.</h2>`
inpFetch.addEventListener("input", async()=>{
  btn.style.display = "block"
    searchItem = inp.value
    url = "https://restcountries.com/v3.1/all"
    response = await fetch(url)
    convertedResponse = await response.json();
    // console.log(convertedResponse);
    ul.innerHTML = ""
    for (let index = 0; index < convertedResponse.length; index++) {
         element = convertedResponse[index];  

        }
        returnSearch = convertedResponse.filter(country => country.name.common.includes(searchItem) )
        for (let index = 0; index < returnSearch.length; index++) {
            element2 = returnSearch[index];
            indexOrigin = index
            // console.log(element2.name.common);
            // console.log(element2);
            ul.innerHTML += `
            <li data-index="${indexOrigin}" onclick="handleClick(${indexOrigin})" id="lii" class="list-group-item text-left animate__zoomIn animate__animated">${element2.flag }${ element2.name.common} <small><b>${element2.cca2 }</b></small></li>
            `
        }


})
const show =()=>{
  scnd.style.display = "block"
    for (let index = 0; index < returnSearch.length; index++) {
        // console.log(country);
        let element = returnSearch[index];
        // console.log(element);  
        ul.innerHTML = ""
        ul.innerHTML += ` <li class = "list-group-item text-left animate__zoomIn animate__animated">${element.flag } ${element.name.common} <small><b>${element.cca2 }</b></small></li> `
       }
}
btnFetch.addEventListener("click", async()=>{
    if(inp.value === ""){
        ul.innerHTML += ` <li>
        <div class="notifications-container">
        <div class="error-alert">
        <div class="flex">
        <div class="flex-shrink-0">
        
        <svg aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" class="error-svg">
              <path clip-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" fill-rule="evenodd"></path>
            </svg>
          </div>
          <div class="error-prompt-container">
          <p class="error-prompt-heading"> Enter a Country name 
          </p><div class="error-prompt-wrap">
          <ul class="error-prompt-list" role="list">
          <li>Please be case sensitive</li>
          </ul>
          </div>
          </div>
          </div>
          </div>
          </div></li> `
        }
        returnSearch = convertedResponse.filter(country => country.name.common === searchItem);
        if(returnSearch.length == 0 ){

    ul.innerHTML = ` <li>
    <div class="notifications-container">
  <div class="error-alert">
    <div class="flex">
      <div class="flex-shrink-0">
        
        <svg aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" class="error-svg">
          <path clip-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" fill-rule="evenodd"></path>
        </svg>
      </div>
      <div class="error-prompt-container">
        <p class="error-prompt-heading">${searchItem} is not a country
        </p><div class="error-prompt-wrap">
          <ul class="error-prompt-list" role="list">
            <li>Please be case sensitive</li>
          </ul>
      </div>
      </div>
    </div>
  </div>
</div></li> `
   }

   else{
   show();
}
  
});

 
 function handleClick(internal) {
  btn.style.display = "none"
   console.log(convertedResponse);
   scnd.style.display = "block"
   // console.log(returnSearch[internal]);
   element = returnSearch[internal]
   inp.value = element.name.common
  ul.innerHTML = ""
  ul.innerHTML += ` <li class = "list-group-item text-left animate__zoomIn animate__animated">${element.flag } ${element.name.common} <small><b>${element.cca2 }</b></small></li> `


  scndsh.innerHTML = `
  <img style= "width: 80px; height: 80px;" src="${element.coatOfArms.png}" alt="">
  <div class="col-11">
  <h6><small id="smallin">Population:</small> <b class="smallout text-left">${ element.population}</b></h6>
  <h6><small id="smallin">Independent:</small> <b class="smallout text-left">${ element.independent}</b></h6>
  <h6><small id="smallin">Capital:</small> <b class="smallout text-left">${ element.capital[0]}</b></h6>
  <h6><small id="smallin">Timezones:</small> <b class="smallout text-left">${ element.timezones[0]}</b></h6>
  <h6><small id="smallin">Population:</small> <b class="smallout text-left">${ element.population}</b></h6>

  </div>

  `

         }
