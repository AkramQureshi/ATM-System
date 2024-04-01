import inquirer from "inquirer"

let mybalance=10000;
let mypin=12345;

let pinanswer = await inquirer.prompt
(
    [
    {
    name:"pin",
    message:"enter pin number",
    type:"number"
    }
    ]
)
if (pinanswer.pin = mypin)
{
console.log("correct pin number")

let operationans = await inquirer.prompt(
    [
        {
            name:"operation",
            messsage:"option",
            type: "list",
            choices:["withdraw", "check balance"]
        }
    ]
);

if(operationans="withdraw")
let amountans= await inquirer.prompt
(
    [
        {

        }
    ]
    )
}
else 
{
    ("Incorrect pint number")
}