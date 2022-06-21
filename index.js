function randomNumber1 (){
    return Math.floor(Math.random() * (7-1) +1)
}

const btnRoll = document.querySelector('.btn--roll');

function getRandomNumbers(){
    const number1 = randomNumber1()
    const number2 = randomNumber1()
     const img1 = document.getElementById("player1Image");
    img1.src = "/images/dice" + number1 + ".png";

    const img2 = document.getElementById("player2Img");
    img2.src = "/images/dice" + number2 + ".png";

    let containerSelector =  document.querySelector("#resultsContainer")
  if (number1 > number2){
    containerSelector.innerHTML = "<h1>Player 1 Won</h1>"
  }else if(number1 < number2){
    containerSelector.innerHTML = "<h1>Player 2 Won</h1>"
  }else{
    containerSelector.innerHTML = "<h1>Match Drawn</h1>"
  } 
}

//Rolling dice
btnRoll.addEventListener('click',getRandomNumbers)

