import React, { useEffect, useRef, useState } from 'react';

import {
    SafeAreaView,
    ScrollView,
    StatusBar,
    StyleSheet,
    Text,
    useColorScheme,
    View, Image, TouchableOpacity, Dimensions
} from 'react-native';
import GlobalModal from '../../../../customizedcomponents/GlobalModal';
import AntDesign from 'react-native-vector-icons/AntDesign';
import TockenGenaration from '../../../../customizedcomponents/TockenGenaration';
import KnownLanguageModal from './KnownLanguageModal';

const ShadowItemWithPressability = ({ knownLanguages = [], data = {}, onPressed, responsiveHeight, navigation, title = " hi", ...props }) => {
    const containerRef = React.useRef(null);
    const modalRef = useRef(null)
    const [dataSet, setDataSet] = useState([])

    return (<View>
        <View style={styles.view}>
            <TouchableOpacity ref={(ref) => {
                containerRef.current = ref
            }}
                onPress={() => {
                    containerRef.current.measure((x, y, width, height, pageX, pageY) => {

                        if (modalRef.current) {
                            modalRef.current.refresh(width, height, pageX, pageY)
                        }
                    })
                }}
                style={[styles.view, { flexDirection: 'row', justifyContent: 'center', alignItems: 'center', justifyContent: 'space-between', paddingHorizontal: 5 }]}>
                <Text style={styles.innerTextStyle}>
                    {title}
                </Text>
                <AntDesign name="right" size={20} color="#000" />
            </TouchableOpacity>

            <TockenGenaration   passedStyle={{ marginBottom: 10 }} preSelection={[]} allItems={knownLanguages}> </TockenGenaration>
        </View>
        <KnownLanguageModal ref={modalRef} masterQuestionsArray={props.masterQuestionsArray} type={"expand"} onDataChanged={(data, parentIndex, index) => {
            props.onDataChanged(data, parentIndex, index)
            console.log(data, "HHHHHHHHHHHHHH", index, parentIndex)
        }} responsiveHeight={responsiveHeight()} {...props} ></KnownLanguageModal>
    </View>
    );
};

const styles = StyleSheet.create({
    view: {
        borderWidth: 1, borderRadius: 10, marginHorizontal: 10, backgroundColor: "#FBFBFB", marginVertical: 10, borderColor: '#CCCCCC', shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.5,
        shadowRadius: 5,
        elevation: 10,
    },
    textStyle: {
        marginVertical: 10, color: "black", fontWeight: '700'
    }
    ,
    innerTextStyle: {
        marginHorizontal: 10, marginVertical: 10, color: "black"
    }

})

export default ShadowItemWithPressability;