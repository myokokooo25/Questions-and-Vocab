const fs = require('fs');
const pdf = require('pdf-parse');

async function extract() {
  const qData = await pdf(fs.readFileSync('ch3-question.pdf'));
  fs.writeFileSync('ch3_questions.txt', qData.text);
  
  const aData = await pdf(fs.readFileSync('ch3-answer.pdf'));
  fs.writeFileSync('ch3_answers.txt', aData.text);
}

extract().catch(console.error);
