// ./src/index.js
// importing the dependencies
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan');
const lib = require('lib')({token: "tok_dev_WvE9jTtk6RcuyMgXTVD3ePYvrNLeArTvgaXc3rnR946oRyLTZZoY1gJhgeg3zwTu"});
// defining the Express app
const app = express();
// defining an array to work as the database (temporary solution)
const ads = [
  {title: 'Hello, world (again)!'}
];

// adding Helmet to enhance your Rest API's security
app.use(helmet());

// using bodyParser to parse JSON bodies into JS objects
app.use(bodyParser.json());

// enabling CORS for all requests
app.use(cors());

// adding morgan to log HTTP requests
// app.use(morgan('combined'));

// defining an endpoint to return all ads
app.get('/:id', async(req, res) => {
  try{
    proId= req.params.id
    let result = await lib.halo.infinite['@1.4.1'].stats.players.matches({
        gamertag: proId, // required
        type: 'all',
        language: 'en-us',
        count: 100,
        offset: 0
      });
      let x = result.data.matches
      let totalKills = 0
//[0]["player"]["stats"]["core"]["summary"]["kills"]
  for(let i  =0; i<x.length; i++){
    totalKills+=x[i]["player"]["stats"]["core"]["summary"]["kills"]
  }
      // endpoints are executed as functions, click [> Run] below to test
      res.send({"kills":totalKills, "meta-data":result.additional})  
  }catch(e){
     console.log(e)
  }

});

//starrting the server
app.listen(process.env.PORT || 3001, () => {
  console.log('listening on port 3001');
});