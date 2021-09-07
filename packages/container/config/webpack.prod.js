const {merge} = require('webpack-merge')
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin')
const commonConfig = require('./webpack.common')
const pkgJson = require('../package.json')

const domain = process.env.PRODUCTION_DOMAIN
console.log(`marketing@${domain}/marketing/latest/remoteEntry.js`)
console.log(domain)

const prodConfig = {
    mode: 'production',
    output: {
        filename: '[name].[contenthash].js',
        publicPath: '/container/latest/'
    },
    plugins: [
        new ModuleFederationPlugin({
            name: 'container',
            remotes: {
                marketing: `marketing@${domain}/marketing/latest/remoteEntry.js`
            },
            shared: pkgJson.dependencies
        })
    ]
}

module.exports = merge(commonConfig, prodConfig)