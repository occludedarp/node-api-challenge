const server = require('./api/server.js')

server.listen(5000, () => {
  console.log(' \n ** server is up and runnning on http:/localhost:5000 **\n')
})