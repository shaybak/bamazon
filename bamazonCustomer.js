var mysql = require("mysql");
var inquirer = require("inquirer");

// create the connection information for the sql database
var connection = mysql.createConnection({
    host: "localhost",

    // Port
    port: 3306,

    // Username
    user: "root",

    // Your password
    password: "Aureate*13",
    database: "bamazon"
});

// connect to the mysql server and sql database
connection.connect(function(err) {
    if (err) throw err;

    // run the start function after the connection is made to prompt the user
    displayStore();
});

function displayStore() {

    connection.query("SELECT * FROM products", function(err, result) {
        if (err) throw err;
        console.log("Welcome to BAMazon! Here's what's for sale today:")
        console.log("----------------------------------------------------");
        for (var i = 0; i < result.length; i++) {

            console.log("ID: " +
                result[i].item_id + "  |  PRODUCT: " +
                result[i].product_name + " |  DEPARTMENT: " +
                result[i].department_name + "  | PRICE: " +
                result[i].price + " | QUANTITY: " +
                result[i].stock_quantity);
        }
        console.log("----------------------------------------------------");;
        buy();
    })

}

function buy(results) {
    inquirer
        .prompt([{
                name: "idOfObject",
                type: "input",
                message: "Enter the ID of the object you want to purchase."
            },
            {
                name: "number",
                type: "input",
                message: "How many would you like to buy?"
            }
        ])
        .then(function(answers) {;

            console.log("Checking storefront...");

            // We query the database table for information
            connection.query("SELECT * FROM products", function(err, result) {

                // First, handle an error if there's an error
                if (err) throw err;


                // Create variables to use throughout the function

                // Item id chosen by customer
                var itemID = answers.idOfObject;

                // Corresponding index of item (must subtract 1 to get correct index)
                var index = answers.idOfObject - 1;

                // Quantity chosen by the customer to purchase
                var quantity = answers.number;


                // Calculates customer's total purchase price; this is displayed only if there is enough stock to cover the customer's order
                var total = quantity * price;

                // This section checks if the customer has entered a valid item ID
                if (itemID > 0 && itemID < 11) {

                    // Corresponding name of item
                    var item = result[index].product_name;


                    // Amount of stock available
                    var stock = result[index].stock_quantity;

                    // Price per unit
                    var price = result[index].price;

                    console.log("You selected " + item + " [quantity: " + quantity + "]");

                    console.log("Checking inventory...");

                    // If the customer has entered a valid item ID and the quantity requested is less than or equal to the amount in stock, the customer will get order confirmation and the total purchase price.
                    if (quantity <= stock) {
                        console.log("Thank you for your order. Your total is $" + total + ".");

                        connection.query(
                            "UPDATE products SET ? WHERE ?", [{
                                    stock_quantity: stock - quantity
                                },
                                {
                                    item_id: itemID
                                }
                            ],
                            function(err, result) {
                                if (err) throw err;
                                console.log(result.affectedRows + " product(s) updated");
                                orderAgain();
                            });


                    } else {
                        // If the customer has requested more than is in stock, they'll receive the message below.
                        if (stock > 0) {
                            console.log("Sorry! We don't have the amount requested. We have " + stock + " unit of " + item + "available for purchase.");
                            orderAgain();
                            // If the product is out of stock, the customer will receive this message.
                        } else {
                            console.log("Sorry! That item is out of stock.");
                            orderAgain();
                        }

                    }
                    // If the customer enters an invalid item ID, the console will notify them and ask if they'd like to order again.
                } else {
                    console.log("Invalid item ID. Please try again.");
                    orderAgain();
                }


            });

        });
}

// Inquirer confirm function that asks the customer if they want to order again.
// The connection is terminated if they choose not to order again.
function orderAgain() {

    inquirer
        .prompt({
            type: "confirm",
            name: "orderAgain",
            message: "Would you like to order again?"
        })
        .then(function(answer) {
            if (answer.orderAgain) {
                displayStore();
            } else {
                console.log("Thank you for using BAMazon!");
                connection.end();
            }

        });

}