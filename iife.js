
// Immediately Invoked Function Expression (IIFE)

// Each IIFE has it's own private scope
// Under the hood, node.js as well uses this same pattern

// Before a module's code is executed, NodeJs will wrap it with
// a function wrapper that provide module scope

// This saves us from having to worry about conflicting variables 
// or function

(function(){
    const superHero = "batman";
    console.log(superHero);
    
})();

(function(){
    const superHero = "superman";
    console.log(superHero);
    
})();