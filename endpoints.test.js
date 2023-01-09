const { expect } = require('chai');
const fetch = require('node-fetch');
const cheerio = require('cheerio');

// Import the app.
const app = require('./server');

// Import the config file where the port is defined.
// It is a good practice to avoid hard-coding the port.
const config = require('./config.json');

// Start the app on the port that is in the config.
const server = app.listen(config.port);

it('Should serve index.html', async () => {
  const response = await fetch(`http://localhost:${config.port}`);

  // Confirms that the index.html file is served from the static folder.
  expect(response.status).to.eq(200);
});

it('Should serve script.js', async () => {
  const response = await fetch(`http://localhost:${config.port}/script.js`);

  // Confirms that the script.js file is served from the static folder.
  expect(response.status).to.eq(200);
});

it('Should serve style.css', async () => {
  const response = await fetch(`http://localhost:${config.port}/style.css`);

  // Confirms that the style.css file is served from the static folder.
  expect(response.status).to.eq(200);
});

it('Should handle a login post', async () => {
  // Create the form data programmatically.
  // Normally a form-data object would be created by the browser from a form element.
  const body = new FormData();

  body.append('username', 'test');
  body.append('password', 'test');

  const response = await fetch(`http://localhost:${config.port}/login`, {
    method: 'POST',
    body: body,
  });

  // Confirms that the server responds with the username and password.
  expect(response.status).to.eq(200);
  expect(await response.text()).to.eq('Username: test, Password: test');
});

it('Should render an EJS template', async () => {
  const response = await fetch(
    `http://localhost:${config.port}/template?name=Test`,
  );

  // Confirms that the server responds with a rendered EJS template containing Hello Test!.
  expect(response.status).to.eq(200);

  const $ = cheerio.load(await response.text());

  expect($('div').text()).to.eq('Hello Test!');
});

// At the end of the tests, close the server.
after(() => server.close());
