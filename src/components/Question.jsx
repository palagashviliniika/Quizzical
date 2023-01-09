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
            <button 
                key={index}
                onClick={() => props.handleAnswerClick(answer, props.question)}
                className=
                    {`border border-customPurple-button rounded-[15px] py-1 px-4 cursor-pointer text-customPurple font-medium ${
                        props.selectedAnswer !== answer ? `` : `border border-customPurple-answer rounded-[15px] bg-customPurple-answer`
                        }
                        
                        ${
                            props.checked && answer === props.correct_answer ? `border border-checked-correct rounded-[15px] bg-checked-correct` : `opacity-70`
                        }

                        ${
                            props.checked && answer === props.selectedAnswer && answer !== props.correct_answer ? `border border-checked-wrong rounded-[15px] bg-checked-wrong` : ``
                        }
                        `
                    }
                disabled={props.checked}
            >
                {decode(answer)}
            </button>
        )
    })

    // console.log(props.checked);

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
