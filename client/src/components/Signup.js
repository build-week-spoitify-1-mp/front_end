import React, { useState } from "react";
import axios from "axios";

const Signup = props => {
    // make a post request to retrieve a token from the api
    // when you have handled the token, navigate to the BubblePage route
    const [credentials, setCredientials] = useState({ username: '', password: '', email: '' })

    const handleChanges = event => {
        setCredientials({
            ...credentials,
            [event.target.name]: event.target.value
        })
    }
  
    const signupSubmit = event => {
        event.preventDefault();
        // Make a POST request and send the credentials object to the API
        axios
        .post('https://bw-spotify1-mp.herokuapp.com/users/createnewuser', credentials)
        .then(response => {
            console.log(response)
            props.history.push('/login');
        })
        .catch(error => console.log(error));
    }
  
    
  
    return (
      <div>
        <h1>Signup!</h1>
           <form onSubmit={signupSubmit}>
            <input
              type="text"
              name="username"
              placeholder="Username"
              autoComplete="off"
              value={credentials.username}
              onChange={handleChanges}
            />
            <input
              type="password"
              name="password"
              placeholder="Password"
              autoComplete="off"
              value={credentials.password}
              onChange={handleChanges}
            />
            <input
              type="email"
              name="email"
              placeholder="E-mail"
              autoComplete="off"
              value={credentials.email}
              onChange={handleChanges}
            />
            <button>Sign up</button>
          </form>
        </div>
    );
  };
  
  export default Signup;