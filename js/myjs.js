setInterval(function (){
  var clock= document.getElementById("clock");
    clock.innerHTML=getTime();
    
},1000);
function getTime()
{
   var date=new Date();
   var hour=date.getHours();
   var min=date.getMinutes();
   var sec=date.getSeconds();
   
    return hour.toString()+":"+min.toString()+":"+sec;
}
function changeWith(e)
{
    alert($(this).html());
   $(this).parent().css('width','100');
}