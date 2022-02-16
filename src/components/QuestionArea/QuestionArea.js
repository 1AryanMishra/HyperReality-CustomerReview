//Importing useContext to Use Data Context
import { useContext, useState } from 'react';


//Importing Data Context From Main
import { DataContext } from '../Main/Main';


//Importing Some Answer type Components
import Radio from './Radio/Radio';
import TextField from './TextField/TextField';
import Number from './Number/Number';



function QuestionArea(){

    //Destructuring Question Data
    const { setSubmit, questionData, questionNumber, allQuestions, setQuestionNumber } = useContext(DataContext);

    //Some flag variable to check for InputType
    const [radio, setRadio] = useState(false);
    const [textfield, setTextField] = useState(false);
    const [number, setNumber] = useState(false);
    

    if(!questionData){
        return(
            <article className='QuestionArea'>
                <h1 className='SurveyLabel'>Customer Survey</h1>
                <p className='SubmitConfirmation'>Would you like to Submit the Responses?</p>
                <div className='NavBtnsArea'>
                    <button className='Back' onClick={() => setQuestionNumber(questionNumber - 1)}>Back</button>
                    <button className='Submit' onClick={() => {

                        /* Final Functionality */
                        
                        //Saving flag as COMPLETED in localStorage
                        for(let i = 0; i<allQuestions.length; i++){
                            window.localStorage.setItem('flag', "COMPLETED");
                        }
                        setSubmit(true);
                    }}>Submit</button>
                </div>
            </article>
        )
    }


    else{

        //Checking for InputType Condition
        if(!radio && questionData.inputType === 'radio'){
            setTextField(false);
            setRadio(true);
            setNumber(false);
        }
        else if(!textfield && questionData.inputType === 'textfield'){
            setRadio(false);
            setNumber(false);
            setTextField(true);
        }
        else if(!number && questionData.inputType === 'number'){
            setNumber(true);
            setTextField(false);
            setRadio(false);
        }


        return(
            <article className="QuestionArea">

                <div id="SurveyHeader">
                    <h1 className='SurveyLabel'>Customer Survey</h1>
                    <p className='questionPosition'>{questionNumber}/{allQuestions.length}</p>
                </div>
                <div className='Question'>
                    <p className='QuestionString'>{questionData.question}</p>
                    {
                        textfield ? <TextField question={questionData.question} answerValue={questionData}/> : null
                    }
                    {
                        radio ? <Radio key={questionData.question} question={questionData.question} answerValue={questionData} values={questionData.values}/> : null
                    }
                    {
                        number ? <Number question={questionData.question} answerValue={questionData}/> : null
                    }

                </div>
    
                <div className="NavBtnsArea">
                    <button className='Prev' onClick={() => {
                        setQuestionNumber(questionNumber - 1);

                    }}>Prev</button>
                    <button className='Skip' onClick={() => {
                        if(questionNumber <= allQuestions.length){
                            setQuestionNumber(questionNumber + 1);
                        }
                    }}>Skip</button>
                    <button className="Next" onClick={() => setQuestionNumber(questionNumber + 1)}>Next</button>
                </div>
            </article>
        )
    }
}

export default QuestionArea;