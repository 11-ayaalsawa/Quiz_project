"use strict";

let title= document.getElementById("title");



let a=localStorage.getItem("Data");
let info5=JSON.parse(a);

console.log(info5);

// dear.innerHTML=info5[0];
let correctanswer=[ "Cascading style sheets", "style", "background-image", " a {text-decoration : none;}", ".example"];
let score=0;
function result(){
   
    if (info5[0]==correctanswer[0]){
         score++;
    }else if (info5[1]==correctanswer[1]){
         score++;
    }else if (info5[2]==correctanswer[2]){
        score=score+1;
    }else if (info5[3]==correctanswer[3]){
         score++;
    }else if (info5[4]==correctanswer[4]){
         score++;
    }

    // for ( var i=0; i< correctanswer.length-1; i++){
    //     if(info5[i]==correctanswer[i]){
    //     score=5;
    //     title.innerHTML="pass";        }
    //     else{
    //         score=2;
    //         title.innerHTML="fail";
    //     }
    }

//     if (score>2){
//         title.innerHTML="pass";
//     }else {
//         title.innerHTML="fail";
//     }
//     return score;
// }

// console.log(score);
result();

//////////////////////////////////////////////*

