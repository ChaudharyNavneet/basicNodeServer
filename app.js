const PORT = process.env.PORT || 3001;

const http = require('http');

const requestHandler = require('./routes');

const server =  http.createServer(requestHandler)

server.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});