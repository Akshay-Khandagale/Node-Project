function searchProd(callback) {
    setTimeout(() => {
        console.log("Search Product");
        callback();
    }, 2000);
}

function selectProd(callback) {
    setTimeout(() => {
        console.log("Select Prod");
        callback();
    }, 1000)
}

function payProd(callback) {
    setTimeout(() => {
        console.log("Payment of Prod");
        callback();
    }, 1000);
}

function main() {
    searchProd(() => {
        selectProd(() => {
            payProd(() => {
                console.log("All Function Work");
            });
        });
    });
}

main();