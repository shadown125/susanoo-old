module.exports = function (api) {
    api.cache(true);

    return {
        presets: [
            ['@babel/preset-env', {
                useBuiltIns: 'usage',
                corejs: {
                    version: 3
                }
            }]
        ],
        plugins: [
            '@babel/plugin-proposal-private-methods',
            '@babel/plugin-proposal-class-properties',
        ],
        sourceType: 'unambiguous'
    };
};