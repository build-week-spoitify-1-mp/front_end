import React, { useState, useEffect } from "react";
import axios from "axios";

// Style
import styled from 'styled-components'
import { accent_main, background } from './theme'

const StyledLogin = styled.div`
  width: 60%;
  border-radius: 20px;
  background-color: ${background};
  padding: 3%;
  margin: 3% auto;

  h2 {
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
  }
  button {
    margin: 4% 0 2%;
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
`


const Login = props => {
  // make a post request to retrieve a token from the api
  // when you have handled the token, navigate to the BubblePage route
  const [credentials, setCredientials] = useState({ username: "", password: "" })

  const handleChanges = event => {
    setCredientials({
        ...credentials,
        [event.target.name]: event.target.value
    })
  }

  const login = event => {
    event.preventDefault();
    // Make a POST request and send the credentials object to the API
    axios
    .post('https://bw-spotify1-mp.herokuapp.com/login', `grant_type=password&username=${credentials.username}&password=${credentials.password}`, {
      headers: { 
        // btoa is converting our client id/client secret into base64
        Authorization: `Basic ${btoa('lambda-client:lambda-secret')}`,
        'Content-Type': 'application/x-www-form-urlencoded'
      }
    })
      .then(response => {
          console.log(response)
          if(response) {
            window.localStorage.setItem('user_token', response.data.access_token);
            props.history.push('/dashboard');
          }
      })
      .catch(error => console.log(error));
  }
  

  return (
    <StyledLogin>
      <h2>Login!</h2>
         <form onSubmit={login}>
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
          <button>Log in</button>
          </form>
          <button onClick={() => {props.history.push('/signup')}}>Signup</button>
      </StyledLogin>
  );
};

export default Login