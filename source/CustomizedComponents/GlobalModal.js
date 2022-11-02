import React, { useEffect, useImperativeHandle, useRef, useState,forwardRef } from 'react';
import { TouchableOpacity,View,Text, Button, ScrollView, Dimensions } from 'react-native';
import Modal from "react-native-modal";
let array=Array.from(Array(30).keys())
const GlobalModal = forwardRef(({textValue="Text",color="red",...props},ref) => {
     const [isVisible,setIsVissible]=useState(false)
     const [margin,setMargin]=useState(0)
     const [alignTop,setAlignTop]=useState(false)
     function generateRandomColor(){
      let maxVal = 0xFFFFFF; // 16777215.
      let randomNumber = Math. random() * maxVal;
      randomNumber = Math. floor(randomNumber);
      randomNumber = randomNumber. toString(16);
      let randColor = randomNumber. padStart(6, 0);
       
      return `#${randColor. toUpperCase()}`
      }  
     useImperativeHandle(ref, () => ({
      refresh(width, height, pageX, pageY) {
        console.log(height+pageY,Dimensions.get('window').height) 
        if(((Dimensions.get('window').height)-(height+pageY))>=(Dimensions.get('window').height%0.5))
        {
          console.log("up")
          setAlignTop(true)
          setMargin(height+pageY)
          setIsVissible(true)
        }
        else{
          console.log("down")
          setAlignTop(false)
          setMargin(height+pageY)
              setIsVissible(true)
        }
           
      },

  }))
    useEffect(()=>{
         
    }) 
    return ( 
            <Modal style={{margin:0}} onBackdropPress={()=>{
               setIsVissible(false) 
            }}  onBackButtonPress={()=>{
               setIsVissible(false) 
            }} isVisible={isVisible}  onRequestClose={() => { setIsVissible(false)  } }  >
           
            <View  style={{backgroundColor:'white',margin:0,marginTop:margin,justifyContent:'center',alignItems:'center',width:'100%'}}>
            <Button onPress={()=>{
                setIsVissible(false)
               }} title={"close"}></Button>
            <ScrollView style={{width:'100%'}}>
            {array.map((item,index,key)=>{
                return  <TouchableOpacity index={index} key={key+index} style={{height:80,backgroundColor:generateRandomColor(),margin:5,alignItems:'center',justifyContent:'center',borderRadius:20,width:'50%',alignSelf:'center'}}>
                    <Text style={{color:'white'}}>{item}</Text>
                </TouchableOpacity>
               })}
              
            </ScrollView>
            </View>

            
             
           
          </Modal>
          
    )
});
export default GlobalModal;