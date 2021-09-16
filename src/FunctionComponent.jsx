import React from 'react';
export function FunctionComponentTable(props) {

  return (
    <div>
      <ol style={{ listStyle: 'none', textAlign: 'left' }}>
        <li>
          <h3 style={{ color: "#4a4f59" }}>
            Team India
          </h3>
        </li>
        {props.UserData.map((data, index) => (
          <li key={index} className="items">
            {data}
          </li>
        ))}
      </ol>
    </div>
  )
}
