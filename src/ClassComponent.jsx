import React from 'react';
export class ClassComponentTable extends React.Component {
  render() {
    return (
      <div>
        <ol style={{ listStyle: 'none', textAlign: 'left' }}>
          <li>
            <h3 style={{ color: "#4a4f59" }} >
              Team England
            </h3>
          </li>
          {this.props.UserData.map((data, index) => (
            <li key={index} className='items'> {data}</li>
          ))}
        </ol>
      </div>
    )
  }
}
