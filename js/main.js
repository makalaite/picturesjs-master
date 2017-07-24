/***********************************************************************************/
/* *********************************** VARIABLES ***********************************/
/***********************************************************************************/
var list = document.getElementsByTagName('li');

var elm = document.getElementsByTagName('a');

/***********************************************************************************/
/* ********************************** FUNCTIONS ************************************/
/***********************************************************************************/
function addClass() {
    if (this.classList.contains("border")){
        this.classList.remove("border");
    } else {
        this.classList.add("border");
    }
    writeSelected();
}

function countSelected() {
    var count = document.getElementsByClassName('border');
    return count.length;
}
kkkk

function writeSelected() {
    document.getElementById("result").innerHTML = countSelected();
}

function removeItem() {
    this.parentNode.remove();
}


/************************************************************************************/
/* ******************************** CODE PRINCIPAL **********************************/
/************************************************************************************/


for (var i = 0; i < list.length; i++) {
    list[i].addEventListener("click", addClass);
}
for (var i = 0; i < elm.length; i++) {
    elm[i].addEventListener("click", removeItem);
}