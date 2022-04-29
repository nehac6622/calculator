import { useState } from 'react'

import './App.css'

function App() {
  const [a,setA] = useState(0)
  const [init, setInit] = useState(true)
  const [sec,setSec] = useState(0)
  const [result,setResult] = useState(0)
  const [sym,setSym] = useState("")
  const [symStatus,setSymStatus] = useState(false)
  const [op,setOp] = useState(false)
  function change(b) {
    setInit(false)
    if(symStatus === false){
      setA(a*10+b)
    }
    else{
      setSec(sec*10+b)
    }
  }
  function allClear(){
    setA(0)
    setSym("")
    setSec(0)
    setSymStatus(false)
    setOp(false)
    setResult(0)
    setInit(true)
  }
  function zero(){
    setA(a*10)
    setSec(sec*10)
  }
  function addSymbol(c){
    setSym(c)
    if(symStatus === false){
      changeSymStatus(true)
    }

  }
  function changeSymStatus(){
    setSymStatus(true)
  }
  function oP(){
    setOp(true)
    if(sym === "+"){
      setResult(a + sec)
    }
    else if(sym === "-"){
      setResult(a-sec)
    }
    else if(sym === "*"){
      setResult(a*sec)
    }
    else if(sym === "/"){
      setResult(a/sec)
    }
    
  }
  return (
    <div>
        <div className="bg-amber-600 h-24 w-screen sm:w-56 mx-auto my-12 rounded-lg">
        {init === false ?  <div className="ml-auto text-2xl max-w-max text-white px-2">
            {a}
          </div> : <div className="ml-auto text-2xl max-w-max text-white px-2">
            |
          </div> }
          <div className="text-2xl ml-auto max-w-max text-white px-2">
            <div className="flex flex-1">
            <div className="pr-3">{sym}
              </div> {init === false && <div>{sec}</div>  } 
              </div>
          </div>
          <div className="text-2xl ml-auto max-w-max text-white px-2">
            <div className="flex flex-1">
            { op === true && <div className="pr-3">=</div> } 
            {init === false && <div>{result}</div> }
              </div>
          </div>
        </div>
        <div className="grid grid-cols-3 max-w-max mx-auto">
        <div className="text-2xl m-5 rounded-lg hover:font-semibold hover:scale-125 transition-transform text-white cursor-pointer bg-teal-900 px-4 py-1" onClick={() => change(7)}>7</div>
        <div className="text-2xl m-5 rounded-lg hover:font-semibold hover:scale-125 transition-transform text-white cursor-pointer bg-teal-900 px-4 py-1" onClick={() => change(8)}>8</div>
        <div className="text-2xl m-5 rounded-lg hover:font-semibold hover:scale-125 transition-transform text-white cursor-pointer bg-teal-900 px-4 py-1" onClick={() => change(9)}>9</div>
        <div className="text-2xl m-5 rounded-lg hover:font-semibold hover:scale-125 transition-transform text-white cursor-pointer bg-teal-900 px-4 py-1" onClick={() => change(4)}>4</div>
        <div className="text-2xl m-5 rounded-lg hover:font-semibold hover:scale-125 transition-transform text-white cursor-pointer bg-teal-900 px-4 py-1" onClick={() => change(5)}>5</div>
        <div className="text-2xl m-5 rounded-lg hover:font-semibold hover:scale-125 transition-transform text-white cursor-pointer bg-teal-900 px-4 py-1" onClick={() => change(6)}>6</div>
        <div className="text-2xl m-5 rounded-lg hover:font-semibold hover:scale-125 transition-transform text-white cursor-pointer bg-teal-900 px-4 py-1" onClick={() => change(1)}>1</div>
        <div className="text-2xl m-5 rounded-lg hover:font-semibold hover:scale-125 transition-transform text-white cursor-pointer bg-teal-900 px-4 py-1" onClick={() => change(2)}>2</div>
        <div className="text-2xl m-5 rounded-lg hover:font-semibold hover:scale-125 transition-transform text-white cursor-pointer bg-teal-900 px-4 py-1" onClick={() => change(3)}>3</div>
        </div>
        <div className="flex flex-1 mx-auto w-max">
        <div className="text-2xl m-5 rounded-lg hover:font-semibold hover:scale-125 transition-transform text-white cursor-pointer bg-teal-900 px-4 py-1" onClick={allClear}>AC</div>   
          <div className="text-2xl m-5 rounded-lg hover:font-semibold hover:scale-125 transition-transform text-white cursor-pointer bg-teal-900 px-4 py-1" onClick={zero}>0</div>
          <div className="text-2xl m-5 rounded-lg hover:font-semibold hover:scale-125 transition-transform text-white cursor-pointer bg-teal-900 px-4 py-1" onClick={oP}>=</div>
        </div>
        <div className="flex flex-1 mx-auto w-max">
          <div className="text-2xl m-5 rounded-lg hover:font-semibold hover:scale-125 transition-transform text-white cursor-pointer bg-teal-900 px-4 py-1" onClick={() => addSymbol("+")}>+</div>
          <div className="text-2xl m-5 rounded-lg hover:font-semibold hover:scale-125 transition-transform text-white cursor-pointer bg-teal-900 px-4 py-1" onClick={() => addSymbol("-")}>-</div>
          <div className="text-2xl m-5 rounded-lg hover:font-semibold hover:scale-125 transition-transform text-white cursor-pointer bg-teal-900 px-4 py-1" onClick={() => addSymbol("*")}>*</div>
          <div className="text-2xl m-5 rounded-lg hover:font-semibold hover:scale-125 transition-transform text-white cursor-pointer bg-teal-900 px-4 py-1" onClick={() => addSymbol("/")}>/</div>
        </div>
    </div>
  )
}

export default App
