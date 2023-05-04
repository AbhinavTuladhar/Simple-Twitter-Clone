import { React, useState } from 'react'

const Form = ({ addContent, maxLength: maxTweetLength }) => {
  const [text, setText] = useState('')
  const [charactersRemaining, setCharactersRemaining] = useState(maxTweetLength)

  const disabledColour = 'bg-blue-200'
  const enabledColour = 'bg-blue-400'

  const handleUpdates = (event) => {
    const newText = event.target.value
    if (newText.length <= maxTweetLength) {
      setText(newText)
      setCharactersRemaining(maxTweetLength - newText.length)
    } else {
      alert(`Your tweet has reached the limit of ${maxTweetLength} characters.`)
    }
  }

  const addTweet = () => {
    setText('')
    addContent(text)
    setCharactersRemaining(maxTweetLength)
  }

  return (
    <>
      <div className='w-screen sm:w-7/12 mx-auto flex flex-row items-center justify-between pt-4'>
        <div className='w-10/12 flex flex-col'>
          <textarea 
            className='dark:bg-slate-500 w-full h-24 p-4 hover:shadow-blue-300 hover:shadow-sm bg-yellow-50 dark:text-slate-50 duration-500' 
            onChange={handleUpdates} 
            placeholder='Tweet about 30 days of React... '
            value={text}  
          />
          <p 
            className='items-end text-blue-400 text-right'
          > {charactersRemaining} </p>
        </div>
        <button 
          className={`${text === '' ? disabledColour : enabledColour} text-white text-xl p-2 rounded-lg h-1/2 duration-300`} 
          disabled={text === '' ? true : false} 
          onClick={addTweet}
        > Add Post </button>
      </div>
    </>
  )
}

export default Form