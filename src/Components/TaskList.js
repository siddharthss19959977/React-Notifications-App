import React from 'react'
import { useState } from 'react';
import TaskCard from './TaskCard';
import { Notifications } from './Notifications';

function TaskList() {

    const[tasks,setTasks]=useState([
        {id:1,name:"Cadburry"},
        {id:2,name:"Kitkat"},
        {id:3,name:"Gems"},
        {id:4,name:"Snickers"},
        {id:5,name:"Skittles"}
    ]);

    const[show,setShow]=useState(true);

    function Delete(id)
    {
        setTasks(tasks.filter(task=>task.id!==id));
    }

  return (
    <div>
        <ul>
            <button onClick={() => setShow(!show)} className='trigger'>Toggle</button>
            {show && tasks.map((task)=>(
                    <TaskCard key={task.id} task={task} Delete={Delete}/>
                ))
            }
        </ul>

        <Notifications result="success">
            <p className="title">Success notification</p>
            <p className="description">Success notification in green color</p>
        </Notifications>

        <Notifications result="warning">
            <p className="title">Warning notifications</p>
            <p className="description">Warning notification in orange color</p>
        </Notifications>

        <Notifications result="alert">
            <p className="title">Alert notifications</p>
            <p className="description">Alert notifications are in red color</p>
        </Notifications>
    </div>
  )
}

export default TaskList;
