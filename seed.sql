USE employees_db;


INSERT INTO department (id, name)
VALUES (1, "Customer Operations");
INSERT INTO department (id, name)
VALUES (2, "Field Operations");
INSERT INTO department (id, name)
VALUES (3, "Dispatch");

INSERT INTO role (id, title, salary, department_id)
VALUES ("Video Repair", 20000, 1);
INSERT INTO role (id, title, salary, department_id)
VALUES ("Billing", 20000, 1);
INSERT INTO role (id, title, salary, department_id)
VALUES ("Sales", 100000, 1);
INSERT INTO role (id, title, salary, department_id)
VALUES ("Internet Repair", 20000, 1);
INSERT INTO role (id, title, salary, department_id)
VALUES ("Mobile Billing", 20000, 1);
INSERT INTO role (id, title, salary, department_id)
VALUES ("Mobile Repair", 20000, 1);

INSERT INTO role (id, title, salary, department_id)
VALUES ("In home technician", 20000, 2);
INSERT INTO role (id, title, salary, department_id)
VALUES ("Maintaince technician", 20000, 2);
INSERT INTO role (id, title, salary, department_id)
VALUES ("Headend technician", 25000, 2);
INSERT INTO role (id, title, salary, department_id)

VALUES ("Dispatch help desk", 15000, 3);
INSERT INTO role (id, title, salary, department_id)
VALUES ("DOJ", 15000, 3);

INSERT INTO employee (id, first_name, last_name, role_id, manager_id)
VALUES (1,"James", "Smith", 1, 11);
INSERT INTO employee (id, first_name, last_name, role_id, manager_id)
VALUES (2,"James", "Carter", 1, 11);
INSERT INTO employee (id, first_name, last_name, role_id, manager_id)
VALUES (3,"Michael", "Smith", 2, 22);
INSERT INTO employee (id, first_name, last_name, role_id, manager_id)
VALUES (4,"Michael", "Carter", 2, 22);
INSERT INTO employee (id, first_name, last_name, role_id, manager_id)
VALUES (5,"Jordan", "Smith", 3, 33);
INSERT INTO employee (id, first_name, last_name, role_id, manager_id)
VALUES (6,"Jordan", "Carter", 3, 33);
INSERT INTO employee (id, first_name, last_name, role_id, manager_id)
VALUES (7,"Henry", "Smith", 4, 44);
INSERT INTO employee (id, first_name, last_name, role_id, manager_id)
VALUES (8,"Jack", "Smith", 5, 55);
INSERT INTO employee (id, first_name, last_name, role_id, manager_id)
VALUES (9,"Joe", "Smith", 6, 66);
INSERT INTO employee (id, first_name, last_name, role_id, manager_id)
VALUES (10,"Chris", "Smith", 7, 77);
INSERT INTO employee (id, first_name, last_name, role_id, manager_id)
VALUES (11,"Liam", "Smith", 8, 88);
INSERT INTO employee (id, first_name, last_name, role_id, manager_id)
VALUES (12,"Benjamin", "Smith", 9, 99);
INSERT INTO employee (id, first_name, last_name, role_id, manager_id)
VALUES (13,"Alex", "Smith", 10, 110);
INSERT INTO employee (id, first_name, last_name, role_id, manager_id)
VALUES (14,"Ethan", "Smith", 11, 121);
