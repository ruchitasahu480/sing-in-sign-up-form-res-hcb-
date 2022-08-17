$(document).ready(function(){

    $("#card2").addClass("d-none");

    $("#hide").click(function(){
      $("#card1").addClass("d-none");
      $("#card2").removeClass("d-none");
    });

    $(".show").click(function(){
        $("#card2").addClass("d-none");
        $("#card1").show();
    });
  });