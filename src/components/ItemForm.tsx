// src/components/ItemForm.tsx
import React, { useState, useEffect } from 'react';
import { Item } from '../types';

interface ItemFormProps {
  addItem: (item: Item) => void;
  updateItem: (item: Item) => void;
  currentItem: Item | null;
}

const ItemForm: React.FC<ItemFormProps> = ({ addItem, updateItem, currentItem }) => {
  const [item, setItem] = useState<Item>({ id: 0, name: '', description: '', time: '' });

  useEffect(() => {
    if (currentItem) {
      setItem(currentItem);
    }
  }, [currentItem]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setItem({ ...item, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (item.id === 0) {
      addItem(item);
    } else {
      updateItem(item);
    }
    setItem({ id: 0, name: '', description: '', time: '' });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="name">Nome</label>
        <input
          type="text"
          id="name"
          name="name"
          value={item.name}
          onChange={handleChange}
          maxLength={14}
          required
        />
      </div>
      <div>
        <label htmlFor="description">Descrição</label>
        <input
          type="text"
          id="description"
          name="description"
          value={item.description}
          onChange={handleChange}
          maxLength={14}
          required
        />
      </div>
      <div>
        <label htmlFor="time">Horário</label>
        <input
          type="time"
          id="time"
          name="time"
          value={item.time}
          onChange={handleChange}
          required
        />
      </div>
      <button type="submit">Enviar</button>
    </form>
  );
};

export default ItemForm;
