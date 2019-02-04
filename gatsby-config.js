module.exports = {
  siteMetadata: {
    title: 'Graphic Intuitions',
    description: 'Specializing in web design and web development with marketing specialists in Southern Manitoba. Your digital marketing plan comes together with custom marketing strategies geared to fit your specific business needs. From custom web design, graphic design, and online marketing.',
    siteUrl: `https://graphicintuitions.com`,
  },
  plugins: [
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Graphic Intuitions`,
        short_name: `GI`,
        start_url: `/`,
        background_color: `#f7f0eb`,
        theme_color: `#FD7339`,
        display: `minimal-ui`,
        icon: `src/img/gi-logo.svg`, // This path is relative to the root of the site.
      },
    },
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sass',
    {
      // keep as first gatsby-source-filesystem plugin for gatsby image support
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/static/img`,
        name: 'uploads',
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/src/pages`,
        name: 'pages',
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/src/img`,
        name: 'images',
      },
    },
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [
          `gatsby-remark-responsive-iframe`,
          {
            resolve: 'gatsby-remark-relative-images',
            options: {
              name: 'uploads',
            },
          },
          {
            resolve: 'gatsby-remark-images',
            options: {
              // It's important to specify the maxWidth (in pixels) of
              // the content container as this plugin uses this as the
              // base for generating different widths of each image.
              maxWidth: 2048,
            },
          },
          {
            resolve: 'gatsby-remark-copy-linked-files',
            options: {
              destinationDir: 'static',
            }
          }
        ],
      },
    },
    {
      resolve: 'gatsby-plugin-netlify-cms',
      options: {
        modulePath: `${__dirname}/src/cms/cms.js`,
      },
    },
    {
      resolve: `gatsby-plugin-styled-components`,
      options: {
        // Add any options here
      },
    },
    {
      resolve: `gatsby-plugin-nprogress`,
      options: {
        // Setting a color is optional.
        color: `#00e5ff`,
        // Disable the loading spinner.
        showSpinner: false,
      },
    },
    {
      resolve: 'gatsby-plugin-crisp-chat',
      options: {
        websiteId: '7f266798-c8fb-47c1-9f99-fe8c8363fbc7',
        // Optional. Disables Crisp Chat during gatsby develop. Defaults to true.
        enableDuringDevelop: false,
      },
    },
    {
      resolve: `gatsby-plugin-hubspot`,
      options: {
        trackingCode: 5265201
      },
    },
    {
      resolve: `gatsby-plugin-google-tagmanager`,
      options: {
        id: "GTM-5V3XHJW",

        // Include GTM in development.
        // Defaults to false meaning GTM will only be loaded in production.
        includeInDevelopment: false,

        // Specify optional GTM environment details.
        // gtmAuth: "YOUR_GOOGLE_TAGMANAGER_ENVIROMENT_AUTH_STRING",
        // gtmPreview: "YOUR_GOOGLE_TAGMANAGER_ENVIROMENT_PREVIEW_NAME",
      },
    },
    'gatsby-plugin-purgecss', // must be after other CSS plugins
    `gatsby-plugin-remove-serviceworker`,
    `gatsby-plugin-sitemap`,
    'gatsby-plugin-netlify', // make sure to keep it last in the array
  ],
}
