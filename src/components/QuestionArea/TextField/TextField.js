//Importing CSS for TextField Component
import './css/TextField.css';


//Importing useState to manage Response State
import { useState } from 'react';


function TextField({ question, answerValue }){


    //Declaring Response State
    const [value, setValue] = useState(() => {

        /* First Checking for response in SessionStorage */

        const inSession = window.sessionStorage.getItem(`${question}`);

        //If present
        if(inSession !== ""){

            //Setting Response State as is
            return inSession;
        }

        //Else Setting Response State as Empty String
        return '';
    })


    /* Writing Answer to the All Questions Array */
    answerValue.answer = value;

    return(
        <textarea className='TextField' value={value ? value : ''} placeholder='Write Here...' onChange={(e) => {

            /* Updating Response */

            //In SessionStorage
            window.sessionStorage.setItem(`${question}`, `${value}`);

            //In LocalStorage as specified in Docs
            window.localStorage.setItem(`${question}`, `${e.target.value}`);

            //Also in Response State
            setValue(e.target.value);
        }}/>
    )
}


export default TextField;