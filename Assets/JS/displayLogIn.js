var loginForm = document.getElementById('logIn');
var login = document.getElementById('logInButton')
var background = document.getElementById('blackBackground')
login.addEventListener('click', function (event) {
    loginForm.style.display = 'inline-block';
    loginForm.style.position = 'fixed';
    loginForm.style.top = '50%';
    loginForm.style.left = '50%';
    //300X270
    loginForm.style.marginTop = '-150px';
    loginForm.style.marginLeft = '-135px';
    background.style.width = '100%';
    background.style.height = '100%';
    background.style.display = 'inline-block';
    document.body.style.overflow = 'hidden';


    console.log('raboti')
})
document.addEventListener('keydown', function (event) {
    if (event.keyCode == 27) {
        document.getElementById('blackBackground').style.display = 'none';
        loginForm.style.display = 'none';
        document.body.style.overflow = 'scroll';


    }
})
window.addEventListener('click', function (event) {
    if ((event.target == document.getElementById('blackBackground') && event.target != login) || event.target == document.getElementById('closeButtonLogin')) {
        document.getElementById('blackBackground').style.display = 'none';
        loginForm.style.display = 'none';
        document.body.style.overflow = 'scroll';

    }
})
