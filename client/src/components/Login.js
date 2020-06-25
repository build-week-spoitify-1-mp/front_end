import React, { useState, useEffect } from "react";
import axios from "axios";


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
          window.localStorage.setItem('user_token', response.data.access_token);
          props.history.push('/dashboard');
      })
      .catch(error => console.log(error));
  }

  useEffect(() => {
    if(window.localStorage.getItem('user_token')){
      props.history.push('/dashboard')
    }
  }, [])
  

  return (
    <div>
      <h1>Login!</h1>
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
      </div>
  );
};

export default Login