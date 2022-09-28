import React, { useState } from 'react';

import Month from './MonthAndYear';
import DayItem from './DayItem';
import DateItem from './DateItem';

import getDates from '../../utils/getDates';

const Calendar: React.FC = () => {
  const today_year: number = new Date().getFullYear();
  const today_month: number = new Date().getMonth() + 1;
  const today_date: number = new Date().getDate();
  const today_day: number = new Date().getDay();

  const [year, setYear] = useState(today_year);
  const [month, setMonth] = useState(today_month);
  const [date, setDate] = useState(today_date);
  const [day, setDay] = useState(today_day);

  getDates(year, month, date, day);

  return (
    <div className='w-full md:w-[70vw] p-5 bg-green-100 rounded-xl shadow-xl'>
      <Month />
    </div>
  )
}

export default Calendar;