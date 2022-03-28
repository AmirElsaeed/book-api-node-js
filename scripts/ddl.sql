-- DROP SCHEMA bms;

CREATE SCHEMA bms AUTHORIZATION postgres;

-- bms.book definition

-- Drop table

-- DROP TABLE bms.book;

CREATE TABLE bms.book (
	book_id serial4 NOT NULL,
	book_title varchar(200) NOT NULL,
	book_desc varchar(1000) NULL,
	book_author varchar(50) NOT NULL,
	book_publisher varchar(50) NOT NULL,
	book_pages int4 NULL,
	store_code varchar(5) NOT NULL,
	created_by varchar(50) NOT NULL,
	created_on timestamp NOT NULL,
	CONSTRAINT book_pk PRIMARY KEY (book_id)
);

-- bms.store definition

-- Drop table

-- DROP TABLE bms.store;

-- bms.store definition

-- Drop table

-- DROP TABLE bms.store;

CREATE TABLE bms.store (
	store_id serial4 NOT NULL,
	store_name varchar(100) NOT NULL,
	store_code varchar(5) NOT NULL,
	address varchar(500) NOT NULL,
	created_by varchar(50) NOT NULL,
	created_on timestamp NOT NULL,
	CONSTRAINT store_pk PRIMARY KEY (store_id)
);