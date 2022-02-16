//Importing CSS for Text Component
import './css/Number.css';


//Importing useState to manage Response State
import { useState } from 'react';


function Number({question, answerValue}){

    //Declaring Response State
    const [value, setValue] = useState(() => {

        //Getting data from sessionStorage if exists
        const inSession = window.sessionStorage.getItem(`${question}`);

        if(inSession !== ''){
            //Setting Response State as SessionStorage Data
            return inSession;
        }

        //Returning Empty String if null
        return '';
    });


    answerValue.answer = value;

    return(
        <input type='number' className="Number" value={value ? value : ''} onChange={(e) => {

            /* Saving Response */

            //In SessionStorage for Refresh and Restore Feature.
            window.sessionStorage.setItem(`${question}`, `${e.target.value}`);

            //In LoacalStorage as specified in the docs.
            window.localStorage.setItem(`${question}`, `${e.target.value}`);

            //Also in Response State
            setValue(e.target.value);
        }}/>
    )
}


export default Number;