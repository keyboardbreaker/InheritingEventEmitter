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