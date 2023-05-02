import { React } from 'react'
import { MdDarkMode } from 'react-icons/md'
import { AiOutlineTwitter } from 'react-icons/ai'
import "rc-tooltip/assets/bootstrap.css";
import Tooltip from "rc-tooltip";

const SideBar = ({ handleThemeSwitch, theme }) => {
  let renderTooltip = <span className='duration-500'> Toggle between light and dark mode </span>;
  return (
    <div className='h-screen w-16 left-0 top-0 fixed dark:bg-black dark:text-white bg-slate-50 text-slate-800 border-r-slate-300 border flex flex-col items-center pt-4 duration-500 gap-10 border-l-0 border-t-0 border-b-0'>
      <AiOutlineTwitter 
        size={32}
      />
      <Tooltip placement="left" overlay={renderTooltip}>
        <MdDarkMode 
          size={32}
          onClick={handleThemeSwitch}
          className='hover:cursor-pointer'
        />
      </Tooltip>
    </div>
  )
}

export default SideBar