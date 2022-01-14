let housesData = []

let imgSelector = document.getElementsByClassName("img-selector")
let mainImage = document.getElementById("main-img")

let featuresIcons = {
    Capacidad: '<i class="fas fa-bath"></i>',
    Plantas: '<i class="fas fa-home"></i>',
    Tamaño: '<i class="fas fa-vector-square"></i>',
    Patio: '<i class="fab fa-pagelines"></i>',
    Cuartos: '<i class="fas fa-bed"></i>',
    Baños: '<i class="fas fa-bath"></i>',
    Garage: '<i class="fas fa-warehouse"></i>',
    Equipada: '<i class="fas fa-couch"></i>',
    Parrillero: '<i class="fab fa-free-code-camp"></i>'
}

for (const image of imgSelector) {
    image.addEventListener('click', function(){
        console.log(this)
        mainImage.src = this.dataset.imageurl
    })
}

function viewImagesEvents(){
    let imgSelector = document.getElementsByClassName("img-selector")
    let mainImage = document.getElementById("main-img")

    for (const image of imgSelector) {
        image.addEventListener('click', function(){
            console.log(this)
            mainImage.src = this.dataset.imageurl
    })
}
}

function getDataURL(){
    let urlParams = new URLSearchParams(window.location.href);
    let houseId = urlParams.get("id")
    showPropertyInfo(houseId)
}

function showPropertyInfo(id){
    let propertyTitle = document.getElementById("property-title")
    let propertyDesc = document.getElementById("property-desc")
    let mainImage = document.getElementById("main-img")
    let imageSelectorGroup = document.getElementById("image-selector-group")
    let extraDataContainer = document.getElementById("extra-data")

    propertyTitle.innerText = houses[id].title
    propertyDesc.innerText = houses[id].desc
    mainImage.src = houses[id].images[0]
    for (const feature in houses[id].features ) {
        if (Object.hasOwnProperty.call(houses[id].features , feature)) {
            const featureData = houses[id].features [feature];
            extraDataContainer.innerHTML +=`
                <div class="extra-data-group">
                    <div class="extra-data-label">${'<span class="hl-text">'+featuresIcons[feature] +'</span> '+ feature}:</div>
                    <div class="extra-data-info">${featureData}</div>
                </div>
                `
        }
    }
    
    houses[id].images.forEach(image => {
        imageSelectorGroup.innerHTML += `<a href="#" class="img-selector" data-imageURL="${image}" ><img src="${image}" alt=""></a>`
    });

    viewImagesEvents();
}

document.addEventListener("DOMContentLoaded", async function () {
    if (window.location.search) {
    housesData = await getHouses(housesJson)
     getDataURL();
    }
  });