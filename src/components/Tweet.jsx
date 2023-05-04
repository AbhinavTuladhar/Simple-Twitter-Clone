import { React, useState } from 'react'
import { BiUserCircle } from 'react-icons/bi'
import TweetBottomRow from './TweetBottomRow'

const Tweet = ({ id, author, handle, content, deleteContent, updateContent }) => {
  const now = new Date();
  const options = { month: 'long', day: 'numeric', year: 'numeric', hour: 'numeric', minute: 'numeric', hour12: true };
  const formattedDate = now.toLocaleString('en-US', options);

  const [isUpdating, toggleUpdating] = useState(false)
  const [tweetContent, setTweetContent] = useState(content)
  const [originalTweetContent, setOriginalTweetContent] = useState(content)
  const [hearted, toggleHearted] = useState(false)

  // This is for toggling between updating and viewing mode.
  const toggleUpdate = () => {
    setOriginalTweetContent(tweetContent)
    toggleUpdating(prevStatus => !prevStatus)
    if (isUpdating) {
      setTweetContent(originalTweetContent)
      setOriginalTweetContent(tweetContent)
    }
  }  

  // 'deleting' the tweet itself.
  const deleteData = () => {
    deleteContent(id);
  }

  // this is for adding tweets to the tweet array.
  const updateData = () => {
    updateContent(id, tweetContent);
    toggleUpdate()
    setTweetContent(tweetContent)
    setOriginalTweetContent(tweetContent);
  }
  
  // updating the contents of the tweetContent state..
  const updateTweetContent = (event) => {
    const { value: newValue } = event.target
    setTweetContent(newValue)
  }

  // this is for toggling the heart
  const handleHeart = () => {
    toggleHearted(!hearted)
  }

  const viewingContent = (
    <div className='border border-slate-300 w-screen sm:w-7/12 mx-auto text-xl py-1 mt-4'>
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
        className='h-32 w-full dark:bg-slate-800 dark:text-white bg-slate-50 text-slate-800 p-4 duration-500' 
      />
      <button
        className='bg-blue-400 p-2 m-2 rounded-lg'
        onClick={updateData}
      > 
        Save </button>
      <button
        className='bg-red-400 p-2 m-2 rounded-lg'
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