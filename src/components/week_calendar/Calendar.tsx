import React, { useState, useEffect } from 'react';

import MonthAndYear from './MonthAndYear';
import DateItem from './DateItem';
import DayItem from './DayItem';

import getDates from '../../utils/getDates';
import { IDate } from '../../types';

const day_names: Array<string> = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];

const Calendar: React.FC = () => {
  const today_year: number = new Date().getFullYear();
  const today_month: number = new Date().getMonth() + 1;
  const today_date: number = new Date().getDate();
  const today_day: number = new Date().getDay();

  const [year, setYear] = useState<number>(today_year);
  const [month, setMonth] = useState<number>(today_month);
  const [date, setDate] = useState<number>(today_date);
  const [day, setDay] = useState<number>(today_day);
  const [month_dates, setMonthDates] = useState<IDate[]>([]);

  useEffect(() => {
    const dates: Array<IDate> = getDates(year, month);

    setMonthDates(dates);
  }, []);

  const backward = (): void => {
    if (month === 1) {
      const dates: Array<IDate> = getDates(year - 1, 12);

      setMonth(12);
      setYear(year - 1);
      setMonthDates(dates);
    } else {
      const dates: Array<IDate> = getDates(year, month - 1);

      setMonth(month - 1);
      setMonthDates(dates);
    }
  }

  const forward = (): void => {
    if (month === 12) {
      const dates: Array<IDate> = getDates(year + 1, 1);

      setMonth(1);
      setYear(year + 1);
      setMonthDates(dates);
    } else {
      const dates: Array<IDate> = getDates(year, month + 1);

      setMonth(month + 1);
      setMonthDates(dates);
    }
  }

  return (
    <div className='w-full md:w-[70vw] min-w-[320px] pt-5 px-5 text-orange-700 bg-green-100 rounded-xl shadow-xl'>
      <MonthAndYear year={year} month={month} backward={backward} forward={forward} />

      <hr className='my-4 relative h-[3px] bg-orange-700' />

      <div className='grid grid-cols-7'>
        {day_names.map((value, index) => (
          <div className="flex justify-center" key={index}>
            <DayItem day_name={value} />
          </div>
        ))}

        {month_dates.map((item, index) => (
          <div className="flex justify-center w-full" key={index}>
            <DateItem year={item.year} month={item.month} date={item.date} day={item.day} />
          </div>
        ))}
      </div>
    </div>
  )
}

export default Calendar;