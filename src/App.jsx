import { useState } from 'react'
import './App.css'
import Note from './components/Note'
import Header from './components/Header'
// import FirebaseAuth from './components/FirebaseAuth'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div>
      <Header/>
      <div className="container">
        <Note/>
      </div>
    </div>
      {/* <h1>Firebase DEMO</h1> */}
      {/* <FirebaseAuth></FirebaseAuth> */}
      
    </>
  )
}

export default App
