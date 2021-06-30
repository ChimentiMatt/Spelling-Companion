import React, { useState } from 'react'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Background from './img/background1.png'
import { NavLink } from "react-router-dom";



export default function Landing() {
    return(
        <div id="landing-page">
        <div id="landing-page-left">
          <img id="left-image" src={Background}></img>
        </div>
        <div id="landing-page-right">
          <div id="landing-page-right-container">
            <h1 id="landing-h1">Spelling Companion</h1>
            <h3 id="landing-h3">Teachers | Students | Professionals</h3>
            <button id="log-in" onClick={() => { document.getElementById('popout-sign-in-form').style.visibility = 'visible'}}>Log in</button>
            <button id="sign-up" onClick={() => {document.getElementById('popout-sign-up-form').style.visibility = 'visible'}}>Sign Up</button>   
          
            {/* Sign In popout with visibility hidden  */}
            <div id="popout-sign-in-form">
              <div id="popout-sign-in-form-container">
                <p>Sign In</p>
                <input id="popout-sign-in-form-username" placeholder=" username"></input>
                <input id="popout-sign-in-form-password" placeholder=" password"></input>

                <button id="popout-sign-in-form-submit" onClick={() =>{document.getElementById('popout-sign-in-form').style.visibility = 'hidden'}}>Submit</button>
              </div>
            </div>


            {/* Sign Up popout with visibility hidden  */}
            <div id="popout-sign-up-form">
              <div id="popout-sign-up-form-container">
                <p>Create An Account</p>
                <input id="popout-sign-up-form-username" placeholder=" username"></input>
                <input id="popout-sign-up-form-password" placeholder=" password"></input>
                <input id="popout-sign-up-form-password2" placeholder=" confirm password"></input>
                <input id="popout-sign-up-form-email" placeholder=" email"></input>
                <button id="popout-sign-up-form-submit" onClick={() =>{document.getElementById('popout-sign-up-form').style.visibility = 'hidden'}}>Submit</button>
              </div>
            </div>

            <Router>
              <NavLink to='/speller'>Speller</NavLink>
            </Router>

            <Router>
              <NavLink to='/missedwords'>Dict Page</NavLink>
            </Router>

            <Router>
              <NavLink to='/flashcards'>FlashCards</NavLink>
            </Router>
        
          {/* <div id="bottom-bar">
            <div id="bottom-bar-container">
              <p id="bottom-bar-p">About</p>
            </div>
          </div> */}

          </div>
        </div>
      </div>
    )
}