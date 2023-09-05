import express from 'express';
import http from 'http';
import cookieParser from 'cookie-parser';
import bodyParser from 'body-parser';
import compression from 'compression';
import cors from 'cors';
import mongoose from 'mongoose';
import router from './router/index';


const app = express();

app.use(cors({
    credentials: true,
}));

app.use(cookieParser());
app.use(compression());
app.use(bodyParser.json());

const server = http.createServer(app);

server.listen(8080, () => {
    console.log("Server is Running on http://localhost:8080/");
});

const MONGO_URL = //write your mongoDB url

mongoose.Promise = Promise;
mongoose.connect(MONGO_URL);
mongoose.connection.on('open', () => {
    console.log('MongoDB is connected');
});
mongoose.connection.on('error', (error: Error) => console.log(error));

app.use('/', router());

