$(document).ready(function() {

  // put javascript code here
  console.log("page has loaded!");

  var position = [
    {x:60, y:900},
    {x:95, y:325},
    {x:120, y:360},
    {x:146, y:206},
    {x:178, y:600},
    {x:190, y:450},
    {x:206, y:415},
    {x:240, y:860},
    {x:285, y:120},
    {x:300, y:540},
    {x:325, y:486},
    {x:360, y:95},
    {x:380, y:650},
    {x:415, y:800},
    {x:450, y:920},
    {x:486, y:912},
    {x:500, y:300},
    {x:510, y:510},
    {x:540, y:825},
    {x:600, y:285},
    {x:635, y:240},
    {x:650, y:380},
    {x:800, y:190},
    {x:825, y:178},
    {x:860, y:146},
    {x:900, y:500},
    {x:912, y:635},
    {x:920, y:60},
    {x:60, y:325},
    {x:95, y:360},
    {x:120, y:206},
    {x:146, y:600},
    {x:178, y:450},
    {x:190, y:415},
    {x:206, y:860},
    {x:240, y:129},
    {x:285, y:540},
    {x:300, y:480},
    {x:325, y:90},
    {x:360, y:658},
    {x:380, y:800},
    {x:415, y:920},
    {x:450, y:902},
    {x:486, y:300},
    {x:500, y:510},
    {x:510, y:825},
    {x:540, y:285},
    {x:600, y:240},
    {x:635, y:380},
    {x:650, y:190},
    {x:800, y:178},
    {x:825, y:146},
    {x:860, y:500},
    {x:900, y:635},
    {x:912, y:200},
    {x:920, y:900}
  ];

  $("a").each(
    function(){
      var index = Math.floor(Math.random()*position.length);
      $(this).css("position", "absolute");
      $(this).css("top", position[index].y);
      $(this).css("left", position[index].x);
    }
  );

  $("p").each(
    function(){
      var index = Math.floor(Math.random()*position.length);
      $(this).css("position", "absolute");
      $(this).css("top", position[index].y);
      $(this).css("left", position[index].x);
    }
  );



});
