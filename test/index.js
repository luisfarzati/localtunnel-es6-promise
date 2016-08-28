import http from 'http'
import localtunnel from '../lib'
import assert from 'assert'

test('setup local http server', function (done) {
    var server = http.createServer()
    server.on('request', (req, res) => {
        res.write(req.headers.host)
        res.end()
    })
    server.listen(() => {
        var port = server.address().port

        test._fake_port = port
        console.log('local http on:', port)
        done()
    });
});

test('localtunnel returns a Promise', function (done) {
    var lt = localtunnel(test._fake_port)

    assert(lt instanceof Promise, 'Object is not an instance of Promise.')

    lt.then(tunnel => {
      assert.ok(tunnel && tunnel.url, 'Object doesn\'t seem like a tunnel.')
      done()
    })
})
