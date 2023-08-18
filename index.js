const btn = document.querySelector("#burger_btn"),
menu =document.querySelector(".navbar_nav"),
btnMenu =document.querySelector("#burger_btn_x")

btn.addEventListener('click' , () => {
    menu.classList.add("active")
})
btnMenu.addEventListener('click' , () => {
    menu.classList.remove("active")
})

