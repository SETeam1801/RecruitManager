const baseUrl = "http://nomalocaris.top:8888/clubRecruitment/";

function Apis() {}

/**
 * 登录接口Api
 */
Apis.getLoginUrl = function () {
  return baseUrl + "managerSide/login/";
};

/**
 * 注册接口Api
 */
Apis.getRegisterUrl = function () {
  return baseUrl + "managerSide/register/";
};
