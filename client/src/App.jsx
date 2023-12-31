import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import CreateTodo from './components/CreateTodo'
import SignupForm from './components/SignupForm'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <CreateTodo />
      <SignupForm />
    </>
  )
}

export default App
