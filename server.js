require('dotenv').config()
let express = require('express')
let app = express();
let hbs = require('hbs');

// get the port value from our .env file
// process.env gives us all the values in .env 
// because we installed the 'dotenv' package
const PORT = process.env.PORT

//------------Do not uncomment this----------
// app.use(bodyParser.json())
// app.use(bodyParser.urlencoded({extended: true}))
//-------------------------------------------

//-----Assume this is some library set up----------
function getStudents(){
    let myPromise = new Promise((resolve, reject) => {
        setTimeout(() => {
            // assume it fetches data from a database
            let data = require('./dataStore')
            resolve(data)
        }, 3000)
    })
    return myPromise
}

//-----End of library set up--------------------------

// register partials so that hbs knows where to look for it when you use it
hbs.registerPartials(__dirname + '/views/partials');

//let express know what template engine you're using.
app.set('view engine', 'hbs');

//let express know where all the views are when showing dynamic files to the user
app.set('views', __dirname + '/views')

//set the middleware to let express know where the static files are located
app.use(express.static(__dirname  + '/public'))


//define the routes 
app.get('/', (req, res)=> {
    res.send('Working!')
})

//create the server on port 3000
app.listen(PORT, () => {
    console.log(`Example app listening at http://localhost:${PORT}`)
})