const express = require('express')
const next = require('next')
const fs = require('fs')
const zipFolder = require('zip-folder');
const { exec, execSync } = require('child_process');

const port = parseInt(process.env.PORT, 10) || 3000
const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()

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

        execSync('rm -rf ./dist');
        execSync('mkdir dist');
        execSync('mv ./styleguide.sketchplugin ./dist');

        zipFolder('./dist', './styleguide.sketchplugin.zip', function(err) {
          if(err) {
            console.log('oh no!', err);
          } else {
            var file = `${__dirname}/styleguide.sketchplugin.zip`;
            res.download(file);
          }
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
