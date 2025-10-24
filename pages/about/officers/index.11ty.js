const Officer = require("../../../src/components/Officer.js");

module.exports = {
  data: {
    layout: "templates/page.11ty.js",
    title: "Officers and Council Members",
  },
  async render() {
    return `
      <p>All terms begin and end with the close of the annual summer Executive Council meeting or (in the event no Executive Council meeting is held in the summer) on August 1st in the years listed. See also the list of <a href="/about/alumni/">ACH Office and Council alumni</a>, who have all our gratitude.</p>

      <h2>Executive Officers</h2>

      <div class="officer-container not-prose">
          ${await Officer({
            name: "Lauren Tilton",
            imageSrc: "lauren-tilton.jpg",
            position: "Co-President",
            affiliation: "University of Richmond",
            website: "http://laurentilton.com/",
            email: "ltilton@richmond.edu",
          })}

          ${await Officer({
            name: "Andrew Janco",
            imageSrc: "andrew-janco.jpg",
            position: "Co-President",
            affiliation: "University of Pennsylvania Libraries",
            website: "https://apjan.co",
            email: "apjanco@upenn.edu",
          })}

          ${await Officer({
            name: "Pamella Lach",
            imageSrc: "pamella-lach.png",
            position: "Co-Vice President/co-President Elect",
            affiliation: "San Diego State University",
            email: "plach@sdsu.edu",
          })}
          
          ${await Officer({
            name: "Liz Grumbach",
            imageSrc: "liz-grumbach.png",
            position: "Co-Vice President/co-President Elect",
            affiliation: "Arizona State University",
            email: "egrumbac@asu.edu",
          })}

          ${await Officer({
            name: "Amanda Wyatt Visconti",
            imageSrc: "amanda-visconti.png",
            position: "Secretary",
            affiliation: "University of Virginia",
            website: "https://amandavisconti.com",
            email: "visconti@virginia.edu",
          })}
          
          ${await Officer({
            name: "Claudia Berger",
            imageSrc: "claudia-berger.jpg",
            position: "Deputy Secretary",
            affiliation: "Sarah Lawrence College & Pratt School of Information",
            website: "claudiaeberger.com",
            email: "cberger@sarahlawrence.edu",
          })}

            ${await Officer({
            name: "Jajwalya Karajgikar",
            imageSrc: "JajwalyaKarajgikar.png",
            position: "Co-Deputy Secretary",
            affiliation: "University of Pennsylvania",
            website: "https://www.library.upenn.edu/author/jajwalya-karajgikar",
            email: "jajk@upenn.edu",
          })}

            ${await Officer({
            name: "Emily McGinn",
            imageSrc: "EmilyMcGinn.png",
            position: "Co-Deputy Secretary",
            affiliation: "Johns Hopkins University",
            website: "https://emilymcginn.com",
            email: "emcginn@jhu.edu",
          })}

          ${await Officer({
            name: "Kathy Torabi",
            imageSrc: "",
            position: "Treasurer",
            affiliation: "Texas A&M University",
            email: "torabik@tamu.edu",
          })}

          ${await Officer({
            name: "Amanda Regan",
            imageSrc: "amanda-regan.jpg",
            position: "Communications Officer",
            affiliation: "Clemson University",
            website: "https://amandaregan.com/",
            email: "aeregan@clemson.edu",
          })}

      </div>
      
      <h2>Council Representative 2024-2028</h2>

      <div class="officer-container not-prose">

          ${await Officer({
            name: "Jajwalya Karajgikar",
            imageSrc: "",
            affiliation: "University of Pennsylvania",
            email: "jajk@upenn.edu",
          })}
          
          ${await Officer({
            name: "Alex Wermer-Colan",
            imageSrc: "",
            affiliation: "Temple University",
            email: "alex.wermer-colan@temple.edu",
          })}
          
          ${await Officer({
            name: "Christina Boyles",
            imageSrc: "",
            affiliation: "Indiana University",
            email: "clboyles@iu.edu",
          })}

      </div>

      <h2>Council Representative 2024-2026</h2>
      <div class="officer-container not-prose">

          ${await Officer({
            name: "Winnie E. Pérez Martínez",
            imageSrc: "",
            affiliation: "University of Virginia",
            email: "wep5cd@virginia.edu",
          })}

      </div>

      <h2>Council Representative 2023-2027</h2>

      <div class="officer-container not-prose">

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
            name: "Katina Rogers",
            imageSrc: "katina-rogers.jpg",
            affiliation: "Inkcap Consulting",
            website: "http://katinarogers.co",
            email: "katina@inkcapconsulting.com",
          })}

      </div>

      <h2>Affiliates</h2>

      <div class="officer-container not-prose">

          ${await Officer({
            name: "Kathryn Wymer",
            position: "ACH Affiliates & Liaisons Committee Chair",
            affiliation: "University of North Carolina at Chapel Hill",
            email: "wymer@email.unc.edu",
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
            name: "Jennifer Ross",
            position: "American Studies Association, DH Caucus Affiliate",
            affiliation: "University of Toronto",
            email: "jennifern.ross@utoronto.ca",
          })}

           ${await Officer({
            name: "John Knox",
            affiliation: "University of North Carolina Willimington",
            email: "knoxj@uncw.edu",
          })}

          ${await Officer({
            name: "Amanda Regan",
            imageSrc: "amanda-regan.jpg",
            position: "American Historical Association Affiliate",
            affiliation: "Clemson University",
            website: "https://amandaregan.com/",
            email: "aeregan@clemson.edu",
          })}

      </div>   
    `;
  },
};
