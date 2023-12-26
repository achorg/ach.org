const Image = require("@11ty/eleventy-img");

const achLogo = async (title) => {
  let metadata = await Image("src/images/logo.png", {
    formats: ["avif", "webp", "jpeg"],
    widths: [584],
    outputDir: "./_site/img/",
  });

  let imageAttributes = {
    alt: title,
    sizes: "(min-width: 584px) 584px, 100vw",
    loading: "eager",
    decoding: "async",
    style: "object-fit:cover",
    class: "!transition-none",
  };
  return Image.generateHTML(metadata, imageAttributes);
};

module.exports = async (title, usingHero) => {
  return `
    <header class="global-header${usingHero ? " header-with-hero" : ""}">
      <div class="header-inner boxed-regular">
        <a href="/" class="logo">${await achLogo(title)}</a>
        <Navigation />
      </div>
    </header>
  `;
};
