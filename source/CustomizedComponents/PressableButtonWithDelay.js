import React, { useRef } from 'react';
import { TouchableOpacity } from 'react-native';
import ValueConstants from '../resources/Constants/ValueConstants';

const PressableButtonWithDelay = ({ presshandler, style,children }) => {

    const actived = useRef(true);

    return (
        <TouchableOpacity
            style={style ? style : {flexDirection:'row'}}
            onPress={() => {
                if (actived.current && presshandler) {
                    actived.current = false
                    presshandler()
                    setTimeout(() => {
                        actived.current = true
                    }, ValueConstants.DELAY_ONPRESS)
                }
            }}
        >
        {children}
        </TouchableOpacity>
    )
};
export default PressableButtonWithDelay;