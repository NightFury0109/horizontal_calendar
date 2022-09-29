import React from 'react';

import './App.scss';

import Calendar from './components/week_calendar/Calendar';

const App: React.FC = () => {
  return (
    <div className="flex justify-center items-center w-fll p-4 min-h-[100vh]">
      <Calendar />
    </div>
  );
}

export default App;
