import React, { useEffect ,useRef} from 'react';
 
import {
    SafeAreaView,
    ScrollView,
    StatusBar,
    StyleSheet,
    Text,
    useColorScheme,
    View,Image, TouchableOpacity
} from 'react-native';
import GlobalModal from '../../../customizedcomponents/GlobalModal';
import Item from './Item';
 
let array=Array.from(Array(20).keys())
const ModalTemp = (props) => {
    const modalRef = useRef(null)
    function generateRandomColor(){
        let maxVal = 0xFFFFFF; // 16777215.
        let randomNumber = Math. random() * maxVal;
        randomNumber = Math. floor(randomNumber);
        randomNumber = randomNumber. toString(16);
        let randColor = randomNumber. padStart(6, 0);
         
        return `#${randColor. toUpperCase()}`
        }  


    return (
        <ScrollView style={{flex:1}} >
               
               {array.map((item,index,key)=>{
                return  <Item  onPressed={(width, height, pageX, pageY)=>{
                  
                  if(modalRef.current)
                  {
                    modalRef.current.refresh(width, height, pageX, pageY)
                  }
                }}  index={index} key={key+index}>

                </Item>
               })}
               <GlobalModal ref={modalRef} ></GlobalModal>
        </ScrollView>
    );
};



export default ModalTemp;