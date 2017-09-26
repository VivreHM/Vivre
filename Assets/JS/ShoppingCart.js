var cart = document.getElementById('cart');
var cartContainer = document.getElementById('CartContainer');
var background = document.getElementById('blackBackground');

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