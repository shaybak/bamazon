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
        console.log("Here's what's for sale today:")
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
    })

}

// function start() {
//     inquirer
//         .prompt([{
//             name: "postOrBid",
//             type: "list",
//             message: "Would you like to [POST] an auction or [BID] on an auction?",
//             choices: ["POST", "BID", "EXIT"]
//         }])
//         .then(function(answer) {
//             // based on their answer, either call the bid or the post functions
//             if (answer.postOrBid === "POST") {
//                 postAuction();
//             } else if (answer.postOrBid === "BID") {
//                 bidAuction();
//             } else {
//                 connection.end();
//             }
//         });
// }