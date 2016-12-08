# webpacktest
Webpack Minimal Test

## Installing / Getting started

If you not already have Webpack install it globally 

**Note:** if you don't want it globally you can still access it via `./node_modules/.bin/webpack` from project root
```shell
npm install -g webpack 
```

To Launch the server with live reloading (in development mode)
```shell
npm run serve
```

you should see your app at this url:
http://localhost:8080/

if your production app should be within an iframe you should set
```
 devServer: { 
    inline: false 
},
```
in the webpack.config.js file

you should see your app at this url:
http://localhost:8080/webpack-dev-server/
Beware that your app is rendered within an iframe (you won't see your url changes in your browser loaction bar).

## Configuration

 - **webpack.config.js**: global config
 - **webpack/conf.js**: environment specific config

## Other commands:
```shell
npm run serve:staging
```
run server in staging mode

```shell
npm run serve:prod
```
run server in production mode

```shell
npm run build
```
build bundle in development mode (files are output to the <output_dev> directory, default is `dev`, see: `webpack/env.js`)

```shell
npm run build:staging
```
build bundle in staging mode (files are output to the <output_staging> directory, default is `staging`, see: `webpack/env.js`)

```shell
npm run build:prod
```
build bundle in production mode (files are output to the <output_prod> directory, default is `prod`, see: `webpack/env.js`)


