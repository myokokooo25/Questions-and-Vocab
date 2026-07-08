import { GoogleGenAI, Type } from '@google/genai';
import * as dotenv from 'dotenv';
dotenv.config();
import fs from 'fs';

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });

async function run() {
  const text = `
JASS 6 の適用範囲および原則に関する次の記述のうち、最も不適当なものはどれか。
(1) JASS 6 は、日本に建設される建築物および工作物の構造上主要な部材に鋼材を用いる工事に適用する。ただし、軽微なものについては、特記によりその一部を適用しないことができる。
(2) 建築工事に共通な一般事項についてはJASS 1「一般共通事項」による。ただし、JASS 1と内容が矛盾する場合は、鉄骨工事においてはJASS 6を優先する。
  `;

  const response = await ai.models.generateContent({
    model: 'gemini-2.5-flash',
    contents: `Extract 8 important technical vocabulary words from the following Japanese text about steel construction. Return a JSON array. Keys: jp (word with hiragana in parentheses like 鉄骨 (てっこつ)), my (Myanmar translation), type (Noun/Verb/etc). Text: ${text}`,
    config: {
      responseMimeType: 'application/json',
      responseSchema: {
        type: Type.ARRAY,
        items: {
          type: Type.OBJECT,
          properties: {
            jp: { type: Type.STRING },
            my: { type: Type.STRING },
            type: { type: Type.STRING }
          },
          required: ['jp', 'my', 'type']
        }
      }
    }
  });

  console.log(response.text);
}

run();
