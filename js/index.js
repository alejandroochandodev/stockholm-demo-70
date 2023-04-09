
const headerHamburguesa = document.querySelector(`.Header-hamburguesa`)

const mobile = document.querySelector(`.mobile`)

headerHamburguesa.addEventListener(`click` , () => {
    mobile.classList.toggle(`isActive`)
})