module.exports = function (eleventyConfig) {

    eleventyConfig.addPassthroughCopy('./source/assets');
    eleventyConfig.addWatchTarget('./source/assets');

    return {
        dir: {
            input: 'source',
            output: 'build',
            layout: 'layout',
            includes: 'layouts',
        },
    };
};