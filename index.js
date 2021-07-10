
const http = require('http');

const port = 8080;

const server = http.createServer((req, res) => {
  var html = buildHtml(req);
  res.writeHead(200, {
    'Content-Type': 'text/html',
    'Content-Length': html.length,
    'Expires': new Date().toUTCString()
  });
  res.end(html);
});

server.listen(port, () => {
  console.log(`Server running on port: ${port}`);
});

function buildHtml(req) {
  var header = '';
  var body = '<h1>Hello S2I World!</h1>\n<br/><hr>\n<br/>\n<p>Thanks for stopping by!</p>';

  // concatenate header string
  // concatenate body string

  return '<!DOCTYPE html>'
       + '<html><head>' + header + '</head><body>' + body + '</body></html>';
};
