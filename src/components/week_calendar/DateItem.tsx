import React from 'react';
import classNames from 'classnames';

import DayItem from './DayItem';

import { IDate } from '../../types';

const DateItem: React.FC<IDate> = ({ year, month, day, date }) => {
  const day_names: Array<string> = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];

  let isActive: Boolean = false;
  const today: Date = new Date();

  if (year === today.getFullYear() && month === today.getMonth() + 1 && date === today.getDate()) isActive = true;

  return (
    <div className='flex flex-col items-center'>
      <DayItem day_name={day_names[day]} />
      <div className={classNames('mt-3 flex justify-center items-center text-lg cursor-pointer rounded-full h-12 w-12 p-2', { 'bg-orange-700 text-white': isActive, 'hover:bg-orange-300 hover:bg-opacity-20': !isActive })}>
        <span>{date}</span>
      </div>
    </div>
  )
}

export default DateItem;