const Prismic = require('prismic-javascript');
const nuxtConfig = require('../nuxt.config.js');
const linkResolver = require(nuxtConfig.prismic.linkResolver);

exports.handler = async function(event, context) {
  const token = event.queryStringParameters.token;
  // TODO: Not done!
}