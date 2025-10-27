const { EleventyHtmlBasePlugin } = require("@11ty/eleventy");
const pluginRss = require("@11ty/eleventy-plugin-rss");

module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy({ "./static/": "/" });
  eleventyConfig.addPassthroughCopy({ "./src/images/": "/images/" });
  eleventyConfig.addPassthroughCopy({
    "node_modules/@fontsource-variable/libre-franklin/index.css":
      "/fonts/libre-franklin.css",
    "node_modules/@fontsource-variable/libre-franklin/files": "/fonts/files",
  });
  eleventyConfig.setFrontMatterParsingOptions({ excerpt: true });

  eleventyConfig.addCollection("news", (collectionApi) =>
    collectionApi.getFilteredByGlob("pages/news/**/*.md"),
  );

  eleventyConfig.addPlugin(EleventyHtmlBasePlugin);
  eleventyConfig.addPlugin(pluginRss);

  return {
    templateFormats: ["11ty.js", "md", "njk"],
    markdownTemplateEngine: false,

    dir: {
      input: "pages",
      includes: "../src",
      output: "_site",
    },

    pathPrefix: "/",
  };
};
