import React from 'react';

function SixMonthTable({tableData}) {
  return (
    <table>
      <thead>
        <tr>
          <th>Date</th>
          <th>High</th>
          <th>Low</th>
          <th>Change</th>
        </tr>
      </thead>
      <tbody>
        { tableData.map((day) => {
          return (
            <tr>
              <td>{day.date}</td>
              <td>{day.high}</td>
              <td>{day.low}</td>
              <td>{day.change}</td>
            </tr>
          )
        })
      }
      </tbody>
    </table>
  )
}

export default SixMonthTable;