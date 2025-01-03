import React from 'react';

const Header = ({ inputValue, setInputValue, addTodo }) => {
  return (
    <header>
      <h1>To-Do List</h1>
      <input 
        type="text" 
        value={inputValue} 
        onChange={(e) => setInputValue(e.target.value)} 
        placeholder="Add a new task" 
      />
      <button onClick={addTodo}>Add</button>
    </header>
  );
};

export default Header;