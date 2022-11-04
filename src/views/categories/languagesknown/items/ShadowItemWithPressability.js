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
import GlobalModal from '../../../../customizedcomponents/GlobalModal';


const ShadowItemWithPressability = ({ onPressed, responsiveHeight, navigation, title = "Other Known Languages" }) => {

    console.log("shadow with pressability")
    const containerRef = React.useRef(null);
    const modalRef = useRef(null)
    return (<>
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
            style={styles.view}>
            <Text style={styles.textStyle}>
                {title}
            </Text>
        </TouchableOpacity>
        <GlobalModal ref={modalRef} responsiveHeight={responsiveHeight()} ></GlobalModal>
    </>
    );
};

const styles = StyleSheet.create({
    view: {
        borderWidth: 1, borderRadius: 10, marginHorizontal: 20, backgroundColor: "#FBFBFB", marginVertical: 20, borderColor: '#CCCCCC', shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.5,
        shadowRadius: 5,
        elevation: 10,
    },
    textStyle: {
        marginHorizontal: 10, marginVertical: 12, color: "black"
    }

})

export default ShadowItemWithPressability;