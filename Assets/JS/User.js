var userDB = (function () {
    function User(username, password, email) {
        this.id = new Date().getTime();
        this.username = username;
        this.password = password;
        this.email = email;
        this.addresses = [];
        this.phoneNumber = "";
    };


    function UsersDB() {
        if (localStorage.getItem('users') != null) {
            this._users = JSON.parse(localStorage.getItem('users'))
        } else {
            this._users = [new User('hero04', 'hero04', 'hero04@abv.bg')];
            localStorage.setItem('users', JSON.stringify(this._users));
        }
        this.addresses = [];
    }
    
    UsersDB.prototype.addUser = function (username, password, email) {
        this._users.push(new User(username, password, email));
        localStorage.setItem('users', JSON.stringify(this._users));

    }
    UsersDB.prototype.login = function (username, password) {
        console.log(username)
        console.log(password)
        return this._users.some(user => {
            console.log(user.username + "-------" + user.password)
            return user.username == username && user.password == password;

        });
        
    }
    
    UsersDB.prototype.addAddress = function (user, _region, _city, _street, _number, _block, _entr, _floor, _apartment) {
        user.addresses.push({
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

    UsersDB.prototype.showAddresses = function (user, parentElement) {
        if (user.addresses.length == 0) {
            parentElement.innerHTML = "Нямате добавени адреси. За да се възползвате от доставка до вашия вход моля натиснете бутона <strong> Добави нов адрес </strong> отдолу, за да добавите нов адрес."
        } else {
            parentElement.innerHTML = "";
            user.addresses.forEach(function (address) {
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
    var users = new UsersDB();
    setInterval(function(){
        localStorage.setItem('users', JSON.stringify(users._users));
    }, 5000)
    return users;
})();

