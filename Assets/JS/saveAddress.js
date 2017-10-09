var userDataInputs = document.querySelectorAll('.userDataInputs');
document.getElementById("savePhoneNumber").addEventListener("click", function () {
    var phone = document.getElementById("userDataPhone").value;
    var names = document.getElementById("userNames").value;
    if (phone.match(/^(08)(\d){8}$/) && names.trim()!="") {
        signedUser.phoneNumber = phone;
        signedUser.name = names;
        var phoneSpan = document.createElement("span");
        phoneSpan.textContent = phone;
        document.getElementById("userDataPhone").parentNode.replaceChild(phoneSpan, document.getElementById("userDataPhone"));

        var nameSpan = document.createElement("span");
        nameSpan.textContent = names;
        document.getElementById("userNames").parentNode.replaceChild(nameSpan, document.getElementById("userNames"));

        document.getElementById("savePhoneNumber").style.display = "none";
    } else {
        document.getElementById("savePhoneNumber").classList.add("shake1");
        document.getElementById("userDataPhone").style.backgroundColor = '#F6E79D';
    }
    setTimeout(function () { document.getElementById("savePhoneNumber").classList.remove("shake1"); }, 600);
})
document.getElementById("addNew").addEventListener("click", function () {
    document.getElementById('address').style.display = "inline-block";
})

document.getElementById("save").addEventListener('click', function () {
    var isFilled = true;
    Array.prototype.forEach.call(userDataInputs, function (element) {
        console.log(element);
        if (element.value == '') {
            element.style.backgroundColor = '#F6E79D';
            isFilled = false;
        }
    })

    if (isFilled) {
        // var keys = [];
        // for (var userAdress in signedUser.address) {
        //     keys.push(userAdress);
        // }
        // console.log(keys)
        // Array.prototype.forEach.call(userDataInputs, function (element, index) {
        //     signedUser.address[keys[index]] = element.value;
        // })

        // var newData = document.createElement('div');
        // newData.textContent += 'обл. ' + signedUser.address.region +
        //     ', гр. ' + signedUser.address.city + ', ул. "' +
        //     signedUser.address.street + '", № ' + signedUser.address.number +
        //     ', бл. ' + signedUser.address.block + ', вх. ' + signedUser.address.entr
        //     + ', ет. ' + signedUser.address.floor + ', ап. ' + signedUser.address.apartment;
        // document.getElementById("availableAddresses").appendChild(newData);

        var region = document.getElementById("region").value;
        var city = document.getElementById("city").value;
        var street = document.getElementById("street").value;
        var number = document.getElementById("number").value;
        var block = document.getElementById("block").value;
        var entr = document.getElementById("еntr").value;
        var floor = document.getElementById("floor").value;
        var apart = document.getElementById("apartment").value;
        userDB.addAddress(signedUser, region, city, street, number, block, entr, floor, apart);
        console.log(signedUser);
        userDB.showAddresses(signedUser, document.getElementById("availableAddresses"));
        userDB.showAddresses(signedUser, document.getElementById("availableAddressesInCart"));

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
        document.getElementById("inputs").style.fontFamily = "'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif%";
        document.getElementById("inputs").style.paddingTop = "9px";
        document.getElementById('address').style.display = "none";
        Array.prototype.forEach.call(userDataInputs, function (element) {
            element.value = '';
        })
    } else {
        document.getElementById("save").classList.add("shake1");
    }
    console.log(signedUser)
    setTimeout(function () { document.getElementById("save").classList.remove("shake1"); }, 600);
})

Array.prototype.forEach.call(userDataInputs, function (element) {
    element.addEventListener('change', function (event) {
        if (element.value !== '') {
            element.style.backgroundColor = 'white';
        }
    })
})