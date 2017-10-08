function callAdminFunctions() {
    var addButton = document.getElementById('addProductButton');
    var background = document.getElementById('blackBackground');
    var productForm = document.getElementById('productForm');
    var submitProduct = document.getElementById('submitProduct');
    var inputs = document.querySelectorAll('.productProperties');
    var editButton = document.querySelectorAll(".editProductButton");
    var subTypes = document.querySelectorAll(".subProps")
    var values = document.querySelectorAll(".labelForAdmins");
    if (signedUser && signedUser.username == 'hero04') {
        document.getElementById("orderBar").style.display = "none";
        addButton.style.display = 'inline-block';
        editButton.forEach(but => but.style.visibility = "visible");
        addButton.addEventListener('click', function () {
            background.style.display = 'block';
            productForm.style.display = 'inline-block';
        })
    }
    submitProduct.addEventListener('click', function () {
        event.preventDefault();
        if (submitProduct.innerHTML == "Добави продукта") {
            productsDB.addProduct(inputs[0].value, inputs[1].value, inputs[2].value, inputs[3].value, inputs[4].value, inputs[5].value, inputs[6].value);
            background.style.display = 'none';
            productForm.style.display = 'none';
            productsDB.setSubType();
            changeProductsDisplay()
        }
    })

    window.addEventListener('click', function (event) {
        if ((event.target == background && event.target != registerButton)) {
            background.style.display = 'none';
            productForm.style.display = 'none';
            reset()
        }
    })
    editButton.forEach(function (button, index) {
        button.addEventListener("click", function (event) {
            var product = productsDB._products[index];
            event.preventDefault();
            background.style.display = 'block';
            productForm.style.display = 'inline-block';
            inputs[0].value = product.name;
            inputs[1].value = product.url;
            inputs[2].value = product.price;
            inputs[3].value = product.type;
            inputs[4].value = product.description;
            inputs[5].value = product.delivery;
            inputs[6].value = product.size;
            subTypes.forEach(function (subType, index) {
                console.log(product);
                if (product.subtypes.indexOf(values[index].innerText.toLowerCase()) != -1) {
                    console.log("tuk sym");
                    subType.setAttribute("checked", "checked");
                }
            })
            submitProduct.innerHTML = "Промени";

            submitProduct.addEventListener("click", function (event) {
                console.log(product);
                if (submitProduct.innerHTML == "Промени") {
                    event.preventDefault();
                    product.name = inputs[0].value;
                    product.url = inputs[1].value;
                    product.price = inputs[2].value;
                    product.type = inputs[3].value;
                    product.description = inputs[4].value;
                    product.delivery = inputs[5].value;
                    product.size = inputs[6].value;
                    product.subtypes = [];        
                    $('input[name="subP"]:checked').each(function () {
                        if (this.value == 'on') {
                            product.subtypes.push($(this).parent('.labelForAdmins').text().toLowerCase());
                            console.log(product.subtypes);
                        };
                    });
                    localStorage.setItem('products', JSON.stringify(productsDB._products));
                    background.style.display = 'none';
                    productForm.style.display = 'none';
                    changeProductsDisplay();
                    reset();
                }
            })
        })
    });
}

function reset(){
    var inputs = document.querySelectorAll('.productProperties');
    inputs[0].value = "";
    inputs[1].value = "";
    inputs[2].value = "";
    inputs[3].value = "";
    inputs[4].value = "";
    inputs[5].value = "";
    inputs[6].value = "";
    document.getElementById('submitProduct').innerHTML = "Добави продукта"
}