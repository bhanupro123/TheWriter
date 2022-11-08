import React, {useEffect, useState} from 'react';
import {View, Text,ScrollView,StyleSheet,TouchableOpacity} from 'react-native';
import HeaderOfItem from '../../customizedcomponents/HeaderOfItem';
import ColorConstants from '../../resources/constants/ColorConstants';
import SearchDropDown from '../../customizedcomponents/SearchableDropDown';
import Feather from 'react-native-vector-icons/Feather';

const TermsAndConditions = () => {
  let yearsData = [{name: '1 year'}, {name: '2 years'}, {name: '3 years'},{name: '4 years'},{name: '5+ years'}];

  return (
    <View  style={{flex: 1, backgroundColor:ColorConstants.baseColor}}>
      <HeaderOfItem
        headerText={'Terms and Conditions'}
        onBackPressed={() => {
          navigation.pop();
        }}
      />
      <ScrollView>
        <View style={styles.container}>
        <Text
            style={{
              color: ColorConstants.base,
              fontSize: 18,
              fontWeight: '500',
              marginHorizontal: 15,
            }}>
            How many years of experience
          </Text>
          <View style={{marginHorizontal:10}}>
              <View
                style={{
                  borderWidth: 1,
                  width: '100%',
                  borderRadius: 5,
                  height: 50,
                  paddingHorizontal: 10,
                  borderColor: '#959494',
                  justifyContent: 'center',
                  marginTop: 20,
                }}>
                <TouchableOpacity
                  onPress={() => {
                    console.log('ONPRESS');
                    setCurrentFieldSearching(!currentFieldSearching);
                  }}>
                  <View style={{flexDirection: 'row'}}>
                    <Text
                      style={{
                        fontSize: 14,
                        fontWeight: '400',
                        color: '#49658c',
                        textAlign: 'left',
                        flex: 1,
                        margin: 2,
                      }}>
                      {/* {gender} */}
                      Please select years
                    </Text>
                    <Feather
                      name="chevron-down"
                      size={20}
                      color={'#49658c'}
                      style={{marginHorizontal: 10, marginTop: 3}}
                    />
                  </View>
                </TouchableOpacity>
              </View>
              {/* {currentFieldSearching ? ( */}
                <SearchDropDown
                //   presshandler={onPressGender}
                  dataSource={yearsData}
                  scroll={true}
                  height={150}
                  borderBottomLeft={10}
                  borderBottomRight={10}
                />
              {/* ) : null} */}
            </View>
        </View>
      </ScrollView>
    </View>
  );
};
const styles = StyleSheet.create({
    container: {
      backgroundColor: '#ffffff',
      flex: 1,
      paddingTop: 15,
      marginTop: 20,
      borderRadius: 10,
      shadowOpacity: 0.05,
      marginHorizontal: 15,
    },
});
export default TermsAndConditions;
