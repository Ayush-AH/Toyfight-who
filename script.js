var main =document.querySelector("#main");
var img =document.querySelector("#page1>img");
main.addEventListener("mousemove",function(dets) {
    img.style.top =1- dets.y*0.05  + "px"; 
    img.style.left =1- dets.x*0.05  + "px"; 
})
gsap.to("#page1 #nav a",{
    y:-80,
    duration:1,
    stagger:0.2,
    scrollTrigger:{
        trigger:"#page1>h1",
        scroller:"body",
        // markers:true,
        start:"top 32%",
        end:"top 29%",
        scrub:2
    }
})

gsap.from("#page1>h1",{
    y:-100,
    duration:1,
    scrollTrigger:{
        trigger:"h1",
        scroller:"body",
        // markers:true,
        start:"top 35%",
        end:"top 30%",
        scrub:2
    }
})

gsap.to("#page1>img,#page1>h1 ",{
    opacity:0,
    duration:1,
    scrollTrigger:{
        trigger:"h1",
        scroller:"body",
        // markers:true,
        start:"top 11%",
        end:"top 8%",
        scrub:2
    }
})

gsap.from("#page2>h6,#page2>h1,#page2>h4",{
    y:40,
    opacity:0,
    duration:1,
    scrollTrigger:{
        trigger:"h6",
        scroller:"body",
        // markers:true,
        start:"top 88%",
        end:"top 84%",
        scrub:1
    }
})
gsap.from("#page3 #img1 ",{
    y:-90,
    opacity:0,
    duration:1,
    scrollTrigger:{
        trigger:"#page3",
        scroller:"body",
        // markers:true,
        start:"top 30%",
        end:"top 25%",
        scrub:3
    }
})
gsap.from("#page3 #img2,#page3>h6,#page3>h1",{
    y:70,
    opacity:0,
    duration:1,
    scrollTrigger:{
        trigger:"#page3",
        scroller:"body",
        // markers:true,
        start:"top 30%",
        end:"top 25%",
        scrub:3
    }
})
gsap.from("#page6 #i1,#page6 #i2",{
    y:150,
    opacity:0,
    duration:2,
    scrollTrigger:{
        trigger:"#page6",
        scroller:"body",
        // markers:true,
        start:"top 80%",
        end:"top 75%",
        scrub:3
    }
})