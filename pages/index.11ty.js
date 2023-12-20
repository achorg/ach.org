const Hero = require("../src/components/Hero.js");
const CallToAction = require("../src/components/CallToAction.js");

module.exports = {
  data: {
    layout: "layouts/base.11ty.js",
    title: "Home",
  },
  async render(data) {
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

          ${await CallToAction({
            title: "Solidarity with BLM",
            body: "The Association for Computers and the Humanities stands in solidarity with the Black Lives Matter protest movement. See our statement on Black Lives Matter, Structural Racism, and Our Organization.",
            imageSrc: "./src/images/black-lives-matter.jpg",
            imageAlt:
              "Hands holding up various Black Lives Matter protest signs",
            link: `
              <a
                href="/news/2020/06/ach-statement-on-black-lives-matter-structural-racism-and-our-organization/"
                class="button-pill button-accent"
              >
                Read more
              </a>
            `,
          })}
        </section>    
    `;
  },
};
