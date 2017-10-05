var path = require('path');

var entry_path = path.resolve(__dirname, './app/src/js/index.js')
var output_path = path.resolve(__dirname, './app/build/');

module.exports = {
    entry: entry_path,
    output:{
        path: output_path,
        filename:'bundle.js'
    },
    module:{
        loaders:[
            { 
                test: /\.js$/,
                loader:'babel-loader', 
                exclude: path.resolve(__dirname,'./node_modules/'), 
                query:{
                        presets:['es2015', 'react']
                }
            },
            {
                test:/\.css$/,
                use:['style-loader', 'css-loader']
            }
        ]
    }
}