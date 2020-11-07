var app = angular.module("angularApp", []);
function onLoad(){
    getAPIBadge();
}
function checkNumber(){
    var theNumber, theMessage;

    theNumber = document.getElementById("smallnumber").value;

    if (isNaN(theNumber)||theNumber<1||theNumber>10){
        theMessage="number was expected to be between 1 and 10";
    }
    else{
        theMessage="number is good";
    }
    document.getElementById("numberMessage").innerHTML=theMessage;
}