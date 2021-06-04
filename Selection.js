

"use strict"

var ind=0;
var number=[8,1,9,3,0,2];
var numberTemp=[].concat(number);
var boxX=["box1","box2","box3","box4","box5","box6"];
var box=[];

for(var i=0;i<number.length;i++)
{
  var img=document.getElementById(`${boxX[i]}`);
  console.log(img);
  var element=document.createElement('div');
  element.className="element";
  element.id=`element${i}`;
  box.push(element.id);
  element.innerText=`${number[i]}`;
  img.appendChild(element);
  
}



function Selection() {
  
  for(let i=0;i<number.length;i++)
  {  
     var min=1000;
     var index=i;
 
 
    for(let j=i;j<number.length;j++)
    {
      if(number[j]<=min)
      {
        min=number[j];
        index=j;
      }
      
    }
    
    var temp = number[index];
    number[index] = number[i];
    number[i] = temp;
  }
  

for (let i = 0; i < number.length; i++)
{

  setTimeout(animate, 1000 * i, i);
  value(i);
}



  
  
  
}




function animate(i)
{
  var img=document.getElementById(`${box[i]}`);
  console.log(i)
  img.innerText=`${number[i]}`;
}

function value(i)
{
     if(i===0)
     {
      alert("Hey !!! I am algo Dora ....an algorithm explorer !!! ...I want to sort these boxes with different values in an non decreasing order .. I have tried ..so can you please formulate the algorithm for selection sort ..which can help me ");
       i++;
      
    
     }
    
    else if(i===1)
    {
      alert("This is the approach i have used .....after completing this process .. i will be able to find a key by going inside that house ,which will lead to the next level");
      i++;
    
    }
    
  
      
    else if(i===3)
    {
      alert("Yash is a very smart boy ..but this project is very big ...so he needs help for completing this project");
     
    }
    else{
    
   
      alert("arre bhai jayada kuch expect mt kiya kro");
    
    }
  }
