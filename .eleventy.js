const { DateTime } = require('luxon');
module.exports = function (eleventyConfig) {
	eleventyConfig.addFilter('postDate', (dateObj) => {
		return DateTime.fromJSDate(dateObj).toLocaleString(DateTime.DATE_MED);
	});
	eleventyConfig.addPassthroughCopy('./src/style.css');
	eleventyConfig.addPassthroughCopy('./src/assets');
	return { dir: { input: './src', output: './public' } };
};
