import React from 'react';

// imports related to DND
import { Droppable, Draggable } from 'react-beautiful-dnd';

export function ListComponents({ Marvel, DC }) {

  const getListStyle = isDraggingOver => ({
    background: isDraggingOver ? 'drakgray' : 'transparent',
    width: '100%',
    marginRight: '10%',
  });

  const getItemStyle = (isDragging, draggableStyle) => ({
    // some basic styles to make the items look a bit nicer
    userSelect: "none",

    // change background colour if dragging
    background: isDragging ? '#5c636f' : 'white',
    color: isDragging ? 'white' : '#5c636f',
    // padding: isDragging ? '0%' : '2%',
    paddingLeft: '2%',
    margin: '0%',
    fontWeight: '500',
    fontSize: '17px',
    borderBottom: '0.5px solid gray',
    width: '200px',

    // styles we need to apply on draggables
    ...draggableStyle
  });

  return (
    <div style={{ width: '100%', display: 'flex' }}>
      <Droppable droppableId="Marvel_drop_area"  >
        {(provided, snapshot) => (
          <div
            {...provided.droppableProps}
            ref={provided.innerRef}
            style={getListStyle(snapshot.isDraggingOver)}
          >
            <ul style={{ listStyleType: 'none', textAlign: 'left', padding: '0%', width: '100%' }} >
              <h6 style={{ paddingLeft: '2%' }}>Marvel SuperHeroes</h6>
              {Marvel.map((data, index) => (
                <Draggable key={data} draggableId={`${data}${index}`} index={index}>
                  {(provided, snapshot) => (
                    <li
                      key={index}
                      ref={provided.innerRef}
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
                      style={getItemStyle(
                        snapshot.isDragging,
                        provided.draggableProps.style
                      )}
                    >
                      {data}
                    </li>
                  )}

                </Draggable>
              ))}
            </ul>
            {provided.placeholder}
          </div>
        )}
      </Droppable>
      <Droppable droppableId="DC_drop_area"  >
        {(provided, snapshot) => (
          <div
            {...provided.droppableProps}
            ref={provided.innerRef}
            style={getListStyle(snapshot.isDraggingOver)}
          >
            <ul style={{ listStyleType: 'none', textAlign: 'left', padding: '0%', width: '100%' }} >
              <h6 style={{ paddingLeft: '2%' }}>DC SuperHeroes</h6>
              {DC.map((data, index) => (
                <Draggable key={data} draggableId={`${data}${index}`} index={index}>
                  {(provided, snapshot) => (
                    <li
                      key={index}
                      ref={provided.innerRef}
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
                      style={getItemStyle(
                        snapshot.isDragging,
                        provided.draggableProps.style
                      )}
                    >
                      {data}
                    </li>
                  )}
                </Draggable>
              ))}
            </ul>
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </div>
  )
}
