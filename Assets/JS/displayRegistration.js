var registerForm = document.getElementById('register');
var registerButton = document.getElementById('registerButton');

registerButton.addEventListener('click', function (event) {
    registerForm.style.display = 'inline-block';
    registerForm.style.position = 'fixed';
    registerForm.style.top = '50%';
    registerForm.style.left = '50%';
    //300X270
    registerForm.style.marginTop = '-150px';
    registerForm.style.marginLeft = '-144px';
    document.getElementById('blackBackground').style.display = 'inline-block';
    document.body.style.overflow = 'hidden';


    console.log('raboti')
})
document.addEventListener('keydown', function(event){
    if(event.keyCode == 27){
        document.getElementById('blackBackground').style.display = 'none';
        registerForm.style.display = 'none';
        document.body.style.overflow = 'scroll';
        
        
    }
})
window.addEventListener('click', function(event){
    if(event.target == document.getElementById('blackBackground') && event.target != registerButton){
        document.getElementById('blackBackground').style.display = 'none';
        registerForm.style.display = 'none';

        document.body.style.overflow = 'scroll';
        
    }
})