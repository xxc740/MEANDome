var mongoose = require('mongoose');

var dbConn = 'mongodb://localhost/Books';   //连接字符串规则:mongodb://username:password@localhost:端口号（默认27027）/database
mongoose.connect(dbConn);

mongoose.connection.on('connected', function() {
    console.log('Mongoose connected to ' + dbConn);
});

mongoose.connection.on('error', function(err) {
    console.log('Mongoose connection error: '+ err);
});


mongoose.connection.on('disconnected', function() {
    console.log('Mongoose disconnected');
});

//当应用重启或终止的时候关闭连接
Shutdown = function(msg, callback) {
    mongoose.connection.close(function() {
        console.log('Mongoose disconnected through ' + msg);
        callback();
    });
};

//nodemon重启
process.once('SIGUSR2', function() {
    Shutdown('nodemon restart', function() {
        process.kill(process.pid, 'SIGUSR2');
    });
});

//应用终止
process.on('SIGINT', function() {
    Shutdown('app termination', function() {
        process.exit(0);
    });
});



