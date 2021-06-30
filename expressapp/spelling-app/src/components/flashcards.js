import React, {useState} from 'react'

export default function FlashCards() {
    return(
        <div id="flash-card-page">
            <div id="flashcard-container">
                <div id="flashcard">
                    <div id="flashcard-red"></div>
                    <div id="flashcard-blue-1"></div>
                    <div id="flashcard-blue-2"></div>
                    <div id="flashcard-blue-3"></div>
                    <div id="flashcard-blue-4"></div>
                    <div id="flashcard-blue-5"></div>
                    <div id="flashcard-blue-6"></div>
                    <div id="flashcard-blue-7"></div>
                    <div id="flashcard-blue-8"></div>
                    <div id="flashcard-blue-9"></div>
                    <div id="flashcard-blue-10"></div>
                    {/* <div id="flashcard-blue-5"></div> */}
                </div>
                <p id="flashcard-definition">like a tiger but smaller</p>
                <br></br>
                <p id="flashcard-voice">Hear Word</p>
                <form>
                    <input id="flashcard-input"></input>
                    <br></br>
                    <input id="flashcard-submit" type="submit" value="submit"></input>
                </form>         
                
            </div>
        </div>
    )
} 