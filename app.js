var EventEmitter = require('events'); //function constructor
var util = require('util'); //util library

function Greetr() { // my own function constructor
    // event emitter is a function constructor, when 
    //invoked with new keyword, the "this" variable porints to an empty 
    //object and it adds on properties and methods
    //but im overwriting what the "this" keyword is, so mew keyword
    //doesnt need to be used
    // basically saying - run function constructor - EventEmitter
    // and pass the new object that has already been created, then eventemitter
    //function constructor properties and methods will be added to that new object
    // super constructor 
    EventEmitter.call(this);
    this.greeting = 'Helow World'; //this, is object being created
    //when i say new and then function constructor
    //this.(adding property or methods like greeting)
}
//any objects created from Greetr, should also have
//access to the methods and properties on the prototype 
//property of EventEmitter

//any new objects i create from Greetr, will also get
// all the EventEmitter methods and properties
util.inherits(Greetr, EventEmitter); // Greetr < EventEmitter

// my own extra property and methods
// greetr is also an event emitter

//passing data to the event listener
Greetr.prototype.greet = function(data) {
    console.log(this.greeting + ': ' + data);
    this.emit('greet', data); //emit method is part of eventEmitter
    //event name parameter 'greet'
}

var greeter1 = new Greetr(); 
//able to use "on" as inherit via prototype chain of eventEmitter
greeter1.on('greet', function(data) { 
    console.log('Someone greeted! ' + data);
});

greeter1.greet('keyboardbreaker');