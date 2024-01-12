import React, { useState } from 'react';
import Question from './Question';
import axios from 'axios';

function Create() {

    const [umfrageName, setUmfrageName] = useState("XY");
    const [umfrageId, setUmfrageId] = useState("0");
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
    
        const questionRes = [];
        questions.forEach((question, id) => {
            //if(id===0) return;
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
            

            //const divEl = document.getElementById(`div${id + 1}`);

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

    const submitSurvey = async () => {
        // Logik zum Absenden der Umfrage
        const quiz = {
            name: umfrageName,
            questions: getQuestionResults(),

        }
        //adds quiz to db
        try {
            //debug
            console.log(quiz, "Quiz Daten");
           


            await axios.post('http://localhost:3003/api/add', quiz).then((res) => {
                console.log(res.data.id);
                setUmfrageId(res.data.id);
            });
        } catch (error) {
            console.error('Error posting quiz:', error);
        }

        try{
            await axios.post(`http://localhost:3003/api/setupAnswers/${umfrageId}`);
        }catch(error){
            console.error('Error posting questions:', error);
        }

        //Safe alle questions in DB
        //const questionRes = getQuestionResults();
        //console.log(questionRes);
        //get Umfrage Id

        //create link
        
    };

    const styles = {
        container: {
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            padding: '20px',
            backgroundColor: '#f4f4f4',
        },
        title: {
            color: '#333',
            marginBottom: '20px',
            fontFamily: '"Roboto", sans-serif', // Add this line
        },
        input: {
            margin: '10px 0',
            padding: '10px',
            width: '100%',
            maxWidth: '400px',
        },
        button: {
            margin: '10px 0',
            padding: '10px 20px',
            backgroundColor: '#007BFF',
            color: '#fff',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer',
        },
        link: {
            color: '#007BFF',
        },
        h2: {
            fontFamily: '"Roboto", sans-serif',
        },
        p: {
            fontFamily: '"Roboto", sans-serif',
        },
        
    };


    return (
        <div style={styles.container} data-testid='create-site-div'>
            <h2 style={styles.h2}>{'Umfrage zum Thema ' + umfrageName}</h2>
            <p style={styles.p}>Id bzw pwd für Zugang</p>
            <input type='text' placeholder='Thema' onChange={changeTitel} style={styles.input} ></input>
            {questions.map(question => (
                <Question key={question.id} question={question} />
            ))}
            <button style={styles.button} onClick={addQuestion}>Add Question</button>
            <button style={styles.button} onClick={submitSurvey}>Submit and copy link</button>
            <p style={styles.link}>{umfrageId === "0" ? "Press Safe to get your link" : `https://localhost:3000/${umfrageId}`}</p>
        </div>
    )
}

export default Create