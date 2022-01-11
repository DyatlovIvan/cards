import {SuperInputText} from "../../../n1-main/m1-ui/components/c3-SuperInput/SuperInputText";
import {SuperButton} from "../../../n1-main/m1-ui/components/c1-SuperButton/SuperButton";

export const Register = () =>{
    return(
        <>
            <h1>It Incubator</h1>
            <h2>Sign in</h2>
            <form>
                <SuperInputText/>
                <SuperInputText/>
                <SuperInputText/>
                <SuperButton/>
                <SuperButton/>
            </form>

        </>
    )
}