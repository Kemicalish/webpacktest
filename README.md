# webpacktest
playing with webpack

## Installing / Getting started

If you not already have Webpack install it globally 
Note: if you don't want it globally you can still access it via `./node_modules/.bin/webpack` from project root
```shell
npm install -g webpack 
```

To Launch the server with live reloading
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