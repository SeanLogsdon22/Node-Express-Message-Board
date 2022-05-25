import express from 'express'
import bodyParser from 'body-parser'
import path from 'path'
import router from '/home/christopher/nodein-message/routes/index.mjs'
import {fileURLToPath} from 'url';

const app = express()

// To solve the "__dirname is not defined in ES module scope" error
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// setting up the template engine 
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')

// middleware 
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false}))

app.use('/', router)

app.listen(8000, () => console.log("listening"))


