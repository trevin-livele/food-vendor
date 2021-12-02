// $(document).ready(function () {
//     $(".panuel").click(function () {
//       $(".kennedy").toggle();
//       $(".panuel").hide();
//       $(".panuel,kennedy .").click(function () {
//         $(".panuel").show();
//         $(".one").hide();
//       });
//     });
//     $(".development-icon").click(function () {
//       $(".development-description").toggle();
//       $(".development-icon").hide();
//       $(".development, .development-description").click(function () {
//         $(".development-description").hide();
//         $(".development-icon").show();
//       });
//     });
//     $(".product-icon").click(function () {
//       $(".product-description").toggle();
//       $(".product-icon").hide();
//       $(".product, .product-description").click(function () {
//         $(".product-icon").show();
//         $(".product-description").hide();
//       });
//     });
//   });

const validation = () =>{
    var name = document.getElementById("submit").value.trim();
    var username = document.getElementById("username").value.trim();
    var usermail = document.getElementById("usermail").value.trim();
    var message = document.getElementById("message").value.trim();
    if(name == "" || username == "" || usermail == "" || message == ""){
        alert("please fill all fields");
        return false;
    }else{
       alert("Thank you"+ " " + username + " "+"for the review.Welcome again!");
       var name = document.getElementById("submit").value="";
       var username = document.getElementById("username").value="";
       var usermail = document.getElementById("usermail").value="";
       var message = document.getElementById("message").value="";
        return false;
    }
  }