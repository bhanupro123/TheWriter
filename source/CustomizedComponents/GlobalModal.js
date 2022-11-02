import React, { useEffect, useImperativeHandle, useRef, useState,forwardRef } from 'react';
import { TouchableOpacity,View,Text, Button, ScrollView, Dimensions ,Modal} from 'react-native'; 
let array=Array.from(Array(50).keys())
const GlobalModal = forwardRef(({textValue="Text",color="red",...props},ref) => {
     const [isVisible,setIsVissible]=useState(false)
     const [margin,setMargin]=useState(0)
     const [alignTop,setAlignTop]=useState(false)
     const [alignBottom,setAlignBottom]=useState(false)
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
        console.log( height,pageY) 
          if(1208/2>=(pageY))
          {
          console.log("up")
          setAlignTop(true)
          setAlignBottom(false)
          setMargin(height+pageY)
          setIsVissible(true)
          }
          else{
            console.log("down",1208-pageY,1208,pageY,height)
            setAlignTop(false)
            setAlignBottom(true)
            setMargin(1208-pageY?1208-pageY:0)
          setIsVissible(true)
          }
      },

  }))
    useEffect(()=>{
         
    }) 
    return ( 
            <Modal transparent  onLayout={(e)=>{
              console.log("::::",e.nativeEvent.layout)
            }}  style={{margin:0,elevation:5}} onBackdropPress={()=>{
               setIsVissible(false) 
            }}  onBackButtonPress={()=>{
               setIsVissible(false) 
            }} visible={isVisible}  onRequestClose={() => { setIsVissible(false)  } }  >
           
            
           <View onLayout={(e)=>{
            console.log(e.nativeEvent.layout)
           }}  style={{backgroundColor:'red' ,marginTop:alignTop?margin:null,  width:'100%',marginBottom:alignBottom?margin:null,alignSelf:alignBottom?'flex-end':null }}>
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