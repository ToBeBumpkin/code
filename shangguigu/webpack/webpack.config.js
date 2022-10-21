const path = require('path')

module.exports = {
    entry: './src/js/app.js',
    output: {
        path: path.resolve(__dirname, './build'),
        filename: 'js/bundle.js'
    },
    mode: "development"
}