//Immediately Invoked Function Expressions (IIFE)

(function chai () { // named IIFE
    console.log('database connected...');
    
})(); // semicolon is required when we have two IIFE

((username) => { // unnamed IIFE
    console.log(`database connected2... ${username}`);
    
})('suprava')