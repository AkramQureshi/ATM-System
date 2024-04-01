"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const inquirer_1 = __importDefault(require("inquirer"));
let mybalance = 10000;
let mypin = 12345;
let pinanswer = await inquirer_1.default.prompt([
    {
        name: "pin",
        message: "enter pin number",
        type: "number"
    }
]);
if (pinanswer.pin = mypin) {
    console.log("correct pin number");
    let operationans = await inquirer_1.default.prompt([
        {
            name: "operation",
            messsage: "option",
            type: "list",
            choices: ["withdraw", "check balance"]
        }
    ]);
    if (operationans = "withdraw")
        let amountans = await inquirer_1.default.prompt([
            {}
        ]);
}
else {
    ("Incorrect pint number");
}
