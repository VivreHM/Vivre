var products = document.querySelectorAll('.productsInSlideshow')
var parent = document.getElementById('productsContainer')
var productsParent = document.getElementById('insideProductContainer')
var prevArrow = document.getElementById('previousArrowProducts')
var nextArrow = document.getElementById('nextArrowProducts')

var isLastIndex = false;
console.log(products)
var speed = 1;
var boxSize = products[0].offsetWidth;
products.forEach(function (element) {
    element.style.right = 1 + 'px'
})

setInterval(function () {
    boxSize = products[0].offsetWidth;
    Array.prototype.forEach.call(products, function (element) {
        if (window.innerWidth > 1365) {
            var right = parseInt(element.style.right)
            element.style.right = right + speed + 'px';

            if (element.offsetLeft < 0) {
                element.style.right = -productsParent.offsetWidth - boxSize + 'px'
                // element.style.right = '-800px'            
                //right = -800;
            }
            boxSize -= 194; ///размер на кутията + марджин + default margin from chrome
        }
    })

}, 10)


products.forEach(function (element) {
    element.addEventListener('mouseover', function () {
        speed = 0;
    })
    element.addEventListener('mouseout', function () {
        speed = 1;
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


