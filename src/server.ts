import 'reflect-metadata';
import application from './application';
import * as http from 'http';

const PORT = process.env.PORT || 3333;

const server = http.createServer(application.instance);

server.listen(PORT, () => {

    console.log(`application started on port ${PORT}`);

});
