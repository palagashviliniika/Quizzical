import React, { useState, useEffect } from 'react'
import Question from '../components/Question'

export default function Quiz() {
  const [quizData, setQuizData] = useState([])
  const [selectedData, setSelectedData] = useState([])
  const [isChecked, setIsChecked] = useState(false)

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

  function handleCheck(){
    console.log(isChecked);
    const selected = selectedData.filter(singleQuestion => singleQuestion.selectedAnswer !== "")
    if(selected.length !== selectedData.length){
      console.log("Please select all answers")
    } else{
      console.log("All Answers Selected")
      setIsChecked(true)
    }
  }

  const questions = selectedData.map((question, index) => {
    return(
      <Question 
        key={index}
        {...question}
        handleAnswerClick = {handleAnswerClick}
        checked={isChecked}
      />
    )
  })

  return (
    <div>
      <div className='quiz-form'>
        {questions}
        <button 
          onClick={handleCheck}
          className='border border-customPurple-answer rounded-[10px] bg-customPurple-button text-white cursor-pointer py-3 px-7 my-10'
        >
          Check Answers
        </button>
      </div>
    </div>
  )
}
