import { React, useState } from 'react'

const Form = ({ addContent }) => {
  const [text, setText] = useState('')
  const [buttonColour, setButtonColour] = useState('bg-blue-200')
  const [charactersRemaining, setCharactersRemaining] = useState(250)

  const handleUpdates = (event) => {
    const newText = event.target.value
    setText(newText)
    setButtonColour(newText === '' ? 'bg-blue-200' : 'bg-blue-400')
    setCharactersRemaining(prevState => {
      return 250 - newText.length
    })
  }

  const addTweet = () => {
    setText(prevState => {
      return ''
    })
    addContent(text)
    setCharactersRemaining(250)
  }

  const isDisabled = text === '' ? true : false

  return (
    <>
      <div className='w-screen sm:w-7/12 mx-auto flex flex-row items-center justify-between'>
        <div className='w-10/12 flex flex-col'>
          <textarea 
            className='bg-slate-500 w-full h-24 p-4 hover:shadow-blue-300 hover:shadow-sm' 
            onChange={handleUpdates} 
            placeholder='Tweet about 30 days of React... '
            value={text}  
          />
          <p className='items-end text-blue-400 text-right'> {charactersRemaining} </p>
        </div>
        <button className={`${buttonColour} text-white text-xl p-2 rounded-lg h-1/2`} disabled={isDisabled} onClick={addTweet}> Add Post </button>
      </div>
    </>
  )
}

export default Form