var productsDB = (function () {
    function Product(name, url, price, type, description) {
        this.name = name;
        this.url = url;
        this.price = price;
        this.type = type;
        this.description = description;
    }

    function ProductDB() {
        if (localStorage.getItem('products') != null) {
            this._products = JSON.parse(localStorage.getItem('products'))
        } else {
            this._products = [new Product('Стол', 'Assets/Images/Products/product1.jpg', '149.90лв', 'стол', 'дъб и дърво'),new Product('Стол', 'Assets/Images/Products/product1.jpg', '149.90лв', 'стол', 'дъб и дърво'),new Product('Стол', 'Assets/Images/Products/product1.jpg', '149.90лв', 'стол', 'дъб и дърво'),new Product('Стол', 'Assets/Images/Products/product1.jpg', '149.90лв', 'стол', 'дъб и дърво'),new Product('Стол', 'Assets/Images/Products/product1.jpg', '149.90лв', 'стол', 'дъб и дърво')];
            localStorage.setItem('products', JSON.stringify(this._products));
        }
        this.products = [];
    }

    ProductDB.prototype.addProduct = function (product) {
        this._products.push(product);
        localStorage.setItem('products', JSON.stringify(this._products));
    }
    var productsDB = new ProductDB;
    return productsDB;
})();
