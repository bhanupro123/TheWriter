import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";
import ServiceUrls from '../network/ServiceUrls'


let serviceUrls = new ServiceUrls();

export async function getAxiosClient() {
  // const userDetails = await AsyncStorage.getItem("userDetails");
  let axiosInstance = axios.create({ timeout: 40000 });
  axiosInstance.interceptors.request.use(function (config) {
    // if (userDetails && JSON.parse(userDetails).accessToken) {
    //   var token = "Bearer " + JSON.parse(userDetails).accessToken;
    //   axiosInstance.defaults.headers.common.authorization = token;

    //   config.headers.authorization = token;
    // } else {
    //   console.log("NO TOKEN IS FOUND.. IT SHOULD NOT HAPPEN USUALLY");
    // }
    return config;
  }, function (error) {
    return promise.reject(error);
  });

  axiosInstance.interceptors.response.use(
    null,
    async (error) => {
      
      var originalRequest = error.config;
       
      if (error.message == "Network Error") {
        return Promise.reject(error);
      } else if (error && error.response && error.response.status == 504) {
        console.log("RECEIVED 504 IN INTERCEPTOR")
        return Promise.reject(error);
      } else if (error && error.response && error.response.status == 502) {
        console.log("RECEIVED 502 IN INTERCEPTOR")
        return Promise.reject(error);
      }
      else if (error && error.response && error.response.status == 404) {
        return Promise.reject(error.response);
      }
      

    //   else if (error && error.response && error.response.status == 401) {
        
    //     return new Promise(async (resolve) => {

    //       try {
    //         var userDetails = await AsyncStorage.getItem("userDetails");
    //         console.log(error,originalRequest.url) 
    //         const refreshResponse = await axios.post(serviceUrls.refreshToken, {
    //           refreshToken: JSON.parse(userDetails).refreshToken,
    //           apiKey: JSON.parse(userDetails).apiKey,
    //         },
    //         );
    //         var userVal = await AsyncStorage.getItem("userDetails")

    //         userDetails = JSON.parse(userVal);
    //         if (refreshResponse && refreshResponse.data && refreshResponse.data.idToken) {
    //           userDetails.accessToken = refreshResponse.data.idToken;
              
    //           await AsyncStorage.setItem("userDetails", JSON.stringify(userDetails))
    //           error.config.headers["Authorization"] = "Bearer " + refreshResponse.data.idToken; 
    //           await ValidateUserStories()
    //           let res = await axios(originalRequest);
               
    //           return resolve(res);
    //         }


    //       }
    //       catch (e) {

    //       }
    //       return Promise.reject(error);
    //     });

    //   }
      else if (error.code && error.code == "ECONNABORTED") {
        error.status = "Timeout Reached"
        return Promise.reject(error);
      }
      else {
        return Promise.reject(error);
      }
    }
  );
  return axiosInstance;
}



