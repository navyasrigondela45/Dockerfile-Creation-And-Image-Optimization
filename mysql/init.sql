-- Create employees table
CREATE TABLE IF NOT EXISTS employees (
    id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(100) NOT NULL,
    email VARCHAR(100) UNIQUE NOT NULL,
    department VARCHAR(50) NOT NULL,
    salary DECIMAL(10, 2) NOT NULL,
    joining_date DATE NOT NULL
);

-- Insert sample data
INSERT INTO employees (name, email, department, salary, joining_date) VALUES
('John Doe', 'john@example.com', 'IT', 75000.00, '2023-01-15'),
('Jane Smith', 'jane@example.com', 'HR', 65000.00, '2023-02-20'),
('Mike Johnson', 'mike@example.com', 'Finance', 80000.00, '2023-03-10'),
('Sarah Williams', 'sarah@example.com', 'Marketing', 70000.00, '2023-04-05'),
('David Brown', 'david@example.com', 'IT', 90000.00, '2023-05-12');

-- Create a simple stored procedure
DELIMITER //
CREATE PROCEDURE GetEmployeesByDept(IN dept_name VARCHAR(50))
BEGIN
    SELECT * FROM employees WHERE department = dept_name;
END //
DELIMITER ;

-- Create index for performance
CREATE INDEX idx_department ON employees(department);
