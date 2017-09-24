var registerForm = document.getElementById('register');
var registerButton = document.getElementById('registerButton');
var background = document.getElementById('blackBackground')
registerButton.addEventListener('click', function (event) {
    registerForm.style.display = 'inline-block';
    background.style.width = '100%';
    background.style.height = '100%';
    background.style.display = 'inline-block';
    document.body.style.overflow = 'hidden';

})
document.addEventListener('keydown', function (event) {
    if (event.keyCode == 27) {
        document.getElementById('blackBackground').style.display = 'none';
        registerForm.style.display = 'none';
        document.body.style.overflow = 'scroll';


    }
})
window.addEventListener('click', function (event) {
    if ((event.target == document.getElementById('blackBackground') && event.target != registerButton) || event.target == document.getElementById('closeButtonRegister')) {
        document.getElementById('blackBackground').style.display = 'none';
        registerForm.style.display = 'none';
        document.body.style.overflow = 'scroll';

    }
})