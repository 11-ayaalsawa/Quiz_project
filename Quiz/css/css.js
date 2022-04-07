"use strict";



let cssquestions = [
    {
    numb: 1,
    question: "What does CSS stands for ?",
    answer: "Cascading style sheets",
    options: [
      "Cascade style sheets",
      "Color and style sheets",
      "Cascading style sheets",
      "None of the above"
    ]
  },
    {
    numb: 2,
    question: " The HTML attribute used to define the inline styles is ?",
    answer: "style",
    options: [
      "style",
      "styles",
      "class",
      "None of the above"
    ]
  },
    {
    numb: 3,
    question: "Which of the following CSS property is used to set the background image of an element?",
    answer: "background-image",
    options: [
      "background-attachment",
      "background-image",
      "background-color",
      "None of the above"
    ]
  },
    {
    numb: 4,
    question: "Which of the following is the correct syntax to display the hyperlinks without any underline?",
    answer: "a {text-decoration : none;}",
    options: [
      "a {text-decoration : underline;}",
      "a {decoration : no-underline;}",
      " a {text-decoration : none;}",
      "None of the above"
    ]
  },
    {
    numb: 5,
    question: " How to select the elements with the class name 'example'?",
    answer: ".example",
    options: [
      "example",
      "#example",
      ".example",
      "Class example"
    ]
  }];


 

  var min = 120;
    
var time = setInterval(function() {
  var minutes = parseInt((min % (60 * 60)) / (60));
  var seconds = parseInt(min % (60));
  document.getElementById("timer").innerHTML = minutes + ":" + seconds ;
  if (min < 0) {
    clearInterval(timer);
    window.location="../HTML/show.html"
    
  }
  min =  min - 1;
  // console.log(min);
}, 1000);




////////////////////////////////////////////////
// let x=[];
// function showQue(x){


//     que.innerHTML=x.question;
// let label1=document.getElementById("label1").innerHTML=x.options[0];
// let label2=document.getElementById("label2").innerHTML=x.options[1];
// let label3=document.getElementById("label3").innerHTML=x.options[2];
// let label4=document.getElementById("label4").innerHTML=x.options[3];

// }


////////////////////////////////////////////////////////

function startquiz(){
    quebody( cssquestions[0] )
  
    
  }
  console.log(cssquestions[0]);
  
  function quebody( x ){
   document.getElementById("queque").innerHTML= x.question;
   document.getElementById("label1").innerHTML= x.options[0];
   document.getElementById("label2").innerHTML= x.options[1];
   document.getElementById("label3").innerHTML= x.options[2];
   document.getElementById("label4").innerHTML= x.options[3];
  
  }
  /////////////////////////////////////////////////////////
//   let counter=0;

//   function click(x){
//       if (x==cssquestions[i].answer){

//         document.getElementById("msg").innerHTML="message";
//         counter++;
//         nextQue();
//       }
//   }

//////////////////////////////////////////////////////////
  startquiz()
  ///////////////////////////////////////////////////
  let i=0;
  function nextQue(){
      if (i==cssquestions.length-1){
          document.getElementById("next").innerHTML="Submit";
        //   window.location=""
      }

      else{
          i++;
          quebody(cssquestions[i]);

      }
  
  }
/////////////////////////////////////////////
//   let counter=0;

//   function click(x){
//       if (x==cssquestions[i].answer){

//         document.getElementById("msg").innerHTML="message";
//         counter++;
        
//       }
//       nextQue();
//   }

//////////////////////////////////////////////
let useranswer=[];
let correctanswer=[];

let choose=0;
function choose1(){
    choose=1;

}

function choose2(){
    choose=2;

}

function choose3(){
    choose=3;

}

function choose4(){
    choose=4;

}


/////////////////////////////////////////////////////

 function next(){

    if(choose>0){
        quebody(cssquestions[0]);
        nextQue();
    }

 }












