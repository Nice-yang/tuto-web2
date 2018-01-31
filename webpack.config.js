var webpack = require("webpack");

var config = {
    entry: "./src/index.tsx",
    output: {
        filename: "./dist/js/bundle.js" // default webpack path
    },
    resolve: {
        extensions: ['.ts', '.tsx', '.js', '.jsx', '.css', '.scss']
    },
    module: {
        rules: [
            {
                test: /\.tsx$/,
                loader: 'ts-loader'
            },
            {
                test: /\.css$/,
                use: [ {
                        loader:'style-loader'
                    }, {
                        loader:'css-loader', options: {
                            sourceMap: true
                        }
                    }
                ]
            }
        ]
    }
};

module.exports = config;