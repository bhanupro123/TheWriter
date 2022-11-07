import React, { useEffect, useImperativeHandle, useRef, useState, forwardRef } from 'react';
import { TouchableOpacity, View, Text, Button, ScrollView, Dimensions, Modal } from 'react-native';

import Ionicons from 'react-native-vector-icons/Ionicons';
import TockenGenaration from '../../../../customizedcomponents/TockenGenaration';
import ColorConstants from '../../../../resources/constants/ColorConstants';
let array = Array.from(Array(100).keys())
const GlobalModal = forwardRef(({ onDataChanged, textValue = "Text", type = "expand", color = "red", responsiveHeight, ...props }, ref) => {
  const [isVisible, setIsVissible] = useState(false)
  const [margin, setMargin] = useState(0)
  const [alignTop, setAlignTop] = useState(false)
  const [alignBottom, setAlignBottom] = useState(false)
  const [maxHeight, setMaxHeight] = useState(null)
  const [marginLeft, setMarginLeft] = useState(0)
  const localMasterQuestionsArray = useRef(props.masterQuestionsArray ? props.masterQuestionsArray : [])
  const selectedMasterQuestionsArray = useRef([])
  const [currentAcordianView, setCurrentAcordianView] = useState(0)
  function generateRandomColor() {
    let maxVal = 0xFFFFFF; // 16777215.
    let randomNumber = Math.random() * maxVal;
    randomNumber = Math.floor(randomNumber);
    randomNumber = randomNumber.toString(16);
    let randColor = randomNumber.padStart(6, 0);

    return `#${randColor.toUpperCase()}40`
  }
  useImperativeHandle(ref, () => ({
    refresh(width, height, pageX, pageY) {
      selectedMasterQuestionsArray.current = []
      if (responsiveHeight / 2 >= (pageY)) {
        setCurrentAcordianView(0)
        setAlignTop(true)
        setAlignBottom(false)
        setMargin(height + pageY)
        setIsVissible(true)
        setMarginLeft(width)
        setMaxHeight(responsiveHeight - height - pageY)
      }
      else {
        setCurrentAcordianView(0)
        setMarginLeft(width)
        setAlignTop(false)
        setAlignBottom(true)
        setMargin(responsiveHeight - pageY ? responsiveHeight - pageY : 0)
        setIsVissible(true)
        setMaxHeight(responsiveHeight)
      }
    },

  }))
  useEffect(() => {

  })

  function reRenderUi() {

    if (type == "expand") {

      if (localMasterQuestionsArray.current && localMasterQuestionsArray.current.map) {

        return localMasterQuestionsArray.current.map((item, index, key) => {
          let keys = [];
          if (typeof (item) == 'object') {
            keys = Object.keys(item)
          }
          else if (item && item.map) {
            keys = item
          }

          return keys && keys.map((items, indexx, key) => {
            if (!items.startsWith("pre")) {
              return <View key={index + items}>
                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                  <Text style={{ marginVertical: 10, fontWeight: '800', color: 'black', }}>{items}</Text>
                  <Ionicons onPress={() => {
                    if (currentAcordianView === index) setCurrentAcordianView(null)
                    else setCurrentAcordianView(index)
                  }} name={currentAcordianView === index ? "chevron-up" : "chevron-down"} size={20} color="#000" />
                </View>

                <View style={{
                  shadowColor: '#000',
                  shadowOffset: { width: 0, height: 2 },
                  shadowOpacity: 0.5,
                  shadowRadius: 5,
                  elevation: 5,
                  marginHorizontal: 10,
                  backgroundColor: 'white',
                  borderRadius: 10,
                }}>

                  {currentAcordianView === index ? getFromObject(item, indexx, keys[indexx], true) : null}
                </View>

              </View>
            }

          })


        })
      }
    }
    else return <Text>No data available</Text>
  }





  function getFromObject(obj) {
    if (typeof (obj) == 'object') {
      let keys = Object.keys(obj)
      return <View style={{ padding: 5 }}>
        {keys.map((item, index, keyy) => {
          if (typeof (obj[item]) == 'object' && !item.startsWith("pre")) {
            let a = Object.keys(obj[item])
            return a.map((itemm, index, keyy) => {
              return <View key={index}>
                <Text style={{ marginVertical: 10, fontWeight: '800', color: 'black', }}>{itemm}</Text>
                <TockenGenaration onSelectedArray={(data, singleValue) => {

                  if (selectedMasterQuestionsArray.current.includes(singleValue)) {
                    selectedMasterQuestionsArray.current.splice(selectedMasterQuestionsArray.current.indexOf(singleValue), 1);
                  }
                  else {
                    selectedMasterQuestionsArray.current.push(singleValue)
                  }
                  console.log(selectedMasterQuestionsArray.current, "selected array")

                }} preSelection={selectedMasterQuestionsArray.current}   {...props} allItems={obj[item][itemm]}  ></TockenGenaration>
              </View>
            })

          }




        })}
      </View>
    }
    else {
      return <Text>{"empty"}</Text>
    }
    return

  }

  return (
    <Modal
      transparent
      style={{ margin: 0 }}
      visible={isVisible}

      onRequestClose={() => {
        setCurrentAcordianView(null)
        setIsVissible(false)
      }}  >
      <TouchableOpacity
        activeOpacity={1}
        style={{ flex: 1, alignItems: 'center' }}
        onPress={() => {
          setCurrentAcordianView(null)
          setIsVissible(false)
        }}
      >
        <TouchableOpacity onPress={() => { }}
          activeOpacity={1}
          style={
            {
              width: marginLeft,
              bottom: alignBottom ? margin : 'auto',
              top: alignTop ? margin : 'auto',
              position: 'absolute',
              maxHeight: responsiveHeight - margin,
              shadowColor: '#000',
              shadowOffset: { width: 0, height: 2 },
              shadowOpacity: 0.5,
              shadowRadius: 5,
              elevation: 10,
              backgroundColor: 'white',
              borderRadius: 10
            }
          }>
          <ScrollView style={{ paddingHorizontal: 10 }}>
            <TouchableOpacity activeOpacity={1}>
              {reRenderUi()}
            </TouchableOpacity>


            <TouchableOpacity
              style={
                {
                  backgroundColor: ColorConstants.baseBlueColor,
                  marginVertical: 20,
                  alignSelf: 'center',
                  borderRadius: 10
                }
              }
              onPress={() => { 
                props.setKnownLanguagesList(selectedMasterQuestionsArray.current)
               setIsVissible(false)
                 }}>
              <Text
                style={
                  {
                    color: "white",
                    padding: 10
                  }
                }>
                OK
              </Text>
            </TouchableOpacity>

          </ScrollView>
        </TouchableOpacity>
      </TouchableOpacity>
    </Modal>

  )
});
export default GlobalModal;