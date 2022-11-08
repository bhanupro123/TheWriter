export default class ServiceUrls {
    mainUrl = 'https://94k5ro5bxa.execute-api.ap-south-1.amazonaws.com/dev/';
    login_signup = this.mainUrl + 'users/verify-phone-number';
    otpVerify = this.mainUrl + 'users/verify-otp';
}