import React, { useState, useEffect } from 'react'
import Question from '../components/Question'
import { AnimatePresence, motion } from "framer-motion"
import {warningVariant, welcomeVariant, quizVariantChildren, questionsVariant} from "../animations/animations"

export default function Quiz() {
  const [quizData, setQuizData] = useState([])
  const [selectedData, setSelectedData] = useState([])
  const [checked, setChecked] = useState({})
  const [quizCount, setQuizCount] = useState(0)
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    let subscribed = true
    fetch("https://opentdb.com/api.php?amount=5")
      .then(res => res.json())
      .then(data => {
        if(subscribed){
          setLoaded(true)
          setQuizData(data.results)
          setSelectedData(data.results.map(question => {
            return(
              {
                ...question,
                selectedAnswer: ""
              }
            )
          }))
          setChecked({
            isChecked: false,
            message: ""
          })
        }
      })
      // console.log(selectedData);

      return ()=>{
        console.log("cancelled")
        subscribed = false
      }
  }, [quizCount])

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
    console.log(checked);
    if(checked.isChecked){
      setLoaded(false)
      setQuizCount(prevCount => prevCount + 1)

    } else{
        const selected = selectedData.filter(singleQuestion => singleQuestion.selectedAnswer !== "")
        if(selected.length !== selectedData.length){
          setChecked({
            isChecked: false,
            message: "Please select all answers"
          })
        } else{
          const correctAnswerNum = selectedData.filter(singleQuestion => singleQuestion.selectedAnswer === singleQuestion.correct_answer)
          setChecked({
            isChecked: true,
            message: `You scored ${correctAnswerNum.length}/${quizData.length} correct answers`
          })
        }
    }
  }

  const questions = selectedData.map((question, index) => {
    return(
      <Question 
        key={index}
        {...question}
        handleAnswerClick = {handleAnswerClick}
        checked={checked}
      />
    )
  })

  return (
    <motion.div variants={welcomeVariant} initial="initial" animate="animate" exit="exit">
      <motion.div variants={quizVariantChildren} className='flex flex-col items-center justify-center h-screen'>
        {/* started adding loading animation, using loaded const for listening whether questions is loaded */}
        {
          loaded && 
            <motion.div variants={questionsVariant} className="overflow-hidden">
              {questions}
            </motion.div>
        }
        

        <div className='flex items-center justify-center gap-5 my-7'>

          <AnimatePresence>
            {/* using loaded const for quickly hiding warning text in animation */}
            {checked.message && loaded &&
              <motion.p variants={warningVariant} initial="initial" animate="animate" exit="exit" className={
                `font-bold text-base ${
                  checked.isChecked ? "text-customPurple " : "text-red-600"
              }`
              }>{checked.message}</motion.p>
            }
          </AnimatePresence>
          
            <button 
              onClick={handleCheck}
              className='border border-customPurple-answer rounded-[10px] bg-customPurple-button text-white cursor-pointer py-3 px-7 transition ease-out hover:scale-110 hover:bg-indigo-500 duration-300 active:scale-90'
            >
              {!checked.isChecked ? `Check Answers` : `Play Again`}
            </button>
        </div>
        
      </motion.div>
    </motion.div>
  )
}
