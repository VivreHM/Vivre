var signedUser = null;

document.getElementById("logInFormButton").addEventListener("click",function(event){
    event.preventDefault();
    var userName = document.getElementById("logInUsername").value;
    var user = userDB.users.find(a=>a.username==userName)
    if(user!=undefined){
        var pass = document.getElementById("logInPassword").value;
        if(user.getPassword()=== pass){
            alert("Влезли сте!")
            document.getElementById("signButtons").style.display="none";
            document.getElementById("userButton").innerHTML = user.username;
            document.getElementById("userInfo").style.display="inline-block";
            document.getElementById("potrebitel").textContent = user.username;
            document.getElementById("userEmail").textContent = user.email;
            signedUser = user;
        }
    }
    if (user) {
        document.getElementById('logIn').style.display = 'none';
        document.getElementById('blackBackground').style.display = 'none';
        document.body.style.overflow = 'scroll'
    }
})
document.getElementById('registerInLogIn').addEventListener('click',function (event) {
    event.preventDefault();
    document.getElementById('logIn').style.display = 'none';
    document.getElementById('register').style.pposition = 'fixed';
    document.getElementById('register').style.display = 'inline-block';
})