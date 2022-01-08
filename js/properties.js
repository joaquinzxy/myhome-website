let filterToggleButton = document.getElementById("filter-button")
let searchButton = document.getElementById("search-button")
let asideBar = document.getElementsByTagName("aside")[0]

let propertiesContainer = document.getElementById("properties-container")

function showProperties(){
    propertiesContainer.innerHTML = ""
    printHouses(houses, propertiesContainer)
}

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