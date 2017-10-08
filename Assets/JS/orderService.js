var ordersDB = (function () {
    var id = 0;
    function Order() {
        this.id = id++;
        this.products = [];
        this.productsQuantities = [];
        this.totalPrice = 0;
        this.user = null;
    }

    Order.prototype.calculateTotalPrice = function () {
        if (this.products.length > 0) {
            var totalSum = 0;
            this.products.forEach(function (product, index) {
                totalSum += parseFloat(product.price) * parseFloat(this.productsQuantities[index]);
            },this)
            this.totalPrice = totalSum.toFixed(2);
        } else {
            this.totalPrice = 0;
        }
    }
    
    Order.prototype.addProduct = function (product, quantity) {
        this.products.push(product);
        this.productsQuantities.push(quantity);
        this.calculateTotalPrice();
    }

    Order.prototype.removeProduct = function (index) {
        this.products.splice(index, 1);
        this.productsQuantities.splice(index, 1);
        this.calculateTotalPrice();
    }

    function OrderDB(){
        this.orders = [new Order()];
    }

    OrderDB.prototype.addNewOrder=function(){
        this.orders.push(newOrder);
    }

    return new OrderDB();
})();