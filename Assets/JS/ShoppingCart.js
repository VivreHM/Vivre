var cart = document.getElementById('continueOrder');
var cartContainer = document.getElementById('CartContainer');
var background = document.getElementById('blackBackground');
var addButtonsOnProduct = document.querySelectorAll('.addProductToCart');
var cartTemplate = document.getElementById('cart-template').innerHTML;
var totalPrice = 0;
addButtonsOnProduct.forEach(function(button){
    button.addEventListener('click', function(){
        var id = button.className.slice(-1);
        var product = productsDB.getElementById(id);
        console.log(product)
        addToCart(product[0]); 
        totalPrice = (parseFloat(product[0].price) + parseFloat(totalPrice)).toFixed(2);
        console.log(product[0].price + 'cena na produkta')
        console.log(totalPrice)
        document.getElementById('totalPrice').innerHTML = parseFloat(totalPrice).toFixed(2);
        
    })
})
var addToCart = function (product) {
    var template = Handlebars.compile(cartTemplate);
    var readyHTML = template(product);
    document.getElementById('cartTable').innerHTML += readyHTML;
}

if(signedUser){
    signedUser.showAddresses(document.getElementById("availableAddressesInCart"));
}else{
    var p = document.createElement("p")
    p.textContent = "Не сте влезли в профила си. Ако искате да продължите като гост трябва да добавите адрес и телефон за връзка в полето по долу."
    document.getElementById("availableAddressesInCart").appendChild(p);
}
cart.addEventListener('click', function(event){
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