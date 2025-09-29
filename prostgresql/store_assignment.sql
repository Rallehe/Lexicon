-- INSERT INTO products (name, price) VALUES
-- ('Laptop', 800),
-- ('Phone', 500),
-- ('Headphones', 50),
-- ('Keyboard', 40),
-- ('Mouse', 25);


-- INSERT INTO customers (name, address, phone, email) VALUES
-- ('Alice Johnson', '123 Maple St', '111-1111', 'alice@example.com'),
-- ('Bob Smith', '456 Oak St', '222-2222', 'bob@example.com'),
-- ('Evert Brown', '789 Pine St', '333-3333', 'evert@example.com');

-- INSERT INTO employees (name, salary, phone, email) VALUES
-- ('Emily Davis', 40000, '444-4444', 'emily@example.com'),
-- ('Frank Miller', 42000, '555-5555', 'frank@example.com'),
-- ('Grace Lee', 45000, '666-6666', 'grace@example.com');


-- -- Insert Order 1
-- INSERT INTO orders (order_date, customer_id, employee_id, total_price)
-- VALUES (
--     '2025-09-01',
--     (SELECT id FROM customers WHERE name = 'Alice Johnson'),
--     (SELECT id FROM employees WHERE name = 'Emily Davis'),
--     '850'
-- );

-- -- Insert products for Order 1
-- INSERT INTO orderrecords (order_id, product_id, price)
-- SELECT o.id, p.id, p.price
-- FROM orders o, products p
-- WHERE o.id = 1 AND p.name = 'Laptop';

-- INSERT INTO orderrecords (order_id, product_id, price)
-- SELECT o.id, p.id, p.price
-- FROM orders o, products p
-- WHERE o.id = 1 AND p.name = 'Headphones';

-- -- Insert Order 2
-- INSERT INTO orders (order_date, customer_id, employee_id, total_price)
-- VALUES (
--     '2025-09-02',
--     (SELECT id FROM customers WHERE name = 'Bob Smith'),
--     (SELECT id FROM employees WHERE name = 'Frank Miller'),
--     '565'
-- );

-- -- Insert products for Order 2
-- INSERT INTO orderrecords (order_id, product_id, price)
-- SELECT o.id, p.id, p.price
-- FROM orders o, products p
-- WHERE o.id = 2 AND p.name = 'Phone';

-- INSERT INTO orderrecords (order_id, product_id, price)
-- SELECT o.id, p.id, p.price
-- FROM orders o, products p
-- WHERE o.id = 2 AND p.name = 'Keyboard';

-- INSERT INTO orderrecords (order_id, product_id, price)
-- SELECT o.id, p.id, p.price
-- FROM orders o, products p
-- WHERE o.id = 2 AND p.name = 'Mouse';


-- select total_price from orders;
-- SELECT 
--     c.name AS customer,
--     o.id AS order_id,
--     o.order_date,
--     p.name AS product,
--     or2.price
-- FROM customers c
-- JOIN orders o ON c.id = o.customer_id
-- JOIN orderrecords or2 ON o.id = or2.order_id
-- JOIN products p ON or2.product_id = p.id
-- ORDER BY c.name, o.order_date, p.name;

-- SELECT 
--     e.name AS employee,
--     o.id AS order_id,
--     o.order_date,
--     p.name AS product,
--     or2.price
-- FROM employees e
-- JOIN orders o ON e.id = o.employee_id
-- JOIN orderrecords or2 ON o.id = or2.order_id
-- JOIN products p ON or2.product_id = p.id
-- ORDER BY e.name, o.order_date, p.name;








