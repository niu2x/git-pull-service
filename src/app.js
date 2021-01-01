const http = require('http');

const hostname = '0.0.0.0';
const port = 8080;
const git_repository=process.env.GIT_REPOSITORY;

const { exec } = require('child_process');

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');

    exec('git pull', {cwd: git_repository}, (err, stdout, stderr) => {
        if (err) {
            console.log(`error: ${err}`);
            res.end(`stderr: ${stderr}`);
            return;
        }
        res.end(`stdout: ${stdout}`);
    });
});

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});