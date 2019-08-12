$(document).ready(function(){
  $("#tr").click(function(){
      $("iframe").attr("src", "ifm_Trav.html");
  });
  $("#bs").click(function(){
      $("iframe").attr("src", "ifm_Base.html");
  });
  $("#im").click(function(){
      $("iframe").attr("src", "ifm_Im.html");
  });
});
var Aus = 0, Mrc = 0, Jap = 0, Phil =0, Spn=0;
var AusArray = ["img/Aus1.jpg", "img/Aus2.jpg", "img/Aus3.jpg", "img/Aus4.jpg",
                "img/Aus5.jpg", "img/Aus6.jpg", "img/Aus7.jpg", "img/Aus8.jpg",
                "img/Aus9.jpg"];
var MrcArray = ["img/Mrc1.jpg", "img/Mrc2.jpg","img/Mrc3.jpg","img/Mrc4.jpg"];
var JapArray = ["img/jap1.jpg", "img/jap2.jpg", "img/jap3.jpg"];
var PhilArray = ["img/p1.jpg","img/p2.jpg","img/p3.jpg", "img/p4.jpg", "img/p5.jpg"]
var SpnArray = ["img/s1.jpg","img/s2.jpg","img/s3.jpg", "img/s4.jpg", "img/s5.jpg"]

$(document).ready(function(){
  $("#Aus").click(function(){
    $("#pic").attr("src", AusArray[0]);
    $("#pic").attr("alt", "Aus");
  });
  $("#Spn").click(function(){
    $("#pic").attr("src", SpnArray[0]);
    $("#pic").attr("alt", "Spain");
  });
  $("#Mrc").click(function(){
    $("#pic").attr("src", MrcArray[0]);
    $("#pic").attr("alt", "Mrc");
  });
  $("#Phil").click(function(){
    $("#pic").attr("src", PhilArray[0]);
    $("#pic").attr("alt", "Phil");
  });
  $("#Jap").click(function(){
    $("#pic").attr("src", JapArray[0]);
    $("#pic").attr("alt", "Jap");
  });
});

$(document).ready(function(){
  $("#next").click(function(){
    var alt = $("#pic").attr("alt");
    if(alt === "Aus"){
      $("#pic").attr("src", AusArray[++Aus]);
      if(Aus === AusArray.length){
        Aus = AusArray.length-1;
      }
    }
    if(alt === "Spain"){
      $("#pic").attr("src", SpnArray[++Spn]);
      if(Spn === SpnArray.length){
        Aus = SpnArray.length-1;
      }
    }
    if(alt === "Mrc"){
      $("#pic").attr("src", MrcArray[++Mrc]);
      if(Mrc === MrcArray.length){
        Mrc = MrcArray.length-1;
      }
    }
    if(alt === "Phil"){
      $("#pic").attr("src", PhilArray[++Phil]);
      if(Phil === PhilArray.length){
        Phil = PhilArray.length-1;
      }
    }
    if(alt === "Jap"){
      $("#pic").attr("src", JapArray[++Jap]);
      if(Jap === JapArray.length){
        Jap = JapArray.length-1;
      }
    }
  });
});

$(document).ready(function(){
  $("#prev").click(function(){
    var alt = $("#pic").attr("alt");
    if(alt === "Aus"){
      $("#pic").attr("src", AusArray[--Aus]);
      if(Aus < 0){  Aus = 0; }
    }
    if(alt === "Spain"){
      $("#pic").attr("src", SpnArray[--Spn]);
        if(Spain < 0){  Spain = 0; }
    }
    if(alt === "Mrc"){
      $("#pic").attr("src", MrcArray[--Mrc]);
        if(Mrc < 0){  Mrc = 0; }
    }
    if(alt === "Phil"){
      $("#pic").attr("src", PhilArray[--Phil]);
        if(Phil < 0){  Phil = 0; }
    }
    if(alt === "Jap"){
      $("#pic").attr("src", JapArray[--Jap]);
        if(Jap < 0){  Jap = 0; }
    }
  });
});
