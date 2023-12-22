module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy({ "./static/": "/" });
  eleventyConfig.setFrontMatterParsingOptions({ excerpt: true });

  return {
    templateFormats: ["11ty.js"],

    dir: {
      input: "pages",
      includes: "../src",
      output: "_site",
    },

    pathPrefix: "/",
  };
};
