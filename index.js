function add(a, b){
    return (a + b);
}

function subtract(a, b){
    return a - b;
}

function divide(a, b){
    return a/b;
}

function multiply(a, b){
    return a * b;
}

function increment(n){
    
    return n+1;
}

function decrement (n){
    return n-1;
}

function makeInt(n){
    const parsed = parseInt(n, 10);
    if (isNaN(parsed)) {return "NaN";}

    return parsed;

}

function preserveDecimal(n){
    const parsed = parseFloat(n); 
    return parsed;
}

