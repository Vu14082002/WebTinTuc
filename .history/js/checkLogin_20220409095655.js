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
  var patterrn = /^[A-Z].*)/;
  if (patterrn.test(check)) {
    return true;
  }
  return false;
}
