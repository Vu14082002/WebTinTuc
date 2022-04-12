function checlFirstNam() {
    var d = document.getElementById("FirstName").value 
    var pt=/^[A-Z][a-z]+ (\s[A-Z][a-z])*&/
    if(d.trim()==""){
        document.getElementById("checkEmail").innerHTML="First name is require"
    }
}