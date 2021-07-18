
DROP DATABASE IF EXISTS employee_db;
CREATE DATABASE employee_db;
USE employee_db;

CREATE TABLE employee (
    id INT NOT NULL AUTO_INCREMENT,
    first_name VARCHAR (30),
    last_name VARCHAR (30),
    role_id INT (20),
    FOREIGN KEY (role_id) REFERENCES role(id),
    manager_id INT (20),
    FOREIGN KEY (manager_id) REFERENCES employee(id),
    PRIMARY KEY (id),
);

CREATE TABLE department (
    id INT NOT NULL AUTO_INCREMENT,
    department_name VARCHAR(30),
    PRIMARY KEY (id),
);

CREATE TABLE role (
    id INT NOT NULL AUTO_INCREMENT,
    title VARCHAR(30),
    salary DECIMAL (10,2),  
    department_id INT (20),
    FOREIGN KEY (department_id) REFERENCES department(id),
    PRIMARY KEY (id),
);

/*SELECT <== do i really need this..?*/ 