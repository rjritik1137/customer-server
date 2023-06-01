### Get started

- clone the repo
- go to customer-server folder <pre>customer-service</pre>
- make sure to have `node version >=14` install the dependencies.

<pre>npm i</pre>

- after the dependencies are successfully installed, run `node index.js` to start the server

<pre>node index.js</pre>

- now your express server is running on `port 3000`.

### Data files

- `processed.json` contains customer information generated using lorem-ipsum api and picsum website.
- data files are created locally stored this in local as we can't call the remote API every 10 seconds to have the data because of limits on API request.
- Customer data is served through `/user` endpoint
- Didn't found any API online which can give multiple images everytime based on some id's so generating on the fly randomly.
- Generating the random urls on the fly, as can't get from any server because of the same reason (rate limiting).
