// src/components/ItemList.tsx
import React from 'react';
import { Item } from '../types';

interface ItemListProps {
  items: Item[];
  deleteItem: (id: number) => void;
}

const ItemList: React.FC<ItemListProps> = ({ items, deleteItem }) => {
  return (
    <div>
      <ul>
        {items.map(item => (
          <li key={item.id}>
            {item.name} - {item.description}
            <button onClick={() => deleteItem(item.id)}>Deletar</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ItemList;
