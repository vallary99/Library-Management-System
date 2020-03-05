$(document).ready(function(){
    $(".head-gold").click(function(){
        $(".form-gold").slideToggle();
    });
    $(".head-silver").click(function(){
        $(".form-silver").slideToggle();
    });
    $(".head-platinum").click(function(){
        $(".form-platinum").slideToggle();
    });

});
function validate(){
    var name=document.getElementById("fname").Value;
    var email=document.getElementById("email").Value;
     confirm(name +" "+email)
}
// $(".submit").click(function(){
//     var name=$("#fname").val();
//     var email=$("#email").val();
//     var key='f2a28d47f48fba910a882d260d1675be-us19'
//     if(name === ""){
//         alert("please fill in your name")
//     }else if(email === ""){
//         alert("Please enter your email")
//     }else {
//         alert("Thank you"+" "+name+" "+"."+" "+"An email has been sent to"+" "+email)
//     }
// })
$(".submit2").click(function(){
    var name2=$("#fname2").val();
    var email2=$("#email2").val();
    var key='f2a28d47f48fba910a882d260d1675be-us19'
    if(name2 === ""){
        alert("please fill in your name")
    }else if(email2 === ""){
        alert("Please enter your email")
    }else {
        alert("Thank you"+" "+name2+" "+"."+" "+"An email has been sent to"+" "+email2)
    }
})
$(".submit3").click(function(){
    var name3=$("#fname3").val();
    var email3=$("#email3").val();
    var key='f2a28d47f48fba910a882d260d1675be-us19'
    if(name3 === ""){
        alert("please fill in your name")
    }else if(email3 === ""){
        alert("Please enter your email")
    }else {
        alert("Thank you"+" "+name3+" "+"."+" "+"An email has been sent to"+" "+email3)
    }
})

// Gold modal
var modal = document.getElementById("myModal");
var btn = document.getElementById("myBtn");
var span = document.getElementsByClassName("close")[0];

btn.onclick = function() {
    modal.style.display = "block";
  }
  span.onclick = function() {
    modal.style.display = "none";
  }
  window.onclick = function(event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  }

var name;
var pasw;
var pasw2;
$(".submit4").click(function(){
    name=$("#firstname").val();
    pasw=$("#pasw").val();
    pasw2=$("#pasw2").val();
    if(pasw != pasw2){
        alert("not similar password")
        event.preventDefault();
    }else{
        alert("welcome")
    }
});
function clear(){
    $("#firstname").val();
    $("#pasw").val();
    $("#pasw2").val();
}
    $('#mymodal').on('hidden', function() {
    clear()
});

// silver modal
  var modal2 = document.getElementById("myModal2");
var btn2 = document.getElementById("myBtn2");
var span2 = document.getElementsByClassName("close2")[0];

btn2.onclick = function() {
    modal2.style.display = "block";
  }
  span2.onclick = function() {
    modal2.style.display = "none";
  }
  window.onclick = function(event) {
    if (event.target == modal2) {
      modal2.style.display = "none";
    }
  }
  
// platinum modal
  var modal3 = document.getElementById("myModal3");
  var btn3 = document.getElementById("myBtn3");
  var span3 = document.getElementsByClassName("close3")[0];
  
  btn3.onclick = function() {
      modal3.style.display = "block";
    }
    span3.onclick = function() {
      modal3.style.display = "none";
    }
    window.onclick = function(event) {
      if (event.target == modal3) {
        modal3.style.display = "none";
      }
    } 


