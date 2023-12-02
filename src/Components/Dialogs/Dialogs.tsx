import React from 'react';
import s from './Dialogs.module.css'
import {NavLink} from "react-router-dom";

const Dialogs = () => {
    return (

            <div className={s.dialogs}>

                <div className={s.dialogItem}>
                    <div className={`${s.dialog} ${s.active}`}>
                        <NavLink to={'/dialogs/1'}>Ivan</NavLink>
                    </div>
                    <div className={s.dialog}>
                        <NavLink to={'/dialogs/2'}>Alesya</NavLink>
                    </div>
                    <div className={s.dialog}>
                        <NavLink to={'/dialogs/3'}>Mashunya</NavLink>
                    </div>
                    <div className={s.dialog}>
                        <NavLink to={'/dialogs/4'}>Kosty</NavLink>
                    </div>
                    <div className={s.dialog}>
                        <NavLink to={'/dialogs/5'}>Valera</NavLink>
                    </div>
                </div>
                <div className={s.messages}>
                    <div className={s.message}>Hello</div>
                    <div className={s.message}>Its me</div>
                    <div className={s.message}>Its snowing</div>
                </div>
            </div>

    );
};

export default Dialogs;