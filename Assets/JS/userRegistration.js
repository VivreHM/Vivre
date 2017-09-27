
document.getElementById("regButton").addEventListener("click", function (event) {

    if (!userDB._users.some(a => a.username == document.getElementById("username").value.trim()) && 
    document.getElementById("username").value) {
        document.getElementById("username").style.backgroundColor = 'white';
        var usern = document.getElementById("username").value;
    } else {
        document.getElementById("username").value = "";
        document.getElementById("username").style.backgroundColor = '#F3D967';
    }
    if (document.getElementById("passwordFirst").value === document.getElementById("passwordSecond").value &&
    document.getElementById("passwordFirst").value) {
        document.getElementById('passwordFirst').style.backgroundColor = 'white';
        document.getElementById("passwordSecond").style.backgroundColor = 'white';
        var pass = document.getElementById("passwordFirst").value;
    } else {
        ///alert("Въведените пароли са различни.")
        document.getElementById('passwordFirst').style.backgroundColor = '#F3D967';
        document.getElementById("passwordSecond").style.backgroundColor = '#F3D967';
        //document.getElementById("passwordSecond").placeholder = 'Паролата трябва да е същата като първата';
    }
    if (document.getElementById("email").value && 
        !userDB._users.some(a => a.email == document.getElementById("email").value.trim())) {
        var email = document.getElementById("email").value;
        document.getElementById('email').style.backgroundColor = 'white';
    }else{
        document.getElementById('email').style.backgroundColor = '#F3D967';
    }
    if (!(userDB._users.some(user => user.username == usern))) {
        userDB.addUser(usern, pass, email);
        document.getElementById('register').style.display = 'none';
        document.getElementById('blackBackground').style.display = 'none';
    } else {
        document.getElementById("regButton").classList.add("shake1");
    }
    setTimeout(function () { document.getElementById("regButton").classList.remove("shake1"); }, 600);
});

