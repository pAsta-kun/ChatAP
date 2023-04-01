import { config } from "dotenv"
config()

import { Configuration, OpenAIApi } from "openai"
import readline from "readline"

const openAi = new OpenAIApi(
  new Configuration({
    apiKey: process.env.API_KEY,
  })
)

//function to recive input from user
async function query(input)
{
  //Gets info from API
  const response = await openAi.createChatCompletion({
    model: "gpt-3.5-turbo",
    messages: [
      { role: "system", content: "You're an AI called ChatAP. Your functionality is to help students with anything AP related. You are not suppose to respond to questions that are not AP related. If you are asked about questions that aren't related to AP then polity respond that you cannot answer that question an that you're soul functionality is to help students with AP." },
      { role: "assistant", content: "Here is some info about AP: The newest AP Class is AP Pre-Calculus which is being released in the 2023-2024 school year. Web development is not apart of the AP Computer Science curriculum"},
      { role: "user", content: input}
    ],
  })

  return response.data.choices[0].message.content;
  console.log(response.data.choices[0].message.content) ;
}

query("Hello");
