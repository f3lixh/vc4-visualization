module.exports = {
    resolve: {
        extensions: ['.js', '.jsx', '.ts', '.tsx'], // Füge hier die benötigten Erweiterungen hinzu
    },
    module: {

        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                },
            },
        ],
    },
};