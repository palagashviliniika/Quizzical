import React, { useState, useEffect} from 'react'
import {decode} from 'he'
import arrayShuffle from 'array-shuffle'

export default function Question(props) {
    const [allAnswers, setAllAnswers] = useState([])

    useEffect(() => {
      setAllAnswers(arrayShuffle([props.correct_answer, ...props.incorrect_answers]))
    
    }, [props.question])
    
    const answers = allAnswers.map((answer, index) => {
        return(
            <button 
                key={index}
                onClick={() => props.handleAnswerClick(answer, props.question)}
                className=
                    {`border border-customPurple-button rounded-[15px] py-1 px-4 cursor-pointer text-customPurple font-medium ${
                        props.selectedAnswer !== answer ? `` : `border border-customPurple-answer rounded-[15px] bg-customPurple-answer`
                        }
                        
                        ${
                            props.checked.isChecked && answer === props.correct_answer ? `border border-checked-correct rounded-[15px] bg-checked-correct` : ``
                        }

                        ${
                            props.checked.isChecked && answer === props.selectedAnswer && answer !== props.correct_answer ? `border border-checked-wrong rounded-[15px] bg-checked-wrong` : ``
                        }

                        ${
                            props.checked.isChecked && answer !== props.correct_answer ? `opacity-70` : ``
                        }
                        `
                    }
                disabled={props.checked.isChecked}
            >
                {decode(answer)}
            </button>
        )
    })

  return (
    <div className='mt-5'>
        <h1 className='text-xl font-bold text-customPurple'>{decode(props.question)}</h1>
        <div className="quiz-answers flex gap-12 mt-4">
            {answers}
        </div>
        <hr className='mt-5'/>
    </div>
  )
}
