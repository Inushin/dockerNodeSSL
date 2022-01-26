const https = require(`https`);
const fs = require(`fs`);
const hostname = '0.0.0.0';
const port = 3000;

const options = {
  key: fs.readFileSync('/etc/letsencrypt/live/DOMAIN/privkey.pem'),
  cert: fs.readFileSync('/etc/letsencrypt/live/DOMAIN/cert.pem')
};

const server = https.createServer(options, (req, res) => {
  res.writeHead(200);
  res.end(`hello world\n`);
console.log(`Server running at https://${hostname}:${port}/`);
}).listen(3000);
