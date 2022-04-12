function checkFirstName() {
    var d = document.getElementById("FirstName").value 
    var pt=/^[A-Z][a-z]+(\s[A-Z][a-z])*$/
    if(d.trim()==""){
        document.getElementById("checkEmail").innerHTML="First name is required"
        return;
    }
    if(pt.test(d)){
        document.getElementById("checkEmail").innerHTML=""
        return;
    }
        document.getElementById("checkEmail").innerHTML="First Name begin Uppercharacter"
        return; 
}
function checkLatNamName() {
    var d = document.getElementById("FirstName").value 
    var pt=/^[A-Z][a-z]+(\s[A-Z][a-z])*$/
    if(d.trim()==""){
        document.getElementById("checkEmail").innerHTML="First name is required"
        return;
    }
    if(pt.test(d)){
        document.getElementById("checkEmail").innerHTML=""
        return;
    }
        document.getElementById("checkEmail").innerHTML="First Name begin Uppercharacter"
        return; 
}