function User(username, password, email) {
    this.id = 1;
    this.username = username;
    var password = password;
    this.email = email;
    this.addresses = [];
    this.phoneNumber = "";

    this.getPassword = function () {
        return password;
    }
    this.setPassword = function (newPassword) {
        password = newPassword;
    }
};

User.prototype.addAddress = function (_region, _city, _street, _number, _block, _entr, _floor, _apartment) {
    this.addresses.push({
        region: _region,
        city: _city,
        street: _street,
        number: _number,
        block: _block,
        entr: _entr,
        floor: _floor,
        apartment: _apartment
    })
}

User.prototype.showAddresses = function (parentElement) {
    if (this.addresses.length == 0) {
        parentElement.innerHTML = "Нямате добавени адреси. За да се възползвате от доставка до вашия вход моля натиснете бутона <strong> Добави нов адрес </strong> отдолу, за да добавите нов адрес."
    } else {
        parentElement.innerHTML = "";
        this.addresses.forEach(function (address) {
            var newData = document.createElement('div');
            newData.textContent += 'обл. ' + address.region +
                ', гр. ' + address.city + ', ул. "' +
                address.street + '", № ' + address.number +
                ', бл. ' + address.block + ', вх. ' + address.entr
                + ', ет. ' + address.floor + ', ап. ' + address.apartment;
            parentElement.appendChild(newData);
        })
    }
}

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
