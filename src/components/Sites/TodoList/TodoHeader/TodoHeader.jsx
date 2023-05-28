import React from 'react'
import s from './TodoHeader.module.css'
import luna from "../../../../icons/luna.png";
import TodoForm from '../TodoForm/TodoForm';
import { Link } from 'react-router-dom';
const TodoHeader = (props) => {
  return (
    <div className={s.head}>
     
      <div className={s.textHead}>
        <p className={s.textHead} >Todo List</p>
        <Link className={s.td_ret}  to = {`/`}>Return to Blog</Link>
        
      </div>
      <TodoForm
        todo={props.todo}
        setTodo={props.setTodo}
        search={props.search}
        setSearch={props.setSearch}
      />
    </div>
  )
}

export default TodoHeader