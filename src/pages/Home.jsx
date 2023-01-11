import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from "framer-motion"
import { welcomeVariant, welcomeVariantChildren } from '../animations/animations'

export default function Home() {
  return (
    <>
      <motion.div variants={welcomeVariant} initial="initial" animate="animate" className="flex flex-col items-center justify-center h-screen">
          <motion.h1 
            variants={welcomeVariantChildren}
            className='home-title overflow-hidden text-customPurple text-3xl font-bold text-center'>
              Quizzical
          </motion.h1>
          <motion.p 
            variants={welcomeVariantChildren}
            className='text-center overflow-hidden whitespace-nowrap home-description text-customPurple text-1xl font-normal'>
              Test you knowledge here
              <span className='animate-ping'>.</span>
              <span className='animate-ping delay-50'>.</span>
              <span className='animate-ping delay-100'>.</span>
          </motion.p>
          <Link 
            className='home-start bg-customPurple-button text-white font-sans no-underline font-medium rounded-2xl px-[32px] py-[16px] mt-3 transition ease-out hover:scale-110 hover:bg-indigo-500 duration-300 active:translate-y-1' to = "/quiz">
              Start Quiz
          </Link>
      </motion.div>
    </>
    
  )
}
