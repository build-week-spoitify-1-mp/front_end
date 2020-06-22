import React, { useState } from "react";
import { axiosWithAuth } from "../utils/axiosWithAuth";

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
    axiosWithAuth()
      .post("/api/login", credentials)
      .then(response => {
        window.localStorage.setItem("token", response.data.payload)

        props.history.push("/protected")
      })
      .catch(error => console.log(error))
  }
  

  return (
    <div>
      <h1>Welcome to the Bubble App!</h1>
         <form onSubmit={login}>
          <input
            type="text"
            name="username"
            value={credentials.username}
            onChange={handleChanges}
          />
          <input
            type="password"
            name="password"
            value={credentials.password}
            onChange={handleChanges}
          />
          <button>Log in</button>
        </form>
      </div>
  );
};

export default Login;