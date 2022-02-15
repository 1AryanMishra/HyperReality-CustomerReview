//Importing Image
import WelcomeImage from './welcome.png';


function WelcomeScreen(){

    return(
        <div className="WelcomeScreenArea">
            <img className="WelcomeImage" src={WelcomeImage} alt="WelcomeImage"/>
            <h1>Welcome...</h1>
        </div>
    )
}


export default WelcomeScreen;