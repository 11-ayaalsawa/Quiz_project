"use strict";

let cssquestions = [
    {
    numb: 1,
    question: "What does CSS stands for ?",
    answer: 3,
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
    answer: 1,
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
    answer: 2,
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
    answer: 3,
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
    answer: 3,
    options: [
      "example",
      "#example",
      ".example",
      "Class example"
    ]
  }];


 





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
        //   window.location="../HTML/show.html"
      }

      else{
          i++;
          quebody(cssquestions[i]);

      }
  
  }
                                               

//////////////////////////////////////////////
let useranswer=[];
let correctanswer=[];

let choose=0;
function choose1(){
    choose=1;
    if(choose==cssquestions[i].answer)
    { label1.style.background="green"
        // alert("correct");
    } else{
        // alert("incorrect");
        label1.style.background="red"
    }


}

function choose2(){
    choose=2;
    if(choose==cssquestions[i].answer)
    {label2.style.background="green"
        // alert("correct");
    } else{
        // alert("incorrect");
        label2.style.background="red"
    }
}

function choose3(){
    choose=3;
    if(choose==cssquestions[i].answer)
    {
        // alert("correct");
        label3.style.background="green"
    } else{
        // alert("incorrect");
        label3.style.background="red"
    }

}

function choose4(){
    choose=4;
    if(choose==cssquestions[i].answer)
    {
        // alert("correct");
        label4.style.background="green"
    } else{
        // alert("incorrect");
        label4.style.background="red"
    }

}


/////////////////////////////////////////////////////

 function next(){

    if(choose>0){
        quebody(cssquestions[0]);
        nextQue();
    }
 }

/////////////////////////////////////////////////// timer

// var min =18000;
    
// var time = setInterval(function() {
//   var minutes = parseInt((min % (60 * 60)) / (60));
//   var seconds = parseInt(min % (60));
//   document.getElementById("timer").innerHTML = minutes + ":" + seconds ;
//   if (min < 0) {
//     clearInterval(timer);
//     window.location="../HTML/show.html"
//   }
//   min =  min - 1;
// }, 1000);


////////////////////////////////////////////// local 

function ansStorage(){

}








