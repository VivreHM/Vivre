document.getElementById("userButton").addEventListener("click", function(){
    document.getElementById("userPage").style.display="inline-block";
    document.getElementById("searchBar").style.display="none";
    document.querySelector("nav").style.display="none";
    document.getElementById('mainPage').style.display = 'none'
    document.getElementById("userInfo").style.display="inline block";
})