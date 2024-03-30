import inquirer from "inquirer";
// 1 computer will generate a random number
// 2 user input for guessing number
// 3 compare user input with computer generated number and show result
const randomNumber = Math.floor(Math.random()*10+1); 

 const answers= await inquirer.prompt([{
        name:"userguessednumber",
        type:"number",
        message:"please guess a number between (1-10): ",

 }]);

console.log(answers);

if (answers.userguessednumber==randomNumber){
     console.log("congratulation you guessed a right number");
 }
 else{console.log("sorry you guessed a wrong number try again");}

