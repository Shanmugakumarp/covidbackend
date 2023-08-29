const { App } = require('./src');
cluster = require('cluster');

if (cluster.isMaster) {
    let i,
        numProcess = process.env.NODE_ENV === 'production' ? require('os').cpus().length : 1;

    if (numProcess > 1) {
        for (i = 0; i < numProcess; i++) {
            cluster.fork();
        }

        cluster.on('exit', function () {
            console.log('spanning a new process if one crashed...');
            cluster.fork();
        });
    } else {
        (new App()).bootUp();
    }

} else {
    (new App()).bootUp();
}