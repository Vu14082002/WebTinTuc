function checkFirstName() {
    var d = document.getElementById("FirstName").value 
    var pt=/^[A-Z][a-z]+(\s[A-Z][a-z])*$/
    if(d.trim()==""){
        document.getElementById("checkFirstName").innerHTML="First name is required"
        return;
    }
    if(pt.test(d)){
        document.getElementById("checkFirstName").innerHTML=""
        return;
    }
        document.getElementById("checkFirstName").innerHTML="First Name begin Uppercharacter"
        return; 
}
function checkLastNamName() {
    var d = document.getElementById("LasttName").value 
    var pt=/^[A-Z][a-z]+(\s[A-Z][a-z])*$/
    if(d.trim()==""){
        document.getElementById("checkLastName").innerHTML="Last name is required"
        return;
    }
    if(pt.test(d)){
        document.getElementById("checkLastName").innerHTML=""
        return;
    }
        document.getElementById("checkLastName").innerHTML="First Name begin Uppercharacter"
        return; 
}
function checkEmail() {
    var d = document.getElementById("email").value 
    var pt=/^[A-Za-z]\w+@(e|g)mail.com$/
    if(d.trim()==""){
        document.getElementById("checkEmail").innerHTML="Email is required"
        return;
    }
    if(pt.test(d)){
        document.getElementById("checkEmail").innerHTML=""
        return;
    }
        document.getElementById("checkEmail").innerHTML="EX: nguyenxxx@gmail.com"
        return; 
}
function checkPass() {
    var d = document.getElementById("pass").value 
    var pt=/^[]$/
    if(d.trim()==""){
        document.getElementById("checkEmail").innerHTML="Email is required"
        return;
    }
    if(pt.test(d)){
        document.getElementById("checkEmail").innerHTML=""
        return;
    }
        document.getElementById("checkEmail").innerHTML="EX: nguyenxxx@gmail.com"
        return; 
}