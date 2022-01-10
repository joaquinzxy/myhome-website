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
    let result = housesArray.filter(house=> strFormat(house.location) == strFormat(locationStr))
    return result;
}

function filterByCategory(housesArray, categoryStr){
    let result = housesArray.filter(house=> strFormat(house.category) == strFormat(categoryStr))
    return result;
}

function filterByPrice(housesArray, priceRange){
    let result = housesArray.filter(house=> parseInt(house.price)>priceRange[0] && parseInt(house.price)<priceRange[1])
    return result;
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