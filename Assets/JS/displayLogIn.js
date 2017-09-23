var loginForm = document.getElementById('logIn');
var login = document.getElementById('logInButton')

login.addEventListener('click', function displayLogin(event) {
    loginForm.style.display = 'inline-block';
    loginForm.style.position = 'fixed';
    loginForm.style.top = '50%';
    loginForm.style.left = '50%';
    //300X270
    loginForm.style.marginTop = '-150px';
    loginForm.style.marginLeft = '-135px';
    document.getElementById('blackBackground').style.display = 'inline-block';
    document.body.style.overflow = 'hidden';


    console.log('raboti')
})
document.addEventListener('keydown', function(event){
    if(event.keyCode == 27){
        document.getElementById('blackBackground').style.display = 'none';
        loginForm.style.display = 'none';
        document.body.style.overflow = 'scroll';
        
        
    }
})
window.addEventListener('click', function(event){
    if(event.target == document.getElementById('blackBackground') && event.target != login){
        document.getElementById('blackBackground').style.display = 'none';
        loginForm.style.display = 'none';

        document.body.style.overflow = 'scroll';
        
    }
})
