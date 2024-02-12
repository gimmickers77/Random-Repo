//Home Page
const home = document.querySelector("#home");
const bg1 = document.querySelector("#bg-compo-1");
const bg2 = document.querySelector("#bg-compo-2");

home.addEventListener("mouseenter", () => {
    gsap.to(bg1, {
        scale: 1,
        opacity: 1
    })
    gsap.to(bg2, {
        scale: 1,
        opacity: 1
    })
})

home.addEventListener("mouseleave", () => {
    gsap.to(bg1, {
        scale: 0,
        opacity: 0
    })
    gsap.to(bg2, {
        scale: 0,
        opacity: 0
    })
})


home.addEventListener("mouseover", (coordinates) => {
    // console.log("x", coordinates.x);
    // console.log("y", coordinates.y);
    gsap.to(bg2, {
        scale: 1,
        opacity: 1,
        x: coordinates.x/6,
        y: coordinates.y/6,
        ease: "back"
    })
    gsap.to(bg1, {
        scale: 1,
        opacity: 1,
        x: coordinates.x/3,
        y: coordinates.y/3,
        ease: "power3.out"
    })
})





const tl = gsap.timeline();
tl.to(bg1,{scale:1, duration:0.1, opacity: 1});
tl.to(bg2,{scale:1, duration:0.1, opacity: 1});
tl.from("#navbar", {y:-100, duration:1});
tl.from("#hero-text", {duration:0.5, opacity: 0});
tl.from("#hero-img", {duration: 0.7, opacity: 0});




gsap.registerPlugin(ScrollTrigger);
gsap.to("#hero", {
    translateY: 200,
    opacity: 0,
    scrollTrigger: {
        trigger:"#home",
        // markers: true,
        start: "bottom 70%",
        end:"bottom start",
        scrub: 1
    }
})

// sticky top-[8px] backdrop-blur-sm shadow-md
gsap.registerPlugin(ScrollTrigger);
gsap.to("#navbar", {
    backgroundColor: "rgb(2,48,37,0.8)",
    scale: 0.99,
    borderRadius: "10",
    scrollTrigger: {
        trigger: "#home",
        // markers: true,
        start: "70% center",
        end: "80% center",
        scrub: 2
    }
})

const year = new Date().getFullYear();
console.log(year);

document.querySelector("#year").innerText = year;