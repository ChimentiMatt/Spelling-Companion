import React, {useState} from "react"

export default function DictPage () {
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
            </div>  
        </div>
        </>
    )
}