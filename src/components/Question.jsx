import React from 'react'

export default function Question() {
  return (
    <div className='mt-5'>
        <h1 className='quiz-question'>Question</h1>
        <div className="quiz-answers flex gap-12 mt-4">
            <div className="quiz-answer bg-[#D6DBF5] rounded-[15px] py-1 px-2">
                <h3 className='quiz-answer-text'>Answer 1</h3>
            </div>
            <div className="quiz-answer border border-customPurple-button rounded-[15px] py-1 px-2">
                <h3 className='quiz-answer-text'>Answer 2</h3>
            </div>
            <div className="quiz-answer border border-customPurple-button rounded-[15px] py-1 px-2">
                <h3 className='quiz-answer-text'>Answer 3</h3>
            </div>
            <div className="quiz-answer border border-customPurple-button rounded-[15px] py-1 px-2">
                <h3 className='quiz-answer-text'>Answer 4</h3>
            </div>
        </div>
        <hr className='mt-5'/>
    </div>
  )
}
