let filterToggleButton = document.getElementById("filter-button")
let searchButton = document.getElementById("search-button")
let asideBar = document.getElementsByTagName("aside")[0]

let sectionContainer = document.getElementById("section-container")
let propertiesContainer = document.getElementById("properties-container")

function showProperties(){
    propertiesContainer.innerHTML = ""
    printHouses(houses, propertiesContainer)
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
    showProperties()
})