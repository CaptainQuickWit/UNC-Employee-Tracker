
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


connection.connect((err) => {
    if (err) throw err;
        execute();
});
  

const execute = () => {
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
          'Update Employee'
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
  
          default:
            console.log(`Invalid action: ${answer.action}`);
            break;
        }
      });
  };
  
  function viewDept() {

  }

  function viewRole() {
  }

  function viewEmp() {
  }

  function addDept() {
  }

  function addRole() {
  }

  function addEmp() {
  } 

  function updateEmp() {

  }
