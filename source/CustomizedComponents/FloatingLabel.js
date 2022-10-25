import React, { Component } from 'react';
import {
    View,
    StyleSheet,
    Text,
    Dimensions, Image,
    ScrollView, Animated, TouchableOpacity, TextInput, Platform
} from "react-native";



import PropTypes from "prop-types";

 
class FloatLabelInput extends Component {
    staticHeight = 0;
    enteredValue = "";
    isItEntered = false;
    thisProps;
    marginTop = 0;
    constructor(props) {
        super(props)

        this.thisProps = props;
        this.state = {
            textLabel: new Animated.Value(0),
            makePaddingInTop: 0,
            inputText: props.value,
            showTextError: "",
            showPassword: props.isSecured ? true : false
        }




    }


    removeError() {
        this.setState({ showTextError: "" })
    }

    setFoucus = () => {
        this.textInput.focus();
    }
    setText = (val) => {
        this.setState({inputText:val})
    }

    setError = (val) => {
        this.setState({ showTextError: val })
    }


    componentDidMount() {

        if (!this.state.inputText) {
            console.log(this.staticHeight, " VVVVVVVXXXXXXXXXXXXXXXXXX")
            Animated.timing(this.state.textLabel, {
                toValue: 32 / 2,
                duration: 500,
                useNativeDriver: false
            }).start();
        }
        else {
            this.onFocus()
        }


        this.setState({ inputText: this.thisProps.value })

    }




    onFocus() {
        console.log(this.state.description)
        this.marginTop = Platform.OS == 'ios' ? 0  : -10;
        this.setState({ makePaddingInTop: 15 })

        Animated.timing(this.state.textLabel, {
            //toValue: 0,
             toValue: this.thisProps.multiline == true && Platform.OS == 'ios' && !this.state.description? -15 : 0,
            duration: 500,
            useNativeDriver: false
        }).start();

    }


    render() {


        const { onChangeText, autoCapitalize, keyboardType, maxLength
            , returnKeyType, label, editable, multiline, onSubmitEditing, isSecured, maxHeight, show_mandatory_star } = this.props;

        return <View style={styles.container}>

            <View style={{ marginHorizontal: 20,marginTop: Platform.OS == 'ios' && multiline == true ? 10 :0  }} >

                <View style={{ flexDirection: 'row', maxHeight: 150, }}>

                    <TextInput
                        autoCapitalize={autoCapitalize}
                        secureTextEntry={this.state.showPassword}
                        returnKeyType={returnKeyType}
                         
                        keyboardType={
                            keyboardType
                        }
                        maxLength={maxLength}
                        ref={(ref) => { this.textInput = ref }}
                        editable={editable}
                        onChangeText={(val) => {
                            if (val) {
                                this.state.showTextError = ""
                            }
                            this.setState({ inputText: val })

                            onChangeText(val)

                        }}
                        onSubmitEditing={() => {
                            onSubmitEditing();
                            this.onFocus();
                        }}
                        value={this.state.inputText}
                        onFocus={() => {

                            this.onFocus();
                        }}
                        multiline={multiline}
                        onBlur={() => {
                            console.log("Blur")
                            if (!this.state.inputText) {
                                this.isItEntered = false
                                this.marginTop = 0
                                this.setState({ makePaddingInTop: 0 })
                                Animated.timing(this.state.textLabel, {
                                    toValue: 36 / 2,
                                    duration: 500,
                                    useNativeDriver: false
                                }).start();
                            }


                        }}

                        onLayout={(event) => {
                            //console.log(event, this.textInput, this.textref)
                            if (this.isItEntered == false) {
                                this.staticHeight = event.nativeEvent.layout.height;
                                this.isItEntered = true
                            }
                        }}
                        style={{
                            paddingTop: this.state.makePaddingInTop, 
                            flex: 1, 
                            minHeight: Platform.OS == 'ios' ? 40 : null, 
                            marginLeft: Platform.OS == 'ios' ? 4 : 0,
                            maxHeight: multiline == true && maxHeight == true ? 240 : null, 
                            marginLeft: Platform.OS == 'ios' ? 4 : 0,
                             
                            color:'#1E1C24'
                        }}


                    >

                    </TextInput>

                    {this.thisProps.canIshowOptionalText == true ? <Text style={{ alignSelf: 'center', color:'#B1AAAA' }}>{this.thisProps.optionalText}</Text> : null}
                    {isSecured == true ? <TouchableOpacity
                        onPress={() => {
                            this.setState({ showPassword: !this.state.showPassword })
                        }}

                    >
                        <Image
                            resizeMode={'contain'}
                            style={{ width: 20, height: 20, marginHorizontal: 5, alignSelf: 'center', marginTop: 'auto', marginBottom: 'auto' }}
                            
                        >
                        </Image>

                    </TouchableOpacity> : null}
                </View>

                <Animated.Text onPress={() => {
                    this.textInput.focus()
                    this.onFocus();
                }} style={{
                    position: 'absolute', color: "#49658c",  transform: [
                        { translateX: 4 },
                        { translateY: this.state.textLabel },
                    ],
                }}

                    ref={(ref) => { this.textref = ref }} >{label} {show_mandatory_star?<Text style={{color:"red"}}>*</Text>:null}</Animated.Text>
                    
                <View style={{
                    borderBottomWidth: 1, borderBottomColor: '#959494', marginHorizontal: 4,
                    borderBottomWidth: 0.5, marginBottom: 10, marginTop: this.marginTop
                }} >

                </View>

                {this.state.showTextError ? <Text style={{ marginHorizontal: 4, color: 'red',   marginBottom: 2 }}>
                    {this.state.showTextError}
                </Text> : null}
            </View>

        </View>;
    }
}

export default FloatLabelInput;
 


const styles = StyleSheet.create({
    container: {
        justifyContent: "center",
        
    },
    graphWrapper: {
        alignItems: "center",
        justifyContent: "center",
    },
});

FloatLabelInput.propTypes = {
    email: PropTypes.string.isRequred
  };