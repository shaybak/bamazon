DROP DATABASE IF EXISTS bamazon;

CREATE DATABASE bamazon;

USE bamazon;

CREATE TABLE products (
	item_id INTEGER AUTO_INCREMENT,
    product_name VARCHAR(30) NOT NULL,
    department_name VARCHAR(30) NOT NULL,
    price INTEGER NOT NULL,
    stock_quantity INTEGER NOT NULL,
    PRIMARY KEY (item_id)
);



productsINSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("toilet paper", "Bathroom Essentials", 9, 23);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("DOOM Eternal", "Video Games", 60, 12);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Dell Ultrawide Montior", "Computer", 300, 4);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Gaming Mouse", "Electronics", 55, 43);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Sabriel", "Books", 14, 8);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Scarface", "Movies/Entertainment", 21, 13);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Bicycle Spare Tubes", "Outdoor", 10, 10);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Wicker Basket", "Home Goods", 12, 18);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Glass Tumblers (4-Piece Set)", "Home Goods", 20, 6);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Standing Desk", "OFfice", 430, 3);