import React from 'react';

type Props = {
  year: number,
  month: number
};

const MonthAndYear: React.FC<Props> = ({ year, month }) => {
  const months: Array<string> = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

  return (
    <div className='flx items-center'>
      <span className='text-2xl font-normal mr-2'>{months[month - 1]}</span>
      <span className='text-2xl font-normal'>{year}</span>
    </div>
  )
}

export default MonthAndYear;