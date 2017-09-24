document.getElementById("logInFormButton").addEventListener("click",function(event){
    event.preventDefault();
    var userName = document.getElementById("logInUsername").value;
    var user = userDB.users.find(a=>a.username==userName)
    if(user!=undefined){
        var pass = document.getElementById("logInPassword").value;
        if(user.getPassword()=== pass){
            alert("Влезли сте!")
            document.getElementById("signButtons").style.display="none";
            console.log(user.username);
            document.getElementById("userButton").value = user.username;
            document.getElementById("userInfo").style.display="inline-block";
        }
    }
})