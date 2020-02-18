const resolve = require('path').resolve;

module.exports = {
    entry: resolve(__dirname, 'src', 'index.js'),
    output: {
        path: resolve(__dirname, 'public'),
        filename: 'bundle.js',
    },
    devServer: {
        contentBase: resolve(__dirname, 'public'),
    },
    module: {
        rules:  [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                },
            },
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader'],
            },
            {
                test: /\.(jpe?g|gif|png|svg)$/i,
                use: {
                  loader: 'url-loader',
                }
            }
        ],
    },
};