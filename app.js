var Widget = new require('hud-widget')
  , widget = new Widget()
  , getLatestInstagramImageUrl = require('./lib/latest-instagram')
  , tag = 'clockculture'

widget.get('/', function (req, res) {
  getLatestInstagramImageUrl(tag, function (err, post) {
    if (err) {
      console.error(err)
      return res.send(500, { error: err })
    }
    res.render('index', { title: 'Instagram', post: post })  
  })
})
