import {SuperButton} from "../../../n1-main/m1-ui/components/c1-SuperButton/SuperButton";
import {SuperCheckbox} from "../../../n1-main/m1-ui/components/c2-SuperCheckbox/SuperCheckbox";
import {SuperInputText} from "../../../n1-main/m1-ui/components/c3-SuperInput/SuperInputText";

export const ShowAllComponents = () => {
    return (
        <div>
            <div>
                <SuperButton value={'default'}/>
                <SuperButton value={'red'} red/>
                <SuperButton value={'disabled'} disabled/>
            </div>
            <div>
                <SuperCheckbox>some text</SuperCheckbox>
                <SuperCheckbox/>
            </div>
            <div>
                <SuperInputText value = {'some text'}/>
            </div>
        </div>
    )
}