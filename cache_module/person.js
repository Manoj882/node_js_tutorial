

class Greeting {
  
    constructor(message){
        this.message = message;
    }
    
    getMessage(){
        return this.message;
    }

    setMessage(message){
        this.message = message;
    }
}

// module.exports = new Greeting("Hello Nepal");

module.exports = Greeting;
