## BAMazon - Summary
This is a node-based storefront application built using Node.js and MySQL.


***


## How does it work?

### Developer

**Node.js** and **MySQL** are used in tandem to maintain and query a database of store products from BAMazon.

The database is built with MySQL workbench and populated with ten products. The bamazonCustomer.js file can query and update the database as the user interacts with the application.


### User

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

Initiate the BAMazon application in the terminal with one of these commands: 

```javascript
node bamazonCustomer.js
```


or 

```javascript
nodemon bamazonCustomer.js
```

![Initialize example](gifs/gif1-display-store.gif)

### Show the user the available products & ask which product the user would like to buy

When the application is initiated by the user, a welcome message and the store's available products will populate in the terminal.

In this example, we'll purchase a copy of DOOM Eternal:

![DOOM Eternal example](gifs/gif2-doom.gif)

You can see that the console confirms the entry of each field, then immediately prints a message after this.

***

### Verify product

The message printed after the user enters the product ID and desired quantity is contingent upon certain verifications. There are three things the program will verify, which we'll look at.

***
**FIRST: Verify that the user has entered an appropriate ID that corresponds to a product.**

VALID ID:
In our DOOM Eternal example, the program checks the storefront for the product, printing this message:

                "Checking storefront..."

It then returns the following message, which acknowledges that the user has entered an ID that corresponds to a product: 

                You selected DOOM Eternal [quantity: 1]

![DOOM Eternal example2](gifs/gif3-doom.gif)

INVALID ID:
Here's an example of what happens if the user enters an invalid ID:

![Invalid ID](gifs/invalid.gif)

If the user enters an invalid ID, they'll be given the following message:

                Invalid item ID. Please try again.

The user is then prompted to confirm if they would like to attempt the order again.

***
**SECOND: Verify that the product is in stock.**

IN STOCK:
Let's use the DOOM Eternal example above again for a positive confirmation. You can see that the console then prints the following:

                Checking inventory... 

Because there is enough inventory to fulfill this order, the console then prints a thank you message with the user's order total.

NOT IN STOCK:
In recent months, there's been a distinct dearth of toilet paper in real stores. BAMazon is also feeling the sting of consumer hoarding and disrupted supply chains.

So let's try to order some toilet paper, which is just completely out of stock:

![Toilet paper](gifs/gif-toilet-paper.gif)

***
**THIRD: Verify that the product is available in the quantity the user needs.**

You might be wondering how this is different from checking if the product is in stock. Well, in the DOOM Eternal example, it wasn't an issue--the user ordered one copy of the game, which was available.

Here's what happens when the product is available, but not in the quantity requested.

Let's say I want to purchase Scarface, and I love that movie so much, I want ONE THOUSAND COPIES (I mean, who doesn't?).

![Not available in quantity](gifs/gif5-not-enough-scarface.gif)

You can see that this user inquiry passes ID verification because it's a valid product, but clearly the storefront doesn't have this many in stock. It gives the user an apology message:

                Sorry! We don't have the amount requested. We have 13 unit(s) of Item: Scarface available for purchase.

So essentially our application is saying here, okay, you can't have 1000, but we do at least have some stock.

Armed with this knowledge, the user is then prompted to confirm if they would like to order again, and can respond accordingly.

***
### Update the product listing if the purchase is successful.

Let's look at our DOOM Eternal example again. If you look at the previous storefront GIFs, you'll see there were two copies in stock before the user ordered. When the user ordered one copy, the console printed several messages, one of which included "1 product(s) updated", meaning that the stock quantity for DOOM Eternal was reduced by one. Since one subtracted from two is one, there's now only one copy in stock:

![DOOM Eternal example2](gifs/gif4-updated-quantity.gif)

***
### Order again?

As you've seen in a few of these examples, the user is asked if they'd like to order again once a transaction is completed or if there's an error in processing.

If the user decides to order again, they will be shown the storefront, which will be updated if they've made any purchases that affected the stock quantity of the items.

If the user does not decide to order again, they'll be thanked for using the service and the connection to the store database will be closed, as in this example:

![Don't order again](gifs/terminate.gif)