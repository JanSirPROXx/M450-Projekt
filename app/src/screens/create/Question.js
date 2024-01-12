import React, {useState} from 'react';

const Question = ({ question }) => {

    const [selectedOption, setSelectedOption] = useState('text');
    const [options, setOptions] = useState(['Option 1', 'Option 2']); // ['Option 1', 'Option 2'

    const kindOfQue = (event) => {
        setSelectedOption(event.target.value);
    }

    const styles = {
        container: {
            marginBottom: '20px',
            padding: '20px',
            border: '1px solid #ddd',
            borderRadius: '5px',
        },
        label: {
            fontWeight: 'bold',
            display: 'block',
            marginBottom: '5px',
        },
        input: {
            margin: '10px 0',
            padding: '10px',
            width: '100%',
        },
        select: {
            margin: '10px 0',
            padding: '10px',
            width: '100%',
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
    };


  return (
    <div id={`div${question.id}`} style={styles.container}>
            <label htmlFor={`question-${question.id}`} style={styles.label}>{question.id}. Frage ...</label>
            
            <input style={styles.input} type="text" id={`question-${question.id}`} className='question' placeholder="Type your question" />
            <select onChange={kindOfQue} style={styles.select}>
                <option value="text">Textantwort</option>
                <option value="multiple-choice">Multiple Choice</option>
                {/* Weitere Antwortmöglichkeiten hier */}
            </select>
            {selectedOption === 'multiple-choice' && (
                <div>
                    <button onClick={() => setOptions(()=>{
                        let optionsCopy = [...options];
                        optionsCopy.push(`Option ${optionsCopy.length + 1}`);
                        return optionsCopy;
                    })}>Add Option</button>

                    {options.map((option, index) => {
                        return (
                            <div key={index}>
                                <input type="text" id={`option${index}`} name="option" className={`optionInputQue${question.id}`} placeholder={`Option ${index}`} />
                                <label htmlFor={`option${index}`}>Option {index}</label>
                            </div>
                        )
                    })
                    }
                </div>
            )}
        </div>
  );
};

export default Question;
