import React, { useState } from 'react'
import TodoHome from './TodoHome/TodoHome';

function MainTodo  (){
    const [todo,setTodo] = useState([{
        id:1,
        status: true,
        name: "Review and approve the project proposal",
        type: "work"
      },
      {
        id:2,
        status: true,
        name: "Submit the report to the manager",
        type:"work"
      },
      {
        id:3,
        status: true,
        name: "Complete the presentation slides for the upcoming meeting",
        type:"work"
      },
      {
        id:4,
        status: true,
        name: "Follow up with the client regarding the project status",
        type:"work"
      },
      {
        id:5,
        status: true,
        name: "Go for a run around the park",
        type:"hobby"
      },
      {
        id:6,
        status: true,
        name: "Start reading a new book",
        type:"hobby"
      },
      {
        id:7,
        status: true,
        name: "Work on the knitting project for an hour",
        type:"hobby"
      },
      {
        id:8,
        status: true,
        name: "Review the notes for the upcoming exam",
        type: "study"
      },
      {
        id:9,
        status: true,
        name: "Practice writing essays for the English class",
        type: "study"
      },
      {
        id:10,
        status: true,
        name: "Buy groceries for the week",
        type: "buy"
      },
      {
        id:11,
        status: true,
        name: "Order a birthday gift for a friend",
        type: "buy"
      },
      {
        id:12,
        status: true,
        name: "Renew the annual subscription for the magazine",
        type: "buy"
      },
      {
        id:13,
        status: true,
        name: "Schedule a dentist appointment",
        type: "other"
      },
      {
        id:14,
        status: true,
        name: "Renew the driver's license",
        type: "other"
      },
      {
        id:15,
        status: true,
        name: "Book a flight ticket for the upcoming trip",
        type: "other"
      },])
    
      const [search, setSearch] = useState(
        {
          flag:false,
          text: "112365131233121"
        }
      );
      
  return (
    <TodoHome todo={todo} setTodo={setTodo} search={search} setSearch={setSearch}/>
  )
}

export default MainTodo