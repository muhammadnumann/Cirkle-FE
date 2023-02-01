import { getMonth, getYear } from 'date-fns';
import { useState } from 'react';
import DatePicker from 'react-datepicker';

const CustomeDateInput = () => {
  const [startDate, setStartDate] = useState(new Date());
  const yearsFiltered = Array.from(Array(getYear(new Date()) + 1).keys());
  const years = yearsFiltered.filter((_) => {
    return _ > 1990;
  });
  const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];
  return (
    <>
      <DatePicker
        className="InformationInput dateClass"
        renderCustomHeader={({ date, changeYear, changeMonth }) => (
          <div className="calender d-flex justify-content-center align-items-center pt-3 pb-2">
            <div className="bg-light-pink border-6 w-100">
              <select
                className="month-text-design border-0 ps-2 pe-5 py-1 bg-transparent"
                value={months[getMonth(date)]}
                onChange={({ target: { value } }) => changeMonth(months.indexOf(value))}
              >
                {months.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
            </div>

            <select
              className="border-0 ms-2 year-text-design"
              value={getYear(date)}
              onChange={({ target: { value } }) => changeYear(value)}
            >
              {years.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </div>
        )}
        selected={startDate}
        onChange={(date) => setStartDate(date)}
      />
    </>
  );
};
export default CustomeDateInput;
