import OpenAI from "openai";
import secrets from 'secrets';

const openai_client = new OpenAI({
    apiKey: secrets.OPEN_AI_API_KEY,
    dangerouslyAllowBrowser: true,
});

const greet_gpt = async () => {
    const response = await openai_client.chat.completions.create({
        messages: [{ role: 'user', content: 'Hello ChatGPT!' }],
        model: 'gpt-4o-mini'
    });

    console.log(response)
}

export default greet_gpt;