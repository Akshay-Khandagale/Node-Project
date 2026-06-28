function checkInventory() {
    setTimeout(() => {
        console.log("Check Inventory");
    }, 2000);
}

function createOrder() {
    setTimeout(() => {
        console.log("Create Order");
    }, 1000);
}

function changePayment() {
    setTimeout(() => {
        console.log("change Payment");
    }, 2000);
}

function sendInvoice() {
    setTimeout(() => {
        console.log("send Invoice");
    }, 1000);
}

function main() {
    checkInventory();
    createOrder();
    changePayment();
    sendInvoice();
}

main();

// There are work but not proper sequencly function work
// Check proper sequencly function  work - see ex. callbackHell_MultipleFun2.js