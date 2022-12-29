import React from 'react'
import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <home className="flex flex-col items-center justify-center h-screen">
        <h1 className='home-title text-customPurple text-3xl font-bold'>Quizzical</h1>
        <p className='home-description text-customPurple text-1xl font-normal'>Test you knowledge here!</p>
        <Link className='home-start bg-customPurple-button text-white font-sans no-underline font-medium rounded-2xl px-[32px] py-[16px] mt-3 transition ease-out hover:scale-110 hover:bg-indigo-500 duration-300 active:translate-y-1' to = "/quiz">Start Quiz</Link>
    </home>
  )
}
