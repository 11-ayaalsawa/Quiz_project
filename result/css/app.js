"use strict";

let title= document.getElementById("title");



let a=localStorage.getItem("Data");
let info5=JSON.parse(a);

// dear.innerHTML=info5[0];
let correctanswer=[ "Cascading style sheets", "style", "background-image", " a {text-decoration : none;}", ".example"];
let score=0;
function result(){
    if (info5[0]==correctanswer[0]){
        score=score+1;
    }else if (info5[1]==correctanswer[1]){
        score=score+1;
    }else if (info5[2]==correctanswer[2]){
        score=score+1;
    }else if (info5[3]==correctanswer[3]){
        score=score+1;
    }else if (info5[4]==correctanswer[4]){
        score=score+1;
    }

    if (score>2){
        title.innerHTML="pass";
    }else {
        title.innerHTML="fail";
    }
}

console.log(score);
result();

//////////////////////////////////////////////*

