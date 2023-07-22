var i=0;
var Click=document.getElementById("plusOne");
var reset=document.getElementById("reset");
Click.addEventListener("click",function(){
  document.getElementById("personCount").innerHTML="The number of persons you have across are: " +i++;
});
reset.addEventListener("click",function(){
    document.getElementById("personCount").innerHTML="The number of persons you have across are: "+0;
    i=1;
})