import {dataHandler} from "../../bll/helpers/dataHandler";
import {useSelector} from "react-redux";
import {RootStoreType} from "../../bll/store";

type PackType = {
    id:string
    name: string
    cards: number
    lastUpdated: string
    createdBy: string
    packUserId:string
}
export const Pack = (props: PackType) => {
    const userId = useSelector<RootStoreType,string>(state => state.Profile._id)
    const lastUpdated = dataHandler(props.lastUpdated)
    return (
        <div>
            <span> {props.name}</span>
            <span> {props.cards}</span>
            <span> {lastUpdated}</span>
            <span> {props.createdBy}</span>
            {userId===props.packUserId && <button>Delete</button>}
            {userId===props.packUserId && <button>Edit</button>}
            <button>Learn</button>
        </div>
    )

}