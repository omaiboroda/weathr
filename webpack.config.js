module.exports = {
    entry: ["webpack/hot/dev-server", "./src/main.js"],
    output: {
        path: __dirname,
        filename: "bundle.js"
    },
    module: {
        loaders: [
            { test: /\.css$/, loader: "style!css" },
            { test: /\.less$/, loader: "style!css!less" },

            { test: /\.jsx$/, loader: "react-hot!traceur!jshint!jsx" },
            { test: /\.js$/, loader: "traceur?runtime!jshint", exclude: [/node_modules/, /bower_components/, /public/] }

            { test: /\.svg/, loader: "url?limit=26000&mimetype=image/svg+xml" },
            { test: /\.(woff|ttf|eot)/, loader: "url" },
        ]
    },
    resolve: {
        modulesDirectories: ["bower_components", "node_modules"]
    },

    jshint: require('./webpack.jshint.json')
};
