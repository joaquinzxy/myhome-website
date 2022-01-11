let filterToggleButton = document.getElementById("filter-button")
let searchButton = document.getElementById("search-button")
let asideBar = document.getElementsByTagName("aside")[0]

let sectionContainer = document.getElementById("section-container")
let propertiesContainer = document.getElementById("properties-container")

function showAllProperties(){
    propertiesContainer.innerHTML = ""
    printHouses(houses, propertiesContainer)
}

//Filters functions
function filterByLocation(housesArray, locationStr){
    if(locationStr!="all"){
        let result = housesArray.filter(house=> strFormat(house.location) == strFormat(locationStr))
        return result
    } else {
        return housesArray;
    }
}

function filterByCategory(housesArray, categoryStr){
    console.log(typeof(housesArray))
    if(categoryStr!="all"){
        let result = housesArray.filter(house=> strFormat(house.category) == strFormat(categoryStr))
        return result
    } else {
        return housesArray
    }
}

function filterByPrice(housesArray, priceRange){
    if(priceRange!="all"){
        let result = housesArray.filter(house=> parseInt(house.price)>priceRange[0] && parseInt(house.price)<priceRange[1])
        return result
    } else {
        return housesArray
    }
}

let locationFilter = document.getElementById("location-select")
let typeFilter = document.getElementById("type-select")
let priceFilter = document.getElementById("price-select")

function executeFilter(){
    let locationResult = filterByLocation(houses, locationFilter.value)
    let typeResult = filterByCategory(Object.values(locationResult), typeFilter.value)
    let finalResult = typeResult
    printHouses(finalResult, propertiesContainer)
    return finalResult
}

sectionContainer.addEventListener('click', function(){
    asideBar.classList.toggle("hidden")
})

searchButton.addEventListener('click', function(){
    asideBar.classList.toggle("hidden")
})

burgerButton.addEventListener('click', function(){
    asideBar.classList.value = "hidden"
})


filterToggleButton.addEventListener('click', function(){
    asideBar.classList.toggle("hidden")
})

document.addEventListener('DOMContentLoaded', async function(){
    await getHouses(housesJson)
    showAllProperties()
})