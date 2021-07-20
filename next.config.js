const path = require("path");

module.exports = {
  sassOptions: {
    includePaths: [path.join(__dirname, "styles")]
  },
  future: {
    webpack5: true
  },
  images: {
    domains: ["s3.ca-central-1.amazonaws.com"]
  },
  i18n: {
    locales: ["en", "ar"],
    defaultLocale: "en"
  }
};
