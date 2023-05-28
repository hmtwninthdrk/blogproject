import React, { useState } from 'react'
import TodoHeader from '../TodoHeader/TodoHeader';
import ListTodo from '../ListTodo/ListTodo';


const TodoHome = ({ todo, setTodo, search, setSearch }) => {
    
  
    return (
      <div className="main">
        <TodoHeader
          todo={todo}
          setTodo={setTodo}
          search={search}
          setSearch={setSearch}
        />
        <div className="container">
          <ListTodo
            todo={todo}
            setTodo={setTodo}
            search={search}
            setSearch={setSearch}
          />
          
  
          
        </div>
      </div>
    );
}

export default TodoHome