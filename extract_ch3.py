import fitz
import re
import json

def extract_questions():
    doc = fitz.open('Chapter3_Questions.pdf')
    text = ""
    for page in doc:
        text += page.get_text()
    
    with open('ch3_questions_raw.txt', 'w') as f:
        f.write(text)

def extract_answers():
    doc = fitz.open('Chapter3_Answers.pdf')
    text = ""
    for page in doc:
        text += page.get_text()
    
    with open('ch3_answers_raw.txt', 'w') as f:
        f.write(text)

extract_questions()
extract_answers()
