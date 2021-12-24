import {SuperButton} from "../../n1-main/m1-ui/components/c1-SuperButton/SuperButton";
import {SuperCheckbox} from "../../n1-main/m1-ui/components/c2-SuperCheckbox/SuperCheckbox";

export const ShowAllComponents = () => {
    return (
        <div>
            <div>
                <SuperButton>default</SuperButton>
                <SuperButton red>red</SuperButton>
                <SuperButton disabled>disabled</SuperButton>
            </div>
            <div>
                <SuperCheckbox>
                    some text
                </SuperCheckbox>
                <SuperCheckbox/>
            </div>
        </div>
    )
}