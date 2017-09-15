import express from 'express';
import bodyParser from 'body-parser';  //请求体解析中间件，可以解析JSON、Raw、文本、URL-encoded格式
import mongoose from 'mongoose';
import morgan from 'morgan';  //Morgan是一个node.js关于http请求的日志中间件

import {getPictures, getPicture, postPicture, deletePicture} from './app/routes/picture';

const app = express(); // Our express server!
const port = process.env.PORT || 8080;


const options = {
    useMongoClient: true,
    socketTimeoutMS: 0,
    keepAlive: true,
    reconnectTries: 30

};
mongoose.Promise = global.Promise;

mongoose.connect('mongodb://localhost/pic-pro', options).then(
    () => { console.log('successful connection')},
    err => { console.error.bind(console, 'connection error:'+err) }
);


// Body parser and Morgan middleware
app.use(bodyParser.urlencoded({ extended: true}));
app.use(bodyParser.json());
app.use(morgan('dev'));

// We tell express where to find static assets
app.use(express.static(__dirname + '/client/dist'));

// Enable CORS so that we can make HTTP request from webpack-dev-server
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header('Access-Control-Allow-Methods', 'GET,POST,DELETE');
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

// API routes
app.route('/pictures').post(postPicture).get(getPictures);
app.route('/pictures/:id').get(getPicture).delete(deletePicture);

// ...For all the other requests just sends back the Homepage
app.route("*").get((req, res) => {
    res.sendFile('client/dist/index.html', { root: __dirname });
});

app.listen(port);

console.log(`listening on port ${port}`);