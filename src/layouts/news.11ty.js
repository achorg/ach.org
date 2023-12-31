const { formatDate, authorLine } = require("../utils.js");
const Breadcrumbs = require("../components/Breadcrumbs.js");

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

class NewsLayout {
  data() {
    return {
      layout: "layouts/base.11ty.js",
    };
  }

  async render(data) {
    const nextNewsItem = this.getNextCollectionItem(
      data.collections.news,
      data.page,
    );
    const prevNewsItem = this.getPreviousCollectionItem(
      data.collections.news,
      data.page,
    );

    return `
      <section class="boxed-regular">
        ${Breadcrumbs([
          { title: "News", url: "/news/" },
          { title: data.title, url: data.url },
        ])}
      </section>
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
      <nav class="related-posts boxed-regular">
        <ul>
          ${
            prevNewsItem !== undefined
              ? `<li class="previous-post">
            <a href=${prevNewsItem.url} rel="prev">
              <small class="post-date">
                <time dateTime=${prevNewsItem.data.date}>
                  ${formatDate(prevNewsItem.data.date)}
                </time>
              </small>
              <span class="post-title">
                ${faArrowLeft}
                ${prevNewsItem.data.title}
              </span>
            </a>
          </li>`
              : ""
          }
          ${
            nextNewsItem !== undefined
              ? `<li class="next-post">
            <a href=${nextNewsItem.url} rel="next">
              <small class="post-date">
                <time dateTime=${nextNewsItem.data.date}>
                  ${formatDate(nextNewsItem.data.date)}
                </time>
              </small>
              <span class="post-title">
                ${faArrowRight}
                ${nextNewsItem.data.title}
              </span>
            </a>
          </li>`
              : ""
          }
        </ul>
      </nav>       
    `;
  }
}

module.exports = NewsLayout;
