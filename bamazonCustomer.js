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

            connection.query("SELECT * FROM products", function(err, result) {
                if (err) throw err;

                var itemID = answers.idOfObject;

                var index = answers.idOfObject - 1;

                var item = result[index].product_name;

                var quantity = answers.number;

                var stock = result[index].stock_quantity;

                var price = result[index].price;

                var total = quantity * price;

                if (answers.idOfObject > 0 && answers.idOfObject < 11) {

                    console.log("You selected " + item + " [quantity: " + quantity + "]");

                    console.log("Checking inventory...");

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
                        if (stock < 0) {
                            console.log("Sorry! We don't have the amount requested. We have " + stock + " available for purchase.");
                            orderAgain();

                        } else {
                            console.log("Sorry! That item is out of stock.");
                            orderAgain();
                        }

                    }
                } else {
                    console.log("Invalid item ID. Please try again.");
                    orderAgain();
                }


            });

        });
}

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