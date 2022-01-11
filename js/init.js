//Setting burger button and nav
let burgerButton = document.getElementById("burger");
let mainNav = document.getElementById("main-nav");

let locationSelector = document.getElementById("location-select")
let featuredContainer = document.getElementById("featured-container");
let latestContainer = document.getElementById("latest-container")

burgerButton.addEventListener('click', function(){
    this.classList.toggle('open');
    mainNav.classList.toggle('hidden');
})


//Setting Arrays for HousesData
let housesJson = "js/houses.json";
let housesLocations = []
let houses = [];


//Getting houses json
function getHouses(url){
    return fetch(url)
    .then(response=>{
        return response.json().then(response=>{
            houses = response;
            housesLocations = [...new Set(houses.map(house=>house.location))]
            housesLocations.forEach(location => {
                locationSelector.innerHTML+=`<option value="${strFormat(location)}">${location}</option>`
            });
            return houses;
        })
    })
}

function printHouses(array, canva){
    canva.innerHTML = ""
    if(array.length>0){
        array.forEach(house => {
            canva.innerHTML += `
            <a href='#' class="prop-card">
                <div class="card-header">
                    <img src="${house.images[0]}" alt="">
                </div>
                <div class="card-footer">
                    <h4 class="hl-text">${priceFormat(house.price)}</h4>
                    <h3>${house.title}</h3>
                    <p>${house.desc}</p>
                </div>
            </a>
            `
        });
    } else {
       canva.innerHTML = `
                <div class="no-results">
                    <h3>Lo sentimos, no hay propiedades que coincidan con la búsqueda :(</h3>
                    <div>
                        <a class="squared-btn" onclick="resetFilter()">RESETEAR FILTRO</a>
                    </div>
                </div>
            `
    }

}


//return price with dots and symbol (function stolen and modified from https://stackoverflow.com/questions/2901102/how-to-print-a-number-with-commas-as-thousands-separators-in-javascript )
const priceFormat  = price => "$"+(price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, "."));
const strFormat = str => (str.normalize("NFD").replace(/[\u0300-\u036f]/g, "")).toLowerCase();

