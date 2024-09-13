import { pipeline } from "@xenova/transformers"
const express = require('express')

const pipe =await  pipeline('summarization')
const sentimental = await pipeline('sentiment-analysis')
const image_recognition = await pipeline('image-classification')
const app = express()


app.use(express.json())

app.post('/api/sentimental', async (req, res) => {
  const { text } = req.body
  const result = await sentimental(text)
  res.json({data : result})
})

app.post('/api/summarize', async (req, res) => {
  const { text } = req.body
  const result = await pipe(text)
  res.json({data : result})
})

app.post('/api/image-recognition', async (req, res) => {
  const { image } = req.body
  const result = await image_recognition(image)
  res.json({data : result})
})

app.listen(3000, () => {
  console.log('Server listening on port 3000')
})
