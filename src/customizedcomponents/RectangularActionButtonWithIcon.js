import React, { useEffect, useRef } from 'react';
import { TouchableOpacity,View,Text ,Image} from 'react-native';
import ColorConstants from '../resources/constants/ColorConstants';
import ValueConstants from '../resources/constants/ValueConstants';
import PressableButtonWithDelay from './PressableButtonWithDelay';
import ImageWrapper from "../resources/images/ImageWrapper";
import ScreenNames from '../resources/constants/ScreenNames';

const RectangularActionIconButton = ({textValue="Text",color="red",borderRadius=5,width='80%',height=50,...props}) => {

    useEffect(()=>{ 
    }) 
    return (
        
          <PressableButtonWithDelay {...props} >
          <View style={{width:width,height:height,backgroundColor:color,borderRadius:borderRadius,flexDirection:'row',alignItems:'center'}}>
             <Text style={{color:ColorConstants.white,flex:1,paddingLeft:15}}>{textValue}</Text>
             <View style={{backgroundColor:'#FFFFFF',borderRadius:999,width:25,height:25,justifyContent:'center',alignItems:'center',marginRight:10}}>
                 <Image resizeMode="contain" source={ImageWrapper.arrow_right} />
             </View>
          </View>
          </PressableButtonWithDelay>
    )
};
export default RectangularActionIconButton;