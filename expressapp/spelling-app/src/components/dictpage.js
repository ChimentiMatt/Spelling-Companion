import React, {useState} from "react"

export default function DictPage () {
    function FetchC() { 
        console.log('test1')
        const option = {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json",
              },
            //   body: JSON.stringfiy ({dictionary: spellingArray.dictionary })
        }
        fetch(`/spellinglist/`, option)
            .then((res) => res.json())
            .then((data) => {
                console.log(data, 'this is data')
            })
        }
    

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
                        <button onClick={() => FetchC()}>Fetch btn</button>
            </div>  
        </div>
        </>
    )
}