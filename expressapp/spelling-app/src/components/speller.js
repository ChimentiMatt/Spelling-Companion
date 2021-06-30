import React, { useState, useRef, useEffect } from "react";
import { useSpeechSynthesis } from "react-speech-kit";

export default function SpellingPage() {

  const { speak } = useSpeechSynthesis();
  const [num, setNum] = useState(60);
  const [text, setText] = useState("");
  const [score, setScore] = useState(0);
  var randomWords = require('random-words');
  const [spellingList, setSpellingList] = useState([
    {
      typo: "",
      word: "",
    },
  ]);
  const [displayWord, setDisplayWord] = useState("");

  function handleSubmit(event) {
    console.log(JSON.stringify({ spellingList: spellingList }), 'here')
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json",
      },
      body: JSON.stringify({ spellingList: spellingList })
    }
    fetch(`/spellinglist`, options)
  }

  const Start = () => {
      setDisplayWord(randomWords())
      
      document.getElementById('submit-btn').style.visibility = 'visible'
      document.getElementById("start-btn").style.visibility = 'hidden';
      document.getElementById("input-text").disabled = false;
      document.getElementById("input-text").style.background = 'white';
      document.getElementById("speak-btn").style.visibility = 'visible';
      document.getElementById("definition").style.visibility = 'visible'
      // setRandomIndex(Math.floor(Math.random() * (100 - 0)) + 1);
      // RandomIndex();
      console.log('not zer')
  }
  
  function Submit(evt) {
    
    
    evt.preventDefault();
    handleSubmit()
    console.log(text);
    if (text === document.getElementById("new-word").innerText) {
      setText("");
      setDisplayWord(randomWords())

      if (num === 0) {
      } else {
        setScore(score + 1);
        setText("");
        document.getElementById("input-text").style.background = "white";

        //Hides the button that shows answer 
        document.getElementById("answer-btn").style.visibility = 'hidden'
        //Hides the  answer 
        document.getElementById("answer").style.visibility = 'hidden'
      }
    } else {

      //set input field to red
      document.getElementById("input-text").style.background =
        "rgb(253, 161, 161)";

      //makes a button visible that can show the answer 
      document.getElementById("answer-btn").style.visibility = 'visible'

      setSpellingList([
        ...spellingList,
        {
          typo: text,
          word: displayWord,
        },
      ]);
      console.log(spellingList);
    }
  }

  // function RandomIndex() {
  //   return setDisplayWord(words[randomIndex]);
  // }

  function ShowAnswer()  {
    document.getElementById("answer").style.visibility = 'visible'
  }

  return (
    <div id="spelling-page">
      <div id="spelling-container">
        <h1 id="spelling-title">Spelling Companion</h1>

        <p id="score">Score: {score}</p>

        {/* <p id="instruction">Type the following</p> */}
        <p id="new-word">{displayWord}</p>

        <form onSubmit={Submit}>
          <input
            id="input-text"
            type="text"
            value={text}
            disabled
            onChange={(e) => setText(e.target.value)}
          ></input>
          <br></br>
          <input type="submit" value="Submit" id="submit-btn"/> 
        </form>
        <div id="styling-line"></div>
        {/* <p>{spellingList[0].typo}</p> */}

        <button id='speak-btn' onClick={() => speak({ text: displayWord })}>Hear Word</button>  

        <button id="answer-btn" onClick={() => ShowAnswer()}>See Answer</button>

        <button id="start-btn" onClick={() => Start()}>
          Start
        </button>

        <p id="definition">Definition: lorem ...</p>
   
        <p id="test"></p>
        <p id="answer">{displayWord}</p>


      </div>
      
    </div>
  );
}
