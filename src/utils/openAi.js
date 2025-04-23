import OpenAI from 'openai';
import { openAi_Key } from './Constants';

export const openai = new OpenAI({
  apiKey: openAi_Key, // defaults to process.env["OPENAI_API_KEY"]
  dangerouslyAllowBrowser: true
});