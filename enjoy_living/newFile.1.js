window.addEventListener("scroll", function () {
    var header = document.querySelector("header");
    var logo = header.querySelector("h1");
    var scrollY = window.pageYOffset;

    if (scrollY > prevScrollPos) {
        logo.style.width = "165px";
        header.style.backgroundColor = "#edede4";
    } else {
        logo.style.width = "200px";
        header.style.backgroundColor = "transparent";
    }
});
