import {ChangeEvent, DetailedHTMLProps, InputHTMLAttributes, KeyboardEventHandler} from "react";
import s from './SuperInputText.module.css'

type DefaultInputPropsType = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>
type SuperInputTextPropsType = DefaultInputPropsType & { // и + ещё пропсы которых нет в стандартном инпуте
    onChangeText?: (value: string) => void
    onEnter?: () => void
    error?: string
    spanClassName?: string
}

export const SuperInputText = ({type,onChange,onChangeText,
                                   onKeyPress,onEnter,
                                   error,className,
                                   spanClassName,...props}:SuperInputTextPropsType) =>{

    const onChangeCallback = (e: ChangeEvent<HTMLInputElement>) => {

        onChange && onChange(e)

        onChangeText && onChangeText(e.currentTarget.value)
    }
    const onKeyPressCallback = (e: KeyboardEventHandler<HTMLInputElement>) => {
        // onKeyPress && onKeyPress(e);
        //
        // onEnter && e.key === 'Enter' && onEnter()
    }
    const finalSpanClassName = `${s.error} ${spanClassName ? spanClassName : ''}`
    const finalInputClassName = `${s.input} ${error ? s.errorInput:s.superInput}`

    return(
        <>

            <input
                type={'text'}
                onChange={onChangeCallback}
                //onKeyPress={onKeyPressCallback}
                className={finalInputClassName}
                {...props}
            />
            {error && <span className={finalSpanClassName}>{error}</span>}
        </>
    )
}