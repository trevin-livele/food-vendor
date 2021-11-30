$(document).ready(function(){

$('#myForm').submit(function(e){
e.preventDefault();

var name = $('#name').val();
var email = $('#email').val();
var comment = $('#comment').val();

$(".error").remove();

if(name.length<1){
    $('#name').after('<span>Provide your name</span>');
}
if(email.length<1){
    $('#email').after('<span>Provide your email account</span>')
}
if(comment.length<1){
    $('#comment').after('<span>write your comment kindly</span>')
}
})
})