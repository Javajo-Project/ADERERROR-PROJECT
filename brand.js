/****** brand logo showUp ******/
document.addEventListener("DOMContentLoaded", function() {
  var main = document.querySelector(".brand-main-logo");

  function showLogo() {
    main.classList.remove("show");
    requestAnimationFrame(function() {
      main.classList.add("show");
    });
  }

  showLogo();
});

/****** brand mainTxt show ******/
document.addEventListener("DOMContentLoaded", function() {
  var pElement = document.querySelector(".brand-main-txt");

  function showP() {
    setTimeout(function() {
      pElement.classList.add("show");
    }, 20);
  }

  showP();
});

/****** brand mainImg showUp ******/
document.addEventListener("DOMContentLoaded", function() {
  var main = document.querySelector(".brand-main-img");

  function showImg() {
    main.classList.remove("show");
    requestAnimationFrame(function() {
      main.classList.add("show");
    });
  }

  showImg();
});


/* 직선 -> 곡선 이벤트 */
/****** brand mainBottom wrapper ******/
gsap.registerPlugin(ScrollTrigger);

gsap.to("#shape", {
  scrollTrigger: {
    trigger: "#shape",
    start: "top 50%", // 요소의 상단이 닿을 때 스크롤 이벤트 트리거
    end: "bottom 80%", // 요소의 하단이 닿을 때 스크롤 이벤트 트리거
    scrub: true,
    markers: false
  },
  width: "120%",
  height: "700px",
  borderRadius: "0%",
  duration: 2
});


/****** brand text fadeIn ******/
window.onload = function () {
  const text = document.getElementById('changing-text');
  const textContent = text.textContent;
  const textLength = textContent.length;
  let scrolled = false; 

  text.textContent = '';

  for (let i = 0; i < textLength; i++) {
    const char = textContent[i];
    const span = document.createElement('span');
    span.textContent = char;
    span.style.opacity = '0';
    span.style.transition = 'opacity 0.2s';
    span.style.transitionDelay = `${i * 0.1}s`;
    span.style.color = '#fff';
    text.appendChild(span);
  }

  function fadeTextOnScroll() {
    const textTop = text.getBoundingClientRect().top;
    const screenHeight = window.innerHeight;

    if (textTop < screenHeight && textTop > -text.clientHeight && !scrolled) {
      text.childNodes.forEach((span, index) => {
        span.style.opacity = '1';
      });
      scrolled = true; 
    }
  }

  window.addEventListener('scroll', fadeTextOnScroll);
};