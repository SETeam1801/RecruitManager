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

/**
 * 发布招新信息的url
 */
Apis.getPublishRecruitment = function () {
  return baseUrl + "managerSide/editRecruitment/";
};

/**
 * 获取报名人员列表
 */
Apis.getEnrollUrl = function () {
  return baseUrl + "managerSide/findApps/";
};

Apis.getDetailUrl = function () {
  return baseUrl + "managerSide/findStu/";
};
