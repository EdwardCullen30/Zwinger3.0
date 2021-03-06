const path = require('path')

module.exports = {
    mode: 'development',
    entry: {
        dashboard: './public/js/dashboard.js',
        search: './public/js/search.js'
    },
    output: {
        filename: '[name].js',
        path: path.join(__dirname,'public' , 'dist')
    },
    module: {
        rules:[{
            loader:'babel-loader',
            test:/\.js$/,
            exclude: /node_modules/
        }, {
            test: /\.s?css$/,
            use: [
                'style-loader',
                'css-loader',
                'sass-loader'
            ]
        }]
    },
    watch: true,
    devtool: 'cheap-module-eval-source-map',
    devServer: {
        contentBase: path.join(__dirname, 'views')
    }
}
