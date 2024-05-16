import '../assets/style/styles.css';
import leftArrowIcon from '../assets/images/previous-page-icon.png';

export const Calendar = () => {
    return (
        <div className='calendar-container'>
            <div className='calendar-header'>
                <h4 className='calendar-title'>May 12-18</h4>
                <img class="calendar-arrow" src={leftArrowIcon} width='30px' height='30px' />
                <img class="calendar-arrow" src={leftArrowIcon} width='30px' height='30px' style={{transform: 'rotate(180deg)'}}/>
            </div>

            <div className='calendar'>
                <div className='calendar-item simple'>
                    <span className='calendar-item-day-letter'>S</span>
                    <span className='calendar-item-day-number'>12</span>
                </div>

                <div className='calendar-item simple'>
                    <span className='calendar-item-day-letter'>M</span>
                    <span className='calendar-item-day-number'>13</span>
                </div>

                <div className='calendar-item simple'>
                    <span className='calendar-item-day-letter'>T</span>
                    <span className='calendar-item-day-number'>14</span>
                </div>

                <div className='calendar-item active'>
                    <span className='calendar-item-day-letter'>W</span>
                    <span className='calendar-item-day-number'>15</span>
                </div>

                <div className='calendar-item disabled'>
                    <span className='calendar-item-day-letter'>T</span>
                    <span className='calendar-item-day-number'>16</span>
                </div>

                <div className='calendar-item disabled'>
                    <span className='calendar-item-day-letter'>F</span>
                    <span className='calendar-item-day-number'>17</span>
                </div>

                <div className='calendar-item disabled'>
                    <span className='calendar-item-day-letter'>S</span>
                    <span className='calendar-item-day-number'>18</span>
                </div>
            </div>
        </div>
    );
};