import React, { useState, useEffect } from "react";

export default function DictPage() {
  const [words, setWords] = useState([]);

  useEffect(() => {
    console.log("You made it");
    fetch("/spellinglist")
      .then((res) => res.json())
      .then((data) => {
        // console.log(data, "data");
        setWords(data.dictionary);
        // console.log(data.dictionary, "d.d");
      });
  }, []);

  // useEffect(() => {
  //   const options = {
  //     method: "GET",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //   }
  //   fetch('/spellinglist', options)
  //     .then(res => res.json())
  //     .then(data => {
  //       console.log(data, 'cats')
  //     })

  // })

  function Delete() {
      
  }

  return (
    <>
      <div id="dict-page">
        <div id="missed-column">
          <p id="missed-column-p">Recently Missed Words</p>
          {words.map((i) => {
            if (i == null) {
            } else {
              return (
                  <div id="misssed-row">
                <p id="missed-column-data">
                   {i.word}: {i.typo}
                </p>
                <button id="missed-btn" onClick={() => Delete}>remove</button>
                </div>
              );
            }
          })}
        </div>
        <div id="study-column">
          <p>Study Words</p>
        </div>
        <div id="custom-column">
          <p id="custom-column-p">Custom Study List</p>
          <form>
            <select id="custom-selects">
              <option value="Animals">Animals</option>
              <option value="Long Words">Long Words</option>
            </select>
          </form>
          <button onClick={() => console.log(words)}></button>

          {words.map((i) => {
            if (i == null) {
            } else {
              return (
                  <>
                <p>
                  {i.typo} {i.word} 
                </p>
                </>
              );
            }
          })}
        </div>
      </div>
    </>
  );
}
