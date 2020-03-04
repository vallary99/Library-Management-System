function validateForm() {

var x=document.forms["contactUs"]["name"].value;
if (x==null || x=="")
  {
  alert("Name must be filled out");
  return false;
  }

var y=document.forms["contactUs"]["email"].value;
if (y==null || y=="") {
  alert("Email must be filled out");
  return false;
  }

  var z=document.forms["contactUs"]["subject"].value;
  if (z==null || z=="") {
    alert("Please type your message");
    return false;
    }
}
