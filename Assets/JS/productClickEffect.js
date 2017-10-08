var cardAnimation = function() {
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

cardAnimation();