document.addEventListener('DOMContentLoaded', function () {
    document.getElementById("responsiveMenuButton").addEventListener("click", function () {
        var background = document.getElementById('blackBackground')
        document.getElementById("responsiveMenu").style.display = "inline-block";
        background.style.width = '100%';
        background.style.height = '100%';
        background.style.display = 'inline-block';
        background.style.top = "60px";
    })

    if (window.innerWidth <= 1000) {
        var navParent = document.querySelector("nav").parentNode;
        var newNav = document.querySelector("nav");
        navParent.removeChild(document.querySelector("nav"));
        document.getElementById("responsiveMenu").appendChild(newNav);
    }
});
