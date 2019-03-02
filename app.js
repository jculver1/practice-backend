const express = require('express');
const cors = require('cors')
const bodyParser = require('body-parser');

const index = require('./routes/index');
const auth = require('./routes/auth');
const hidden = require('./routes/hidden');

const port = process.env.PORT || 3001;
const app = express();

app.use(cors())
app.use(bodyParser.json());

app.use('/', index);
app.use('/auth', auth);
app.use('/hidden', hidden);

app.listen(port, () => {
  console.log('Listening on port', port);
})

app.use(function (req, res, next) {
  res.status(404).send("Sorry can't find that!")
})

app.use(function (err, req, res, next) {
  console.error(err.stack)
  res.status(500).send('Something broke!')
})

module.exports = app;
