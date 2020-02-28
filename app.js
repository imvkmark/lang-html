var express = require("express"),
    app = express(),
    reload = require("reload"),
    rootPath = __dirname;

var webpack = require("webpack"),
    webpackConfig = require("./webpack.config"),
    webpackDevMiddleware = require("webpack-dev-middleware"),
    webpackHotMiddleware = require("webpack-hot-middleware"),
    compiler = webpack(webpackConfig);

app.use(
    webpackDevMiddleware(compiler, {
        publicPath: webpackConfig.output.publicPath,
        noInfo: true,
        stats: {
            colors: true
        }
    })
);
app.use(webpackHotMiddleware(compiler));
app.use(express.static(__dirname + "/dist"));

app.get("/", function(req, res) {
    res.sendFile(rootPath + "/dist/index.html");
});

reload(app);

app.listen(3000, () => {
    console.log("* Server starting...");
});