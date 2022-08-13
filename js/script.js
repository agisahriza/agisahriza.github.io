// navbar fix
window.addEventListener("scroll", () => {
    const nav = document.querySelector("nav");
    
    if(window.pageYOffset > 20) {
        nav.classList.add("nav-fixed");
    } else {
        nav.classList.remove("nav-fixed");
    }
})