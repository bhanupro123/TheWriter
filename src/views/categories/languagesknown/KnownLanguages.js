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
import { getMasterQuestions, setKnownLanguages } from '../../../redux/actions/ActionKnownLanguage';

const KnownLanguages = ({ navigation, responsiveHeight, ...props }) => {

    return (<ScrollView style={{ flex: 1, backgroundColor: ColorConstants.baseColor }}>
        <Text>
            {props.username}
        </Text>
        <Button title='update' onPress={() => {
            props.updateTemp()
        }}></Button>
        <View style={{ paddingVertical: 20, marginHorizontal: 5, borderRadius: 20, }}>
            {true && props.masterQuestionsArray && props.masterQuestionsArray.length ? <ShadowItemWithPressability   onDataChanged={(data, parentIndex, index) => {
                console.log(data, parentIndex, index)
            }}
            onSelection={(data,parentQn,subQn) => {

// let a = props.knownLanguages;
// console.log(a, "aaaaaaaaaaaaaaa")
// if (a.includes(data)) {
//     console.log("if", a)
//     a.splice(a.indexOf(data), 1);
// }
// else {
//     console.log("else", a)
//     a.push(data)
// }
console.log( data,parentQn,subQn)
// props.setKnownLanguagesList(a)
}}
            knownLanguages={props.knownLanguages}
                masterQuestionsArray={props.masterQuestionsArray}
                title="I write stories in"
                responsiveHeight={responsiveHeight} {...props}>
            </ShadowItemWithPressability> : null}



            {true && props.totalDataFromApi && props.totalDataFromApi.length>0 ? <ShadowItemWithPressability  onDataChanged={(data, parentIndex, index) => {
                console.log(data, parentIndex, index)
            }}
            knownLanguages={props.knownLanguages}
                masterQuestionsArray={props.masterQuestionsArray}
                title="Other known languages"
                responsiveHeight={responsiveHeight} {...props}>
            </ShadowItemWithPressability> : null}
            <Text>{JSON.stringify(props.totalDataFromApi)}</Text>


        </View>


    </ScrollView>

    );
};



const mapStateToProps = state => {

    return {
        username: state.reducerKnowledgeLanguage.username,
        masterQuestionsArray: state.reducerKnowledgeLanguage.masterQuestionsArray,
        knownLanguages: state.reducerKnowledgeLanguage.knownLanguages,
        totalDataFromApi:state.reducerKnowledgeLanguage.totalDataFromApi
    };
};

const mapDispatchToProps = dispatch => {
    ///view ->reducer
    return {


        updateTemp: () => {
            dispatch(getMasterQuestions());
        },
        setKnownLanguagesList: (data) => {
            dispatch(setKnownLanguages(data));
        },
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(withGlobalContext(KnownLanguages));