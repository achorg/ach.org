const Officer = require("../../../src/components/Officer.js");

module.exports = {
  data: {
    layout: "layouts/page.11ty.js",
    title: "Officers and Council Members",
  },
  async render() {
    return `
      <p>All terms begin and end with the close of the annual summer Executive Council meeting or (in the event no Executive Council meeting is held in the summer) on August 1st in the years listed. See also the list of <a href="/about/alumni/">ACH Office and Council alumni</a>, who have all our gratitude.</p>

      <h2>Executive Officers</h2>

      <div class="officer-container not-prose">
          ${await Officer({
            name: "Roopika Risam",
            imageSrc: "roopika-risam.jpg",
            position: "Co-President",
            affiliation: "Salem State University",
            website: "http://roopikarisam.com",
            email: "rrisam@salemstate.edu",
          })}

          ${await Officer({
            name: "Quinn Dombrowski",
            imageSrc: "quinn-dombrowski.jpg",
            position: "Co-President",
            affiliation: "Stanford University",
            email: "qad@stanford.edu",
          })}

          ${await Officer({
            name: "Lauren Tilton",
            imageSrc: "lauren-tilton.jpg",
            position: "Co-Vice President/Co-President-Elect",
            affiliation: "University of Richmond",
            website: "http://laurentilton.com/",
            email: "ltilton@richmond.edu",
          })}

          ${await Officer({
            name: "Andrew Janco",
            imageSrc: "andrew-janco.jpg",
            position: "Co-Vice President/Co-President-Elect",
            affiliation: "University of Pennsylvania Libraries",
            website: "https://apjan.co",
            email: "apjanco@upenn.edu",
          })}

          ${await Officer({
            name: "Amanda Wyatt Visconti",
            imageSrc: "amanda-visconti.png",
            position: "Secretary",
            affiliation: "University of Virginia",
            website: "http://amandavisconti.com",
            email: "visconti@virginia.edu",
          })}

          ${await Officer({
            name: "Tanya Clement",
            imageSrc: "tanya-clement.jpg",
            position: "Treasurer",
            affiliation: "University of Texas",
            website: "http://tanyaclement.org",
            email: "tclement@utexas.edu",
          })}

          ${await Officer({
            name: "Sarah Potvin",
            imageSrc: "sarah-potvin.png",
            position: "Deputy Treasurer",
            affiliation: "Texas A&M University",
            email: "spotvin@tamu.edu",
          })}

          ${await Officer({
            name: "Jewon Woo",
            imageSrc: "jewon-woo.jpg",
            position: "Communications Officer",
            affiliation: "Lorain County Community College",
            email: "jwoowinter@gmail.com",
          })}

      </div>

      <h2>Council Representative 2023-2027</h2>

      <div class="officer-container not-prose">
          ${await Officer({ name: "Dorothy Berry" })}

          ${await Officer({
            name: "Sylvia Fernández Quintanilla",
            imageSrc: "sylvia-fernandez-quintanilla.jpg",
            affiliation:
              "Public and Digital Humanities Assistant Professor, University of Texas at San Antonio",
            email: "sferna109@gmail.com",
            twitter: "sferna109",
          })}

          ${await Officer({ name: "Lauren F. Klein" })}

      </div>

      <h2>Council Representatives 2022-2026</h2>

      <div class="officer-container not-prose">
          ${await Officer({
            name: "Eduard Arriaga",
            imageSrc: "eduard-arriaga.jpg",
            affiliation: "Clark University",
            email: "earriaga@clarku.edu",
          })}

          ${await Officer({
            name: "Liz Grumbach",
            imageSrc: "liz-grumbach.png",
            affiliation: "Arizona State University",
            email: "egrumbac@asu.edu",
          })}

          ${await Officer({
            name: "Katina Rogers",
            imageSrc: "katina-rogers.jpg",
            affiliation: "Inkcap Consulting",
            website: "http://katinarogers.co",
            email: "katina@inkcapconsulting.com",
          })}

      </div>

      <h2>Council Representatives 2022-2025</h2>

      <div class="officer-container not-prose">
          ${await Officer({
            name: "Pamella Lach",
            imageSrc: "pamella-lach.png",
            affiliation: "San Diego State University",
            email: "plach@sdsu.edu",
          })}
      </div>

      <h2>Council Representatives 2021–2025</h2>

      <div class="officer-container not-prose">
          ${await Officer({
            name: "Lorena Gauthereau",
            imageSrc: "lorena-gauthereau.png",
            affiliation:
              "Digital Programs Manager and Lecturer, University of Houston",
            website: "https://lorenagauthereau.wordpress.com/",
            email: "lgauthereau@uh.edu",
          })}

          ${await Officer({
            name: "Jennifer Isasi",
            imageSrc: "jennifer-isasi.jpg",
            affiliation:
              "Director of the Digital Liberal Arts Research Initiative, Pennsylvania State University",
            website: "https://jenniferisasi.github.io",
            email: "jisasi@psu.edu",
          })}

      </div>

      <h2>Council Representatives 2022-2024</h2>

      <div class="officer-container not-prose">
          ${await Officer({
            name: "Jim McGrath",
            email: "jimmcgrath.us@gmail.com",
          })}
      </div>

      <h2>Council Representatives 2020–2024</h2>

      <div class="officer-container not-prose">
          ${await Officer({
            name: "Caitlin Pollock",
            imageSrc: "caitlin-pollock.jpg",
            affiliation:
              "Digital Scholarship Specialist, University of Michigan Library",
            email: "pollockc@umich.edu",
          })}

          ${await Officer({
            name: "Jewon Woo",
            imageSrc: "jewon-woo.jpg",
            affiliation: "Lorain County Community College",
            email: "jwoowinter@gmail.com",
          })}

      </div>

      <h2>Council Representatives 2019–2023</h2>

      <div class="officer-container not-prose">
          ${await Officer({
            name: "Anna E. Kijas",
            imageSrc: "anna-kijas.jpg",
            affiliation: "Head, Lilly Music Library and Music Librarian",
            website: "http://annakijas.com",
            email: "anna.kijas@tufts.edu",
          })}

          ${await Officer({
            name: "Zoe LeBlanc",
            imageSrc: "zoe-leblanc.jpg",
            affiliation:
              "Scholars’ Lab (University of Virginia Library) and Department of History, Vanderbilt University",
            website: "http://zoeleblanc.com",
            email: "zgleblanc@gmail.com",
          })}

          ${await Officer({
            name: "Rebecca Sutton Koeser",
            imageSrc: "rebecca-koeser.png",
            affiliation:
              "Lead Developer, Center for Digital Humanities at Princeton",
            website: "https://rlskoeser.github.io/",
            email: "rkoeser@princeton.edu",
          })}

      </div>

      <h2>Ex Officio Representatives &amp; Affiliates</h2>

      <div class="officer-container not-prose">
          ${await Officer({
            name: "Kathleen Fitzpatrick",
            imageSrc: "kathleen-fitzpatrick.jpg",
            position: "Past President (ex officio 2022-2023)",
            affiliation: "Michigan State University",
            website: "http://kfitz.info",
            email: "kfitz@kfitz.info",
          })}

          ${await Officer({
            name: "Vika Zafrin",
            imageSrc: "vika-zafrin.jpg",
            position: "Secretary Emerita/Past Secretary (ex officio 2022-2023)",
            affiliation: "Akamai Technologies",
            email: "vzafrin@wordsend.org",
          })}

          ${await Officer({
            name: "Julia Flanders",
            imageSrc: "julia-flanders.jpg",
            position: "Digital Humanities Quarterly Editor",
            affiliation: "Northeastern University",
            email: "j.flanders@northeastern.edu",
          })}

          ${await Officer({
            name: "Brandon Walsh",
            imageSrc: "brandon-walsh.jpg",
            position: "MLA Affiliate",
            affiliation:
              "Head of Student Programs, Scholars’ Lab (University of Virginia Library)",
            website: "http://walshbr.com",
            email: "walsh@virginia.edu",
          })}

          ${await Officer({
            name: "Anne Cong-Huyen",
            imageSrc: "anne-cong-huyen.jpg",
            position: "American Studies Association, DH Caucus Affiliate",
            affiliation: "University of Michigan",
            website: "https://anitaconchita.org/",
            email: "annech@umich.edu",
          })}

          ${await Officer({
            name: "Jeri Wieringa",
            imageSrc: "jeri-wieringa.jpg",
            position: "American Historical Association Affiliate",
            affiliation: "University of Alabama",
            website: "https://jeriwieringa.com/",
            email: "jewieringa@ua.edu",
          })}

      </div>   
    `;
  },
};
