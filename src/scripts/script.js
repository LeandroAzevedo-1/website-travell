
const ScrollReveal10ption = {
    origin: 'bottom',
    distance: '50px',    
    duration: 1500, 
    reset: true  
}
//Header container
ScrollReveal().reveal(".header__container h1", ScrollReveal10ption);

ScrollReveal().reveal(".header__container h4", {
    ...ScrollReveal10ption,
    delay: 500, 
});
ScrollReveal().reveal(".header__container .btn", {
    ...ScrollReveal10ption,
    delay: 1000, 
});
