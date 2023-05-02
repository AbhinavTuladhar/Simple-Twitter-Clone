import { React, useState } from 'react'

const Form = ({ addContent }) => {
  const [text, setText] = useState('')
  const [charactersRemaining, setCharactersRemaining] = useState(250)

  const disabledColour = 'bg-blue-200'
  const enabledColour = 'bg-blue-400'

  const handleUpdates = (event) => {
    const newText = event.target.value
    setText(newText)
    setCharactersRemaining(prevState => {
      return 250 - newText.length
    })
  }

  const addTweet = () => {
    setText('')
    addContent(text)
    setCharactersRemaining(250)
  }


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
          <p 
            className='items-end text-blue-400 text-right'
          > {charactersRemaining} </p>
        </div>
        <button 
          className={`${text === '' ? disabledColour : enabledColour} text-white text-xl p-2 rounded-lg h-1/2`} 
          disabled={text === '' ? true : false} 
          onClick={addTweet}
        > Add Post </button>
      </div>
    </>
  )
}

export default Form