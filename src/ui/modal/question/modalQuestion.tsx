import React, {CSSProperties, ReactNode} from 'react';
import Modal from "../modal";
import {Button} from "antd";

interface IModalQuestion {
    show: boolean;

    setTrue?: () => void;
    setFalse?: () => void;
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

const ModalQuestion: React.FC<IModalQuestion> = (
    {
        setTrue,
        setFalse,
        buttonStyles,
        trueStyles,
        falseStyles,
        buttonTrue = 'Yes',
        buttonFalse = 'No',

        enableBackground,
        backgroundStyle,
        backgroundOnClick = () => {},

        width,
        height,
        modalStyle,
        modalOnClick = () => {},

        show,
        children,
    }
) => {

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
                    margin:'20px',
                    ...buttonStyles,
                }}
            >
                <Button onClick={setTrue}>{buttonTrue}</Button>
                <Button onClick={setFalse}>{buttonFalse}</Button>
            </div>
        </Modal>
    );
};

export default ModalQuestion;