import React, {useState} from 'react';

const Question = ({ question }) => {

    const [selectedOption, setSelectedOption] = useState('text');
    const [options, setOptions] = useState(['Option 1', 'Option 2']); // ['Option 1', 'Option 2'

    const kindOfQue = (event) => {
        setSelectedOption(event.target.value);
    }



  return (
    <div id={`div${question.id}`}>
            <label htmlFor={`question-${question.id}`}>{question.id}. Frage ...</label>
            
            <input type="text" id={`question-${question.id}`} className='question' placeholder="Type your question" />
            <select onChange={kindOfQue}>
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
