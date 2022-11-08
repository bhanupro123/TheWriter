
import { getAxiosClient } from '../network/axiosInsta'
import ScreenNames from "../resources/constants/ScreenNames"
import StoragePref from '../network/StoragePrefs';
import ServiceUrls from '../network/ServiceUrls';
let serviceUrls = new ServiceUrls();
let storagePref = new StoragePref();

export default class ApiHandler {

    async requestPost(data, url, param, header) {
        let headers = header ? header : { headers: {} }
        console.log("POST => ", url);
        if (param) {
            return this.callAPI(url + param, data, headers);
        } else {
            return this.callAPI(url, data, headers);
        }
    }

    async requestPostMultipartBody(data, url,header) {
        let headers = header ? header : { headers: {"Content-Type" : "multipart/form-data"} }
        return this.callAPI(url, data, headers);
    }
    

    async requestPatchMultipartBody(data, url) {
        let headers = {
            "Content-Type": "multipart/form-data"
        }
        return this.PatchAPI(url, data, headers);
    }

    async requestPut(data, url, param) {
        let headers = {
            'Content-Type': 'application/json'
        }
        return this.callPutAPI(url, data, headers);
    }

    async callPutAPI(url, data, headers) {
        let responseData;
        let axiosInstance = await getAxiosClient()
        await axiosInstance.put(url, data, headers)
            .then(response => {
                responseData = response.data;
            })
            .catch(error => {
                if (error.message === 'Network Error') {
                    responseData = { status: ScreenNames.DEVICE_OFFLINE };
                } else {
                    responseData = error.message;
                }
            });
        return responseData;
    }

    async callDeleteApi(url) {
        let responseData;
        let userDetails = await storagePref.getObjectValue("userDetails");
        let universityDetails = await storagePref.getObjectValue("universityDetails");
        let axiosInstance = await getAxiosClient()

        let headers = {
            'Content-Type': 'application/json',
            "userId": userDetails && userDetails.userId ? userDetails.userId : "",
            "universityId": universityDetails && universityDetails._id ? universityDetails._id : "",
        }
        await axiosInstance.delete(url, {
            headers: headers
        })
            .then(response => {
                responseData = response.data;
            })
            .catch(error => {
                if (error.message === 'Network Error') {
                    responseData = { status: ScreenNames.DEVICE_OFFLINE };
                } else {
                    responseData = error.message;
                }
            });
        return responseData;
    }

    async requestPatch(url, data, param) {
        if (param != null && param != undefined) {
            return this.PatchAPI(url + param, data);
        } else {
            return this.PatchAPI(url, data);
        }
    }

    async requestGet(data, url) {
        return this.callGetAPI(url, data);
    }

    async perfotmHttpDeleteOpration(url, params, data) {
        let responseData;
        let axiosInstance = await getAxiosClient()
        if (data) {
            await axiosInstance.delete(url + data, params)
                .then(response => {
                    responseData = response.data
                })
                .catch(error => {
                    if (error.message === 'Network Error') {
                        responseData = { status: ScreenNames.DEVICE_OFFLINE };
                    } else {
                        responseData = error.message;
                    }
                });
        } else {
            await axiosInstance.delete(url, params)
                .then(response => {
                    responseData = response.data
                })
                .catch(error => {
                    if (error.message === 'Network Error') {
                        responseData = { status: ScreenNames.DEVICE_OFFLINE };
                    } else {
                        responseData = error;
                    }
                });
        }
        return responseData;
    }

    async callGetAPI(url, data) {
        let responseData;
        let axiosInstance = await getAxiosClient()
        let userDetails = await storagePref.getObjectValue("userDetails");
        let universityDetails = await storagePref.getObjectValue("universityDetails");
        let headerss = {
            'Content-Type': 'application/json',
            "userId": userDetails && userDetails.userId ? userDetails.userId : "",
            "universityId": universityDetails && universityDetails._id ? universityDetails._id : "",
            "x-api-key": serviceUrls.xApiKey
        }
        console.log("GET => ", url)
        await axiosInstance.get(url + data, { headers: headerss })
            .then(response => {
                responseData = response.data;
            })
            .catch(error => {
                if (error.message === 'Network Error') {
                    responseData = { status: ScreenNames.DEVICE_OFFLINE };
                } else {
                    if (error && error.data && error.data.status && error.data.status == 404) {
                        responseData = error.data;
                        return;
                    }
                    responseData = error.message;
                }
            });
        return responseData;
    }

    async callAPI(url, data, headers) {
        let responseData;
        let axiosInstance = await getAxiosClient()
        if (!url.startsWith(serviceUrls.storiesBaseUrl)) {
            headers.headers["x-api-key"] = serviceUrls.xApiKey
        }

        await axiosInstance.post(url, data, headers)
            .then(response => {
                responseData = response.data;
            })
            .catch(error => {
                if (error.message === 'Network Error') {
                    responseData = { status: ScreenNames.DEVICE_OFFLINE };
                } else {
                    responseData = error.message;
                }
            });
        return responseData;
    }

    async PatchAPI(url, data, headers) {

        let responseData;
        let axiosInstance = await getAxiosClient()
        let userDetails = await storagePref.getObjectValue("userDetails");
        let universityDetails = await storagePref.getObjectValue("universityDetails");

        let head = {
            'Content-Type': 'application/json',
            "userId": userDetails && userDetails.userId ? userDetails.userId : "",
            "universityId": universityDetails && universityDetails._id ? universityDetails._id : "",
        } 

        await axiosInstance.patch(url, data, { headers: head })
            .then(response => {
                responseData = response.data;
            })
            .catch(error => {
                if (error.message === 'Network Error') {
                    responseData = { status: ScreenNames.DEVICE_OFFLINE };
                } else {
                    responseData = error.message;
                }
            });
        return responseData;
    }
}