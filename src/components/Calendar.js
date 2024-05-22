import '../assets/style/styles.css';
import leftArrowIcon from '../assets/images/previous-page-icon.png';

export const Calendar = () => {
  const today = new Date();

  const formatDate = (date) => {
    return date.getDate().toString().padStart(2, '0');
  };

  const getMonthName = (month) => {
    return new Date(0, month).toLocaleString('en-US', { month: 'long' });
  };

  return (
    <div className='calendar-container'>
      <div className='calendar-header'>
        <h4 className='calendar-title'>
            {getMonthName(today.getMonth())} {formatDate(today)} - {formatDate(new Date(today.getTime() + 6 * 24 * 60 * 60 * 1000))}
        </h4>
        <img class="calendar-arrow" src={leftArrowIcon} width='30px' height='30px' />
        <img class="calendar-arrow" src={leftArrowIcon} width='30px' height='30px' style={{transform: 'rotate(180deg)'}}/>
      </div>

      <div className='calendar'>
        {Array(7)
          .fill(0)
          .map((_, index) => {
            const date = new Date(today.getTime() + index * 24 * 60 * 60 * 1000);
            const isToday = date.getDate() === today.getDate() && date.getMonth() === today.getMonth() && date.getFullYear() === today.getFullYear();

            return (
              <div key={index} className={`calendar-item ${isToday ? 'active' : 'simple'}`}>
                <span className='calendar-item-day-letter'>
                  {date.toLocaleDateString('en-US', { weekday: 'short' }).toUpperCase()}
                </span>
                <span className='calendar-item-day-number'>
                  {formatDate(date)}
                </span>
              </div>
            );
          })}
      </div>
    </div>
  );
};
