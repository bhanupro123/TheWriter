import React, { Component } from 'react';
import {
  View,
  Text,
  TouchableOpacity
} from 'react-native';
import PropTypes from 'prop-types';
import moment from 'moment';
import ApiHandler from '../../../network/NetWorkOperations';
import ServiceUrls from '../../../network/ServiceUrls';
import StoragePref from '../../../res/StoragePrefs';
import ColorConstants from '../Stories/src/Colors';

var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

var onGotResponceMonth;

var storeTempMonth;

let dateArrays = [];
let previousMonthStartDayName = "";
let apiHandler = new ApiHandler();
let serviceUrls = new ServiceUrls();
let storagePrefs = new StoragePref();
export function ClearDataset() {
  dateArrays = [];
}
class Day extends Component {
  mainProps;
  thisprops = null;
  constructor(props) {

    super(props);
     this.mainProps = this.props
    this.thisprops = props.canGetResponse
    this.state = {
      canIRefresh: false
    }
  }

  forcedUpdate = async (day=1) => {
    const {
      month,
      year,
      onPressDay,
      onGotResponced,
   }
    = this.props;
 
    this.props.global.loaderShow()

    const userDetails = await storagePrefs.getObjectValue("userDetails")
    const req = {
      "email": userDetails.userEmail,
      "startDate": year + "-" + ((month+1) < 10 ? "0" + (month+1) : (month+1)) + "-" + (day < 10 ? "0" + day : day)
    }
    
    const response = await apiHandler.requestPost(req, serviceUrls.getMeetings)

    onGotResponceMonth = month+1
    onGotResponced(response, day)
    this.props.global.loaderHide()
    if (response.status && response.status == AppConstants.DEVICE_OFFLINE) {
      alert("No internet")
    }

    if (response && response.data.length > 0) {

      dateArrays = [];
      response.data.map((data, index, key) => {

        let date = new Date(data.start_date_time)

        if (year == date.getFullYear() && month == date.getMonth()) {
          dateArrays.push(date.getDate())

        }
        else {
          console.log(date.toDateString(), year, month, date.getMonth())
        }
      })




    }

    onPressDay({ year, month, day })
  }


