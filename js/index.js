
 var end,difficult;
        //var test = value;
         var difficult = document.querySelector('input[name="level"]:checked')?.value;
 function minus()
    {
        
         if (difficult =="easy") {
  
     var t1= (Math.floor(Math.random() *9) +1);
        var t2=(Math.floor(Math.random() *9) +1);
        console.log("first"+t1)
        console.log("first"+t2)
          if (t1>t2) {
            return [t1,t2];
          }
          else
          {
            return minus();
          }
      }
      else if (difficult =="medium") {
        var y1= (Math.floor(Math.random() * 90) + 10);
        var y2= (Math.floor(Math.random() * 90) + 10);
        console.log("first"+y1)
        console.log("first"+y2)
          if (y1>y2) {
            return [y1,y2];
          }
          else
          {
            return minus();
          }
        }
        else if (difficult =="hard") {
        var m1= (Math.floor(Math.random() * 900) + 100);
        var m2= (Math.floor(Math.random() * 900) + 100);
        console.log("first"+m1)
        console.log("first"+m2)
          if (m1>m2) {
            return [m1,m2];
          }
          else
          {
            return minus();
          }
        }
    }
     function devide()
    {
    
       if(difficult =="easy"){
        var d1= (Math.floor(Math.random() *9) +1);
        var d2=(Math.floor(Math.random() *9) +1);
        console.log("first"+d1)
        console.log("first"+d2)
        if(d1%d2 == 0){  
          
           return [d1,d2];


        }
        else{
          
            return devide();
        } 
    }
     else if (difficult=="medium") {
        var w1=(Math.floor(Math.random() *90) +10);
        var w2=(Math.floor(Math.random() *90) +10);
         console.log("first"+w1)
         console.log("first"+w2)
         if(w1%w2==0){
             return[w1,w2]
               }
               else {
                return devide();
               }

         }
         else if (difficult=="hard") {
            var z1= (Math.floor(Math.random() * 900) + 100);
            var z2= (Math.floor(Math.random() * 900) + 100);
            console.log("fisrt"+z1)
            console.log("first"+z2)
            if(z1%z2==0){
                return[z1,z2]
            }
            else{
                return devide();
            }
          }
         
}
function checkLevel(){
     difficult = document.querySelector('input[name="level"]:checked')?.value;
    if (difficult == "easy") {
        end = 10 ;
    } else if (difficult == "medium") {
        end = 7;
    } else {
        end = 4;
    }
}
function initialize(value)
{
    // Add active class to the current button (highlight it)
var header = document.getElementById("controlButtons");
var btns = header.getElementsByClassName("bton");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function() {
  var current = document.getElementsByClassName("active");
  current[3].className = current[3] .className.replace("active", "");
  this.className += " active";
  });
}
    

    checkLevel();
    if(value==""){
      var test = document.querySelector("button.bton.active")?.value;
    }else{
      test =value

    }
    
    var operation;
    if(test=="add") {
        operation= "+";
    }
    else if(test=="subtract"){
        operation= "-";
    }
    else if(test=="multiply"){
        operation= "*";
    }
    else{
        operation= "/";
    }

    if (document.getElementById('mytable') != null){
        document.getElementById('mytable').remove();
    }

