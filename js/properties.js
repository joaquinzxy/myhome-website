let filterToggleButton = document.getElementById("filter-button");
let searchButton = document.getElementById("search-button");
let asideBar = document.getElementsByTagName("aside")[0];

let sectionContainer = document.getElementById("section-container");
let propertiesContainer = document.getElementById("properties-container");

function showAllProperties() {
  propertiesContainer.innerHTML = "";
  printHouses(houses, propertiesContainer);
}

//Filters functions
function filterByLocation(housesArray, locationStr) {
  if (locationStr != "all") {
    let result = housesArray.filter(
      (house) => strFormat(house.location) == strFormat(locationStr)
    );
    return result;
  } else {
    return housesArray;
  }
}

function filterByCategory(housesArray, categoryStr) {
  if (categoryStr != "all") {
    let result = housesArray.filter(
      (house) => strFormat(house.category) == strFormat(categoryStr)
    );
    return result;
  } else {
    return housesArray;
  }
}

function filterByPrice(housesArray, priceRange) {
    let minPrice = 0
    let maxPrice = 99999999

    if(priceRange[0]>0){
        minPrice = priceRange[0]
    }

    if (priceRange[1]>0) {
        maxPrice = priceRange[1]
    }
    
    let result = housesArray.filter((house) => parseInt(house.price) >= minPrice && parseInt(house.price) <= maxPrice);
    return result;
}

let locationFilter = document.getElementById("location-select");
let typeFilter = document.getElementById("type-select");
let minPriceFilter = document.getElementById("price-select-min")
let maxPriceFilter = document.getElementById("price-select-max")


function executeFilter(location = "all", category = "all", price = [0, 99999999]) {
  let locationResult = filterByLocation(houses, location);
  let typeResult = filterByCategory(Object.values(locationResult), category);
  let priceResult = filterByPrice(Object.values(typeResult), price)
  let finalResult = priceResult;
  printHouses(finalResult, propertiesContainer);
}

function resetFilter(){
    locationFilter.value = 'all';
    typeFilter.value = 'all';
    minPriceFilter.value = "" 
    maxPriceFilter.value = ""
    executeFilter()
}

function getDataURL() {
    let urlParams = new URLSearchParams(window.location.href);
  
    let priceFilterValue = JSON.parse(urlParams.get("price"))
  
    locationFilter.value = urlParams.get("location");
    typeFilter.value = urlParams.get("category");
    priceFilterValue[0]== 0 ? minPriceFilter.value = '' : minPriceFilter.value = priceFilterValue[0] 
    priceFilterValue[1]== 9999999 ? maxPriceFilter.value = '' : maxPriceFilter.value = priceFilterValue[1]
  
    executeFilter(
      urlParams.get("location"),
      urlParams.get("category"),
      priceFilterValue
    );
  }

sectionContainer.addEventListener("click", function () {
  asideBar.classList.toggle("hidden");
});

searchButton.addEventListener("click", function () {
  asideBar.classList.toggle("hidden");
  executeFilter(locationFilter.value, typeFilter.value, [minPriceFilter.value, maxPriceFilter.value]);

});

burgerButton.addEventListener("click", function () {
  asideBar.classList.value = "hidden";
});

filterToggleButton.addEventListener("click", function () {
  asideBar.classList.toggle("hidden");
});

document.addEventListener("DOMContentLoaded", async function () {
  let houses = await getHouses(housesJson);
  setLocationsInSelect(houses)
  showAllProperties();
  if (window.location.search) {
   getDataURL();
  }
});
