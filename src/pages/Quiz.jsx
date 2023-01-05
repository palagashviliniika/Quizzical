import React, { useState, useEffect } from 'react'
import Question from '../components/Question'

export default function Quiz() {
  const [quizData, setQuizData] = useState([])
  
  useEffect(() => {
    let subscribed = true
    fetch("https://opentdb.com/api.php?amount=5")
      .then(res => res.json())
      .then(data => {
        if(subscribed){
          setQuizData(data.results)
        }
      })
      console.log(quizData);

      return ()=>{
        console.log("cancelled")
        subscribed = false
      }
  }, [])

  const questions = quizData.map((question, index) => {
    return(
      <Question 
        key={index}
        {...question}
      />
    )
  })

  return (
    <div>
      <div className='quiz-form'>
        {questions}
      </div>
    </div>
  )
}
