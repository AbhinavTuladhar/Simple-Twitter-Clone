import { React, useState } from 'react'
import twitterData from './data/tweetData'
import Tweet from './components/Tweet'
import Form from './components/Form'

const App = () => {
  const [tweetData, setTweetData] = useState(twitterData)

  const addContent = ( content ) => {
    // First find the maximum value of the id in the tweetData array
    const maxId = tweetData.reduce((prev, current) => (prev.id > current.id) ? prev : current).id;
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
    setTweetData(
      tweetData.filter(tweet => {
        return tweet.id !== id
      })
    )
  }

  const updateContent = (id, newContent) => {
    // setTweetData(data => {
    //   data.map(tweet => {
    //     if (id === tweet.id) {
    //       return {
    //         ...tweet, content: newContent
    //       }
    //     }
    //     return tweet;
    //   })
    // })
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
    return <Tweet {...tweet} id={tweet.id} key = {tweet.id} deleteContent={deleteContent} updateContent={updateContent} />
  })

  return (
    <div className='my-4 bg-slate-900 text-white'>
      <Form addContent={addContent} />
      {tweetList}
    </div>
  )
}

export default App;