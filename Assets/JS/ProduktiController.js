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

var changeProductsDisplay = function () {
    var productTemplate = document.getElementById('entry-template').innerHTML;
    var template = Handlebars.compile(productTemplate);
    var readyHTML = template(productsDB);
    document.getElementById('content').innerHTML = readyHTML;
    cardAnimation();
    checkForSubTypes();  
    var currentOrder = ordersDB.orders[ordersDB.orders.length - 1];
    var quantites = document.querySelectorAll(".wantedQuantity");
    var addButtonsOnProduct = document.querySelectorAll('.addProductToCart');
    addButtonsOnProduct.forEach(function (button, index) {
        button.addEventListener("click", function () {
            currentOrder.addProduct(productsDB._products[index], quantites[index].value);
            addToCart(currentOrder);
            document.getElementById('totalPrice').innerHTML = currentOrder.totalPrice;
        })
    });
    // callAdminFunctions();
}
changeProductsDisplay();
function checkForSubTypes() {
    productsDB._products.forEach(function (product) {
        if (product.subtypes.length > 0) {
            product.subtypes.forEach(function (subType) {
                if (product.subtypes.indexOf(subType) == product.subtypes.lastIndexOf(subType)) {
                    var span = document.createElement("span");
                    span.classList.add(subType.toLowerCase())
                    document.getElementById(product.id).appendChild(span);
                }
            })
        }
    })
}
var filterByPrice = document.getElementById('sortField');
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
    var productsToShow = [];
    element.addEventListener('change', function () {
        if (element == checkboxes[0]) {
            productsDB.setStart();
            changeProductsDisplay();
        } else {
            if (element.checked) {
                productsDB.setStart();
                filteredProducts = productsDB.filterByType(element.nextElementSibling.innerHTML);
                changeProductsDisplay();
            }
        }
    })
})

document.getElementById("searchField").addEventListener("change", function () {
    search = document.getElementById("searchField").value;
    if (search.length > 1) {
        if(!isNaN(search) && search.length==13){
            //Тук трябва да може да търси поръчки по номер на поръчка и да показва информация в началния екран.
            var order = userDB.findOrderByID(signedUser, search)
            var orderTemplate = document.getElementById('order-page').innerHTML;
            var template = Handlebars.compile(orderTemplate);
            var readyHTML = template(order);
            document.getElementById('orderPage').innerHTML = readyHTML;
            document.getElementById('orderPage').style.display = 'block'
            document.getElementById("mainPage").style.display = "none";
        }else{
            productsDB.search(search);
        }
    } else {
        productsDB.setStart()
    }
    changeProductsDisplay();
    productsDB.setStart();
})


// function showSubTypes() {
//     var products = productsDB._products;
//     var categories = ["new", "promo", "free", "fast", "gift"]
//     products.forEach(function (product) {
//         product.secondaryType.forEach(function (type, index) {
//             if (type == true) {
//                 var span = document.createElement("span");
//                 span.classList.add(categories[index]);
//                 document.getElementById('subTypes').appendChild(span);
//             }
//         })
//     })
// }
// showSubTypes();
