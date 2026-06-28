function checkInventory(callback) {
    setTimeout(() => {
        console.log("Check Inventory");
        callback();
    }, 2000);
}

function createOrder(callback) {
    setTimeout(() => {
        console.log("Create Order");
        callback();
    }, 1000);
}

function changePayment(callback) {
    setTimeout(() => {
        console.log("change Payment");
        callback();
    }, 2000);
}

function sendInvoice(callback) {
    setTimeout(() => {
        console.log("send Invoice");
        callback();
    }, 1000);
}

function main() {
    checkInventory(() => {
        createOrder(() => {
            changePayment(() => {
                sendInvoice(() => {
                    console.log("All Function Successfully Print");
                });
            });
        });
    });
}

main();