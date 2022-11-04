import React, { useEffect, useRef } from 'react';
import { TouchableOpacity,View,Text } from 'react-native';
import ColorConstants from '../resources/constants/ColorConstants';
import ValueConstants from '../resources/constants/ValueConstants';
import PressableButtonWithDelay from './PressableButtonWithDelay';

const RoundedActionButton = ({textValue="Text",color="red",borderRadius=30,width='60%',height=40,...props}) => {

    useEffect(()=>{ 
    }) 
    return (
        
          <PressableButtonWithDelay {...props} style={{marginVertical:"3%",flexDirection:'row'}} >
          <View style={{width:width,height:height,backgroundColor:color,alignItems:'center',justifyContent:'center',borderRadius:borderRadius}}>
             <Text style={{color:ColorConstants.white}}>{textValue}</Text>
          </View>
          </PressableButtonWithDelay>
    )
};
export default RoundedActionButton;