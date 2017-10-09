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
                new Product('Стол Apollo Taupe', 'Assets/Images/Products/Стол Apollo Taupe.jpg', '391лв', 'Мебели','структура от масивен бор и бук и плоча от дървени частици.', "10-16 Окт.","65/63/96 см"),
                new Product('Стол Patas White', 'Assets/Images/Products/Стол Patas White.jpg', '391лв','Мебели', 'PVC (поливинилхлорид), бор, текстил, пълнеж от пяна.', '10-16 Окт.','59/58/75 см'),
                new Product('Полилей Bebe', 'Assets/Images/Products/Полилей Bebe.jpg', '48лв','Осветителни тела','Функционира с 3 крушки тип Е27, макс. 60W', '10-16 Окт.','вис 40/диа 60 см'),
                new Product('Лампа Edna', 'Assets/Images/Products/Лампа Edna.jpg', '280лв', 'Осветителни тела','Функционира с крушка тип E27, макс. 60W', '10-16 Окт.','вис 64/диа 40 см'),
                new Product('Нощна лампа Gabriel', 'Assets/Images/Products/Нощна лампа Gabriel.jpg', '50лв', 'Осветителни тела','Функционира 1 крушка тип E14, макс. 40W, които не са включени.', '10-16 Окт.','20/20/41 см'),
                new Product('Аплик за стена Roda', 'Assets/Images/Products/Аплик за стена Roda.jpg', '40лв', 'Осветителни тела','Функционира с 1 крушка тип GU9, макс. 40W, които не са включени.', '2-16 Ноем.','10/10/11 см'),
                new Product('Полилей Etna Three', 'Assets/Images/Products/Полилей Etna Three.jpg', '75лв', 'Осветителни тела','Функционира с 1 крушка тип GU9, макс. 40W, които не са включени.', '2-16 Ноем.','45/8/18 см'),
                new Product('Кърпа за баня Hampton', 'Assets/Images/Products/Кърпа за баня Hampton.jpg', '30лв', 'Баня','100% памук, лен, плътност 550 гр/м2', '2-16 Ноем.','50/90 см'),
                new Product('2 кърпи за баня Tommy', 'Assets/Images/Products/2 кърпи за баня Tommy.jpg', '30лв', 'Баня','100% памук, плътност 380 гр/м2 Цвят: петролносин', '2-16 Ноем.','50/90 см'),
                new Product('Грил тиган Grigliosa', 'Assets/Images/Products/Грил тиган Grigliosa.jpg', '54лв', 'Кухня','алуминий с незалепващо покритие, дървена дръжка, стъклен капак', '10-16 Окт.','35/25 см'),
                new Product('Тенджера Squares', 'Assets/Images/Products/Тенджера Squares.jpg', '50лв', 'Кухня','Предвидена със скала за отмерване на литри.', '10-16 Окт.','3.6 L'),
                new Product('Тиган Wok Tayah', 'Assets/Images/Products/Тиган Wok Tayah.jpg', '38лв', 'Кухня','кован алуминий, тефлоново покритие, бакелит', '10-16 Окт.','28 см'),
                new Product('Тенджера с капак Swing', 'Assets/Images/Products/Тенджера с капак Swing.jpg', '35лв', 'Кухня','лят алуминий, тефлоново покритие, стъкло', '10-16 Окт.','2.50 литра'),
                new Product('Нож Chef Oryx Extra', 'Assets/Images/Products/Нож Chef Oryx Extra.jpg', '81лв', 'Кухня','инокс', '10-16 Окт.','25 см.'),
                new Product('Свещник Wicca', 'Assets/Images/Products/Свещник Wicca.jpg', '10лв', 'Декор','върба, стъкло', '10-16 Окт.','15/15 см.'),
                new Product('Рамка за 5 снимки Manja', 'Assets/Images/Products/Рамка за 5 снимки Manja.jpg', '50лв', 'Декор','дървесина, стъкло', '10-16 Окт.','56/2/36 см.'),
                new Product('Саксия Vintage Home', 'Assets/Images/Products/Саксия Vintage Home.jpg', '20лв', 'Декор','керамика', '26 окт-08 Ноемв.','56/2/36 см.'),
                new Product('Ваза Hamman Big', 'Assets/Images/Products/Ваза Hamman Big.jpg', '120лв', 'Декор','глина', '26 окт-08 Ноемв.','30/21 диам см.'),
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
