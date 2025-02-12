import React from 'react'
import toast, { Toaster } from 'react-hot-toast'; //messages display error, success... etc.
import { Trash2 as TrashIcon } from "lucide-react"; //icons

function App() {
  return (
    <div>
      <div className='text-2xl'>App 
      <TrashIcon />
      </div>
      <Toaster/>
    </div>
  )
}

export default App
