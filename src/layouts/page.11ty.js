class PageLayout {
  data() {
    return {
      layout: "layouts/base.11ty.js",
    };
  }

  async render(data) {
    const { title } = data;

    return `
      <header class="page-header boxed-regular">
        <h1 itemProp="headline">${title}</h1>
      </header>
      <section itemProp="articleBody" class="prose boxed-regular">
        ${data.content}
      </section>
    `;
  }
}

module.exports = PageLayout;
