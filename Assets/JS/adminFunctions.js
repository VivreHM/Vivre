function callAdminFunctions() {
    var addButton = document.getElementById('addProductButton');
    var background = document.getElementById('blackBackground');
    var productForm = document.getElementById('productForm');
    var submitProduct = document.getElementById('submitProduct');
    var inputs = document.querySelectorAll('.productProperties')
    if (signedUser.username == 'hero04') {
        addButton.style.display = 'inline-block';        
        addButton.addEventListener('click', function(){
            background.style.display = 'block';
            productForm.style.display = 'inline-block';
        })
    }
    submitProduct.addEventListener('click', function(){
        event.preventDefault();
        productsDB.addProduct(inputs[0].value,inputs[1].value,inputs[2].value,inputs[3].value,inputs[4].value);
        background.style.display = 'none';
        productForm.style.display = 'none';
        changeProductsDisplay()
    })

    window.addEventListener('click', function (event) {
        if ((event.target == background && event.target != registerButton)) {
            background.style.display = 'none';
            productForm.style.display = 'none';    
        }
    })
}