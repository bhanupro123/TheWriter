import React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import IconAnt from 'react-native-vector-icons/AntDesign';
import ColorConstants from '../resources/constants/ColorConstants';

export default class HeaderOfItem extends React.Component {
  render() {
    const {onBackPressed, headerText, progressbar, width} = this.props;

    return (
      <View>
        <View style={styles.header}>
          {/* <OnPressOpacity presshandler={() => {
              // onRequired();
              onBackPressed();
            }}> */}
          <IconAnt
            name="arrowleft"
            size={25}
            color={'black'}
            onPress={()=>{onBackPressed();}}
          />
          {/* </OnPressOpacity> */}
          <Text
            style={{
              color: ColorConstants.baseBlueColor,
              fontSize: 20,
              // fontFamily: Fonts.mulishBold,
              fontWeight: '600',
              marginHorizontal: 15,
            }}>
            {headerText}
          </Text>
        </View>
        {/* {progressbar == true ? (
          <View
            style={{borderTopWidth: 1, borderColor: 'rgba(241, 241, 241, 1)'}}>
            <ProgressBar
              useNativeDriver={false}
              progress={2}
              height={3}
              width={width}
              color={'rgba(33, 43, 104, 1)'}
              borderColor={'rgba(33, 43, 104, 1)'}
            />
          </View>
        ) : null} */}
      </View>
    );
  }
}
const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
    height: 60,
    borderBottomColor: '#959494',
    borderBottomWidth: 0.5,
  },
});
