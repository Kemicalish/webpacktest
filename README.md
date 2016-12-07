# webpacktest
playing with webpack

## Installing / Getting started

If you not already have Webpack and Webpack-dev-server, install them globally
```shell
npm install -g webpack webpack-dev-server
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