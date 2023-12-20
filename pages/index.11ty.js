const Hero = require("../src/components/Hero.js");

module.exports = {
  data: {
    layout: "layouts/base.11ty.js",
    title: "Home",
  },
  render(data) {
    return `
        <section class="boxed-fullwidth">
          ${Hero({
            title: "Amplifying digital humanities.",
            subtitle:
              "Our most important activities center on cultivating and strengthening the field of digital humanities, and providing guidance and support to those entering the field.",
          })}
        </section>
        <section class="boxed-regular">
          <h2 class="section-title">The latest from ACH</h2>
          -- RECENT POSTS --
        </section>
        <section class="boxed-fullwidth">
          -- CALL TO ACTION --
        </section>    
    `;
  },
};
