const express = require('express')
const app = express()
const port = 3000

app.use(express.static('public', { 'Content-Type': 'application/javascript' }));

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/public/index.html');
  });

app.listen(port, () => {
  console.log(`Todo app listening on port ${port}`)
})