module.exports = {
    entry: './script',
    output: {
        filename: 'scripts.js'
    },

    watch: true,

    watchOptions: {
        aggregateTimeout: 100
    },

    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            }
        ]
    }
};