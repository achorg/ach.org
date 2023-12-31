const { description } = require("../../src/site-metadata.js");
const NewsItems = require("../../src/components/NewsItems.js");

const faArrowLeft = `
  <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 448 512" class="icon mr-2" aria-hidden="true" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
    <path d="M257.5 445.1l-22.2 22.2c-9.4 9.4-24.6 9.4-33.9 0L7 273c-9.4-9.4-9.4-24.6 0-33.9L201.4 44.7c9.4-9.4 24.6-9.4 33.9 0l22.2 22.2c9.5 9.5 9.3 25-.4 34.3L136.6 216H424c13.3 0 24 10.7 24 24v32c0 13.3-10.7 24-24 24H136.6l120.5 114.8c9.8 9.3 10 24.8.4 34.3z"></path>
  </svg>
`;

const faArrowRight = `
  <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 448 512" class="icon ml-2" aria-hidden="true" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
    <path d="M190.5 66.9l22.2-22.2c9.4-9.4 24.6-9.4 33.9 0L441 239c9.4 9.4 9.4 24.6 0 33.9L246.6 467.3c-9.4 9.4-24.6 9.4-33.9 0l-22.2-22.2c-9.5-9.5-9.3-25 .4-34.3L311.4 296H24c-13.3 0-24-10.7-24-24v-32c0-13.3 10.7-24 24-24h287.4L190.9 101.2c-9.8-9.3-10-24.8-.4-34.3z"></path>
  </svg>
`;

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

      <section class="boxed-regular grid grid-cols-2 gap-4">
        <div class="flex justify-start">
        ${
          data.pagination.href.next
            ? `<a class="button-pill button-accent !flex items-center" href="${data.pagination.href.next}">${faArrowLeft}Older News</a>`
            : ""
        }
        </div>
        <div class="flex justify-end">
        ${
          data.pagination.href.previous
            ? `<a class="button-pill button-accent !flex items-center" href="${data.pagination.href.previous}">Newer News${faArrowRight}</a>`
            : ""
        }
        </div>
      </section>
    `;
  },
};
