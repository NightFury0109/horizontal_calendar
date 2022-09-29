import React, { useState, useEffect } from 'react';
import classNames from 'classnames';

import { IDate } from '../../types';

type Props = {
  year: number,
  month: number,
  date: number,
  day: number,
  selectedDate: IDate,
  selectDate: (selected_date: IDate) => void
}

const DateItem: React.FC<Props> = ({ year, month, day, date, selectedDate, selectDate }) => {
  const today: Date = new Date();
  let isToday: Boolean = false;

  const [isActive, setIsActive] = useState(false);

  if (year === today.getFullYear() && month === today.getMonth() + 1 && date === today.getDate()) isToday = true;

  useEffect(() => {
    if (selectedDate.year === 0 && selectedDate.month === 0 && selectedDate.date === 0 && isToday) {
      setIsActive(true);
    } else if (selectedDate.year !== year || selectedDate.month !== month || selectedDate.date !== date) {
      setIsActive(false);
    } else if (selectedDate.year === year && selectedDate.month === month && selectedDate.date === date) {
      setIsActive(true);
    }
  }, [selectedDate, year, month, date, day]);

  const onSelect = (): void => {
    const selected_date: IDate = {
      year: year,
      month: month,
      date: date,
      day: day
    };

    selectDate(selected_date);

    setIsActive(true);
  }

  return (
    <>
      <div className='flex flex-col items-center w-full'>
        <div className={classNames('mt-3 flex justify-center items-center text-lg cursor-pointer rounded-full h-12 w-12 p-2 transition-all duration-300', { 'bg-orange-700 text-white': isActive, 'hover:bg-orange-300 hover:bg-opacity-20': !isActive })} onClick={onSelect}>
          <span>{date}</span>
        </div>

        <hr className='my-4 relative h-[2px] w-full bg-orange-700' />
      </div>
    </>
  )
}

export default DateItem;