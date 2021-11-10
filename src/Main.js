import React, { useState, useEffect } from 'react'
import "./css/Main.css";
import Task from "./Task";

function Main() {

    const [tasks, setTasks] = useState([]);

    const taskDelete = (task_id) => {
        console.log(task_id);
        const tasksCount = tasks.length;
        for(let i = 0; i < tasksCount; i++ ) {
            if(tasks[i].task_id === task_id) {
                const tmpTasks = tasks.splice(i);
                console.log(tmpTasks);
                console.log(i);
                setTasks(tmpTasks);
                break;
            }
        }
    }

    useEffect(() => {
        const initialTasks = [
            {
                task_id: 1,
                user_id: "sho",
                task_name: "test check",
                task_details: "button check",
                end_date: "2021-11-10",
                is_end: false,
                is_delete: false
            },
            {
                task_id: 2,
                user_id: "sho",
                task_name: "crete login page",
                task_details: "all",
                end_date: "2021-11-11",
                is_end: false,
                is_delete: false
            }
        ]
        const initialTasksCount = initialTasks.length;
        for(let i = 0; i < initialTasksCount; i++) {
            const tmpDate = new Date(initialTasks[i].end_date);
            const year    = tmpDate.getFullYear();
            const month   = tmpDate.getMonth();
            const day     = tmpDate.getDate();
            initialTasks[i].end_date = `${year}年${month}月${day}日`;
        }
        setTasks(initialTasks);
    }, [])

    return (
        <div className="main">
            {
                tasks.map( task => (
                    <Task
                        task_id={ task.task_id }
                        user_id={ task.user_id }
                        task_name={ task.task_name }
                        task_details={ task.task_details }
                        end_date={ task.end_date }
                        is_end={ task.is_enf }
                        is_delete={ task.is_delete }
                        key={ task.task_id }
                        taskDelete={ taskDelete }
                    />
                ))
            }
        </div>
    )
}

export default Main
