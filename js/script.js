$(document).ready(function() {
  $(".click0").click(function() {
   $(".design0").slideToggle("slow");
     $(".display0").slideToggle("slow");
  });
});
$(".click1").click(function() {
    $(".development1").slideToggle("slow");
     $(".display1").slideToggle("show");
});
$(".click2").click(function()  {
    $(".product2").slideToggle("slow");
     $(".display2").slideToggle("slow");
});
$(".path").hide();
$(".squares").hover(function() {
  $(this).find(".path").toggle("slow");
 });

 


