import React, { useState, useEffect } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'

type Props = {
  year: number,
  month: number,
  backward: () => void,
  forward: () => void,
  selectMonth: (selectedMonth: number) => void,
  selectYear: (selectedYear: number) => void,
};

const MonthAndYear: React.FC<Props> = ({ year, month, selectMonth, selectYear, backward, forward }) => {
  const [month_value, setMonth] = useState<number>(month);
  const [year_value, setYear] = useState<number>(year);

  useEffect(() => {
    setMonth(month);
    setYear(year);
  }, [month, year]);

  const onBackward = (): void => {
    backward();
  }

  const onForward = (): void => {
    forward();
  }

  const changeMonth = (e: React.ChangeEvent<HTMLSelectElement>): void => {
    setMonth(parseInt(e.target.value));
    selectMonth(parseInt(e.target.value));
  }

  const changeYear = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setYear(parseInt(e.target.value));
    selectYear(parseInt(e.target.value));
  }

  return (
    <div className='flex justify-between items-center'>
      <div className="flex items-center">
        <select
          name="month"
          id="month"
          value={month_value}
          className='text-2xl font-normal mr-2 bg-transparent cursor-pointer w-fit'
          onChange={changeMonth}
        >
          <option value="1">January</option>
          <option value="2">February</option>
          <option value="3">March</option>
          <option value="4">April</option>
          <option value="5">May</option>
          <option value="6">June</option>
          <option value="7">July</option>
          <option value="8">August</option>
          <option value="9">September</option>
          <option value="10">October</option>
          <option value="11">November</option>
          <option value="12">December</option>
        </select>

        <input
          type="number"
          value={year_value}
          className='text-2xl font-normal bg-transparent w-[80px] cursor-pointer'
          onChange={changeYear}
        />
      </div>

      <div className="flex items-center">
        <div className='flex justify-center items-center text-xl mr-3 cursor-pointer h-9 w-9 p-2 transition-all duration-300 rounded-full hover:bg-orange-300 hover:bg-opacity-20' onClick={onBackward}>
          <FaChevronLeft />
        </div>
        <div className="flex justify-center items-center text-xl cursor-pointer h-9 w-9 p-2 transition-all duration-300 rounded-full hover:bg-orange-300 hover:bg-opacity-20" onClick={onForward}>
          <FaChevronRight />
        </div>
      </div>
    </div>
  )
}

export default MonthAndYear;