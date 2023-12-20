const fs = require("fs");

const heroIconsSvg = fs
  .readFileSync("src/images/hero-icons.svg", "utf8")
  .toString()
  .split("\n")
  .slice(1)
  .join("\n");

module.exports = ({ title, subtitle }) => {
  return `
    <div class="hero-section">
      <div class="boxed-regular">
        <div class="hero-icons"> 
          ${heroIconsSvg}
        </div>
        <div class="hero-body">
          <h1>${title}</h1>
          <p>${subtitle}</p>
        </div>
      </div>
    </div>
  `;
};
