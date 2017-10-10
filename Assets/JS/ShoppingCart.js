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
    changeQuantityButtons.forEach(function (button, index) {
        button.value = currentOrder.productsQuantities[index];
        button.addEventListener("change", function () {
            currentOrder.productsQuantities[index] = button.value;
            currentOrder.calculateTotalPrice();
            document.getElementById('totalPrice').innerHTML = currentOrder.totalPrice;
        })
    })
}

// addButtonsOnProduct.forEach(function (button, index) {
//     button.addEventListener("click", function () {
//         currentOrder.addProduct(productsDB._products[index], quantites[index].value);
//         addToCart(currentOrder);
//         document.getElementById('totalPrice').innerHTML = currentOrder.totalPrice;
//     })
// })



if (signedUser) {
    signedUser.showAddresses(document.getElementById("availableAddressesInCart"));
} else {
    var p = document.createElement("p")
    p.textContent = "Не сте влезли в профила си. Ако искате да продължите като гост трябва да добавите адрес и телефон за връзка в полето по долу."
    document.getElementById("availableAddressesInCart").appendChild(p);
}
cart.addEventListener('click', function (event) {
    if (currentOrder.products.length == 0) {
        alert("Количката ви е празна. Добавете продуктите, които желаете да завършите вашата поръчка.")
    } else {
        if (!signedUser) {
            signedUser = userDB.returnNewGuest();
        }
        cartContainer.style.display = 'inline-block';
        background.style.width = '100%';
        background.style.height = '100%';
        background.style.display = 'inline-block';
    }
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
var displayOrders = function () {
    var userOrders = document.getElementById('user-orders').innerHTML;
    var template = Handlebars.compile(userOrders);
    var readyHTML = template(ordersDB.user);
    document.getElementById('userOrdersHistory').innerHTML = readyHTML;
}

function chooseAddress() {
    var addresses = document.querySelectorAll("#availableAddressesInCart>div");
    var radios = document.querySelectorAll("#availableAddressesInCart input")
    radios.forEach(function (radio, index) {
        if (radio.checked) {
            currentOrder.address = addresses[index].innerText;
        }
    })
}

document.getElementById("addNewInCart").addEventListener("click", function () {
    if (!signedUser) {
        signedUser = userDB.returnNewGuest();
    }
    if (signedUser && signedUser.addresses.length == 0) {
        if (signedUser.name == "") {
            document.getElementById("userNames").style.backgroundColor = '#F6E79D';
        }
        if (signedUser.phoneNumber == "") {
            document.getElementById("userDataPhone").style.backgroundColor = '#F6E79D';
        }
        document.getElementById('blackBackground').style.display = 'none';
        cartContainer.style.display = 'none';
        document.body.style.overflow = 'scroll';
        document.getElementById('mainPage').style.display = "none";
        document.getElementById("userPage").style.display = "flex";
        document.getElementById('address').style.display = "inline-block";
    }

})

document.getElementById('confirmOrder').addEventListener('click', function () {
    if (signedUser &&
        signedUser.addresses.length > 0 && signedUser.name !="" &&
        signedUser.phoneNumber.length > 0 && currentOrder.products.length > 0) {
        var card = document.getElementById("withCard");
        var delivered = document.getElementById("whenDelivered");
        if (card.checked) currentOrder.payMethod = "С карта";
        if (delivered.checked) currentOrder.payMethod = "Наложен платеж"
        userDB.addOrderToHistory(signedUser, currentOrder);
        userDB.addOrderToHistory(userDB._users[0], currentOrder);
        alert("Честито. Вашата поръчка е с номер " + currentOrder.id + ". Запазети този номер. Можете да проверите информацията за нея и нейния статус като потърсите с този номер в търсачката в саайта.")
        chooseAddress();
        ordersDB.addNewOrder();
        currentOrder = ordersDB.orders[ordersDB.orders.length-1]
        displayOrders();
    } else {
        alert('Не сте попълнили всичките си данни!');
        if (signedUser.name == "") {
            document.getElementById("userNames").style.backgroundColor = '#F6E79D';
        }
        if (signedUser.phoneNumber == "") {
            document.getElementById("userDataPhone").style.backgroundColor = '#F6E79D';
        }
        document.getElementById('blackBackground').style.display = 'none';
        cartContainer.style.display = 'none';
        document.body.style.overflow = 'scroll';
        document.getElementById('mainPage').style.display = "none";
        document.getElementById("userPage").style.display = "flex";
        if (signedUser.addresses.length == 0)
            document.getElementById('address').style.display = "inline-block";
    }


})