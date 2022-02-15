/*
    Importing createContext to Create a DataContext
    to easily manipulate between components.
    Prop Drilling was also possible, but i found Context-API
    Smooth Approach here.
*/
import { useState, createContext } from 'react';


//Importing Question Data (Dummy Data with Some basic Schema)
import { questions } from '../../QuestionsList';


//Importing CSS For Main Section
import './css/Main.css';



//Importing Greet Customer Component
import GreetCustomer from '../GreetCustomer/GreetCustomer';


//Importing QuestionArea Component
import QuestionArea from '../QuestionArea/QuestionArea';


//Importing Submitted Component
import Submit from '../Submit/Submit';


//Importing WelcomeScreen Component
import WelcomeScreen from '../WelcomeScreen/WelcomScreen';







//Creating And Exporting DataContext;
export const DataContext = createContext();



function Main(){

    /*
        Declaring a State to store All Questions in an Array
        which can be populated either from localStorage or from database.
   
        " const [allQuestions, setAllQuestions] = useState(fetchedQuestions); "

        Functionality will Never Break or Act Unpredicted with
        this Approach.     
    */
   const allQuestions = questions;
   //Answers will also be prepared with key as "answer" and value. Hence, this Array is Ready
   //be Posted to the DataBase or LocalStorage with "JSON.stringify(allQuestions)"



   /*
        Declaring question Number Variable
        Initially, set to 0, for Welcome Screen Condition
    */    
   const [questionNumber, setQuestionNumber] = useState(0);



    /*
        Declaring Variable to Store One Paricular
    */
   var questionData = questionNumber ? allQuestions[questionNumber-1] : null;


   //Declaring Completed Flag State
   const [completed, setCompleted] = useState(false);

   //Declaring Flag for Submit
   const [submit, setSubmit] = useState(false);


    return(
        <main>
            <DataContext.Provider value={{setSubmit, setCompleted, allQuestions, questionData, questionNumber, setQuestionNumber}}>

                {
                    questionNumber ? (submit ? (completed ? <WelcomeScreen/> : <Submit/>) : <QuestionArea/>) : <GreetCustomer/>
                }

            </DataContext.Provider>
        </main>
    )
}

export default Main;