// open sidebar
const menu = document.querySelector(".header_navigation_menu")
const dropdown = document.querySelector(".dropdown_container")
const opendp = document.querySelector("#opendp")

function sidebar(){
    menu.style.left = "0%"
    document.body.style.overflow = "hidden"
    menu.style.position = "fixed"
}

// close sidebar
function closeSidebar (){
    menu.style.left = "-100%"
    dropdown.style.display = "none"
}


// dropdown submenu
opendp.addEventListener('click',()=>{
    dropdown.style.display = "block"
})

