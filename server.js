
const mysql = require("mysql");
const inquirer = require("inquirer");
const consoleTable = require("console.table");



const connection = mysql.createConnection({
  host: 'localhost',

  // Your port; if not 3306
  port: 3306,

  // Your username
  user: 'root',

  // Be sure to update with your own MySQL password!
  password: 'qwertyuiop',
  database: 'employee_db',
});


connection.connect((error) => {

    if (error) {
        throw error;
    } else {
        console.log(`SYSTEM: TCP handshake to port: 3306 completed`);
        
        execute();
    }

});
  
function reRun (runInput) {
    
    inquirer
      .prompt({
        name: 'action',
        type: 'rawlist',
        message: 'Would you like to run another query?',
        choices: [
          'Yes',
          'No',
        ],
      })
      .then((answer) => {
        switch (answer.action) {
          case 'Yes':
            return true;
            
  
          case 'No':
            
            return false;
            

          default:
            console.log(`Error: action: ${answer.action}`);
            break;
        }});

}

function execute () {
    console.log("SYSTEM: starting up Application: UNC-Employee-Tracker");
    runQuery();
    
}

function runQuery () {
    
    inquirer
      .prompt({
        name: 'action',
        type: 'rawlist',
        message: 'What would you like to do?',
        choices: [
          'View Department',
          'View Role',
          'View Employee',
          'Add Department',
          'Add Role',
          'Add Employee',
          'Update Employee',
          'Exit'
        ],
      })
      .then((answer) => {
        switch (answer.action) {
          case 'View Department':
            viewDept();
            break;
  
          case 'View Role':
            viewRole();
            break;
  
          case 'View Employee':
            viewEmp();
            break;
  
          case 'Add Department':
            addDept();
            break;
  
          case 'Add Role':
            addRole();
            break;
  
          case 'Add Employee':
            addEmp();
            break;
          
          case 'Update Employee':
            updateEmp();
            break;

          case 'Exit':
            console.log(`SYSTEM: terminating connnection to port: 3306`);
            console.log("SYSTEM: terminating application: UNC-Employee-Tracker. Action: User Input.");
            connection.end();
            process.exit();
            break;
  
          default:
            console.log(`An unknown error has occured: ${answer.action}. The system encountered an error 
            user input registered does not match the list. Please escalate 
            through normal escalation process`);
            /**
             * a made up reference code to the this issue should a ticket be submitted about a bug by an employee using the system.
             */
            console.log("STBT-3802");
            break;
        }
      });
      
  }
  
  function viewDept() {

  }

  function viewRole() {
  }

  function viewEmp() {
    const query = 'SELECT first_name,last_name FROM employee';
    connection.query(query, (err, res) => {

      if (err) throw (err);
      
        console.log(
        `============================================`
        );
        console.log(
        `--------------Query: All employees----------`
            );
        console.log(
        `============================================`
        );
      res.forEach(({ first_name, last_name}) => {
        console.log(
            `First Name: ${first_name}    Last Name: ${last_name}`
            );
        });

        console.log(
            `============================================`
            );
            console.log(
                `============================================`
            );
    });


  }


  function addDept() {
  }

  function addRole() {
  }

  function addEmp() {
  } 

  function updateEmp() {

  }

