import './App.css';
import React from 'react'
import { ClassComponentTable } from './ClassComponent';
import { FunctionComponentTable } from './FunctionComponent';
function App() {
  const UserData = ['Joe Root', 'James Anderson', 'Jonny Bairstow', 'Dom Bess', 'Stuart Broad', 'Rory Burns', 'Jos Buttler', 'Zak Crawley', 'Sam Curran', 'Haseeb Hameed', 'Dan Lawrence', 'Jack Leach', 'Ollie Pope', 'Ollie Robinson', 'Dom Sibley', 'Mark Wood', 'Craig Overton']
  const UserData1 = ['Rohit Sharma', 'Prithvi Shaw', 'Suryakumar Yadav', 'Abhimanyu Easwaran', 'Mayank Agarwal', 'Cheteshwar Pujara', 'Virat Kohli', 'Ajinkya Rahane', 'Hanuma Vihari', 'Rishabh Pant', 'R Ashwin', 'Ravindra Jadeja', 'Axar Patel', 'Jasprit Bumrah', 'Ishant Sharma', 'Mohammed Shami', 'Mohammed Siraj', 'Shardul Thakur', 'Umesh Yadav', 'KL Rahul', 'Wriddhiman Saha']
  const banner = "https://www.10wallpaper.com/wallpaper/1440x900/1109/Pantanal_wetlands_of_the_birds-National_Geographic-Photo_of_the_Day_1440x900.jpg"
  return (
    <div className='App'>
      <header className='App-header'>
        <h1>Team list for England vs India test series</h1>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '0% 2% 0% 2%' }}>
          <div style={{ width: '40%' }}>
            <img src={banner} alt="logo" style={{ width: '100%', height: 'auto' }} />
            <div>
              <p style={{ color: '#5c636f', fontWeight: 700, textAlign: 'left' }}>
                Class Component Data
              </p>
              <textarea readOnly style={{ resize: 'none', width: '100%', background: '#5c636f', color: 'white', fontSize: '17px' }} value={UserData} />
              <p style={{ color: '#5c636f', fontWeight: 700, textAlign: 'left' }}>
                Function Component Data
              </p>
              <textarea readOnly style={{ resize: 'none', width: '100%', background: '#5c636f', color: 'white', fontSize: '17px' }} value={UserData1} />
            </div>
          </div>
          <div style={{ display: 'flex', width: '60%', alignItems: 'center', justifyContent: 'center' }}>
            <div style={{ width: '50%', }}>
              <ClassComponentTable UserData={UserData}/>
            </div>
            <div style={{ width: '50%', }}>
              <FunctionComponentTable UserData={UserData1}/>
            </div>
          </div>
        </div>
       </header>
    </div>
  );
}
export default App;
