import './App.css';
import React from 'react';

// importing components from another files
import { ListComponents } from "./ListComponent";
import { ClassComponentTable } from './ClassComponent';
import { FunctionComponentTable } from './FunctionComponent';
import { Dialouge } from './DialougeComponent';

// imports related to DND
import { DragDropContext } from 'react-beautiful-dnd';

function App() {
  // List of England cricket team
  const EnglandTeam = ['Joe Root', 'James Anderson', 'Jonny Bairstow', 'Dom Bess', 'Stuart Broad', 'Rory Burns', 'Jos Buttler', 'Zak Crawley', 'Sam Curran', 'Haseeb Hameed', 'Dan Lawrence', 'Jack Leach', 'Ollie Pope', 'Ollie Robinson', 'Dom Sibley', 'Mark Wood', 'Craig Overton']

  // List of Indian cricket team
  const IndiaTeam = ['Rohit Sharma', 'Prithvi Shaw', 'Suryakumar Yadav', 'Abhimanyu Easwaran', 'Mayank Agarwal', 'Cheteshwar Pujara', 'Virat Kohli', 'Ajinkya Rahane', 'Hanuma Vihari', 'Rishabh Pant', 'R Ashwin', 'Ravindra Jadeja', 'Axar Patel', 'Jasprit Bumrah', 'Ishant Sharma', 'Mohammed Shami', 'Mohammed Siraj', 'Shardul Thakur', 'Umesh Yadav', 'KL Rahul', 'Wriddhiman Saha']

  // List of all MARVEL super heroes
  const [MarvelSuperHero, setList1] = React.useState(['Captain America', 'Iron Man', 'SpiderMan', 'Thor', 'Hulk', 'Black Widow', 'Loki', 'Black Panther', 'Deadpool', 'Doctor Strange', 'Ant Man', 'Captain Marvel'])

  // List of all DC super heroes
  const [DCSuperHero, setList2] = React.useState(['BatMan', 'SuperMan', 'Wonder Woman', 'Flash', 'Green Lantern', 'AquaMan', 'Robin', 'Cyborg', 'StarFire', 'HawkGirl', 'Shazam'])

  const banner = "https://www.10wallpaper.com/wallpaper/1440x900/1109/Pantanal_wetlands_of_the_birds-National_Geographic-Photo_of_the_Day_1440x900.jpg"

  // Function for deleting items from list using index
  const deleteItem = (list, index) => {
    return list.splice(index, 1)
  }

  // Function called when Drag Ends
  const onDragEnd = (result) => {
    // getting the source and destination object
    const { source, destination } = result
    if (!destination)
      return;

    if (source.droppableId === destination.droppableId) {
      if (source.droppableId === "Marvel_drop_area") {
        let tempList = MarvelSuperHero
        const removed = deleteItem(tempList, source.index)
        tempList.splice(destination.index, 0, removed)
        setList1(tempList)
      }
      else {
        let tempList = DCSuperHero
        const removed = deleteItem(tempList, source.index)
        tempList.splice(destination.index, 0, removed)
        setList2(tempList)
      }
    } else {
      let tempList1 = MarvelSuperHero
      let tempList2 = DCSuperHero
      if (source.droppableId === "Marvel_drop_area") {
        const removed = deleteItem(tempList1, source.index)
        tempList2.splice(destination.index, 0, removed)
        setList1(tempList1)
        setList2(tempList2)
      } else {
        const removed = deleteItem(tempList2, source.index)
        tempList1.splice(destination.index, 0, removed)
        setList1(tempList1)
        setList2(tempList2)
      }
    }
  }

  return (
    <div className='App'>
      <header className='App-header'>
        <h1>Team list for England vs India test series</h1>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '0% 2% 0% 2%' }}>
          <div style={{ width: '40%' }}>
            <img src={banner} alt='logo' style={{ width: '100%', height: 'auto' }} />
            <div>
              <p style={{ color: '#5c636f', fontWeight: 700, textAlign: 'left' }}>
                Class Component Data
              </p>
              <textarea readOnly style={{ resize: 'none', width: '100%', background: '#5c636f', color: 'white', fontSize: '17px' }} value={EnglandTeam} />
              <p style={{ color: '#5c636f', fontWeight: 700, textAlign: 'left' }}>
                Function Component Data
              </p>
              <textarea readOnly style={{ resize: 'none', width: '100%', background: '#5c636f', color: 'white', fontSize: '17px' }} value={IndiaTeam} />
            </div>
          </div>
          <div style={{ display: 'flex', width: '60%', alignItems: 'center', justifyContent: 'center' }}>
            <div style={{ width: '50%', }}>
              <ClassComponentTable UserData={EnglandTeam}/>
            </div>
            <div style={{ width: '50%', }}>
              <FunctionComponentTable UserData={IndiaTeam}/>
            </div>
          </div>
        </div>
        <hr/>
        <h4>Hands on Beautiful-React-DND</h4>
        <div style={{ display: 'flex' }}>
          <DragDropContext onDragEnd={onDragEnd}>
            <div style={{ width: '100%' }}>
              <ListComponents Marvel={MarvelSuperHero} DC={DCSuperHero} />
            </div>
          </DragDropContext>
        </div>
        <hr/>
        <Dialouge />
      </header>
    </div>
  );
}

export default App;
