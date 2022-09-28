import React from 'react';

type Props = {
  day_name: string;
}

const DayItem: React.FC<Props> = ({ day_name }) => {
  return (
    <div className=' text-lg font-medium'>{day_name}</div>
  )
}

export default DayItem;