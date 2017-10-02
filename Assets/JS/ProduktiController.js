function cardAnimation() {
    var imageHolder = document.querySelectorAll(".imageHolder");
    var productInfo = document.querySelectorAll(".productInformation");
    imageHolder.forEach(function (element, index) {
        element.addEventListener('click', function () {
            setTimeout(function () {
                element.style.top = "-26px";
                element.style.transform = "scale(0.85,0.85)";
                element.style.zIndex = "5";

                productInfo[index].style.transform = 'scale(1,1)';
                productInfo[index].style.top = '0px';
                productInfo[index].style.zIndex = "15";

                element.classList.remove('triggerAnimation');
                productInfo[index].classList.remove('triggerAnimationBack');
            }, 302)
            element.classList.remove('triggerAnimationBack');
            productInfo[index].classList.remove('triggerAnimation');
            element.classList.add('triggerAnimation');
            productInfo[index].classList.add('triggerAnimationBack');
        })
        productInfo[index].addEventListener('click', function (event) {
            if (event.target != document.querySelectorAll('.wantedQuantity')[index]
                && event.target != document.querySelectorAll('.addProductToCart')[index]
                && event.target != document.querySelectorAll('.moreInformation')[index]) {
                setTimeout(function () {
                    productInfo[index].style.top = "-26px";
                    productInfo[index].style.transform = "scale(0.85,0.85)";
                    productInfo[index].style.zIndex = "5";

                    element.style.transform = 'scale(1,1)';
                    element.style.top = '0px';
                    element.style.zIndex = "15";

                    element.classList.remove('triggerAnimationBack');
                    productInfo[index].classList.remove('triggerAnimation');
                }, 302)
                element.classList.add('triggerAnimationBack');
                productInfo[index].classList.add('triggerAnimation');
            }
        })
    })
    return cardAnimation;
};
function changeProductsDisplay() {
    var productTemplate = document.getElementById('entry-template').innerHTML;
    var template = Handlebars.compile(productTemplate);
    var readyHTML = template(productsDB);
    document.getElementById('content').innerHTML = readyHTML;
    cardAnimation();
}
changeProductsDisplay();
var filterByPrice = document.getElementById('sortField');
var filterByType = document.querySelectorAll('.filters');
var checkboxes = document.querySelectorAll('.checkboxes')
filterByPrice.addEventListener('change', function () {
    if (filterByPrice.value == '2') {
        productsDB.filterByPriceLowestFirst(productsDB._products)
        changeProductsDisplay();
    }
    if (filterByPrice.value == '1') {
        productsDB.filterByPriceHighestFirst(productsDB._products)
        changeProductsDisplay();
    }
    if (filterByPrice.value == '3') {
        productsDB.filterByPriceLowestFirst(productsDB._products)
        changeProductsDisplay();
    }
})
checkboxes.forEach(function (element) {
    element.addEventListener('click', function () {
        filteredProducts = productsDB.filterByType(productsDB._products, element.nextElementSibling.textContent);
        changeProductsDisplay();

    })
})