#! /usr/bin/cnv node

import inquirer from "inquirer";

const answer = await inquirer.prompt([
    {message : "Eneter your first number", type:"number", name: "firstNumber"},
    {message : "Eneter your second number", type:"number", name: "secondNumber"},
    {message : "Select one of the operatore to perfome ther action", type:"list", name: "operatore", choices:["ADDITION", "SUBTRACTION","MULTIPLICATION","DIVISION"],},
]);

// Conditional Statement
if (answer.operatore === "ADDITION"){
    console.log(answer.firstNumber + answer.secondNumber);
}
else if(answer.operatore === "SUBTRACTION"){
    console.log(answer.firstNumber - answer.secondNumber);
}
else if(answer.operatore === "MULTIPLICATION"){
    console.log(answer.firstNumber * answer.secondNumber);
}
else if(answer.operatore === "DIVISION"){
    console.log(answer.firstNumber / answer.secondNumber);
}
else{"please select the valid operator"};
console.log("this is an update");