const DEFAULT_MARGIN_OF_CHROME = 4;
var products = document.querySelectorAll('.productsInSlideshow')
var parent = document.getElementById('productsContainer')
var productsParent = document.getElementById('insideProductContainer')
var prevArrow = document.getElementById('previousArrowProducts')
var nextArrow = document.getElementById('nextArrowProducts');
///НЕ пипай от ТУК....
var speed = 1;
var boxSize = parseInt(window.getComputedStyle(products[0]).marginLeft)*2 + DEFAULT_MARGIN_OF_CHROME + products[0].offsetWidth;
products.forEach(function (element) {
    element.style.right = 1 + 'px'
})

function rightSizig(element) {
    boxSize = products[0].offsetWidth;
    Array.prototype.forEach.call(products, function (element) {
        var right = parseInt(element.style.right)
        var width = 1366 - window.innerWidth
        window.addEventListener('resize', function () {
            width = 1366 - window.innerWidth
        });
        element.style.right = right + speed + 'px';

        if (element.offsetLeft < 0) {
            element.style.right = -productsParent.offsetWidth - width - boxSize + 'px'
        }
        window.addEventListener('resize', function () {
            width = 1366 - window.innerWidth
            element.style.right = -productsParent.offsetWidth - width - boxSize + 'px'            
        });

        boxSize -= parseInt(window.getComputedStyle(products[0]).marginLeft)*2 + DEFAULT_MARGIN_OF_CHROME + products[0].offsetWidth;
    })
}
setInterval(function () {
    rightSizig();
}, 20)
////до ТУК!
//ТУК прави каквото искаш :D 
products.forEach(function (element) {
    var div = document.createElement("div");
    element.addEventListener('mouseover', function () {
        speed = 0;
        element.appendChild(div);
        div.classList.add("transparent");
        element.classList.add("scale");
        element.classList.remove("scaleD");
        element.firstElementChild.style.zIndex = "-1";
    })
    element.addEventListener('mouseout', function () {
        speed = 1;
        div.classList.remove("transparent");
        element.classList.remove("scale");
        element.classList.add("scaleD");
    })
})

// products.forEach(function (element) {
//     if (element.getBoundingClientRect().top < parent.getBoundingClientRect().top ||
//         element.getBoundingClientRect().bottom > parent.getBoundingClientRect().bottom) {
//         element.style.display = 'none';
//     }
// })
// prevArrow.addEventListener('click', function () {
//     var boxSize = 246; 
//     products[index].style.display = 'none';
//     checkIndex()
//     if (isLastIndex)
//         products[index].style.left = boxSize + 'px';
//     else
//         products[index-1].style.left = boxSize + 'px';
//     checkIndex();
//     if (isLastIndex)
//         products[index].style.left = boxSize + 'px';
//     else
//         products[index-2].style.left = boxSize + 'px';


// })
// function checkIndex() {
//     isLastIndex = false;
//     if (index < 0) {
//         index = products.length - 1;
//         isLastIndex = true;
//     }
// }


