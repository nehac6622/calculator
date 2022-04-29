import { useState } from 'react'

import './App.css'

function App() {


  return (
    <div>
        <div className="bg-amber-400 h-24 w-screen sm:w-56 mx-auto my-12 rounded-lg">
          <div className="ml-auto text-2xl max-w-max">
            fabvbkbve
          </div>
        </div>
        <div className="grid grid-cols-3 max-w-max mx-auto">
        <div className="text-2xl m-5 rounded-lg hover:font-semibold hover:scale-125 transition-transform text-white cursor-pointer bg-teal-900 px-4 py-1">7</div>
        <div className="text-2xl m-5 rounded-lg hover:font-semibold hover:scale-125 transition-transform text-white cursor-pointer bg-teal-900 px-4 py-1">8</div>
        <div className="text-2xl m-5 rounded-lg hover:font-semibold hover:scale-125 transition-transform text-white cursor-pointer bg-teal-900 px-4 py-1">9</div>
        <div className="text-2xl m-5 rounded-lg hover:font-semibold hover:scale-125 transition-transform text-white cursor-pointer bg-teal-900 px-4 py-1">4</div>
        <div className="text-2xl m-5 rounded-lg hover:font-semibold hover:scale-125 transition-transform text-white cursor-pointer bg-teal-900 px-4 py-1">5</div>
        <div className="text-2xl m-5 rounded-lg hover:font-semibold hover:scale-125 transition-transform text-white cursor-pointer bg-teal-900 px-4 py-1">6</div>
        <div className="text-2xl m-5 rounded-lg hover:font-semibold hover:scale-125 transition-transform text-white cursor-pointer bg-teal-900 px-4 py-1">1</div>
        <div className="text-2xl m-5 rounded-lg hover:font-semibold hover:scale-125 transition-transform text-white cursor-pointer bg-teal-900 px-4 py-1">2</div>
        <div className="text-2xl m-5 rounded-lg hover:font-semibold hover:scale-125 transition-transform text-white cursor-pointer bg-teal-900 px-4 py-1">3</div>
        </div>
        <div className="flex flex-1 mx-auto w-max">
        <div className="text-2xl m-5 rounded-lg hover:font-semibold hover:scale-125 transition-transform text-white cursor-pointer bg-teal-900 px-4 py-1">AC</div>   
          <div className="text-2xl m-5 rounded-lg hover:font-semibold hover:scale-125 transition-transform text-white cursor-pointer bg-teal-900 px-4 py-1">0</div>
          <div className="text-2xl m-5 rounded-lg hover:font-semibold hover:scale-125 transition-transform text-white cursor-pointer bg-teal-900 px-4 py-1">=</div>
        </div>
        <div className="flex flex-1 mx-auto w-max">
          <div className="text-2xl m-5 rounded-lg hover:font-semibold hover:scale-125 transition-transform text-white cursor-pointer bg-teal-900 px-4 py-1">+</div>
          <div className="text-2xl m-5 rounded-lg hover:font-semibold hover:scale-125 transition-transform text-white cursor-pointer bg-teal-900 px-4 py-1">-</div>
          <div className="text-2xl m-5 rounded-lg hover:font-semibold hover:scale-125 transition-transform text-white cursor-pointer bg-teal-900 px-4 py-1">*</div>
          <div className="text-2xl m-5 rounded-lg hover:font-semibold hover:scale-125 transition-transform text-white cursor-pointer bg-teal-900 px-4 py-1">/</div>
        </div>
    </div>
  )
}

export default App
