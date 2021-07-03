import React, {useState, useEffect} from "react"

export default function DictPage () {
    const [word, setWord] = useState([])

    useEffect(() => {
        console.log("You made it")
        fetch("/spellinglist")
          .then((res) => res.json())
          .then((data) => {
            console.log(data, "data");
            setWord(data.dictionary);
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

    return(
        <>
        <div id="dict-page">
            <div id="missed-column">
                <p>Recently Missed Words</p>
            </div>
            <div id="study-column">
                <p>Study Words</p>
            </div>
            <div id="custom-column">
                <p>Custom Study List</p>
                <form>
                    <select id="custom-selects">
                        <option value="Animals">Animals</option>
                        <option value="Long Words">Long Words</option>
                    </select>
                </form>
                {/* <button onClick={() => }></button> */}
            </div>  
        </div>
        </>
    )
}