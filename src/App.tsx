// src/App.tsx
import React, { useState } from 'react';
import ItemForm from './components/ItemForm';
import Login from './components/Login';
import { Item } from './types';
import './App.css';

const App: React.FC = () => {
  const [items, setItems] = useState<Item[]>([]);
  const [currentItem, setCurrentItem] = useState<Item | null>(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const addItem = (item: Item) => {
    setItems([...items, { ...item, id: items.length + 1 }]);
  };

  const updateItem = (updatedItem: Item) => {
    setItems(items.map(item => (item.id === updatedItem.id ? updatedItem : item)));
  };

  const deleteItem = (id: number) => {
    setItems(items.filter(item => item.id !== id));
  };

  const editItem = (item: Item) => {
    setCurrentItem(item);
  };

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  if (!isLoggedIn) {
    return <Login onLogin={handleLogin} />;
  }

  return (
    <div className="container">
      <div className="form-container">
        <h2>Adicionar Item</h2>
        <ItemForm addItem={addItem} updateItem={updateItem} currentItem={currentItem} />
      </div>
      <div className="list-container">
        <h2>Lista de Itens</h2>
        {items.length === 0 ? (
          <p>Adicione um item</p>
        ) : (
          <ul>
            {items.map(item => (
              <li key={item.id}>
                <div>
                  <strong>Nome:</strong> {item.name}
                </div>
                <div>
                  <strong>Descrição:</strong> {item.description}
                </div>
                <div>
                  <strong>Horário:</strong> {item.time}
                </div>
                <div className="button-group">
                  <button className="edit-button" onClick={() => editItem(item)}>Editar</button>
                  <button onClick={() => deleteItem(item.id)}>Deletar</button>
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default App;
