//Importing useContext to Get Data Context from Main Component
import { useContext } from 'react';


//Importing Data Context
import { DataContext } from '../Main/Main';



function GreetCustomer(){

    //Destructuring iterator state from Context
    const { questionNumber, setQuestionNumber } = useContext(DataContext);



    return(
        <div className="GreetCustomerArea">
            <div className="Greet">
                <h1>Greetings, Customer!</h1>
                <h2>How is you day going?</h2>
                <h3>Will you Please help us by taking a Survey, to the get best of our Service?</h3>
            </div>

            <div className="NavBtnsArea">
                <button className="Start" onClick={() => setQuestionNumber(questionNumber + 1)}>
                    Start
                </button>
            </div>
        </div>
    )
}


export default GreetCustomer;