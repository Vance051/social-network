import React, {FC} from 'react';
import s from './Dialogs.module.css'
import {NavLink} from "react-router-dom";

type PropsDialogItemType = {
    name: string
    id: number
}

type PropsMessageType = {
    message: string
}

const DialogItem: FC<PropsDialogItemType> = (props) => {
    const path = `/dialogs/1${props.id}`
    return (
        <div className={`${s.dialog} ${s.active}`}>
            <NavLink to={path}>{props.name}</NavLink>
        </div>
    )
}
const Message: FC<PropsMessageType> = (props) => {
    return (<div className={s.message}>{props.message}</div>
    )
}
const Dialogs = () => {
    return (

        <div className={s.dialogs}>

            <div className={s.dialogItem}>
                <DialogItem name={'Ivan'} id={1}/>
                <DialogItem name={'Alesya'} id={1}/>
                <DialogItem name={'Mashunya'} id={1}/>
                <DialogItem name={'Kosty'} id={1}/>
                <DialogItem name={'Valera'} id={1}/>

            </div>
            <div className={s.messages}>
                <Message message={'Hello'}/>
                <Message message={'How are u'}/>
                <Message message={'Let its snow..'}/>

            </div>
        </div>

    );
};

export default Dialogs;