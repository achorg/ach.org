const fs = require("fs");
const postCss = require("postcss");
const tailwind = require("tailwindcss");

const siteMetadata = require("../site-metadata.js");

const styles = fs.readFileSync("src/styles.css", "utf8");

const Header = require("../components/Header.js");

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

const excerpt = (content, maxLength = 160) => {
  let startPosition = content.toLowerCase().indexOf("<p>") + 3;
  let endPosition = Math.min(content.toLowerCase().indexOf("</p>"));

  if (endPosition <= startPosition + maxLength)
    return content.substring(startPosition, endPosition);

  return content.substring(startPosition, startPosition + maxLength - 1) + "…";
};

class BaseLayout {
  async render(data) {
    const { title: siteTitle } = siteMetadata;

    const description =
      data.description || data.page.excerpt || excerpt(data.content);

    return `
      <!doctype html>
      <html lang="en">
        <head>
          <meta charset="utf-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>${data.title} | ${siteTitle}</title>
          <meta name="description" content="{metaDescription}" />
          <meta property="og:title" content="${data.title}" />
          <meta property="og:description" content="${description}" />
          <meta property="og:type" content="website" />
          <meta name="twitter:card" content="summary" />
          <meta name="twitter:title" content="${data.title}" />
          <meta name="twitter:description" content="${description}" />          
        </head>
        <body>
          <a href="#main-content" class="skip-link">Skip to main content</a>
          ${await Header(siteTitle, data.usingHero)}
          <main id="main-content">
            ${data.content}
          </main>
          <footer class="boxed-regular">
            <div class="license-icons" aria-hidden="true">
              <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 496 512" class="icon" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M245.83 214.87l-33.22 17.28c-9.43-19.58-25.24-19.93-27.46-19.93-22.13 0-33.22 14.61-33.22 43.84 0 23.57 9.21 43.84 33.22 43.84 14.47 0 24.65-7.09 30.57-21.26l30.55 15.5c-6.17 11.51-25.69 38.98-65.1 38.98-22.6 0-73.96-10.32-73.96-77.05 0-58.69 43-77.06 72.63-77.06 30.72-.01 52.7 11.95 65.99 35.86zm143.05 0l-32.78 17.28c-9.5-19.77-25.72-19.93-27.9-19.93-22.14 0-33.22 14.61-33.22 43.84 0 23.55 9.23 43.84 33.22 43.84 14.45 0 24.65-7.09 30.54-21.26l31 15.5c-2.1 3.75-21.39 38.98-65.09 38.98-22.69 0-73.96-9.87-73.96-77.05 0-58.67 42.97-77.06 72.63-77.06 30.71-.01 52.58 11.95 65.56 35.86zM247.56 8.05C104.74 8.05 0 123.11 0 256.05c0 138.49 113.6 248 247.56 248 129.93 0 248.44-100.87 248.44-248 0-137.87-106.62-248-248.44-248zm.87 450.81c-112.54 0-203.7-93.04-203.7-202.81 0-105.42 85.43-203.27 203.72-203.27 112.53 0 202.82 89.46 202.82 203.26-.01 121.69-99.68 202.82-202.84 202.82z"></path></svg>
              <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 496 512" class="icon" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M314.9 194.4v101.4h-28.3v120.5h-77.1V295.9h-28.3V194.4c0-4.4 1.6-8.2 4.6-11.3 3.1-3.1 6.9-4.7 11.3-4.7H299c4.1 0 7.8 1.6 11.1 4.7 3.1 3.2 4.8 6.9 4.8 11.3zm-101.5-63.7c0-23.3 11.5-35 34.5-35s34.5 11.7 34.5 35c0 23-11.5 34.5-34.5 34.5s-34.5-11.5-34.5-34.5zM247.6 8C389.4 8 496 118.1 496 256c0 147.1-118.5 248-248.4 248C113.6 504 0 394.5 0 256 0 123.1 104.7 8 247.6 8zm.8 44.7C130.2 52.7 44.7 150.6 44.7 256c0 109.8 91.2 202.8 203.7 202.8 103.2 0 202.8-81.1 202.8-202.8.1-113.8-90.2-203.3-202.8-203.3z"></path></svg>
              <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 496 512" class="icon" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M247.6 8C389.4 8 496 118.1 496 256c0 147.1-118.5 248-248.4 248C113.6 504 0 394.5 0 256 0 123.1 104.7 8 247.6 8zm.8 44.7C130.2 52.7 44.7 150.6 44.7 256c0 109.8 91.2 202.8 203.7 202.8 103.2 0 202.8-81.1 202.8-202.8.1-113.8-90.2-203.3-202.8-203.3zM137.7 221c13-83.9 80.5-95.7 108.9-95.7 99.8 0 127.5 82.5 127.5 134.2 0 63.6-41 132.9-128.9 132.9-38.9 0-99.1-20-109.4-97h62.5c1.5 30.1 19.6 45.2 54.5 45.2 23.3 0 58-18.2 58-82.8 0-82.5-49.1-80.6-56.7-80.6-33.1 0-51.7 14.6-55.8 43.8h18.2l-49.2 49.2-49-49.2h19.4z"></path></svg>
            </div>
            <p>Content licensed under <a href="https://creativecommons.org/licenses/by/3.0/" target="_blank" rel="noreferrer">CC BY-SA 3.0</a>.</p>
          </footer>          
        </body>
        <style>${await css(styles)}</style>
      </html>
    `;
  }
}

module.exports = BaseLayout;
