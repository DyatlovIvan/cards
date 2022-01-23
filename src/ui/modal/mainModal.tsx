import React, {CSSProperties, ReactNode} from 'react';
import Modal from "./modal";
import {Button} from "antd";
import {ModalWindowType} from "../packs/packs";
import {changModalLayout} from "../../bll/helpers/ChangModalLayout";

interface IModalQuestion {
    show: boolean;
    modalName: ModalWindowType
    setTrue?: () => void;
    setFalse?: () => void;

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

const MainModal: React.FC<IModalQuestion> = (
    {
        setTrue,
        setFalse,
        text,
        setText = (text: string) => {
        },
        // inputContainerStyles,
        // inputStyles,
        buttonStyles,
        trueStyles,
        falseStyles,
        buttonTrue = 'Yes',
        buttonFalse = 'No',

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
        modalName,
        children,
    }
) => {
    if (modalName === 'create') {
        buttonTrue = 'Create'
        buttonFalse = 'Cancel'
    }

    return (
        <Modal
            enableBackground={enableBackground}
            backgroundOnClick={backgroundOnClick}
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
                    flexFlow: 'row',
                    alignItems: 'center',
                    justifyContent: 'space-around',
                    margin: '20px',
                }}
            >
                {typeof text !== 'undefined' && changModalLayout(modalName, text, setText)}

                <Button onClick={setTrue} style={{...trueStyles}}>{buttonTrue}</Button>
                <Button onClick={setFalse} style={{...falseStyles}}>{buttonFalse}</Button>
            </div>
        </Modal>
    );
};

export default MainModal;