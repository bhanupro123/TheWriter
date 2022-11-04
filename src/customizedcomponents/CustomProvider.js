
import React, { useEffect, useRef } from 'react';
import {
    SafeAreaView,
    ScrollView,
    StatusBar,
    StyleSheet,
    Text,
    useColorScheme,
    View,
} from 'react-native';
export const AlertContext = React.createContext({});
export const AlertConsumer = AlertContext.Consumer;
export const AlertProvider = (props) => {
    const responsiveHeight = useRef(0)
    useEffect(() => {

    }, [])

    const getResponsiveHeight = () => {
        return responsiveHeight.current
    }
    return (
        <View style={{ flex: 1 }} onLayout={(e) => {
            responsiveHeight.current = e.nativeEvent.layout.height
            console.log(e.nativeEvent.layout, "alert provider")
        }}>
            <AlertContext.Provider value={{ responsiveHeight: getResponsiveHeight }}>
                {props.children}
            </AlertContext.Provider>
        </View>
    );
}
export const withGlobalContext = ChildComponent => props => (
    <AlertContext.Consumer>
        {
            context => <ChildComponent   {...props} responsiveHeight={context.responsiveHeight} />
        }
    </AlertContext.Consumer>
);
