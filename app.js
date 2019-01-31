function greet(callback) {
    console.log('hello');
    var data = {
        name: 'john',
    };
    callback(data);
}

greet((data) => {
    console.log('callback was invoked');
    console.log(data);
});

greet((data) => {
    console.log('callback was invoked again');
    console.log(data.name);
});