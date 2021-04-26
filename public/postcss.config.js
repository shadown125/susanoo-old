module.exports = (ctx) => {
    const plugins = [
        require('autoprefixer')
    ];

    if (ctx.env === 'production') {
        plugins.push(require('postcss-csso')({
            restructure: false
        }));
    }

    return {
        plugins
    };
};