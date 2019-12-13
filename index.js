var inquirer = require('inquirer');


inquirer
  .prompt([
    // Here we give the user a list to choose from.
    {
      type: "list",
      message: "Which Pokemon do you choose?",
      choices: ["Bulbasaur", "Squirtle", "Charmander"],
      name: "pokemon"
    },
    // Here we ask the user to confirm.
    {
      type: "confirm",
      message: "Are you sure:",
      name: "confirm",
      default: true
    }
  ])
  .then(function(inquirerResponse) {
    // If the inquirerResponse confirms, we displays the inquirerResponse's username and pokemon from the answers.
    if (!inquirerResponse.confirm) {
      return inquirer.prompt([
        // Here we give the user a list to choose from.
        {
          type: "list",
          message: "Which Pokemon do you choose?",
          choices: ["Bulbasaur", "Squirtle", "Charmander"],
          name: "pokemon"
        }
      ])
    }
    return new Promise(function(resolve, reject) {
      if (inquirerResponse.pokemon !== 'Bulbasaur') {
        reject('You suckkkkkkkk');
      } else{
        resolve(inquirerResponse);
      }
    })
  })
  .then(function(inquirerResponse) {
    console.log("Your " + inquirerResponse.pokemon + " is ready for battle!\n");
  })
  .catch(err => {
    console.log(err);
  });