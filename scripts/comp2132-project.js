/*
grab some HTML elements
*/ 
const tddiceimage1 = document.getElementById("td-dice1-image");
const tddiceimage2 = document.getElementById("td-dice2-image");
const tddiceimage3 = document.getElementById("td-dice3-image");
const tddiceimage4 = document.getElementById("td-dice4-image");


const pscore = document.getElementById("p-score");
const cscore = document.getElementById("c-score");
const ptscore = document.getElementById("p-total-score");
const ctscore = document.getElementById("c-total-score");

const btnRoll = document.getElementById("btn-roll");
const btnNew = document.getElementById("btn-newgame");

const diceRollImage = document.getElementById("dice-roll-image");

const popup = document.getElementById("pop-up");
const popupMessage = document.getElementById("pop-up-message");



let diceCount = 0;
let totalScore1 = 0;
let totalScore2 = 0;

/**
 jquery effect
 */

$("#flip").click(function(){
    $("#panel").slideToggle("slow");
  });


/*
OBJECT DICE
*/
class Dice{
    constructor(number){
        
        this.number  = number;        
        
        }

}



Dice.prototype.roll = function(){

    this.number = Math.floor(Math.random() * 6) + 1;
 
    //return the randomly number
    return this.number;       
}
Dice.prototype.describeSelf = function(){
    let description = "";
    description += `this time roll is ${this.number}`;
    //return the above statement 'description'
    return description;
}


/*
declare 4 dice
*/
const dice1 = new Dice();
const dice2 = new Dice();
const dice3 = new Dice();
const dice4 = new Dice();


/**
 * function to display the dice image
 * 
 */

 

function diceToImage(number){
    let returnImage = "";
    switch (number) {
        case 1:
            returnImage = "images/dice_1.png";
            break;
        case 2:
            returnImage = "images/dice_2.png";
            break;
        case 3:
            returnImage = "images/dice_3.png";
            break;
        case 4:
            returnImage = "images/dice_4.png";
            break;
        case 5:
            returnImage = "images/dice_5.png";
            break;
        case 6:
            returnImage = "images/dice_6.png";
           

    }
    return returnImage;

}


/*
DEFINE A Player OBJECT
*/

class Player{
    constructor(diceA, diceB){
        this.diceA = diceA;
        this.diceB = diceB;
    }

    firstRoll(){
        let firstR = 0;
        firstR = this.diceA.roll();
        return firstR;
    }

    secondRoll(){
        let secondR = 0;
        secondR = this.diceB.roll();
        return secondR;
    }
    addToScore(){
        
        let resultScore = 0;
        let returnText = "";
        let returnArray = [];
        let firstR = 0;
        let secondR = 0;
        let score =0;
        firstR = this.diceA.roll();
        secondR = this.diceA.roll();
        if (firstR == secondR){
            score = (firstR + secondR)*2;
        }
        else if(firstR == 1 || secondR == 1){
            score = 0;
        }
        else{
            score = firstR + secondR;
        }
        
        returnArray = [firstR, secondR, score];
        return returnArray;

    }
    describeSelf(){
        let returnText ="";
        return returnText;
      }
      


}




/*
Two player
*/


    btnRoll.addEventListener("click",function(){

        
        /**You */
        const player1 = new Player(dice1,dice2);
        let player1A = player1.addToScore();
        
        tddiceimage1.src = diceToImage(player1A[0]);
        tddiceimage2.src = diceToImage(player1A[1]);
       

        pscore.innerHTML = `<b>${player1A[2]}</b>`;
        totalScore1 += player1A[2];
        ptscore.innerHTML = `<b> ${totalScore1}</b>`;
        
        /**Computer */
        let player2 = new Player(dice3,dice4);
        let player2A = player2.addToScore();

        tddiceimage3.src = diceToImage(player2A[0]);
        tddiceimage4.src = diceToImage(player2A[1]);



        cscore.innerHTML = `<b>${player2A[2]}</b>`;
        totalScore2 += player2A[2];
        ctscore.innerHTML = `<b>${totalScore2}</b>`;

        diceCount++;
        if(diceCount >= 3) {
            if(totalScore1 > totalScore2){
                
                popup.style.opacity = 1;
                popupMessage.innerHTML = `<p>you win</p>`;
            }
            else if( totalScore1 < totalScore2) {
                
                popup.style.opacity = 1;
                popupMessage.innerHTML = `<p>you lost</p>`;
            }
            else{
                
                popup.style.opacity = 1;
                popupMessage.innerHTML = `<p>break even</p>`;
            }
        
        totalScore1 = 0;
        totalScore2 = 0;
         
        }
    });

    const closePopup = document.getElementById("btn-close");
    closePopup.addEventListener("click", function(){
        popup.style.opacity = "0";
        totalScore1 = 0;
        totalScore2 = 0;
        diceCount = 0;
        pscore.innerHTML = `<b>0</b>`;
        ptscore.innerHTML = `<b> 0</b>`;
        cscore.innerHTML = `<b>0</b>`;
        ctscore.innerHTML = `<b> 0</b>`;
       
    });
    
    

    btnNew.addEventListener("click", function(){
        totalScore1 = 0;
        totalScore2 = 0;

        tddiceimage1.src = diceToImage(1);
        tddiceimage2.src = diceToImage(1);
        tddiceimage3.src = diceToImage(1);
        tddiceimage4.src = diceToImage(1);

        pscore.innerHTML = `<b>0</b>`;
        ptscore.innerHTML = `<b> 0</b>`;
        cscore.innerHTML = `<b>0</b>`;
        ctscore.innerHTML = `<b> 0</b>`;

       
    })