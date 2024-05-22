/****** Loading ******/
/****** 페이지 로딩 구간 ******/

window.addEventListener('load', function() {
    // 페이지가 완전히 로드되었을 때 로딩 화면을 숨김
    document.getElementById('loading-screen').style.display = 'none';
});


/****** index mainTxt show ******/

document.addEventListener("DOMContentLoaded", function () {
    var pElement = document.querySelector(".index-main-text .show1");

    function showP() {
        setTimeout(function () {
            pElement.classList.add("show");
        }, 1);
    }

    showP();
});

document.addEventListener("DOMContentLoaded", function () {
    var pElement = document.querySelector(".index-main-text .show2");

    function showP() {
        setTimeout(function () {
            pElement.classList.add("show");
        }, 1);
    }

    showP();
});


/****** index main Bottom ******/
/****** 곡선 > 직선 이벤트 ******/

gsap.registerPlugin(ScrollTrigger);
gsap.to("#shape", {
    scrollTrigger: {
        trigger: "#shape",
        start: "top 30%", // 요소의 상단이 닿을 때 스크롤 이벤트 트리거
        end: "bottom 80%", // 요소의 하단이 닿을 때 스크롤 이벤트 트리거
        scrub: true,
        markers: true
    },
    width: "120%",
    height: "800px",
    borderRadius: "0%",
    duration: 2
});


/****** index horizontal lookbook ******/

if (innerWidth > 430) {
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
    }
/***** index zoom in ******/
const { innerHeight } = window;
    if (innerWidth > 1100) {

    gsap.to(".zoom-in .logo", {
        scale: 100, stagger: 0.25, duration: 3,
        scrollTrigger: {
            trigger: ".zoom-in",
            pin: true,
            // start: "10%",
            end: `+=${innerHeight * 1.5}`,
            scrub: 10
            // markers: true
        }
    });

    gsap.to(".slogan-wrapper", {
        duration: 1,
        opacity: 1,
        y: -250,
        ease: "easeOutExpo",
        scrollTrigger: {
            trigger: ".slogan",
            start: "top bottom",
            end: "center center",
            scrub: 1
        }
    });
}
