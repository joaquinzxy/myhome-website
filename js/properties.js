let propertiesContainer = document.getElementById("properties-container")

function showProperties(){
    propertiesContainer.innerHTML = ""
    printHouses(houses, propertiesContainer)
}


document.addEventListener('DOMContentLoaded', async function(){
    await getHouses(housesJson)
    showProperties()
})