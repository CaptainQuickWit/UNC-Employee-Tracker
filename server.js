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
    connection.query(
        `SELECT * FROM department`, (err, res) => {
            if (err) {
                throw err;
            } else {
                console.log("  ");
                console.log(
                    `============================================`
                );
                console.log(
                    `--------------Query: View Department---------`
                );
                console.log(
                    `============================================`
                );
                console.table(res);
                //console.log(res);
                console.log(
                    `============================================`
                );
                console.log(
                        `============================================`
                );

            }
        });

        runQuery();
  }

  function viewRole() {
    connection.query(
        `SELECT * FROM job`, (err, res) => {
            if (err) {
                throw err;
            } else {
                console.log("  ");
                console.log(
                    `============================================`
                );
                console.log(
                    `--------------Query: View Role--------------`
                );
                console.log(
                    `============================================`
                );
                console.table(res);
                //console.log(res);
                console.log(
                    `============================================`
                );
                console.log(
                        `============================================`
                );

            }
        });

        runQuery();

  }

  function viewEmp() {
    const query = 'SELECT first_name,last_name, employee_id FROM employee';
    connection.query(query, (err, res) => {

      if (err) throw (err);
      if (err) {
          throw err;
      } else {
        console.log("  ");
        console.log(
            `============================================`
            );
            console.log(
            `--------------Query: All employees----------`
                );
            console.log(
            `============================================`
            );
          res.forEach(({ first_name, last_name, employee_id}) => {
          console.log(
                `# First Name: ${first_name}    Last Name: ${last_name}  ID: ${employee_id}`
                );
            });
            
            console.log(
                `============================================`
                );
                console.log(
                    `============================================`
                );

            
      }
      
        
    });

    runQuery();

  }


  const addDept = () => {
    inquirer
    .prompt(
      {
        name: 'addAnDept',
        type: 'input',
        message: 'You are adding a department. If you want to (A)bort press A otherwise enter department name',
      }
    )
    .then((answer) => {
        //blank answers are treated the same as an Abort to make sure that this field does not remain blank
       if (answer.addAnDept === "A" ||answer.addAnDept === "" ) {
            runQuery();
       } else {

        connection.query(
            `INSERT INTO department (name)
             VALUES ("${answer.addAnDept}")`, (err, res) => {
                if (err) throw err;

                console.log(`\n ${answer.addAnDept} division has been added to company operations. DataBase technical info:\n `);
                console.log(
                    `============================================`
                );
                console.table(res);
                console.log(
                    `============================================`
                );
        });

       }
       runQuery();
      
    });
    
  }

  function addRole() {

    inquirer.prompt([
        {
            name: "title",
            type: "input",
            message: "Role title?",
        },
        {
            name: "salary",
            type: "input",
            message: "Role compensation in U.S. Dollars?",
            
        },
        {
            name: "dept_id_FK",
            type: "input",
            message: "What department is this role in? Make sure to give the ID",
            
        }
        ]).then((answer) => {
            /*
            connection.query(
                `INSERT INTO department (name)
                 VALUES ("${answer.addAnDept}")`, (err, res) => {*/
            const query = `INSERT INTO job (dept_id_FK, title, salary) VALUES ("${answer.dept_id_FK}", "${answer.title}", "${answer.salary}")`;
            connection.query(query, (err, res) => {
                if (err) throw err; //here
                if (err) {
                    throw err;
                } else {
                    console.log(`\n ${answer.title} has been sucessfully added! \n `);
                    console.table(res);
                    console.log("New List of roles: ");
                    viewRole();
                    runQuery();

                }
                
            });

        });
        runQuery();

  }

  function addEmp() {
    inquirer.prompt([
        {
            name: "first",
            type: "input",
            message: "First Name?",
        },
        {
            name: "last",
            type: "input",
            message: "Last Name?",
            
        },
        {
            name: "manager_id",
            type: "input",
            message: "whats the managers ID?",
            
        },
        {
            name: "job",
            type: "input",
            message: "what is the employee's job key? this will be used as the foreign key?",
            
        }
        ]).then((answer) => {

            const query = `INSERT INTO employee (job_id_FK, first_name, last_name, manager_id) VALUES ("${answer.job}", "${answer.first}", "${answer.last}", "${answer.manager_id}")`;
            connection.query(query, (err, res) => {
                if (err) throw err; //here
                if (err) {
                    throw err;
                } else {
                   
                
                    
                    console.table(res);
                    console.log("New List of employees: ");
                    viewEmp();
                    runQuery();

                }
                
            });

        });
        runQuery();

  }

  function updateEmp() {
    inquirer.prompt([
        {
            name: "employee",
            type: "input",
            message: "What is the employee's ID?",
        },
        {
            name: "role",
            type: "input",
            message: "Each role has an ID, what is the Id of the job the employee will now have?"
            
        },
        

    ]).then((answer) => {

     var query = `UPDATE employee SET job_id = ? WHERE employee_id = ?`
      // when finished prompting, insert a new item into the db with that info
      connection.query(query,
        [ answer.role_Id,  
          answer.employee_Id
        ],
        function (err, res) {
          if (err) {
              throw err;
          } else {
              console.table(res);
              viewRole();

          }

          
          
        });

        runQuery();

    })
  }
