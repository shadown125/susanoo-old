const path = require('path');
const TerserPlugin = require('terser-webpack-plugin');

module.exports = (env, argv) => {
    let mode = 'development';

    const plugins = [];

    if (!argv.watch) {
        mode = 'production';
    }

    return {
        mode,
        devtool: false,
        entry: {
            main: ['./src/scripts/main']
        },
        output: {
            path: path.resolve(__dirname, './build/'),
            publicPath: '/public/'
        },
        optimization: {
            splitChunks: {
                cacheGroups: {
                    defaultVendors: {
                        test: /[\\/]node_modules[\\/]/,
                        name: 'vendor',
                        chunks: 'all',
                        enforce: true
                    }
                }
            },
            runtimeChunk: {
                name: 'runtime'
            },
            minimizer: [
                new TerserPlugin()
            ]
        },
        plugins,
        module: {
            rules: [
                {
                    test: /\.(js|mjs)$/,
                    exclude: [
                        /\bcore-js\b/,
                        /\bwebpack\/buildin\b/
                    ],
                    use: {
                        loader: 'babel-loader',
                        options: {
                            cacheDirectory: true
                        }
                    },
                    resolve: {
                        // https://webpack.js.org/configuration/module/#resolvefullyspecified
                        fullySpecified: false
                    }
                },
                {
                    test: require.resolve('jquery'),
                    use: [
                        {
                            loader: 'expose-loader',
                            options: {
                                exposes: ['$', 'jQuery']
                            }
                        }
                    ]
                }
            ]
        }
    };
};