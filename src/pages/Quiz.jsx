import React, { useState, useEffect } from 'react'
import Question from '../components/Question'

export default function Quiz() {
  const [quizData, setQuizData] = useState([])
  
  useEffect(() => {
    fetch("https://opentdb.com/api.php?amount=5")
      .then(res => res.json())
      .then(data => setQuizData(data.results))
      console.log(quizData);
  }, [])

  return (
    <div>
      <div className='quiz-form'>
        <Question />
        <Question />
        <Question />
        <Question />
        <Question />
      </div>
    </div>
  )
}
