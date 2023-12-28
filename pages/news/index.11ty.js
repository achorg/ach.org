const { description } = require("../../src/site-metadata.js");
const NewsItems = require("../../src/components/NewsItems.js");

module.exports = {
  data: {
    layout: "layouts/base.11ty.js",
    title: "News",
    description,
    pagination: {
      data: "collections.news",
      size: 10,
      reverse: true,
      alias: "news",
    },
  },
  async render(data) {
    return `
      <header class="page-header boxed-regular">
        <h1>News</h1>
      </header>
      <section class="boxed-regular">
        ${NewsItems(data.news, "h2", "list")}
      </section>    
    `;
  },
};
