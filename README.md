# BAMazon

## SUMMARY
This is a node-based storefront application built using Node.js and MySQL.


***


## How does it work?

### DEV SIDE

**Node.js** and **MySQL** are used in tandem to maintain and query a database of store products from BAMazon.

The database is built with MySQL workbench and populated with ten products. The bamazonCustomer.js file can query and update the database as the user interacts with the application.


### USER SIDE

Through the terminal, the user can:

* See all products for sale, including:
    * ID
    * Product Name
    * Department
    * Unit Price
    * Stock Quantity;

* Purchase a product; and

* Terminate the connection to the application or order again.


***


## Functionality Demo

### Initialize

Initiate the BAMazon application in the terminal with the command "node bamazonCustomer.js" or "nodemon bamazonCustomer.js".

![Initialize example](gifs/gif1-display-store.gif)

### Show the user the available products & ask which product the user would like to buy

When the application is initiated by the user (terminal prompt "node bamazonCustomer.js" or "nodemon bamazonCustomer.js"), a welcome message and the store's available products will populate in the terminal.

In this example, we'll purchase a copy of DOOM Eternal:

![DOOM Eternal example](gifs/gif2-doom.gif)

You can see that the console confirms the entry of each field, then immediately prints a message after this.


### Verify product

The message printed after the user enters the product ID and desired quantity is contingent upon certain verifications. There are three things the program will verify, which we'll look at.

**FIRST: Verify that the user has entered an appropriate ID that corresponds to a product.**

In our DOOM Eternal example, the program checks the storefront ("Checking storefront...") for the product. It then returns the message "You selected DOOM Eternal [quantity: 1]", acknowledging that the user has entered an ID that corresponds to a product.

![DOOM Eternal example2](gifs/gif3-doom.gif)

**SECOND: Verify that the product is in stock.**

**THIRD: Verify that the product is available in the quantity the user needs.**

### 