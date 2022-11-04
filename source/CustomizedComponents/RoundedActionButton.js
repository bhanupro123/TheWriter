import React, { useEffect, useRef } from 'react';
import { TouchableOpacity,View,Text } from 'react-native';
import ColorConstants from '../resources/Constants/ColorConstants';
import ValueConstants from '../resources/Constants/ValueConstants';
import PressableButtonWithDelay from './PressableButtonWithDelay';

const RoundedActionButton = ({textValue="Text",color="red",...props}) => {

    useEffect(()=>{ 
    }) 
    return (
        
          <PressableButtonWithDelay {...props} style={{marginVertical:"3%",flexDirection:'row'}} >
          <View style={{width:"60%",height:40,backgroundColor:color,alignItems:'center',justifyContent:'center',borderRadius:30}}>
             <Text style={{color:ColorConstants.white}}>{textValue}</Text>
          </View>
          </PressableButtonWithDelay>
    )
};
export default RoundedActionButton;