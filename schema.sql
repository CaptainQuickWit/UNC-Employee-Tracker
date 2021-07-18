DROP DATABASE IF EXISTS employee_db;
CREATE DATABASE employee_db;

USE employee_db;

CREATE TABLE department (
	department_id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(30) UNIQUE 
);

CREATE TABLE role (
    role_id INT AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(30),
    salary DECIMAL(10),
    FOREIGN KEY (role_id) REFERENCES department(department_id)
);

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

