import React from 'react'
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';

function Fillin({ pathNr }) {
    const [data, setData] = useState([]); //Data gets uploade ti this state

    let ID = pathNr;

    //get data by id from backend
    async function getDataById(id) {
        // Get data from database by id
        try {
            const response = await axios.get(`http://localhost:3003/api/data/${id}`);
            console.log("Response in Fillin", response.data);
            return response.data;
        } catch (error) {
            console.error(error);
        }
    }


    useEffect(() => {
        console.log("---Fillin rendered---");
        getDataById(ID).then(dataObj => {
            setData(dataObj);
            console.log(dataObj, "Data in Fillin")
        });

        
    }, [ID]);
    


    if (!data || data.length === 0) {
        return <div>Loading...</div>;
    }

    const renderQuestion = (question, index) => {
        console.log(question.isText, "isText")
        console.log(question, "howl question")
        if (question.isText == true) {
            return <input type="text" />;
        } else {
            return question.options.map((option, i) => (
                <div key={i}>
                    <input type="radio" id={`option-${i}`} name={`question-${index}`} value={option} />
                    <label htmlFor={`option-${i}`}>{option}</label>
                </div>
            ));
        }
    };

    return (
        <div><h1>{data.name}</h1>
            <h2>Umfrage code: {ID}</h2>
            <form>
                {data.questions.map((question, index) => (
                    <div key={index}>
                        <label>{question.question}</label>
                        {renderQuestion(question, index)}
                    </div>
                ))}
                <button type="submit">Submit</button>
            </form>
        </div>

    )
}

export default Fillin