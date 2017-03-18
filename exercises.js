'use strict';

//Do not change any of the function names

function multiplyArguments() {
    if (arguments.length === 0) return 0;
    var result = 1;
    for (var i = 0; i < arguments.length; i++) {
        result = result * arguments[i];
    }
    return result;
}

function invokeCallback(cb) {
    cb();
}

function sumArray(numbers, cb) {
    var sum = numbers.reduce(function (prev, curr) {
        return prev + curr;
    });
    cb(sum);
}

function forEach(arr, cb) {
    arr.forEach(cb);
}

function map(arr, cb) {
    return arr.map(cb);
}

function getUserConstructor() {
    var User = function (options) {
        this.username = options.username;
        this.name = options.name;
        this.email = options.email;
        this.password = options.password;
    };
    return User;
}

function addPrototypeMethod(Constructor) {
    Constructor.prototype.sayHi = function(){
        return 'Hello World!';
    };
}

function addReverseString() {
    String.prototype.reverse = function(){
        return this.split('').reverse().join('');
    };
}

function nFactorial(n) {
    if(n === 2) return 2;
    return n * nFactorial(n-1);
}

function cacheFunction(cb) {
    var argCache = {};
    return function() {
        var inArg = arguments[0];
        if(argCache.hasOwnProperty(inArg)) {
            return argCache[inArg];
        }
        else {
            argCache[inArg] = cb(inArg);
            return argCache[inArg];
        }
    };
}


//Do not modify code below this line.
////--------------------------------

module.exports = {
    multiplyArguments: multiplyArguments,
    invokeCallback: invokeCallback,
    sumArray: sumArray,
    forEach: forEach,
    map: map,
    getUserConstructor: getUserConstructor,
    addPrototypeMethod: addPrototypeMethod,
    addReverseString: addReverseString,
    nFactorial: nFactorial,
    cacheFunction: cacheFunction
};
