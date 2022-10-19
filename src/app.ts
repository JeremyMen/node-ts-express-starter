import express from "express"
import morgan from "morgan"
import cors from "cors"

const app = express()

// enable cors
app.use(cors())
app.options("*", cors())

app.use(morgan("dev"))

// parse json request body
app.use(express.json())

// parse urlencoded request body
app.use(express.urlencoded({ extended: true }))

app.get("/", (_, res) => {
  res.status(200)
  res.json({ message: "Server up and running" })
})

/// handle errors

export default app
