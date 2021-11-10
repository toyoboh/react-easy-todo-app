import React from 'react';
import "./css/Right.css";
import CreateIcon from "@material-ui/icons/Create";

function Right() {
    return (
        <div className="right">
            <div className="right__wrapper">
                <div className="right__container">
                    <form className="right__form" action="">
                        <p className="form__itemTitle">タスク名</p>
                        <div className="form__itemBox">
                            <input className="form__input" type="text" />
                        </div>
                        <p className="form__itemTitle">詳細</p>
                        <div className="form__itemBox">
                            <textarea className="form__textarea" name=""></textarea>
                        </div>
                        <p className="form__itemTitle">完了予定日</p>
                        <div className="form__itemBox">
                            <input className="form__input" type="text" />
                        </div>
                        <div className="form__registerButton">
                            <CreateIcon />
                            登録する
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Right;
