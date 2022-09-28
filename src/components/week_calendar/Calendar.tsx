import React, { useState, useEffect } from 'react';

import MonthAndYear from './MonthAndYear';
import DateItem from './DateItem';

import getDates from '../../utils/getDates';
import { IDate } from '../../types';

const Calendar: React.FC = () => {
  const today_year: number = new Date().getFullYear();
  const today_month: number = new Date().getMonth() + 1;
  const today_date: number = new Date().getDate();
  const today_day: number = new Date().getDay();

  const [year, setYear] = useState<number>(today_year);
  const [month, setMonth] = useState<number>(today_month);
  const [date, setDate] = useState<number>(today_date);
  const [day, setDay] = useState<number>(today_day);
  const [week_dates, setWeekDates] = useState<IDate[]>([]);

  useEffect(() => {
    const dates: Array<IDate> = getDates(year, month, date, day);

    setWeekDates(dates);
  }, []);

  return (
    <div className='w-full md:w-[70vw] min-w-[320px] p-5 text-orange-700 bg-green-100 rounded-xl shadow-xl'>
      <MonthAndYear year={year} month={month} />
      <hr className='mt-4 relative h-[3px] bg-orange-700' />
      <div className='flex justify-between mt-5'>
        {week_dates.map((item, index) => (
          <DateItem date={item.date} day={item.day} key={index} />
        ))}
      </div>
    </div>
  )
}

export default Calendar;