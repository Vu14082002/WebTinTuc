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
function checkLogin(){
    if (checkEmail() && checkPass())
    {
    alert("Successful log in!")
    location.href = '../index.html';
    }
    else
    alert("Please re-enter required informations correctly")
}
