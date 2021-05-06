import express from 'express'
import { json, urlencoded } from 'body-parser'
import morgan from 'morgan'
import cors from 'cors'

export const app = express()

app.disable('x-powered-by')

app.use(cors())
app.use(json())
app.use(urlencoded({ extended: true }))
app.use(morgan('dev'))

const log = (req, res, next) => {
    console.log("logging");
    next();
}

// CRUD (Create, Read, Update, Destroy)
// Read
app.get('/', [log, log, log], (req, res) => {
    res.send({data: [1,2,3,6,7]})
    })
//Create
app.post("/post", (req, res) => {
    console.log(req.body);
    res.json({message: "Connection succesfull"})
})


//Router
const router = express.Router()
router.get("/routerTest", (req, res) => {
    res.send({routerData: "This is the router"})
})
app.use("/test", router)

export const start = () => {
    app.listen(3000,() => {
        console.log("Server ready on port 3000");
    })
}
