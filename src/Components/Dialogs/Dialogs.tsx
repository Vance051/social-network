import React from 'react';
import s from './Dialogs.module.css'

const Dialogs = () => {
    return (

            <div className={s.dialogs}>

                <div className={s.dialogItem}>
                    <div className={`${s.dialog} ${s.active}`}>Ivan</div>
                    <div className={s.dialog}>Alesya</div>
                    <div className={s.dialog}>Mashunya</div>
                    <div className={s.dialog}>Kosty</div>
                    <div className={s.dialog}>Valera</div>
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