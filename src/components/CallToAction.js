const Image = require("@11ty/eleventy-img");

const image = async (src, alt) => {
  let metadata = await Image(src, {
    formats: ["avif", "webp", "jpeg"],
    widths: [600, 1200, 2000, "auto"],
    outputDir: "./_site/img/",
  });

  let imageAttributes = {
    alt,
    sizes:
      "(max-width: 600px) 600px, (max-width: 1200px) 1200px, (max-width: 2000px) 2000px, 100vw",
    loading: "lazy",
    decoding: "async",
    style: "height:100%;width:100%;object-fit:cover",
  };
  return Image.generateHTML(metadata, imageAttributes);
};

module.exports = async ({ title, body, imageSrc, imageAlt, link }) => {
  return `
    <div class="call-to-action">
      <div class="call-to-action-overlay">
        <div class="call-to-action-content boxed-regular">
          <h2>${title}</h2>
          <p>${body}</p>
          ${link}
        </div>
      </div>
     
      </div>
    </div>
  `;
};
