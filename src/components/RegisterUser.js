import React, { Fragment } from 'react';
import axios from 'axios';


class RegisterUser extends React.Component{
constructor(props){
    super(props)
    this.state = {
        username:'',
        email:'',
        password:'',
        repeatPassword:'',
        validatePasswordMessage:'',
        displayValidationMessage: false
    }

}

//this function set the state for the password
handlePassword = (event)=>{ this.setState({password:event.target.value} , ()=>{ return this.state.password });}

//this function set the state for the repeat password input
handleRepeatPassword = (event)=>{ this.setState({ repeatPassword : event.target.value} , ()=>{ return this.state.repeatPassword })}

//this function handles the form when is submitted

handleSubmitForm = (event)=>{
    //prevents de default behavior reload the page when the form is submitted
     event.preventDefault();
    //this function check if the passwords match the requirements in regular expressions
    this.checkRegExpression();
}

registerUserPost = async ()=> {
//create a data form to send it to the server
const createUser = new FormData();
createUser.append('userName' , this.state.username);
createUser.append('userEmail', this.state.email);
createUser.append('userPassword', this.state.password);
//create the post to save the user into the database.
 await axios.post('http://127.0.0.1:8000/register' , createUser).then( response =>{ console.log(response.data)}).catch( error =>{ console.log(error)})

 this.setState({username:'',password:'',repeatPassword:'',email:''});
}
//this function checks if the password match the condition of at least one uppercase, one lowercase, one digit, one special character, and a minimun of eight characters 
checkRegExpression = ()=>{
    //initialize my variables to check my regular expression NOTE IF YOU DECLARE THIS DIRECLTY IT GIVES YOU AN ERROR ABOTU LEXICAL DECLARATION !!!!!!!! I DID STRUGGLE MAN !
    let checkRepeatPass , checkPassword = false;
    
    //this is my regular expresion 
    let regExp = "^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$";

    //check if my values containes one uppercase , one lower case , one number, one special character and a minimun of 8
    checkPassword = this.state.password.match(regExp);
    checkRepeatPass = this.state.repeatPassword.match(regExp);
        

    if(this.state.password === this.state.repeatPassword && checkPassword && checkRepeatPass ){
        //when the password is accepted the  the post to register the user is going to be send with this method
        this.registerUserPost();    
    }else{
        //change the value of displayValidation when the password is incorrect a message is displaying 
        this.setState({displayValidationMessage:true});
        //the validation message
        this.setState({ validatePasswordMessage:'password must contain minimum 8 letters, one upperletter, one number and one special character'});
    }
    



    //using the javascript method match: The match() method searches a string for a match against a regular expression, and returns the matches, as an Array object.
 //   let checkRegPassword = password.match(regExp);
    //check if the value of the state matchs and send an answer to the client in case the condition is   false

}



    render(){
        return(
            <div>
                <form onSubmit={ this.handleSubmitForm }> 
                    <div>
                        <label htmlFor="username">Username:</label>
                        <input type="text" name="username"  value={this.state.username} onChange={(event)=>{ this.setState({username:event.target.value})}
                        }/>
                        </div>

                        <div>
                        <label htmlFor="email">Email:</label>
                        <input type="email" name="email" value={ this.state.email } onChange={(event)=>{ this.setState({email:event.target.value})}}/>
                        </div>

                        <div>
                        <label htmlFor="password">Password:</label>
                        <input type="password" name="password" value={ this.state.password } onChange={ this.handlePassword } required/>
                        </div>

                        <div>
                        <label htmlFor="repeatPassword">Repeat Password:</label>
                        <input type="password" name="repeatPassword" value={this.state.repeatPassword } onChange={ this.handleRepeatPassword } required/>
                        </div>

                         <div>
                         <h5 style={ (this.state.displayValidationMessage) ? { display:'block'} : {display:'none'} }>{this.state.validatePasswordMessage}</h5>
                         </div>
                         <div>
                         <button type="submit"> Register</button>
                         </div>
                    </form>
                </div>
        )
    }
}

export default RegisterUser;