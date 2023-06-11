document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("hamburger").addEventListener("click", () => {
        document.getElementById("hamburger-menu").classList.toggle("hamburger-active")
    })
})