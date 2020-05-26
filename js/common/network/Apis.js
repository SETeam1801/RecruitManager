const baseUrl = "http://nomalocaris.top:8080/clubRecruitment/";

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

/**
 * 获取部门的url
 */
Apis.getDeptUrl = function () {
  return baseUrl + "managerSide/findDept/";
};

Apis.getPublishRecruitment = function () {
  return baseUrl + "managerSide/editRecruitment/";
};
