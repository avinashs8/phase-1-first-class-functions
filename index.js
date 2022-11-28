function receivesAFunction(callback) {
    callback();
}

function returnsANamedFunction() {
    const Hello = () => console.log("Hello");
    return Hello;
}

function returnsAnAnonymousFunction() {
    return () => console.log("bye");
}
  
