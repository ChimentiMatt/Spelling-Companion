import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Background from "./img/background1.png";
import { NavLink } from "react-router-dom";

export default function Landing() {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [password2, setPassword2] = useState('')
  const [email, setEmail] = useState('')

  const [user, setUser] = useState('')

  function HandleSubmitsSignUp(event) {
    event.preventDefault();
    // console.log(username, password, email)

    fetch("/users")
      .then((res) => res.json())
      .then((data) => {
        console.log(data, "data")
        setUser(data.users)
        console.log(data.users, 'obj')
      })

  }

  // useEffect(() => {
  //   console.log("You made it");
  //   fetch("/spellinglist")
  //     .then((res) => res.json())
  //     .then((data) => {
  //       console.log(data, "data");
  //       setWords(data.dictionary);
  //       console.log(data.dictionary, "d.d");
  //     });
  // }, []);



  function HandleSignUpUsername(event) {
    setUsername(event.target.value)
  }

  function HandleSignUpPassword(event) {
    setPassword(event.target.value)
  }

  function HandleSignUpPassword2(event) {
    setPassword2(event.target.value)
  }

  function HandleSignUpEmail(event) {
    setEmail(event.target.value)
  }

  function HandleSubmitSignIn() {}

  function HandleSignInUsername() {}

  function HandleSignInPassword() {}
  return (
    <div id="landing-page">
      <div id="landing-page-left">
        <img id="left-image" src={Background}></img>
      </div>
      <div id="landing-page-right">
        <div id="landing-page-right-container">
          <h1 id="landing-h1">Spelling Companion</h1>
          <h3 id="landing-h3">Teachers | Students | Professionals</h3>
          <button
            id="log-in"
            onClick={() => {
              document.getElementById("popout-sign-in-form").style.visibility =
                "visible";
            }}
          >
            Log in
          </button>
          <button
            id="sign-up"
            onClick={() => {
              document.getElementById("popout-sign-up-form").style.visibility =
                "visible";
            }}
          >
            Sign Up
          </button>

          {/* Sign In popout with visibility hidden  */}
            <form onSubmit={HandleSubmitSignIn}>
          <div id="popout-sign-in-form">


              <div id="popout-sign-in-form-container">
                <p>Sign In</p>
                <input
                  id="popout-sign-in-form-username"
                  placeholder=" username"
                  onChange={HandleSignInUsername}
                ></input>
                <input
                  id="popout-sign-in-form-password"
                  placeholder=" password"
                  onChange={HandleSignInPassword}
                ></input>
                <button
                  id="popout-sign-in-form-submit"
                  onClick={() => {
                    document.getElementById(
                      "popout-sign-in-form"
                    ).style.visibility = "hidden";
                  }}
                >
                  Submit
                </button>
              </div>


          </div>
            </form>

          {/* Sign Up popout with visibility hidden  */}
          <div id="popout-sign-up-form">
              <form onSubmit={HandleSubmitsSignUp}>
            <div id="popout-sign-up-form-container">
              <p>Create An Account</p>
                <input
                  id="popout-sign-up-form-username"
                  placeholder=" username"
                  onChange={HandleSignUpUsername}
                ></input>
                <input
                  id="popout-sign-up-form-password"
                  placeholder=" password"
                  onChange={HandleSignUpPassword}
                ></input>
                <input
                  id="popout-sign-up-form-password2"
                  placeholder=" confirm password"
                  onChange={HandleSignUpPassword2}
                ></input>
                <input
                  id="popout-sign-up-form-email"
                  placeholder=" email"
                  onChange={HandleSignUpEmail}
                ></input>
                <button
                  id="popout-sign-up-form-submit"
                  onClick={() => {
                    document.getElementById(
                      "popout-sign-up-form"
                    ).style.visibility = "hidden";
                  }}
                >
                  Submit
                </button>
            </div>
              </form>
          </div>

          <Router>
            <NavLink to="/speller">Speller</NavLink>
          </Router>

          <Router>
            <NavLink to="/missedwords">Dict Page</NavLink>
          </Router>

          <Router>
            <NavLink to="/flashcards">FlashCards</NavLink>
          </Router>

          {/* <div id="bottom-bar">
            <div id="bottom-bar-container">
              <p id="bottom-bar-p">About</p>
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
}
