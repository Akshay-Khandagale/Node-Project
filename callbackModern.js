function greet(name, callback) {
    console.log("hello", name);
    callback(name);
}

greet("Akshay", function (name) {
    console.log("Good bye " + name + " - Modern CallBack");
});

// Note :- Modern Callback