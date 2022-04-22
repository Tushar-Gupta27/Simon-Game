colArr = ["green","red","yellow","blue"];
gameArr = [];
userArr=[];
var userChosen;
var userChosenID;
var gameStart = false;
var level = 0;
var i = 0;
var corr=true;


function playSound(key){
  switch(key){
  case "#green": var green = new Audio('sounds/green.mp3');
  green.play();
  break;
  case "#red": var red = new Audio('sounds/red.mp3');
  red.play();
  break;
  case "#yellow": var yellow = new Audio('sounds/yellow.mp3');
  yellow.play();
  break;
  case "#blue": var blue = new Audio('sounds/blue.mp3');
  blue.play();
  break;
  }
}

function anim(keyy){

  $(keyy).addClass("pressed");
  setTimeout(function(){
    $(keyy).removeClass("pressed");
  },150);
}


function check(Arr){
    i=0;
    while(i<Arr.length){
      if(gameArr[i]!==Arr[i]){
        var wrong = new Audio("sounds/wrong.mp3");
            wrong.play();
            $("body").addClass("game-over");
            setTimeout(function(){
              $("body").removeClass("game-over")
            },200);
            $("h1").text("Game-Over! Press any key to Start!!");
            level = 0;
            gameStart=false;
            gameArr=[];
            userArr=[];
        corr = false;
        break;
        }
        i++;
    }
    if(corr===true){
      userArr=[];
      setTimeout(function(){
           nextseq();
          },1000);
    }
    // if(userArr[curLevel] === gameArr[curLevel]){
    //   console.log("success");
    //   if(userArr.length===gameArr.length){
    //     setTimeout(function(){
    //       nextseq();
    //     },1000);
    //   }
    // }
  //   else{
  //     console.log("wrong");
      // var wrong = new Audio("sounds/wrong.mp3");
      // wrong.play();
      // $("body").addClass("game-over");
      // setTimeout(function(){
      //   $("body").removeClass("game-over")
      // },200);
      // $("h1").text("Game-Over! Press any key to Start!!");
      // level = 0;
      // gameStart=false;
      // gameArr=[];
      // userArr=[]
  //
  // }
}




function nextseq(){

  level = level+1;
  $("h1").text("Level "+level);

  var ran = Math.random();
  ran = Math.floor(ran*4);

  var ranCol = colArr[ran];
  gameArr.push(ranCol);

  var selCol = "#"+ranCol;
  $(selCol).fadeOut(150).fadeIn(150);

  playSound(selCol);







}


  $(document).keypress(function(){
    if(gameStart === false){

  $("h1").text("Level " + level);
    nextseq();
  gameStart=true;
corr=true;}
})



$(".btn").click(function(event){
  console.log(event);
  userChosen = event.target.id;
  userArr.push(userChosen);
  userChosenID = "#"+userChosen;
  playSound(userChosenID);
  anim(userChosenID);

  if(gameArr.length === userArr.length){  check(userArr);}

})