  render() {


    let showBackgroundOne = false;
    const {
      day,
      month,
      year,
      styles,
      customDatesStyles,
      onPressDay,
      selectedStartDate,
      onGotResponced,
      selectedEndDate,
      allowRangeSelection,
      allowBackwardRangeSelect,
      selectedDayStyle: propSelectedDayStyle,
      selectedDisabledDatesTextStyle,
      selectedRangeStartStyle,
      selectedRangeStyle,
      selectedRangeEndStyle,
      textStyle,
      todayTextStyle,
      selectedDayTextStyle: propSelectedDayTextStyle,
      selectedRangeStartTextStyle,
      selectedRangeEndTextStyle,
      minDate,
      maxDate,
      disabledDates,
      disabledDatesTextStyle,
      minRangeDuration,
      maxRangeDuration,
      enableDateChange,
      canGetResponse,
      prevProps
    } = this.props;
    let disabled_dates = this.mainProps.prevProps.disable_dates.disableDates

    let locked_dates = []
    // console.log(day, month + 1, year, disabled_dates, 'RRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRR')
    // //[{"dateArray": [1, 2, 3, 4], "months": 4}]
    for (var i = 0; i < disabled_dates.length; i++) {
      // console.log(disabled_dates[i].months, month + 1, '&&&&&&&&&&&&&')
      if (disabled_dates[i].months == month + 1 && disabled_dates[i].year == year) {

        locked_dates.push(disabled_dates[i].dateArray)

      }
    }
    if (locked_dates) {
      locked_dates = locked_dates[0]
    }

    if (day == 1) {

      let datee = new Date();
      datee.setFullYear(year)
      datee.setMonth(month)
      datee.setDate(day)

      if (days[datee.getDay()] == previousMonthStartDayName && storeTempMonth && storeTempMonth != month) {
        showBackgroundOne = true;

      }
      previousMonthStartDayName = days[datee.getDay()]
      storeTempMonth = month

    }



    const thisDay = moment({ year, month, day, hour: 12 });
    const today = moment();
    let dateOutOfRange;
    let computedSelectedDayStyle = styles.dayButton; // may be overridden depending on state
    let selectedDayTextStyle = {};
    let selectedDayStyle;
    let overrideOutOfRangeTextStyle;
    let dateIsBeforeMin = false;
    let dateIsAfterMax = false;
    let dateIsDisabled = false;
    let dateRangeLessThanMin = false;
    let dateRangeGreaterThanMax = false;



    if (maxDate) {
      dateIsAfterMax = thisDay.isAfter(maxDate, 'day');
    }
    if (minDate) {
      dateIsBeforeMin = thisDay.isBefore(minDate, 'day');
    }

    if (disabledDates) {
      if (Array.isArray(disabledDates) && disabledDates.indexOf(thisDay.valueOf()) >= 0) {
        dateIsDisabled = true;
      }
      else if (disabledDates instanceof Function) {
        dateIsDisabled = disabledDates(thisDay);
      }
    }

    let dateDATE = new Date(thisDay)


    /////////////////
    // console.log(this.mainProps.prevProps.disable_dates.enabledDates, "MANISHA")

    let manisha = (dateDATE.getMonth() + 1 < 10 ? "0" + (dateDATE.getMonth() + 1) : (dateDATE.getMonth() + 1)) + "-" + (dateDATE.getDate() < 10 ? "0" + (dateDATE.getDate()) : (dateDATE.getDate())) + "-" + dateDATE.getFullYear()

    if (this.mainProps.prevProps.disable_dates.enabledDates.includes(manisha)) {
      dateIsDisabled = false
    }
    else {
      dateIsDisabled = this.mainProps.prevProps.disable_dates.disableDayNames.includes(days[dateDATE.getDay()])

    }

    if (allowRangeSelection && selectedStartDate && !selectedEndDate) {
      let daysDiff = thisDay.diff(selectedStartDate, 'days'); // may be + or -
      daysDiff = allowBackwardRangeSelect ? Math.abs(daysDiff) : daysDiff;

      if (maxRangeDuration) {
        if (Array.isArray(maxRangeDuration)) {
          let maxRangeEntry = maxRangeDuration.find(mrd => selectedStartDate.isSame(mrd.date, 'day'));
          if (maxRangeEntry && daysDiff > maxRangeEntry.maxDuration) {
            dateRangeGreaterThanMax = true;
          }
        } else if (daysDiff > maxRangeDuration) {
          dateRangeGreaterThanMax = true;
        }
      }

      if (minRangeDuration) {
        if (Array.isArray(minRangeDuration)) {
          let minRangeEntry = minRangeDuration.find(mrd => selectedStartDate.isSame(mrd.date, 'day'));
          if (minRangeEntry && daysDiff < minRangeEntry.minDuration) {
            dateRangeLessThanMin = true;
          }
        } else if (daysDiff < minRangeDuration) {
          dateRangeLessThanMin = true;
        }
      }

      if (!allowBackwardRangeSelect && daysDiff < 0) {
        dateRangeLessThanMin = true;
      }
    }

    dateOutOfRange = dateIsAfterMax || dateIsBeforeMin || dateIsDisabled || dateRangeLessThanMin || dateRangeGreaterThanMax;

    let isThisDaySameAsSelectedStart = thisDay.isSame(selectedStartDate, 'day');
    let isThisDaySameAsSelectedEnd = thisDay.isSame(selectedEndDate, 'day');
    let isThisDateInSelectedRange =
      selectedStartDate
      && selectedEndDate
      && thisDay.isBetween(selectedStartDate, selectedEndDate, 'day', '[]');

    // If date is in range let's apply styles
    if (!dateOutOfRange || isThisDaySameAsSelectedStart || isThisDaySameAsSelectedEnd || isThisDateInSelectedRange) {
      // set today's style
      let isToday = thisDay.isSame(today, 'day');
      if (isToday) {
        computedSelectedDayStyle = styles.selectedToday;
        // todayTextStyle prop overrides selectedDayTextColor (created via makeStyles)
        selectedDayTextStyle = [todayTextStyle || styles.selectedDayLabel, propSelectedDayTextStyle];
      }

      const custom = getCustomDateStyle({ customDatesStyles, date: thisDay });

      if (isToday && custom.style) {
        // Custom date style overrides 'today' style. It may be reset below
        // by date selection styling.
        computedSelectedDayStyle = [styles.selectedToday, custom.style];
      }

      // set selected day style
      if (!allowRangeSelection &&
        selectedStartDate &&
        isThisDaySameAsSelectedStart) {
        computedSelectedDayStyle = styles.selectedDay;
        selectedDayTextStyle = [styles.selectedDay1Label];
        // selectedDayStyle prop overrides selectedDayColor (created via makeStyles)
        selectedDayStyle = propSelectedDayStyle || styles.selectedDayBackground;
      }

      // Set selected ranges styles
      if (allowRangeSelection) {
        if (selectedStartDate && selectedEndDate) {
          // Apply style for start date
          if (isThisDaySameAsSelectedStart) {
            computedSelectedDayStyle = [styles.startDayWrapper, selectedRangeStyle, selectedRangeStartStyle];
            selectedDayTextStyle = [styles.selectedDayLabel, propSelectedDayTextStyle, selectedRangeStartTextStyle];
          }
          // Apply style for end date
          if (isThisDaySameAsSelectedEnd) {
            computedSelectedDayStyle = [styles.endDayWrapper, selectedRangeStyle, selectedRangeEndStyle];
            selectedDayTextStyle = [styles.selectedDayLabel, propSelectedDayTextStyle, selectedRangeEndTextStyle];
          }
          // Apply style if start date is the same as end date
          if (isThisDaySameAsSelectedEnd &&
            isThisDaySameAsSelectedStart &&
            selectedEndDate.isSame(selectedStartDate, 'day')) {
            computedSelectedDayStyle = [styles.selectedDay, styles.selectedDayBackground, selectedRangeStyle];
            selectedDayTextStyle = [styles.selectedDayLabel, propSelectedDayTextStyle, selectedRangeStartTextStyle];
          }
          // Apply style for days inside of range, excluding start & end dates.
          if (thisDay.isBetween(selectedStartDate, selectedEndDate, 'day', '()')) {
            computedSelectedDayStyle = [styles.inRangeDay, selectedRangeStyle];
            selectedDayTextStyle = [styles.selectedDayLabel, propSelectedDayTextStyle];
          }
        }
        // Apply style if start date has been selected but end date has not
        if (selectedStartDate &&
          !selectedEndDate &&
          isThisDaySameAsSelectedStart) {
          computedSelectedDayStyle = [styles.startDayWrapper, selectedRangeStyle, selectedRangeStartStyle];
          selectedDayTextStyle = [styles.selectedDayLabel, propSelectedDayTextStyle, selectedRangeStartTextStyle];
          // Override out of range start day text style when minRangeDuration = 1.
          // This allows selected start date's text to be styled by selectedRangeStartTextStyle
          // even when it's below minRangeDuration.
          overrideOutOfRangeTextStyle = selectedRangeStartTextStyle;
        }
      }

      if (dateOutOfRange) { // start or end date selected, and this date outside of range.

        return (
          <View style={[styles.dayWrapper, custom.containerStyle]}>
            <View style={[custom.style, computedSelectedDayStyle, selectedDayStyle]}>
              <Text style={[styles.dayLabel, textStyle,
              styles.disabledText, disabledDatesTextStyle,
              styles.selectedDisabledText, selectedDisabledDatesTextStyle,
                overrideOutOfRangeTextStyle
              ]}>
                {day}
              </Text>
            </View>
          </View>
        );
      } else {


        return (
          <View style={[styles.dayWrapper, custom.containerStyle]}
            // onLayout={async () => {

            //   if (this.thisprops == false) {
            //     return;
            //   }

            //   let date = new Date();
            //   if (year == date.getFullYear()) {


            //     if (month == date.getMonth() && day == date.getDate()) {
            //       //  onPressDay({ year, month, day })
            //     }
            //     else if (month != date.getMonth() && day == 1) {

            //       //  onPressDay({ year, month, day })
            //     }

            //     else {

            //       return;
            //     }


            //     if (onGotResponceMonth && onGotResponceMonth == month+1) {
            //       onPressDay({ year, month, day })
            //       return
            //     }


            //     this.props.global.loaderShow()

            //     const userDetails = await storagePrefs.getObjectValue("userDetails")
            //     const req = {
            //       "email": userDetails.userEmail,
            //       "startDate": year + "-" + ((month + 1) < 10 ? "0" + (month + 1) : (month + 1)) + "-" + (day < 10 ? "0" + day : day)
            //     }
                 
            //     const response = await apiHandler.requestPost(req, serviceUrls.getMeetings)

            //     this.props.global.loaderHide()
            //     if (response.status && response.status == AppConstants.DEVICE_OFFLINE) {
            //       alert("No internet")
            //     }



            //     if (response && response.data.length > 0) {

            //       dateArrays = [];
            //       response.data.map((data, index, key) => {

            //         let date = new Date(data.start_date_time)
            //         if (year == date.getFullYear() && month == date.getMonth()) {
            //           //   console.log(moment(data.start_date_time).format('DD'), date.getDate())
            //           dateArrays.push(date.getDate())
            //         }
            //         else {
            //           // console.log(date.toDateString(), year, month, date.getMonth())
            //         }
            //       })
            //     }
            //     else {
            //       dateArrays = [];
            //     }
            //     onGotResponceMonth = month+1
            //     onGotResponced(response, day)
            //     onPressDay({ year, month, day })
            //     this.setState({ canIRefresh: true })
            //     // console.log("SETTTTTTTTTTTTTTTTTTTTTTT", dateArrays, response.data.length, dateArrays.length)


            //   }


            //   else {
            //     if (day == 1) {

            //       if (onGotResponceMonth && onGotResponceMonth == month) {
            //         onPressDay({ year, month, day })
            //         return
            //       }

            //       this.props.global.loaderShow()

            //       const userDetails = await storagePrefs.getObjectValue("userDetails")
            //       const req = {
            //         "email": userDetails.userEmail,
            //         "startDate": year + "-" + (month < 10 ? "0" + month : month) + "-" + (day < 10 ? "0" + day : day)
            //       }
                  
            //       const response = await apiHandler.requestPost(req, serviceUrls.getMeetings)

            //       onGotResponceMonth = month
            //       onGotResponced(response, day)
            //       this.props.global.loaderHide()
            //       if (response.status && response.status == AppConstants.DEVICE_OFFLINE) {
            //         alert("No internet")
            //       }



            //       if (response && response.data.length > 0) {

            //         dateArrays = [];
            //         response.data.map((data, index, key) => {

            //           let date = new Date(data.start_date_time)



            //           if (year == date.getFullYear() && month == date.getMonth() + 1) {
            //             dateArrays.push(date.getDate())

            //           }
            //           else {
            //             console.log(date.toDateString(), year, month, date.getMonth())
            //           }


            //         })




            //       }

            //       onPressDay({ year, month, day })
            //     }
            //   }

            // }} 
            >
            <TouchableOpacity
              disabled={(!enableDateChange) || (locked_dates && locked_dates.includes(day))}
              style={showBackgroundOne == true ? { backgroundColor: '#58C4C635', paddingHorizontal: 10, paddingVertical: 1, borderRadius: 1000 } : [custom.style, computedSelectedDayStyle, selectedDayStyle]}
              onPress={async () => {
                if (this.thisprops == false) {
                  onPressDay({ year, month, day })
                  return;
                }
                if (onGotResponceMonth && onGotResponceMonth == month) {
                  onPressDay({ year, month, day })
                  return
                }
                // this.props.global.loaderShow()

                // console.log(year, month, day)
                // let apiHandler = new ApiHandler();
                // let serviceUrls = new ServiceUrls();
                // let storagePrefs = new StoragePref();
                // const userDetails = await storagePrefs.getObjectValue("userDetails")
                // const req = {
                //   "email": userDetails.userEmail,
                //   "startDate": year + "-" + ((month + 1) < 10 ? "0" + (month + 1) : (month + 1)) + "-" + (day < 10 ? "0" + day : day)
                // }

                // const response = await apiHandler.requestPost(req, serviceUrls.getMeetings)
                // //   console.log(response,"RESPONCE")
                onGotResponceMonth = month
                // onGotResponced(response, day)

                // this.props.global.loaderHide()
                // if (response.status && response.status == AppConstants.DEVICE_OFFLINE) {
                //   alert("No internet")
                // }



                // if (response && response.data.length > 0) {

                //   dateArrays = [];
                //   response.data.map((data, index, key) => {

                //     let date = new Date(data.start_date_time)

                //     if (year == date.getFullYear() && month == date.getMonth()) {
                //       dateArrays.push(date.getDate())

                //     }
                //     else {
                //       // console.log(date.toDateString(), year, month, date.getMonth())
                //     }


                //   })




                // }
                // else {
                  dateArrays = []
                // }
                onPressDay({ year, month, day })

              }


              }>


              <View style={{

                alignItems: 'center', justifyContent: 'flex-start'



              }}>

                {showBackgroundOne == false ?
                  <Text style={locked_dates && locked_dates.includes(day) ? { color: locked_dates && locked_dates.includes(day) ? '#BBBBBB' : 'grey' } : [styles.dayLabel, textStyle, custom.textStyle, selectedDayTextStyle]}>
                    {day}
                  </Text> :
                  <Text style={{
                    color: ColorConstants.primary_color,
                  }}>
                    {day}
                  </Text>

                }

                {/* {locked_dates ? <Text style={{ width: 5, height: 5, backgroundColor: 'red', borderRadius: 5 }}> </Text> : null} */}
              </View>
            </TouchableOpacity>

            {dateArrays.includes(day) && this.thisprops == true ? <Text style={{ width: 5, height: 5, backgroundColor: ColorConstants.primary_color, borderRadius: 5, marginLeft: 2.5, marginVertical: 2 }}> </Text> : <Text style={{ width: 5, height: 5, backgroundColor: ColorConstants.transparent, borderRadius: 5, marginLeft: 2.5, marginVertical: 2 }}> </Text>}


          </View>
        );
      }
    }
    else {



      // dateOutOfRange = true, and no selected start or end date.
      const custom = getCustomDateStyle({ customDatesStyles, date: thisDay });
      // Allow customDatesStyles to override disabled dates if allowDisabled set
      if (!custom.allowDisabled) {
        custom.containerStyle = null;
        custom.style = null;
        custom.textStyle = null;
      }
      return (
        <View style={[styles.dayWrapper, custom.containerStyle]}>
          <View style={[styles.dayButton, custom.style]}>
            <Text style={[textStyle, styles.disabledText, disabledDatesTextStyle, custom.textStyle]}>
              {day}
            </Text>
          </View>
        </View>
      );
    }


  }





}





function getCustomDateStyle({ customDatesStyles, date }) {
  if (Array.isArray(customDatesStyles)) {
    for (let cds of customDatesStyles) {
      if (date.isSame(moment(cds.date), 'day')) {
        return { ...cds };
      }
    }
  }
  else if (customDatesStyles instanceof Function) {
    let cds = customDatesStyles(date) || {};
    return { ...cds };
  }
  return {};
}

Day.defaultProps = {
  customDatesStyles: [],
};

Day.propTypes = {
  styles: PropTypes.shape({}),
  day: PropTypes.number,
  onPressDay: PropTypes.func,
  disabledDates: PropTypes.oneOfType([PropTypes.array, PropTypes.func]),
  minRangeDuration: PropTypes.oneOfType([PropTypes.array, PropTypes.number]),
  maxRangeDuration: PropTypes.oneOfType([PropTypes.array, PropTypes.number]),
};


export default Day