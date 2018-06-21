const express = require('express')
const next = require('next')
const fs = require('fs')
const Zip = require('node-zip')
const { exec } = require('child_process');

const port = parseInt(process.env.PORT, 10) || 3000
const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()
const zip = new Zip;

app.prepare()
  .then(() => {
    const server = express()

    server.get('/', (req, res) => {
      return app.render(req, res, '/', req.query)
    })

    server.get('/editor', (req, res) => {
      return app.render(req, res, '/editor', req.query)
    })

    server.get('/export', (req, res) => {
      exec('npm run skpm:build', (err, stdout, stderr) => {
        if (err) { console.log(err); }

        // zipファイルのストリームを生成して、archiverと紐付ける
        var zip_file_name = 'styleguide.sketchplugin.zip';
        zip.file('./styleguide.sketchplugin', 'Hello, World!');
        var options = {base64: false, compression:'DEFLATE'};
        fs.writeFile(zip_file_name, zip.generate(options), 'binary', function (error) {
          console.log(`wrote ${zip_file_name}`, error);
          var file = `${__dirname}/${zip_file_name}`;
          res.download(file);
        });
      });
    })

    server.get('*', (req, res) => {
      return handle(req, res)
    })

    server.listen(port, (err) => {
      if (err) throw err
      console.log(`> Ready on http://localhost:${port}`)
    })
  })
