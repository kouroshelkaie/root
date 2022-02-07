
// go up button
let btn = document.querySelector(".up_button")
window.addEventListener("scroll",()=>{
  if(window.scrollY > 1000) {
    btn.style.display = "block"
  } else{
    btn.style.display = "none"
  }
})

// portfolio filter search
let form = document.querySelector("#form")
const input = document.querySelector("#search")
let items = document.querySelectorAll("#searchItem")
let container = []

// push items too empty array
items.forEach((item)=>{
  container.push(item.textContent)
})
// dom function declaration
let dom = (filteredItems)=>{
  items.forEach((item)=>{
    item.style.backgroundColor = "#fff"
    item.style.color = "#333"
    filteredItems.forEach((ths)=>{
      if(item.textContent === ths) {
        item.style.backgroundColor = "#eb3b55"
        item.style.color = "#fff"
      } 
    })
  })
}

form.addEventListener('submit',(e)=>{
e.preventDefault()
  let inputValue = input.value
  let filteredItems = container.filter((item)=>{
    return item.includes(inputValue)
  })
  dom(filteredItems)
})

