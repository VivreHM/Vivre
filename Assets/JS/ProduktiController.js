var productTemplate = document.getElementById('entry-template').innerHTML
var template = Handlebars.compile(productTemplate);
var readyHTML = template(productsDB);
console.log(readyHTML);
document.getElementById('content').innerHTML = readyHTML;