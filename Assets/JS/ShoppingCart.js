var cart = document.getElementById('continueOrder');
var cartContainer = document.getElementById('CartContainer');
var background = document.getElementById('blackBackground');
var addButtonsOnProduct = document.querySelectorAll('.addProductToCart');
var cartTemplate = document.getElementById('cart-template').innerHTML;
var quantites = document.querySelectorAll(".wantedQuantity");
// addButtonsOnProduct.forEach(function (button) {
//     button.addEventListener('click', function () {
//         var id = button.className.slice(-1);
//         var product = productsDB.getElementById(id);
//         if (addedProducts.filter(x => x.id == product.id).length <= 0) {
//             var wantedQuantity = 'wantedQuantity' + product.id;
//             var wantedQuantityInProduct = 'wantedQuantityInProduct' + product.id;
//             var value = parseInt(document.getElementById(wantedQuantityInProduct).value);
//             addedProducts.push(product);
//             addToCart(product);
//             document.getElementById(wantedQuantity).value = value;
//             totalPrice = ((parseFloat(product.price) * value) + parseFloat(totalPrice)).toFixed(2);
//             document.getElementById('totalPrice').innerHTML = parseFloat(totalPrice).toFixed(2);
//             removeFromOrder();
//             changePrice();
//         } else {
//             var wantedQuantity = 'wantedQuantity' + product.id;
//             var wantedQuantityInProduct = 'wantedQuantityInProduct' + product.id;
//             var value = parseInt(document.getElementById(wantedQuantity).value);
//             value += parseInt(document.getElementById(wantedQuantityInProduct).value);
//             document.getElementById(wantedQuantity).value = value;
//             totalPrice = ((parseFloat(product.price) * value) + parseFloat(totalPrice)).toFixed(2);
//             document.getElementById('totalPrice').innerHTML = parseFloat(totalPrice).toFixed(2);
//             changePrice();
//         }
//     })
// })
// var changePrice = function () {
//     document.querySelectorAll('.wantedQuantityInCart').forEach(function (element, index) {
//         element.addEventListener('blur', function () {
//             var wantedQuantity = 'wantedQuantity' + product.id;
//             var value = parseInt(document.getElementById(wantedQuantity).value);
//             totalPrice = ((parseFloat(product.price) * value) + parseFloat(totalPrice)).toFixed(2);
//             document.getElementById('totalPrice').innerHTML = parseFloat(totalPrice).toFixed(2);

//         })
//     })
// }
// var addToCart = function (product) {
//     var template = Handlebars.compile(cartTemplate);
//     var readyHTML = template(product);
//     document.getElementById('cartTable').innerHTML += readyHTML;
//     cardAnimation();
// }
// var removeFromOrder = function(){
//     document.querySelectorAll('.removeFromOrder').forEach(function(element){
//         element.addEventListener('click', function(){
//             var id = element.className.slice(-1);
//             var row = 'rowOfCartTable' + id;
//             var product = productsDB.getElementById(parseInt(id));
//             var row = document.getElementById(row)
//             totalPrice -= parseFloat(product.price);                 
//             row.parentNode.removeChild(row)
//             document.getElementById('totalPrice').innerHTML = parseFloat(totalPrice).toFixed(2);
//             var index = addedProducts.findIndex(x => x.id == id);
//             addedProducts.splice(index, 1);        
//         })
//     })
// }
// var calculatePrice = function(){

// }

var currentOrder = ordersDB.orders[ordersDB.orders.length - 1];
var addToCart = function (product) {
    var template = Handlebars.compile(cartTemplate);
    var readyHTML = template(product);
    document.getElementById('cartTable').innerHTML = readyHTML;
    var removeButtons = document.querySelectorAll('.removeFromOrder');
    var changeQuantityButtons = document.querySelectorAll(".changeQuantityBut");
    removeButtons.forEach(function (button, index) {
        button.addEventListener('click', function () {
            currentOrder.removeProduct(index);
            addToCart(currentOrder);
            document.getElementById('totalPrice').innerHTML = currentOrder.totalPrice;
        })
    })
    changeQuantityButtons.forEach(function(button, index){
        button.value = currentOrder.productsQuantities[index];
        button.addEventListener("blur", function(){
            currentOrder.productsQuantities[index] = button.value;
            currentOrder.calculateTotalPrice();
            document.getElementById('totalPrice').innerHTML = currentOrder.totalPrice;
        })
    })
}

addButtonsOnProduct.forEach(function (button, index) {
    button.addEventListener("click", function () {
        currentOrder.addProduct(productsDB._products[index], quantites[index].value);
        addToCart(currentOrder);
        document.getElementById('totalPrice').innerHTML = currentOrder.totalPrice;
    })

})



if (signedUser) {
    signedUser.showAddresses(document.getElementById("availableAddressesInCart"));
} else {
    var p = document.createElement("p")
    p.textContent = "Не сте влезли в профила си. Ако искате да продължите като гост трябва да добавите адрес и телефон за връзка в полето по долу."
    document.getElementById("availableAddressesInCart").appendChild(p);
}
cart.addEventListener('click', function (event) {
    cartContainer.style.display = 'inline-block';
    background.style.width = '100%';
    background.style.height = '100%';
    background.style.display = 'inline-block';
})
document.addEventListener('keydown', function (event) {
    if (event.keyCode == 27) {
        document.getElementById('blackBackground').style.display = 'none';
        cartContainer.style.display = 'none';
        document.body.style.overflow = 'scroll';
    }
})
window.addEventListener('click', function (event) {
    if ((event.target == document.getElementById('blackBackground') && event.target != login) || event.target == document.getElementById('closeButtonLogin')) {
        document.getElementById('blackBackground').style.display = 'none';
        cartContainer.style.display = 'none';
        document.body.style.overflow = 'scroll';
    }
})