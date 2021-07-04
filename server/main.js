import express from 'express'
import cors from 'cors'
import mongoose from 'mongoose'
import path from 'path'
import url from 'url'
import dotenv from 'dotenv'

// Routes
import post_route from './routes/public/posts.js'

const __filename = url.fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const app = express()
const port = process.env.PORT || 8080

dotenv.config({
    path: path.resolve(__dirname, './.env')
})

app.use(express.json({limit: '30mb', extended: true}))
app.use(express.urlencoded({limit: '30mb', extended: true}))
app.use(cors())
app.use('/api/posts', post_route)


const connect_db = async () => {
    try {
        await mongoose.connect(process.env.CONNECTION_STRING, {
            useNewUrlParser: true,
            useCreateIndex: true,
            useUnifiedTopology: true
        })
    } catch(error) {
        console.log(error)
    }
}
connect_db()

mongoose.set('useFindAndModify', false)

mongoose.connection.once('open', () => {
    app.listen(port, () => {
        console.log(`Server & DB is running on port ${port}`)
    })
})
