import express from "express"
import colors from "colors"
import dotenv from "dotenv"
import morgan from "morgan"
import connectDb from "./config/db.js"
import authRoutes from "./routes/authRoute.js"

// config dotenv
dotenv.config()

// database config
connectDb();

const app = express();

// middlewares
app.use(express.json())
app.use(morgan('dev'))

// routes
app.use('/api/v1/auth', authRoutes)


app.get("/", (req, res) => {
    res.send({
        message: 'Cricket app',
    })
})

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
    console.log(`server running on ${process.env.DEV_MODE} on ${PORT}`.bgCyan.white)
})