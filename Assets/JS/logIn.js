var signedUser = null;

document.getElementById("logInFormButton").addEventListener("click",function(event){
    event.preventDefault();
    var userName = document.getElementById("logInUsername").value;
    var user = userDB.users.find(a=>a.username==userName)
    if(user!=undefined){
        document.getElementById("logInUsername").style.backgroundColor = 'white';
        var pass = document.getElementById("logInPassword").value;
        if(user.getPassword() == pass && pass){
            document.getElementById("signButtons").style.display="none";
            document.getElementById("userButton").innerHTML = user.username;
            document.getElementById("userInfo").style.display="inline-block";
            document.getElementById("potrebitel").textContent = user.username;
            document.getElementById("userEmail").textContent = user.email;
            signedUser = user;
            document.getElementById('logIn').style.display = 'none';
            document.getElementById('blackBackground').style.display = 'none';
            document.body.style.overflow = 'scroll'
            document.getElementById("logInPassword").style.backgroundColor = 'white';
        }else{
            document.getElementById("logInPassword").value = "";
            document.getElementById("logInPassword").style.backgroundColor = '#F3D967';
            document.getElementById("logInFormButton").classList.add("shake1");
        }
    }else{
        document.getElementById("logInUsername").value = "";
        document.getElementById("logInUsername").style.backgroundColor = '#F3D967';
        document.getElementById("logInPassword").style.backgroundColor = '#F3D967';
        document.getElementById("logInFormButton").classList.add("shake1");
    }
    setTimeout(function () { document.getElementById("logInFormButton").classList.remove("shake1"); }, 2000);
})
document.getElementById('registerInLogIn').addEventListener('click',function (event) {
    event.preventDefault();
    document.getElementById('logIn').style.display = 'none';
    document.getElementById('register').style.pposition = 'fixed';
    document.getElementById('register').style.display = 'inline-block';
})

