const { excerpt, formatDate } = require("../utils.js");

const faArrowRight = `
  <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 448 512" class="icon icon-animate" aria-hidden="true" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
    <path d="M190.5 66.9l22.2-22.2c9.4-9.4 24.6-9.4 33.9 0L441 239c9.4 9.4 9.4 24.6 0 33.9L246.6 467.3c-9.4 9.4-24.6 9.4-33.9 0l-22.2-22.2c-9.5-9.5-9.3-25 .4-34.3L311.4 296H24c-13.3 0-24-10.7-24-24v-32c0-13.3 10.7-24 24-24h287.4L190.9 101.2c-9.8-9.3-10-24.8-.4-34.3z"></path>
  </svg>
`;

module.exports = (items, headingLevel = "h2", layoutStyle = "grid") => {
  return `
    <ol class="recent-posts recent-posts-${layoutStyle}">
        ${items
          .map(
            (item) => `
              <li>
                <article
                  class="recent-posts-item"
                  itemScope
                  itemType="http://schema.org/Article"
                >
                  <header>
                    <${headingLevel}>
                      <a href="${item.url}" itemProp="url">
                        <span itemProp="headline">${item.data.title}</span>
                      </a>
                    </${headingLevel}>
                    <small>
                      <time dateTime=${item.data.date}>
                        ${formatDate(item.data.date)}
                      </time>
                    </small>
                  </header>
                  <section>
                    <p itemProp="description">
                      ${item.data.description || excerpt(item.content)}
                    </p>
                    <a
                      class="button-slim button-accent"
                      href="${item.url}"
                      itemProp="url"
                    >
                      Continue reading ${faArrowRight}
                    </a>
                  </section>
                </article>
              </li>
            `,
          )
          .join("\n")}
    </ol>
  `;
};
