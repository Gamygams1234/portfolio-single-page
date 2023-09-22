const form = document.querySelector(".form"); 
const input = document.querySelectorAll(".form__input"); 
const errorMsg = document.querySelectorAll(".form__error-msg"); 
const errorIcon = document.querySelectorAll(".form__error-icon");


form.addEventListener("submit", (e) => {
    reset(); 
    let mailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (input[0].value.length === 0) {
        e.preventDefault(); 
        input[0].classList.add("form__input--error-underline")
        errorMsg[0].classList.add("visible")
        errorIcon[0].classList.add("visible")
    }
    if (!input[1].value.match(mailRegex)) {
        e.preventDefault(); 
        input[1].classList.add("form__input--error-underline")
        errorMsg[1].classList.add("visible")
        errorIcon[1].classList.add("visible")
    }
    if (input[2].value.length === 0) {
        e.preventDefault(); 
        input[2].classList.add("form__input--error-underline")
        errorMsg[2].classList.add("visible")
        errorIcon[2].classList.add("visible")
    }
})

function reset() {
    input.forEach((input, index) => {
        input.classList.remove("form__input--error-underline"); 
        errorMsg[index].classList.remove("visible");
        errorIcon[index].classList.remove("visible"); 
    })
}


// Toggle Mobile Menu

// GSAP Animations
gsap.registerPlugin(ScrollTrigger)
const timeline = gsap.timeline({
    defaults: {
        duration: 1
    }
})

// timeline
//     .from('.hero__avatar', {
//         x: '100vw',
//         opacity: 0
//     }, .1)
//     .from('.hero__text-content', {
//         x: '-120%',
//         opacity: 0
//     }, .2)
//     .from('.nav__icon', {
//         opacity: 0,
//         stagger: .2
//     })


// // opacity left to right

ScrollTrigger.batch(".skill", {
    start: "top bottom",
    once: true,
    onEnter: (elements, triggers) => {
        gsap.from(elements, {
                opacity: 0,
                stagger:.5,
                duration: 2
            })
    }
})

// fade up
ScrollTrigger.batch(".project", {
    start: "top bottom",
    once: true,
    onEnter: (elements, triggers) => {
        gsap.from(elements, {
                opacity: 0,
            y: '200%',  stagger:.5,
                duration: .5
            })
    }
})