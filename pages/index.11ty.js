const { description } = require("../src/site-metadata.js");

const Hero = require("../src/components/Hero.js");
const CallToAction = require("../src/components/CallToAction.js");
const NewsItems = require("../src/components/NewsItems.js");

module.exports = {
  data: {
    layout: "templates/base.11ty.js",
    title: "Home",
    description,
    usingHero: true,
  },
  async render(data) {
    const recentPosts = data.collections.news.slice(-2).toReversed();

    return `
      <section class="boxed-fullwidth">
      ${Hero({
      title: "Amplifying digital humanities.",
      subtitle:
        "The Association for Computers and the Humanities (ACH)'s most important activities center on cultivating and strengthening the field of digital humanities, and providing guidance and support to those entering the field.",
    })}
      </section>
      <section class="boxed-regular">
      <h2 class="section-title">The latest from ACH</h2>
      ${NewsItems(recentPosts, "h3", "list")}
      </section>
      <section class="boxed-fullwidth">

      ${await CallToAction({
      title: "Save the NEH",
      body: "The Association for Computers and the Humanities is committed to supporting and advocating for the National Endowment for the Humanities. See our statement of support for NEH and view a visualization of the impact of cuts to the NEH at <a href='https://impact.ach.org/'>impact.ach.org.</a>",
      imageSrc: "./src/images/graph-paper.svg",
      imageAlt:
        "neh",
      link: `
        <a
        href="/news/2025/02/neh-statement/"
        class="button-pill button-accent"
        >
        Read ACH's Statement in support of the NEH
        </a>
      `,
        })}
      </section>    
    `;
  },
};
