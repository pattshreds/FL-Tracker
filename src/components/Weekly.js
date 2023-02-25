import React from 'react';
import '../styles/homepageStyles.css';

const Weekly = () => {
  return (
    <div className='homepage-container'>
      <table>
        <tr className='weekday-headers'>
            <th></th>
            <th className='days'>Monday</th>
            <th className='days'>Tuesday</th>
            <th className='days'>Wednesday</th>
            <th className='days'>Thursday</th>
            <th className='days'>Friday</th>
            <th className='days'>Saturday</th>
            <th className='days'>Sunday</th>
        </tr>
        <tr className='tasks'>
            <th>What are we doing?</th>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
        </tr>    
        <tr className='timeline'>
            <th>Timeline</th>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
        </tr>
        <tr className="eod">
            <th>End of day</th>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
        </tr>
      </table>
    </div>
  );
};

export default Weekly;
