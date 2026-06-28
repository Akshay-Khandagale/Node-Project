function searchProd() {
    const promise = new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Search Product");
            resolve();
        }, 2000);
    });
    return promise;
}

function selectProd() {
    const promise = new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Select Product");
            resolve();
        }, 1000);
    });
    return promise;
}

function payProd() {
    const promise = new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Payment Done");
            resolve();
        }, 1000);
    });
    return promise;
}

function main() {
    searchProd()
        .then(selectProd)
        .then(payProd);
}

main();