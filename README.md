# ach.org

This is the source code for the ach.org website.  It's developed using very minimal Eleventy, based on the Gatsby site at <https://github.com/achorg/ach-gatsby-site> created by @ivyrze.

* Content is in markdown files in [`pages/`](pages/)
* Templates are in `.11ty.js` format, in [`src/templates/`](src/templates/)
* Components are simple javascript functions in [`src/components/`](src/components/)
* Basic site metadata and the main navigation structure is in [`src/site-metadata.js`](src/site-metadata.js)

For a local development server use `npm run start`; to build a production version of the site use `npm run build`.

If on an M1 Mac and getting an error about 'darwin-arm64v8' this is what worked on Mandy's machine:
* `rm -rf node_modules/sharp`
* `npm install --arch=x64 --platform=darwin sharp`
* `npm rebuild --platform=darwin --arch=arm64 sharp`
* `npm run start`