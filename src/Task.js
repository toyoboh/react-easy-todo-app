import React from 'react'
import "./css/Task.css";

function Task({ task_id, user_id, task_name, task_details, end_date, is_end, is_delete }) {
    return(
        <>
        {true && ( 
            <div className="task">
                <p>{ task_id }</p>
                <p>{ user_id }</p>
                <p>{ task_name }</p>
                <p>{ task_details }</p>
                <p>{ end_date }</p>
                <p>{ is_end }</p>
                <p>{ is_delete }</p>
            </div>
        )}
        </>
    )
}

export default Task
