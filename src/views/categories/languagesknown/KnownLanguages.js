import React, { useEffect, useRef } from 'react';

import {
    SafeAreaView,
    ScrollView,
    StatusBar,
    StyleSheet,
    Text,
    useColorScheme,
    View, Image, TouchableOpacity, Dimensions, Button
} from 'react-native';
import { withGlobalContext } from '../../../customizedcomponents/CustomProvider';
import GlobalModal from '../../../customizedcomponents/GlobalModal';
import ColorConstants from '../../../resources/constants/ColorConstants';
import ShadowItemWithPressability from './items/ShadowItemWithPressability';
import { connect, useDispatch } from 'react-redux';
import { getMasterQuestions } from '../../../redux/actions/ActionKnownLanguage';

const KnownLanguages = ({ navigation, responsiveHeight, ...props }) => {
   
    return (<View style={{ flex: 1, backgroundColor: ColorConstants.baseColor }}>
        <Text>
            {props.username}
        </Text>
        <Button title='update' onPress={()=>{
            props.updateTemp()
            console.log(props,"...........")
        }}></Button>
        <View style={{ backgroundColor: ColorConstants.white, paddingVertical: 20, margin: 20, borderRadius: 20 }}>
            <ShadowItemWithPressability responsiveHeight={responsiveHeight} >

            </ShadowItemWithPressability>
            <ShadowItemWithPressability responsiveHeight={responsiveHeight} >

            </ShadowItemWithPressability>


        </View>
      

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


const mapStateToProps = state => {

    return {
        username: state.reducerKnowledgeLanguage.username,
    };
};

const mapDispatchToProps = dispatch => {
    ///view ->reducer
    return {

          
        updateTemp: () => {
            dispatch(getMasterQuestions());
        },
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(withGlobalContext(KnownLanguages));