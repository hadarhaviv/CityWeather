module.exports = {
    entry: "./js/index.js",
    output: {
        filename: "./bundle.js"
    },
    externals: {
        jquery: 'jQuery'
    },
    mode: 'development'
}