const HtmlWebPackPlugin = require("html-webpack-plugin");
const path = require("path");

module.exports = {

    entry: [
        "./src/index.js",
    ],
    output: {
        filename: "bundle.js",
        path: path.resolve(__dirname, "dist"),
    },

    devServer: {
        // contentBase: path.resolve(__dirname, "dist"),
        port:3000,
        contentBase: './public',
        inline:true
    },

    plugins: [
        new HtmlWebPackPlugin({
            template: path.resolve( __dirname, 'public/index.html' ),
            filename: 'index.html'
        }),
    ],


    module: {
        rules: [

            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                },
            },

            {
                test: /\.html$/,
                use: [
                    {
                        loader: 'html-loader',
                        options: {minimize: true}
                    }
                ]
            },

            {
                test: /\.css$/,
                use: [ {
                    loader: "css-loader"
                }]
            }

        ],
    },

};
