function email() {
  var check = document.getElementById("email").value;
  var patterrn = /^[a-zA-Z].*[0-9]{4,}.*(@gmail.com)$/;
  if (patterrn.test(check)) {
    return true;
  }
  return false;
}
function checlPass() {
    var check = document.getElementById("pass").value;
    var patterrn = /(^[A-Z].{6,}/;
    if (patterrn.test(check)) 
    return true;
    return false;
}
function resultEmail(){
    al
    if(document.getElementById.value.trim()==""){
        document.getElementById("checkEmail").innerHTML="Email address is required";
    }
    if(email()){
        document.getElementById("checkEmail").innerHTML="";
    }
    if(email()){
        document.getElementById("checkEmail").innerHTML="VD: nguyenVanA@gmail.com";
    }
}
