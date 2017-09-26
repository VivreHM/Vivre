var userDataInputs = document.querySelectorAll('.userDataInputs');

document.getElementById("save").addEventListener('click', function () {
    var isFilled = true;
    console.log(userDataInputs)
    Array.prototype.forEach.call(userDataInputs, function (element) {
        console.log(element);
        if (element.value == '') {
            element.style.backgroundColor = '#F6E79D';
            isFilled = false;
        }
    })

    if (isFilled) {
        var keys = [];
        keys.push("phoneNumber");
        for (var userAdress in signedUser.address) {
            keys.push(userAdress);
        }
        console.log(keys)
        Array.prototype.forEach.call(userDataInputs, function (element, index) {
            if (signedUser.hasOwnProperty(keys[index])) {
                signedUser[keys[index]] = element.value;
            } else {
                signedUser.address[keys[index]] = element.value;
            }
        })
        console.log(signedUser);
        var newData = document.createElement('span');
        for (var userAdress in signedUser.address) {
            newData.textContent += signedUser.address[userAdress] + ", " ;
        }
        document.getElementById("userMainInfo").appendChild(newData);
        // signedUser.address.region = document.getElementById("region").value;
        // var newRegion = document.createElement("span")
        // newRegion.textContent = signedUser.address.region;
        // document.getElementById("region").parentNode.replaceChild(newRegion, document.getElementById("region"))

        // signedUser.address.city = document.getElementById("city").value;
        // var newCity = document.createElement("span");
        // newCity.textContent = signedUser.address.city;
        // document.getElementById("city").parentNode.replaceChild(newCity, document.getElementById("city"));

        // signedUser.address.street = document.getElementById("street").value;
        // var newStr = document.createElement("span");
        // newStr.textContent = signedUser.address.street;
        // document.getElementById("street").parentNode.replaceChild(newStr, document.getElementById("street"));

        // signedUser.address.number = document.getElementById("number").value;
        // var newNum = document.createElement("span");
        // newNum.textContent = signedUser.address.number;
        // document.getElementById("number").parentNode.replaceChild(newNum, document.getElementById("number"));

        // signedUser.address.block = document.getElementById("block").value;
        // var newBlock = document.createElement("span");
        // newBlock.textContent = signedUser.address.block;
        // document.getElementById("block").parentNode.replaceChild(newBlock, document.getElementById("block"));

        // signedUser.address.entr = document.getElementById("еntr").value;
        // var newEntr = document.createElement("span")
        // newEntr.textContent = signedUser.address.entr;
        // document.getElementById("еntr").parentNode.replaceChild(newEntr, document.getElementById("еntr"))

        // signedUser.address.floor = document.getElementById("floor").value;
        // var newFloor = document.createElement("span")
        // newFloor.textContent = signedUser.address.floor;
        // document.getElementById("floor").parentNode.replaceChild(newFloor, document.getElementById("floor"))

        // signedUser.address.apartment = document.getElementById("apartment").value;
        // var newApart = document.createElement("span")
        // newApart.textContent = signedUser.address.apartment;
        // document.getElementById("apartment").parentNode.replaceChild(newApart, document.getElementById("apartment"))
        document.getElementById("inputs").style.lineHeight = "226%";
        document.getElementById("inputs").style.fontFamily = "'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif%";
        document.getElementById("inputs").style.paddingTop = "9px";
    }else{
        document.getElementById("save").classList.add("shake1"); 
    }
    setTimeout(function () { document.getElementById("save").classList.remove("shake1"); }, 600);
})

Array.prototype.forEach.call(userDataInputs, function (element) {
    console.log(element);
    element.addEventListener('change', function (event) {
        if (element.value !== '') {
            element.style.backgroundColor = 'white';
        }
    })
})