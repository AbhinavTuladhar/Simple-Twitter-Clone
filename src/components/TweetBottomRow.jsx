import { React } from 'react'
import { BiEdit, BiTrash, BiComment } from 'react-icons/bi'
import { AiOutlineHeart, AiOutlineRetweet, AiFillHeart } from 'react-icons/ai'

const TweetBottomRow = ({toggleUpdate, deleteData, hearted, handleHeart, formattedDate }) => {
  return (
    <div className='flex justify-between items-center m-4'>
      <div className='flex flex-row gap-4 text-blue-300'>
        <BiEdit 
          className='hover:text-blue-600 duration-200 hover:cursor-pointer' 
          size={32}
          onClick={toggleUpdate}
        />
        <BiTrash 
          className='hover:text-red-600 duration-200 hover:cursor-pointer' 
          size={32} 
          onClick={deleteData}
        />
      </div>
      <div className='flex flex-row gap-4'>
        <BiComment 
          className='hover:text-blue-600 duration-200 hover:cursor-pointer' 
          size={32} 
        />
        {hearted ? 
          <AiFillHeart
            className='hover:text-red-600 duration-200 hover:cursor-pointer text-red-600 active:scale-105'
            size={32}
            onClick={handleHeart}
          />
          :
          <AiOutlineHeart 
            className='hover:text-red-600 duration-200 hover:cursor-pointer active:scale-105'
            size={32} 
            onClick={handleHeart}
          />
        }
        <AiOutlineRetweet 
          className='hover:text-green-600 duration-200 hover:cursor-pointer' 
          size={32} 
        />
      </div>
      <div>
        {formattedDate}
      </div>
    </div>
  )
}

export default TweetBottomRow