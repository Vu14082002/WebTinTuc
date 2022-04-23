function checkFirstName() {
    var d = document.getElementById("FirstName").value 
    var pt=/^[A-Z]{1,2}[a-z]*(\s[A-Z][a-z])*$/
    if(d.trim()==""){
        document.getElementById("checkFirstName").innerHTML="First Name is required"
        return false;
    }
    if(pt.test(d)){
        document.getElementById("checkFirstName").innerHTML=""
        return true;
    }
        document.getElementById("checkFirstName").innerHTML="Invalid First Name"
        return false; 
}
function checkLastNamName() {
    var d = document.getElementById("LasttName").value 
    var pt=/^[A-Z][a-z]+(\s[A-Z][a-z])*$/
    if(d.trim()==""){
        document.getElementById("checkLastName").innerHTML="Last name is required"
        return false;
    }
    if(pt.test(d)){
        document.getElementById("checkLastName").innerHTML=""
        return true;
    }
        document.getElementById("checkLastName").innerHTML="Invalid LastName"
        return false; 
}
function checkEmail() {
    var d = document.getElementById("email").value 
    var pt=/^[A-Za-z]\w+@(e|g)mail.com$/
    if(d.trim()==""){
        document.getElementById("checkEmail").innerHTML="Email is required"
        return false;
    }
    if(pt.test(d)){
        document.getElementById("checkEmail").innerHTML=""
        return true;
    }
        document.getElementById("checkEmail").innerHTML="EX: nguyenxxx@gmail.com"
        return false; 
}
function checkPass() {
    var d = document.getElementById("pass").value 
    var pt=/^\w{6,}$/
    if(d.trim()==""){
        document.getElementById("checkPass").innerHTML="Password is required"
        return false;
    }
    if(pt.test(d)){
        document.getElementById("checkPass").innerHTML=""
        return true;
    }
        document.getElementById("checkPass").innerHTML="Password needs to have 5 or more characters"
        return false; 
}

function checkReg(){
    if (checkFirstName() && checkLastNamName() && checkEmail() && checkPass())
    {
    alert("Successfully created a new account!")
    location.href = '../index.html';
    }
    else
    alert("Please re-enter required informations correctly")
}
