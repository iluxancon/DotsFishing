console.log('Hello!!!')

fetch = require('node-fetch')

fetch('http://dots-practice-2018.xeon.prostoksi.com/contests-json',
{
    "headers": {"Cookie": "DSID=fSBbzsEJglbAjYlX"}
})
    .then(data => data.json())
    .then(json => {console.log(json[1].status)})