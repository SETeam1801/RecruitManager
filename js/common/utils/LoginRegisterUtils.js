function LoginRegisterUtils() {}

/**
 * 检测手机号码是否规范
 */
LoginRegisterUtils.check_phoNum = function(phoNum) {
    var regPhoNum = /[13,15,17,18,19]\d{9}/;
    if (!regPhoNum.test(phoNum)) {
        return false;
    } else {
        return true;
    }
};