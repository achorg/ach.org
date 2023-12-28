const { formatDate, authorLine } = require("../utils.js");

class NewsLayout {
  data() {
    return {
      layout: "layouts/base.11ty.js",
    };
  }

  async render(data) {
    return `
      <article
        class="news-post boxed-regular"
        itemScope
        itemType="http://schema.org/Article"
        lang=${data.language ?? "en"}
      >
        <header class="page-header">
          <h1 itemProp="headline">${data.title}</h1>
          <p class="post-metadata">
            ${authorLine(data)}
            <span>
              <time dateTime=${data.date}>${formatDate(data.date)}</time>
            </span>
          </p>
        </header>
        <section itemProp="articleBody" class="prose">
          ${data.content}
        </section>
      </article>
    `;
  }
}

module.exports = NewsLayout;
