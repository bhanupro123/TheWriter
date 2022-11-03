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
import ColorConstants from '../../../resources/constants/ColorConstants';
import ShadowItemWithPressability from './items/ShadowItemWithPressability';


const KnownLanguages = ({ navigation }) => {
    const modalRef = useRef(null)

    return (<View style={{ flex: 1, backgroundColor: ColorConstants.baseColor }}>


        <View style={{ backgroundColor: ColorConstants.white, paddingVertical: 20, margin: 20, borderRadius: 20 }}>
            <ShadowItemWithPressability onPressed={(width, height, pageX, pageY)=>{
                  
                  if(modalRef.current)
                  {
                    modalRef.current.refresh(width, height, pageX, pageY)
                  }
                }} 
                title={"Other Known Languages"}>

            </ShadowItemWithPressability>
            <ShadowItemWithPressability onPressed={(width, height, pageX, pageY)=>{
                  
                  if(modalRef.current)
                  {
                    modalRef.current.refresh(width, height, pageX, pageY)
                  }
                  
                }} title={"I Write Stories In"}>

            </ShadowItemWithPressability>

        </View>
        <GlobalModal ref={modalRef} ></GlobalModal>
 
    </View>

    );
};

const styles = StyleSheet.create({
    view: {
        borderWidth: 1, borderRadius: 10, marginHorizontal: 30, backgroundColor: "#FBFBFB", marginVertical: 20, borderColor: '#CCCCCC', shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.5,
        shadowRadius: 5,
        elevation: 10,
    },
    textStyle: {
        marginHorizontal: 10, marginVertical: 12, color: "black"
    }

})

export default KnownLanguages;