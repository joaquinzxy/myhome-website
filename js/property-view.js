let housesData = getHouses(housesJson)

let imgSelector = document.getElementsByClassName("img-selector")
let mainImage = document.getElementById("main-img")

for (const image of imgSelector) {
    image.addEventListener('click', function(){
        console.log(this)
        mainImage.src = this.dataset.imageurl
    })
}

function getDataURL(){
    let urlParams = new URLSearchParams(window.location.href);
    let houseId = urlParams.get("id")
    showPropertyInfo(houseId)
}

function showPropertyInfo(id){
    let propertyTitle = document.getElementById("property-title")
    propertyTitle.innerText = houses[id].title
}

document.addEventListener("DOMContentLoaded", async function () {
    if (window.location.search) {
     getDataURL();
    }
  });