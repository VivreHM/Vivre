function mainPageDisplayNone(){
    document.getElementById("searchBar").style.display="none";
    document.querySelector("nav").style.display="none";
    document.getElementById('mainPage').style.display = 'none'
};
function mainPageDisplay(old){
    old.style.display = 'none';
    document.getElementById("searchBar").style.display="flex";
    document.querySelector("nav").style.display="block";
    document.getElementById('mainPage').style.display = 'block'
};
