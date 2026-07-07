import { GoogleGenAI } from '@google/genai';
import * as fs from 'fs';

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });

async function processQuestions() {
  const rawText = fs.readFileSync('raw_questions.txt', 'utf8');
  
  const prompt = `
You are an expert in Japanese construction engineering and Myanmar language translation.
I will give you raw text containing multiple-choice questions from a Japanese exam (1st Grade Steel Frame Fabrication).
Please convert this into a JSON array of objects following the TypeScript interface below.

Provide ONLY the raw JSON array string. No markdown formatting, no comments.

Requirements:
- questionJP: The question text. Add furigana to kanji using <ruby>kanji<rt>furigana</rt></ruby> tags.
- questionMY: Accurate Myanmar translation of the question.
- options: Array of 5 options.
  - id: 1 to 5
  - textJP: The option text in Japanese, starting with (1), (2), etc. Add furigana to kanji using <ruby>...<rt>...</rt></ruby> tags.
  - textMY: Accurate Myanmar translation of the option.
- correctOptionId: The integer ID (1-5) of the incorrect/inappropriate option (since questions ask for 最も不適当なもの). YOU MUST DETERMINE THE CORRECT ANSWER based on JASS 6 (Japanese Architectural Standard Specification JASS 6 Steelwork).
- explanation:
  - titleMY: A short Myanmar title for the explanation.
  - reasonMY: Detailed explanation in Myanmar of why the correctOptionId is the answer.
  - memoryTipMY: A short tip to remember this in Myanmar.

Input Text:
${rawText}
`;

  const response = await ai.models.generateContent({
    model: 'gemini-3.1-pro-preview',
    contents: prompt,
    config: {
        temperature: 0.2
    }
  });

  fs.writeFileSync('output.json', response.text);
  console.log('Saved to output.json');
}

processQuestions().catch(console.error);
