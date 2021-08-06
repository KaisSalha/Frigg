const path = require("path");
const { i18n } = require("./next-i18next.config");

module.exports = {
  i18n,
  sassOptions: {
    includePaths: [path.join(__dirname, "styles")]
  },
  images: {
    domains: ["s3.ca-central-1.amazonaws.com"]
  },
  i18n: {
    locales: ["en", "ar"],
    defaultLocale: "en"
  }
};
