let featuredQuantity = 3;
let latestQuantity = 6;

function showFeatured(array, quantity){
    let featuredHouses = array.filter(house => house.highlight == "true")
    if(featuredHouses.length>quantity && quantity>0){
        featuredHouses = featuredHouses.slice(0, quantity)
    }
    printHouses(featuredHouses, featuredContainer)
}

function showLatest(array, quantity){
    console.log(array)
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

document.addEventListener('DOMContentLoaded', async function(){
    let casas = await getHouses(housesJson)
    showFeatured(casas, featuredQuantity)
    showLatest(casas, latestQuantity)
})




