#! /usr/bin/env node    
import chalk from "chalk";
import inquirer from "inquirer";
let genNum = Math.floor(Math.random() * 5);
let user = await inquirer.prompt({
    name: "num1",
    type: "list",
    message: "Please Select Your Number: ",
    choices: ["0", "1", "2", "3", "4", "5", "6"],
});
if (genNum == parseInt(user.num1)) {
    console.log(chalk.bold.blueBright("Congratulation You Are Won The Contest."));
}
else {
    console.log(chalk.bold.redBright("Sorry Better Luck For Next Time."));
}
console.log(genNum);
