// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'

import LeftBar from './components/LeftBar.jsx'
import Main from "./components/Main.jsx";

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
        <div className="background">
            <LeftBar/>
            <Main/>
        </div>
    </>
  )
}

export default App
