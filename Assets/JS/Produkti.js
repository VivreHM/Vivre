var productsDB = (function () {
    function Product(name, url, price, type, description) {
        this.name = name;
        this.url = url;
        this.price = price;
        this.type = type;
        this.description = description;
        this.oldPrice = (parseInt(price) + parseInt(price)*0.3).toFixed() + 'лв.'
    }

    function ProductDB() {
        if (localStorage.getItem('products') != null) {
            this._products = JSON.parse(localStorage.getItem('products'))
        } else {
            this._products = [new Product('Стол', 'Assets/Images/Products/product1.jpg', '149.90лв', 'Мебели', 'дъб и дърво'),new Product('Стол', 'Assets/Images/Products/product2.png', '149.90лв', 'Кухня', 'дъб и дърво'),new Product('Стол', 'Assets/Images/Products/product1.png', '49.90лв', 'стол', 'дъб и дърво'),new Product('Стол', 'Assets/Images/Products/product1.jpg', '149.90лв', 'стол', 'дъб и дърво'),new Product('Стол', 'Assets/Images/Products/product1.jpg', '149.90лв', 'стол', 'дъб и дърво')];
            localStorage.setItem('products', JSON.stringify(this._products));
        }
        this.products = [];
    }

    ProductDB.prototype.addProduct = function (product) {
        this._products.push(product);
        localStorage.setItem('products', JSON.stringify(this._products));
    }
    ProductDB.prototype.filterByPriceLowestFirst = function(products){
        products.sort(function(element1, element2){
            return parseInt(element1.price) - parseInt(element2.price);
        })
    }
    ProductDB.prototype.filterByPriceHighestFirst = function(products){
        products.sort(function(element1, element2){
            return parseInt(element2.price) - parseInt(element1.price);
        })
    }
    ProductDB.prototype.filterByType = function(products, type){
        console.log('vlazoh tuk')
       return products.filter(x => x.type == type)
    }
    var productsDB = new ProductDB;
    return productsDB;
})();
