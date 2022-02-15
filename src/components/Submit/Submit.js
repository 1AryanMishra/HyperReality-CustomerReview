//Importing useContext to Use Data Context from Main Component
import { useContext } from 'react';


//Importing Data Context to get Completed State
import { DataContext } from '../Main/Main';



function Submit(){

    //Destructuring Completed Flag From Context
    const { setCompleted } = useContext(DataContext);


    //Creating 5 seconds Delay Functionality

    async function Delay(){
        await setTimeout(() => setCompleted(true), 5000);
    }


    //Calling Delay Function
    Delay();


    
    return(
        <article className="ThankingArea">
            <h2>Your response has be submitted Successfully!</h2>
            <h1>Thanks for your precious Time!</h1>
        </article>
    )
}


export default Submit;