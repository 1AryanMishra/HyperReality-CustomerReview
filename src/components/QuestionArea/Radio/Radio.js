//Importing CSS for Radio Component
import './css/Radio.css';


//Importing useState to manage Rating Value State
import { useState } from 'react';


function Radio({question, values, answerValue}){

    const [index, setIndex] = useState(() => {

        //Getting Value if Stored in SessionStorage
        const inSession = window.sessionStorage.getItem(`${question}`);
        
        if(inSession !== null){
            //And setting value of State as it if exists.
            return Number(inSession);
        }
        return false;
    })

    answerValue.answer = index+1;


    return(
        <div className='RadioGrp'>
            {
                //Mapping for the values stated in Rating
                values.map((v, i) => {

                    //Checking for index to exist
                    if(index >= 0){
                        if(i === index){
                            return(
                                <button key={v} className='selected RadioBtn' onClick={() => {

                                    /* Removing Response if Deselected */

                                    //From SessionStorage
                                    window.sessionStorage.removeItem(`${question}`);

                                    //From LocalStorage
                                    window.localStorage.removeItem(`${question}`)

                                    //Also setting Index to false
                                    setIndex(false);

                                }}>{v}</button>
                            )
                        }
                    }
                    return(
                        <button key={v} className='RadioBtn' onClick={() => {

                            /* Adding Response if Selected */

                            /* 
                                Into SessionStorage for Refresh And Restore Feature
                                as the data gets restored even after refresh.
                            */
                            window.sessionStorage.setItem(`${question}`, `${i}`);

                            //Into LocalStorage as State into Documentation
                            window.localStorage.setItem(`${question}`, `${i+1}`);

                            //Also Setting Index as the index of the button selected.
                            setIndex(i);
                        }}>{v}</button>
                    )
                })
            }
        </div>
    )
    
}

export default Radio;