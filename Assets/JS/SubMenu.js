var navMenu = document.querySelectorAll('.navMenu');
var subMenu = document.querySelectorAll('.subMenu');

var idx = 0;
var currentMenu = null;
navMenu.forEach(function (element, index) {
    element.addEventListener('mouseover', function (event) {
        event.preventDefault();
        subMenu[idx].style.display = 'none';
        subMenu[index].style.display = 'inline-block';
        idx = index;
        subMenu[index].addEventListener('mouseleave', function (event) {
            subMenu[idx].style.display = "none";
            event.preventDefault(); 
        })
        subMenu[index].addEventListener('click', function (event) {
            subMenu[idx].style.display = "none"; 
        })
    })
});


