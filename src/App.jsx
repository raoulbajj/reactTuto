import React from 'react'
import "./CSS/App.css"
import Test from './CSS/Components/Test.jsx'
import Test2 from './CSS/Components/Test2.jsx'

function App() {

  return (
    <main className='flex flex-col gap-5'>
      <Test />
      <Test2 />
    </main>
  )
}

export default App
