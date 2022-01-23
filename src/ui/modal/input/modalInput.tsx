import React, {CSSProperties, ReactNode, useState} from 'react';
import Modal from "../modal";
import {Button} from "antd";

export type IInputData = [string, (value: string) => void];

interface IModalInput {
    show: boolean;
    setTrue: () => void;
    setFalse: () => void;


    text?: string;
    setText?: (text: string) => void;

    inputContainerStyles?: CSSProperties;
    inputStyles?: CSSProperties;
    buttonStyles?: CSSProperties;
    trueStyles?: CSSProperties;
    falseStyles?: CSSProperties;
    buttonTrue?: ReactNode;
    buttonFalse?: ReactNode;

    enableBackground?: boolean;
    backgroundStyle?: CSSProperties;
    backgroundOnClick?: () => void;

    width: number;
    height: number;
    modalStyle?: CSSProperties;
    modalOnClick?: () => void;
}

const ModalInput: React.FC<IModalInput> = (
    {
        setTrue,
        setFalse,
        text,
        setText = (text: string) => {
        },

        inputContainerStyles,
        inputStyles,
        trueStyles,
        falseStyles,
        buttonTrue = 'Save',
        buttonFalse = 'Cancel',

        enableBackground,
        backgroundStyle,
        backgroundOnClick = () => {
        },

        width,
        height,
        modalStyle,
        modalOnClick = () => {
        },

        show,
        children,
    }
) => {

    // const layout = (param:string) => {
    //     if(param === 'question '){
    //         return <div>123</div>
    //     } else{
    //         return <h1>14124</h1>
    //     }
    // }
    //
    // layout('question') === <div>123</div>


    return (
        <Modal
            enableBackground={enableBackground}
            backgroundOnClick={() => {
               if(text){
                   setText(text);
               }
                backgroundOnClick()
            }}
            backgroundStyle={backgroundStyle}

            width={width}
            height={height}
            modalOnClick={modalOnClick}
            modalStyle={modalStyle}

            show={show}
        >
            {children ? children : 'question Modal'}
            <div
                style={{
                    width: '100%',
                    display: 'flex',
                    flexFlow: 'column',
                    alignItems: 'center',
                    justifyContent: 'space-around',
                    margin:'20px',
                    ...inputContainerStyles,
                }}
            >
                {text !== undefined && (
                    <input
                        value={text}
                        style={{...inputStyles}}
                        onChange={e => setText(e.currentTarget.value)}
                    />
                )}


            </div>
            <div>
            <Button onClick={setTrue} style={{...trueStyles}}>{buttonTrue}</Button>
            <Button onClick={setFalse} style={{...falseStyles}}>{buttonFalse}</Button>
            </div>
        </Modal>
    );
};

export default ModalInput;