import React, { useState } from 'react'
import {decode} from 'he'
import arrayShuffle from 'array-shuffle'

export default function Question(props) {
    const [allAnswers, setAllAsnwers] = useState(arrayShuffle([props.correct_answer, ...props.incorrect_answers]))
    const answers = allAnswers.map((answer, index) => {
        return(
            <div key={index} className="quiz-answer border border-customPurple-button rounded-[15px] py-1 px-2 cursor-pointer">
                <h3 className='quiz-answer-text'>{decode(answer)}</h3>
            </div>
        )
    })

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
