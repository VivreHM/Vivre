var cart = document.getElementById('continueOrder');
var cartContainer = document.getElementById('CartContainer');
var background = document.getElementById('blackBackground');

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