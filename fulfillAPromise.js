var q = require('q');

//Use the popular "Q" library to create a promise.
var defer = q.defer();

//Pass console.log to the "then" method of your promise.
defer.promise.then(console.log);

// Manually resolve that promise using setTimeout with a delay of 300ms and pass
//it a parameter of "RESOLVED!".
setTimeout(defer.resolve, 300, 'RESOLVED!');
