const path = require('path');
const Components = require('unplugin-vue-components/webpack')
const { ElementPlusResolver } = require('unplugin-vue-components/resolvers')

module.exports = {
    resolve: {
        alias: {
            '@': path.resolve('resources/js'),
        },
    },
    output: {
        chunkFilename: 'js/[name].js?id=[chunkhash]',
    },
    plugins: [
        Components({
            resolvers: [ElementPlusResolver()],
        }),
    ],
    // rules: [{
    //     test: /\.scss$/,
    //     use: [{
    //         loader: "style-loader" // creates style nodes from JS strings
    //     }, {
    //         loader: "css-loader" // translates CSS into CommonJS
    //     }, {
    //         loader: "sass-loader" // compiles Sass to CSS
    //     }]
    // }]
};
