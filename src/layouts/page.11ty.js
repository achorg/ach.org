const { menuLinks } = require("../site-metadata.js");
const Breadcrumbs = require("../components/Breadcrumbs.js");

const getBreadcrumbs = (pageData) => {
  // If this page is a child in the navigation menu, return the parent
  const parent = menuLinks
    .filter((link) => link.subMenu)
    .find((link) =>
      link.subMenu.find((subLink) => subLink.link === pageData.page.url),
    );
  if (parent) return [{ title: parent.name, url: parent.link }, pageData];
  return false;
};

class PageLayout {
  data() {
    return {
      layout: "layouts/base.11ty.js",
    };
  }

  async render(data) {
    const { title, content } = data;
    const breadcrumbs = getBreadcrumbs(data);
    return `
      ${
        breadcrumbs
          ? `<section class="boxed-regular">
               ${Breadcrumbs(breadcrumbs)}
             </section>`
          : ""
      }
      <header class="page-header boxed-regular">
        <h1 itemProp="headline">${title}</h1>
      </header>
      <section itemProp="articleBody" class="prose boxed-regular">
        ${content}
      </section>
    `;
  }
}

module.exports = PageLayout;
