var p1=1;
var comp=1;

function rock_hand()
{
    var rockhand=document.getElementById("display");
    rockhand.src="hand.png";
}
function paper_hand()
{
    var paperhand=document.getElementById("display");
    paperhand.src="hand2.png";
}
function scissor_hand()
{
  var scissor=document.getElementById("display");
  scissor.src="hand3.png";
}
function random()
{
  var rand=document.getElementById("comp");
  var random=Math.floor((Math.random()*3)+1);

  if(random==1)
  {
    rand.src="hand.png";
  }
  if(random==2)
  {
    rand.src="hand2.png";
  }
  if(random==3)
  {
    rand.src="hand3.png";
  }
}
function result()
{

 var user1=document.getElementById("display").src;
 var comp_src=document.getElementById("comp").src;
 
 
 if(p1==10)
 { var i;
    document.getElementById("player-sco").innerHTML="Won";
    var t=document.querySelectorAll(".cont");
   for(i=0;i<t.length;i++)
   {
      t[i].style.display="none";
   }
 }
 if(comp==10)
 { var i;
    document.getElementById("comp-sco").innerHTML="Won";
    var t=document.querySelectorAll(".cont");
   for(i=0;i<t.length;i++)
   {
      t[i].style.display="none";
   }
 }
 if(user1=="http://192.168.88.100:5500/hand2.png" && comp_src=="http://192.168.88.100:5500/hand.png")
{ 
   document.getElementById("player-sco").innerHTML=p1;
   p1++;
}
else if(user1=="http://192.168.88.100:5500/hand3.png" && comp_src=="http://192.168.88.100:5500/hand2.png")
{ 
   document.getElementById("player-sco").innerHTML=p1;
   p1++;
}
else if(user1=="http://192.168.88.100:5500/hand.png" && comp_src=="http://192.168.88.100:5500/hand3.png")
{ 
   document.getElementById("player-sco").innerHTML=p1;
   p1++;
}
else if(user1=="http://192.168.88.100:5500/hand.png" && comp_src=="http://192.168.88.100:5500/hand2.png")
{ 
   document.getElementById("comp-sco").innerHTML=comp;
   comp++;
}
else if(user1=="http://192.168.88.100:5500/hand2.png" && comp_src=="http://192.168.88.100:5500/hand3.png")
{ 
   document.getElementById("comp-sco").innerHTML=comp;
   comp++;
}
else if(user1=="http://192.168.88.100:5500/hand3.png" && comp_src=="http://192.168.88.100:5500/hand.png")
{ 
   document.getElementById("comp-sco").innerHTML=comp;
   comp++;
}

}



