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
                new Product('Фотьойл Gala Black', 'Assets/Images/Products/Фотьойл Gala Black.jpg', '470лв', 'Мебели', 'труктура от масивен бук и дъб, тапицерия от полиестерно кадифе, пълнеж от пяна', "10-16 Окт.","66/64/85 см"),
                new Product('Двуместно канапе Irina Cream', 'Assets/Images/Products/Двуместно канапе Irina Cream.jpg', '1200лв', 'Мебели', 'Продуктът е проектиран в Париж и е концепция на Jalouse Maison. ', "10-16 Окт.","168/92/88 см"),
                new Product('Двуместно канапе Ives Turq', 'Assets/Images/Products/Двуместно канапе Ives Turquoise.jpg', '613лв', 'Мебели', 'Декоративната възглавница е включена.', "10-16 Окт.","59/58/84 см"),
                new Product('Фотьойл Lagos Turquoise', 'Assets/Images/Products/Фотьойл Lagos Turquoise.jpg', '479.90лв', 'Мебели', 'Декоративната възглавница не е включена.', "10-16 Окт.","85/73/79 см"),
                new Product('Шкафче Verena Blue', 'Assets/Images/Products/Шкафче Verena Blue.jpg', '225лв', 'Мебели', 'С 2 вратички и 1 чекмедже.', "10-16 Окт.","45/26/69 см"),
                new Product('Стол Apollo Taupe', 'Assets/Images/Products/Стол Apollo Taupe.jpg', '391лв', 'структура от масивен бор и бук и плоча от дървени частици.', "10-16 Окт.","65/63/96 см"),
                new Product('Стол Patas White', 'Assets/Images/Products/Стол Patas White.jpg', '391лв', 'PVC (поливинилхлорид), бор, текстил, пълнеж от пяна.', '10-16 Окт.','59/58/75 см'),
                new Product('Полилей Bebe', 'Assets/Images/Products/Полилей Bebe.jpg', '48лв', 'Функционира с 3 крушки тип Е27, макс. 60W', '10-16 Окт.','вис 40/диа 60 см'),
                new Product('Лампа Edna', 'Assets/Images/Products/Лампа Edna.jpg', '280лв', 'Функционира с крушка тип E27, макс. 60W', '10-16 Окт.','вис 64/диа 40 см')
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
