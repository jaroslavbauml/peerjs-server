var PeerServer = require('./lib').PeerServer;
var server = PeerServer({port: process.env.PORT, path: '/'});