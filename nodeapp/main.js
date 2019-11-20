'use strict';

const express = require('express');
const axios = require('axios');

const app = express();
const PORT = 8080;

app.get('/', (req, res) => res.status(200).send('Server in running'));

app.get('/message', (req, res) => res.send(`Sony Corp.'s (sne) subsidiary Sony Pictures Entertainment has acquired a minority stake in AT&T Inc.'s (t) Game Show Network LLC and now owns the game programming network. Before the deal, Sony Pictures owned a 58% stake in Game Show Network, and AT&T owned the remaining 42%. In connection with the transaction, AT&T received approximately $500 million, including proceeds for its equity stake valued at $380 million and dividends of about $130 million, the companies said in a press release.`));

app.get('/fetch', (req, res) => {
  axios.get('https://pyapp-erszkvwila-uc.a.run.app/message').then(
    response => {
      console.log(response.data);
      res.status(200).send(response.data);
    })
    .catch(err => res.status(400).send(err));
});

app.listen(
  PORT,
  () => console.log(`Server listening on port ${PORT}!`)
);
