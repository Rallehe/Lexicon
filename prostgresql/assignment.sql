--CREATE TABLE IF NOT EXISTS public.customer
--(
--    id integer NOT NULL GENERATED ALWAYS AS IDENTITY ( INCREMENT 1 START 1 MINVALUE 1 MAXVALUE 2147483647 CACHE 1 ),
--    firstname character varying(50) COLLATE pg_catalog."default" NOT NULL,
--    lastname character varying(50) COLLATE pg_catalog."default" NOT NULL,
--    billingaddress character varying(100) COLLATE pg_catalog."default" NOT NULL,
--    billingzip character varying(10) COLLATE pg_catalog."default" NOT NULL,
--    billingcity character varying(50) COLLATE pg_catalog."default" NOT NULL,
--    deliveryaddress character varying(100) COLLATE pg_catalog."default" NOT NULL,
--    deliveryzip character varying(10) COLLATE pg_catalog."default" NOT NULL,
--    deliverycity character varying(50) COLLATE pg_catalog."default" NOT NULL,
--    email character varying(255) COLLATE pg_catalog."default" NOT NULL,
--    phone character varying(20) COLLATE pg_catalog."default" NOT NULL,
--    CONSTRAINT pk_customer PRIMARY KEY (id),
--    CONSTRAINT customer_email_key UNIQUE (email)
--)

--CREATE TABLE IF NOT EXISTS public.movie
--(
--    id integer NOT NULL GENERATED ALWAYS AS IDENTITY ( INCREMENT 1 START 1 MINVALUE 1 MAXVALUE 2147483647 CACHE 1 ),
--    title character varying(255) COLLATE pg_catalog."default" NOT NULL,
--    director character varying(50) COLLATE pg_catalog."default" NOT NULL,
--    price money NOT NULL,
--    release_year integer NOT NULL,
--    CONSTRAINT pk_movie PRIMARY KEY (id)
--	)

--CREATE TABLE IF NOT EXISTS public."order"
--(
--    id integer NOT NULL GENERATED ALWAYS AS IDENTITY ( INCREMENT 1 START 1 MINVALUE 1 MAXVALUE 2147483647 CACHE 1 ),
--    orderdate date NOT NULL,
--    customer_id integer NOT NULL,
--    CONSTRAINT pk_order PRIMARY KEY (id),
--    CONSTRAINT fk_order_customer FOREIGN KEY (customer_id)
--        REFERENCES public.customer (id) MATCH SIMPLE
--        ON UPDATE NO ACTION
--        ON DELETE NO ACTION
--)

--CREATE TABLE IF NOT EXISTS public.orderrow
--(
--    id integer NOT NULL GENERATED ALWAYS AS IDENTITY ( INCREMENT 1 START 1 MINVALUE 1 MAXVALUE 2147483647 CACHE 1 ),
--    order_id integer NOT NULL,
--    movie_id integer NOT NULL,
--    price money NOT NULL,
--    CONSTRAINT pk_orderrow PRIMARY KEY (id),
--    CONSTRAINT fk_orderrow_movie FOREIGN KEY (movie_id)
--        REFERENCES public.movie (id) MATCH SIMPLE
--        ON UPDATE NO ACTION
--        ON DELETE NO ACTION,
--    CONSTRAINT fk_orderrow_order FOREIGN KEY (order_id)
--        REFERENCES public."order" (id) MATCH SIMPLE
--        ON UPDATE NO ACTION
--        ON DELETE NO ACTION
--)

--insert into movie (title, director, price, release_year) 
--values ('Interstellar', 'Christoper Nolan', 179, 2014),
--		('Hobbit: Battle of the five armies', 'Peter Jacksson', 179, 2014),
--		('The Wolf of Wallstreet', 'Martin Scorcese', 119, 2013),
--		('Pulp Fiction', 'Quentin Taratino', 49, 1994);
--		('Iron Man', 'Samuel', 179, 2005),
--		('Insiduios', 'Samuel', 179, 2016),
--		('Scream', 'Per', 129, 2015),
--		('Rise', 'Kurt', 49, 2011),
--		('Harry Potter', 'JK Rowling', 129, 2004),
--		('Harry Potter 2', 'JK Rowling', 179, 2006),
--		('Ted 2', 'Robert', 199, 2022),
--		('The Sound of Music 2', 'Robert Wise', 99, 1975),
--		('Iron Man 2', 'Samuel', 179, 2008),
--		('Insiduios 2', 'Samuel', 139, 2019),
--		('Scream 2', 'Per', 79, 2020),
--		('Rise 2', 'Kurt', 99, 2013),
--		('Harry Potter 3', 'JK Rowling', 199, 2009),
--		('Harry Potter 4', 'JK Rowling', 209, 2011);

