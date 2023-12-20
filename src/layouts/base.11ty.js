const fs = require("fs");
const postCss = require("postcss");
const tailwind = require("tailwindcss");

const siteMetadata = require("../site-metadata.js");

const styles = fs.readFileSync("src/styles.css", "utf8");

const css = (cssCode) =>
  postCss([
    tailwind({
      content: [
        "./_site/**/*.html",
        "./pages/*.{md,html,njk,js}",
        "./src/**/*.{md,html,njk,js}",
      ],
      theme: {
        extend: {
          fontFamily: {
            sans: ["forma-djr-display", "sans-serif"],
          },
          fontWeight: {
            hairline: "100",
            thin: "200",
            extralight: "300",
            light: "400",
            regular: "500",
            medium: "600",
            bold: "700",
            extrabold: "800",
            black: "900",
          },
          colors: {
            primary: {
              100: "#dddbfb",
              200: "#a8aaff",
              400: "#5450bf",
              500: "#3c3783",
              800: "#232048",
              900: "#1c1832",
            },
            accent: {
              100: "#DBF4F8",
              200: "#C2E5F3",
              800: "#3A4B5E",
              900: "#1B283B",
            },
          },
          screens: {
            xs: "480px",
          },
          typography: {
            DEFAULT: {
              css: {
                "code::before": false,
                "code::after": false,
                "blockquote p:first-of-type::before": {
                  content: "none",
                },
                "blockquote p:first-of-type::after": {
                  content: "none",
                },
              },
            },
          },
        },
      },
      plugins: [require("@tailwindcss/typography")],
    }),
  ])
    .process(cssCode, { from: "src/styles.css" })
    .then((result) => result.css);

class BaseLayout {
  async render(data) {
    const { title: defaultTitle, description: defaultDescription } =
      siteMetadata;
    const { title, description } = data;
    const metaDescription = description || defaultDescription;

    return `
      <!doctype html>
      <html lang="en">
        <head>
          <meta charset="utf-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>${title} | ${defaultTitle}</title>
          <meta name="description" content="{metaDescription}" />
          <meta property="og:title" content="${title}" />
          <meta property="og:description" content="${metaDescription}" />
          <meta property="og:type" content="website" />
          <meta name="twitter:card" content="summary" />
          <meta name="twitter:title" content="${title}" />
          <meta name="twitter:description" content="${metaDescription}" />          
        </head>
        <body>
          <main id="main-content">
            ${data.content}
          </main>
        </body>
        <style>${await css(styles)}</style>
      </html>
    `;
  }
}

module.exports = BaseLayout;
