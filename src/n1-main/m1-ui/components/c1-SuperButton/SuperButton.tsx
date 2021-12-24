import {ButtonHTMLAttributes, DetailedHTMLProps} from "react";
import s from './SuperButton.module.css'

type DefaultButtonPropsType = DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>
type SuperButtonPropsType = DefaultButtonPropsType & {
    red?: boolean
}

export const SuperButton = ({red, className, ...props}: SuperButtonPropsType) => {
    const finalClassName = `${s.button} ${red ? s.red : s.default} ${className}`
    return (
        <button className={finalClassName}
                {...props}
        />
    )
}