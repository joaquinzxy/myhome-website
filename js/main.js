let featuredQuantity = 3;
let latestQuantity = 6;

function showFeatured(array, quantity){
    let featuredHouses = array.filter(house => house.highlight == "true")
    if(featuredHouses.length>quantity && quantity>0){
        featuredHouses = featuredHouses.slice(0, quantity)
    }
    console.log("<<"+featuredHouses)
    printHouses(featuredHouses, featuredContainer)
}

function showLatest(array, quantity){
    let latestHouses = []
    let housesLenght = array.length-1
    if(quantity>housesLenght){
        quantity = housesLenght+1
    }
    for (let i = 0; i < quantity; i++) {
        latestHouses.push(array[housesLenght])
        housesLenght--
    }
    printHouses(latestHouses, latestContainer)
}

let locationFilter = document.getElementById("location-select")
let typeFilter = document.getElementById("type-select")
let priceFilter = document.getElementById("price-select")
let filterButton = document.getElementById("filter-button")

function dataToFilter(){
    let location = locationFilter.value;
    let category = typeFilter.value;
    let price = priceFilter.value;
    window.location.href = `properties.html?search&location=${location}&category=${category}&price=${price}&`;
}

filterButton.addEventListener('click', function(){
    dataToFilter();
})

document.addEventListener('DOMContentLoaded', async function(){
    let houses = await getHouses(housesJson)
    setLocationsInSelect(houses)
    showFeatured(houses, featuredQuantity)
    showLatest(houses, latestQuantity)
})




