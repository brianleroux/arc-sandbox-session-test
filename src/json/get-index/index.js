var arc = require("@architect/functions")

function route(req, res) {
  var count = (req.session.count || 0);

  res({
    session: {
      count: count
    },
    json: {
      count: count
    }
  });
}

exports.handler = arc.json.get(route)
