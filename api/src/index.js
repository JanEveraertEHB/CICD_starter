const express = require('express')
const app = express()
const bodyParser = require('body-parser');
const ConversationHelpers = require('./helper/ConversationHelpers')
const port = process.env.PORT

app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    // to support URL-encoded bodies
    extended: true
  })
);  

app.get('/', (req, res) => {
  res.send('Hello World! deployed')

})

/**
* 
*/
app.post('/question', (req, res) => {
  const question = req.body.question;
  const response  = ConversationHelpers.senseEmotionHelper(question);
  if(response == null) {
    res.sendStatus(400)
  }
  else {
    if(response <= 0) {
      res.send({answer: ":(" })
    } else {
      res.send({answer: ":)" })
    }
  }
  
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})

module.exports = app