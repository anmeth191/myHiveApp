import React , { useState , useEffect} from 'react';
import axios from 'axios';


function LoginUser(){


    const [email , setEmail] = useState('');
    const [password , setPassword ] = useState('');
    
    const handlerEmail = (event)=>{
        setEmail(event.target.value);
    }

    const handlerPassword = (event)=>{
       setPassword(event.target.value);
    }


     const createPost = () =>{ 
    const loginData = new FormData();
    loginData.append('email' , email);
    loginData.append('password' , password)
    axios.post('http://127.0.0.1:8000/login' , loginData)      
}
    

    const submitForm = async (event) => {
        event.preventDefault();
        createPost();
        setEmail('');
        setPassword('');
    }
  

    return(
        <div>
          <form onSubmit={ submitForm }>
              <div>
                  <label htmlFor="email">Email:</label>
                  <input type="email" name="email"  value={ email } onChange={ handlerEmail }/>
              </div>

              <div>
                  <label htmlFor="password">Password:</label>
                  <input type="password" name="password"  value={ password } onChange={ handlerPassword }/>
              </div>

              <button type="submit">Login</button>
              </form>    
           
        </div>
    )
}



export default LoginUser;


