DROP DATABASE IF EXISTS employee_db;
CREATE DATABASE employee_db;

USE employee_db;

CREATE TABLE department (
	department_id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(30) UNIQUE 
);

CREATE TABLE job (
    job_id INT AUTO_INCREMENT PRIMARY KEY,
    dept_id_FK INT,
    title VARCHAR(30),
    salary DECIMAL(10),
    FOREIGN KEY (dept_id_FK) REFERENCES department(department_id)
);

CREATE TABLE employee (
    employee_id INT AUTO_INCREMENT PRIMARY KEY,
    job_id_FK INT,
    first_name VARCHAR(30),
    last_name VARCHAR(30),
    FOREIGN KEY (job_id_FK) REFERENCES job(job_id),
    manager_id INT
);

INSERT INTO department (name)
VALUES ("Customer Operations");
INSERT INTO department (name)
VALUES ("Field Operations");
INSERT INTO department (name)
VALUES ("Dispatch");

INSERT INTO job (title, salary)
VALUES ("Video Repair", 20000);
INSERT INTO job (title, salary)
VALUES ("Billing", 20000);
INSERT INTO job (title, salary)
VALUES ("Sales", 100000);
INSERT INTO job ( title, salary)
VALUES ("Internet Repair", 20000);
INSERT INTO job ( title, salary)
VALUES ("Mobile Billing", 20000);
INSERT INTO job ( title, salary)
VALUES ("Mobile Repair", 20000);
INSERT INTO job ( title, salary)
VALUES ("In home technician", 20000);
INSERT INTO job ( title, salary)
VALUES ("Maintaince technician", 20000);
INSERT INTO job ( title, salary)
VALUES ("Hybrid Fiber Coaxial Technican", 25000);
INSERT INTO job ( title, salary)
VALUES ("Dispatch help desk", 15000);
INSERT INTO job ( title, salary)
VALUES ("DOJ", 15000);

INSERT INTO employee ( first_name, last_name,  manager_id)
VALUES ("James", "Smith", 11);
INSERT INTO employee ( first_name, last_name,  manager_id)
VALUES ("James", "Carter",  11);
INSERT INTO employee ( first_name, last_name,  manager_id)
VALUES ("Michael", "Smith",  22);
INSERT INTO employee ( first_name, last_name,  manager_id)
VALUES ("Michael", "Carter", 22);
INSERT INTO employee ( first_name, last_name,  manager_id)
VALUES ("Jordan", "Smith", 33);
INSERT INTO employee ( first_name, last_name,  manager_id)
VALUES ("Jordan", "Carter",  33);
INSERT INTO employee ( first_name, last_name,  manager_id)
VALUES ("Henry", "Smith", 44);
INSERT INTO employee ( first_name, last_name,  manager_id)
VALUES ("Jack", "Smith",  55);
INSERT INTO employee ( first_name, last_name,  manager_id)
VALUES ("Joe", "Smith",66);
INSERT INTO employee ( first_name, last_name,  manager_id)
VALUES ("Chris", "Smith",  77);
INSERT INTO employee ( first_name, last_name,  manager_id)
VALUES ("Liam", "Smith",  88);
INSERT INTO employee ( first_name, last_name,  manager_id)
VALUES ("Benjamin", "Smith",  99);
INSERT INTO employee ( first_name, last_name,  manager_id)
VALUES ("Alex", "Smith", 110);
INSERT INTO employee ( first_name, last_name,  manager_id)
VALUES ("Ethan", "Smith", 121);

