import {ChangeEvent, DetailedHTMLProps, InputHTMLAttributes} from "react";
import s from './SuperCheckbox.module.css'

type DefaultInputPropsType = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>
type SuperCheckboxPropsType = DefaultInputPropsType & {
    onChangeChecked?: (checked: boolean) => void
    spanClassName?: string
}

export const SuperCheckbox = ({
                                  type, onChange,
                                  onChangeChecked, className,
                                  spanClassName, checked,
                                  children,...props
                              }: SuperCheckboxPropsType) => {

    const finalInputClassName = `${s.checkbox} ${className ? className : ''}`
    const onChangeCallback = (e: ChangeEvent<HTMLInputElement>)=>{
        onChange && onChange(e)
        onChangeChecked && onChangeChecked(e.currentTarget.checked)
    }
    return (
        <label>
            <input
                type={'checkbox'}
                checked = {checked}
                onChange={onChangeCallback}
                className={finalInputClassName}
                {...props}
            />
            {children && <span className={s.spanClassName}>{children}</span>}
        </label> // благодаря label нажатие на спан передастся в инпут
    )
}