import { React, useState, useEffect } from 'react'
import twitterData from './data/tweetData'
import Tweet from './components/Tweet'
import Form from './components/Form'
import SideBar from './components/SideBar'

const App = () => {
  const [tweetData, setTweetData] = useState(twitterData)
  const [theme, setTheme] = useState('light')
  const maxLength = 250

  useEffect(() => {
    if (theme === 'dark')
      document.documentElement.classList.add('dark')
    else 
      document.documentElement.classList.remove('dark')
  })

  const handleThemeSwitch = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark')
  }

  const addContent = ( content ) => {
    // First find the maximum value of the id in the tweetData array
    const maxId = tweetData.length > 0 ? 
      tweetData.reduce((prev, current) => (prev.id > current.id) ? prev : current).id
      : 0
    const newTweet = {
      id: maxId + 1,
      author: 'Anonymous User',
      handle: '@Anonymous',
      content: content,
    }
    setTweetData(prevData => {
      return [...prevData, newTweet]
    })
  }

  const deleteContent = (id) => {
    const deleteConfirmation = window.confirm('Are you sure you want to delete this tweet?')
    if (!deleteConfirmation)
      return
    setTweetData(
      tweetData.filter(tweet => {
        return tweet.id !== id
      })
    )
    setTimeout(() => {alert('The tweet has been deleted!')}, 100)
  }

  const updateContent = (id, newContent) => {
    setTweetData(prevData => {
      const updatedData = prevData.map(tweet => {
        if (tweet.id === id) {
          return {...tweet, content: newContent}
        }
        return tweet;
      })
      return updatedData
    })
  }

  const tweetList = tweetData.map(tweet => {
    return (
      <Tweet 
        {...tweet} 
        id={tweet.id} 
        key = {tweet.id} 
        deleteContent={deleteContent} 
        updateContent={updateContent} 
        maxLength={maxLength}
      />
    )
  })

  return (
    <>
      <SideBar 
        handleThemeSwitch={handleThemeSwitch}
        theme={theme}
        className='duration-500'
      />
      <div className='dark:bg-black dark:text-white bg-slate-50 text-slate-800 duration-500'>
        <Form addContent={addContent} maxLength={maxLength} />
        {tweetList}
      </div>
    </>
  )
}

export default App;