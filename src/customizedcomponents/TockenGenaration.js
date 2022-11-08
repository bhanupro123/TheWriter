import React, { useEffect, useImperativeHandle, useRef, useState, forwardRef } from 'react';
import { TouchableOpacity, View, Text, Button, ScrollView, Dimensions, Modal } from 'react-native';
import ColorConstants from '../resources/constants/ColorConstants';
let array = Array.from(Array(50).keys())
export default TockenGenaration = forwardRef(({parentQuestion="",question="",onSelectedArray, allItems = [], preSelection = [], passedStyle = {}, ...props }, ref) => {

    const [localSelections, setlocalSelections] = useState([...preSelection])
    const tempArray=useRef([])
    function generateRandomColor() {
        let maxVal = 0xFFFFFF; // 16777215.
        let randomNumber = Math.random() * maxVal;
        randomNumber = Math.floor(randomNumber);
        randomNumber = randomNumber.toString(16);
        let randColor = randomNumber.padStart(6, 0);

        return `#${randColor.toUpperCase()}`
    }

   
    return (<View style={
        {
            flexDirection: 'row',
            flexWrap: 'wrap',
            flexGrow: 0,
            marginHorizontal: 5,
            ...passedStyle,
            alignallItems: 'center',
            alignContent: 'center',
        }
    }>
        {allItems.map((item, index, key) => {
            return <TouchableOpacity activeOpacity={1} onPress={async() => { 
                
                    localSelections.includes(item)?localSelections.splice(localSelections.indexOf(item), 1) :localSelections.push(item) 
                 
                    setlocalSelections([...localSelections]) 

                    props.onSelection(localSelections,question,parentQuestion)
            }}
                index={index}
                key={key + index+item}
                style={{
                    backgroundColor: localSelections.includes(item) ? "green" : "blue",
                    margin: 5,
                    alignallItems: 'center',
                    justifyContent: 'center',
                    borderRadius: 5,
                    alignSelf: 'center',
                    padding: 10
                }}>
                <Text style={{ color: 'white',paddingHorizontal:5 }}>{item}</Text>
            </TouchableOpacity>
        })}
    </View>

    )
});
