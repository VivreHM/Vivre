function changeProductsDisplay() {
    var productTemplate = document.getElementById('entry-template').innerHTML
    var template = Handlebars.compile(productTemplate);
    var readyHTML = template(productsDB);
    document.getElementById('content').innerHTML = readyHTML;
}
changeProductsDisplay();
var filterByPrice = document.getElementById('sortField');
var filterByType = document.querySelectorAll('.filters');
var checkboxes = document.querySelectorAll('.checkboxes')
filterByPrice.addEventListener('change', function () {
    if (filterByPrice.value == '2') {
        productsDB.filterByPriceLowestFirst(productsDB._products)
        changeProductsDisplay();      
    }
    if (filterByPrice.value == '1') {
        productsDB.filterByPriceHighestFirst(productsDB._products)
        changeProductsDisplay();
    }
    if (filterByPrice.value == '3') {
        productsDB.filterByPriceLowestFirst(productsDB._products)
        changeProductsDisplay();       
    }
})
checkboxes.forEach(function(element){
    element.addEventListener('click', function(){
           productsDB= productsDB.filterByType(productsDB._products, element.nextElementSibling.value);
            changeProductsDisplay();
        
    })
})