import React, { useState } from 'react';
import Question from './Question';

function Create() {

    const [umfrageName, setUmfrageName] = useState("XY");
    const changeTitel = (EL) => {
        const el = EL.target.value;
        setUmfrageName(el);
    }


    const [questions, setQuestions] = useState([
        { id: 1, text: '', answers: [] },
        // Initialisiere weitere Fragen hier, falls nötig
    ]);

    const addQuestion = () => {
        const newQuestion = { id: questions.length + 1, text: '', answers: [] };
        setQuestions([...questions, newQuestion]);
    };


    const getQuestionResults = () => {
        const questions = document.querySelectorAll('.question');
    
        const questionRes = [{
            question: '',
            isText: false,
            options: ['Gute Antwort', 'Schlechte Antwort'],
        }];
        questions.forEach((question, id) => {
            const questionObj = {
                question: '',
                isText: false,
                options: [],
            };
            questionObj.question = question.value;
            //is selected option text?
            //get the next element after question
            const selectedOption = question.nextElementSibling.value;
            //console.log(selectedOption);
            if (selectedOption === 'text') {
                questionObj.isText = true;
            }else{
                questionObj.isText = false;
            }
            

            const divEl = document.getElementById(`div${id + 1}`);

            //console.log(divEl)
            if (!questionObj.isText) {
                const options = Array.from(document.getElementsByClassName(`optionInputQue${id + 1}`));
                //console.log(options[0]);

                options.filter((option) => {
                    questionObj.options.push(option.value);
                });
            }
            questionRes.push(questionObj);
        });
        return questionRes;
    }

    const submitSurvey = () => {
        // Logik zum Absenden der Umfrage
        

        //Safe alle questions in DB
        const questionRes = getQuestionResults();
        console.log(questionRes);
        //get Umfrage Id

        //create link
        
    };


    return (
        <div>
            <h2>{'Umfrage zum Thema ' + umfrageName}</h2>
            <p>Id bzw pwd für Zugang</p>
            <input type='text' placeholder='Thema' onChange={changeTitel}></input>
            {questions.map(question => (
                <Question key={question.id} question={question} />
            ))}
            <button onClick={addQuestion}>Add Question</button>
            <button onClick={submitSurvey}>Submit and copy link</button>
        </div>
    )
}

export default Create