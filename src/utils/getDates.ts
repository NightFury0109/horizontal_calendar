import { IDate } from '../types';

const getDates = (year: number, month: number, date: number, day: number): Array<IDate> => {
  const week_data: Array<IDate> = [];
  const created_day: Date = new Date(year, month - 1, date);

  for (let i = 0; i < 7; i++) {
    let newDay: Date = new Date(created_day);
    newDay.setDate(created_day.getDate() - (day - i));

    const data: IDate = {
      year: newDay.getFullYear(),
      month: newDay.getMonth() + 1,
      date: newDay.getDate(),
      day: newDay.getDay()
    };

    week_data.push(data);
  }

  return week_data;
}

export default getDates;