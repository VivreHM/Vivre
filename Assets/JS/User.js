function User(username, password, email) {
    this.id = 1;
    this.username = username;
    var password = password;
    this.email = email;
    this.address = {
        region: "",
        city: '',
        street: '',
        number: '',
        block: '',
        entr: '',
        floor: '',
        apartment: ''
    }
    this.phoneNumber="";

    this.getPassword = function () {
        return password;
    }
    this.setPassword = function (newPassword) {
        password = newPassword;
    }
};
var admin = new User("hero04", "hero04", "hero04@abv.bg")
function UsersDB() {
    this.users = [];
    this.id = 0;
    this.addUser = function (user) {
        this.users.push(user);
        user.id = this.users.length;
    }
}

var userDB = new UsersDB;
userDB.addUser(admin);
