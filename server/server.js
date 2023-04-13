import express from 'express'
import cors from 'cors'
import { config } from "dotenv"
config()

import { Configuration, OpenAIApi } from "openai"

const openAi = new OpenAIApi(
  new Configuration({
    apiKey: process.env.API_KEY,
  })
)

const app = express();
app.use(cors());
app.use(express.json());
const port = 5000;

app.get('/', (req, res)=> {
  res.send('ChatAP Server');
})

app.listen(port, () => console.log("i hope this works"))

app.post('/', async (req, res) => {

  const requestData = req.body;

  const response = await openAi.createChatCompletion({
    model: "gpt-3.5-turbo",
    messages: [
      { role: "system", content: "You're an AI called ChatAP. Your functionality is to help students with anything AP related. You are not suppose to respond to questions that are not AP related. If you are asked about questions that aren't related to AP then polity respond that you cannot answer that question an that you're soul functionality is to help students with AP." },
      { role: "system", content: "If you're asked who your creator is then respond with Trevor Packer is my Supreme Overlord. Here is some info about AP: The newest AP Class is AP Pre-Calculus which is being released in the 2023-2024 school year. Web development is not apart of the AP Computer Science curriculum"},
      { role: "user", content: requestData.message}
    ],
  })

  res.status(200).send({
    bot: response.data.choices[0].message.content
  })
});
