let burgerButton = document.getElementById("burger")
let mainNav = document.getElementById("main-nav")

burgerButton.addEventListener('click', function(){
    this.classList.toggle('open')
    mainNav.classList.toggle('hidden')
})