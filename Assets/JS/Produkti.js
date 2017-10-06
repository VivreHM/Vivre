var productsDB = (function () {
    function Product(name, url, price, type, description, subtypes) {
        this.name = name;
        this.url = url;
        this.price = price;
        this.type = type;
        this.description = description;
        this.secondaryType = subtypes;
        this.oldPrice = (parseInt(price) + parseInt(price) * 0.3).toFixed() + 'лв.'
    }

    function ProductDB() {
        if (localStorage.getItem('products') != null) {
            this._products = JSON.parse(localStorage.getItem('products'))
        } else {
            this._products = [
                new Product('Стол', 'Assets/Images/Products/product1.jpg', '149.90лв', 'Мебели', 'дъб и дърво', [true, true, true, false, false]),
                new Product('Стол', 'Assets/Images/Products/product2.png', '149.90лв', 'Кухня', 'дъб и дърво', [true, true, true, false, false]),
                new Product('Стол', 'Assets/Images/Products/product1.png', '49.90лв', 'стол', 'дъб и дърво', [true, true, true, false, false]),
                new Product('Стол', 'Assets/Images/Products/product1.jpg', '149.90лв', 'стол', 'дъб и дърво', [true, true, true, false, false]),
                new Product('Стол', 'Assets/Images/Products/product1.jpg', '149.90лв', 'стол', 'дъб и дърво', [true, true, true, false, false])
            ];
            localStorage.setItem('products', JSON.stringify(this._products));
        }
        this.products = [];
    }
    ProductDB.prototype.setStart = function () {
        return this._products = JSON.parse(localStorage.getItem('products'))

    }

    ProductDB.prototype.addProduct = function (name, url, price, type, description, subtypes) {
        this._products.push(new Product(name, url, price, type, description, subtypes));
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
    var productsDB = new ProductDB;
    return productsDB;
})();
