var EventEmitter = require('events'); //function constructor
var util = require('util'); //util library

function Greetr() { // my own function constructor
    this.greeting = 'Helow World';
}
//any objects created from Greetr, should also have
//access to the methods and properties on the prototype 
//property of EventEmitter

//any new objects i create from Greetr, will also get
// all the EventEmitter methods and properties
util.inherits(Greetr, EventEmitter); // Greetr < EventEmitter

// my own extra property and methods
// greetr is also an event emitter
Greetr.prototype.greet = function() {
    console.log(this.greeting);
    this.emit('greet'); //emit method is part of eventEmitter
}

var greeter1 = new Greetr(); 
//able to use "on" as inherit via prototype chain of eventEmitter
greeter1.on('greet', function() { 
    console.log('Someone greeted!')
});

greeter1.greet();