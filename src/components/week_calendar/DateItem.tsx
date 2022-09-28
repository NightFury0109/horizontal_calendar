import React from 'react';

import DayItem from './DayItem';

type Props = {
  date: number,
  day: number
};

const DateItem: React.FC<Props> = ({ date, day }) => {
  const day_names: Array<string> = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];

  return (
    <div className='flex flex-col items-center'>
      <DayItem day_name={day_names[day]} />
      <span className='mt-3'>{date}</span>
    </div>
  )
}

export default DateItem;