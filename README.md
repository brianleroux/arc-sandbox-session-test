* Test case showing sessions not being maintain with JSON routes

* Testing with cURL
```
npm install # install deps
npm run create # bootstrap arc
npm run start # start sandbox server

# switch to another terminal
curl -c /tmp/cookie_jar.txt -X POST http://localhost:3333 # returns {"count":1}
curl -c /tmp/cookie_jar.txt -X POST http://localhost:3333 # still returns {"count":1}
```
