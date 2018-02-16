var arc = require('@architect/functions')

function route(req, res) {
  console.log(JSON.stringify(req, null, 2))
  res({html:`
    
    count: ${req.session.count}
    
    <form action=${req._url('/')} method=POST><button>1up</button></form>
    
    `})
}

exports.handler = arc.html.get(route)
