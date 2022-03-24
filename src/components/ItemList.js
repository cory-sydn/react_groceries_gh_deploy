import React from 'react'
import ListItem from './ListItem';

const ItemList = ({items, handleCheck, handleDelete, fontColor}) => {
  return (

    
    <div className="itemList__shadow-inset">
      <ul>
          {items.map((item) => (
              <ListItem
                  key={item.id}
                  item={item}
                  handleCheck={handleCheck}
                  handleDelete={handleDelete}
                  fontColor={fontColor}
              />
          ))}
      </ul>
    </div>
      
  );
};

export default ItemList