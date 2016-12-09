const path = require('path')
const webpack = require('webpack') // eslint-disable-line
const webpackDevMiddleware = require('webpack-dev-middleware') // eslint-disable-line
const webpackHotMiddleware = require('webpack-hot-middleware') // eslint-disable-line
const express = require('express') // eslint-disable-line
const config = require('./webpack.config')

const app = express()
const compiler = webpack(config)

app.use(webpackDevMiddleware(compiler, {
  publicPath: config.output.publicPath,
  historyApiFallback: true,
}))

app.use(webpackHotMiddleware(compiler))

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist/index.html'))
})

app.listen(8080, (err) => {
  if (err) {
    console.error(err)
  } else {
    console.log('Listening at http://localhost:8080')
  }
})
