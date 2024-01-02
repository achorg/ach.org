# ach.org

This is the source code for the ach.org website.  It's developed using very minimal Eleventy, based on the Gatsby site at <https://github.com/achorg/ach-gatsby-site> created by @ivyrze.

* Content is in markdown files in [`pages/`](pages/)
* Templates are in `.11ty.js` format, in [`src/templates/`](src/templates/)
* Components are simple javascript functions in [`src/components/`](src/components/)
* Basic site metadata and the main navigation structure is in [`src/site-metadata.js`](src/site-metadata.js)

For a local development server use `npm run start`; to build a production version of the site use `npm run build`.
