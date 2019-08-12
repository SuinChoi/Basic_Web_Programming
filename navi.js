$(document).ready(function(){
    $("#menu").click(function(){
      $(".navi_menu").slideDown();
      $(".navigator").css("background-color", "#111010");
      $(".navigator").css("height", "200px");
      $("#x").slideDown();
      $("#menu").hide();
      $("#name").hide();
    });
      $("#x").click(function(){
        $(".navi_menu").hide();
        $("#menu").show();
        $("#name").show();
        $("#x").hide();
        $(".navigator").css("background-color", "white");
        $(".navigator").css("height", "50px");
        $("#menu").css("color", "#111010");
      });
  });
