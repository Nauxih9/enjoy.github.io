var prevScrollPos = window.pageYOffset;

window.addEventListener("scroll", function() {
    var header = document.querySelector("header");
    var logo = header.querySelector("h1")
    var nav = header.querySelector("header ul")
    var scrollY = window.pageYOffset;

    if (scrollY > prevScrollPos) {
        header.style.backgroundColor = "#EDEDE4";
        logo.style.lineHeight = "60px"
        nav.style.paddingTop = "0px"
        logo.style.marginTop = "0px"
        
    } else {
        header.style.backgroundColor = "transparent";
        logo.style.lineHeight = "80px"
        nav.style.paddingTop = "20px"
        logo.style.marginTop = "10px"
    }
});

document.addEventListener("DOMContentLoaded", function() {
    const slider = document.querySelector(".slider");
    const images = document.querySelectorAll(".slider img");
    const dots = document.querySelectorAll(".dot");
    let index = 0;

    function nextSlide() {
        index = (index + 1) % images.length;
        updateSlider();
    }

    function updateSlider() {
        const offset = -index * 100; // 100% for each slide
        slider.style.transform = `translateX(${offset}%)`;
        
        // 更新小圆点的活动状态
        dots.forEach((dot, i) => {
            dot.classList.toggle("active", i === index);
        });
    }

    setInterval(nextSlide, 5000); // Change slide every 3 seconds

    // 点击小圆点切换图片
    dots.forEach((dot, i) => {
        dot.addEventListener("click", function() {
            index = i;
            updateSlider();
        });
    });
});
