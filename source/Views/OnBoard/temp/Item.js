import React, { useEffect, useRef } from 'react';

import {
    SafeAreaView,
    ScrollView,
    StatusBar,
    StyleSheet,
    Text,
    useColorScheme,
    View, Image, TouchableOpacity, Dimensions
} from 'react-native';
import GlobalModal from '../../../customizedcomponents/GlobalModal';


const Item = ({ index, onPressed }) => {
    const containerRef = React.useRef(null);
    function generateRandomColor() {
        let maxVal = 0xFFFFFF; // 16777215.
        let randomNumber = Math.random() * maxVal;
        randomNumber = Math.floor(randomNumber);
        randomNumber = randomNumber.toString(16);
        let randColor = randomNumber.padStart(6, 0);

        return `#${randColor.toUpperCase()}`
    }


    return (<TouchableOpacity onPress={() => {
        containerRef.current.measure((x, y, width, height, pageX, pageY) => {
            onPressed(width, height, pageX, pageY)
        }
        )
    }} ref={(ref) => {
        containerRef.current = ref
    }} activeOpacity={0.5} key={index} style={{ height: 100, borderRadius: 10, backgroundColor: generateRandomColor(), margin: 5, alignItems: 'center', justifyContent: 'center' }}>
        <Text style={{ color: "white", width: 30, height: 30, borderRadius: 30, backgroundColor: 'black', textAlign: 'center', textAlignVertical: 'center' }}>{index}</Text>
    </TouchableOpacity>

    );
};



export default Item;