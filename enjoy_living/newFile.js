window.addEventListener("scroll", function () {
    var header = document.querySelector("header");
    var scrollY = window.pageYOffset;

    if (scrollY > prevScrollPos) {
        header.style.height = "80px";
        header.style.backgroundColor = "#edede4";
    } else {
        header.style.height = "80px";
        header.style.backgroundColor = "transparent";
    }
});
