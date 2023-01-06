import { IDate } from '../types';

const getDates = (year: number, month: number): Array<IDate> => {
  const dates: Array<IDate> = [];
  const first_date: Date = new Date(year, month - 1, 1);
  const last_date: Date = new Date(year, month, 0);
  const first_day: number = first_date.getDay();

  const dates_number = first_day + last_date.getDate();
  let n: number = 35;

  if (dates_number > 35) n = 42;

  for (let i = 0; i <= first_day; i++) {
    let newDate = new Date(first_date);
    newDate.setDate(first_date.getDate() - (first_day - i));

    const data: IDate = {
      year: newDate.getFullYear(),
      month: newDate.getMonth() + 1,
      date: newDate.getDate(),
      day: newDate.getDay()
    };

    dates.push(data);
  }

  for (let i = 1; dates.length < n; i++) {
    let newDate = new Date(first_date);
    newDate.setDate(first_date.getDate() + i);

    const data: IDate = {
      year: newDate.getFullYear(),
      month: newDate.getMonth() + 1,
      date: newDate.getDate(),
      day: newDate.getDay()
    };

    dates.push(data);
  }

  return dates;
}

export default getDates;