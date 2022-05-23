import React from 'react'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

import GlobalStyle from './Styles/global'
import Board from './Components/Board/Index'

function App() {
  return (
    <>
      <GlobalStyle/>
      <Board />
      <ToastContainer/>
    </>
  )
}

export default App
