$(document).ready(function() {
   $('li').mouseenter(function() {
       $(this).animate({
           width: '+=15px'           
       });
   });
   $('li').mouseleave(function() {
       $(this).animate({
           width: '-=15px'           
       }); 
   });  
});