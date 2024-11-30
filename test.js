const http = require('http');

const server = http.createServer((req, res) => {
    if (req.method === 'POST') {
        let uploadedBytes = 0;
        req.on('data', (chunk) => {
            uploadedBytes += chunk.length;
        });
        req.on('end', () => {
            res.end('Upload complete');
            console.log(`Received ${uploadedBytes} bytes`);
        });
    } else {
        res.end('Server running');
    }
});

server.listen(8080, () => {
    console.log('Upload server running on http://localhost:8080');
});
