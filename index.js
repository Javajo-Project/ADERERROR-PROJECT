/****** index horizontal lookbook ******/

const container=document.querySelector('.index-collabo-horizontal');
const sections = gsap.utils.toArray('.index-collabo-horizontal .index-collabo-horizontalwrapper1');
const texts=gsap.utils.toArray('.index-collabo-horizontaltext');

let scrollTween=gsap.to(sections,{
    xPercent:-100*(sections.length-1),
    ease:"none",
    scrollTrigger:{
        trigger:".index-collabo-horizontal",
        pin:true,
        scrub:1,
        end:"+=3000",
    }
})
sections.forEach(section=>{
    let text=section.querySelector('.index-collabo-horizontaltext');
    
    gsap.from(text,{
        y:-130,
        opacity:0,
        duration:1,
        ease:"none",
        stagger:0.5,
        scrollTrigger:{
            trigger:section,
            containerAnimation:scrollTween,
            start:"left center",
            markers:false
        }
    })
})
/***** index zoom in ******/
const { innerHeight } = window;

// zoom-in
gsap.to("#zoom-in .logo", {
    scale: 70, stagger: 0.25, duration: 10, /*3*/
    scrollTrigger: {
        trigger: "#zoom-in",
        pin: true,
        end: `+=${innerHeight * 2}`, /*1.3*/
        scrub: 3
    }
});