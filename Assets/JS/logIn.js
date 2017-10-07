var signedUser = null;
document.getElementById("logInFormButton").addEventListener("click", function (event) {
    event.preventDefault();
    var userName = document.getElementById("logInUsername").value;
    var pass = document.getElementById("logInPassword").value;
    console.log(userDB.login(userName, pass))
    if (userDB.login(userName, pass)) {
        signedUser = userDB._users.find(user => user.username == userName);
        if(userName=="hero04") {
            document.getElementById("orderBar").style.display="none";
        }          
        document.getElementById("logInUsername").style.backgroundColor = 'white';
        document.getElementById("signButtons").style.display = "none";
        document.getElementById("userButton").innerHTML = userName;
        document.getElementById("userInfo").style.display = "inline-block";
        document.getElementById("potrebitel").textContent = userName
        document.getElementById("userEmail").textContent = signedUser.email;
        document.getElementById('logIn').style.display = 'none';
        document.getElementById('blackBackground').style.display = 'none';
        document.getElementById("logInFormButton").classList.remove("shake1");
        document.getElementById("logInPassword").style.backgroundColor = 'white';
        userDB.showAddresses(signedUser, document.getElementById("availableAddressesInCart"));
        userDB.showAddresses(signedUser, document.getElementById("availableAddresses"));
        callAdminFunctions();
    } else {
        document.getElementById("logInPassword").value = "";
        document.getElementById("logInPassword").style.backgroundColor = '#F3D967';
        document.getElementById("logInFormButton").classList.add("shake1");
        document.getElementById("logInUsername").value = "";
        document.getElementById("logInUsername").style.backgroundColor = '#F3D967';
        document.getElementById("logInPassword").style.backgroundColor = '#F3D967';
        document.getElementById("logInFormButton").classList.add("shake1");
    }
    setTimeout(function () { document.getElementById("logInFormButton").classList.remove("shake1"); }, 600);
})
document.getElementById('registerInLogIn').addEventListener('click', function (event) {
    event.preventDefault();
    document.getElementById('logIn').style.display = 'none';
    document.getElementById('register').style.pposition = 'fixed';
    document.getElementById('register').style.display = 'inline-block';
})

