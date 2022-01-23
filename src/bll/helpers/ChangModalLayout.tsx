import {ModalWindowType} from "../../ui/packs/packs";
import React from "react";

export const changModalLayout = (modalName: ModalWindowType,
                                 text: string,
                                 setText: (text: string) => void) => {
    if (modalName === 'create' || modalName ==='edit') {
        return (
            <div>
                <input
                    value={text}
                    onChange={e => setText(e.currentTarget.value)}
                />
            </div>)
    } else {
        return null
    }
}

