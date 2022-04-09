"use strict";

let title= document.getElementById("title");



let a=localStorage.getItem("Data");
let info5=JSON.parse(a);

console.log(info5);

// dear.innerHTML=info5[0];
let correctanswer=[ "Cascading style sheets", "style", "background-image", " a {text-decoration : none;}", ".example"];
let score=0;
function result(){

    for ( var i=0; i< correctanswer.length-1; i++){
        if(info5[i]==correctanswer[i]){
        
   score++;
   console.log("score is", score);
   if((score>2)){
        title.innerHTML=`<h1>Congratulations!! You are Pass </h1><br><h2> ${score} / 5 Questions</h2> `; 
          title.style.color="green";
     }       
        else{
            title.innerHTML=`<h1> Hard Luck You are Fail </h1><br><h2> ${score} / 5 Questions</h2>`;
            title.style.color="red";
        }
      
    }}}


result();



/////    for(let i=0 ; i<correctanswer.length; i++ ){
//     if (info5[0]==correctanswer[0]){
//          score++;
//     }else{score+0;}
//     if (info5[1]==correctanswer[1]){
//          score++;
//     }else{score+0;}
//      if (info5[2]==correctanswer[2]){
//         score=score+1;
//     }else{score+0;}
//      if (info5[3]==correctanswer[3]){
//          score++;
//     }else{score+0;} 
//     if (info5[4]==correctanswer[4]){
//          score++;
//     }else{score+0;} 
//     return score;
//    }