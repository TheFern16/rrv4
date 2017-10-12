require('babel-register');

const express = require('express');
const React = require('react');
const ReactDOMServer = require('react-dom/server');
const ReactRouter = require('react-router-dom');
const _ = require('lodash');
const fs = require('fs');
const compression = require('compression');

const webpackDevMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');
const webpack = require('webpack');

const App = require('./js/App').default;
const config = require('./webpack.config');

const StaticRouter = ReactRouter.StaticRouter;
const port = 8080;
const baseTemplate = fs.readFileSync('./public/index.html');
console.log(baseTemplate)
const template = _.template(baseTemplate);

const server = express();

const compiler = webpack(config);
server.use(
  webpackDevMiddleware(compiler, {
    publicPath: config.output.publicPath
  })
)

server.use(webpackHotMiddleware(compiler));

server.use(compression());
server.use('/public', express.static('./public'));

server.use((req, res) => {
  const context = {};
  const body = ReactDOMServer.renderToString(
    React.createElement(StaticRouter, { location: req.url, context }, React.createElement(App)
    )
  );

  if (context.url) {
    res.redirect(301, context.url);
  }

  res.write(template({ body }));
  res.end();
});

server.listen(port, () => {
  console.log(`listening on ${port}`);
});