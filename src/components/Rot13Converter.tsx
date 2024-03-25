import { useState } from 'react'
import { rot13 } from '../utils/rot13'

const Rot13Converter = () => {
  const [input, setInput] = useState('')
  const [output, setOutput] = useState('')
  //   const [isDecoding, setIsDecoding] = useState(false)

  const handleTranslate = () => {
    setOutput(rot13(input))
  }

  //   const toggleMode = () => {
  //     setIsDecoding(!isDecoding)
  //     setInput('')
  //     setOutput('')
  //   }

  return (
    <div className="container">
      {/* <button onClick={toggleMode}>Switch to {isDecoding ? 'Encoding' : 'Decoding'}</button> */}
      {/* <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder={isDecoding ? 'Enter ROT13 text' : 'Enter plain text'}
      /> */}
      {/* placeholder={isDecoding ? 'Enter ROT13 text' : 'Enter plain text'}  */}
      <textarea value={input} onChange={(e) => setInput(e.target.value)} placeholder="Enter ROT13 or plain text " />
      <button onClick={handleTranslate}>Translate</button>
      <textarea value={output} readOnly className="output" />
    </div>
  )
}

export default Rot13Converter
