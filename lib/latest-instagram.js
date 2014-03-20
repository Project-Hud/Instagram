var request = require('request')
  , _ = require('lodash')

module.exports = function (tag, cb) {

  var mediaTagUrl = 'https://api.instagram.com/v1/tags/' + tag + '/media/recent?access_token=' + process.env.INSTAGRAM_ACCESS_TOKEN

  request(mediaTagUrl, function (err, res, body) {
    try {
      body = JSON.parse(body)
    } catch (e) {
      console.error('Error parsing JSON: ' + body)
      return cb(e)
    }

    cb(null, mapPost(body))
  })

  function mapPost(body) {
    var map = { images: [], caption: '' }
    if (typeof body[0] !== 'undefined') {
      var instagramPost = body[0]
        , images = []

      _.each(instagramPost.images, function (image) {
        images[image.width + 'x' + image.height] = image.url
      })

      map.images = images
      map.caption = typeof instagramPost.caption !== 'undefined' ? instagramPost.caption.text : ''
    }

    return map
  }
}