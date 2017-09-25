
document.getElementById("regButton").addEventListener("click", function (event) {
    event.preventDefault();

    if (!userDB.users.some(a => a.username == document.getElementById("username").value)) {
        var usern = document.getElementById("username").value;
    } else {
        document.getElementById("username").value = "";
        document.getElementById("username").style.backgroundColor = '#F3D967';
        document.getElementById("regButton").classList.add("shake1");
        document.getElementById("username").placeholder = 'Това потребителско име вече съществува.'
    }
    if (document.getElementById("passwordFirst").value === document.getElementById("passwordSecond").value) {
        var pass = document.getElementById("passwordFirst").value;
    } else {
        ///alert("Въведените пароли са различни.")
        document.getElementById('passwordFirst').style.backgroundColor = '#F3D967';
        document.getElementById("passwordSecond").style.backgroundColor = '#F3D967';
        document.getElementById("passwordSecond").placeholder = 'Паролата трябва да е същата като първата';
        document.getElementById("regButton").classList.add("shake1");        
        return;
    }
    var email = document.getElementById("email").value;
    if (usern && pass && email) {
        var user = new User(usern, pass, email);
        userDB.addUser(user);
    }
    if (user) {
        document.getElementById('register').style.display = 'none';
        document.getElementById('blackBackground').style.display = 'none';
        document.body.style.overflow = 'scroll'
    }
    setTimeout(function(){ document.getElementById("regButton").classList.remove("shake1"); }, 2000);
    console.log(userDB.users);
});

