import { React, useState } from 'react'
import { BiUserCircle } from 'react-icons/bi'
import TweetBottomRow from './TweetBottomRow'

const Tweet = ({ id, author, handle, content, deleteContent, updateContent }) => {
  const now = new Date();
  const options = { month: 'long', day: 'numeric', year: 'numeric', hour: 'numeric', minute: 'numeric', hour12: true };
  const formattedDate = now.toLocaleString('en-US', options);

  const [isUpdating, toggleUpdating] = useState(false)
  const [tweetContent, setTweetContent] = useState(content)
  const [hearted, toggleHearted] = useState(false)

  // This is for toggling between updating and viewing mode.
  const toggleUpdate = () => {
    toggleUpdating(prevStatus => !prevStatus)
  }

  // 'deleting' the tweet itself.
  const deleteData = () => {
    deleteContent(id);
  }

  // this is for adding tweets to the tweet array.
  const updateData = () => {
    updateContent(id, tweetContent);
    toggleUpdate()
  }
  
  // updating the contents of the tweetContent state..
  const updateTweetContent = (event) => {
    const { value: newValue } = event.target
    setTweetContent(prevContent => {
      return newValue
    })
  }

  // this is for toggling the heart
  const handleHeart = () => {
    toggleHearted(!hearted)
  }

  const viewingContent = (
    <div className='border border-slate-300 w-screen sm:w-7/12 mx-auto text-xl py-1'>
      <div className='text-slate-400 flex flex-row items-center m-4 gap-4'>
        <BiUserCircle size={48} />
        {author}
        <div className='text-slate-400 text-lg'> {handle} </div>
      </div>
      <div className='m-4'>
        {content}
      </div>
      
      {/* This is for the bottom row */}
      <TweetBottomRow 
        toggleUpdate={toggleUpdate}
        deleteData={deleteData}
        hearted={hearted}
        handleHeart={handleHeart}
        formattedDate={formattedDate}
      />
    </div>
  )

  const updatingContent = (
    <div className='border border-slate-300 w-screen sm:w-7/12 mx-auto text-xl my-1 max-h-64 flex flex-col justify-start items-start'>
      <textarea 
        value={tweetContent} 
        onChange={updateTweetContent} 
        className='h-32 w-full bg-slate-800 p-4' 
      />
      <button
        className='bg-blue-400 p-1 m-2'
        onClick={updateData}
      > 
        Save </button>
      <button
        className='bg-red-400 p-1 m-2'
        onClick={toggleUpdate}
      > Cancel </button>
    </div>
  )

  return (
    <>
      {isUpdating ? updatingContent : viewingContent}
    </>
  )
}

export default Tweet