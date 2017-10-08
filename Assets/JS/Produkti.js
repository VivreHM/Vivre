var id = 0;
var productsDB = (function () {
    function Product(name, url, price, type, description, delivery, size) {
        this.name = name;
        this.url = url;
        this.price = price;
        this.type = type;
        this.description = description;
        this.subtypes = ['new', 'promo'];
        this.oldPrice = (parseInt(price) + parseInt(price) * 0.3).toFixed() + 'лв.'
        this.id = id++;
        this.delivery = delivery;
        this.size = size;
    }

    function ProductDB() {
        if (localStorage.getItem('products') != null) {
            this._products = JSON.parse(localStorage.getItem('products'))
            id = this._products.length;
        } else {
            this._products = [
                new Product('Стол', 'Assets/Images/Products/product1.jpg', '149.90лв', 'Мебели', 'дъб и дърво', "02-10 Окт.","59/58/84 см"),
                new Product('Хавлии', 'Assets/Images/Products/product2.png', '15.90лв', 'Баня', '100% памук', "02-10 Окт.","59/58/84 см"),
                new Product('Стол', 'Assets/Images/Products/product1.png', '49.90лв', 'Мебели', 'дъб и дърво', "02-10 Окт.","59/58/84 см"),
                new Product('Стол', 'Assets/Images/Products/product1.jpg', '149.90лв', 'Мебели', 'дъб и дърво', "02-10 Окт.","59/58/84 см"),
                new Product('Стол', 'Assets/Images/Products/product1.jpg', '149.90лв', 'Мебели', 'дъб и дърво', "02-10 Окт.","59/58/84 см")
            ];
            id = this._products.length;
            localStorage.setItem('products', JSON.stringify(this._products));
        }
    }
    ProductDB.prototype.setStart = function () {
        return this._products = JSON.parse(localStorage.getItem('products'))

    }
    ProductDB.prototype.addProduct = function (name, url, price, type, description, delivery, size) {
        var product = new Product(name, url, price, type, description, delivery, size)
        this._products.push(product);
        localStorage.setItem('products', JSON.stringify(this._products));
    }
    ProductDB.prototype.filterByPriceLowestFirst = function (products) {
        products.sort(function (element1, element2) {
            return parseInt(element1.price) - parseInt(element2.price);
        })
    }
    ProductDB.prototype.filterByPriceHighestFirst = function (products) {
        products.sort(function (element1, element2) {
            return parseInt(element2.price) - parseInt(element1.price);
        })
    }
    ProductDB.prototype.filterByType = function (type) {
        this._products = this._products.filter(x => x.type == type)
        return this._products
    }
    ProductDB.prototype.search = function (searchWord) {
        this._products = this._products.filter(function (product) {
            searchByName = product.name.toLowerCase().indexOf(searchWord.toLowerCase()) != -1;
            searchByCategory = product.type.toLowerCase().indexOf(searchWord.toLowerCase()) != -1;
            searchByDescr = product.description.toLowerCase().indexOf(searchWord.toLowerCase()) != -1;
            return searchByName || searchByCategory || searchByDescr;
        })
    }
    ProductDB.prototype.getElementById = function (id) {
        return product = this._products.find(x => x.id == id)
    }
    ProductDB.prototype.setSubType = function () {
        var self = this;
        self._products[self._products.length - 1].subtypes = [];        
        $('input[name="subP"]:checked').each(function () {
            if (this.value == 'on') {
                self._products[self._products.length - 1].subtypes.push($(this).parent('.labelForAdmins').text().toLowerCase());
                console.log(self._products[self._products.length - 1].subtypes);
            };
        });
        localStorage.setItem('products', JSON.stringify(this._products));
    }
    var productsDB = new ProductDB;
    return productsDB;
})();
