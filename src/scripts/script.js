
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

// About container
ScrollReveal().reveal(".about__content .section__header", ScrollReveal10ption);

ScrollReveal().reveal(".about__content .section__subheader", {
    ...ScrollReveal10ption,
    delay: 300,
});

ScrollReveal().reveal(".about__image", {
    ...ScrollReveal10ption,
    delay: 300, 
});

ScrollReveal().reveal(".about__content .about__flex", {
    ...ScrollReveal10ption,
    delay: 700,
});
ScrollReveal().reveal(".about__content .btn", {
    ...ScrollReveal10ption,
    delay: 900,
});
// Discover container
ScrollReveal().reveal(".discover__card", {
    ...ScrollReveal10ption,
    interval: 500,
})
ScrollReveal().reveal(".discover__card__content", {
    ...ScrollReveal10ption,
    interval: 500,
    delay: 300,
})