var table = document.createElement("table");
        table.setAttribute('id','mytable');
        table.setAttribute('class','mx-auto table');

        document.getElementById("mydiv").appendChild(table);
   for (var i = 1;  i<= end; i++){
     if (difficult == "easy") {
         if (test == "subtract") {
                var t1= (Math.floor(Math.random() *9) +1);
                var t2=(Math.floor(Math.random() *9) +1);
                     var minusvalue=minus();
                     a=minusvalue[0]
                     b=minusvalue[1]
                     console.log(a,b);

             } 
             else if (test== "divide") {

        var d1= (Math.floor(Math.random() *9) +1);
        var d2=(Math.floor(Math.random() *9) +1)
                 var returnvalue=devide();
                 a=returnvalue[0]
                 b=returnvalue[1]       
               console.log(a,b);
              }
              else {
             a = (Math.floor(Math.random() *9)+1);
            b = (Math.floor(Math.random() * 9)+1);
             }
            //console.log(a[i], b[i]);

         
          
    } else if (difficult == "medium") {
         if (test == "subtract") {
                var y1= (Math.floor(Math.random() *90) +10);
                var y2=(Math.floor(Math.random() *90) +10);
                     var minusnumber=minus();
                     a=minusnumber[0]
                     b=minusnumber[1]
                     console.log(a,b);
                }
             else if (test == "divide") {
                var w1 = (Math.floor(Math.random() * 90) + 10);
                var w2 = (Math.floor(Math.random() * 90) + 10);
                     var returnresult=devide();
                     a=returnresult[0]
                     b=returnresult[1]
                     console.log(a,b);
                 }  else {
             a = (Math.floor(Math.random() *90) +10);
            b = (Math.floor(Math.random() *90) +10);
                }

              } else if (difficult == "hard"){
            if (test == "subtract") {
                var m1= (Math.floor(Math.random() *900) +100);
                var m2=(Math.floor(Math.random() *900) +100);
                     var minusresult=minus();
                     a=minusresult[0]
                     b=minusresult[1]
                     console.log(a,b);
                }            
             else if (test=="divide") {
              var z1= (Math.floor(Math.random() * 900) + 100);
            var z2= (Math.floor(Math.random() * 900) + 100);
              var returnnumber=devide();
              a=returnnumber[0]
              b=returnnumber[1]
              console.log(a,b);
            }
            else{
            a = (Math.floor(Math.random() * 900) + 100);
            b = (Math.floor(Math.random() * 900) + 100);

            }
        }
   
    
        var rowid= "row"+i

        var tr = document.createElement("tr");
        tr.setAttribute('id',rowid);
        document.getElementById("mytable").appendChild(tr);

        var td = document.createElement("td");
        td.setAttribute('class',"w-20");
     
        var newlabel1= document.createElement("label");
        newlabel1.setAttribute("id","a"+i)
        newlabel1.for="label1"
        newlabel1.innerHTML=a;
        td.appendChild(newlabel1);
        tr.appendChild(td);

        var td = document.createElement("td");
        td.setAttribute('class',"w-20");
        var newlabel2= document.createElement("label");
        newlabel2.for="sign"
        newlabel2.setAttribute("id","op")
        newlabel2.innerHTML=operation
        td.appendChild(newlabel2);
        tr.appendChild(td);
        var td = document.createElement("td");
      
        var newlabel3= document.createElement("label");
        td.setAttribute('class',"w-20");
        newlabel3.for="label3";
        newlabel3.setAttribute("id","b"+i)
        newlabel3.innerHTML=b;
        td.appendChild(newlabel3);
        tr.appendChild(td);

        var td = document.createElement("td");
        td.setAttribute('class',"w-20");
        var newlabel4= document.createElement("label");
        newlabel4.for="label4";
        newlabel4.innerHTML=("=");
        td.appendChild(newlabel4);
         tr.appendChild(td);
        
        var td = document.createElement("td");
        td.setAttribute('class',"w-20");
        td.setAttribute("class","setwidth");
        var input = document.createElement("INPUT");
        input.setAttribute("required","required");
     
        input.setAttribute("type", "text");
        input.setAttribute("id", "c"+i);
        
        input.setAttribute("onkeypress","return event.charCode >= 48 && event.charCode <= 57")
        input.setAttribute("placeholder", "?");
        td.appendChild(input);
        tr.appendChild(td);
        td = document.createElement("td");
        td.setAttribute('class',"w-20");
        var resultlabel= document.createElement("label");
        resultlabel.setAttribute("id","d"+i)
        td.appendChild(resultlabel);
       
        tr.appendChild(td);

    }
 }



 function output(){
    checkLevel();

    var checkResult = checkParams();
 var j=0;

if (checkResult){
     
    for (var i =1 ; i<=end; i++) {
        var result = parseInt(document.getElementById("c"+i).value);

       
   

        var a = parseInt(document.getElementById("a"+i).innerHTML);
        var b = parseInt(document.getElementById("b"+i).innerHTML);
        var inputResult = document.getElementById("c"+i);
        var operator= document.getElementById("op").innerHTML;
           
            var z = "";
        
        if (operator== '+') {
         z = a+ b;
        } else if (operator == '-') {
           z = a - b;
        } else if (operator == '*') {
        z = a * b;
        } else if (operator== '/') {
        z = a/ b;
         }
    
      if(z==result){
            
            inputResult.style.border = "3px solid green";
            j++;
        }  else{
            inputResult.style.border = "3px solid red";
        document.getElementById("d"+i).innerHTML=z;
        
        
        }

    }
     /* document.getElementById("answer").innerHTML=alert("You have scored " + j+" out of "+end); */
       document.getElementById("answer").innerHTML= "You have scored " + j + " out of 10" 
}        
}

function checkParams(){
    var boolResult;
    for (var i =1 ; i<=end; i++) {
        var result = parseInt(document.getElementById("c"+i).value);
         var inputResult = document.getElementById("c"+i);
        if (Number.isNaN(result)){
            inputResult.style.border = "3px solid yellow";
            inputResult.focus();
            boolResult =  false;
            return
        }
        else{
            boolResult =  true;
        }

    }
    return boolResult;

}


