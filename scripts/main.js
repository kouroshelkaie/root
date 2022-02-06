
// go up button
let btn = document.querySelector(".up_button")
window.addEventListener("scroll",()=>{
  if(window.scrollY > 1000) {
    btn.style.display = "block"
  } else{
    btn.style.display = "none"
  }
})
