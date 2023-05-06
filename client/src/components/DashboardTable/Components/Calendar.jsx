import { useState } from 'react';
import Calendar from 'react-calendar';

function ReactCalendar() {
  const [date, setDate] = useState(new Date())



  return (

    <div className="card px-3 py-3 reactCalendar">
      <h4 className="header center">Event Calendar</h4>
      <div className="calendar-container">
        <Calendar onChange={setDate} value={date} />
      </div>
      
      <div className="text-center card mt-4  ">
        Selected date: {date.toDateString()}
        
      </div>
    </div>
  )

}

export default ReactCalendar;