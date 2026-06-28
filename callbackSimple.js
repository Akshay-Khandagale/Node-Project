function greet(name, bye) {
    console.log('Hello', name);
    bye();
}

function bye() {
    console.log("Good Bye");
}

greet('Akshay', bye)


// Note :- bye is function and he is pass to function as a parameter