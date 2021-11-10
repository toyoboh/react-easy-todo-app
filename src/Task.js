import React from 'react'
import "./css/Task.css";
import CheckCircleIcon from "@material-ui/icons/CheckCircle";
import DeleteForeverIcon from "@material-ui/icons/DeleteForever";

function Task({ task_id, user_id, task_name, task_details, end_date, is_end, is_delete, taskDelete }) {

    return(
        <>
        {true && ( 
            <div className="task">
                <div className="task__header">
                    <div className="task__buttons">
                        <div className="end">
                            <CheckCircleIcon />
                            完了
                        </div>
                        <div className="delete"
                             onClick={ () => taskDelete(task_id) }
                        >
                            <DeleteForeverIcon />
                            削除
                        </div>
                    </div>
                    <div className="task__endDate">
                        締め切り日：
                        <span className="date">{ end_date }</span>
                    </div>
                </div>
                <div className="task__item">
                    <p className="task__itemTitle">タスク名</p>
                    <p className="task__itemContent">{ task_name }</p>
                </div>
                <div className="task__item">
                    <p className="task__itemTitle">タスク詳細</p>
                    <p className="task__itemContent">{ task_details }</p>
                </div>

                {/* <p>{ task_id }</p>
                <p>{ user_id }</p>
                <p>{ is_end }</p>
                <p>{ is_delete }</p> */}
            </div>
        )}
        </>
    )
}

export default Task
