import React, { useEffect, useImperativeHandle, useRef, useState, forwardRef } from 'react';
import { TouchableOpacity, View, Text, Button, ScrollView, Dimensions, Modal } from 'react-native';
import ColorConstants from '../resources/constants/ColorConstants';
let array = Array.from(Array(50).keys())
const GlobalModal = forwardRef(({ textValue = "Text", color = "red", ...props }, ref) => {
  const [isVisible, setIsVissible] = useState(false)
  const [margin, setMargin] = useState(0)
  const [alignTop, setAlignTop] = useState(false)
  const [alignBottom, setAlignBottom] = useState(false)
  const [maxHeight, setMaxHeight] = useState(null)
  const [marginLeft, setMarginLeft] = useState(0)
  console.log(Math.random(), "bahnu")
  function generateRandomColor() {
    let maxVal = 0xFFFFFF; // 16777215.
    let randomNumber = Math.random() * maxVal;
    randomNumber = Math.floor(randomNumber);
    randomNumber = randomNumber.toString(16);
    let randColor = randomNumber.padStart(6, 0);

    return `#${randColor.toUpperCase()}`
  }
  useImperativeHandle(ref, () => ({
    refresh(width, height, pageX, pageY) { 
      if (1208 / 2 >= (pageY)) {
        console.log("up")
        setAlignTop(true)
        setAlignBottom(false)
        setMargin(height + pageY)
        setIsVissible(true)
        setMarginLeft(pageX)
        setMaxHeight(1028 - height - pageY)
      }
      else {
        setMarginLeft(pageX)
        setAlignTop(false)
        setAlignBottom(true)
        setMargin(1208 - pageY ? 1208 - pageY : 0)
        setIsVissible(true)
        setMaxHeight(1028)
      }
    },

  }))
  useEffect(() => {

  })
  return (
    <Modal transparent onLayout={(e) => {

    }} style={{ margin: 0 }} onBackdropPress={() => {
      setIsVissible(false)
    }} onBackButtonPress={() => {
      setIsVissible(false)
    }} visible={isVisible} onRequestClose={() => { setIsVissible(false) }}  >


      <TouchableOpacity activeOpacity={1} style={{ flex: 1 }}

        onPress={() => {
          setIsVissible(false)
        }}
      > 
        <View onLayout={(e) => {
          console.log("::::", e.nativeEvent.layout)
        }} style={{ bottom: alignBottom ? margin : 'auto', top: alignTop ? margin : 'auto', position: 'absolute', marginHorizontal: marginLeft, maxHeight: 1208 - margin ,shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.5,
        shadowRadius: 5,
        elevation: 10,backgroundColor:'white',borderRadius:10}}>



          <ScrollView style={{}}>

            <View style={{ flexDirection: 'row', flexWrap: 'wrap', flexGrow: 0, marginHorizontal: 10, alignItems: 'center', alignContent: 'center', }}>
              {array.map((item, index, key) => {
                return <TouchableOpacity index={index} key={key + index} style={{ backgroundColor: generateRandomColor(), margin: 5, alignItems: 'center', justifyContent: 'center', borderRadius: 5, alignSelf: 'center', padding: 10 }}>
                  <Text style={{ color: 'white' }}>{item}</Text>
                </TouchableOpacity>
              })}
            </View>
            <TouchableOpacity style={{ backgroundColor: ColorConstants.baseBlueColor,marginBottom:20,alignSelf:'center',borderRadius:10}} onPress={() => {
            setIsVissible(false)
          }}>
            <Text style={{color:"white",padding:10}}>Close</Text>
          </TouchableOpacity>
          </ScrollView>



         

        </View>

      </TouchableOpacity>



    </Modal>

  )
});
export default GlobalModal;