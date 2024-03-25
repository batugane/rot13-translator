import { useState } from 'react'
import { rot13 } from '../utils/rot13'

const Rot13Converter = () => {
  const [input, setInput] = useState('')
  const [output, setOutput] = useState('')

  const handleTranslate = () => {
    setOutput(rot13(input))
  }

  return (
    <div className="container">
      <textarea value={input} onChange={(e) => setInput(e.target.value)} placeholder="Enter ROT13 or plain text " />
      <button onClick={handleTranslate}>Translate</button>
      <textarea value={output} readOnly className="output" />
    </div>
  )
}

export default Rot13Converter
