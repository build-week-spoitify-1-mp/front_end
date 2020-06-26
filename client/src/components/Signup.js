import React, { useState } from "react";
import axios from "axios";

// Style
import styled from 'styled-components'
import { accent_main, text, background } from './theme'

const StyledSignup = styled.div`
  width: 60%;
  border-radius: 20px;
  background-color: ${background};
  padding: 3%;
  margin: 3% auto;

  h2, h3 {
        text-align: center;
        color: ${accent_main};
        font-weight: 900;
    }

  form {
    display: flex;
    flex-direction: column;
    align-items: center;
    input {
      padding: 2%;
      width: 80%;
      background-color: ${background};
      border: none;
      border-bottom: 2px solid ${accent_main};
      color: ${accent_main};
      font-size: 1.5rem;

      &:focus {
        border-bottom: 4px solid ${accent_main};
        outline: none;
      }
    }

    button {
      margin: 4% 0 2% 0;
      background-color: ${accent_main}; /* Green */
      border: none;
      border-radius: 10px;
      color: white;
      padding: 15px 32px;
      text-align: center;
      text-decoration: none;
      display: inline-block;
      font-size: 16px;
    }
  }
`

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
            if(response){
              props.history.push('/login');
            }
            //console.log(response)
        })
        .catch(error => console.log(error));
    }
  
    return (
      <StyledSignup>
        <h2>Signup!</h2>
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
        </StyledSignup>
    );
  };
  
  export default Signup;