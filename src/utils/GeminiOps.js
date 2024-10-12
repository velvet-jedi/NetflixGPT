import GoogleGenerativeAI from "@google/generative-ai";
import { GEMINI_API_KEY } from "./constants";

// Initialize the Google Generative AI client (Gemini)
const geminiAI = new GoogleGenerativeAI({
    apiKey: GEMINI_API_KEY,
});

export default geminiAI;
