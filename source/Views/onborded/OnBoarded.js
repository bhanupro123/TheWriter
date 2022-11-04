import React, {useEffect, useState} from 'react';
import {View, Image, Dimensions, Text} from 'react-native';
import LogoBackground from '../onboard/LogoBackground';
import ImageWrapper from '../../resources/images/ImageWrapper';
import ColorConstants from '../../resources/constants/ColorConstants';
import RectangularActionIconButton from '../../customizedcomponents/RectangularActionButtonWithIcon';
import StringConstants from '../../resources/constants/StringConstants';
import ScreenNames from '../../resources/constants/ScreenNames';

const OnBoarded = ({navigation}) => {
  return (
    <LogoBackground>
        <View style={{alignItems: 'center',flex:1, justifyContent: 'space-evenly'}}>
          <Image
            resizeMode="contain"
            source={ImageWrapper.register}
            style={{width: '70%'}}
          />
          <View style={{marginHorizontal:25,marginTop:-50}}>
          <RectangularActionIconButton
            presshandler={() => {
              navigation.navigate(ScreenNames.RegisterNow);
            }}
            textValue={StringConstants.RegisterNow}
            color={ColorConstants.baseBlueColor}
            borderRadius={5}
            width={'100%'}
            height={50}>
          </RectangularActionIconButton>  
             <Text style={{color: ColorConstants.baseAsh, textDecorationLine: 'underline',marginTop:20}}>{'> ' + ScreenNames.KnowMore}</Text>   
      </View>  
      </View>
      
    </LogoBackground>
  );
};
export default OnBoarded;
