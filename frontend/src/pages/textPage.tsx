import { useState } from 'react'


function TextPage() {
  const [inputText, setInputText] = useState('')

  const handleChange = (event) => {
    setInputText(event.target.value)
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    alert(`You submitted: ${inputText}`)
    setInputText('')
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className='Text-box'>
          <input id='textBox' 
            type="text" 
            placeholder='Wright somthing here'
            value={inputText}
            onChange={handleChange}
          />
          <p>Input: {inputText}</p>
          <button id='textSubmit' type="submit">Submit</button>
        </div>
      </form>
    </>
  )
}

export default TextPage;