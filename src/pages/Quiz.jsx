import React, { useState, useEffect } from 'react'
import Question from '../components/Question'

export default function Quiz() {
  const [quizData, setQuizData] = useState([])
  const [selectedData, setSelectedData] = useState([])


  useEffect(() => {
    let subscribed = true
    fetch("https://opentdb.com/api.php?amount=5")
      .then(res => res.json())
      .then(data => {
        if(subscribed){
          setQuizData(data.results)
          setSelectedData(data.results.map(question => {
            return(
              {
                ...question,
                selectedAnswer: ""
              }
            )
          }))
        }
      })
      console.log(selectedData);

      return ()=>{
        console.log("cancelled")
        subscribed = false
      }
  }, [])

  function handleAnswerClick(answer, question){
    console.log(answer);
    console.log(question);
    setSelectedData(prevData => prevData.map(singleQuestion => {
        return singleQuestion.question === question 
        ? {...singleQuestion, selectedAnswer: answer}
        : singleQuestion
      })
    )
    // console.log(selectedData);
  }

  const questions = selectedData.map((question, index) => {
    return(
      <Question 
        key={index}
        {...question}
        handleAnswerClick = {handleAnswerClick}
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
