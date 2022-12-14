import React, { useEffect, useImperativeHandle, useRef, useState, forwardRef } from 'react';
import { TouchableOpacity, View, Text, Button, ScrollView, Dimensions, Modal } from 'react-native';
import ColorConstants from '../resources/constants/ColorConstants';
import TockenGenaration from './TockenGenaration';
import Ionicons from 'react-native-vector-icons/Ionicons';
let array = Array.from(Array(100).keys())
const GlobalModal = forwardRef(({ textValue = "Text", type = "expand", color = "red", responsiveHeight, ...props }, ref) => {
  const [isVisible, setIsVissible] = useState(false)
  const [margin, setMargin] = useState(0)
  const [alignTop, setAlignTop] = useState(false)
  const [alignBottom, setAlignBottom] = useState(false)
  const [maxHeight, setMaxHeight] = useState(null)
  const [marginLeft, setMarginLeft] = useState(0)
  const localMasterQuestionsArray = useRef(props.masterQuestionsArray ? props.masterQuestionsArray : [])
  const selectedMasterQuestionsArray = useRef(props.masterQuestionsArray ? props.masterQuestionsArray : [])
  const [currentAcordianView, setCurrentAcordianView] = useState(0)
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

       return   keys.map((items, indexx, key) => {
            return <View>
              <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                <Text style={{ marginVertical: 10, fontWeight: '800', color: 'black', }}>{keys[indexx]}</Text>
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
                borderRadius: 10
              }}>
                {currentAcordianView === index ? getFromObject(item, indexx, keys[indexx], true) : null}
              </View>

            </View>

          })


        })
      }
    }
    else return <Text>No data available</Text>
  }





  function getFromObject(obj, indexx, path, parent = false) {
    console.log(path, "path")
    if (typeof (obj) == 'object') {
      let keys = Object.keys(obj)
      return <View style={{ borderWidth: 2, borderColor: generateRandomColor(), borderRadius: 20 }}>
        {keys.map((item, index, keyy) => {
          if (!obj[item].map) {

            return <View>
              {!parent ? <Text style={{ marginVertical: 5, fontWeight: '900', color: 'black', marginHorizontal: 10 }}>{item}</Text> : null}
              {getFromObject(obj[item], index, "")}
            </View>
          }
          else if (obj[item] && obj[item].map) {
            return <View style={{ padding: 5 }}>
              <Text style={{ marginVertical: 5, fontWeight: '500', color: 'black', marginHorizontal: 10 }}>{item}</Text>
              <TockenGenaration onSelectedArray={(data) => {
                console.log(data, "ARRAY selected", obj)
                localMasterQuestionsArray.current[indexx]
              }} allItems={obj[item]} preSelection={localMasterQuestionsArray.current.bahnu}   {...props}>
              </TockenGenaration></View>
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
              onPress={() => { setIsVissible(false) }}>
              <Text
                style={
                  {
                    color: "white",
                    padding: 10
                  }
                }>
                Close {currentAcordianView}
              </Text>
            </TouchableOpacity>

          </ScrollView>
        </TouchableOpacity>
      </TouchableOpacity>
    </Modal>

  )
});
export default GlobalModal;