--insert into customer (firstname, lastname, billingaddress, billingzip, billingcity, deliveryaddress, deliveryzip, deliverycity, email, phone)
--			values ('Jonas', 'Gray', '23 Green Corner Street', '56743', 'Birmingham', '23 Green Corner Street', '56743', 'Birmingham', 'Jonas_gray@hotmail.com', '0708123456'),
--			('Jane', 'Harolds', '10 West street', '43123', 'London', '10 West street', '43123', 'London', 'hane_h77@gmail.com', '0701245512'),
--			('Peter', 'Birro', '12 Fox street', '45681', 'New York', '89 Moose Plaza', '45321', 'Seattle', 'Peter_the_great@hotmail.com', '0739484322');

--insert into "order" (orderdate, customer_id) values ('2024-12-20', (select id from customer where firstname = 'Jonas' and lastname  = 'Gray'));
--insert into "order" (orderdate, customer_id) values ('2025-01-01', (select id from customer where firstname = 'Jonas' and lastname  = 'Gray'));
--insert into "order" (orderdate, customer_id) values ('2025-01-15', (select id from customer where firstname = 'Peter' and lastname  = 'Birro'));

--insert into orderrow (order_id, movie_id, price) 
--values ((select id from "order" where orderdate = '2024-12-20'), 
--(select id from movie where title = 'The Wolf of Wallstreet'), 
--(select price from movie where title = 'The Wolf of Wallstreet'));

--insert into orderrow (order_id, movie_id, price) 
--values ((select id from "order" where orderdate = '2025-01-01'), 
--(select id from movie where title = 'Interstellar'), 
--(select price from movie where title = 'Interstellar'));

--insert into orderrow (order_id, movie_id, price) 
--values ((select id from "order" where orderdate = '2025-01-01'), 
--(select id from movie where title = 'Pulp Fiction'), 
--(select price from movie where title = 'Pulp Fiction'));

--insert into orderrow (order_id, movie_id, price) 
--values ((select id from "order" where orderdate = '2025-01-15'), 
--(select id from movie where title = 'The Wolf of Wallstreet'), 
--(select price from movie where title = 'The Wolf of Wallstreet'));

--insert into orderrow (order_id, movie_id, price) 
--values ((select id from "order" where orderdate = '2025-01-15'), 
--(select id from movie where title = 'The Wolf of Wallstreet'), 
--(select price from movie where title = 'The Wolf of Wallstreet'));

--update movie set price = '149' where release_year = 2014;

--select firstname, lastname, phone, email from customer;
--select * from movie order by release_year desc;
--select title from movie order by price;

--select distinct c.firstname, c.lastname, c.deliveryaddress, c.deliveryzip, c.deliverycity from customer as c
--join "order" as o on c.id = o.customer_id
--join orderrow as orow on o.id = orow.order_id
--join movie as  mon orow.movie_id = m.id
--where m.title = 'The Wolf of Wallstreet';

-- select o.id as order_id, o.orderdate, c.firstname, c.lastname, sum(orow.price) as total_cost
-- from public."order" o
-- join public.customer c on o.customer_id = c.id
-- join public.orderrow orow on o.id = orow.order_id
-- group by o.id, o.orderdate, c.firstname, c.lastname
-- order by o.orderdate;

-- alter table customer add column cellno varchar(20);

-- update customer set cellno = phone;

-- update customer set phone = '';





--------------- Queries from class ---------------
-- select * from movie;
-- select title, price from movie;
-- select * from movie where price < '100';
-- select title, release_year, price from movie where release_year > 2000; 
-- select * from movie order by price;
-- select * from movie order by price desc;
-- select * from movie order by release_year desc limit 6;
-- select * from movie order by id desc limit 6;
-- select title, price, release_year from movie where price < '150' and release_year > 2003;
-- select title, price, release_year from movie where price < '150' or release_year > 2020;
-- select * from movie where price between '100' and '179';
-- select count(*) as "Movie count" from movie;
-- select sum(price) as "Total price" from movie;
-- select max(price) from movie;
-- select min(price) from movie;
-- select max(price), min(price) from movie;
-- select avg(price::numeric) from movie; (:: scope operator) 
-- select * from movie where release_year > 2000 order by release_year desc;
-- select * from movie where title like 'T%';
-- select * from movie where title like '%a%';
-- select count(id) as "Quantity", price from movie group by price;
-- select count(id), release_year, price from movie group by price, release_year order by release_year;
-- select release_year, count(id) from movie group by release_year order by release_year;
-- select distinct price from movie order by price;
-- select order_id, count(*) as "Quantity", sum(price) as "Total cost" from orderrow group by order_id;
-- select * from customer, "order";
-- select * from customer as c join
-- "order" as o on c.id = o.customer_id;
-- select distinct c.id, firstname, lastname from customer as c
-- join "order" as o on o.id = o.customer_id;
-- select * from orderrow;


