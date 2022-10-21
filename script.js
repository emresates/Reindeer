// Home Screen Effects
gsap.to(".overlay h1", 2, {
    opacity: 0,
    y: -60,
    ease: Expo.easeInOut
})

gsap.to(".overlay span", 2, {
    delay: .3,
    opacity: 0,
    y: -60,
    ease: Expo.easeInOut
})

gsap.to(".overlay", 2, {
    delay: 1,
    top: "-110%",
    ease: Expo.easeInOut
})

gsap.from(".ellipse-container", 1, {
    delay: 2,
    opacity: 0,
    ease: Expo.easeInOut
})

gsap.from(".yellow", 1, {
    delay: 3.5,
    opacity: 0,
    ease: Expo.easeInOut
})

gsap.from(".circle1", 1, {
    delay: 2.4,
    opacity: 0,
    ease: Expo.easeInOut
})

gsap.from(".circle2", 1, {
    delay: 2.6,
    opacity: 0,
    ease: Expo.easeInOut
})

gsap.from(".logo", 1, {
    delay: 3,
    opacity: 0,
    y:-100,
    ease: Expo.easeInOut
})

gsap.from(".menu-links ul li", 1, {
    delay: 3.2,
    opacity: 0,
    x:-100,
    ease: Expo.easeInOut
})

gsap.from(".text .title", 1, {
    delay: 3,
    opacity: 0,
    x:200,
    ease: Expo.easeInOut
})

gsap.from(".text ", 1, {
    delay: 3.2,
    opacity: 0,
    x:200,
    ease: Expo.easeInOut
})

gsap.from(".watchnow ", 1, {
    delay: 3.4,
    opacity: 0,
    x:200,
    ease: Expo.easeInOut
})

gsap.from(".media ul li ", 1, {
    delay: 3,
    opacity: 0,
    y:100,
    ease: Expo.easeInOut
})

// Slider
var slider = new Swiper(".swiper-container", {
    slidesPerView: "auto",
    spaceBetween: 20,
    mousewheel: true,
    centeredSlides:true
})

slider.on("slideChange", function () {

    gsap.to(".slide-number span", .2, {
        x: "-100px"
    })
    gsap.to(".swiper-slide-active", .5, {
        scale: .85
    })
})

slider.on("slideChangeTransitionEnd", function () {

    gsap.to(".slide-number span", .2, {
        x: "0",
        delay: .7
    })

    gsap.to(".slide-number span", 0, {
        x: "100px",
    })

    gsap.to(".swiper-slide-active", .5, {
        scale: 1,
        ease: Power4.easeOut
    })
})

gsap.to(".swiper-slide", 0, {
    scale: .85
})
gsap.to(".swiper-slide-active", 0, {
    scale: 1
})

// Navbar section
var galleryBtnHome = document.querySelector("#galleryHome")
var contactBtnHome = document.querySelector("#contactHome")

var homeBtnGallery = document.querySelector("#homeGallery")
var contactBtnGallery = document.querySelector("#contactGallery")

var homeBtnContact = document.querySelector("#homeContact")
var galleryBtnContact = document.querySelector("#galleryContact")

var homePage = document.querySelector(".wrapper")
var gallery = document.querySelector(".container")
var contact = document.querySelector(".contact")

galleryBtnHome.addEventListener("click", () => {
    homePage.classList.add("changed")
    gallery.classList.add("changed")
    contact.classList.remove("changed")    
})

contactBtnHome.addEventListener("click",()=> {
    homePage.classList.add("changed")
    contact.classList.add("changed")
    gallery.classList.remove("changed")
})

homeBtnGallery.addEventListener("click",()=> {
    homePage.classList.remove("changed")
    gallery.classList.remove("changed")
    contact.classList.remove("changed")
})

contactBtnGallery.addEventListener("click",()=> {
    contact.classList.add("changed")
    gallery.classList.remove("changed")
    home.classList.add("changed")
})

homeBtnContact.addEventListener("click",()=> {
    homePage.classList.remove("changed")
    gallery.classList.remove("changed")
    contact.classList.remove("changed")
})

galleryBtnContact.addEventListener("click",()=> {
    gallery.classList.add("changed")
    contact.classList.remove("changed")
    home.classList.add("changed")
})

// Youtube Video Section
var videoBtn = document.querySelector("#video")
var video= document.querySelector("iframe")
var bg = document.querySelector(".background-all")

videoBtn.addEventListener("click", ()=>{
    video.style.display = "block"
})

bg.addEventListener("click", ()=> {
    video.style.display = "none"
})