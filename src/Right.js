import React from 'react';
import "./css/Right.css";
import AddCircleOutlinedIcon from "@material-ui/icons/AddCircleOutlined";

function Right() {
    return (
        <div className="right">
            <div className="right__container">
                <form className="right__form" action="">
                    <p className="form__itemTitle">task name</p>
                    <div className="form__itemBox">
                        <input className="form__input" type="text" />
                    </div>
                    <p className="form__itemTitle">task details</p>
                    <div className="form__itemBox">
                        <textarea className="form__textarea" name=""></textarea>
                    </div>
                    <p className="form__itemTitle">end datetime</p>
                    <div className="form__itemBox">
                        <input className="form__input" type="text" />
                    </div>
                    <div className="form__registerButton">
                        <AddCircleOutlinedIcon />
                        register
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Right;
