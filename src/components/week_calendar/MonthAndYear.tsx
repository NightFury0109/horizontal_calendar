import React from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'

type Props = {
  year: number,
  month: number
};

const MonthAndYear: React.FC<Props> = ({ year, month }) => {
  const months: Array<string> = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

  return (
    <div className='flex justify-between items-center'>
      <div className="flex items-center">
        <span className='text-2xl font-normal mr-2'>{months[month - 1]}</span>
        <span className='text-2xl font-normal'>{year}</span>
      </div>

      <div className="flex items-center">
        <FaChevronLeft className='text-xl mr-3 cursor-pointer h-9 w-9 p-2 transition-all duration-300 rounded-full hover:bg-orange-300 hover:bg-opacity-20' />
        <FaChevronRight className='text-xl cursor-pointer h-9 w-9 p-2 transition-all duration-300 rounded-full hover:bg-orange-300 hover:bg-opacity-20' />
      </div>
    </div>
  )
}

export default MonthAndYear;