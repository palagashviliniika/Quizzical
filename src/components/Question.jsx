import React, { useState, useId } from 'react'
import {decode} from 'he'
import arrayShuffle from 'array-shuffle'

export default function Question(props) {
    const [allAnswers, setAllAnswers] = useState(arrayShuffle([props.correct_answer, ...props.incorrect_answers]))
    
    // function handleAnswerClick(answer, question){
    //     console.log(answer);
    //     console.log(question);
    // }

    const answers = allAnswers.map((answer, index) => {
        return(
            <div 
                key={index}
                onClick={() => props.handleAnswerClick(answer, props.question)}
                className={props.selectedAnswer !== answer ? `border border-customPurple-button rounded-[15px] py-1 px-4 cursor-pointer` : `border border-customPurple-answer rounded-[15px] bg-customPurple-answer py-1 px-4 cursor-pointer`}
            >
                <h3 className='text-customPurple font-medium'>{decode(answer)}</h3>
            </div>
        )
    })

    console.log(props);

  return (
    <div className='mt-5'>
        <h1 className='quiz-question'>{decode(props.question)}</h1>
        <div className="quiz-answers flex gap-12 mt-4">
            {answers}
        </div>
        <hr className='mt-5'/>
    </div>
  )
}
