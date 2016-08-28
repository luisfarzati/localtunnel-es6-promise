var localtunnel = require('localtunnel')

module.exports = function (port, options) {
  return new Promise(function (resolve, reject) {
    localtunnel(port, options, function (err, tunnel) {
      return err ? reject(err) : resolve(tunnel)
    })
  })
}
