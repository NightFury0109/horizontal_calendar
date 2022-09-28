const getDates = (year: number, month: number, date: number, day: number): Array<object> => {
  const week_data: Array<object> = [];
  const created_day: Date = new Date(year, month - 1, date);

  for (let i = 1; i <= 7; i++) {
    let newDay: Date = new Date(created_day);
    newDay.setDate(created_day.getDate() - (day - i));

    const data: object = {
      year: newDay.getFullYear(),
      month: newDay.getMonth() + 1,
      date: newDay.getDate()
    };

    week_data.push(data);
  }

  return week_data;
}

export default getDates;