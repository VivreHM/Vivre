var userDB = (function () {
    function User(username, password, email) {
        this.id = new Date().getTime();
        this.username = username;
        this.password = password;
        this.email = email;
        this.addresses = [];
        this.phoneNumber = "";
        this.historyOrder = [];
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
        return this._users.some(user => {
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
            user.addresses.forEach(function (address, index) {
                var div = document.createElement("div");
                div.classList.add("addressContainer")
                var radioInput = document.createElement('input');
                radioInput.setAttribute('type', 'radio');
                radioInput.setAttribute('name', 'address');
                radioInput.setAttribute('id', ''+parentElement.getAttribute("id") + index);
                var newData = document.createElement("label");
                newData.setAttribute('name', 'address');
                newData.setAttribute('for',  ''+parentElement.getAttribute("id") + index);
                div.setAttribute('for',  ''+parentElement.getAttribute("id") + index);
                newData.textContent += 'обл. ' + address.region +
                    ', гр. ' + address.city + ', ул. "' +
                    address.street + '", № ' + address.number +
                    ', бл. ' + address.block + ', вх. ' + address.entr
                    + ', ет. ' + address.floor + ', ап. ' + address.apartment;
                // radioInput.style.display = "none";
                div.appendChild(radioInput);
                div.appendChild(newData);
                parentElement.appendChild(div);
            })
        }
    }
    UsersDB.prototype.addOrderToHistory = function(user, order){
        var userToAdd = this._users.find(x => x.username == user.username)
        userToAdd.historyOrder.push(order);
        localStorage.setItem('users', JSON.stringify(users._users));        
    }
    var users = new UsersDB();
    setInterval(function(){
        localStorage.setItem('users', JSON.stringify(users._users));
    }, 5000)
    return users;
})();

