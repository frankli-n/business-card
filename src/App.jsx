import { useState } from 'react'
import Photo from "./components/Photo"
import Info from "./components/Info"

import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='container1'>
      <div className='container2'>
        <div className='picturecontainer'>
        <Photo />
        </div>
        <div className='infocontainer'>
          <Info />
        </div>
      </div>

    </div>    
  )
}

export default App

